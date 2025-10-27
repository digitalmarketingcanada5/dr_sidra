'use client';

import React from 'react';
import { CircumcisionHero } from '@/components/sections/circumcision/CircumcisionHero';
import { PainlessSection } from '@/components/sections/circumcision/PainlessSection';
import { DedicatedClinicSection } from '@/components/sections/circumcision/DedicatedClinicSection';
// import { WhyChooseUsSection } from '@/components/sections/circumcision/WhyChooseUsSection';
import { InfantCircumcisionSection } from '@/components/sections/circumcision/InfantCircumcisionSection';
import { FAQSection } from '@/components/sections/circumcision/FAQSection';
import { FinalInfoSection } from '@/components/sections/circumcision/FinalInfoSection';

export default function NewbornCircumcisionPage() {
  return (
    <main className="bg-white">
      <CircumcisionHero />
      <PainlessSection />
      <DedicatedClinicSection />
      {/* <WhyChooseUsSection /> */}
      <InfantCircumcisionSection />
      <FAQSection />
      <FinalInfoSection />
    </main>
  );
}
