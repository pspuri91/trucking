"use client"

import { motion } from 'framer-motion';
import { TrendingUp } from 'lucide-react';

const Achievements = () => {
  return (
    <section id="achievements" className="py-20 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-10">Built Trust by Completing Over</h2>
        <motion.div 
          className="text-7xl font-bold mb-8"
          initial={{ scale: 0.5, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <TrendingUp className="inline-block w-20 h-20 mr-4" />
          <span>30 Deliveries per Month</span>
        </motion.div>
        <p className="text-2xl max-w-3xl mx-auto">From global corporations to emerging startups, we're the trusted choice for reliable daily deliveries.</p>
      </div>
    </section>
  );
};

export default Achievements;