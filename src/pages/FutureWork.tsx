import React from "react";
import SectionHeading from "../components/ui/SectionHeading";
import { motion } from "framer-motion";
import FutureWork from "../components/sections/FutureWork";

const FutureWorkPage: React.FC = () => {
  return (
    <div className="pt-20">
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Future Work"
            subtitle="Ongoing research directions and planned improvements"
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
                Research Roadmap
              </h3>
              <p className="text-neutral-600 mb-4">
                While our current PET-to-CT translation model demonstrates
                promising results, we have identified several avenues for
                further research and improvement. Our ongoing work aims to
                address the current limitations and expand the capabilities of
                our approach.
              </p>
              <p className="text-neutral-600">
                The research roadmap outlined below represents our short-term
                and long-term goals for advancing this technology toward
                clinical implementation. We are actively pursuing collaborations
                with medical institutions to validate these approaches in
                real-world clinical settings.
              </p>
            </motion.div>
          </div>

          {/* Include the existing FutureWork component */}
          <FutureWork />

          {/* Additional content can be added here if needed */}
        </div>
      </section>
    </div>
  );
};

export default FutureWorkPage;
