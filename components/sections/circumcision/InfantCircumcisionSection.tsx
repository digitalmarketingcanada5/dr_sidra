'use client';

import React from 'react';
import { Section } from '@/components/ui/Section';

const SectionHeader: React.FC<{ title: string }> = ({ title }) => (
  <div className="mb-12">
    <h2 className="text-3xl md:text-4xl font-bold text-[#003e69]">{title}</h2>
  </div>
);

export const InfantCircumcisionSection: React.FC = () => {
  return (
    <Section className="bg-gray-50">
      <SectionHeader title="Infant Circumcision at Our Centre" />
      <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
        <p>
          Newborn and baby boys are the focus of our circumcision services at Nexus Medical Centre.
        </p>
        <p>
          We use proven circumcision techniques that are effective and minimize discomfort. Infants 
          and older babies up to a year old benefit from a gentle, professional procedure.
        </p>
        <p>
          During the procedure, babies are soothed with appropriate comfort measures to help them 
          remain calm and relaxed.
        </p>
        <p>
          At Nexus Medical Centre, it is not uncommon for babies to remain calm throughout their 
          circumcision. We truly prioritize gentle care.
        </p>
        <p>
          We recognize that warmth is part of a comfortable environment for your baby. The procedure 
          room is kept warm and comfortable to ensure your baby's wellbeing throughout the process.
        </p>
      </div>
    </Section>
  );
};
