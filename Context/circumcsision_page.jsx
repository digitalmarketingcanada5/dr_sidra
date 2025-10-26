import React, { useState } from 'react';
import { Menu, X, Phone, Facebook, Instagram, Star, ChevronDown, ChevronRight, PlayCircle, ArrowRight, Plus, Minus, /* Removed AngleRight */ ChevronUp /* Changed AngleUp */, ArrowRightCircle /* Placeholder for LongArrowAltRight */ } from 'lucide-react'; // Corrected imports

// --- Reusable Components ---

// Button Component
const Button = ({ href, children, variant = 'primary', className = '', target, rel, onClick, icon: Icon }) => {
  const baseStyle = 'inline-flex items-center justify-center px-6 py-3 rounded-md text-center font-medium transition-colors duration-300 cursor-pointer text-sm'; // Adjusted padding & size
  const styles = {
    primary: 'bg-[#1f5bff] text-white hover:bg-[#1a4ccc]',
    outline: 'border-2 border-[#C1D8DA] text-[#C1D8DA] hover:bg-[#C1D8DA] hover:text-white',
    dark: 'bg-[#3B4C50] text-white hover:bg-[#5a7075]',
    blue: 'bg-[#1f5bff] text-white hover:bg-[#1a4ccc]',
    teal: 'bg-[#17a2b8] text-white hover:bg-[#138496]', // Added Teal color based on image
  };

  const content = (
    <>
      <span>{children}</span>
      {/* Use ArrowRightCircle as fallback for LongArrowAltRight */}
      {Icon && (Icon === LongArrowAltRightPlaceholder ? <ArrowRightCircle size={18} className="ml-2" /> : <Icon size={18} className="ml-2" />)}
    </>
  );

  if (onClick) {
    return (
      <button onClick={onClick} className={`${baseStyle} ${styles[variant]} ${className}`}>
        {content}
      </button>
    );
  }

  return (
    <a href={href} className={`${baseStyle} ${styles[variant]} ${className}`} target={target} rel={rel}>
      {content}
    </a>
  );
};

// Placeholder for FontAwesome icon if needed later
const LongArrowAltRightPlaceholder = () => null;

// Section Container Component
const Section = ({ children, className = '', bg = 'bg-transparent', ...props }) => {
  return (
    <section className={`py-12 md:py-16 ${bg} ${className}`} {...props}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
};


// Section Header Component
const SectionHeader = ({ title, subtitle, titleColor = 'text-[#4A4A4A]', subtitleColor = 'text-[#5A5A5A]', titleSize = 'text-4xl md:text-5xl', align = 'text-center', maxWidth = 'max-w-3xl mx-auto' }) => (
  <div className={`${align} ${maxWidth} mb-12 md:mb-16`}>
    <h2 className={`${titleSize} font-serif ${titleColor} mb-4 font-bold`}>{title}</h2>
    {subtitle && <p className={`text-lg md:text-xl ${subtitleColor} leading-relaxed`}>{subtitle}</p>}
  </div>
);

// Accordion Item Component
const AccordionItem = ({ title, children, iconClosed = <Plus size={18} />, iconOpened = <Minus size={18} />, titleIcon = false }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200">
      <h3>
        <button
          className="flex justify-between items-center w-full py-4 px-1 text-left font-medium text-gray-700 hover:bg-gray-50 transition duration-150 ease-in-out"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
        >
           {titleIcon && (
              <span className={`mr-3 text-[#17a2b8] transition-transform duration-200 ${isOpen ? 'rotate-90' : ''}`}>
                 {/* Replaced AngleRight with ChevronRight */}
                 <ChevronRight size={16}/>
              </span>
           )}
          <span className="flex-1">{title}</span>
          <span className={`ml-3 transform transition-transform duration-200 ${isOpen ? 'rotate-0' : ''} ${titleIcon ? 'hidden' : ''}`}>
             {/* Use ChevronUp instead of AngleUp if needed, or stick with Plus/Minus */}
            {isOpen ? iconOpened : iconClosed}
          </span>
        </button>
      </h3>
       <div
         className={`overflow-hidden transition-all duration-300 ease-in-out ${
           isOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
         }`}
       >
         <div className="p-4 pt-0 text-gray-600 space-y-4">
           {children}
         </div>
       </div>
    </div>
  );
};

// --- Main Page Sections ---

// Header Component
const Header = ({ onMenuOpen, currentPage }) => {
  const navItems = [
    { name: 'About', href: '#', hasDropdown: true, pageId: 'About' },
    { name: 'Services', href: '#', hasDropdown: true, pageId: 'Services' },
    { name: 'Nexus Therapy', href: '#', hasDropdown: false, pageId: 'NexusTherapy'},
    { name: 'Circumcision', href: '#', hasDropdown: false, pageId: 'Circumcision'}, // Added Circumcision
    { name: 'Resources', href: '#', hasDropdown: true, pageId: 'Resources' },
    { name: 'Shop', href: '/shop', hasDropdown: false, pageId: 'Shop' },
    { name: 'Contact', href: '/contact', hasDropdown: false, pageId: 'Contact' },
  ];

   // Determine background based on page (transparent only on Home/Nexus maybe?)
   const headerBg = (currentPage === 'Home' || currentPage === 'NexusTherapy' || currentPage === 'About' || currentPage === 'Circumcision' ) ? 'bg-transparent absolute' : 'bg-[#3B4C50] relative'; // Example logic
   const textColor = (currentPage === 'Home' || currentPage === 'NexusTherapy' || currentPage === 'About' || currentPage === 'Circumcision' ) ? 'text-white' : 'text-white'; // Adjust if needed


  return (
    <header className={`top-0 left-0 right-0 z-50 py-4 ${headerBg}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="/" className="flex-shrink-0">
            <img 
              src="https://lirp.cdn-website.com/1176e333/dms3rep/multi/opt/download-d6f07196-394w.png" 
              alt="The logo for the derm clinic is a circle with dots in it." 
              className="h-16 w-auto" // Adjust size if needed for Circumcision page
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) => (
              <a 
                key={item.name} 
                href={item.href} 
                onClick={(e) => { 
                    // Basic navigation simulation
                    e.preventDefault(); 
                    // In a real app, you'd call a function passed down via props to change the state
                    // For now, this just prevents default link behavior
                    console.log(`Maps to ${item.pageId}`); 
                }}
                className={`text-lg font-medium transition-colors duration-300 flex items-center ${
                  currentPage === item.pageId ? 'text-[#17a2b8] font-semibold' : `${textColor} hover:text-[#C1D8DA]` // Updated active color for Circumcision
                }`}
              >
                {item.name}
                {item.hasDropdown && <ChevronDown size={18} className="ml-1" />}
              </a>
            ))}
          </nav>

          {/* Desktop Buttons & Social */}
           <div className="hidden lg:flex items-center space-x-4">
             {/* Conditionally hide social icons if not needed */}
             <div className="flex items-center space-x-3">
               <a href="https://facebook.com/61578163889152" target="_blank" rel="noopener noreferrer" aria-label="facebook" className={`${textColor} hover:text-[#C1D8DA]`}>
                 <Facebook size={20} />
               </a>
               <a href="https://instagram.com/thedermclinicajax" target="_blank" rel="noopener noreferrer" aria-label="instagram" className={`${textColor} hover:text-[#C1D8DA]`}>
                 <Instagram size={20} />
               </a>
             </div>
             <a 
               href="tel:(289) 205-2800" 
               className={`flex items-center bg-white/20 backdrop-blur-sm ${textColor} px-4 py-2 rounded-md hover:bg-white/30 transition-colors`}
             >
               <Phone size={18} className="mr-2" />
               Call Us
             </a>
             <Button href="https://book2.getweave.com/c75537b1-99cf-4707-be85-1fdb170d76c3/request-appointment?source=WEBSITE" target="_blank" rel="noopener noreferrer" variant="teal"> {/* Using Teal variant */}
               Book an Appointment
             </Button>
           </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button onClick={onMenuOpen} className={textColor} aria-label="Open menu">
              <Menu size={32} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

// Mobile Menu Component
const MobileMenu = ({ isOpen, onClose, currentPage }) => {
   const navItems = [
     { name: 'About', href: '#', hasDropdown: true, pageId: 'About' },
     { name: 'Services', href: '#', hasDropdown: true, pageId: 'Services' },
     { name: 'Nexus Therapy', href: '#', hasDropdown: false, pageId: 'NexusTherapy'},
     { name: 'Circumcision', href: '#', hasDropdown: false, pageId: 'Circumcision'}, // Added
     { name: 'Resources', href: '#', hasDropdown: true, pageId: 'Resources' },
     { name: 'Shop', href: '/shop', hasDropdown: false, pageId: 'Shop' },
     { name: 'Contact', href: '/contact', hasDropdown: false, pageId: 'Contact' },
   ];

  return (
    <div className={`fixed inset-0 z-[100] bg-black/50 transition-opacity duration-300 lg:hidden ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} onClick={onClose}>
      <div className={`fixed top-0 right-0 h-full w-full max-w-sm bg-[#3B4C50] shadow-lg transition-transform duration-300 overflow-y-auto ${isOpen ? 'translate-x-0' : 'translate-x-full'}`} onClick={(e) => e.stopPropagation()}>
        <div className="flex justify-between items-center p-6 border-b border-white/20">
          <h2 className="text-xl font-semibold text-white">Menu</h2>
          <button onClick={onClose} className="text-white" aria-label="Close menu"><X size={28} /></button>
        </div>
        <nav className="flex flex-col p-6 space-y-4">
          {navItems.map((item) => (
             <a key={item.name} href={item.href} onClick={(e) => { e.preventDefault(); console.log(`Maps to ${item.pageId}`); onClose(); }} className={`text-lg py-2 flex justify-between items-center border-b border-white/10 ${currentPage === item.pageId ? 'text-[#17a2b8] font-semibold' : 'text-white'}`}>
               <span>{item.name}</span>
               {item.hasDropdown && <ChevronRight size={18} />}
             </a>
           ))}
        </nav>
        <div className="p-6 border-t border-white/20 space-y-4">
          <Button href="https://book2.getweave.com/c75537b1-99cf-4707-be85-1fdb170d76c3/request-appointment?source=WEBSITE" target="_blank" rel="noopener noreferrer" className="w-full" variant="teal">Book an Appointment</Button>
          <a href="tel:(289) 205-2800" className="flex items-center justify-center w-full bg-white/20 backdrop-blur-sm text-white px-4 py-3 rounded-md hover:bg-white/30 transition-colors"><Phone size={18} className="mr-2" />Call Us</a>
          <div className="flex justify-center items-center space-x-4 pt-4">
            <a href="https://facebook.com/61578163889152" target="_blank" rel="noopener noreferrer" aria-label="facebook" className="text-white hover:text-[#C1D8DA]"><Facebook size={24} /></a>
            <a href="https://instagram.com/thedermclinicajax" target="_blank" rel="noopener noreferrer" aria-label="instagram" className="text-white hover:text-[#C1D8DA]"><Instagram size={24} /></a>
          </div>
        </div>
      </div>
    </div>
  );
};


// --- About Page Components --- (Keep existing ones)
const AboutHero = () => { /* ... existing code ... */ return null; };
const AboutIntro = () => { /* ... existing code ... */ return null; };
const WhyChooseUs = () => { /* ... existing code ... */ return null; };
const Memberships = () => { /* ... existing code ... */ return null; };
const Testimonials = () => { /* ... existing code ... */ return null; };
const AboutCallToAction = () => { /* ... existing code ... */ return null; };
const AboutGallery = () => { /* ... existing code ... */ return null; };

// --- Nexus Therapy Page Components --- (Keep existing ones)
const NexusHero = () => { /* ... existing code ... */ return null; };
const WhoIsThisFor = () => { /* ... existing code ... */ return null; };
const HowItWorks = () => { /* ... existing code ... */ return null; };
const FlexibleTherapy = () => { /* ... existing code ... */ return null; };
const WhatWeTreat = () => { /* ... existing code ... */ return null; };
const VRExposures = () => { /* ... existing code ... */ return null; };
const VRRelaxation = () => { /* ... existing code ... */ return null; };

// --- SVG Icons for Circumcision Page (Defined Outside Component) ---
const BabyIcon = () => (
    <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <path d="M154.3 230.1v18.5c0 4.1 3.4 7.5 7.5 7.5s7.5-3.4 7.5-7.5v-18.5c0-4.1-3.4-7.5-7.5-7.5-4.1.0-7.5 3.4-7.5 7.5zm188.4 0v18.5c0 4.1 3.4 7.5 7.5 7.5s7.5-3.4 7.5-7.5v-18.5c0-4.1-3.4-7.5-7.5-7.5s-7.5 3.4-7.5 7.5zM323.3 283c-9.4-7.5-21.4-10.2-33.1-7.5-3.3.8-6.7 1.4-10.2 2-6.9-4.6-15.2-7.3-24.1-7.3s-17.2 2.7-24.1 7.3c-3.4-.5-6.8-1.2-10.2-2-11.7-2.7-23.7.1-33.1 7.5s-14.7 18.6-14.7 30.6 5.4 23.1 14.7 30.6c7 5.6 15.5 8.5 24.3 8.5 2.9 0 5.9-.3 8.8-1 3.3-.8 6.7-1.4 10.2-2 6.9 4.6 15.2 7.3 24.1 7.3s17.2-2.7 24.1-7.3c3.4.5 6.8 1.2 10.2 2 2.9.7 5.9 1 8.8 1 8.7 0 17.3-2.9 24.3-8.5 9.4-7.5 14.7-18.6 14.7-30.6s-5.4-23.1-14.7-30.6zM218.4 337c-7.2 1.7-14.6 0-20.4-4.6-5.8-4.6-9.1-11.5-9.1-18.8s3.3-14.2 9.1-18.8c5.8-4.6 13.2-6.3 20.4-4.6.3.1.6.1 1 .2-4.3 6.7-6.8 14.7-6.8 23.3s2.5 16.5 6.8 23.3c-.3 0-.6 0-1 .1zm37.6 5c-15.7 0-28.4-12.7-28.4-28.4s12.7-28.4 28.4-28.4 28.4 12.7 28.4 28.4-12.7 28.4-28.4 28.4zm58-9.6c-5.8 4.6-13.2 6.3-20.4 4.6-.3-.1-.6-.1-1-.2 4.3-6.7 6.8-14.7 6.8-23.3s-2.5-16.5-6.8-23.3c.3-.1.6-.1 1-.2 7.2-1.6 14.6 0 20.4 4.6 5.8 4.6 9.1 11.5 9.1 18.8s-3.4 14.3-9.1 18.8zM433.1 227.9c-2.9-15.6-7.8-30.8-14.8-45.3-1.8-3.7-6.3-5.3-10-3.5s-5.3 6.3-3.5 10c7.2 15 12 30.7 14.4 46.9 0 .2 0 .4.1.6 1.1 7.9 1.7 15.9 1.7 24 0 91-74 165-165 165S91 358.9 91 267.9c0-86.1 70.1-158.6 157.8-162.2 8.1 4.5 17.3 6.8 26.8 6.8.2 0 .3 0 .5 0 3.2 0 5.8-2 6.9-4.8 16.6 2.7 32.5 7.9 47.7 15.7 22.2 11.3 41.9 27.9 57 47.8 2.5 3.3 7.2 4 10.5 1.5s4-7.2 1.5-10.5c-16.4-21.8-37.9-39.8-62.2-52.1-25.4-12.9-52.9-19.5-81.6-19.5-1.1 0-2.1 0-3.2 0-2.1-1.4-4.1-3-6-4.9-7.8-7.7-12.2-18-12.3-29-.1-8.4 3.1-16.3 9-22.3 5.9-6 13.8-9.3 22.2-9.4h.2c13 0 23.5 10.5 23.6 23.5 0 4.7-1.7 9-5 12.4s-7.6 5.2-12.3 5.2c-4.1 0-7.5 3.4-7.4 7.6.1 4.1 3.4 7.4 7.5 7.4h.1c8.7-.1 16.8-3.5 22.8-9.7s9.4-14.3 9.3-23C304.3 17.1 287 0 265.9 0h-.3C253.2.1 241.6 5 232.9 13.9s-13.4 20.5-13.3 33c.1 13 4.6 25.4 12.8 35.3C155 92.3 93 151.8 79 227.9c-19 2.3-33.7 18.5-33.7 38 0 20.4 16 37.1 36.1 38.3 3.2 12.9 7.9 25.3 13.7 37-1 6.7-1.5 13.5-1.5 20.3 0 83 72.9 150.5 162.4 150.5s162.4-67.5 162.4-150.5c0-6.8-.5-13.6-1.5-20.3 5.9-11.7 10.5-24.1 13.7-37 20.1-1.2 36.1-17.9 36.1-38.3-.1-10.5-7.8-19.8-18.1-22.3zM60.2 265.9c0-10.5 7-19.4 16.5-22.3-.5 5.6-.8 11.2-.8 16.9 0 9.5.8 18.9 2.2 28.1-10.2-2.4-17.9-11.7-17.9-22.7zm195.8 231.1c-80.4 0-146-59.5-147.4-133.2 3.2 4.6 6.7 9.1 10.4 13.4 7.6 32.6 27 61.4 54.8 81.1 1.3.9 2.8 1.4 4.3 1.4 2.3 0 4.7-1.1 6.1-3.2 2.4-3.4 1.6-8.1-1.8-10.5-16.7-11.8-30-27.3-39-45.1 30.8 24.8 70 39.6 112.5 39.6s81.6-14.8 112.4-39.5c-7.9 15.5-19.1 29.4-33 40.6-22.3 17.9-50.5 27.8-79.4 27.8-16.5 0-32.6-3.1-47.7-9.2-3.8-1.5-8.2.3-9.8 4.2s.3 8.2 4.2 9.8c16.9 6.8 34.9 10.3 53.3 10.3 32.3 0 63.8-11 88.8-31.1 24.2-19.4 41.3-46.4 48.2-76.1 3.7-4.3 7.1-8.8 10.4-13.4 1.4 73.7-64.2 133.2-144.6 133.2zm177.8-208.5c1.4-9.1 2.2-18.5 2.2-28.1 0-5.7-.3-11.3-.8-16.9 9.6 2.9 16.5 11.8 16.5 22.3.1 11-7.6 20.3-17.9 22.7z"/>
    </svg>
);
const CostIcon = () => (
    <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448.288 448.288">
        <path d="M223.8 208.5c-3.8-18.7-20.2-32.1-39.2-32 . -13.3 0-24-10.7-24-24s10.7-24 24-24 24 10.7 24 24h16c0-19-13.4-35.4-32-39.2v-8.8h-16v8.8c-21.7 4.4-35.6 25.5-31.2 47.2 3.8 18.7 20.2 32.1 39.2 32 . 13.3 0 24 10.7 24 24s-10.7 24-24 24-24-10.7-24-24h-16c0 19 13.4 35.4 32 39.2v8.8h16v-8.8c21.7-4.4 35.6-25.5 31.2-47.2zM176.5 72.5h16v24h-16zM176.5 272.5h16v24h-16zM272.5 176.5h24v16h-24zM72.5 176.5h24v16h-24zM250.2 108.4l17.6 17.6-11.3 11.3-17.6-17.6zm-123 123l17.6 17.6-11.3 11.3-17.6-17.6zm134.4.1l11.3-11.3 17.6 17.6-11.3 11.3zm-123-123l11.3-11.3 17.6 17.6-11.3 11.3zM184.5 24.5C96.1 24.5 24.5 96.1 24.5 184.5s71.6 160 160 160 160-71.6 160-160-71.6-160-160-160zm0 304c-79.5 0-144-64.5-144-144S105 40.5 184.5 40.5s144 64.5 144 144-64.5 144-144 144z M445.9 412l-56.6-56.6c-7.3-6.9-18.1-8.7-27.2-4.5l-42.1-42.1c68.8-75 63.7-191.6-11.3-260.3S117.2-15.3 48.4 59.8s-63.7 191.6 11.3 260.3c70.4 64.6 178.6 64.6 249 0l42.1 42c-4.5 9.1-2.6 20.1 4.6 27.2l56.6 56.6c3.1 3.1 8.2 3.1 11.3 0l22.6-22.6c3.1-3.1 3.1-8.2 0-11.3zm-261.4-59.5c-92.7 0-168-75.2-168-168s75.2-168 168-168 168 75.2 168 168-75.3 168-168 168zm233.1 76.5l-50.9-50.9c-3.2-3.1-3.3-8.1-.2-11.3 3.1-3.2 8.1-3.3 11.3-.2l.2.2 50.9 50.9-.2.2-11.3 11.3z"/>
    </svg>
);
const CalendarIcon = () => (
    <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path d="M9 21H2.5A2.5 2.5 0 0 1 0 18.5v-14A2.5 2.5 0 0 1 2.5 2h12A2.5 2.5 0 0 1 17 4.5v4.06a.5.5 0 0 1-1 0V4.5a1.5 1.5 0 0 0-1.5-1.5h-12A1.5 1.5 0 0 0 1 4.5v14a1.5 1.5 0 0 0 1.5 1.5H9a.5.5 0 0 1 0 1zM3.5 5a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 1 0v4a.5.5 0 0 1-.5.5zM8.5 5a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 1 0v4a.5.5 0 0 1-.5.5zM13.5 5a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 1 0v4a.5.5 0 0 1-.5.5zM10 13H3.5a.5.5 0 0 1 0-1H10a.5.5 0 0 1 0 1zM8.5 9h-5a.5.5 0 0 1 0-1h5a.5.5 0 0 1 0 1z M17.5 24A6.5 6.5 0 1 1 24 17.5 6.5 6.5 0 0 1 17.5 24zm0-12A5.5 5.5 0 1 0 23 17.5 5.5 5.5 0 0 0 17.5 12zM17.5 21a.5.5 0 0 1-.5-.5v-6a.5.5 0 0 1 1 0v6a.5.5 0 0 1-.5.5zM20.5 18h-6a.5.5 0 0 1 0-1h6a.5.5 0 0 1 0 1z"/>
    </svg>
);
const FeesIcon = () => (
    <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 321.553 321.553">
        <path d="M160.8 100.6c-22.2 0-40.3 15-40.3 33.5s18.1 33.5 40.3 33.5v-13.9c-14.6 0-26.5-8.9-26.5-19.6s11.8-19.6 26.5-19.6 26.5 8.9 26.5 19.6h13.9c0-18.4-18.1-33.5-40.3-33.5zm0 53.1v13.9c14.6 0 26.5 8.9 26.5 19.6s-11.8 19.6-26.5 19.6-26.5-8.9-26.5-19.6H120.5c0 18.5 18.1 33.5 40.3 33.5s40.3-15 40.3-33.5-18.1-33.5-40.3-33.5z M153.9 87.1h13.9v20.5h-13.9zm0 126.7h13.9v20.5h-13.9z M313.9 170.8c-5.2-5.8-5.2-14.3 0-19.9 6.4-6.9 9-16.5 6.9-25.7-2.1-9.3-8.7-16.9-17.6-20.4-7.4-3-11.2-10.7-9-18 2.6-8.7 1-17.9-4.5-25.2-5.5-7.5-14.1-11.7-23.4-11.7-.7 0-1.4.1-2 .1-8 .4-14.9-5-16.2-12.6-2.3-14-14.5-24.2-28.9-24.2-4.9 0-9.9 1.3-14.3 3.7-2.3 1.4-5 2-7.7 2-5 0-9.7-2.5-12.6-6.5-5.5-7.8-14.3-12.3-24-12.3s-18.3 4.4-24 12.2c-2.8 4-7.6 6.4-12.6 6.4-2.7 0-5.2-.6-7.6-1.9-4.4-2.5-9.4-3.7-14.3-3.7-14.5 0-26.7 10.1-28.9 24.2-1.3 7.7-7.7 13-15.2 12.6-.6 0-1.3 0-1.9 0-9.3 0-18.1 4.5-23.6 11.8s-7 16.5-4.4 25.3c2.2 7.3-1.6 15-9 17.9-9 3.5-15.5 11.1-17.6 20.4-2.1 9.1.5 18.7 6.9 25.6 5.2 5.8 5.2 14.3 0 19.9-6.4 6.9-9 16.5-6.9 25.7 2.1 9.3 8.7 16.9 17.6 20.4 7.4 3 11.2 10.7 9 18-2.6 8.7-1 17.9 4.5 25.3 5.6 7.5 14.2 11.7 23.6 11.7.6 0 1.2 0 1.8-.1 8-.4 14.9 5 16.2 12.6 2.3 14.1 14.5 24.2 28.9 24.2 4.9 0 9.9-1.3 14.3-3.7 2.3-1.4 5-2 7.7-2 5 0 9.7 2.3 12.6 6.4 5.5 7.7 14.5 12.3 24 12.3 9.6 0 18.6-4.6 23.9-12.3 2.8-4 7.5-6.4 12.6-6.4 2.7 0 5.2.6 7.6 1.9 4.4 2.5 9.4 3.7 14.3 3.7 14.5 0 26.7-10.1 28.9-24.2 1.2-7.3 7.6-12.6 15.1-12.6.3 0 .7 0 1.1 0 .6.1 1.3.1 1.9.1 9.4 0 18-4.3 23.6-11.7 5.4-7.4 7.1-16.5 4.5-25.3-2.3-7.3 1.6-15 9-17.9 9-3.5 15.5-11.1 17.6-20.4 2.1-9.1-.5-18.7-6.9-25.6zm-10.4 9.2c3.4 3.5 4.7 8.3 3.6 13.1-1.1 4.8-4.4 8.6-9.2 10.6-14.1 5.6-21.4 20.7-17.1 34.9 1.3 4.5.4 9.3-2.3 13-2.9 3.9-7.4 6.2-12.4 6.2h-1c-15.1-1.1-28.4 9.5-30.7 24.1-1.3 8.2-8.6 12.6-15.1 12.6-2.7 0-5.2-.6-7.6-1.9-4.4-2.5-9.3-3.7-14.3-3.7-9.5 0-18.5 4.6-23.9 12.3-2.9 4-7.5 6.4-12.6 6.4-5.2 0-9.8-2.3-12.7-6.4-5.4-7.7-14.4-12.3-23.9-12.3-5 0-9.9 1.3-14.4 3.5-2.3 1.4-4.9 2-7.6 2-6.5 0-13.8-4.3-15.1-12.6-2.3-14.1-14.5-24.2-29-24.2h-1.7c-5.3.3-10.3-2-13.4-6.2-2.9-3.7-3.6-8.4-2.3-12.9 4.4-14.3-2.9-29.3-17.1-35-4.7-1.9-8.1-5.8-9.2-10.6-1-4.8.2-9.6 3.6-13.2 10.2-11 10.2-27.6 0-38.7-3.4-3.5-4.7-8.3-3.6-13.1 1.1-4.8 4.4-8.6 9.2-10.6 14.1-5.6 21.4-20.6 17.1-34.9-1.4-4.5-.5-9.2 2.2-12.9 2.9-3.9 7.4-6.2 12.4-6.2h1c15.1 1.1 28.4-9.5 30.7-24.1 1.3-8.2 8.6-12.6 15.1-12.6 2.7 0 5.2.6 7.6 1.9 4.4 2.5 9.3 3.7 14.3 3.7 9.5 0 18.5-4.6 23.9-12.2 3-4 7.6-6.5 12.7-6.5s9.7 2.5 12.7 6.5c5.4 7.7 14.4 12.3 23.9 12.3 4.9 0 9.9-1.3 14.3-3.7 2.3-1.4 4.9-2 7.6-2 6.5 0 13.8 4.3 15.1 12.6 2.3 14.1 14.5 24.2 29 24.2h1.8c5.4-.4 10.3 1.9 13.4 6.1 2.9 3.7 3.6 8.4 2.3 12.9-4.4 14.3 2.9 29.3 17.1 35 4.7 1.9 8.1 5.8 9.2 10.6 1 4.8-.2 9.6-3.6 13.2-10.3 11.1-10.3 27.7 0 38.8z M160.8 46.8c-62.8 0-113.9 51.1-113.9 113.9s51.1 113.9 113.9 113.9 113.9-51.1 113.9-113.9S223.7 46.8 160.8 46.8zm0 213.9c-55.1 0-100.1-44.9-100.1-100.1S105.7 60.6 160.8 60.6s100.1 44.9 100.1 100.1-44.9 100-100.1 100z"/>
    </svg>
);


// --- Circumcision Page Components ---

const CircumcisionHero = () => {
  return (
      <div
          className="relative bg-cover bg-center pt-48 pb-24 md:pt-64 md:pb-32 text-[#003e69]" // Adjusted padding and text color
          style={{ backgroundImage: "url('https://gentleprocedurestoronto.ca/wp-content/uploads/2021/01/Gentle-Procedures-Clinic_Newborn-Baby-Circumcision_Hero-1.jpg')" }} // Placeholder
      >
          <div className="absolute inset-0 bg-white opacity-40 z-0"></div> {/* Lighter overlay */}
          <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-xl bg-white/80 backdrop-blur-sm p-8 rounded-lg shadow-lg"> {/* Semi-transparent background for text */}
                   <h1 className="text-4xl md:text-5xl font-bold mb-4">
                       Toronto Circumcision Clinic
                   </h1>
                   <h2 className="text-2xl md:text-3xl mb-6 font-light">
                       Virtually Painless Infant Circumcision
                   </h2>
                   <div className="flex flex-col sm:flex-row gap-4">
                      <Button href="/circumcision/appointment/" variant="teal" icon={LongArrowAltRightPlaceholder}>Book Now</Button> {/* Using placeholder */}
                      <Button href="/contact-us/" variant="outline" className="border-[#003e69] text-[#003e69] hover:bg-[#003e69] hover:text-white" icon={LongArrowAltRightPlaceholder}>Contact Us</Button>{/* Using placeholder */}
                  </div>
              </div>
          </div>
      </div>
  );
};

const PainlessSection = () => {
    return (
        <Section bg="bg-white" className="py-12 md:py-16">
            <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
                 {/* Empty column for spacing or potential image later */}
                <div></div>
                 <div className="bg-[#f0f8ff] p-8 md:p-12 rounded-lg shadow-md"> {/* Light blue background based on image */}
                    <p className="text-2xl md:text-3xl font-light text-[#003e69] mb-6">
                        Baby circumcisions at our clinic are virtually painless.
                    </p>
                    <Button href="/contact-us/" variant="teal" icon={LongArrowAltRightPlaceholder}> {/* Using placeholder */}
                        Ask Your Questions
                    </Button>
                </div>
            </div>
        </Section>
    );
};

const DedicatedClinicSection = () => {
    return (
        <Section bg="bg-gray-50"> {/* Light gray background */}
            <SectionHeader title="A Dedicated Toronto Circumcision Clinic" align="text-left" maxWidth="max-w-none" titleSize="text-3xl md:text-4xl" titleColor="text-[#003e69]" />
             <div className="prose prose-lg max-w-none text-gray-700"> {/* Using prose for better text formatting */}
                <p>Gentle Procedures Clinic delivers a virtually painless circumcision operation for baby boys up to 12 months.</p>
                <p>Our clients come from across Southern Ontario and beyond because our clinic is the best option for circumcision for babies aged 0-12 months.</p>
                <p>Our team of dedicated medical professionals understands that parents are concerned about their babies, and want to address these concerns.</p>
                <p>Our in-office procedure under local anaesthetic is convenient for babies and offers excellent cosmetic results.</p>
                <p>Our doctor and staff are happy to assist you with any questions or concerns that you may have and are available by phone or by booking a consultation.</p>
                <p>The clinic generally has appointments available, and you can <a href="https://gentleprocedurestoronto.ca/circumcision/appointment/" className="text-[#17a2b8] hover:underline">request an appointment now if desired.</a></p>
            </div>
        </Section>
    );
};

const WhyGentleProceduresSection = () => {
    const galleryImages = [
        "https://b1868167.smushcdn.com/1868167/wp-content/uploads/2020/04/Gentle-Procedures_Baby-Circumcision_Gallery4-200x300.jpg?lossy=0&strip=1&webp=1",
        "https://b1868167.smushcdn.com/1868167/wp-content/uploads/2020/04/Gentle-Procedures_Baby-Circumcision_Gallery2-1-300x200.jpg?lossy=0&strip=1&webp=1",
        "https://b1868167.smushcdn.com/1868167/wp-content/uploads/2020/04/Gentle-Procedures_Baby-Circumcision_Gallery1-1-300x200.jpg?lossy=0&strip=1&webp=1",
    ];
    return (
        <Section bg="bg-white">
            <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
                 <div>
                    <h3 className="text-3xl font-semibold text-[#003e69] mb-6">Why Gentle Procedures Clinic for Circumcision?</h3>
                    <div className="prose max-w-none text-gray-700 space-y-4">
                         <p>At Gentle Procedures, your baby’s well being is very important to us. We want to provide an atmosphere that is warm, inviting, and stress-free for you and your family.</p>
                         <p>At our clinic locations in central and West Toronto, families are greeted in a friendly, professional manner. Because we are a dedicated circumcision clinic, you’ll know that any other families with their babies are there for this same procedure.</p>
                         <p>At Gentle Procedures Clinic, we want to create a home-like atmosphere that caters to your baby’s needs. We pride ourselves in providing a unique, personal, service for infants getting circumcised.</p>
                         <p>After the circumcision, our doctor will follow up to check up on your baby’s progress and to answer any questions that the parents may have. A follow-up appointment and printed aftercare instructions will be given to families as part of our professional service.</p>
                         <p>Let us provide quality medical service for you and your baby in a caring environment.</p>
                     </div>
                     <Button href="/circumcision/appointment/" variant="teal" icon={LongArrowAltRightPlaceholder} className="mt-8"> {/* Using placeholder */}
                        Book a Circumcision Appointment
                    </Button>
                </div>
                 <div>
                    {/* Simplified Gallery - shows images stacked */}
                    <div className="space-y-4">
                        {galleryImages.map((src, index) => (
                            <img key={index} src={src} alt={`Clinic Image ${index + 1}`} className="w-full h-auto rounded-lg shadow-md object-cover" />
                        ))}
                    </div>
                 </div>
            </div>
        </Section>
    );
};

const InfantCircumcisionSection = () => {
     return (
        <Section bg="bg-gray-50"> {/* Light gray background */}
            <SectionHeader title="Infant Circumcision our Centre" align="text-left" maxWidth="max-w-none" titleSize="text-3xl md:text-4xl" titleColor="text-[#003e69]" />
             <div className="prose prose-lg max-w-none text-gray-700">
                <p>Newborn and baby boys are the focus of our clinic.</p>
                <p>We consider that the Pollock Technique™ circumcision method is an effective and relatively painless way to circumcise infants, and older babies up to a year old benefit equally from a virtually pain free procedure.</p>
                <p>Babies, if they remain awake during the procedure, are soothed by a pacifier made up of natural ingredients.</p>
                <p>At Gentle Procedures, it is not uncommon for babies to sleep right through their circumcision. We really are gentle.</p>
                <p>We recognize that warmth is part of a comfortable environment for your baby. The procedure room will be kept warm and is equipped with a local thermostat so that each family can create the right temperature for their baby.</p>
            </div>
        </Section>
    );
};

const ConsiderationsResearchSection = () => {
    return (
        <Section bg="bg-white">
            <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
                 {/* Left Column: Text & Accordions */}
                 <div className="bg-[#f0f8ff] p-8 md:p-12 rounded-lg shadow-md"> {/* Light blue bg */}
                    <h2 className="text-3xl font-semibold text-[#003e69] mb-6">Circumcision Considerations and Research</h2>
                    <div className="prose max-w-none text-gray-700 space-y-4 mb-8">
                         <p>Each year, there are over a million circumcisions performed in North America. Newborn circumcision, when performed properly, is quick and safe. The medical benefits accrue from infancy through old age.</p>
                         <p>It is our doctor’s position (as well as the position of the Canadian Pediatric society) is that; “When parents are making a decision about circumcision they should be advised of the present state of medical knowledge about its benefits and harms. Their decision may ultimately be based on personal, religious or cultural factors”.</p>
                         <p>In 2012, The American Academy of Pediatrics published in a Policy Statement that; “current evidence indicates that the health benefits of newborn male circumcision outweigh the risks”.</p>
                         <p>For more information on the risks and benefits of circumcision, please visit our Media page to find links to original policy statements and studies – including a 2016 paper published in the Canadian Journal of Urology which concludes that the benefits of circumcision may have been previously understated. The authors (including Dr. Neil Pollock) find that circumcision affords important benefits to men.</p>
                     </div>

                      {/* Accordion 1 */}
                     <div className="mb-8">
                        <AccordionItem title="Why do so many doctors recommend the Gentle Procedures Clinic for circumcision?">
                            <p>Toronto family doctors refer patients to our clinic for circumcision because that is our focus .</p>
                            <p>Dr. Sing uses the Pollock Technique™, a quick and virtually painless procedure pioneered by Dr. Neil Pollock and safely performed on over 60,000 infants, boys, and men.</p>
                            <p>For a video demonstration of Dr. Pollock’s circumcision technique,&nbsp;<a href="https://gentleprocedurestoronto.ca/circumcision/video/" className="text-[#17a2b8] hover:underline">click here.</a></p>
                            <p>Our procedure takes only a minute. We use extensive pain control methods including Tylenol, a sugar solution (to reduce pain perception), a topical freezing cream, and a local anaesthetic injection (both short- and long-acting).</p>
                            <p>There are extremely low complication rates.</p>
                        </AccordionItem>
                        <AccordionItem title="Why do Toronto parents choose to circumcise their sons?">
                             <p>An infant circumcision is often undertaken for cultural and religious reasons, and there can be health benefits as well.</p>
                             <p>Our Muslim clients circumcise their babies in accordance with their traditions, and many other families simply choose to carry on a family tradition, or seek the health benefits that may come from male circumcision:</p>
                             <ul className="list-disc pl-6 space-y-1">
                                <li>It reduces the risk of urinary tract infection.</li>
                                <li>It reduces the risk of penile infection also called balanoposthitis.</li>
                                <li>It eliminates the need for circumcision later in life when up to 6% of boys will require a circumcision because of various problems.</li>
                                <li>It reduces the risk of getting some sexually transmitted diseases including Human Papilloma Virus (HPV) and AIDS (HIV).</li>
                                <li>It reduces the risk of penile cancer and cervical cancer in partners.</li>
                                <li>Circumcised men have less risk of sexual dysfunction later in life.</li>
                             </ul>
                        </AccordionItem>
                        <AccordionItem title="Why do some Toronto parents choose not to circumcise their sons?">
                            <p>They may be concerned that they could be doing a procedure on an otherwise healthy baby that may cause pain or complications.</p>
                            <p>They wonder whether their child will wish that he had not been circumcised at a later time.</p>
                            <p>Some parents can be less interested in following cultural and religious traditions.</p>
                            <p>They are unsure of the medical reasons in favor of a circumcision.</p>
                        </AccordionItem>
                     </div>

                    <h2 className="text-3xl font-semibold text-[#003e69] mb-6">Circumcision Clinic FAQ</h2>
                     {/* Accordion 2 */}
                    <div>
                         <AccordionItem title="What is Circumcision?" titleIcon={true}>
                             <p>Circumcision is a simple operation that involves removal of the foreskin that sheaths the head of the penis. There are a number of very different methods used today for circumcision and the application of anesthesia.</p>
                             <p>The Pollock Technique™ for infant circumcision allows for a virtually painless and bloodless procedure to be safely performed in one minute. This technique was developed by Dr. Pollock and is used by Dr. Sing at Gentle Procedures Toronto. The Pollock Technique™ requires training with Dr. Pollock at his clinics in Vancouver.</p>
                         </AccordionItem>
                         <AccordionItem title="Why Circumcise?" titleIcon={true}>
                             <p>Parents sometimes ask about why circumcision should be done, and what type of circumcision is best. On these questions we can answer that the decision on why to circumcise is a personal one that will be made within your family based on your traditions and values.</p>
                             <p>There are some potential health benefits to<a href="https://gentleprocedurestoronto.ca/circumcision/baby-infant-newborn/" className="text-[#17a2b8] hover:underline">&nbsp;male infant circumcision</a>&nbsp;and there are also some reasons not to circumcise baby boys.</p>
                             <p>Our recommendation is that you make an informed a decision as possible, and the answer to the question of why to circumcise that you come to will be unique to you and your family.</p>
                             <p>Circumcision is part of both Judaism and Islam, and many Christians and people of other religious backgrounds also choose circumcision for health and cosmetic reasons, or to continue family tradition.</p>
                             <p>Many Canadian men are circumcised, as infant circumcision was routinely done on a majority of male babies in the 1970’s for health reasons. Data from&nbsp;<a href="http://www.circinfo.net/rates_of_circumcision.html" className="text-[#17a2b8] hover:underline">www.circinfo.net</a></p>
                         </AccordionItem>
                         <AccordionItem title="What Types of Circumcision Are There?" titleIcon={true}>
                              <p>There are different circumcision techniques in practice today, but the main “circumcision types” are simply circumcised and uncircumcised. We are occasionally asked about a “tight circumcision” or a “low circumcision”, but our method is designed to give the same result in all cases and we do not offer a choice of different circumcision types – and we apply our method in all cases except where a patient may present with a unique situation requiring a unique approach.</p>
                              <p>At Gentle Procedures Toronto circumcision clinic we only use the Pollock Technique™ because we believe it is a safe and comfortable method for male circumcision.</p>
                              <p>The method we use minimizes pain for the patient via application of multiple modalities to reduce it, including:</p>
                              <ul className="list-disc pl-6 space-y-1">
                                 <li>Tylenol before the procedure</li>
                                 <li>Numbing cream applied before the anaesthetic injection</li>
                                 <li>A dorsal penile block (a freezing injection) that removes all feeling from the penis</li>
                                 <li>A sugar pacifier to keep the baby distracted</li>
                              </ul>
                              <p><strong>All these steps are fully covered by our simple fixed fees.</strong></p>
                              <p>Additionally, our doctor also controls environmental factors in the procedure room to maximize the patient’s comfort. We maintain the temperature at a warm and comfortable level and may play music to help provide a calm ambiance during the brief operation.</p>
                         </AccordionItem>
                    </div>

                </div>

                 {/* Right Column: Links */}
                <div>
                     <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-6">LEARN MORE</p>
                    <div className="space-y-4">
                        <a href="/circumcision/baby-infant-newborn/" className="flex items-center p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow group">
                            <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center border-2 border-[#17a2b8] rounded-full mr-4 text-[#17a2b8] group-hover:bg-[#17a2b8] group-hover:text-white transition-colors">
                                 <BabyIcon />
                            </div>
                            <p className="text-lg font-medium text-gray-700 group-hover:text-[#17a2b8] transition-colors">Baby Circumcision</p>
                        </a>
                        <a href="/circumcision/confirm-cost/" className="flex items-center p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow group">
                           <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center border-2 border-[#17a2b8] rounded-full mr-4 text-[#17a2b8] group-hover:bg-[#17a2b8] group-hover:text-white transition-colors">
                               <CostIcon />
                           </div>
                           <p className="text-lg font-medium text-gray-700 group-hover:text-[#17a2b8] transition-colors">Confirm Your Costs</p>
                       </a>
                        <a href="/circumcision/appointment/" className="flex items-center p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow group">
                             <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center border-2 border-[#17a2b8] rounded-full mr-4 text-[#17a2b8] group-hover:bg-[#17a2b8] group-hover:text-white transition-colors">
                                 <CalendarIcon />
                             </div>
                             <p className="text-lg font-medium text-gray-700 group-hover:text-[#17a2b8] transition-colors">Book Appointment</p>
                         </a>
                         <a href="/circumcision/cost-how-much/" className="flex items-center p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow group">
                            <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center border-2 border-[#17a2b8] rounded-full mr-4 text-[#17a2b8] group-hover:bg-[#17a2b8] group-hover:text-white transition-colors">
                                <FeesIcon />
                            </div>
                            <p className="text-lg font-medium text-gray-700 group-hover:text-[#17a2b8] transition-colors">Circumcision Fees</p>
                        </a>
                    </div>
                </div>
            </div>
        </Section>
    );
};

const WhyDoctorOlderBabySection = () => {
    return (
        <Section bg="bg-gray-50">
            <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
                 {/* Left Column */}
                 <div>
                    <h2 className="text-3xl font-semibold text-[#003e69] mb-6">Why a Toronto Circumcision Doctor</h2>
                    <div className="prose max-w-none text-gray-700 space-y-4">
                        <p>It is sometimes possible to get baby boys circumcised in a non-medical setting for religious reasons.</p>
                        <p>We strongly recommend that even in this case the circumcision be performed only by trained, experienced, and licensed medical doctors.</p>
                        <p>Many ritual circumcision practitioners meet this criteria, and some may not.</p>
                        <p>If you are considering a circumcision done by someone who may not be a licensed doctor, we recommend a careful evaluation of their credentials.</p>
                    </div>
                 </div>

                 {/* Right Column */}
                 <div>
                    <h2 className="text-3xl font-semibold text-[#003e69] mb-6">Getting an Older Baby Circumcised</h2>
                    <div className="prose max-w-none text-gray-700 space-y-4 mb-8">
                        <p>Our clinic routinely performs circumcision for baby boys up to 12 months of age.</p>
                        <p>Please call us anytime during clinic hours or use the appointment request form to let us know you would like a consultation or to book a procedure.</p>
                    </div>
                     <Button href="/circumcision/appointment/" variant="teal" icon={LongArrowAltRightPlaceholder} > {/* Using placeholder */}
                        Book a Circumcision Appointment
                    </Button>
                 </div>
            </div>
        </Section>
    );
};


// Main Circumcision Page Component
const CircumcisionPage = () => {
    return (
        <>
            <CircumcisionHero />
            <PainlessSection />
            <DedicatedClinicSection />
            <WhyGentleProceduresSection />
            <InfantCircumcisionSection />
            <ConsiderationsResearchSection />
            <WhyDoctorOlderBabySection />
            {/* Add more sections as needed */}
        </>
    );
};


// Footer Component
const Footer = () => {
  const quickLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Skin Clinic', href: '/skin-clinic' },
    { name: 'Blog', href: '/blog' },
    { name: 'Specials', href: '/specials' },
    { name: 'Packages', href: '/packages' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Contact', href: '/contact' },
  ];
  return (
    <footer className="bg-[#3B4C50] text-white pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="space-y-6">
            <a href="/"><img src="https://lirp.cdn-website.com/1176e333/dms3rep/multi/opt/download-d6f07196-445w.png" alt="The logo for the derm clinic is a circle with dots in it." className="h-auto w-64"/></a>
            <p className="text-sm text-gray-300">*Please note that individual results from our services and treatments may vary.</p>
            <div className="flex items-center space-x-4">
              <a href="https://facebook.com/61578163889152" target="_blank" rel="noopener noreferrer" aria-label="facebook" className="text-gray-300 hover:text-white"><Facebook size={24} /></a>
              <a href="https://instagram.com/thedermclinicajax" target="_blank" rel="noopener noreferrer" aria-label="instagram" className="text-gray-300 hover:text-white"><Instagram size={24} /></a>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-serif text-white mb-4">Hours</h3>
            <div className="text-gray-300 space-y-2">
              <p className="flex justify-between"><span>Mon - Sat</span><span>10:00 am - 5:00 pm</span></p>
              <p className="flex justify-between"><span>Sunday</span><span>Closed</span></p>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-serif text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">{quickLinks.map((link) => (<li key={link.name}><a href={link.href} className="text-gray-300 hover:text-white hover:underline">{link.name}</a></li>))}</ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-serif text-white mb-4">Contact Us</h3>
            <div className="text-gray-300 space-y-3">
              <p><span className="font-semibold text-white">Phone:</span><br /><a href="tel:(289) 205-2800" className="hover:text-white hover:underline">(289) 205-2800</a></p>
              <p><span className="font-semibold text-white">Email:</span><br /><a href="mailto:admin@thedermclinic.ca" className="hover:text-white hover:underline">admin@thedermclinic.ca</a></p>
              <p><span className="font-semibold text-white">Address:</span><br />360 Bayly Street West, Ajax, Ontario L1S 1P1, Canada</p>
            </div>
          </div>
        </div>
        <div className="border-t border-white/20 pt-8 text-center md:text-left">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p>© 2025 The Derm Clinic</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="/privacy-policy" className="hover:text-white hover:underline">Privacy Policy</a>
              <a href="https://www.onelocal.com" target="_blank" rel="noopener noreferrer" className="hover:text-white hover:underline">Powered by OneLocal</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}; // Keep existing footer


// --- Main App Component ---

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState('Circumcision'); // Default to Circumcision page

  // Basic Page Rendering Logic (replace with router for real app)
  const renderPage = () => {
    switch (currentPage) {
      case 'About':
        return ( <AboutPage /> ); // Assuming you have an AboutPage component
      case 'NexusTherapy':
        return ( <NexusTherapyPage /> ); // Assuming you have a NexusTherapyPage component
      case 'Circumcision':
        return <CircumcisionPage />;
      // Add cases for other pages like 'Home', 'Services' etc.
      default:
         return <CircumcisionPage />; // Fallback to Circumcision page
    }
  };

  // Placeholder components for routing simulation
  const AboutPage = () => <div>About Page Content</div>;
  const NexusTherapyPage = () => <div>Nexus Therapy Page Content</div>;


  return (
    <div className="font-sans bg-white text-[#4A4A4A]"> {/* Changed default bg to white */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&family=Merriweather:wght@400;700&display=swap');
          /* Added FontAwesome for icons used in buttons/toggles */
          @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css');


          .font-serif { font-family: 'Merriweather', serif; } /* Example serif */
          .font-sans { font-family: 'Lato', sans-serif; } /* Example sans-serif */

          /* Tailwind Prose Customization (Optional) */
           .prose a { color: #17a2b8; }
           .prose a:hover { text-decoration: underline; }
           .prose ul > li::before { background-color: #6b7280; } /* Adjust bullet color */

          /* Hide scrollbar */
          .scrollbar-hide::-webkit-scrollbar { display: none; }
          .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
        `}
      </style>

      {/* Pass currentPage state for highlighting active link */}
      <Header onMenuOpen={() => setIsMenuOpen(true)} currentPage={currentPage} /> 
      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} currentPage={currentPage} />
      
      <main className="pt-20 md:pt-24"> {/* Adjusted padding top */}
        {renderPage()}
      </main>
      
      <Footer />
    </div>
  );
}

