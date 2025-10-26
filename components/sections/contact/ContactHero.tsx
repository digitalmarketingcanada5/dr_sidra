'use client';

import React from 'react';
import { Button } from '@/components/ui/Button';

export const ContactHero: React.FC = () => {
  return (
    <div 
      className="relative min-h-[50vh] md:min-h-[500px] flex items-center justify-start text-white bg-cover bg-center py-20 md:py-32"
      style={{ 
        backgroundImage: "url('https://lirp.cdn-website.com/1176e333/dms3rep/multi/opt/mixed-race-model-with-head-rest-hands-watching-camera-ideal-glowy-skin-head-shoulders-crop-symmetrical-shoot-5817487c-2880w.jpg')" 
      }}
    >
      <div className="absolute inset-0 bg-[#3B4C50] opacity-40 z-10" />
      <div className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl">
          <h1 className="text-4xl md:text-6xl font-serif font-light mb-6 leading-tight">
            Contact Us
          </h1>
          <p className="text-lg md:text-xl mb-8 font-light text-gray-200">
            Reach out to Nexus Medical Centre today for all your healthcare needs. Our team is ready 
            to assist you. Contact us via phone or email for exemplary service.
          </p>
          <Button 
            href="/contact#form" 
            variant="primary"
          >
            Send Us a Message
          </Button>
        </div>
      </div>
    </div>
  );
};
