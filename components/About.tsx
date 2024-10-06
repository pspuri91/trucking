"use client"

import { motion } from 'framer-motion';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <motion.section 
      id="about" 
      className="py-20 bg-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <div className="container mx-auto px-6">
        <motion.h2 
          className="text-4xl font-bold text-center mb-16 text-blue-900"
          variants={itemVariants}
        >
          About Chatwal Trucking Inc.
        </motion.h2>
        <motion.div className="text-center max-w-4xl mx-auto" variants={itemVariants}>
          <p className="text-xl mb-6 text-gray-700 leading-relaxed">Experience the ease of truckload shipping with our expert team. We offer reliable transportation services throughout Canada and the United States, ensuring your shipments arrive safely and on time.</p>
          <p className="text-xl text-gray-700 leading-relaxed">With 20 years of driving logistics excellence, Chatwal Trucking Inc. has been your reliable supply chain partner since 2010.</p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;