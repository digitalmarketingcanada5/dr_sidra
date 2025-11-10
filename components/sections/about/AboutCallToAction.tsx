import React from 'react';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';

export const AboutCallToAction: React.FC = () => {
  return (
    <Section 
      className="relative bg-cover bg-center text-white py-24 md:py-32" 
      style={{ 
        backgroundImage: "linear-gradient(rgba(44, 62, 80, 0.8), rgba(44, 62, 80, 0.8)), url('https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070')"
      }}
    >
      <div className="relative z-10 max-w-3xl mx-auto text-center border-2 border-white/50 p-8 md:p-12 rounded-lg backdrop-blur-sm bg-white/5">
        <h2 className="text-4xl md:text-5xl font-semibold mb-6">
          Ready to Transform Your Healthcare Experience?
        </h2>
        <p className="text-lg leading-relaxed mb-8">
          Experience unparalleled healthcare with Nexus Medical Centre. Our team is dedicated to 
          providing personalized treatments that enhance your wellness through innovation and compassion. 
          By booking an appointment, you're choosing quality, professionalism, and the promise of 
          optimized health. Let us help you achieve your wellness goals while embracing a future where 
          healthcare is immersive, precise, and deeply human.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            href="/contact"
            variant="primary"
            className="text-lg px-10 py-4"
          >
            Book an Appointment
          </Button>
          <Button 
            href="tel:365-694-5255"
            variant="outline"
            className="text-lg px-10 py-4 border-white text-white hover:bg-white hover:text-[#2C3E50]"
          >
            Call (365) 694-5255
          </Button>
        </div>
      </div>
    </Section>
  );
};
