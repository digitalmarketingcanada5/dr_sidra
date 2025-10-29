'use client';

import React from 'react';
import { Button } from '@/components/ui/Button';
import { ArrowRight } from 'lucide-react';

export const CircumcisionHero: React.FC = () => {
  return (
    <div
      className="relative bg-cover bg-center pt-48 pb-24 md:pt-64 md:pb-32 text-[#003e69]"
      style={{ 
        backgroundImage: "url('https://gentleprocedurestoronto.ca/wp-content/uploads/2021/01/Gentle-Procedures-Clinic_Newborn-Baby-Circumcision_Hero-1.jpg')" 
      }}
    >
      <div className="absolute inset-0 bg-white opacity-40 z-0"></div>
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl bg-white/80 backdrop-blur-sm p-8 rounded-lg shadow-lg">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#003e69]">
            Newborn Circumcision Services
          </h1>
          <h2 className="text-2xl md:text-3xl mb-6 font-light text-[#003e69]">
            Gentle & Professional Infant Circumcision
          </h2>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              href="https://book2.getweave.com/9ca18ecd-b3cb-4c47-9685-d41934436720/request-appointment?source=WEBSITE" 
              variant="primary" 
              className="bg-[#17a2b8] hover:bg-[#138496]"
            >
              Book Appointment
              <ArrowRight size={18} className="ml-2" />
            </Button>
            <Button 
              href="/contact" 
              variant="outline" 
              className="border-[#003e69] text-[#003e69] hover:bg-[#003e69] hover:text-white"
            >
              Contact Us
              <ArrowRight size={18} className="ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
