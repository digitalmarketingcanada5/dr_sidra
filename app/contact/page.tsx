'use client';

import React from 'react';
import { ContactHero } from '@/components/sections/contact/ContactHero';
import { ContactInfo } from '@/components/sections/contact/ContactInfo';
import { ContactForm } from '@/components/sections/contact/ContactForm';
import { ContactScheduleCTA } from '@/components/sections/contact/ContactScheduleCTA';

export default function ContactPage() {
  return (
    <main className="bg-[#fbfbfd]">
      <ContactHero />
      <ContactInfo />
      <ContactForm />
      <ContactScheduleCTA />
    </main>
  );
}
