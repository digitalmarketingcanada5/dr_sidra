'use client';

import React from 'react';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { ArrowRight } from 'lucide-react';

export const PainlessSection: React.FC = () => {
  return (
    <Section className="bg-white py-12 md:py-16">
      <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
        <div></div>
        <div className="bg-[#f0f8ff] p-8 md:p-12 rounded-lg shadow-md">
          <p className="text-2xl md:text-3xl font-light text-[#003e69] mb-6">
            Baby circumcisions at our clinic are performed with the utmost care and minimal discomfort.
          </p>
          <Button 
            href="/contact" 
            variant="primary"
            className="bg-[#17a2b8] hover:bg-[#138496]"
          >
            Ask Your Questions
            <ArrowRight size={18} className="ml-2" />
          </Button>
        </div>
      </div>
    </Section>
  );
};
