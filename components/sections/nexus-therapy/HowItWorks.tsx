import React from 'react';
import { Section, SectionHeader } from '@/components/ui/Section';
import { PlayCircle } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  return (
    <Section className="bg-gray-50" id="how-it-works">
      <SectionHeader 
        title="How it works?" 
        subtitle="Discover the innovative process behind Virtual Reality Exposure Therapy"
      />
      <div className="relative max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-xl cursor-pointer group">
        <img 
          src="https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?q=80&w=2070" 
          alt="VR Therapy Session" 
          className="w-full h-auto"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center group-hover:bg-black/40 transition-colors duration-300">
          <PlayCircle size={100} className="text-white opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300" />
        </div>
        <div className="absolute top-6 left-6 bg-[#5DBDC4] text-white px-4 py-2 rounded-lg text-sm font-semibold">
          DEMO
        </div>
        <div className="absolute bottom-6 left-6 text-white">
          <h3 className="text-3xl font-bold mb-2">Nexus VR Therapy</h3>
          <p className="text-lg">Virtual Reality Exposure Therapy system</p>
          <p className="text-base mt-1 font-light">In collaboration with PsyTech</p>
        </div>
      </div>
      
      {/* Process Steps */}
      <div className="mt-16 grid md:grid-cols-3 gap-8">
        <div className="text-center">
          <div className="w-16 h-16 bg-[#5DBDC4] rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
            1
          </div>
          <h4 className="text-xl font-semibold text-[#2C3E50] mb-3">Assessment</h4>
          <p className="text-gray-600">
            Comprehensive evaluation of your mental health needs and specific triggers to create a personalized treatment plan.
          </p>
        </div>
        
        <div className="text-center">
          <div className="w-16 h-16 bg-[#5DBDC4] rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
            2
          </div>
          <h4 className="text-xl font-semibold text-[#2C3E50] mb-3">Immersion</h4>
          <p className="text-gray-600">
            Guided VR exposure therapy sessions in controlled, safe environments designed to address your specific anxieties.
          </p>
        </div>
        
        <div className="text-center">
          <div className="w-16 h-16 bg-[#5DBDC4] rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
            3
          </div>
          <h4 className="text-xl font-semibold text-[#2C3E50] mb-3">Progress</h4>
          <p className="text-gray-600">
            Ongoing monitoring and adjustment of therapy protocols to ensure optimal outcomes and lasting results.
          </p>
        </div>
      </div>
    </Section>
  );
};
