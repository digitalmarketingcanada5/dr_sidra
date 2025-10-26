import React from 'react';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';

export const About: React.FC = () => {
  return (
    <Section className="bg-gray-50">
      <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        <div className="rounded-lg overflow-hidden shadow-lg">
          <img 
            src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=2070" 
            alt="Dr. Sidra Malik"
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h2 className="text-4xl md:text-5xl font-semibold text-[#2C3E50] mb-6">
            Meet Dr. Sidra Malik
          </h2>
          <div className="text-[#5A5A5A] space-y-4 leading-relaxed">
            <p className="font-medium text-lg text-[#2C3E50]">
              MBBS, BSc Hons, CFPC
            </p>
            <p>
              Dr. Sidra is a forward-thinking family physician committed to redefining patient care 
              through innovation and technology. With extensive experience in primary care and mental 
              health support, she integrates advanced tools such as VR exposure therapy to improve 
              outcomes in anxiety, phobias, and trauma-related conditions.
            </p>
            <p>
              Her clinical philosophy centers on proactive, data-informed care, empowering patients 
              with personalized strategies rather than one-size-fits-all solutions. Passionate about 
              bridging medicine with modern technology, Dr. Sidra is dedicated to building a future 
              where healthcare is immersive, precise, and deeply human.
            </p>
          </div>
          <Button href="/about" variant="outline" className="mt-8">
            Learn More About Dr. Sidra
          </Button>
        </div>
      </div>
    </Section>
  );
};
