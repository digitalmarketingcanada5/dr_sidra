import React from 'react';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';

export const AboutIntro: React.FC = () => {
  return (
    <Section className="bg-white">
      <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        <div className="relative">
          {/* Decorative border */}
          <div className="absolute top-[-10px] left-[-10px] w-[95%] h-[95%] border-2 border-[#5DBDC4] rounded-lg z-0"></div>
          {/* Image */}
          <div className="relative rounded-lg overflow-hidden shadow-lg z-10 ml-auto w-[90%]">
            <img 
              src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=2070" 
              alt="Dr. Sidra Malik at Nexus Medical Centre"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        
        <div className="text-[#5A5A5A]">
          <h2 className="text-4xl md:text-5xl font-semibold text-[#2C3E50] mb-6">
            Your Health, Our Innovation: The Nexus Difference
          </h2>
          <div className="space-y-4 leading-relaxed">
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
          <Button 
            href="/contact"
            variant="outline" 
            className="mt-8"
          >
            Schedule a Consultation
          </Button>
        </div>
      </div>
    </Section>
  );
};
