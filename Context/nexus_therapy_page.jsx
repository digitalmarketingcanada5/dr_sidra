import React, { useState } from 'react';
import { Menu, X, Phone, Facebook, Instagram, Star, ChevronDown, ChevronRight, PlayCircle, ArrowRight } from 'lucide-react';

// --- Reusable Components ---

// Button Component
const Button = ({ href, children, variant = 'primary', className = '', target, rel, onClick }) => {
  const baseStyle = 'inline-block px-8 py-3 rounded-full text-center font-medium transition-colors duration-300 cursor-pointer'; // Changed to rounded-full
  const styles = {
    primary: 'bg-[#1f5bff] text-white hover:bg-[#1a4ccc]', // Changed color to blue
    outline: 'border-2 border-[#C1D8DA] text-[#C1D8DA] hover:bg-[#C1D8DA] hover:text-white',
    dark: 'bg-[#3B4C50] text-white hover:bg-[#5a7075]',
    blue: 'bg-[#1f5bff] text-white hover:bg-[#1a4ccc]', // Added blue variant
  };

  if (onClick) {
    return (
      <button onClick={onClick} className={`${baseStyle} ${styles[variant]} ${className}`}>
        {children}
      </button>
    );
  }

  return (
    <a href={href} className={`${baseStyle} ${styles[variant]} ${className}`} target={target} rel={rel}>
      {children}
    </a>
  );
};

// Section Container Component
const Section = ({ children, className = '', ...props }) => {
  return (
    <section className={`py-16 md:py-24 ${className}`} {...props}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
};

// Section Header Component
const SectionHeader = ({ title, subtitle, titleColor = 'text-[#4A4A4A]', subtitleColor = 'text-[#5A5A5A]' }) => (
  <div className="text-center max-w-3xl mx-auto mb-12 md:mb-20">
    <h2 className={`text-4xl md:text-5xl font-serif ${titleColor} mb-4 font-bold`}>{title}</h2>
    {subtitle && <p className={`text-lg md:text-xl ${subtitleColor} leading-relaxed`}>{subtitle}</p>}
  </div>
);


// --- Main Page Sections ---

// Header Component
const Header = ({ onMenuOpen, currentPage }) => { // Added currentPage prop
  const navItems = [
    { name: 'About', href: '#', hasDropdown: true, pageId: 'About' },
    { name: 'Services', href: '#', hasDropdown: true, pageId: 'Services' }, // Assuming a pageId
    { name: 'Nexus Therapy', href: '#', hasDropdown: false, pageId: 'NexusTherapy'}, // Added Nexus Therapy
    { name: 'Resources', href: '#', hasDropdown: true, pageId: 'Resources' }, // Assuming a pageId
    { name: 'Shop', href: '/shop', hasDropdown: false, pageId: 'Shop' }, // Assuming a pageId
    { name: 'Contact', href: '/contact', hasDropdown: false, pageId: 'Contact' }, // Assuming a pageId
  ];

  return (
    <header className="absolute top-0 left-0 right-0 z-50 py-4 bg-transparent">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="/" className="flex-shrink-0">
            <img 
              src="https://lirp.cdn-website.com/1176e333/dms3rep/multi/opt/download-d6f07196-394w.png" 
              alt="The logo for the derm clinic is a circle with dots in it." 
              className="h-16 w-auto"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) => (
              <a 
                key={item.name} 
                href={item.href} 
                className={`text-lg font-medium transition-colors duration-300 flex items-center ${
                  currentPage === item.pageId ? 'text-[#1f5bff] font-semibold' : 'text-white hover:text-[#C1D8DA]' // Updated active color
                }`}
              >
                {item.name}
                {item.hasDropdown && <ChevronDown size={18} className="ml-1" />}
              </a>
            ))}
          </nav>

          {/* Desktop Buttons & Social */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-3">
              <a href="https://facebook.com/61578163889152" target="_blank" rel="noopener noreferrer" aria-label="facebook" className="text-white hover:text-[#C1D8DA]">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com/thedermclinicajax" target="_blank" rel="noopener noreferrer" aria-label="instagram" className="text-white hover:text-[#C1D8DA]">
                <Instagram size={20} />
              </a>
            </div>
            <a 
              href="tel:(289) 205-2800" 
              className="flex items-center bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-md hover:bg-white/30 transition-colors"
            >
              <Phone size={18} className="mr-2" />
              Call Us
            </a>
            <Button href="https://book2.getweave.com/c75537b1-99cf-4707-be85-1fdb170d76c3/request-appointment?source=WEBSITE" target="_blank" rel="noopener noreferrer" variant="primary">
              Book an Appointment
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button onClick={onMenuOpen} className="text-white" aria-label="Open menu">
              <Menu size={32} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

// Mobile Menu Component
const MobileMenu = ({ isOpen, onClose, currentPage }) => { // Added currentPage
  const navItems = [
     { name: 'About', href: '#', hasDropdown: true, pageId: 'About' },
     { name: 'Services', href: '#', hasDropdown: true, pageId: 'Services' },
     { name: 'Nexus Therapy', href: '#', hasDropdown: false, pageId: 'NexusTherapy'},
     { name: 'Resources', href: '#', hasDropdown: true, pageId: 'Resources' },
     { name: 'Shop', href: '/shop', hasDropdown: false, pageId: 'Shop' },
     { name: 'Contact', href: '/contact', hasDropdown: false, pageId: 'Contact' },
   ];

  return (
    <div 
      className={`fixed inset-0 z-[100] bg-black/50 transition-opacity duration-300 lg:hidden ${
        isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
      onClick={onClose}
    >
      <div 
        className={`fixed top-0 right-0 h-full w-full max-w-sm bg-[#3B4C50] shadow-lg transition-transform duration-300 overflow-y-auto ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center p-6 border-b border-white/20">
          <h2 className="text-xl font-semibold text-white">Menu</h2>
          <button onClick={onClose} className="text-white" aria-label="Close menu">
            <X size={28} />
          </button>
        </div>
        <nav className="flex flex-col p-6 space-y-4">
          {navItems.map((item) => (
            <a 
              key={item.name} 
              href={item.href} 
              className={`text-lg py-2 flex justify-between items-center border-b border-white/10 ${
                 currentPage === item.pageId ? 'text-[#1f5bff] font-semibold' : 'text-white' // Updated active color
              }`}
            >
              <span>{item.name}</span>
              {item.hasDropdown && <ChevronRight size={18} />}
            </a>
          ))}
        </nav>
        <div className="p-6 border-t border-white/20 space-y-4">
          <Button 
            href="https://book2.getweave.com/c75537b1-99cf-4707-be85-1fdb170d76c3/request-appointment?source=WEBSITE" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="w-full"
            variant="primary" // Ensure blue button
          >
            Book an Appointment
          </Button>
          <a 
            href="tel:(289) 205-2800" 
            className="flex items-center justify-center w-full bg-white/20 backdrop-blur-sm text-white px-4 py-3 rounded-md hover:bg-white/30 transition-colors"
          >
            <Phone size={18} className="mr-2" />
            Call Us
          </a>
          <div className="flex justify-center items-center space-x-4 pt-4">
            <a href="https://facebook.com/61578163889152" target="_blank" rel="noopener noreferrer" aria-label="facebook" className="text-white hover:text-[#C1D8DA]">
              <Facebook size={24} />
            </a>
            <a href="https://instagram.com/thedermclinicajax" target="_blank" rel="noopener noreferrer" aria-label="instagram" className="text-white hover:text-[#C1D8DA]">
              <Instagram size={24} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- About Page Components ---

// Hero Component (About Page Specific)
const AboutHero = () => {
  return (
    <div 
      className="relative min-h-[50vh] md:min-h-[500px] flex items-center justify-start text-white bg-cover bg-center py-20 md:py-32"
      style={{ backgroundImage: "url('https://lirp.cdn-website.com/1176e333/dms3rep/multi/opt/cosmetologist-making-injections-face-woman-beauty-salon-2880w.jpg')" }}
    >
      <div className="absolute inset-0 bg-[#3B4C50] opacity-40 z-10" />
      <div className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl">
          <h1 className="text-4xl md:text-6xl font-serif font-light mb-6 leading-tight">About Us</h1>
          <p className="text-lg md:text-xl mb-8 font-light">The Derm Clinic offers expert dermatological care with a dedicated team. Discover how our innovative services can enhance your skin health and beauty.</p>
          <Button href="https://book2.getweave.com/c75537b1-99cf-4707-be85-1fdb170d76c3/request-appointment?source=WEBSITE" target="_blank" rel="noopener noreferrer">Book an Appointment</Button>
        </div>
      </div>
    </div>
  );
};

// About Intro Component
const AboutIntro = () => {
  return (
    <Section className="bg-[#FBF9F6]">
      <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        <div className="relative">
           <div className="absolute top-[-10px] left-[-10px] w-[95%] h-[95%] border border-[#C1D8DA] rounded-lg z-0"></div>
           <div className="relative rounded-lg overflow-hidden shadow-lg z-10 ml-auto w-[90%]">
             <img src="https://lirp.cdn-website.com/1176e333/dms3rep/multi/opt/bright-empty-cosmetology-cabinet-modern-beauty-clinic-938w.jpg" alt="A medical room with a bed and a trash can." className="w-full h-full object-cover"/>
           </div>
         </div>
        <div className="text-[#5A5A5A]">
          <h2 className="text-4xl md:text-5xl font-serif text-[#4A4A4A] mb-6">Your Skin, Our Commitment: The Derm Clinic Difference</h2>
          <div className="space-y-4 leading-relaxed">
            <p>At The Derm Clinic, your skin health and confidence are our top priorities. Founded and led by Dr. Sara Rathore—a highly regarded family physician with advanced expertise in dermatology—we combine the warmth of comprehensive primary care with the latest innovations in skin health and aesthetics. Dr. Rathore is recognized for her compassionate, patient-centered approach, meticulous attention to detail, and commitment to evidence-based medicine.</p>
            <p>With over a decade of experience serving the Durham region, she specializes in diagnosing and managing a full range of <a href="/skin-clinic" className="text-[#C1D8DA] hover:underline">medical and cosmetic skin concerns</a>, from rashes, <a href="/acne-and-pore-treatments" className="text-[#C1D8DA] hover:underline">acne</a>, and moles to advanced laser therapies and injectable treatments. Our clinic is dedicated to making personalized, expert skin care accessible to the entire community. Whether you are seeking treatment for a medical condition or a <a href="/cosmetic-or-therapeutic-procedures" className="text-[#C1D8DA] hover:underline">cosmetic enhancement</a>, Dr. Rathore and her team ensure a welcoming environment, expert guidance, and outstanding care at every step of your journey.</p>
          </div>
          <Button href="https://book2.getweave.com/c75537b1-99cf-4707-be85-1fdb170d76c3/request-appointment?source=WEBSITE" target="_blank" rel="noopener noreferrer" variant="outline" className="mt-8">Book an Appointment</Button>
        </div>
      </div>
    </Section>
  );
};

// Why Choose Us Component
const WhyChooseUs = () => {
  const points = [
    { title: <>Expert<br/>Skin Care</>, description: "We provide expert skin care solutions, ensuring your skin receives the utmost attention and care, enhancing your natural beauty and confidence." },
    { title: <>Welcoming<br/>Atmosphere</>, description: "We offer a welcoming atmosphere where you feel relaxed and valued, ensuring a seamless and positive experience during your visit." },
    { title: <>Personalized<br/>Treatments</>, description: "We tailor personalized treatments to address your unique skin needs, ensuring optimal results and a truly customized care experience that enhances beauty and confidence." },
  ];
  return (
    <Section className="bg-[#C1D8DA] bg-opacity-20">
      <SectionHeader title="Why Choose Us?" />
      <div className="grid md:grid-cols-3 gap-8 text-center">
        {points.map((point, index) => (
          <div key={index} className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-serif text-[#4A4A4A] mb-4 h-20 flex items-center justify-center">{point.title}</h3>
            <p className="text-[#5A5A5A] leading-relaxed">{point.description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
};

// Memberships Component
const Memberships = () => {
  return (
    <Section className="bg-[#FBF9F6]">
      <SectionHeader title="Memberships" subtitle="The Derm Clinic is proud to be affiliated with the Primary Care Dermatology Society of Canada (PCDSC), a leading organization dedicated to advancing dermatological care among primary care providers. This membership reflects our ongoing commitment to the highest standards in skin health, continuing education, and evidence-based practice." />
      <div className="flex justify-center"><img src="https://lirp.cdn-website.com/1176e333/dms3rep/multi/opt/download--281-29-1920w.png" alt="PCDSC Logo" className="h-24 w-auto"/></div>
    </Section>
  );
};

// Testimonials Component
const Testimonials = () => {
  return (
    <Section className="bg-[#C1D8DA] bg-opacity-20">
      <SectionHeader title="What Our Clients Have To Say" subtitle="Discover why our clients love us. Dive into their experiences and see how The Derm Clinic makes a difference. Your trust and satisfaction are our priorities." />
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg text-center">
        <div className="flex justify-center mb-4">{[...Array(5)].map((_, i) => (<Star key={i} size={24} className="text-yellow-400" fill="currentColor" />))}</div>
        <p className="text-xl italic text-gray-700 leading-relaxed mb-6">"I had an amazing experience at The Derm Clinic. The staff was friendly and professional, and my skin has never looked better. I highly recommend their services!"</p>
        <p className="font-semibold text-lg text-[#4A4A4A]">- Emily S.</p>
      </div>
    </Section>
  );
};

// Call to Action (CTA) Component (About Page Specific)
const AboutCallToAction = () => {
  return (
    <Section className="relative bg-cover bg-center text-white py-24 md:py-32" style={{ backgroundImage: "url('https://lirp.cdn-website.com/1176e333/dms3rep/multi/opt/Screenshot_12-1920w.jpg')" }}>
      <div className="absolute inset-0 bg-[#3B4C50] opacity-40 z-0" />
      <div className="relative z-10 max-w-3xl mx-auto text-center border border-white/50 p-8 md:p-12">
        <h2 className="text-4xl md:text-5xl font-serif mb-6">Transform Your Skin Health Now</h2>
        <p className="text-lg leading-relaxed mb-8">Experience unparalleled skin care with The Derm Clinic. Our team of experts is dedicated to providing personalized treatments that enhance your natural beauty. By booking an appointment, you're choosing quality, professionalism, and the promise of revitalized skin. Let us help you achieve a radiant complexion while embracing a healthier skin lifestyle. Make the step towards transformation today, and see why countless clients trust us for their dermatological needs.</p>
        <Button href="https://book2.getweave.com/c75537b1-99cf-4707-be85-1fdb170d76c3/request-appointment?source=WEBSITE" target="_blank" rel="noopener noreferrer">Book an Appointment</Button>
      </div>
    </Section>
  );
};

// Gallery Component (About Page Specific)
const AboutGallery = () => {
  const images = [
    { src: 'https://lirp.cdn-website.com/1176e333/dms3rep/multi/opt/Ultra+Laser+-+Pigmentation+1-1200w.png', alt: "A before and after photo of a woman's face." },
    { src: 'https://lirp.cdn-website.com/1176e333/dms3rep/multi/opt/Ultra+-+rejuvenation_pigment+1-1200w.png', alt: "A before and after photo of a woman's face." },
  ];
  return (
    <Section className="bg-[#FBF9F6]">
      <SectionHeader title="Discover Stunning Transformations at Our Clinic" />
      <div className="grid md:grid-cols-2 gap-8">{images.map((image, index) => (<div key={index} className="rounded-lg overflow-hidden shadow-lg"><img src={image.src} alt={image.alt} className="w-full h-auto object-cover"/></div>))}</div>
    </Section>
  );
};


// --- Nexus Therapy Page Components ---

// Hero Component (Nexus Therapy Page Specific)
const NexusHero = () => {
  // Assuming a similar structure to AboutHero but with different content
  return (
    <div 
      className="relative min-h-[50vh] md:min-h-[500px] flex items-center justify-start text-white bg-cover bg-center py-20 md:py-32"
      style={{ backgroundImage: "url('https://placehold.co/1920x1080/aBc3c5/FFFFFF?text=Nexus+Therapy+Hero')" }} // Placeholder background
    >
      <div className="absolute inset-0 bg-[#3B4C50] opacity-40 z-10" />
      <div className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl">
          <h1 className="text-4xl md:text-6xl font-serif font-light mb-6 leading-tight">
            Nexus Therapy
          </h1>
          <p className="text-lg md:text-xl mb-8 font-light">
            Revolutionizing mental wellness through immersive VR experiences. Explore our innovative approach to therapy.
          </p>
          <Button href="#contact" variant="primary">Learn More</Button> {/* Updated button text and variant */}
        </div>
      </div>
    </div>
  );
};

// Who Is This For Component
const WhoIsThisFor = () => {
  const targetGroups = [
    { title: "For Private Practice", description: "System for consultations, managed by MH specialist...", image: "https://optim.tildacdn.net/tild3039-6332-4136-a166-663633386635/-/cover/432x360/center/center/-/format/webp/vr-mental-health.jpg.webp", href: "https://psytechvr.com/vr-trainings-with-doctors" },
    { title: "For Health Organizations", description: "Virtual Reality Exposure Therapy for clinics...", image: "https://optim.tildacdn.net/tild3839-3262-4363-b835-333232356639/-/cover/432x360/center/center/-/format/webp/vr-medical-center.jpg.webp", href: "https://psytechvr.com/vr-trainings-in-mental-health-centers" },
    { title: "For Prescribed Home Therapy", description: "Patients' home tasks always bring many questions...", image: "https://optim.tildacdn.net/tild3164-3739-4130-b132-646231393732/-/cover/432x360/center/center/-/format/webp/psytech-vr-pico.jpg.webp", href: "https://psytechvr.com/individual-vr-trainings" },
    { title: "For Educational Institutions", description: "For universities, colleges, K-12 schools...", image: "https://optim.tildacdn.net/tild3434-3838-4366-b462-643536336632/-/cover/432x360/center/center/-/format/webp/psytech-vr-htc.jpg.webp", href: "/vr-training-in-university-and-school" },
    { title: "For Enterprise & HR", description: "For HR Departments: Wellness and Wellbeing Programs...", image: "https://optim.tildacdn.net/tild3533-6332-4133-b335-633832623661/-/cover/432x360/center/center/-/format/webp/psytechvr-enterprise.jpg.webp", href: "https://www.psytechvr.com/vr-training-in-enterprise-and-hr-department" },
    { title: "For Prisons and Police", description: "Our VR mental health system is designed for the benefit...", image: "https://optim.tildacdn.net/tild6536-3238-4436-b263-313833333163/-/cover/432x360/center/center/-/format/webp/vr-therapy-jail.jpg.webp", href: "#" },
  ];

  return (
    <Section className="bg-[#fbfbfd]">
       <SectionHeader title={<><span className="text-[#414042]">Who </span><span className="text-[#414042] font-bold">is this for?</span></>} titleColor="text-[#414042]" />
       <div className="grid md:grid-cols-3 gap-8">
         {targetGroups.map((group, index) => (
           <div key={index} className="flex flex-col bg-white rounded-3xl shadow-lg overflow-hidden group">
             <div className="relative h-64 overflow-hidden">
               <img src={group.image} alt={group.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
               <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
               <h3 className="absolute bottom-4 left-4 text-white text-xl font-semibold z-10">{group.title}</h3>
             </div>
             <div className="p-6 flex flex-col flex-grow">
               <p className="text-gray-600 text-sm mb-4 flex-grow">{group.description}</p>
               {group.href !== "#" && ( // Conditionally render button
                 <Button href={group.href} variant="blue" className="mt-auto w-full md:w-auto">Learn more</Button>
               )}
             </div>
           </div>
         ))}
       </div>
    </Section>
  );
};

// How It Works Component
const HowItWorks = () => {
  return (
    <Section className="bg-[#fbfbfd]">
      <SectionHeader title="How it works?" titleColor="text-[#414042]" />
      <div className="relative max-w-4xl mx-auto rounded-lg overflow-hidden shadow-lg cursor-pointer group">
         <img 
           src="https://optim.tildacdn.net/tild6565-6334-4335-b939-366631666537/-/format/webp/PsyTechVR_therapy.jpg.webp" 
           alt="PsyTechVR Therapy Demo" 
           className="w-full h-auto"
         />
         <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
           <PlayCircle size={80} className="text-white opacity-80 group-hover:opacity-100 transition-opacity" />
         </div>
         <div className="absolute top-4 left-4 bg-black/50 text-white px-3 py-1 rounded text-sm">DEMO</div>
         <div className="absolute bottom-4 left-4 text-white">
           <h3 className="text-2xl font-semibold">PsyTechVR</h3>
           <p className="text-sm">VR exposure therapy system</p>
         </div>
       </div>
    </Section>
  );
};

// Flexible Therapy / Learn How Section (Combined as per HTML structure)
const FlexibleTherapy = () => {
  const features = [
    "Explore clinical applications of VR",
    "Enhance exposure therapy",
    "Increase client engagement",
    "Overcome barriers to in vivo exposure"
  ];

  return (
    <Section className="bg-[#fbfbfd]">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
           <h2 className="text-4xl md:text-5xl font-serif text-[#414042] font-bold mb-6">Learn how to use VR<br/>for therapy</h2>
        </div>
        <div>
           <p className="text-xl text-[#5A5A5A] mb-8">Register for our workshop for mental health professionals providing knowledge and skills to integrate VR into your therapy protocols.</p>
           <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 mb-8">
             {features.map((feature, index) => (
               <li key={index} className="flex items-start">
                 <svg className="w-6 h-6 text-[#1f5bff] mr-2 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                 <span className="text-[#4A4A4A]">{feature}</span>
               </li>
             ))}
           </ul>
           <Button href="https://psytechvr.com/vr-workshop" variant="blue">Register Now</Button>
         </div>
      </div>
    </Section>
  );
};


// What We Treat Component
const WhatWeTreat = () => {
    const treatments = [
      { title: "Fears and Phobias", description: "VR training that provides a safe and controlled environment...", image: "https://optim.tildacdn.net/tild3933-6238-4532-a437-333932633730/-/resize/900x700/-/format/webp/abnormal-psychology-.jpg.webp" },
      { title: "PTSD", description: "VR post-traumatic stress disorder training: Violence, War...", image: "https://optim.tildacdn.net/tild3734-3331-4538-a332-663730616531/-/resize/900x700/-/format/webp/VR-Ptsd.jpg.webp" },
      { title: "OCD", description: "VR training simulates scenarios common for people with OCD...", image: "https://optim.tildacdn.net/tild6363-6234-4132-b561-633539623762/-/resize/900x700/-/format/webp/ocd-vr.jpg.webp" },
      { title: "Addiction", description: "VR simulations to induce cravings in those dependent...", image: "https://optim.tildacdn.net/tild6265-6664-4264-a536-646265363266/-/resize/900x700/-/format/webp/VR_addictions.jpg.webp" },
      { title: "Anger", description: "VR training to help identify triggers, manage emotional responses...", image: "https://optim.tildacdn.net/tild3837-3937-4438-a237-643337626462/-/resize/900x700/-/format/webp/VR_anger.jpg.webp" },
      { title: "ADHD", description: "We'll present the first scenarios in Q4 (2024)", image: "https://optim.tildacdn.net/tild3163-3932-4231-b036-383830303433/-/resize/900x700/-/format/webp/vr-adhd.jpeg.webp" },
    ];
  
    return (
      <Section className="!pt-0 !pb-0"> {/* Remove padding */}
         {/* VR Content Header */}
         <div className="bg-black py-16 md:py-20 text-center">
             <h2 className="text-4xl md:text-5xl font-serif text-white mb-4 font-bold">VR content</h2>
             <p className="text-lg md:text-xl text-gray-300">The most extensive library across the market</p>
         </div>

         <div className="grid md:grid-cols-2">
           {treatments.map((item, index) => (
             <div key={index} className="relative group overflow-hidden h-[50vh] md:h-[calc(37.5vw)]"> {/* Adjusted height */}
               <img src={item.image} alt={item.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
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
      </Section>
    );
  };
  

// VR Exposures Component
const VRExposures = () => {
    const exposures = [
        { title: "Aerophobia (airplanes & flying)", description: "Fear of flying can arise after a traumatic case...", image: "https://static.tildacdn.net/tild6262-3932-4238-a564-653733306564/psytech-vr-aerophobi.gif", href: "https://www.psytechvr.com/train-aerophobia-in-vr" },
        { title: "Amaxophobia (driving & being a passenger)", description: "Amaxophobia is a term used to describe the fear of riding in a car...", image: "https://optim.tildacdn.net/tild6439-6539-4234-a463-366432383232/-/resize/480x480/-/format/webp/fear-of-driving.jpg.webp", href: "https://www.psytechvr.com/train-amaxophobia-in-vr" },
        { title: "Glossophobia (public speaking)", description: "Glossophobia - public speaking fear - is widespread...", image: "https://optim.tildacdn.net/tild3132-3030-4534-b139-316436633535/-/resize/480x480/-/format/webp/psytech-vr-public-sp.jpg.webp", href: "https://www.psytechvr.com/train-public-speaking-with-psytech-vr" },
        { title: "Germophobia (bacteria & germs)", description: "Germophobia is the fear of BACTERIA, diseases, viruses...", image: "https://optim.tildacdn.net/tild6330-6539-4633-a464-636265346232/-/resize/480x480/-/format/webp/germophobia-Psytechv.jpeg.webp", href: "https://www.psytechvr.com/train-germophobia-in-vr" },
        { title: "Insectophobia (cockroaches, flies, etc.)", description: "People avoid life circumstances where it is possible...", image: "https://optim.tildacdn.net/tild6535-3930-4135-a631-343335373866/-/resize/480x480/-/format/webp/psytech-vr-insectoph.jpg.webp", href: "https://www.psytechvr.com/forget-about-insectophobia-in-vr" },
        { title: "Nyctophobia (darkness)", description: "Nyctophobia is an extreme fear of the dark...", image: "https://optim.tildacdn.net/tild6339-6263-4566-b530-343966313231/-/resize/480x480/-/format/webp/psytech-vr-germophob.jpg.webp", href: "https://www.psytechvr.com/train-nyctophobia-in-vr" },
        { title: "Mysophobia (unsanitary conditions)", description: "Mysophobia is an obsessive state of painful fear...", image: "https://optim.tildacdn.net/tild6663-3237-4763-a539-366363303230/-/resize/480x480/-/format/webp/psytech-vr-dirt.jpg.webp", href: "https://www.psytechvr.com/train-mysophobia-in-vr" },
        { title: "Trypanophobia (needles & syringes)", description: "Trypanophobia is a term used to describe the fear of injections...", image: "https://optim.tildacdn.net/tild6434-3333-4137-b961-373036376239/-/resize/480x480/-/format/webp/fear-of-needles.jpg.webp", href: "https://www.psytechvr.com/train-trypanophobia-in-vr" },
    ];

    return (
        <Section className="bg-[#fbfbfd]">
            <SectionHeader title="Some of the VR exposures" subtitle="We publish new scenarios every month" titleColor="text-[#414042]" />
             {/* Simple Horizontal Scroll Container for Mobile/Tablet */}
            <div className="lg:hidden flex overflow-x-auto space-x-4 pb-4 scrollbar-hide">
                 {exposures.map((item, index) => (
                   <a key={index} href={item.href} target="_blank" rel="noopener noreferrer" className="flex-shrink-0 w-72 h-72 block rounded-lg overflow-hidden shadow-lg relative group">
                     <img src={item.image} alt={item.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
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
                   <a key={index} href={item.href} target="_blank" rel="noopener noreferrer" className="aspect-square block rounded-lg overflow-hidden shadow-lg relative group">
                     <img src={item.image} alt={item.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
                     <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/30 transition-opacity duration-300 opacity-100 group-hover:opacity-100"></div>
                     <div className="absolute bottom-0 left-0 right-0 p-4 text-white transition-all duration-300 opacity-100 group-hover:opacity-100 translate-y-0 group-hover:-translate-y-0">
                       <h4 className="text-lg font-semibold mb-1 line-clamp-2">{item.title}</h4>
                       <p className="text-xs line-clamp-3 mb-2 opacity-0 group-hover:opacity-80 transition-opacity duration-300">{item.description}</p>
                       <ArrowRight size={16} className="absolute bottom-4 right-4 opacity-70 group-hover:opacity-100 transition-opacity" />
                     </div>
                   </a>
                 ))}
             </div>
        </Section>
    );
};


// VR Relaxation Component
const VRRelaxation = () => {
    const practices = [
        { title: "Safe Place, powered by AI", subtitle: "Unlimited access to generative AI", image: "https://optim.tildacdn.net/tild3036-6361-4330-b961-313137353563/-/resize/432x480/-/format/webp/mountains.jpg.webp", description: "Users can establish a calm space using AI...", href: "/vr-ai-tool-for-creating-locations-mindgapai" },
        { title: "Breathing exercises in VR", subtitle: "In more than 40 natural environments", image: "https://optim.tildacdn.net/tild6433-3861-4235-a633-663239633633/-/resize/432x480/-/format/webp/vr_breathing.jpg.webp", description: "A virtual assistant designed to enhance breathing...", href: "https://www.psytechvr.com/travel-therapy-in-vr" },
        { title: "Mindfulness in VR", subtitle: "Body scan and other popular meditations", image: "https://optim.tildacdn.net/tild6435-3864-4261-a230-623533326239/-/resize/432x480/-/format/webp/meditation-in-vr.jpeg.webp", description: "Meditations effectively affect cognitive functions...", href: "https://www.psytechvr.com/guided-mindfulness-meditations-in-vr" },
        { title: "Virtual travel in VR", subtitle: "Distract by visiting Australia or Norway", image: "https://optim.tildacdn.net/tild3964-3638-4264-b732-633333333439/-/resize/432x480/-/format/webp/virtual_travelling.jpg.webp", description: "Allows people to be distracted from hectic life...", href: "https://www.psytechvr.com/travel-therapy-in-vr" },
        { title: "Muscle relaxation in VR", subtitle: "Relax your muscles to relieve stress", image: "https://optim.tildacdn.net/tild3532-3461-4133-b766-393031643132/-/resize/432x480/-/format/webp/Muscle_relaxation.jpg.webp", description: "Immerse yourself in a relaxing atmosphere...", href: "#" },
        { title: "Art in VR", subtitle: "Brush, colors, canvas... Create!", image: "https://optim.tildacdn.net/tild3237-3331-4165-b735-316562656539/-/resize/432x480/-/format/webp/vr-painting.jpeg.webp", description: "Remove internal restrictions, get rid of anxiety...", href: "https://www.psytechvr.com/art-therapy-in-vr" },
        { title: "Instrumental therapy in VR", subtitle: "Most famous instruments in VR!", image: "https://optim.tildacdn.net/tild3438-3737-4838-b138-313835653836/-/resize/432x480/-/format/webp/vr-music-threapy.png.webp", description: "Immerse yourself in the transformative power...", href: "#" },
        { title: "Sound therapy in VR", subtitle: "Sounds for relaxation", image: "https://optim.tildacdn.net/tild3631-3863-4262-b433-663264343730/-/resize/432x480/-/format/webp/vr-sound-therapy.png.webp", description: "Discover how you can use the power of sound...", href: "#" },
    ];

    return (
        <Section className="bg-[#fbfbfd] !pt-0"> {/* Remove top padding */}
            {/* Background Image Header */}
            <div 
              className="relative min-h-[400px] md:min-h-[500px] flex items-end p-8 md:p-16 mb-16 md:mb-24 bg-cover bg-center rounded-lg overflow-hidden"
              style={{ backgroundImage: "url('https://optim.tildacdn.net/tild3332-3039-4437-a161-613334383836/-/format/webp/Relaxation-VR.jpg.webp')" }}
            >
                <div className="absolute inset-0 bg-black/30"></div>
                <div className="relative z-10 text-white max-w-lg">
                    <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">Relaxation<br/>practices</h2>
                    <p className="text-lg md:text-xl">VR relaxation practices, including mindfulness meditations, virtual travelling, art therapy, body relaxation, AI-powered Safe Place</p>
                </div>
            </div>

            {/* Grid for Relaxation Practices */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {practices.map((item, index) => (
                    <a key={index} href={item.href} className={`block group rounded-2xl overflow-hidden shadow-lg ${item.href === '#' ? 'pointer-events-none' : ''}`}>
                        <div className="relative pt-[111%]"> {/* Aspect ratio matching */}
                            <img src={item.image} alt={item.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
                        </div>
                        <div className="p-5 bg-white">
                            <p className="text-xs text-[#00aaff] font-semibold uppercase mb-1">{item.subtitle}</p>
                            <h4 className="text-lg font-semibold text-[#4A4A4A] mb-2 group-hover:text-[#1f5bff] transition-colors">{item.title}</h4>
                            <p className="text-sm text-gray-600 line-clamp-3">{item.description}</p>
                        </div>
                    </a>
                ))}
            </div>
        </Section>
    );
};


// Footer Component (Same as before)
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
};


// --- Main App Component ---

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState('NexusTherapy'); // Default to Nexus Therapy for now

  // Basic Page Rendering Logic (replace with router for real app)
  const renderPage = () => {
    switch (currentPage) {
      case 'About':
        return (
          <>
            <AboutHero />
            <AboutIntro />
            <WhyChooseUs />
            <Memberships />
            <Testimonials />
            <AboutCallToAction />
            <AboutGallery />
          </>
        );
      case 'NexusTherapy':
        return (
          <>
            <NexusHero />
            <WhoIsThisFor />
            <HowItWorks />
            <FlexibleTherapy />
            <WhatWeTreat />
            <VRExposures />
            <VRRelaxation />
          </>
        );
      // Add cases for other pages like 'Home', 'Services' etc.
      default:
        return <NexusHero />; // Fallback or default page
    }
  };

  return (
    <div className="font-sans bg-[#fbfbfd] text-[#4A4A4A]"> {/* Updated default bg */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Roboto:wght@300;400;500;700&family=Montserrat:wght@400;500;700&display=swap');
          
          .font-serif { font-family: 'Playfair Display', serif; }
          .font-sans { font-family: 'Roboto', sans-serif; }
          /* Add Montserrat if needed specifically, or update font-sans */
          .font-montserrat { font-family: 'Montserrat', sans-serif; } 

          /* Hide scrollbar */
          .scrollbar-hide::-webkit-scrollbar { display: none; }
          .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
        `}
      </style>

      {/* Pass currentPage state for highlighting active link */}
      <Header onMenuOpen={() => setIsMenuOpen(true)} currentPage={currentPage} /> 
      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} currentPage={currentPage} />
      
      <main>
        {renderPage()}
      </main>
      
      <Footer />
    </div>
  );
}


