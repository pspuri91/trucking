"use client"

import { motion } from 'framer-motion';
import { Truck, CheckCircle, TrendingUp } from 'lucide-react';

const Stats = () => {
  const stats = [
    { 
      title: "20 Years", 
      description: "Driving Logistics", 
      icon: TrendingUp,
      info: "Your Reliable Supply Chain Partner Since 2010"
    },
    { 
      title: "30+", 
      description: "Daily Trailer Departures", 
      icon: Truck,
      info: "Scheduled trailer departures per month. Service you can depend on."
    },
    { 
      title: "99%", 
      description: "Claim-Free Shipments", 
      icon: CheckCircle,
      info: "Enjoy peace of mind knowing your shipments are delivered safely and securely, backed by our exceptional record."
    },
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
      id="stats" 
      className="py-20 bg-gray-100"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              className="text-center p-8 bg-white rounded-2xl shadow-lg relative overflow-hidden group"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              variants={itemVariants}
            >
              {stat.icon && <stat.icon className="w-16 h-16 mx-auto mb-6 text-blue-600" />}
              <h3 className="text-5xl font-bold text-blue-900 mb-2">{stat.title}</h3>
              <p className="text-gray-600 text-lg">{stat.description}</p>
              <motion.div 
                className="absolute inset-0 bg-blue-900 text-white p-6 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-100"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              >
                <p>{stat.info}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Stats;