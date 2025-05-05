import React from "react";
import SectionHeading from "../components/ui/SectionHeading";
import { motion } from "framer-motion";
import Team from "../components/sections/Team";

const TeamPage: React.FC = () => {
  return (
    <div className="pt-20">
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Research Team"
            subtitle="Meet the researchers behind the PET-to-CT translation project"
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
                Our Collaborative Approach
              </h3>
              <p className="text-neutral-600 mb-4">
                This research project represents a collaborative effort bringing
                together expertise in deep learning, medical imaging, data
                science, and clinical applications. Our interdisciplinary team
                combines technical knowledge with domain expertise to address
                the challenges of medical image translation.
              </p>
              <p className="text-neutral-600">
                Each team member contributes unique skills and perspectives,
                enabling a comprehensive approach to developing and evaluating
                our PET-to-CT translation model. This collaboration has been
                essential for ensuring that our technical innovations align with
                clinical needs and practical applications.
              </p>
            </motion.div>
          </div>

          {/* Include the existing Team component */}
          <Team />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-primary-50 p-8 rounded-xl mt-16"
          >
            <h3 className="text-2xl font-semibold mb-4 text-neutral-800">
              Acknowledgements
            </h3>
            <p className="text-neutral-600 mb-4">
              We extend our sincere gratitude to the Department of Electrical
              and Electronic Engineering at the Islamic University of Technology
              for their support and resources that made this research possible.
            </p>
            <p className="text-neutral-600 mb-4">Special thanks to:</p>
            <ul className="list-disc pl-5 space-y-2 text-neutral-600 mb-4">
              <li>
                The faculty members who provided guidance and feedback
                throughout the research process
              </li>
              <li>
                Our medical partners who provided anonymized datasets essential
                for training and validation
              </li>
              <li>
                The computational resources team for providing access to GPU
                infrastructure
              </li>
              <li>
                Fellow researchers and students who participated in discussions
                and provided valuable insights
              </li>
            </ul>
            <p className="text-neutral-600">
              This work was conducted as part of the EEE 4709 course
              requirements, with the goal of advancing the application of deep
              learning techniques in medical imaging.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default TeamPage;
