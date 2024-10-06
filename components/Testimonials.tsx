"use client"

import { motion } from 'framer-motion';
import Image from 'next/image';

const Testimonials = () => {
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
      id="testimonials" 
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
          What Our Clients Say
        </motion.h2>
        <motion.div 
          className="max-w-4xl mx-auto bg-blue-50 p-10 rounded-2xl shadow-xl"
          variants={itemVariants}
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <svg className="w-12 h-12 text-blue-600 mb-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
          <p className="text-2xl mb-8 text-gray-700 leading-relaxed italic">"We have worked very closely with CTI since 2011. During that time they have always been able to arrange all of our transport needs including both full loads and LTL. In addition to on time deliveries, there have been no issues with damaged product. CTI is very responsive in supplying proof of deliveries or any additional paperwork that we have requested."</p>
          <div className="flex items-center">
            <Image src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80" alt="Nick Willever" width={64} height={64} className="rounded-full mr-4" />
            <div>
              <p className="font-semibold text-lg text-blue-900">Nick Willever</p>
              <p className="text-gray-600">Office Manager, Major Food Distributor</p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Testimonials;