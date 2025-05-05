import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import { FUTURE_WORK } from '../../data/constants';
import { ArrowUpRight } from 'lucide-react';

const FutureWork: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary-800 via-primary-700 to-primary-600 text-white">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="Future Work" 
          subtitle="Ongoing research directions and planned improvements"
          light={true}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {FUTURE_WORK.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-sm p-6 rounded-xl hover:bg-white/15 transition-colors duration-300"
            >
              <div className="flex justify-between items-start mb-3">
                <div className="bg-primary-500 text-white h-10 w-10 rounded-full flex items-center justify-center font-bold text-lg">
                  {index + 1}
                </div>
                <ArrowUpRight className="text-primary-300" />
              </div>
              <p className="text-primary-50">{item}</p>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-white/10 backdrop-blur-sm p-8 rounded-xl"
        >
          <h3 className="text-xl font-semibold mb-6 text-white">Ethical Considerations & Sustainability</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-medium text-lg mb-3 text-primary-200">Patient Data & Privacy</h4>
              <p className="text-primary-100 mb-4">
                All development and validation were conducted using anonymized datasets in compliance with institutional ethics protocols. Our research prioritizes patient confidentiality and adheres to HIPAA regulations.
              </p>
              <p className="text-primary-100">
                Implementation in clinical settings will include robust safeguards for patient data protection, with transparent consent processes for data usage in model improvement.
              </p>
            </div>
            
            <div>
              <h4 className="font-medium text-lg mb-3 text-primary-200">Environmental Impact</h4>
              <p className="text-primary-100 mb-4">
                By reducing the need for separate CT scans, our approach contributes to decreased energy consumption and lower environmental footprint of medical imaging departments.
              </p>
              <p className="text-primary-100">
                Initial calculations suggest potential energy savings of 40-60% when integrating our technology into standard PET-CT workflows, supporting healthcare sustainability initiatives.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FutureWork;