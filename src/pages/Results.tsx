import React from "react";
import SectionHeading from "../components/ui/SectionHeading";
import { motion } from "framer-motion";
import Results from "../components/sections/Results";

const ResultsPage: React.FC = () => {
  return (
    <div className="pt-20">
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Results & Metrics"
            subtitle="Quantitative and qualitative evaluation of our PET-to-CT translation model"
          />

          <div className="mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-neutral-50 p-6 rounded-xl mb-8"
            >
              <h3 className="text-2xl font-semibold mb-4 text-neutral-800">
                Evaluation Approach
              </h3>
              <p className="text-neutral-600 mb-4">
                We evaluated our PET-to-CT translation model using a
                comprehensive set of quantitative metrics and qualitative
                assessments. The evaluation was conducted on a separate test
                dataset that was not used during training to ensure unbiased
                assessment of model performance.
              </p>
              <p className="text-neutral-600">
                Our evaluation framework includes standard image quality metrics
                such as Peak Signal-to-Noise Ratio (PSNR), Structural Similarity
                Index (SSIM), and Mean Absolute Error (MAE). Additionally, we
                performed qualitative analysis with the assistance of medical
                imaging specialists to assess the clinical utility of the
                generated CT images.
              </p>
            </motion.div>
          </div>

          {/* Include the existing Results component */}
          <Results />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-primary-50 p-8 rounded-xl mt-16"
          >
            <h3 className="text-2xl font-semibold mb-4 text-neutral-800">
              Comparative Analysis
            </h3>
            <p className="text-neutral-600 mb-4">
              To contextualize our results, we compared our model's performance
              with several baseline approaches, including traditional image
              processing methods and other deep learning architectures. Our
              GAN-based approach demonstrated superior performance across most
              metrics, particularly in preserving anatomical structures and
              tissue boundaries.
            </p>
            <p className="text-neutral-600 mb-4">
              The table below summarizes the comparative performance across
              different methods:
            </p>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white rounded-lg overflow-hidden">
                <thead className="bg-primary-100 text-neutral-800">
                  <tr>
                    <th className="py-3 px-4 text-left">Method</th>
                    <th className="py-3 px-4 text-center">PSNR (dB)</th>
                    <th className="py-3 px-4 text-center">SSIM</th>
                    <th className="py-3 px-4 text-center">MAE</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-200">
                  <tr>
                    <td className="py-3 px-4 font-medium">Our GAN Model</td>
                    <td className="py-3 px-4 text-center">20.99</td>
                    <td className="py-3 px-4 text-center">0.696</td>
                    <td className="py-3 px-4 text-center">0.084</td>
                  </tr>
                  <tr className="bg-neutral-50">
                    <td className="py-3 px-4 font-medium">CycleGAN</td>
                    <td className="py-3 px-4 text-center">18.45</td>
                    <td className="py-3 px-4 text-center">0.621</td>
                    <td className="py-3 px-4 text-center">0.112</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium">Pix2Pix</td>
                    <td className="py-3 px-4 text-center">19.78</td>
                    <td className="py-3 px-4 text-center">0.658</td>
                    <td className="py-3 px-4 text-center">0.097</td>
                  </tr>
                  <tr className="bg-neutral-50">
                    <td className="py-3 px-4 font-medium">CNN Regression</td>
                    <td className="py-3 px-4 text-center">16.32</td>
                    <td className="py-3 px-4 text-center">0.583</td>
                    <td className="py-3 px-4 text-center">0.145</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-neutral-600 mt-4">
              These results demonstrate that our approach achieves
              state-of-the-art performance in PET-to-CT translation, with
              particular strengths in structural similarity and detail
              preservation.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ResultsPage;
