import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "../ui/SectionHeading";
import { METHOD_STEPS } from "../../data/constants";
import {
  Database,
  Brain,
  CpuIcon,
  LineChart,
  FlaskRound as Flask,
  Microscope,
} from "lucide-react";

const MethodologySection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "database":
        return <Database className="h-8 w-8 text-primary-500" />;
      case "brain":
        return <Brain className="h-8 w-8 text-primary-500" />;
      case "cpu":
        return <CpuIcon className="h-8 w-8 text-primary-500" />;
      case "chart":
        return <LineChart className="h-8 w-8 text-primary-500" />;
      case "flask":
        return <Flask className="h-8 w-8 text-primary-500" />;
      case "microscope":
        return <Microscope className="h-8 w-8 text-primary-500" />;
      default:
        return <Database className="h-8 w-8 text-primary-500" />;
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Our Methodology"
          subtitle="A comprehensive approach to generating generated CT images from PET scans"
        />

        <div className="relative">
          {/* Connecting Line */}
          <div className="absolute left-[30px] md:left-1/2 top-0 bottom-0 w-1 bg-primary-100 hidden md:block"></div>

          {METHOD_STEPS.map((step, index) => (
            <motion.div
              key={step.id}
              className={`relative flex flex-col md:flex-row ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              } mb-16 last:mb-0`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              {/* Timeline Node */}
              <div className="absolute left-[30px] md:left-1/2 transform md:translate-x-[-50%] w-16 h-16 bg-white border-4 border-primary-500 rounded-full flex items-center justify-center z-10 hidden md:flex">
                <div className="text-lg font-bold text-primary-700">
                  {step.id}
                </div>
              </div>

              {/* Content Card */}
              <div
                className={`w-full md:w-[calc(50%-4rem)] ${
                  index % 2 === 0 ? "md:pr-10" : "md:pl-10"
                }`}
              >
                <div className="bg-neutral-50 p-6 rounded-xl shadow-sm">
                  <div className="flex md:hidden items-center mb-4 gap-3">
                    <div className="w-10 h-10 bg-primary-500 rounded-full flex items-center justify-center text-white font-bold">
                      {step.id}
                    </div>
                    <h3 className="text-xl font-semibold text-neutral-800">
                      {step.title}
                    </h3>
                  </div>

                  <div className="hidden md:block">
                    <h3 className="text-xl font-semibold mb-3 text-neutral-800">
                      {step.title}
                    </h3>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="hidden md:block bg-primary-50 p-3 rounded-full">
                      {getIcon(step.icon)}
                    </div>
                    <p className="text-neutral-600">{step.description}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 bg-primary-50 p-6 md:p-8 rounded-xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-semibold mb-4 text-neutral-800">
            GAN Architecture Overview
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium mb-2 text-neutral-700">
                U-Net Generator
              </h4>
              <p className="text-neutral-600 text-sm mb-4">
                Our generator follows the U-Net architecture with an
                encoder-decoder structure. The encoder compresses the input PET
                image through convolutional layers, capturing essential
                features, while the decoder reconstructs these features into a
                generated CT image. Skip connections between corresponding
                encoder and decoder layers preserve spatial information.
              </p>
              <ul className="text-sm text-neutral-600 list-disc pl-5 space-y-1">
                <li>8 encoding and 8 decoding layers</li>
                <li>Leaky ReLU activations for non-linearity</li>
                <li>Instance normalization for training stability</li>
                <li>Skip connections to preserve spatial details</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-2 text-neutral-700">
                PatchGAN Discriminator
              </h4>
              <p className="text-neutral-600 text-sm mb-4">
                The discriminator follows a PatchGAN architecture that
                classifies overlapping image patches as real or generated,
                rather than the entire image. This approach encourages
                high-frequency correctness and better structural similarity to
                real CT scans.
              </p>
              <ul className="text-sm text-neutral-600 list-disc pl-5 space-y-1">
                <li>70×70 receptive field patches</li>
                <li>5 convolutional layers with stride-2</li>
                <li>Spectral normalization for gradient stability</li>
                <li>Binary classification (real vs. generated)</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MethodologySection;
