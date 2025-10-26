import React, { useState } from 'react';
import { Menu, X, Phone, Facebook, Instagram, Star, ChevronDown, ChevronRight } from 'lucide-react';

// --- Reusable Components ---

// Button Component
const Button = ({ href, children, variant = 'primary', className = '', target, rel }) => {
  const baseStyle = 'inline-block px-8 py-3 rounded-md text-center font-medium transition-colors duration-300';
  const styles = {
    primary: 'bg-[#C1D8DA] text-white hover:bg-[#aBc3c5]',
    outline: 'border-2 border-[#C1D8DA] text-[#C1D8DA] hover:bg-[#C1D8DA] hover:text-white',
    dark: 'bg-[#3B4C50] text-white hover:bg-[#5a7075]',
  };
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
    { name: 'About', href: '#', hasDropdown: true, isCurrent: true }, // Mark About as current
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
                className={`text-lg font-medium transition-colors duration-300 flex items-center ${
                  item.isCurrent ? 'text-[#C1D8DA] font-semibold' : 'text-white hover:text-[#C1D8DA]'
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
    { name: 'About', href: '#', hasDropdown: true, isCurrent: true },
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
                item.isCurrent ? 'text-[#C1D8DA] font-semibold' : 'text-white'
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

// Hero Component (About Page Specific)
const AboutHero = () => {
  return (
    <div 
      className="relative min-h-[50vh] md:min-h-[500px] flex items-center justify-start text-white bg-cover bg-center py-20 md:py-32"
      style={{ backgroundImage: "url('https://lirp.cdn-website.com/1176e333/dms3rep/multi/opt/cosmetologist-making-injections-face-woman-beauty-salon-2880w.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#3B4C50] opacity-40 z-10" />

      {/* Content */}
      <div className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl">
          <h1 className="text-4xl md:text-6xl font-serif font-light mb-6 leading-tight">
            About Us
          </h1>
          <p className="text-lg md:text-xl mb-8 font-light">
            The Derm Clinic offers expert dermatological care with a dedicated team. Discover how our innovative services can enhance your skin health and beauty.
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

// About Intro Component
const AboutIntro = () => {
  return (
    <Section className="bg-[#FBF9F6]">
      <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        <div className="relative">
           {/* Border element */}
           <div className="absolute top-[-10px] left-[-10px] w-[95%] h-[95%] border border-[#C1D8DA] rounded-lg z-0"></div>
           {/* Image */}
           <div className="relative rounded-lg overflow-hidden shadow-lg z-10 ml-auto w-[90%]">
             <img 
               src="https://lirp.cdn-website.com/1176e333/dms3rep/multi/opt/bright-empty-cosmetology-cabinet-modern-beauty-clinic-938w.jpg" 
               alt="A medical room with a bed and a trash can."
               className="w-full h-full object-cover"
             />
           </div>
         </div>
        <div className="text-[#5A5A5A]">
          <h2 className="text-4xl md:text-5xl font-serif text-[#4A4A4A] mb-6">Your Skin, Our Commitment: The Derm Clinic Difference</h2>
          <div className="space-y-4 leading-relaxed">
            <p>
              At The Derm Clinic, your skin health and confidence are our top priorities. Founded and led by Dr. Sara Rathore—a highly regarded family physician with advanced expertise in dermatology—we combine the warmth of comprehensive primary care with the latest innovations in skin health and aesthetics. Dr. Rathore is recognized for her compassionate, patient-centered approach, meticulous attention to detail, and commitment to evidence-based medicine.
            </p>
            <p>
              With over a decade of experience serving the Durham region, she specializes in diagnosing and managing a full range of <a href="/skin-clinic" className="text-[#C1D8DA] hover:underline">medical and cosmetic skin concerns</a>, from rashes, <a href="/acne-and-pore-treatments" className="text-[#C1D8DA] hover:underline">acne</a>, and moles to advanced laser therapies and injectable treatments. Our clinic is dedicated to making personalized, expert skin care accessible to the entire community. Whether you are seeking treatment for a medical condition or a <a href="/cosmetic-or-therapeutic-procedures" className="text-[#C1D8DA] hover:underline">cosmetic enhancement</a>, Dr. Rathore and her team ensure a welcoming environment, expert guidance, and outstanding care at every step of your journey.
            </p>
          </div>
          <Button 
            href="https://book2.getweave.com/c75537b1-99cf-4707-be85-1fdb170d76c3/request-appointment?source=WEBSITE" 
            target="_blank" 
            rel="noopener noreferrer" 
            variant="outline" 
            className="mt-8"
          >
            Book an Appointment
          </Button>
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
      <SectionHeader 
        title="Memberships"
        subtitle="The Derm Clinic is proud to be affiliated with the Primary Care Dermatology Society of Canada (PCDSC), a leading organization dedicated to advancing dermatological care among primary care providers. This membership reflects our ongoing commitment to the highest standards in skin health, continuing education, and evidence-based practice."
      />
      <div className="flex justify-center">
        <img 
          src="https://lirp.cdn-website.com/1176e333/dms3rep/multi/opt/download--281-29-1920w.png" 
          alt="PCDSC Logo"
          className="h-24 w-auto"
        />
      </div>
    </Section>
  );
};


// Testimonials Component (Using previous simpler structure)
const Testimonials = () => {
  return (
    <Section className="bg-[#C1D8DA] bg-opacity-20">
      <SectionHeader 
        title="What Our Clients Have To Say"
        subtitle="Discover why our clients love us. Dive into their experiences and see how The Derm Clinic makes a difference. Your trust and satisfaction are our priorities."
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

// Call to Action (CTA) Component (About Page Specific)
const AboutCallToAction = () => {
  return (
    <Section 
      className="relative bg-cover bg-center text-white py-24 md:py-32" 
      style={{ backgroundImage: "url('https://lirp.cdn-website.com/1176e333/dms3rep/multi/opt/Screenshot_12-1920w.jpg')" }}
    >
      <div className="absolute inset-0 bg-[#3B4C50] opacity-40 z-0" />
      <div className="relative z-10 max-w-3xl mx-auto text-center border border-white/50 p-8 md:p-12">
        <h2 className="text-4xl md:text-5xl font-serif mb-6">Transform Your Skin Health Now</h2>
        <p className="text-lg leading-relaxed mb-8">
          Experience unparalleled skin care with The Derm Clinic. Our team of experts is dedicated to providing personalized treatments that enhance your natural beauty. By booking an appointment, you're choosing quality, professionalism, and the promise of revitalized skin. Let us help you achieve a radiant complexion while embracing a healthier skin lifestyle. Make the step towards transformation today, and see why countless clients trust us for their dermatological needs.
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

// Gallery Component (About Page Specific)
const AboutGallery = () => {
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
      <SectionHeader title="Discover Stunning Transformations at Our Clinic" />
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

  // Determine which page to render based on URL or state (simplified for this example)
  // For a real app, you'd use a router like React Router.
  // Here, we'll just render the About Us page content.
  const currentPage = 'About'; // Change this to 'Home' to see the previous page

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

      {/* Pass currentPage state if needed for highlighting active link */}
      <Header onMenuOpen={() => setIsMenuOpen(true)} /> 
      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      
      <main>
        {/* Render content based on currentPage */}
        {/* Replace the previous Home page components with About page components */}
        <AboutHero />
        <AboutIntro />
        <WhyChooseUs />
        <Memberships />
        <Testimonials />
        <AboutCallToAction />
        <AboutGallery />
      </main>
      
      <Footer />
    </div>
  );
}

