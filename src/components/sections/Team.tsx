import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import Card from '../ui/Card';
import { TEAM_MEMBERS } from '../../data/constants';
import { LinkIcon } from 'lucide-react';

const Team: React.FC = () => {
  return (
    <section className="py-20 bg-neutral-50">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="Research Team" 
          subtitle="Meet the individuals behind this groundbreaking research"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TEAM_MEMBERS.map((member, index) => (
            <Card 
              key={member.name}
              delay={index * 0.1}
              className="overflow-hidden"
            >
              <div className="h-64 overflow-hidden">
                <img 
                  src={member.photo} 
                  alt={member.name} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1 text-neutral-800">{member.name}</h3>
                <p className="text-primary-600 font-medium mb-3">{member.role}</p>
                <p className="text-neutral-600 text-sm">{member.description}</p>
                
                {member.role !== 'Supervisor' && (
                  <div className="mt-4 flex justify-center">
                    <a 
                      href="#" 
                      className="inline-flex items-center gap-1 text-primary-600 hover:text-primary-700 transition-colors duration-200 text-sm"
                    >
                      <LinkIcon size={14} />
                      <span>Research Profile</span>
                    </a>
                  </div>
                )}
              </div>
            </Card>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 bg-white p-8 rounded-xl text-center max-w-3xl mx-auto"
        >
          <h3 className="text-xl font-semibold mb-4 text-neutral-800">Acknowledgements</h3>
          <p className="text-neutral-600 mb-4">
            This research was supported by the Department of Electrical and Electronic Engineering at the Islamic University of Technology. We extend our gratitude to the faculty and staff for their guidance and support.
          </p>
          <p className="text-neutral-600">
            Special thanks to the medical partners who provided anonymized datasets essential for training and validation, and to the computational resources team for GPU access.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Team;