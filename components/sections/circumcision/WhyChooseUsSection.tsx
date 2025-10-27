'use client';

import React from 'react';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { ArrowRight } from 'lucide-react';

const galleryImages = [
  "https://b1868167.smushcdn.com/1868167/wp-content/uploads/2020/04/Gentle-Procedures_Baby-Circumcision_Gallery4-200x300.jpg?lossy=0&strip=1&webp=1",
  "https://b1868167.smushcdn.com/1868167/wp-content/uploads/2020/04/Gentle-Procedures_Baby-Circumcision_Gallery2-1-300x200.jpg?lossy=0&strip=1&webp=1",
  "https://b1868167.smushcdn.com/1868167/wp-content/uploads/2020/04/Gentle-Procedures_Baby-Circumcision_Gallery1-1-300x200.jpg?lossy=0&strip=1&webp=1",
];

export const WhyChooseUsSection: React.FC = () => {
  return (
    <Section className="bg-white">
      <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
        <div>
          <h3 className="text-3xl font-semibold text-[#003e69] mb-6">
            Why Choose Nexus Medical Centre for Circumcision?
          </h3>
          <div className="prose max-w-none text-gray-700 space-y-4">
            <p>
              At Nexus Medical Centre, your baby's well-being is very important to us. We provide an 
              atmosphere that is warm, inviting, and stress-free for you and your family.
            </p>
            <p>
              At our clinic in Unionville, families are greeted in a friendly, professional manner. 
              We provide dedicated circumcision services with the privacy and care your family deserves.
            </p>
            <p>
              We want to create a comfortable atmosphere that caters to your baby's needs. We pride 
              ourselves in providing unique, personal service for infants getting circumcised.
            </p>
            <p>
              After the circumcision, our doctor will follow up to check on your baby's progress and 
              answer any questions that parents may have. A follow-up appointment and printed aftercare 
              instructions will be given to families as part of our professional service.
            </p>
            <p>
              Let us provide quality medical service for you and your baby in a caring environment.
            </p>
          </div>
          <Button 
            href="/contact" 
            variant="primary"
            className="mt-8 bg-[#17a2b8] hover:bg-[#138496]"
          >
            Book a Circumcision Appointment
            <ArrowRight size={18} className="ml-2" />
          </Button>
        </div>
        <div>
          <div className="space-y-4">
            {/* First Image - Full Width */}
            <img 
              src={galleryImages[0]} 
              alt="Clinic Image 1" 
              className="w-full h-auto rounded-lg shadow-md object-cover" 
            />
            {/* Second and Third Images - Side by Side */}
            <div className="grid grid-cols-2 gap-4">
              <img 
                src={galleryImages[1]} 
                alt="Clinic Image 2" 
                className="w-full h-auto rounded-lg shadow-md object-cover" 
              />
              <img 
                src={galleryImages[2]} 
                alt="Clinic Image 3" 
                className="w-full h-auto rounded-lg shadow-md object-cover" 
              />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};
