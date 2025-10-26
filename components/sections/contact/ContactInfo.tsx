'use client';

import React from 'react';
import { Section } from '@/components/ui/Section';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export const ContactInfo: React.FC = () => {
  return (
    <Section className="bg-[#FBF9F6]">
      <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        {/* Image Section */}
        <div className="relative">
          <div className="absolute top-[-10px] left-[-10px] w-[95%] h-[95%] border border-[#5DBDC4] rounded-lg z-0"></div>
          <div className="relative rounded-lg overflow-hidden shadow-lg z-10 ml-auto w-[90%]">
            <img 
              src="https://lirp.cdn-website.com/1176e333/dms3rep/multi/opt/shutterstock_2100061471-3cfd4ebd-938w.jpg" 
              alt="A woman is hugging a man from behind and smiling" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Info Section */}
        <div className="text-[#5A5A5A]">
          <h2 className="text-3xl md:text-4xl font-serif text-[#4A4A4A] mb-8">
            Contact Information
          </h2>
          <div className="space-y-6">
            <div>
              <h4 className="text-lg font-semibold text-[#4A4A4A] mb-1">Phone</h4>
              <a 
                href="tel:365-694-5255" 
                className="text-[#5A5A5A] hover:text-[#5DBDC4] hover:underline flex items-center"
              >
                <Phone size={16} className="mr-2"/> (365) 694-5255
              </a>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-[#4A4A4A] mb-1">Email</h3>
              <a 
                href="mailto:info@nexusmedicalcentre.ca" 
                className="text-[#5A5A5A] hover:text-[#5DBDC4] hover:underline flex items-center"
              >
                <Mail size={16} className="mr-2"/> info@nexusmedicalcentre.ca
              </a>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-[#4A4A4A] mb-1">Address</h3>
              <p className="flex items-start">
                <MapPin size={16} className="mr-2 mt-1 flex-shrink-0"/> 
                Unionville, Markham, Ontario, Canada
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-[#4A4A4A] mb-1">Business Hours</h3>
              <div className="flex items-start">
                <Clock size={16} className="mr-2 mt-1 flex-shrink-0"/>
                <div>
                  <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p>Saturday: 10:00 AM - 4:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};
