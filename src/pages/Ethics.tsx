import React from "react";
import SectionHeading from "../components/ui/SectionHeading";
import { motion } from "framer-motion";
import EthicalConsiderations from "../components/sections/EthicalConsiderations";

const EthicsPage: React.FC = () => {
  return (
    <div className="pt-20">
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Ethical Considerations & Sustainability"
            subtitle="Section 8 from our research report"
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-neutral-50 p-6 rounded-xl mb-16"
          >
            <h3 className="text-2xl font-semibold mb-4 text-neutral-800">
              8. Ethical Considerations and Sustainability
            </h3>
            <p className="text-neutral-600 mb-6">
              As researchers in the medical imaging field, we recognize the
              importance of addressing both ethical considerations and
              sustainability aspects of our work. This section outlines our
              approach to these critical dimensions of the PET-to-CT translation
              project.
            </p>

            <div className="mb-8">
              <h4 className="text-xl font-semibold mb-3 text-neutral-800">
                8.1 Ethical Issues
              </h4>
              <p className="text-neutral-600 mb-4">
                The development and deployment of medical imaging technologies,
                including PET-to-CT synthesis, raise several ethical
                considerations that we have carefully addressed throughout our
                research process.
              </p>
            </div>

            <div className="mb-8">
              <h4 className="text-xl font-semibold mb-3 text-neutral-800">
                8.2 Sustainability
              </h4>
              <p className="text-neutral-600 mb-4">
                Our framework has been designed with sustainability
                considerations in mind, aiming to contribute positively to
                environmental, economic, and societal dimensions of healthcare
                delivery.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <EthicalConsiderations />

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-primary-50 p-8 rounded-xl"
          >
            <h3 className="text-2xl font-semibold mb-4 text-neutral-800">
              Looking Forward
            </h3>
            <p className="text-neutral-600 mb-4">
              As we continue to develop and refine our PET-to-CT translation
              technology, we remain committed to:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-neutral-600 mb-4">
              <li>
                Maintaining strict adherence to privacy regulations and ethical
                guidelines
              </li>
              <li>
                Expanding our training datasets to include more diverse patient
                populations
              </li>
              <li>
                Developing clear guidelines for clinical implementation that
                emphasize the complementary role of synthesized images
              </li>
              <li>
                Enhancing transparency in our model's decision-making processes
              </li>
              <li>
                Quantifying and optimizing the environmental benefits of our
                approach
              </li>
              <li>
                Making our technology accessible to resource-limited healthcare
                settings
              </li>
            </ul>
            <p className="text-neutral-600">
              By addressing these ethical and sustainability considerations
              proactively, we aim to ensure that our research contributes
              positively to both patient care and broader societal goals.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default EthicsPage;
