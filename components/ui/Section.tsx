import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  style?: React.CSSProperties;
}

export const Section: React.FC<SectionProps> = ({ children, className = '', id, style, ...props }) => {
  return (
    <section id={id} className={`py-16 md:py-24 ${className}`} style={style} {...props}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
};

interface SectionHeaderProps {
  title: string | React.ReactNode;
  subtitle?: string | React.ReactNode;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({ title, subtitle }) => (
  <div className="text-center max-w-3xl mx-auto mb-12">
    <h2 className="text-4xl md:text-5xl font-semibold text-[#2C3E50] mb-4">{title}</h2>
    {subtitle && <p className="text-lg text-[#5A5A5A] leading-relaxed">{subtitle}</p>}
  </div>
);
