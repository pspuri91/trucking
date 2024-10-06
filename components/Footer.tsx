import Link from 'next/link';
import { Truck, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="md:flex justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-semibold mb-2 flex items-center">
              <Truck className="w-6 h-6 mr-2" />
              Chatwal Trucking Inc.
            </h3>
            <p className="text-blue-200">Your Reliable Supply Chain Partner Since 2010</p>
          </div>
          <div className="space-y-2">
            <p className="flex items-center"><MapPin className="w-5 h-5 mr-2 text-blue-300" /> 129 Moffatt Ave, Brampton, ON, Canada</p>
            <p className="flex items-center"><Phone className="w-5 h-5 mr-2 text-blue-300" /> (+1) 905-796-9044</p>
            <p className="flex items-center"><Mail className="w-5 h-5 mr-2 text-blue-300" /> dispatch@chatwaltrucking.com</p>
          </div>
        </div>
        <div className="mt-10 text-center text-sm text-blue-200">
          <p>&copy; 2023 Chatwal Trucking Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;