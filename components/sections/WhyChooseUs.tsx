import React from 'react';
import { Section, SectionHeader } from '@/components/ui/Section';
import { Lightbulb, Target, Zap } from 'lucide-react';

const features = [
  {
    icon: Lightbulb,
    title: 'Innovative Technology',
    description: 'Leveraging cutting-edge VR therapy and advanced medical tools to provide treatments that go beyond traditional healthcare.',
  },
  {
    icon: Target,
    title: 'Personalized Care',
    description: 'Data-informed, proactive strategies tailored to your unique health needs, not one-size-fits-all solutions.',
  },
  {
    icon: Zap,
    title: 'Compassionate Excellence',
    description: 'Combining medical precision with genuine care, ensuring every patient feels heard, valued, and supported.',
  },
];

export const WhyChooseUs: React.FC = () => {
  return (
    <Section className="bg-[#2C3E50] text-white">
      <SectionHeader 
        title={
          <span className="text-white">
            Why Choose Nexus Medical Centre
          </span>
        }
        subtitle={
          <span className="text-gray-300">
            We don't just treat symptoms—we optimize your health with the same precision and performance 
            you expect from the technology you trust.
          </span>
        }
      />
      <div className="grid md:grid-cols-3 gap-8">
        {features.map((feature) => {
          const Icon = feature.icon;
          return (
            <div 
              key={feature.title}
              className="bg-white/10 backdrop-blur-sm p-8 rounded-lg hover:bg-white/20 transition-all duration-300"
            >
              <Icon className="text-[#5DBDC4] mb-4" size={48} />
              <h3 className="text-2xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-300 leading-relaxed">{feature.description}</p>
            </div>
          );
        })}
      </div>
    </Section>
  );
};
