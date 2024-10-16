"use client"

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Truck, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet"
import { motion, useScroll } from 'framer-motion';

const Header = ({defClass=""}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  const  defCls  = defClass ? defClass: "text-gray-700 hover:text-blue-600" ;

  useEffect(() => {
    const unsubscribe = scrollY.onChange((latest) => {
      setIsScrolled(latest > 50);
    });
    return () => unsubscribe();
  }, [scrollY]);

  const navItems = [
    { href: '#about', label: 'About' },
    { href: '#services', label: 'Services' },
    { href: '#testimonials', label: 'Testimonials' },
    { href: '/get-a-quote', label: 'Get a Quote' },
  ];

  return (
    <motion.header 
      className={`fixed w-full z-50 transition-all duration-10 ${
        isScrolled ? 'bg-white bg-opacity-95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-blue-900 flex items-center">
            <Image src="/assets/logo.webp" alt="Chatwal Trucking Logo" width="150" height="20" objectFit="cover" quality={100} priority />
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              item.href === '/get-a-quote' ? (
                <Button key={item.href} asChild variant="outline" className="bg-white text-gray-700 hover:text-white hover:bg-blue-900 transition duration-10">
                  <Link href={item.href}>{item.label}</Link>
                </Button>
              ) : (
                <Link key={item.href} href={item.href} className={`${isScrolled ? 'text-gray-700 hover:text-blue-600' : defCls }  transition duration-10`}>
                  {item.label}
                </Link>
              )
            ))}
          </div>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetTitle>Menu</SheetTitle>
              <div className="flex flex-col space-y-4 mt-4">
                {navItems.map((item) => (
                  <Link key={item.href} href={item.href} className="text-gray-700 hover:text-blue-600 transition duration-10">
                    {item.label}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </motion.header>
  );
};

export default Header;