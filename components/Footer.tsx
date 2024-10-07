import Link from 'next/link';
import Image from 'next/image';
import { Truck, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-white to-blue-200 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="md:flex justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-semibold mb-2 flex items-center">
              <Image src="/assets/logo.png" alt="Chatwal Trucking Logo" width="150" height="20" objectFit="cover" quality={100} priority />
            </h3>
            <p className="text-blue-900">Your Reliable Supply Chain Partner Since 2010</p>
          </div>
          <div className="space-y-2">
            <p className="flex items-center text-gray-600"><MapPin className="w-5 h-5 mr-2 text-blue-900" /> 129 Moffatt Ave, Brampton, ON, Canada</p>
            <p className="flex items-center text-gray-600"><Phone className="w-5 h-5 mr-2 text-blue-900" /> (+1) 905-796-9044</p>
            <p className="flex items-center text-gray-600"><Mail className="w-5 h-5 mr-2 text-blue-900" /> dispatch@chatwaltrucking.com</p>
          </div>
        </div>
        <div className="mt-10 text-center text-sm text-blue-900">
          <p>&copy; 2023 Chatwal Trucking Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;