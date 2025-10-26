import React from 'react';
import { Section, SectionHeader } from '@/components/ui/Section';
import { Star } from 'lucide-react';

const testimonials = [
  {
    text: "Dr. Sidra's innovative approach with VR therapy has transformed my treatment for anxiety. I feel more in control and confident than ever before.",
    author: "Sarah M.",
    rating: 5,
  },
  {
    text: "The personalized care at Nexus Medical Centre is outstanding. Dr. Sidra takes the time to truly understand my health needs and provides tailored solutions.",
    author: "James L.",
    rating: 5,
  },
  {
    text: "I appreciate the combination of cutting-edge technology and compassionate care. Nexus is redefining what modern healthcare should be.",
    author: "Emily R.",
    rating: 5,
  },
];

export const AboutTestimonials: React.FC = () => {
  return (
    <Section className="bg-[#5DBDC4] bg-opacity-10">
      <SectionHeader 
        title="What Our Patients Say"
        subtitle="Discover why our patients trust us with their healthcare. Their experiences reflect our commitment to exceptional, personalized care."
      />
      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <div 
            key={index}
            className="bg-white p-8 rounded-lg shadow-lg text-center"
          >
            <div className="flex justify-center mb-4">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star key={i} size={20} className="text-yellow-400" fill="currentColor" />
              ))}
            </div>
            <p className="text-lg italic text-gray-700 leading-relaxed mb-6">
              "{testimonial.text}"
            </p>
            <p className="font-semibold text-[#2C3E50]">
              — {testimonial.author}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
};
