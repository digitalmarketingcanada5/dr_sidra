import React from 'react';
import { Section } from '@/components/ui/Section';

export const DrSidraProfile: React.FC = () => {
  return (
    <Section className="bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-semibold text-[#2C3E50] mb-4">
            Our Mission
          </h2>
          <p className="text-xl text-[#5DBDC4] font-medium">
            Transforming Healthcare Through Innovation and Compassion
          </p>
        </div>

        <div className="space-y-8 text-[#5A5A5A] leading-relaxed">
          <p className="text-lg text-center max-w-3xl mx-auto">
            At Nexus Medical Centre, we are committed to redefining healthcare by integrating 
            cutting-edge technology with compassionate, patient-centered care. Our mission is to 
            provide innovative medical solutions that enhance the well-being of individuals and 
            families in our community.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mt-12">
            <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-[#5DBDC4]">
              <h3 className="text-2xl font-semibold text-[#2C3E50] mb-4">Our Vision</h3>
              <p className="text-base leading-relaxed">
                To be a leader in innovative healthcare delivery, where advanced medical technology 
                meets personalized care. We envision a future where every patient receives precise, 
                effective treatment tailored to their unique needs, empowering them to achieve optimal 
                health and wellness.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-[#5DBDC4]">
              <h3 className="text-2xl font-semibold text-[#2C3E50] mb-4">Our Values</h3>
              <ul className="space-y-3 text-base">
                <li className="flex items-start">
                  <span className="text-[#5DBDC4] font-bold mr-3">•</span>
                  <span><strong>Innovation:</strong> Embracing the latest medical technology</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#5DBDC4] font-bold mr-3">•</span>
                  <span><strong>Compassion:</strong> Treating every patient with care and respect</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#5DBDC4] font-bold mr-3">•</span>
                  <span><strong>Excellence:</strong> Delivering the highest quality of care</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#5DBDC4] font-bold mr-3">•</span>
                  <span><strong>Empowerment:</strong> Supporting patients in their health journey</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md mt-8">
            <h3 className="text-2xl font-semibold text-[#2C3E50] mb-4 text-center">What Drives Us</h3>
            <p className="text-base leading-relaxed mb-6">
              We believe that healthcare should be more than treating symptoms—it should be about 
              understanding each patient's unique story and providing solutions that address the root 
              causes of health concerns. Our approach combines state-of-the-art medical technology, 
              including VR therapy, medical aesthetics, and specialized newborn care, with a deep 
              commitment to patient well-being.
            </p>
            <p className="text-base leading-relaxed">
              Every member of our team is dedicated to creating a welcoming, professional environment 
              where patients feel heard, respected, and empowered to take control of their health. 
              We strive to build lasting relationships with our patients and their families, supporting 
              them through every stage of life with expertise, innovation, and genuine care.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
};
