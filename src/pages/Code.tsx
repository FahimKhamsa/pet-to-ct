import React, { useEffect, useState } from "react";
import SectionHeading from "../components/ui/SectionHeading";
import { motion } from "framer-motion";
import CodeBlock from "../components/ui/CodeBlock";

const CodePage: React.FC = () => {
  const [codeContent, setCodeContent] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchCodeContent = async () => {
      try {
        const response = await fetch("/code_script.ipynb");
        const text = await response.text();

        try {
          // Parse the notebook JSON
          const notebook = JSON.parse(text);

          // Extract only the Python code from code cells
          let pythonCode = "";

          interface NotebookCell {
            cell_type: string;
            source: string[];
            metadata?: Record<string, unknown>;
            execution_count?: number | null;
            outputs?: Array<Record<string, unknown>>;
          }

          if (notebook.cells) {
            notebook.cells.forEach((cell: NotebookCell) => {
              if (cell.cell_type === "code") {
                // Skip pip install commands
                const cellCode = cell.source
                  .filter(
                    (line: string) => !line.trim().startsWith("pip install")
                  )
                  .join("");

                if (cellCode.trim()) {
                  pythonCode += cellCode + "\n\n";
                }
              }
            });
          }

          setCodeContent(pythonCode.trim());
        } catch (parseError) {
          // Fallback if JSON parsing fails
          console.error("Error parsing notebook:", parseError);
          setCodeContent(text);
        }
      } catch (error) {
        console.error("Error fetching code content:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCodeContent();
  }, []);

  return (
    <div className="pt-20">
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Project Code"
            subtitle="Implementation details of our PET-to-CT translation model"
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-neutral-50 p-6 rounded-xl mb-8"
          >
            <h3 className="text-2xl font-semibold mb-4 text-neutral-800">
              Implementation Details
            </h3>
            <p className="text-neutral-600 mb-4">
              Below is the Python code used to implement our PET-to-CT
              translation model using PyTorch. The implementation includes the
              dataset class, U-Net generator architecture, PatchGAN
              discriminator, and training/evaluation functions.
            </p>
            <p className="text-neutral-600">
              This code demonstrates the complete pipeline from data loading to
              model training and evaluation. The model architecture follows the
              pix2pix approach with modifications specific to medical imaging.
            </p>
          </motion.div>

          <div className="mb-16">
            {loading ? (
              <div className="flex justify-center items-center h-64">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-500"></div>
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <CodeBlock code={codeContent} language="python" />
              </motion.div>
            )}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-primary-50 p-8 rounded-xl"
          >
            <h3 className="text-2xl font-semibold mb-4 text-neutral-800">
              Technical Notes
            </h3>
            <ul className="list-disc pl-5 space-y-2 text-neutral-600">
              <li>
                <span className="font-medium">Dataset Preparation:</span> The
                code includes a custom dataset class for loading and
                preprocessing DICOM images.
              </li>
              <li>
                <span className="font-medium">Model Architecture:</span> We use
                a U-Net generator with skip connections and a PatchGAN
                discriminator.
              </li>
              <li>
                <span className="font-medium">Loss Functions:</span> The
                training combines adversarial loss, L1 loss, and SSIM loss for
                optimal results.
              </li>
              <li>
                <span className="font-medium">Evaluation Metrics:</span> PSNR
                and SSIM are used to quantitatively assess the quality of
                generated images.
              </li>
              <li>
                <span className="font-medium">Visualization:</span> The code
                includes functions for visualizing the results and comparing
                generated CT images with real ones.
              </li>
            </ul>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CodePage;
