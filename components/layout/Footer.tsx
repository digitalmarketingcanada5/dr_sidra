import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export const Footer: React.FC = () => {
  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'Nexus Therapy', href: '/nexus-therapy' },
    { name: 'Medical Aesthetics', href: 'https://www.thedermclinic.ca/', external: true },
    { name: 'Newborn Circumcision', href: '/newborn-circumcision' },
    { name: 'About Dr. Sidra', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <footer className="bg-[#2C3E50] text-white pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Footer Section */}
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Column 1: Logo & About */}
          <div className="space-y-6">
            <Link href="/" className="inline-block">
              <Image 
                src="/logo.png"
                alt="Nexus Medical Centre Logo"
                width={280}
                height={100}
                className="h-auto w-64"
              />
            </Link>
            <p className="text-sm text-gray-300">
              Your wellness, perfected by innovation. Redefining healthcare through precision, technology, and forward-thinking care.
            </p>
          </div>
          
          {/* Column 2: Hours */}
          <div className="space-y-4">
            <h4 className="text-xl font-semibold text-white mb-4 flex items-center">
              <Clock size={20} className="mr-2" />
              Hours
            </h4>
            <div className="text-gray-300 space-y-2">
              <p className="flex justify-between">
                <span>Mon - Fri</span>
                <span>10:00 AM - 3:00 PM</span>
              </p>
              <p className="flex justify-between">
                <span>Sat - Sun</span>
                <span>Closed</span>
              </p>
            </div>
          </div>

          {/* Column 3: Quick Links */}
          <div className="space-y-4">
            <h4 className="text-xl font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  {link.external ? (
                    <a 
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-[#5DBDC4] hover:underline"
                    >
                      {link.name}
                    </a>
                  ) : (
                    <Link 
                      href={link.href}
                      className="text-gray-300 hover:text-[#5DBDC4] hover:underline"
                    >
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
          
          {/* Column 4: Contact Us */}
          <div className="space-y-4">
            <h4 className="text-xl font-semibold text-white mb-4">Contact Us</h4>
            <div className="text-gray-300 space-y-3">
              <p className="flex items-start">
                <Phone size={18} className="mr-2 mt-1 flex-shrink-0" />
                <a href="tel:365-694-5255" className="hover:text-[#5DBDC4] hover:underline">
                  (365) 694-5255
                </a>
              </p>
              <p className="flex items-start">
                <Mail size={18} className="mr-2 mt-1 flex-shrink-0" />
                <a href="mailto:info@nexusmedcentre.com" className="hover:text-[#5DBDC4] hover:underline">
                  info@nexusmedcentre.com
                </a>
              </p>
              <p className="flex items-start">
                <MapPin size={18} className="mr-2 mt-1 flex-shrink-0" />
                <span>
                  9249 Kennedy Road, Unit 204<br />
                  Unionville, ON, L3R 3Y5
                </span>
              </p>
            </div>
          </div>
        </div>
        
        {/* Bottom Footer Section */}
        <div className="border-t border-white/20 pt-8 text-center md:text-left">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p>© {new Date().getFullYear()} Nexus Medical Centre. All rights reserved.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link href="/privacy-policy" className="hover:text-white hover:underline">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-white hover:underline">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
