import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "../ui/SectionHeading";
import ImageComparison from "../ui/ImageComparison";
import { GALLERY_IMAGES } from "../../data/constants";

interface GalleryProps {
  limit?: number;
}

const Gallery: React.FC<GalleryProps> = ({ limit }) => {
  // If limit is provided, only show that many images, otherwise show all
  const imagesToShow = limit ? GALLERY_IMAGES.slice(0, limit) : GALLERY_IMAGES;
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Image Gallery"
          subtitle="Visual comparison of PET scans, generated CT images, and real CT scans"
        />

        <div className="grid grid-cols-1 gap-8">
          {imagesToShow.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <ImageComparison
                title={image.title}
                petImage={image.petImage}
                generatedCTImage={image.generatedCTImage}
                realCTImage={image.realCTImage}
                description={image.description}
              />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 bg-neutral-50 p-8 rounded-xl"
        >
          <h3 className="text-xl font-semibold mb-4 text-neutral-800">
            Analysis Notes
          </h3>
          <p className="text-neutral-600 mb-4">
            The images presented above demonstrate both the strengths and
            limitations of our GAN-based translation approach. Notable
            observations include:
          </p>
          <ul className="space-y-3 text-neutral-600">
            <li className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-neutral-200 flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-neutral-700 text-sm font-medium">1</span>
              </div>
              <p>
                <span className="font-medium">Soft Tissue Delineation:</span>{" "}
                The generated CT images accurately capture soft tissue
                boundaries visible in the original PET scans, with proper
                density gradients evident in brain and thoracic images.
              </p>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-neutral-200 flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-neutral-700 text-sm font-medium">2</span>
              </div>
              <p>
                <span className="font-medium">
                  Bone Structure Approximation:
                </span>{" "}
                While major bone structures are present, some fine details seen
                in real CT images are not perfectly reproduced in the generated
                versions, particularly evident in case 3.
              </p>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-neutral-200 flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-neutral-700 text-sm font-medium">3</span>
              </div>
              <p>
                <span className="font-medium">Contrast Variations:</span> The
                generated CT images demonstrate appropriate Hounsfield unit
                approximations, though with slightly reduced contrast range
                compared to real CT images in some regions.
              </p>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-neutral-200 flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-neutral-700 text-sm font-medium">4</span>
              </div>
              <p>
                <span className="font-medium">Structural Consistency:</span>{" "}
                Overall anatomical structures are preserved with high fidelity,
                maintaining proper spatial relationships between different
                tissue types.
              </p>
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;
