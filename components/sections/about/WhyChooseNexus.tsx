import React from 'react';
import { Section, SectionHeader } from '@/components/ui/Section';
import { Award, Users, Heart } from 'lucide-react';

const reasons = [
  {
    title: 'Innovative Technology',
    description: 'We leverage cutting-edge VR therapy and advanced medical tools to provide treatments that go beyond traditional healthcare approaches.',
    icon: Award,
  },
  {
    title: 'Patient-Centered Care',
    description: 'We offer a welcoming atmosphere where you feel relaxed and valued, ensuring a seamless and positive experience during your visit.',
    icon: Users,
  },
  {
    title: 'Personalized Approach',
    description: 'We tailor personalized treatments to address your unique health needs, ensuring optimal results and a truly customized care experience.',
    icon: Heart,
  },
];

export const WhyChooseNexus: React.FC = () => {
  return (
    <Section className="bg-[#5DBDC4] bg-opacity-10">
      <SectionHeader 
        title="Why Choose Nexus Medical Centre?"
        subtitle="Experience healthcare that combines innovation, compassion, and expertise for optimal wellness outcomes."
      />
      <div className="grid md:grid-cols-3 gap-8 text-center">
        {reasons.map((reason, index) => {
          const Icon = reason.icon;
          return (
            <div 
              key={index} 
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex justify-center mb-4">
                <div className="bg-[#5DBDC4] bg-opacity-20 p-4 rounded-full">
                  <Icon className="text-[#5DBDC4]" size={40} />
                </div>
              </div>
              <h3 className="text-2xl font-semibold text-[#2C3E50] mb-4">
                {reason.title}
              </h3>
              <p className="text-[#5A5A5A] leading-relaxed">
                {reason.description}
              </p>
            </div>
          );
        })}
      </div>
    </Section>
  );
};
