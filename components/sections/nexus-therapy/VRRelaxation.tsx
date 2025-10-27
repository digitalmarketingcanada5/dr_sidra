'use client';

import React from 'react';
import { Section } from '@/components/ui/Section';

interface Practice {
  title: string;
  subtitle: string;
  image: string;
  description: string;
  href: string;
}

const practices: Practice[] = [
  {
    title: "Safe Place, powered by AI",
    subtitle: "Unlimited access to generative AI",
    image: "https://optim.tildacdn.net/tild3036-6361-4330-b961-313137353563/-/resize/432x480/-/format/webp/mountains.jpg.webp",
    description: "Users can establish a calm space using AI to create personalized environments for relaxation and emotional regulation.",
    href: "/vr-ai-tool-for-creating-locations-mindgapai"
  },
  {
    title: "Breathing exercises in VR",
    subtitle: "In more than 40 natural environments",
    image: "https://optim.tildacdn.net/tild6433-3861-4235-a633-663239633633/-/resize/432x480/-/format/webp/vr_breathing.jpg.webp",
    description: "A virtual assistant designed to enhance breathing practices through guided exercises in immersive natural settings.",
    href: "https://www.psytechvr.com/travel-therapy-in-vr"
  },
  {
    title: "Mindfulness in VR",
    subtitle: "Body scan and other popular meditations",
    image: "https://optim.tildacdn.net/tild6435-3864-4261-a230-623533326239/-/resize/432x480/-/format/webp/meditation-in-vr.jpeg.webp",
    description: "Meditations effectively affect cognitive functions, emotional regulation, and overall mental wellbeing through immersive VR experiences.",
    href: "https://www.psytechvr.com/guided-mindfulness-meditations-in-vr"
  },
  {
    title: "Virtual travel in VR",
    subtitle: "Distract by visiting Australia or Norway",
    image: "https://optim.tildacdn.net/tild3964-3638-4264-b732-633333333439/-/resize/432x480/-/format/webp/virtual_travelling.jpg.webp",
    description: "Allows people to be distracted from hectic life and experience the therapeutic benefits of travel through immersive virtual environments.",
    href: "https://www.psytechvr.com/travel-therapy-in-vr"
  },
  {
    title: "Muscle relaxation in VR",
    subtitle: "Relax your muscles to relieve stress",
    image: "https://optim.tildacdn.net/tild3532-3461-4133-b766-393031643132/-/resize/432x480/-/format/webp/Muscle_relaxation.jpg.webp",
    description: "Immerse yourself in a relaxing atmosphere while practicing progressive muscle relaxation techniques to reduce physical tension and stress.",
    href: "#"
  },
  {
    title: "Art in VR",
    subtitle: "Brush, colors, canvas... Create!",
    image: "https://optim.tildacdn.net/tild3237-3331-4165-b735-316562656539/-/resize/432x480/-/format/webp/vr-painting.jpeg.webp",
    description: "Remove internal restrictions, get rid of anxiety, and express yourself freely through immersive art therapy experiences.",
    href: "https://www.psytechvr.com/art-therapy-in-vr"
  },
  {
    title: "Instrumental therapy in VR",
    subtitle: "Most famous instruments in VR!",
    image: "https://optim.tildacdn.net/tild3438-3737-4838-b138-313835653836/-/resize/432x480/-/format/webp/vr-music-threapy.png.webp",
    description: "Immerse yourself in the transformative power of music therapy through virtual instruments and guided musical experiences.",
    href: "#"
  },
  {
    title: "Sound therapy in VR",
    subtitle: "Sounds for relaxation",
    image: "https://optim.tildacdn.net/tild3631-3863-4262-b433-663264343730/-/resize/432x480/-/format/webp/vr-sound-therapy.png.webp",
    description: "Discover how you can use the power of sound frequencies and therapeutic audio to promote deep relaxation and healing.",
    href: "#"
  },
];

export const VRRelaxation: React.FC = () => {
  return (
    <Section className="bg-[#fbfbfd] !pt-0">
      {/* Background Image Header */}
      <div 
        className="relative min-h-[400px] md:min-h-[500px] flex items-end p-8 md:p-16 mb-16 md:mb-24 bg-cover bg-center rounded-lg overflow-hidden"
        style={{ backgroundImage: "url('https://optim.tildacdn.net/tild3332-3039-4437-a161-613334383836/-/format/webp/Relaxation-VR.jpg.webp')" }}
      >
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10 text-white max-w-lg">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            Relaxation<br/>practices
          </h2>
          <p className="text-lg md:text-xl">
            VR relaxation practices, including mindfulness meditations, virtual travelling, art therapy, 
            body relaxation, AI-powered Safe Place
          </p>
        </div>
      </div>

      {/* Grid for Relaxation Practices */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {practices.map((item, index) => (
            <a 
              key={index} 
              href={item.href} 
              className={`block group rounded-2xl overflow-hidden shadow-lg ${item.href === '#' ? 'pointer-events-none' : ''}`}
            >
              <div className="relative pt-[111%]">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" 
                />
              </div>
              <div className="p-5 bg-white">
                <h4 className="text-lg font-semibold text-[#4A4A4A] mb-2 group-hover:text-[#1f5bff] transition-colors">
                  {item.title}
                </h4>
                <p className="text-sm text-gray-600 line-clamp-3">{item.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </Section>
  );
};
