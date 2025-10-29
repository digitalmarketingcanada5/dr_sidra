'use client';

import React from 'react';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { ArrowRight } from 'lucide-react';

export const FinalInfoSection: React.FC = () => {
  return (
    <Section className="bg-gray-50">
      <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
        {/* Left Column */}
        <div>
          <h2 className="text-3xl font-semibold text-[#003e69] mb-6">
            Professional Medical Care
          </h2>
          <div className="prose max-w-none text-gray-700 space-y-4">
            <p>
              It is sometimes possible to get baby boys circumcised in a non-medical setting for 
              religious reasons.
            </p>
            <p>
              We strongly recommend that circumcision be performed only by trained, experienced, 
              and licensed medical doctors in a proper medical facility.
            </p>
            <p>
              If you are considering circumcision, we recommend choosing a licensed medical 
              professional with proper credentials and experience.
            </p>
          </div>
        </div>

        {/* Right Column */}
        <div>
          <h2 className="text-3xl font-semibold text-[#003e69] mb-6">
            Getting an Older Baby Circumcised
          </h2>
          <div className="prose max-w-none text-gray-700 space-y-4 mb-8">
            <p>
              Our clinic routinely performs circumcision for baby boys up to 8 months of age.
            </p>
            <p>
              Please call us anytime during clinic hours or use the contact form to let us know 
              you would like a consultation or to book a procedure.
            </p>
          </div>
          <Button 
            href="https://book2.getweave.com/9ca18ecd-b3cb-4c47-9685-d41934436720/request-appointment?source=WEBSITE" 
            variant="primary"
            className="bg-[#17a2b8] hover:bg-[#138496]"
          >
            Book a Circumcision Appointment
            <ArrowRight size={18} className="ml-2" />
          </Button>
        </div>
      </div>
    </Section>
  );
};
