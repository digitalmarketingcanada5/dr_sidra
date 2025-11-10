'use client';

import React from 'react';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';

export const ContactScheduleCTA: React.FC = () => {
  return (
    <Section className="bg-[#5DBDC4]">
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-serif text-white mb-6">
          Schedule Your Appointment Today!
        </h2>
        <Button 
          href="/contact" 
          variant="outline" 
          className="border-white text-white hover:bg-white hover:text-[#5DBDC4]"
        >
          Book an Appointment
        </Button>
      </div>
    </Section>
  );
};
