'use client';

import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Section } from '@/components/ui/Section';

interface Exposure {
  title: string;
  description: string;
  image: string;
  href: string;
}

const exposures: Exposure[] = [
  {
    title: "Aerophobia (airplanes & flying)",
    description: "Fear of flying can arise after a traumatic case or develop gradually. VR exposure therapy helps clients overcome this fear through controlled, gradual exposure.",
    image: "https://static.tildacdn.net/tild6262-3932-4238-a564-653733306564/psytech-vr-aerophobi.gif",
    href: "https://www.psytechvr.com/train-aerophobia-in-vr"
  },
  {
    title: "Amaxophobia (driving & being a passenger)",
    description: "Amaxophobia is a term used to describe the fear of riding in a car or driving. VR therapy provides a safe environment to practice and overcome this fear.",
    image: "https://optim.tildacdn.net/tild6439-6539-4234-a463-366432383232/-/resize/480x480/-/format/webp/fear-of-driving.jpg.webp",
    href: "https://www.psytechvr.com/train-amaxophobia-in-vr"
  },
  {
    title: "Glossophobia (public speaking)",
    description: "Glossophobia - public speaking fear - is widespread. VR simulations allow practice in front of virtual audiences to build confidence and skills.",
    image: "https://optim.tildacdn.net/tild3132-3030-4534-b139-316436633535/-/resize/480x480/-/format/webp/psytech-vr-public-sp.jpg.webp",
    href: "https://www.psytechvr.com/train-public-speaking-with-psytech-vr"
  },
  // {
  //   title: "Germophobia (bacteria & germs)",
  //   description: "Germophobia is the fear of BACTERIA, diseases, viruses. VR exposure therapy helps clients gradually confront and manage these fears.",
  //   image: "https://optim.tildacdn.net/tild6330-6539-4633-a464-636265346232/-/resize/480x480/-/format/webp/germophobia-Psytechv.jpeg.webp",
  //   href: "https://www.psytechvr.com/train-germophobia-in-vr"
  // },
  {
    title: "Insectophobia (cockroaches, flies, etc.)",
    description: "People avoid life circumstances where it is possible to encounter insects. VR therapy provides controlled exposure to help overcome these fears.",
    image: "https://optim.tildacdn.net/tild6535-3930-4135-a631-343335373866/-/resize/480x480/-/format/webp/psytech-vr-insectoph.jpg.webp",
    href: "https://www.psytechvr.com/forget-about-insectophobia-in-vr"
  },
  {
    title: "Nyctophobia (darkness)",
    description: "Nyctophobia is an extreme fear of the dark. VR exposure allows gradual adjustment to darkness in a safe, controlled environment.",
    image: "https://optim.tildacdn.net/tild6339-6263-4566-b530-343966313231/-/resize/480x480/-/format/webp/psytech-vr-germophob.jpg.webp",
    href: "https://www.psytechvr.com/train-nyctophobia-in-vr"
  },
  // {
  //   title: "Mysophobia (unsanitary conditions)",
  //   description: "Mysophobia is an obsessive state of painful fear of contamination. VR therapy helps manage anxiety through gradual exposure.",
  //   image: "https://optim.tildacdn.net/tild6663-3237-4763-a539-366363303230/-/resize/480x480/-/format/webp/psytech-vr-dirt.jpg.webp",
  //   href: "https://www.psytechvr.com/train-mysophobia-in-vr"
  // },
  {
    title: "Trypanophobia (needles & syringes)",
    description: "Trypanophobia is a term used to describe the fear of injections. VR exposure therapy helps desensitize and overcome needle-related anxiety.",
    image: "https://optim.tildacdn.net/tild6434-3333-4137-b961-373036376239/-/resize/480x480/-/format/webp/fear-of-needles.jpg.webp",
    href: "https://www.psytechvr.com/train-trypanophobia-in-vr"
  },
];

const SectionHeader: React.FC<{ title: string; subtitle?: string }> = ({ title, subtitle }) => (
  <div className="text-center max-w-3xl mx-auto mb-12 md:mb-20">
    <h2 className="text-4xl md:text-5xl font-serif text-[#414042] mb-4 font-bold">{title}</h2>
    {subtitle && <p className="text-lg md:text-xl text-[#5A5A5A] leading-relaxed">{subtitle}</p>}
  </div>
);

export const VRExposures: React.FC = () => {
  return (
    <Section className="bg-[#fbfbfd]">
      <SectionHeader 
        title="Some of the VR exposures" 
        subtitle="We publish new scenarios every month" 
      />
      
      {/* Simple Horizontal Scroll Container for Mobile/Tablet */}
      <div className="lg:hidden flex overflow-x-auto space-x-4 pb-4 scrollbar-hide">
        {exposures.map((item, index) => (
          <a 
            key={index} 
            href={item.href} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex-shrink-0 w-72 h-72 block rounded-lg overflow-hidden shadow-lg relative group"
          >
            <img 
              src={item.image} 
              alt={item.title} 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/30"></div>
            <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
              <h4 className="text-lg font-semibold mb-1 line-clamp-2">{item.title}</h4>
              <p className="text-xs line-clamp-3 mb-2 opacity-80">{item.description}</p>
              <ArrowRight size={16} className="absolute bottom-4 right-4 opacity-70 group-hover:opacity-100 transition-opacity" />
            </div>
          </a>
        ))}
      </div>
      
      {/* Grid Layout for Desktop */}
      <div className="hidden lg:grid grid-cols-4 gap-6">
        {exposures.map((item, index) => (
          <a 
            key={index} 
            href={item.href} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="aspect-square block rounded-lg overflow-hidden shadow-lg relative group"
          >
            <img 
              src={item.image} 
              alt={item.title} 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/30 transition-opacity duration-300 opacity-100 group-hover:opacity-100"></div>
            <div className="absolute bottom-0 left-0 right-0 p-4 text-white transition-all duration-300 opacity-100 group-hover:opacity-100 translate-y-0 group-hover:-translate-y-0">
              <h4 className="text-lg font-semibold mb-1 line-clamp-2">{item.title}</h4>
              <p className="text-xs line-clamp-3 mb-2 opacity-0 group-hover:opacity-80 transition-opacity duration-300">{item.description}</p>
              <ArrowRight size={16} className="absolute bottom-4 right-4 opacity-70 group-hover:opacity-100 transition-opacity" />
            </div>
          </a>
        ))}
      </div>
      
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </Section>
  );
};
