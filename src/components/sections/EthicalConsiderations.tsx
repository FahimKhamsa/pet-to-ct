import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "../ui/SectionHeading";
import { Shield, Leaf } from "lucide-react";

const EthicalConsiderations: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-neutral-50 to-neutral-100">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Ethical Considerations & Sustainability"
          subtitle="Responsible research practices and environmental impact"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white p-6 rounded-xl shadow-sm"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-primary-50 p-3 rounded-full">
                <Shield className="h-6 w-6 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-neutral-800">
                Ethical Issues
              </h3>
            </div>

            <div className="space-y-4">
              <p className="text-neutral-600">
                The development and deployment of medical imaging technologies,
                including PET-to-CT synthesis, raise several ethical
                considerations:
              </p>

              <div>
                <h4 className="font-medium text-lg mb-2 text-neutral-700">
                  1. Patient Privacy
                </h4>
                <p className="text-neutral-600">
                  The use of medical imaging data requires strict adherence to
                  privacy regulations, such as HIPAA (Health Insurance
                  Portability and Accountability Act) or GDPR (General Data
                  Protection Regulation). Ensuring that patient data is
                  anonymized and securely stored is critical to maintaining
                  trust and compliance.
                </p>
              </div>

              <div>
                <h4 className="font-medium text-lg mb-2 text-neutral-700">
                  2. Data Bias
                </h4>
                <p className="text-neutral-600">
                  The model's performance may be influenced by biases in the
                  training data, such as underrepresentation of certain
                  demographics or medical conditions. Addressing these biases is
                  essential to ensure equitable and accurate results for all
                  patient populations.
                </p>
              </div>

              <div>
                <h4 className="font-medium text-lg mb-2 text-neutral-700">
                  3. Clinical Responsibility
                </h4>
                <p className="text-neutral-600">
                  While synthesized CT images can support diagnostic workflows,
                  they should not replace real CT scans in critical
                  decision-making scenarios. Clinicians must exercise caution
                  and validate synthesized images before making diagnoses or
                  treatment plans.
                </p>
              </div>

              <div>
                <h4 className="font-medium text-lg mb-2 text-neutral-700">
                  4. Transparency
                </h4>
                <p className="text-neutral-600">
                  The decision-making process of the model should be
                  transparent, and clinicians should be informed about the
                  limitations and potential inaccuracies of synthesized images.
                </p>
              </div>

              <p className="text-neutral-600 font-medium">
                Addressing these ethical issues is crucial to ensuring the
                responsible development and deployment of the technology.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-white p-6 rounded-xl shadow-sm"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-primary-50 p-3 rounded-full">
                <Leaf className="h-6 w-6 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-neutral-800">
                Sustainability
              </h3>
            </div>

            <div className="space-y-4">
              <p className="text-neutral-600">
                The proposed framework has the potential to contribute to
                sustainability in several ways:
              </p>

              <div>
                <h4 className="font-medium text-lg mb-2 text-neutral-700">
                  1. Environmental Impact
                </h4>
                <p className="text-neutral-600">
                  By reducing the need for redundant CT scans, the framework can
                  minimize the energy consumption and carbon footprint
                  associated with medical imaging procedures.
                </p>
              </div>

              <div>
                <h4 className="font-medium text-lg mb-2 text-neutral-700">
                  2. Economic Benefits
                </h4>
                <p className="text-neutral-600">
                  Streamlining clinical workflows and reducing imaging costs can
                  make healthcare more affordable and accessible, particularly
                  in resource-limited settings.
                </p>
              </div>

              <div>
                <h4 className="font-medium text-lg mb-2 text-neutral-700">
                  3. Societal Impact
                </h4>
                <p className="text-neutral-600">
                  Improving diagnostic accuracy and efficiency can enhance
                  patient outcomes and reduce the burden on healthcare systems,
                  contributing to overall societal well-being.
                </p>
              </div>

              <p className="text-neutral-600 font-medium">
                In the long term, the framework can support sustainable
                healthcare practices by optimizing resource utilization and
                reducing waste.
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-primary-50 p-6 rounded-xl"
        >
          <h3 className="text-xl font-semibold mb-3 text-neutral-800">
            Our Commitment
          </h3>
          <p className="text-neutral-600">
            We are committed to conducting research that not only advances
            medical imaging technology but does so in a manner that respects
            patient privacy, promotes equitable healthcare access, and minimizes
            environmental impact. As we continue to develop and refine our
            PET-to-CT translation model, these ethical and sustainability
            considerations will remain central to our approach.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default EthicalConsiderations;
