import React from 'react';
import { Section, SectionHeader } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';

export const AboutHero: React.FC = () => {
  return (
    <div 
      className="relative min-h-[50vh] md:min-h-[500px] flex items-center justify-start text-white bg-cover bg-center py-20 md:py-32"
      style={{ 
        backgroundImage: "linear-gradient(rgba(44, 62, 80, 0.6), rgba(44, 62, 80, 0.6)), url('https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070')"
      }}
    >
      {/* Content */}
      <div className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            About Nexus Medical Centre
          </h1>
          <p className="text-lg md:text-xl mb-8 font-light leading-relaxed">
            Discover how we're redefining patient care through innovation and technology. 
            Meet the team dedicated to building a future where healthcare is immersive, 
            precise, and deeply human.
          </p>
          <Button 
            href="/contact"
            variant="primary"
          >
            Book an Appointment
          </Button>
        </div>
      </div>
    </div>
  );
};
