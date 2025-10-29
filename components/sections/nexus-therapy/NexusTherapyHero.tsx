import React from 'react';
import { Button } from '@/components/ui/Button';

export const NexusTherapyHero: React.FC = () => {
  return (
    <div 
      className="relative min-h-[60vh] md:min-h-[600px] flex items-center justify-start text-white bg-cover bg-center py-20 md:py-32"
      style={{ 
        backgroundImage: "linear-gradient(rgba(44, 62, 80, 0.6), rgba(44, 62, 80, 0.6)), url('https://images.unsplash.com/photo-1617791160505-6f00504e3519?q=80&w=2070')"
      }}
    >
      <div className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Nexus Therapy
          </h1>
          <p className="text-xl md:text-2xl mb-8 font-light leading-relaxed">
            Innovation. Active. Customized therapeutics for your mental health. 
            Revolutionizing mental wellness through immersive VR experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button href="https://book2.getweave.com/9ca18ecd-b3cb-4c47-9685-d41934436720/request-appointment?source=WEBSITE" variant="primary" className="text-lg px-10 py-4">
              Book Consultation
            </Button>
            <Button 
              href="#how-it-works" 
              variant="outline" 
              className="text-lg px-10 py-4 border-white text-white hover:bg-white hover:text-[#2C3E50]"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
