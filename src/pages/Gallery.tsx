import React from "react";
import SectionHeading from "../components/ui/SectionHeading";
import { motion } from "framer-motion";
import Gallery from "../components/sections/Gallery";

const GalleryPage: React.FC = () => {
  return (
    <div className="pt-20">
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Image Gallery"
            subtitle="Visual comparison of PET scans, generated CT images, and real CT scans"
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
                Visualization Approach
              </h3>
              <p className="text-neutral-600 mb-4">
                This gallery showcases the results of our PET-to-CT translation
                model across different anatomical regions. For each case, we
                present a side-by-side comparison of the original PET scan, our
                generated CT image, and the corresponding real CT scan for
                reference.
              </p>
              <p className="text-neutral-600">
                These visual comparisons provide qualitative insights into the
                model's performance, highlighting both its strengths in
                capturing anatomical structures and its current limitations. The
                selected cases represent different anatomical regions and
                varying levels of complexity to demonstrate the model's
                generalization capabilities.
              </p>
            </motion.div>
          </div>

          {/* Include the existing Gallery component */}
          <Gallery />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-primary-50 p-8 rounded-xl mt-16"
          >
            <h3 className="text-2xl font-semibold mb-4 text-neutral-800">
              Interpretation Guide
            </h3>
            <p className="text-neutral-600 mb-4">
              When examining the images in this gallery, consider the following
              aspects:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-neutral-600 mb-4">
              <li>
                <span className="font-medium">Tissue Boundaries:</span> Observe
                how well the generated CT images capture the boundaries between
                different tissue types compared to the real CT scans.
              </li>
              <li>
                <span className="font-medium">Bone Structures:</span> Pay
                attention to the representation of bone structures, which are
                typically challenging to reconstruct from PET data alone.
              </li>
              <li>
                <span className="font-medium">Soft Tissue Contrast:</span> Note
                the contrast between different soft tissue regions, which is
                important for diagnostic purposes.
              </li>
              <li>
                <span className="font-medium">Anatomical Accuracy:</span> Assess
                the overall anatomical accuracy and whether key structures are
                preserved in the generated images.
              </li>
            </ul>
            <p className="text-neutral-600">
              These visual comparisons complement the quantitative metrics
              presented in the Results section, providing a more comprehensive
              understanding of the model's performance and potential clinical
              utility.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default GalleryPage;
