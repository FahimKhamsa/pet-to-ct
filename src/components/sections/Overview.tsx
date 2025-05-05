import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "../ui/SectionHeading";
import { Brain, RefreshCcw, LineChart, Scan } from "lucide-react";
import {
  TEAM_MEMBERS,
  INSTITUTION,
  COURSE,
  SUBMISSION_DATE,
  GROUP_NUMBER,
} from "../../data/constants";

const Overview: React.FC = () => {
  const features = [
    {
      icon: <Brain className="h-6 w-6 text-primary-500" />,
      title: "Deep Learning Translation",
      description:
        "Utilizing advanced GANs to generate generated CT images from PET data, reducing the need for multiple scans.",
    },
    {
      icon: <RefreshCcw className="h-6 w-6 text-primary-500" />,
      title: "Multimodal Fusion",
      description:
        "Bridging the gap between different imaging modalities to provide comprehensive diagnostic information.",
    },
    {
      icon: <LineChart className="h-6 w-6 text-primary-500" />,
      title: "Quantitative Analysis",
      description:
        "Rigorous evaluation using PSNR, SSIM, and clinical assessment to ensure high-quality generated images.",
    },
    {
      icon: <Scan className="h-6 w-6 text-primary-500" />,
      title: "Clinical Applicability",
      description:
        "Designed with real-world clinical workflows in mind to enhance patient care and reduce radiation exposure.",
    },
  ];

  return (
    <section className="py-20 bg-neutral-50">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Project Overview"
          subtitle="Advancing medical imaging through deep learning translation between modalities"
        />

        {/* Project Info Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-white p-6 rounded-xl shadow-sm mb-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Column - Team Members */}
            <div className="space-y-6">
              {/* Supervisor */}
              <div>
                <h4 className="text-sm font-medium text-neutral-500 mb-2">
                  Supervisor
                </h4>
                <div className="bg-neutral-50 p-4 rounded-lg">
                  <p className="text-neutral-800 font-medium">
                    {TEAM_MEMBERS[4].name} {/* Supervisor is the last member */}
                  </p>
                </div>
              </div>

              {/* Team Members */}
              <div>
                <h4 className="text-sm font-medium text-neutral-500 mb-2">
                  Team Members
                </h4>
                <div className="bg-neutral-50 p-4 rounded-lg">
                  <ul className="space-y-1">
                    {TEAM_MEMBERS.slice(0, 4).map((member) => (
                      <li key={member.name} className="text-neutral-800">
                        {member.name} {member.id && `(${member.id})`}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Right Column - Project Details */}
            <div className="space-y-6">
              <div>
                <h4 className="text-sm font-medium text-neutral-500 mb-2">
                  Group Number
                </h4>
                <div className="bg-neutral-50 p-4 rounded-lg">
                  <p className="text-neutral-800 font-medium">{GROUP_NUMBER}</p>
                </div>
              </div>

              <div>
                <h4 className="text-sm font-medium text-neutral-500 mb-2">
                  Institution
                </h4>
                <div className="bg-neutral-50 p-4 rounded-lg">
                  <p className="text-neutral-800 font-medium">{INSTITUTION}</p>
                </div>
              </div>

              <div>
                <h4 className="text-sm font-medium text-neutral-500 mb-2">
                  Course
                </h4>
                <div className="bg-neutral-50 p-4 rounded-lg">
                  <p className="text-neutral-800 font-medium">{COURSE}</p>
                </div>
              </div>

              <div>
                <h4 className="text-sm font-medium text-neutral-500 mb-2">
                  Submission Date
                </h4>
                <div className="bg-neutral-50 p-4 rounded-lg">
                  <p className="text-neutral-800 font-medium">
                    {SUBMISSION_DATE}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-4 text-neutral-800">
              The Challenge
            </h3>
            <p className="text-neutral-600 mb-4">
              Medical imaging often requires patients to undergo multiple scans
              with different modalities, including Positron Emission Tomography
              (PET) and Computed Tomography (CT). This increases radiation
              exposure, extends scheduling times, and raises healthcare costs.
            </p>
            <p className="text-neutral-600">
              While PET scans provide excellent functional information about
              metabolism and disease activity, they lack the anatomical detail
              of CT scans. Conversely, CT scans offer detailed structural
              information but little functional data.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-4 text-neutral-800">
              Our Solution
            </h3>
            <p className="text-neutral-600 mb-4">
              Our research leverages the power of Generative Adversarial
              Networks to generatedally generate CT images directly from PET
              scans, eliminating the need for patients to undergo both
              procedures separately.
            </p>
            <p className="text-neutral-600">
              By implementing a specialized U-Net generator architecture
              combined with a PatchGAN discriminator and a multi-component loss
              function, we've developed a model capable of translating
              functional PET information into anatomically accurate generated CT
              images with high fidelity.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="bg-primary-50 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2 text-neutral-800">
                {feature.title}
              </h3>
              <p className="text-neutral-600 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Overview;
