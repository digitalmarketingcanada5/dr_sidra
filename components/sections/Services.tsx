import React from 'react';
import Link from 'next/link';
import { Section, SectionHeader } from '@/components/ui/Section';
import { Brain, Sparkles, Heart } from 'lucide-react';

const services = [
  {
    title: 'Virtual Reality Exposure Therapy',
    tagline: 'Innovation. Active. Customized therapeutics for your mental health',
    description: 'Cutting-edge VR technology for treating anxiety, phobias, and trauma-related conditions through immersive, controlled exposure therapy.',
    icon: Brain,
    href: '/nexus-therapy',
    imgSrc: 'https://images.unsplash.com/photo-1617791160505-6f00504e3519?q=80&w=2070',
  },
  {
    title: 'Medical Aesthetics',
    tagline: 'Beauty and innovation',
    description: 'Advanced aesthetic treatments combining medical expertise with innovative technology. Full services available at our specialized clinic.',
    icon: Sparkles,
    href: 'https://www.thedermclinic.ca/',
    external: true,
    imgSrc: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=2070',
  },
  {
    title: 'Newborn Circumcision',
    tagline: 'Compassionate, experienced care for your son\'s first procedure',
    description: 'Safe, gentle circumcision services performed with expertise and care in a comfortable environment.',
    icon: Heart,
    href: '/newborn-circumcision',
    imgSrc: 'https://images.unsplash.com/photo-1555252333-9f8e92e65df9?q=80&w=2070',
  },
];

export const Services: React.FC = () => {
  return (
    <Section className="bg-white" id="services">
      <SectionHeader 
        title="Our Services"
        subtitle="Experience healthcare reimagined through cutting-edge technology and compassionate care. Each service is designed to optimize your wellness with precision and innovation."
      />
      <div className="grid md:grid-cols-3 gap-8">
        {services.map((service) => {
          const Icon = service.icon;
          const content = (
            <>
              <div 
                className="relative h-64 bg-cover bg-center rounded-t-lg"
                style={{ backgroundImage: `url('${service.imgSrc}')` }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent rounded-t-lg" />
                <div className="absolute bottom-4 left-4 right-4">
                  <Icon className="text-[#5DBDC4] mb-2" size={32} />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-[#2C3E50] mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-[#5DBDC4] font-medium mb-3 italic">
                  {service.tagline}
                </p>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </>
          );

          if (service.external) {
            return (
              <a
                key={service.title}
                href={service.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group block bg-gray-50 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                {content}
              </a>
            );
          }

          return (
            <Link
              key={service.title}
              href={service.href}
              className="group block bg-gray-50 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              {content}
            </Link>
          );
        })}
      </div>
    </Section>
  );
};
