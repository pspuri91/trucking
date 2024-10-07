import dynamic from 'next/dynamic';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import About from '@/components/About';
import Services from '@/components/Services';
import Achievements from '@/components/Achievements';
import Footer from '@/components/Footer';

const DynamicTestimonials = dynamic(() => import('@/components/Testimonials'));
const DynamicTeam = dynamic(() => import('@/components/Team'));
const DynamicContact = dynamic(() => import('@/components/Contact'));

export default async function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header defClass="text-gray-100 hover:text-blue-400"/>
      <main className="flex-grow">
        <Hero />
        <Stats />
        <About />
        <Services />
        <Achievements />
        <DynamicTestimonials />
        <DynamicTeam />
        <DynamicContact />
      </main>
      <Footer />
    </div>
  );
}