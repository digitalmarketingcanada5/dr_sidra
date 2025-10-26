import React from 'react';
import { Section, SectionHeader } from '@/components/ui/Section';
import Link from 'next/link';

const affiliations = [
  {
    name: 'Bay West Medical',
    description: 'Dr. Sidra Malik is affiliated with Bay West Medical, providing comprehensive family medicine services.',
    logo: 'https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?q=80&w=200', // Placeholder
    link: 'https://baywestmedical.ca/physicians/dr-sidra-malik',
  },
];

export const Affiliations: React.FC = () => {
  return (
    <Section className="bg-white">
      <SectionHeader 
        title="Professional Affiliations"
        subtitle="Nexus Medical Centre is proud to maintain professional relationships with leading healthcare organizations, reflecting our ongoing commitment to the highest standards in patient care, continuing education, and evidence-based practice."
      />
      <div className="max-w-3xl mx-auto">
        {affiliations.map((affiliation, index) => (
          <div 
            key={index}
            className="bg-gray-50 p-8 rounded-lg shadow-md border border-gray-200"
          >
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="flex-shrink-0">
                <div className="w-32 h-32 bg-white rounded-lg shadow-sm flex items-center justify-center p-4">
                  <img 
                    src={affiliation.logo}
                    alt={`${affiliation.name} logo`}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              </div>
              <div className="flex-grow text-center md:text-left">
                <h3 className="text-2xl font-semibold text-[#2C3E50] mb-3">
                  {affiliation.name}
                </h3>
                <p className="text-[#5A5A5A] leading-relaxed mb-4">
                  {affiliation.description}
                </p>
                <a 
                  href={affiliation.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-[#5DBDC4] hover:text-[#4da9af] font-medium transition-colors"
                >
                  Learn More →
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};
