import { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { AboutHero } from '@/components/sections/about/AboutHero';
import { AboutIntro } from '@/components/sections/about/AboutIntro';
import { DrSidraProfile } from '@/components/sections/about/DrSidraProfile';
import { WhyChooseNexus } from '@/components/sections/about/WhyChooseNexus';
import { Affiliations } from '@/components/sections/about/Affiliations';
import { AboutTestimonials } from '@/components/sections/about/AboutTestimonials';
import { AboutCallToAction } from '@/components/sections/about/AboutCallToAction';

export const metadata: Metadata = {
  title: 'About Dr. Sidra Malik | Nexus Medical Centre - Innovative Healthcare',
  description: 'Meet Dr. Sidra Malik, a forward-thinking family physician integrating VR therapy and innovative technology for anxiety, phobias, and trauma treatment in Unionville, ON.',
  keywords: ['Dr. Sidra Malik', 'Family physician', 'VR therapy', 'Mental health', 'Unionville doctor', 'Nexus Medical Centre'],
};

export default function AboutPage() {
  return (
    <div className="font-sans bg-white text-[#2C3E50]">
      <Header />
      
      <main>
        <AboutHero />
        <AboutIntro />
        <DrSidraProfile />
        <WhyChooseNexus />
        <Affiliations />
        <AboutTestimonials />
        <AboutCallToAction />
      </main>
      
      <Footer />
    </div>
  );
}
