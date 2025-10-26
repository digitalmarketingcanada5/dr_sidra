import React, { useState } from 'react';
import { Menu, X, Phone, Facebook, Instagram, Star, ChevronDown, ChevronRight } from 'lucide-react';

// --- Reusable Components ---

// Button Component
const Button = ({ href, children, variant = 'primary', className = '' }) => {
  const baseStyle = 'inline-block px-8 py-3 rounded-md text-center font-medium transition-colors duration-300';
  const styles = {
    primary: 'bg-[#C1D8DA] text-white hover:bg-[#aBc3c5]',
    outline: 'border-2 border-[#C1D8DA] text-[#C1D8DA] hover:bg-[#C1D8DA] hover:text-white',
    dark: 'bg-[#3B4C50] text-white hover:bg-[#5a7075]',
  };
  return (
    <a href={href} className={`${baseStyle} ${styles[variant]} ${className}`}>
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
const SectionHeader = ({ title, subtitle }) => (
  <div className="text-center max-w-3xl mx-auto mb-12">
    <h2 className="text-4xl md:text-5xl font-serif text-[#4A4A4A] mb-4">{title}</h2>
    {subtitle && <p className="text-lg text-[#5A5A5A] leading-relaxed">{subtitle}</p>}
  </div>
);

// --- Main Page Sections ---

// Header Component
const Header = ({ onMenuOpen }) => {
  const navItems = [
    { name: 'About', href: '#', hasDropdown: true },
    { name: 'Services', href: '#', hasDropdown: true },
    { name: 'Resources', href: '#', hasDropdown: true },
    { name: 'Shop', href: '/shop', hasDropdown: false },
    { name: 'Contact', href: '/contact', hasDropdown: false },
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
                className="text-white text-lg font-medium hover:text-[#C1D8DA] transition-colors duration-300 flex items-center"
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
            <Button href="https://book2.getweave.com/c75537b1-99cf-4707-be85-1fdb170d76c3/request-appointment?source=WEBSITE" target="_blank" rel="noopener noreferrer">
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
const MobileMenu = ({ isOpen, onClose }) => {
  const navItems = [
    { name: 'About', href: '#', hasDropdown: true },
    { name: 'Services', href: '#', hasDropdown: true },
    { name: 'Resources', href: '#', hasDropdown: true },
    { name: 'Shop', href: '/shop', hasDropdown: false },
    { name: 'Contact', href: '/contact', hasDropdown: false },
  ];

  return (
    <div 
      className={`fixed inset-0 z-[100] bg-black/50 transition-opacity duration-300 lg:hidden ${
        isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
      onClick={onClose}
    >
      <div 
        className={`fixed top-0 right-0 h-full w-full max-w-sm bg-[#3B4C50] shadow-lg transition-transform duration-300 ${
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
              className="text-white text-lg py-2 flex justify-between items-center border-b border-white/10"
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

// Hero Component
const Hero = () => {
  return (
    <div className="relative h-[70vh] md:h-screen min-h-[600px] flex items-center justify-start text-white overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        poster="https://lirp.cdn-website.com/1176e333/dms3rep/multi/opt/wkeKaIlSqmwIPv5xksqA_0_Woman_Portrait_3840x2160.v2.0000000-1920w.jpg"
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src="https://vid.cdn-website.com/1176e333/videos/wkeKaIlSqmwIPv5xksqA_0_Woman_Portrait_3840x2160-v.mp4"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 z-10" />

      {/* Content */}
      <div className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl">
          <h1 className="text-4xl md:text-6xl font-serif font-light mb-6 leading-tight">
            Your Trusted Skin Clinic for Wellness & Aesthetics
          </h1>
          <p className="text-lg md:text-xl mb-8 font-light">
            Located in Ajax, Ontario, The Derm Clinic excels in medical and skin care services, offering innovative treatments that enhance beauty and wellness.
          </p>
          <Button 
            href="https://book2.getweave.com/c75537b1-99cf-4707-be85-1fdb170d76c3/request-appointment?source=WEBSITE" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            Book an Appointment
          </Button>
        </div>
      </div>
    </div>
  );
};

// Welcome Component
const Welcome = () => {
  return (
    <Section className="bg-[#FBF9F6]">
      <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        <div className="rounded-lg overflow-hidden shadow-lg">
          <img 
            src="https://lirp.cdn-website.com/1176e333/dms3rep/multi/opt/connecting-with-others-concept-with-couple-938w.jpg" 
            alt="A man and a woman are laying head to head on a white surface."
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h2 className="text-4xl md:text-5xl font-serif text-[#4A4A4A] mb-6">Welcome to The Derm Clinic</h2>
          <div className="text-[#5A5A5A] space-y-4 leading-relaxed">
            <p>
              The Derm Clinic is dedicated to enhancing skin health through expert <a href="/facial-rejuvenation" className="text-[#C1D8DA] hover:underline">facial rejuvenation</a> and tailored skincare treatments. Our vision is to be a one stop shop for all your skincare needs, ranging from dermatologic disease to cosmetic concerns. Located in the heart of the community, our clinic offers cutting-edge services designed to improve skin tone, texture, and radiance.
            </p>
            <p>
              Since our founding in 2025, we have remained at the forefront of skincare innovations, combining laser treatments with advanced ingredients to deliver exceptional results.
            </p>
            <p>
              We invite you to explore our comprehensive dermatological services to discover how our expertise can help you achieve your skin goals with lasting radiance.
            </p>
          </div>
          <Button href="/about" variant="outline" className="mt-8">
            About Us
          </Button>
        </div>
      </div>
    </Section>
  );
};

// Services Component
const Services = () => {
  const services = [
    {
      title: 'Facial Rejuvenation',
      imgSrc: 'https://irp.cdn-website.com/1176e333/dms3rep/multi/close-up-shot-tender-feminine-dark-skinned-woman-with-curly-hairstyle-touching-chin-gently-with-fingers-opening-mouth-sensually-gazing-naked.jpg',
      alt: 'Facial Rejuvenation',
      href: '/facial-rejuvenation',
    },
    {
      title: 'Acne and Pore Treatments',
      imgSrc: 'https://irp.cdn-website.com/1176e333/dms3rep/multi/shutterstock_1840624633.jpg',
      alt: 'Acne and Pore Treatments',
      href: '/acne-and-pore-treatments',
    },
    {
      title: 'Scar Treatment',
      imgSrc: 'https://irp.cdn-website.com/1176e333/dms3rep/multi/shutterstock_2007699800.jpg',
      alt: 'Scar Treatment',
      href: '/scar-treatment',
    },
  ];

  return (
    <Section className="bg-[#FBF9F6]">
      <SectionHeader 
        title="Our Services"
        subtitle="Explore our comprehensive range of dermatological services designed to enhance your skin's health and beauty. From rejuvenating facials to advanced laser treatments, our clinic provides tailored solutions to meet your unique skincare needs. Discover how our professional expertise can transform your skin today."
      />
      <div className="grid md:grid-cols-3 gap-8">
        {services.map((service) => (
          <a 
            key={service.title} 
            href={service.href} 
            className="group block rounded-lg overflow-hidden shadow-lg relative"
          >
            <img 
              src={service.imgSrc} 
              alt={service.alt}
              className="w-full h-96 object-cover transform group-hover:scale-105 transition-transform duration-300" 
            />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-300" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h3 className="text-white text-2xl font-serif bg-[#C1D8DA] bg-opacity-90 p-4 rounded-md inline-block relative -bottom-4 group-hover:bottom-0 transition-all duration-300">
                {service.title}
              </h3>
            </div>
          </a>
        ))}
      </div>
    </Section>
  );
};

// Reusable Feature Section Component
const FeatureSection = ({ title, children, imgSrc, imgAlt, reverse = false }) => {
  return (
    <Section className={reverse ? 'bg-[#C1D8DA] bg-opacity-20' : 'bg-[#FBF9F6]'}>
      <div className={`grid md:grid-cols-2 gap-12 md:gap-16 items-center ${reverse ? 'md:flex-row-reverse' : ''}`}>
        <div className={`rounded-lg overflow-hidden shadow-lg ${reverse ? 'md:order-last' : ''}`}>
          <img 
            src={imgSrc} 
            alt={imgAlt}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="text-[#5A5A5A]">
          <h2 className="text-4xl md:text-5xl font-serif text-[#4A4A4A] mb-6">{title}</h2>
          <div className="space-y-4 leading-relaxed">
            {children}
          </div>
          <Button href="/contact" variant="outline" className="mt-8">
            Learn More
          </Button>
        </div>
      </div>
    </Section>
  );
};

// Blog Component
const Blog = () => {
  const posts = [
    {
      title: 'Target Stubborn Pigmentation: Advanced Solutions for Even-Toned Autumn Skin',
      date: 'October 14, 2025',
      description: 'Even out pigmentation this fall. Discover expert laser toning and pigmentation treatments for flawless skin at The Derm Clinic in Ajax.',
      imgSrc: 'https://lirp.cdn-website.com/1176e333/dms3rep/multi/opt/6+%286%29-1920w.jpg',
      alt: "A woman in a white robe is smiling and touching her face.",
      href: '/target-stubborn-pigmentation-advanced-solutions-for-even-toned-autumn-skin',
    },
    {
      title: 'Combating Fall Hair Shedding: Proven Hair Regrowth Treatments That Work',
      date: 'October 2, 2025',
      description: 'Beat seasonal hair loss. Discover expert-approved regrowth and scalp revitalization therapies this autumn at The Derm Clinic.',
      imgSrc: 'https://lirp.cdn-website.com/1176e333/dms3rep/multi/opt/5jpg-1920w.jpg',
      alt: "A woman with long hair is wrapped in a towel and smiling.",
      href: '/combating-fall-hair-shedding-proven-hair-regrowth-treatments-that-work',
    },
    {
      title: 'Get Holiday-Ready: Botox & Fillers for a Youthful Fall Refresh',
      date: 'September 16, 2025',
      description: 'Look your best for holiday events! Learn how Botox and dermal fillers can rejuvenate your look in Ajax at The Derm Clinic.',
      imgSrc: 'https://lirp.cdn-website.com/1176e333/dms3rep/multi/opt/4+%285%29-1920w.jpg',
      alt: "A woman is getting a botox injection in her face.",
      href: '/get-holiday-ready-botox-fillers-for-a-youthful-fall-refresh',
    },
  ];

  return (
    <Section className="bg-[#FBF9F6]">
      <SectionHeader 
        title="Our Blog"
        subtitle="Discover expert tips and the latest trends in dermatology through our insightful blog. We delve into skin care treatments, industry innovations, and specialized advice, making it a go-to resource for maintaining healthy, radiant skin. Start exploring now to enrich your skin care knowledge."
      />
      <div className="grid md:grid-cols-3 gap-8">
        {posts.map((post) => (
          <div key={post.title} className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col">
            <a href={post.href} className="block overflow-hidden">
              <img 
                src={post.imgSrc} 
                alt={post.alt}
                className="w-full h-64 object-cover transform hover:scale-105 transition-transform duration-300"
              />
            </a>
            <div className="p-6 flex flex-col flex-grow">
              <p className="text-sm text-gray-500 mb-2">{post.date}</p>
              <h3 className="text-xl font-serif text-[#4A4A4A] mb-3 flex-grow">
                <a href={post.href} className="hover:text-[#C1D8DA]">{post.title}</a>
              </h3>
              <p className="text-gray-600 mb-4">{post.description}</p>
              <a href={post.href} className="font-medium text-[#C1D8DA] hover:underline mt-auto">
                Read more →
              </a>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-12">
        <Button href="/blog" variant="outline">
          Blog
        </Button>
      </div>
    </Section>
  );
};

// Testimonials Component
const Testimonials = () => {
  return (
    <Section className="bg-[#C1D8DA] bg-opacity-20">
      <SectionHeader 
        title="What Our Clients Have To Say"
        subtitle="Discover how our expert dermatological services have transformed lives. Our clients' heartfelt testimonials are a testament to our commitment to exceptional care and transformative results. Dive into their experiences and see how we can help you achieve your skin goals too."
      />
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg text-center">
        <div className="flex justify-center mb-4">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={24} className="text-yellow-400" fill="currentColor" />
          ))}
        </div>
        <p className="text-xl italic text-gray-700 leading-relaxed mb-6">
          "I had an amazing experience at The Derm Clinic. The staff was friendly and professional, and my skin has never looked better. I highly recommend their services!"
        </p>
        <p className="font-semibold text-lg text-[#4A4A4A]">
          - Emily S.
        </p>
      </div>
    </Section>
  );
};

// Call to Action (CTA) Component
const CallToAction = () => {
  return (
    <Section 
      className="bg-cover bg-center text-white" 
      style={{ backgroundImage: "url('https://lirp.cdn-website.com/1176e333/dms3rep/multi/opt/Screenshot_12-1920w.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-serif mb-6">Ready for Radiant Skin?</h2>
        <p className="text-lg leading-relaxed mb-8">
          Unlock the secrets to youthful, vibrant skin with our expert treatments at The Derm Clinic. Our advanced laser treatments reduce wrinkles and improve skin radiance, leaving you feeling confident. By booking an appointment, you'll experience personalized care that targets your unique needs, all in the comfort of a state-of-the-art facility. Don’t miss the chance to transform your skin’s health and glow with the top specialists in the field.
        </p>
        <Button 
          href="https://book2.getweave.com/c75537b1-99cf-4707-be85-1fdb170d76c3/request-appointment?source=WEBSITE" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          Book an Appointment
        </Button>
      </div>
    </Section>
  );
};

// Gallery Component
const Gallery = () => {
  const images = [
    {
      src: 'https://lirp.cdn-website.com/1176e333/dms3rep/multi/opt/Ultra+Laser+-+Pigmentation+1-1200w.png',
      alt: "A before and after photo of a woman's face.",
    },
    {
      src: 'https://lirp.cdn-website.com/1176e333/dms3rep/multi/opt/Ultra+-+rejuvenation_pigment+1-1200w.png',
      alt: "A before and after photo of a woman's face.",
    },
  ];

  return (
    <Section className="bg-[#FBF9F6]">
      <SectionHeader title="See Transformations Through Our Expert Care" />
      <div className="grid md:grid-cols-2 gap-8">
        {images.map((image, index) => (
          <div key={index} className="rounded-lg overflow-hidden shadow-lg">
            <img 
              src={image.src} 
              alt={image.alt}
              className="w-full h-auto object-cover"
            />
          </div>
        ))}
      </div>
    </Section>
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
        {/* Top Footer Section */}
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Column 1: Logo & Social */}
          <div className="space-y-6">
            <a href="/">
              <img 
                src="https://lirp.cdn-website.com/1176e333/dms3rep/multi/opt/download-d6f07196-445w.png" 
                alt="The logo for the derm clinic is a circle with dots in it." 
                className="h-auto w-64"
              />
            </a>
            <p className="text-sm text-gray-300">
              *Please note that individual results from our services and treatments may vary.
            </p>
            <div className="flex items-center space-x-4">
              <a href="https://facebook.com/61578163889152" target="_blank" rel="noopener noreferrer" aria-label="facebook" className="text-gray-300 hover:text-white">
                <Facebook size={24} />
              </a>
              <a href="https://instagram.com/thedermclinicajax" target="_blank" rel="noopener noreferrer" aria-label="instagram" className="text-gray-300 hover:text-white">
                <Instagram size={24} />
              </a>
            </div>
          </div>
          
          {/* Column 2: Hours */}
          <div className="space-y-4">
            <h3 className="text-xl font-serif text-white mb-4">Hours</h3>
            <div className="text-gray-300 space-y-2">
              <p className="flex justify-between">
                <span>Mon - Sat</span>
                <span>10:00 am - 5:00 pm</span>
              </p>
              <p className="flex justify-between">
                <span>Sunday</span>
                <span>Closed</span>
              </p>
            </div>
          </div>

          {/* Column 3: Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-serif text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-300 hover:text-white hover:underline">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Column 4: Contact Us */}
          <div className="space-y-4">
            <h3 className="text-xl font-serif text-white mb-4">Contact Us</h3>
            <div className="text-gray-300 space-y-3">
              <p>
                <span className="font-semibold text-white">Phone:</span><br />
                <a href="tel:(289) 205-2800" className="hover:text-white hover:underline">(289) 205-2800</a>
              </p>
              <p>
                <span className="font-semibold text-white">Email:</span><br />
                <a href="mailto:admin@thedermclinic.ca" className="hover:text-white hover:underline">admin@thedermclinic.ca</a>
              </p>
              <p>
                <span className="font-semibold text-white">Address:</span><br />
                360 Bayly Street West, Ajax, Ontario L1S 1P1, Canada
              </p>
            </div>
          </div>
        </div>
        
        {/* Bottom Footer Section */}
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

  return (
    <div className="font-sans bg-[#FBF9F6] text-[#4A4A4A]">
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Roboto:wght@300;400;500;700&display=swap');
          
          .font-serif {
            font-family: 'Playfair Display', serif;
          }
          
          .font-sans {
            font-family: 'Roboto', sans-serif;
          }
        `}
      </style>

      <Header onMenuOpen={() => setIsMenuOpen(true)} />
      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      
      <main>
        <Hero />
        <Welcome />
        <Services />
        
        <FeatureSection
          title="Tailored Treatments By Our Skilled Expert"
          imgSrc="https://lirp.cdn-website.com/1176e333/dms3rep/multi/opt/10-0bf4cfe9-1145w.jpeg"
          imgAlt="A woman in a blue shirt is standing in a park with her arms crossed."
        >
          <p>
            With our comprehensive suite of <a href="/skin-clinic" className="text-[#C1D8DA] hover:underline">medical and cosmetic dermatology services</a>, we’re able to offer truly personalized treatment plans that target your exact needs and deliver visible, radiant results. Whether you’re looking to rejuvenate your complexion, fade sun damage, <a href="/acne-and-pore-treatments" className="text-[#C1D8DA] hover:underline">minimize pores</a>, or address <a href="/pigmentation" className="text-[#C1D8DA] hover:underline">stubborn pigmentation</a>, our advanced lasers and expertly selected treatments are here to help you achieve your skin goals. Stay tuned for a complete list of expanded services soon to be added to our new website—bringing the best in modern skin care to Ajax and beyond.
          </p>
          <p>
            Schedule a consultation and experience our advanced care tailored to your unique needs. These procedures not only support skin health but enrich your overall appearance with long-lasting benefits. We pride ourselves on providing an inclusive service environment dedicated to delivering results that exceed expectations.
          </p>
        </FeatureSection>
        
        <FeatureSection
          title="Next-Level Laser Rejuvenation Technology"
          imgSrc="https://lirp.cdn-website.com/1176e333/dms3rep/multi/opt/shutterstock_2364206617-1145w.jpg"
          imgAlt="laser therapy"
          reverse={true}
        >
          <p>
            At The Derm Clinic, we are committed to bringing you the latest advancements in skin care. We are proud to announce the addition of an advanced, innovative non-ablative, fractionated laser system to our suite of advanced dermatology tools. This cutting-edge laser technology is designed to address a wide range of skin concerns, from pigmentation and sun damage to fine lines, wrinkles, and overall texture improvement.
          </p>
          <p>
            It offers a gentle, non-invasive treatment that promotes collagen production and skin renewal while minimizing downtime. Whether you’re looking to brighten your complexion, <a href="/scar-treatment" className="text-[#C1D8DA] hover:underline">reduce the appearance of scars</a>, <a href="/laser-toning" className="text-[#C1D8DA] hover:underline">smooth uneven skin tone</a>, or achieve a youthful glow, this innovative laser delivers fast, comfortable, and highly customizable results. Experience the next level in skin rejuvenation at The Derm Clinic, where technology and expertise come together to help you reveal your clearest, most radiant skin.
          </p>
        </FeatureSection>
        
        <Blog />
        <Testimonials />
        <CallToAction />
        <Gallery />
      </main>
      
      <Footer />
    </div>
  );
}
