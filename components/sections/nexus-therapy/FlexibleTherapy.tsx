import React from 'react';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { CheckCircle2 } from 'lucide-react';

const features = [
  'Explore clinical applications of VR',
  'Enhance exposure therapy protocols',
  'Increase patient engagement',
  'Overcome barriers to traditional therapy',
  'Data-driven progress tracking',
  'Customizable treatment environments',
];

export const FlexibleTherapy: React.FC = () => {
  return (
    <Section className="bg-white">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#2C3E50] mb-6 leading-tight">
            Learn how to use VR for mental health therapy
          </h2>
        </div>
        <div>
          <p className="text-xl text-gray-700 mb-8 leading-relaxed">
            Discover our innovative approach to integrating Virtual Reality into therapeutic protocols. 
            Our evidence-based methodology provides mental health professionals with the knowledge and 
            skills to transform patient care.
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <CheckCircle2 className="w-6 h-6 text-[#5DBDC4] mr-3 flex-shrink-0 mt-1" />
                <span className="text-[#2C3E50] font-medium">{feature}</span>
              </li>
            ))}
          </ul>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button href="/contact" variant="primary" className="rounded-full">
              Schedule Consultation
            </Button>
            <Button href="/about" variant="outline" className="rounded-full">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
};
