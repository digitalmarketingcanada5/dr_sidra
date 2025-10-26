'use client';

import React from 'react';
import { Section } from '@/components/ui/Section';
import Link from 'next/link';

const SectionHeader: React.FC<{ title: string }> = ({ title }) => (
  <div className="mb-12">
    <h2 className="text-3xl md:text-4xl font-bold text-[#003e69]">{title}</h2>
  </div>
);

export const DedicatedClinicSection: React.FC = () => {
  return (
    <Section className="bg-gray-50">
      <SectionHeader title="Professional Circumcision Services" />
      <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
        <p>
          Nexus Medical Centre provides professional circumcision services for baby boys up to 12 months, 
          led by experienced medical professionals who prioritize your baby's comfort and safety.
        </p>
        <p>
          Our clinic serves families across the Greater Toronto Area and Southern Ontario, offering a 
          convenient in-office procedure under local anaesthetic with excellent cosmetic results.
        </p>
        <p>
          Our team of dedicated medical professionals understands that parents are concerned about their babies, 
          and we are here to address these concerns with compassionate, expert care.
        </p>
        <p>
          Our doctor and staff are happy to assist you with any questions or concerns that you may have and are 
          available by phone or by booking a consultation.
        </p>
        <p>
          The clinic generally has appointments available, and you can{' '}
          <Link href="/contact" className="text-[#17a2b8] hover:underline">
            request an appointment now if desired
          </Link>.
        </p>
      </div>
    </Section>
  );
};
