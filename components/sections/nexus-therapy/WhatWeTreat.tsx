'use client';

import React from 'react';

interface Treatment {
  title: string;
  description: string;
  image: string;
}

const treatments: Treatment[] = [
  {
    title: "Fears and Phobias",
    description: "VR training that provides a safe and controlled environment to gradually expose clients to their fears, helping them overcome phobias through systematic desensitization.",
    image: "https://optim.tildacdn.net/tild3933-6238-4532-a437-333932633730/-/resize/900x700/-/format/webp/abnormal-psychology-.jpg.webp"
  },
  {
    title: "PTSD",
    description: "VR post-traumatic stress disorder training: Violence, War, and Trauma scenarios designed to help process traumatic experiences in a safe, controlled environment.",
    image: "https://optim.tildacdn.net/tild3734-3331-4538-a332-663730616531/-/resize/900x700/-/format/webp/VR-Ptsd.jpg.webp"
  },
  {
    title: "OCD",
    description: "VR training simulates scenarios common for people with OCD, helping them practice exposure and response prevention techniques in realistic virtual environments.",
    image: "https://optim.tildacdn.net/tild6363-6234-4132-b561-633539623762/-/resize/900x700/-/format/webp/ocd-vr.jpg.webp"
  },
  {
    title: "Addiction",
    description: "VR simulations to induce cravings in those dependent on substances or behaviors, allowing practice of coping strategies in a safe, controlled setting.",
    image: "https://optim.tildacdn.net/tild6265-6664-4264-a536-646265363266/-/resize/900x700/-/format/webp/VR_addictions.jpg.webp"
  },
  {
    title: "Anger",
    description: "VR training to help identify triggers, manage emotional responses, and practice anger management techniques in realistic scenarios.",
    image: "https://optim.tildacdn.net/tild3837-3937-4438-a237-643337626462/-/resize/900x700/-/format/webp/VR_anger.jpg.webp"
  },
  {
    title: "ADHD",
    description: "We'll present the first scenarios in Q4 (2024) designed to help improve focus, attention, and executive functioning skills.",
    image: "https://optim.tildacdn.net/tild3163-3932-4231-b036-383830303433/-/resize/900x700/-/format/webp/vr-adhd.jpeg.webp"
  },
];

export const WhatWeTreat: React.FC = () => {
  return (
    <section className="!pt-0 !pb-0">
      {/* VR Content Header */}
      <div className="bg-black py-16 md:py-20 text-center">
        <h2 className="text-4xl md:text-5xl font-serif text-white mb-4 font-bold">VR content</h2>
        <p className="text-lg md:text-xl text-gray-300">The most extensive library across the market</p>
      </div>

      <div className="grid md:grid-cols-2">
        {treatments.map((item, index) => (
          <div 
            key={index} 
            className="relative group overflow-hidden h-[50vh] md:h-[calc(37.5vw)]"
          >
            <img 
              src={item.image} 
              alt={item.title} 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
            />
            <div className="absolute inset-0 bg-black/60 transition-opacity duration-300"></div>
            <div className="absolute inset-0 flex items-center justify-center p-8 text-center text-white transition-opacity duration-300 opacity-100 group-hover:opacity-100">
              <div>
                <h3 className="text-4xl font-serif mb-4">{item.title}</h3>
                <p className="text-lg opacity-90">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
