import React from "react";
import SectionHeading from "../components/ui/SectionHeading";
import { motion } from "framer-motion";
import {
  INSTITUTION,
  COURSE,
  SUBMISSION_DATE,
  TEAM_MEMBERS,
} from "../data/constants";

const About: React.FC = () => {
  return (
    <div className="pt-20">
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="About the Project"
            subtitle="Learn more about our research on PET-to-CT image translation"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-neutral-50 p-6 rounded-xl"
            >
              <h3 className="text-2xl font-semibold mb-4 text-neutral-800">
                Project Background
              </h3>
              <p className="text-neutral-600 mb-4">
                This research project was conducted at the {INSTITUTION} as part
                of the {COURSE} course. The project aims to address the
                challenges in medical imaging by developing a novel approach to
                generate generated CT images from PET scans using Generative
                Adversarial Networks (GANs).
              </p>
              <p className="text-neutral-600">
                Medical imaging plays a crucial role in diagnosis and treatment
                planning. However, patients often need to undergo multiple scans
                with different modalities, increasing radiation exposure,
                extending scheduling times, and raising healthcare costs. Our
                research seeks to mitigate these issues by enabling the
                generation of generated CT images directly from PET scans.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-neutral-50 p-6 rounded-xl"
            >
              <h3 className="text-2xl font-semibold mb-4 text-neutral-800">
                Research Objectives
              </h3>
              <ul className="list-disc pl-5 space-y-2 text-neutral-600">
                <li>
                  Develop a GAN-based model for translating PET images to
                  generated CT images
                </li>
                <li>
                  Evaluate the quality of generated CT images using quantitative
                  metrics
                </li>
                <li>
                  Assess the clinical applicability of the generated CT images
                </li>
                <li>Identify limitations and areas for future improvement</li>
                <li>
                  Contribute to reducing patient radiation exposure and
                  healthcare costs
                </li>
              </ul>
              <p className="mt-4 text-neutral-600">
                Submitted on: {SUBMISSION_DATE}
              </p>
            </motion.div>
          </div>

          {/* Team Members and Project Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white p-6 rounded-xl shadow-sm mb-16"
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
                      {TEAM_MEMBERS[4].name}{" "}
                      {/* Supervisor is the last member */}
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
                          {member.name}
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
                    Institution
                  </h4>
                  <div className="bg-neutral-50 p-4 rounded-lg">
                    <p className="text-neutral-800 font-medium">
                      {INSTITUTION}
                    </p>
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

          <div className="bg-primary-50 p-8 rounded-xl">
            <h3 className="text-2xl font-semibold mb-4 text-neutral-800">
              Significance
            </h3>
            <p className="text-neutral-600 mb-4">
              The ability to generate generated CT images from PET scans has
              significant implications for clinical practice. It can reduce the
              need for multiple imaging procedures, decrease radiation exposure,
              streamline clinical workflows, and potentially lower healthcare
              costs while maintaining diagnostic accuracy.
            </p>
            <p className="text-neutral-600">
              Our research contributes to the growing field of medical image
              translation and demonstrates the potential of deep learning
              techniques in healthcare applications. The findings from this
              project may inform future developments in multimodal medical
              imaging and patient care optimization.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
