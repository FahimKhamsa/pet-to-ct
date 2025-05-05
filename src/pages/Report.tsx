import React from "react";
import SectionHeading from "../components/ui/SectionHeading";
import { motion } from "framer-motion";
import { Download } from "lucide-react";

const ReportPage: React.FC = () => {
  const handleDownload = () => {
    // Create a link to download the PDF
    const link = document.createElement("a");
    link.href = "/report.pdf";
    link.download = "PET-to-CT_Research_Report.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="pt-20">
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Research Report"
            subtitle="Detailed documentation of our PET-to-CT translation research"
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-neutral-50 p-6 rounded-xl mb-8"
          >
            <h3 className="text-2xl font-semibold mb-4 text-neutral-800">
              Full Research Report
            </h3>
            <p className="text-neutral-600 mb-4">
              This comprehensive report details our research methodology,
              experimental setup, results, and conclusions regarding the
              PET-to-CT translation model using Generative Adversarial Networks.
            </p>
            <p className="text-neutral-600 mb-6">
              The document includes detailed analysis of our approach,
              quantitative metrics, visual comparisons, and future research
              directions.
            </p>

            <div className="flex justify-center mb-8">
              <button
                onClick={handleDownload}
                className="bg-primary-600 hover:bg-primary-700 text-white py-3 px-6 rounded-lg flex items-center gap-2 transition-colors duration-200"
              >
                <Download size={20} />
                <span>Download Full Report (PDF)</span>
              </button>
            </div>
          </motion.div>

          <div className="bg-white shadow-md rounded-xl overflow-hidden">
            <div className="p-4 bg-neutral-100 border-b flex justify-between items-center">
              <h4 className="font-medium">PET-to-CT Research Report</h4>
              <button
                onClick={handleDownload}
                className="bg-primary-600 hover:bg-primary-700 text-white py-1 px-3 rounded flex items-center gap-1 text-sm transition-colors duration-200"
              >
                <Download size={16} />
                <span>Download</span>
              </button>
            </div>
            <div className="h-[800px] w-full">
              <iframe
                src="/report.pdf"
                title="Research Report"
                className="w-full h-full"
                style={{ border: "none" }}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ReportPage;
