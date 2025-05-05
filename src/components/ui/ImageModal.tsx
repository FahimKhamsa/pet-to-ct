import React from "react";
import { motion } from "framer-motion";
import { X, Download } from "lucide-react";

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
  imageAlt: string;
}

const ImageModal: React.FC<ImageModalProps> = ({
  isOpen,
  onClose,
  imageSrc,
  imageAlt,
}) => {
  if (!isOpen) return null;

  const handleDownload = () => {
    // Create a temporary anchor element
    const link = document.createElement("a");
    link.href = imageSrc;
    link.download = imageAlt.replace(/\s+/g, "_").toLowerCase() + ".png";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-75"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className="relative max-w-4xl w-full bg-white rounded-xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="absolute top-4 right-4 flex space-x-2 z-10">
          <button
            onClick={handleDownload}
            className="p-2 bg-primary-500 text-white rounded-full hover:bg-primary-600 transition-colors"
            aria-label="Download image"
          >
            <Download size={20} />
          </button>
          <button
            onClick={onClose}
            className="p-2 bg-neutral-800 text-white rounded-full hover:bg-neutral-900 transition-colors"
            aria-label="Close modal"
          >
            <X size={20} />
          </button>
        </div>

        <div className="p-2">
          <div className="w-full h-full flex items-center justify-center">
            <img
              src={imageSrc}
              alt={imageAlt}
              className="max-h-[80vh] object-contain"
            />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ImageModal;
