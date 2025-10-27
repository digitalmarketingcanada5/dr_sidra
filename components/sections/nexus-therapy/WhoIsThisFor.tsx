import React from 'react';
import Link from 'next/link';
import { Section, SectionHeader } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';

const targetGroups = [
  // {
  //   title: 'For Individual Therapy',
  //   description: 'Personalized VR exposure therapy sessions tailored to your unique mental health needs and anxiety triggers.',
  //   image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=800',
  //   href: '/contact',
  // },
  {
    title: 'Custom Psycho Therapy',
    description: 'Comprehensive VR therapy system for mental health specialists to enhance treatment outcomes.',
    image: 'https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?q=80&w=800',
    href: '/contact',
  },
  // {
  //   title: 'For Health Organizations',
  //   description: 'Virtual Reality Exposure Therapy solutions for clinics and healthcare facilities.',
  //   image: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?q=80&w=800',
  //   href: '/contact',
  // },
  // {
  //   title: 'For Educational Institutions',
  //   description: 'VR therapy training and mental health programs for universities, colleges, and schools.',
  //   image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=800',
  //   href: '/contact',
  // },
  {
    title: 'For Corporate Wellness',
    description: 'Employee wellness programs featuring VR-based stress management and mental health support.',
    image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=800',
    href: '/contact',
  },
  // {
  //   title: 'For Specialized Care',
  //   description: 'Customized VR therapy solutions for specialized mental health treatment facilities.',
  //   image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=800',
  //   href: '/contact',
  // },
];

export const WhoIsThisFor: React.FC = () => {
  return (
    <Section className="bg-white">
      <SectionHeader 
        title={
          <span className="text-[#2C3E50]">
            Who <span className="font-bold">is this for?</span>
          </span>
        }
      />
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {targetGroups.map((group, index) => (
          <Link
            key={index}
            href={group.href}
            className="flex flex-col bg-gray-50 rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition-shadow duration-300"
          >
            <div className="relative h-64 overflow-hidden">
              <img 
                src={group.image} 
                alt={group.title} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <h3 className="absolute bottom-4 left-4 text-white text-xl font-semibold z-10">
                {group.title}
              </h3>
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <p className="text-gray-600 text-sm mb-4 flex-grow">
                {group.description}
              </p>
              <Button 
                href={group.href} 
                variant="primary" 
                className="mt-auto w-full rounded-full"
              >
                Learn more
              </Button>
            </div>
          </Link>
        ))}
      </div>
    </Section>
  );
};
