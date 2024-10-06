"use client"

import { motion } from 'framer-motion';
import { DollarSign, MapPin, Clock, Truck } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: DollarSign,
      title: "Transparent and Competitive Pricing",
      description: "No hidden fees or surprises. Our simple pricing structure makes it easy to calculate your shipping costs."
    },
    {
      icon: MapPin,
      title: "Real-Time Tracking, Instant Updates",
      description: "Stay informed with real-time email alerts, ensuring transparency and peace of mind."
    },
    {
      icon: Clock,
      title: "Flexible Options for Your Business",
      description: "Choose Your Preferred Timeline: Next-Day Pickup or Advance Scheduling"
    },
    {
      icon: Truck,
      title: "Proven Track Record of Punctual Delivery",
      description: "Your success is our priority. We're dedicated to delivering results on time, every time, so you can focus on what matters most."
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
      id="services" 
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
          Our Services
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-12">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg"
              whileHover={{ scale: 1.03, boxShadow: "0 10px 30px -15px rgba(0, 0, 0, 0.2)" }}
              transition={{ type: "spring", stiffness: 300 }}
              variants={itemVariants}
            >
              <service.icon className="w-16 h-16 mb-6 text-blue-600" />
              <h3 className="text-2xl font-semibold mb-4 text-blue-900">{service.title}</h3>
              <p className="text-gray-700 text-lg">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Services;