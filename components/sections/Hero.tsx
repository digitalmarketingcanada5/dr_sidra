import React from 'react';
import { Button } from '@/components/ui/Button';

export const Hero: React.FC = () => {
  return (
    <div className="relative min-h-[600px] md:min-h-[700px] lg:min-h-[750px] flex items-center justify-start text-white overflow-hidden">
      {/* Background Image with overlay */}
      <div 
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center z-0"
        style={{ 
          backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('/hero.png')"
        }}
      />

      {/* Content */}
      <div className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Your Wellness, Perfected by Innovation
          </h1>
          <p className="text-lg md:text-xl mb-8 font-light leading-relaxed">
            At Nexus, we redefine healthcare through precision, technology, and forward-thinking care. 
            Designed for individuals who demand excellence, we integrate cutting-edge medical innovation 
            across every service—from advanced medical aesthetics and newborn procedures to modern 
            therapeutic care.
          </p>
          <div>
            <Button href="/contact" variant="primary" className="text-lg px-10 py-4">
              Book an Appointment
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
