import React, { useState } from "react";
import { motion } from "framer-motion";
import ImageModal from "./ImageModal";

interface ImageComparisonProps {
  petImage: string;
  generatedCTImage: string;
  realCTImage: string;
  title: string;
  description: string;
}

const ImageComparison: React.FC<ImageComparisonProps> = ({
  petImage,
  generatedCTImage,
  realCTImage,
  title,
  description,
}) => {
  const [activeTab, setActiveTab] = useState("comparison");
  const [modalImage, setModalImage] = useState<string | null>(null);
  const [modalAlt, setModalAlt] = useState("");

  const openModal = (src: string, alt: string) => {
    setModalImage(src);
    setModalAlt(alt);
  };

  const closeModal = () => {
    setModalImage(null);
  };

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      <div className="border-b border-neutral-200">
        <div className="flex">
          <button
            className={`py-3 px-4 text-sm font-medium ${
              activeTab === "comparison"
                ? "text-primary-600 border-b-2 border-primary-500"
                : "text-neutral-600 hover:text-primary-500"
            }`}
            onClick={() => setActiveTab("comparison")}
          >
            Three-way Comparison
          </button>
          <button
            className={`py-3 px-4 text-sm font-medium ${
              activeTab === "pet"
                ? "text-primary-600 border-b-2 border-primary-500"
                : "text-neutral-600 hover:text-primary-500"
            }`}
            onClick={() => setActiveTab("pet")}
          >
            PET Image
          </button>
          <button
            className={`py-3 px-4 text-sm font-medium ${
              activeTab === "generated"
                ? "text-primary-600 border-b-2 border-primary-500"
                : "text-neutral-600 hover:text-primary-500"
            }`}
            onClick={() => setActiveTab("generated")}
          >
            Generated CT
          </button>
          <button
            className={`py-3 px-4 text-sm font-medium ${
              activeTab === "real"
                ? "text-primary-600 border-b-2 border-primary-500"
                : "text-neutral-600 hover:text-primary-500"
            }`}
            onClick={() => setActiveTab("real")}
          >
            Real CT
          </button>
        </div>
      </div>

      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-neutral-600 text-sm mb-4">{description}</p>

        <div className="relative overflow-hidden rounded-lg">
          {activeTab === "comparison" && (
            <div className="grid grid-cols-3 gap-2">
              <div className="flex flex-col items-center">
                <div className="h-48 md:h-64 w-full overflow-hidden rounded-lg">
                  <img
                    src={petImage}
                    alt="PET Scan"
                    className="w-full h-full object-cover cursor-pointer"
                    onClick={() => openModal(petImage, `${title} - PET Scan`)}
                  />
                </div>
                <p className="mt-2 text-sm font-medium text-neutral-700">
                  PET Scan
                </p>
              </div>
              <div className="flex flex-col items-center">
                <div className="h-48 md:h-64 w-full overflow-hidden rounded-lg">
                  <img
                    src={generatedCTImage}
                    alt="Generated CT"
                    className="w-full h-full object-cover cursor-pointer"
                    onClick={() =>
                      openModal(generatedCTImage, `${title} - Generated CT`)
                    }
                  />
                </div>
                <p className="mt-2 text-sm font-medium text-neutral-700">
                  Generated CT
                </p>
              </div>
              <div className="flex flex-col items-center">
                <div className="h-48 md:h-64 w-full overflow-hidden rounded-lg">
                  <img
                    src={realCTImage}
                    alt="Real CT"
                    className="w-full h-full object-cover cursor-pointer"
                    onClick={() => openModal(realCTImage, `${title} - Real CT`)}
                  />
                </div>
                <p className="mt-2 text-sm font-medium text-neutral-700">
                  Real CT
                </p>
              </div>
            </div>
          )}

          {activeTab === "pet" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex justify-center"
            >
              <div className="overflow-hidden rounded-lg max-w-md">
                <img
                  src={petImage}
                  alt="PET Scan"
                  className="w-full h-full object-contain cursor-pointer"
                  onClick={() => openModal(petImage, `${title} - PET Scan`)}
                />
              </div>
            </motion.div>
          )}

          {activeTab === "generated" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex justify-center"
            >
              <div className="overflow-hidden rounded-lg max-w-md">
                <img
                  src={generatedCTImage}
                  alt="Generated CT"
                  className="w-full h-full object-contain cursor-pointer"
                  onClick={() =>
                    openModal(generatedCTImage, `${title} - Generated CT`)
                  }
                />
              </div>
            </motion.div>
          )}

          {activeTab === "real" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex justify-center"
            >
              <div className="overflow-hidden rounded-lg max-w-md">
                <img
                  src={realCTImage}
                  alt="Real CT"
                  className="w-full h-full object-contain cursor-pointer"
                  onClick={() => openModal(realCTImage, `${title} - Real CT`)}
                />
              </div>
            </motion.div>
          )}
        </div>
      </div>
      {/* Image Modal */}
      <ImageModal
        isOpen={modalImage !== null}
        onClose={closeModal}
        imageSrc={modalImage || ""}
        imageAlt={modalAlt}
      />
    </div>
  );
};

export default ImageComparison;
