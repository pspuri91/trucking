"use client"

import React, { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Truck, MapPin, Clock, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [2, 1], [1, 0.5]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

  const features = [
    { icon: Truck, text: "Reliable Transportation" },
    { icon: MapPin, text: "Canada & USA Coverage" },
    { icon: Clock, text: "On-Time Deliveries" },
    { icon: Shield, text: "Safe & Secure Shipping" },
  ];

  return (
    <section ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-r from-blue-100 to-black">
      <motion.div 
        style={{ y, opacity, scale }} 
        className="absolute inset-0 z-0"
      >
        <Image src="/assets/hero.webp" alt="Trucking on Canadian highway" layout="fill" objectFit="cover" quality={100} priority />
      </motion.div>
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
      <div className="relative z-20 text-center text-white max-w-5xl mx-auto px-6">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
        >
          Experience Reliable Truckload Shipping
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className="text-xl md:text-2xl mb-10 font-light"
        >
          Your Trusted Transportation Partner Since 2010
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className="flex justify-center space-x-4"
        >
          <Button asChild variant="outline" size="lg">
            <Link href="/get-a-quote" className="bg-transparent border-white text-white hover:text-black hover:bg-white transition duration-300">
              Get a Quote
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="#contact" className="bg-transparent border-white text-white hover:text-black hover:bg-white transition duration-300">
              Contact Us
            </Link>
          </Button>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center">
              <feature.icon className="w-12 h-12 mb-4 text-blue-100" />
              <p className="text-sm font-medium">{feature.text}</p>
            </div>
          ))}
        </motion.div>
      </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <Link href="#about">
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;