"use client"

import { motion } from 'framer-motion';
import Image from 'next/image';

const Team = () => {
  const team = [
    {
      name: "Charan Chatwal",
      role: "CEO & Director",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80"
    },
    {
      name: "Taran Chatwal",
      role: "Advisor",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80"
    }
  ];

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
      id="team" 
      className="py-20 bg-gray-100"
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
          Our Leadership Team
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-12">
          {team.map((member, index) => (
            <motion.div 
              key={index}
              className="text-center bg-white p-8 rounded-2xl shadow-lg"
              whileHover={{ scale: 1.05, boxShadow: "0 10px 30px -15px rgba(0, 0, 0, 0.2)" }}
              transition={{ type: "spring", stiffness: 300 }}
              variants={itemVariants}
            >
              <Image src={member.image} alt={member.name} width={200} height={200} className="rounded-full mx-auto mb-6" />
              <h3 className="text-2xl font-semibold text-blue-900">{member.name}</h3>
              <p className="text-gray-600 text-lg">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Team;