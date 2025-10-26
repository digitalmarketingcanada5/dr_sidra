'use client';

import { useState } from 'react';
import { Header } from '@/components/layout/Header';
import { MobileMenu } from '@/components/layout/MobileMenu';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';
import { Services } from '@/components/sections/Services';
import { About } from '@/components/sections/About';
import { CallToAction } from '@/components/sections/CallToAction';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="font-sans bg-white text-gray-800">
      <Header onMenuOpen={() => setIsMenuOpen(true)} />
      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />

      <main>
        <Hero />
        <Services />
        <About />
        <CallToAction />
      </main>

      <Footer />
    </div>
  );
}
