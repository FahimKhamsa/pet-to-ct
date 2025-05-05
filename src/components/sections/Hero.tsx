import React from 'react';
import { motion } from 'framer-motion';
import { Brain, ChevronDown } from 'lucide-react';
import { PROJECT_TITLE, PROJECT_SUBTITLE } from '../../data/constants';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700"></div>
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJ3aGl0ZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNMzYgMzRoLTJ2LTRoMnY0em0wLTZ2LTQuMUEyIDIgMCAwIDEgMzQgMjRoLTRhMiAyIDAgMCAxLTIgMnYyaDJ2LTJoNHYyaC4xQTIgMiAwIDAgMSAzNiAzMHoiLz48cGF0aCBkPSJNMzAgMGM4LjMgMCAxNS4zIDYuNyAxNS4zIDE1VjIwaDRsMTAgMTBIMzBsNS0xMHY2LjdDMzUgMjEuNyAzMy4zIDIwIDMwIDIwYy0zLjMgMC01IDEuNy01IDYuN1Y0MGMwIDUgMS43IDcgNSA3czUtMiA1LTd2LTQuM2wxMC0xMFY0MGMwIDguMy02LjcgMjAtMjAgMjBTMCA0OC4zIDAgNDB2LTVoMTBWMjBIMFYxNUMwIDYuNyA2LjcgMCAxNSAwaDE1eiIvPjwvZz48L3N2Zz4=')]"></div>
      
      <div className="container mx-auto px-4 z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-white mb-2"
        >
          <Brain size={60} className="mx-auto mb-6 text-primary-300" />
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-3xl md:text-5xl font-bold text-white mb-4 max-w-4xl mx-auto leading-tight"
        >
          {PROJECT_TITLE}
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto"
        >
          {PROJECT_SUBTITLE}
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link 
            to="/methodology" 
            className="px-6 py-3 bg-white text-primary-700 rounded-full font-medium hover:bg-neutral-100 transition duration-300 shadow-lg"
          >
            Explore Methodology
          </Link>
          <Link 
            to="/results" 
            className="px-6 py-3 bg-transparent border-2 border-white text-white rounded-full font-medium hover:bg-white/10 transition duration-300"
          >
            View Results
          </Link>
        </motion.div>
      </div>
      
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 0.5, 
          delay: 1,
          repeat: Infinity,
          repeatType: "reverse",
          repeatDelay: 0.5
        }}
      >
        <ChevronDown size={32} />
      </motion.div>
    </section>
  );
};

export default Hero;