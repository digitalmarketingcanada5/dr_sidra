import React from 'react';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';

export const About: React.FC = () => {
  return (
    <Section className="bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-semibold text-[#2C3E50] mb-4">
            Our Mission
          </h2>
          <p className="text-xl text-[#5DBDC4] font-medium">
            Transforming Healthcare Through Innovation and Compassion
          </p>
        </div>

        <div className="text-[#5A5A5A] space-y-8">
          <p className="text-lg text-center leading-relaxed">
            At Nexus Medical Centre, we are committed to redefining healthcare by integrating 
            cutting-edge technology with compassionate, patient-centered care. Our mission is to 
            provide innovative medical solutions that enhance the well-being of individuals and 
            families in our community.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-[#5DBDC4] text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold text-[#2C3E50] mb-3">Our Vision</h3>
              <p className="text-sm leading-relaxed">
                To be a leader in innovative healthcare delivery, where advanced medical technology 
                meets personalized care tailored to each patient's unique needs.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-[#5DBDC4] text-4xl mb-4">💡</div>
              <h3 className="text-xl font-semibold text-[#2C3E50] mb-3">Innovation</h3>
              <p className="text-sm leading-relaxed">
                We embrace the latest medical technology including VR therapy, medical aesthetics, 
                and specialized care to provide cutting-edge treatment options.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-[#5DBDC4] text-4xl mb-4">❤️</div>
              <h3 className="text-xl font-semibold text-[#2C3E50] mb-3">Compassion</h3>
              <p className="text-sm leading-relaxed">
                Every patient is treated with care, respect, and genuine concern for their well-being 
                throughout their healthcare journey with us.
              </p>
            </div>
          </div>

          <div className="text-center mt-8">
            <Button href="/about" variant="primary">
              Learn More About Us
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
};
