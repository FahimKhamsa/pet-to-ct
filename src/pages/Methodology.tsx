import React from "react";
import SectionHeading from "../components/ui/SectionHeading";
import { motion } from "framer-motion";
import MethodologySection from "../components/sections/Methodology";

const Methodology: React.FC = () => {
  return (
    <div className="pt-20">
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Our Methodology"
            subtitle="A comprehensive approach to generating generated CT images from PET scans"
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
                Research Approach
              </h3>
              <p className="text-neutral-600 mb-4">
                Our research employs a Generative Adversarial Network (GAN)
                approach to translate PET images into generated CT images. This
                methodology leverages the power of deep learning to learn the
                mapping between functional information in PET scans and the
                anatomical details present in CT scans.
              </p>
              <p className="text-neutral-600">
                The process involves training a generator network to produce
                generated CT images from PET inputs, while a discriminator
                network attempts to distinguish between real and generated CT
                images. Through adversarial training, the generator
                progressively improves its ability to create realistic CT images
                that preserve the anatomical information needed for clinical
                applications.
              </p>
            </motion.div>
          </div>

          {/* Include the existing Methodology component */}
          <MethodologySection />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-primary-50 p-8 rounded-xl mt-16"
          >
            <h3 className="text-2xl font-semibold mb-4 text-neutral-800">
              Technical Implementation
            </h3>
            <p className="text-neutral-600 mb-4">
              Our implementation was developed using PyTorch, a popular deep
              learning framework that provides flexibility and efficiency for
              training complex neural network architectures. The code was
              structured to allow for experimentation with different
              hyperparameters and model configurations.
            </p>
            <p className="text-neutral-600 mb-4">
              Training was conducted on NVIDIA A100 GPUs, with each model
              requiring approximately 48.5 hours to complete. We employed early
              stopping based on validation metrics to prevent overfitting and
              ensure optimal model performance.
            </p>
            <p className="text-neutral-600">
              The implementation includes comprehensive logging and
              visualization tools to monitor training progress and evaluate the
              quality of generated images throughout the development process.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Methodology;
