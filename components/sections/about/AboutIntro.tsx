import React from 'react';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';

export const AboutIntro: React.FC = () => {
  return (
    <Section className="bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-semibold text-[#2C3E50] mb-6">
            Your Health, Our Innovation: The Nexus Difference
          </h2>
        </div>
        
        <div className="text-[#5A5A5A]">
          <div className="space-y-6 leading-relaxed text-lg">
            <p>
              At Nexus Medical Centre, your wellness is our priority. Founded and led by 
              <strong className="text-[#2C3E50]"> Dr. Sidra Malik</strong>—a forward-thinking family 
              physician with credentials in MBBS, BSc Hons, and CFPC—we combine compassionate primary 
              care with cutting-edge medical innovation.
            </p>
            <p>
              Dr. Sidra is recognized for her patient-centered approach, meticulous attention to detail, 
              and commitment to evidence-based medicine. With extensive experience in primary care and 
              mental health support, she integrates advanced tools such as Virtual Reality Exposure 
              Therapy (VRET) to improve outcomes in anxiety, phobias, and trauma-related conditions.
            </p>
            <p>
              Our clinic is dedicated to making personalized, expert healthcare accessible to the entire 
              community. Whether you're seeking innovative mental health treatments, advanced medical 
              aesthetics, or compassionate newborn care, Dr. Sidra and her team ensure a welcoming 
              environment and outstanding care at every step of your journey.
            </p>
          </div>
          <div className="text-center mt-10">
            <Button 
              href="/contact"
              variant="outline"
            >
              Schedule a Consultation
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
};
