import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import About from '@/components/About';
import Services from '@/components/Services';
import Achievements from '@/components/Achievements';
import Testimonials from '@/components/Testimonials';
import Team from '@/components/Team';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

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
        <Testimonials />
        <Team />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}