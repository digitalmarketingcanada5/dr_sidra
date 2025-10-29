import React from 'react';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';

export const CallToAction: React.FC = () => {
  return (
    <Section 
      className="bg-cover bg-center text-white relative" 
      style={{ 
        backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070')"
      }}
    >
      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-semibold mb-6">
          Ready to Experience Healthcare Reimagined?
        </h2>
        <p className="text-lg leading-relaxed mb-8">
          Take the first step toward optimized wellness. Whether you're seeking innovative VR therapy 
          for mental health, expert aesthetic treatments, or compassionate newborn care, our team is 
          ready to provide personalized, technology-driven healthcare that puts you first.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            href="https://book2.getweave.com/9ca18ecd-b3cb-4c47-9685-d41934436720/request-appointment?source=WEBSITE"
            variant="primary"
            className="text-lg px-10 py-4"
          >
            Book Your Appointment
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
