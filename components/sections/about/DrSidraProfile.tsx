import React from 'react';
import { Section, SectionHeader } from '@/components/ui/Section';

export const DrSidraProfile: React.FC = () => {
  return (
    <Section className="bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-semibold text-[#2C3E50] mb-4">
            Meet Dr. Sidra Malik
          </h2>
          <p className="text-xl text-[#5DBDC4] font-medium">
            MBBS, BSc Hons, CFPC
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="md:col-span-1">
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=2070" 
                alt="Dr. Sidra Malik"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
          
          <div className="md:col-span-2 space-y-6 text-[#5A5A5A] leading-relaxed">
            <p className="text-lg">
              Dr. Sidra is a forward-thinking family physician committed to redefining patient care 
              through innovation and technology. With extensive experience in primary care and mental 
              health support, she integrates advanced tools such as VR exposure therapy to improve 
              outcomes in anxiety, phobias, and trauma-related conditions.
            </p>
            
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-[#5DBDC4]">
              <h3 className="text-xl font-semibold text-[#2C3E50] mb-3">Clinical Philosophy</h3>
              <p>
                Her clinical philosophy centers on proactive, data-informed care, empowering patients 
                with personalized strategies rather than one-size-fits-all solutions. Passionate about 
                bridging medicine with modern technology, Dr. Sidra is dedicated to building a future 
                where healthcare is immersive, precise, and deeply human.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-[#5DBDC4] bg-opacity-10 p-4 rounded-lg">
                <h4 className="font-semibold text-[#2C3E50] mb-2">Areas of Expertise</h4>
                <ul className="text-sm space-y-1">
                  <li>• Primary Care Medicine</li>
                  <li>• Mental Health Support</li>
                  <li>• VR Exposure Therapy</li>
                  <li>• Preventive Healthcare</li>
                </ul>
              </div>
              
              <div className="bg-[#5DBDC4] bg-opacity-10 p-4 rounded-lg">
                <h4 className="font-semibold text-[#2C3E50] mb-2">Professional Focus</h4>
                <ul className="text-sm space-y-1">
                  <li>• Anxiety & Phobias</li>
                  <li>• Trauma-Related Conditions</li>
                  <li>• Innovative Therapeutics</li>
                  <li>• Patient Empowerment</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#2C3E50] text-white p-8 rounded-lg text-center">
          <p className="text-lg italic mb-4">
            "I believe in empowering patients with personalized strategies and cutting-edge technology 
            to achieve optimal health outcomes. Healthcare should be immersive, precise, and deeply human."
          </p>
          <p className="font-semibold">— Dr. Sidra Malik</p>
        </div>
      </div>
    </Section>
  );
};
