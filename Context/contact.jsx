import React, { useState } from 'react';
import { Menu, X, Phone, Facebook, Instagram, Star, ChevronDown, ChevronRight, PlayCircle, ArrowRight, MapPin, Mail, Clock } from 'lucide-react'; // Added MapPin, Mail, Clock

// --- Reusable Components ---

// Button Component
const Button = ({ href, children, variant = 'primary', className = '', target, rel, onClick, type }) => { // Added type prop
  const baseStyle = 'inline-block px-8 py-3 rounded-full text-center font-medium transition-colors duration-300 cursor-pointer'; // Changed to rounded-full
  const styles = {
    primary: 'bg-[#C1D8DA] text-white hover:bg-[#aBc3c5]', // Original Teal
    outline: 'border-2 border-[#C1D8DA] text-[#C1D8DA] hover:bg-[#C1D8DA] hover:text-white',
    dark: 'bg-[#3B4C50] text-white hover:bg-[#5a7075]',
    blue: 'bg-[#1f5bff] text-white hover:bg-[#1a4ccc]', // Added blue variant
    contactSubmit: 'bg-[#C1D8DA] text-white hover:bg-[#aBc3c5] w-full md:w-auto', // Specific style for contact submit
  };

  if (onClick || type === 'submit') { // Check for type='submit'
    return (
      <button onClick={onClick} type={type || 'button'} className={`${baseStyle} ${styles[variant]} ${className}`}>
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
    { name: 'Contact', href: '#', hasDropdown: false, pageId: 'Contact' }, // Changed href, added pageId
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
                  currentPage === item.pageId ? 'text-[#C1D8DA] font-semibold' : 'text-white hover:text-[#C1D8DA]' // Reverted active color to teal for consistency
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
            <Button href="https://book2.getweave.com/c75537b1-99cf-4707-be85-1fdb170d76c3/request-appointment?source=WEBSITE" target="_blank" rel="noopener noreferrer" variant="primary" className="rounded-md"> {/* Changed variant back to primary (teal) and shape */}
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
     { name: 'Contact', href: '#', hasDropdown: false, pageId: 'Contact' }, // Changed href
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
                 currentPage === item.pageId ? 'text-[#C1D8DA] font-semibold' : 'text-white' // Reverted active color
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
            className="w-full rounded-md" // Changed shape
            variant="primary" // Ensure teal button
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

// --- About Page Components --- (Keep existing components)
const AboutHero = () => { /* ... existing code ... */ };
const AboutIntro = () => { /* ... existing code ... */ };
const WhyChooseUs = () => { /* ... existing code ... */ };
const Memberships = () => { /* ... existing code ... */ };
const Testimonials = () => { /* ... existing code ... */ }; // We might reuse or adapt this
const AboutCallToAction = () => { /* ... existing code ... */ };
const AboutGallery = () => { /* ... existing code ... */ }; // We might reuse or adapt this

// --- Nexus Therapy Page Components --- (Keep existing components)
const NexusHero = () => { /* ... existing code ... */ };
const WhoIsThisFor = () => { /* ... existing code ... */ };
const HowItWorks = () => { /* ... existing code ... */ };
const FlexibleTherapy = () => { /* ... existing code ... */ };
const WhatWeTreat = () => { /* ... existing code ... */ };
const VRExposures = () => { /* ... existing code ... */ };
const VRRelaxation = () => { /* ... existing code ... */ };


// --- Contact Page Components ---

// Hero Component (Contact Page Specific)
const ContactHero = () => {
  return (
    <div 
      className="relative min-h-[50vh] md:min-h-[500px] flex items-center justify-start text-white bg-cover bg-center py-20 md:py-32"
      style={{ backgroundImage: "url('https://lirp.cdn-website.com/1176e333/dms3rep/multi/opt/mixed-race-model-with-head-rest-hands-watching-camera-ideal-glowy-skin-head-shoulders-crop-symmetrical-shoot-5817487c-2880w.jpg')" }}
    >
      <div className="absolute inset-0 bg-[#3B4C50] opacity-40 z-10" />
      <div className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl">
          <h1 className="text-4xl md:text-6xl font-serif font-light mb-6 leading-tight">Contact Us</h1>
          <p className="text-lg md:text-xl mb-8 font-light text-gray-200"> {/* Adjusted text color for better contrast */}
            Reach out to The Derm Clinic today for all your skincare needs. Our team is ready to assist you. Contact us via phone or email for exemplary service.
          </p>
          <Button 
            href="https://book2.getweave.com/c75537b1-99cf-4707-be85-1fdb170d76c3/request-appointment?source=WEBSITE" 
            target="_blank" 
            rel="noopener noreferrer"
            variant="primary" // Ensure teal button
            className="rounded-md" // Match shape
          >
            Book an Appointment
          </Button>
        </div>
      </div>
    </div>
  );
};

// Contact Info Component
const ContactInfo = () => {
  return (
    <Section className="bg-[#FBF9F6]">
      <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
         {/* Image Section */}
         <div className="relative">
             <div className="absolute top-[-10px] left-[-10px] w-[95%] h-[95%] border border-[#C1D8DA] rounded-lg z-0"></div>
             <div className="relative rounded-lg overflow-hidden shadow-lg z-10 ml-auto w-[90%]">
                 <img 
                   src="https://lirp.cdn-website.com/1176e333/dms3rep/multi/opt/shutterstock_2100061471-3cfd4ebd-938w.jpg" 
                   alt="A woman is hugging a man from behind and smiling." 
                   className="w-full h-full object-cover"
                 />
             </div>
         </div>
         {/* Info Section */}
         <div className="text-[#5A5A5A]">
             <h2 className="text-3xl md:text-4xl font-serif text-[#4A4A4A] mb-8">Contact Information</h2>
             <div className="space-y-6">
                 <div>
                     <h4 className="text-lg font-semibold text-[#4A4A4A] mb-1">Phone</h4>
                     <a href="tel:(289) 205-2800" className="text-[#5A5A5A] hover:text-[#C1D8DA] hover:underline flex items-center">
                         <Phone size={16} className="mr-2"/> (289) 205-2800
                     </a>
                 </div>
                 <div>
                     <h3 className="text-lg font-semibold text-[#4A4A4A] mb-1">Email</h3>
                     <a href="mailto:admin@thedermclinic.ca" className="text-[#5A5A5A] hover:text-[#C1D8DA] hover:underline flex items-center">
                         <Mail size={16} className="mr-2"/> admin@thedermclinic.ca
                     </a>
                 </div>
                 <div>
                     <h3 className="text-lg font-semibold text-[#4A4A4A] mb-1">Address</h3>
                     <p className="flex items-start">
                         <MapPin size={16} className="mr-2 mt-1 flex-shrink-0"/> 
                         360 Bayly Street West, Ajax, Ontario L1S 1P1, Canada
                     </p>
                 </div>
                 <div>
                     <h3 className="text-lg font-semibold text-[#4A4A4A] mb-1">Business Hours</h3>
                     <div className="flex items-start">
                         <Clock size={16} className="mr-2 mt-1 flex-shrink-0"/>
                         <div>
                             <p>Mon - Sat: 10:00 am - 5:00 pm</p>
                             <p>Sunday: Closed</p>
                         </div>
                     </div>
                 </div>
             </div>
         </div>
     </div>
    </Section>
  );
};

// Contact Form Component
const ContactForm = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        message: '',
        optin: false,
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', null

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);
        console.log("Form Data:", formData); // Log data for debugging

        // Simulate API call
        try {
            // Replace with your actual form submission logic (e.g., fetch API call)
            await new Promise(resolve => setTimeout(resolve, 1500)); 
            console.log("Form submitted successfully (simulated)");
            setSubmitStatus('success');
            setFormData({ firstName: '', lastName: '', phone: '', email: '', message: '', optin: false }); // Reset form
        } catch (error) {
            console.error("Form submission error (simulated):", error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

  return (
    <Section className="bg-[#FBF9F6]">
      <SectionHeader title="Reach Out Through Our Contact Form" />
      <div className="max-w-3xl mx-auto bg-white p-8 md:p-12 rounded-lg shadow-lg">
        {submitStatus === 'success' && (
          <div className="mb-6 p-4 bg-green-100 text-green-700 rounded border border-green-200">
            Thank you for contacting us. We will get back to you as soon as possible.
          </div>
        )}
        {submitStatus === 'error' && (
          <div className="mb-6 p-4 bg-red-100 text-red-700 rounded border border-red-200">
            Oops, there was an error sending your message. Please try again later.
          </div>
        )}
        <form onSubmit={handleSubmit}>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
             <div>
               <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">First Name: *</label>
               <input type="text" name="firstName" id="firstName" required value={formData.firstName} onChange={handleChange} className="w-full px-4 py-2 border border-[#C1D8DA] rounded-md focus:ring-[#aBc3c5] focus:border-[#aBc3c5] bg-transparent text-[#4A4A4A]" />
             </div>
             <div>
               <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">Last Name: *</label>
               <input type="text" name="lastName" id="lastName" required value={formData.lastName} onChange={handleChange} className="w-full px-4 py-2 border border-[#C1D8DA] rounded-md focus:ring-[#aBc3c5] focus:border-[#aBc3c5] bg-transparent text-[#4A4A4A]" />
             </div>
             <div>
               <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone: *</label>
               <input type="tel" name="phone" id="phone" required value={formData.phone} onChange={handleChange} className="w-full px-4 py-2 border border-[#C1D8DA] rounded-md focus:ring-[#aBc3c5] focus:border-[#aBc3c5] bg-transparent text-[#4A4A4A]" />
             </div>
             <div>
               <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email: *</label>
               <input type="email" name="email" id="email" required value={formData.email} onChange={handleChange} className="w-full px-4 py-2 border border-[#C1D8DA] rounded-md focus:ring-[#aBc3c5] focus:border-[#aBc3c5] bg-transparent text-[#4A4A4A]" />
             </div>
           </div>
           <div className="mb-6">
             <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message:</label>
             <textarea name="message" id="message" rows="4" value={formData.message} onChange={handleChange} className="w-full px-4 py-2 border border-[#C1D8DA] rounded-md focus:ring-[#aBc3c5] focus:border-[#aBc3c5] bg-transparent text-[#4A4A4A]"></textarea>
           </div>
           <div className="mb-8">
                <label className="flex items-start text-sm text-gray-600">
                    <input 
                        type="checkbox" 
                        name="optin" 
                        checked={formData.optin} 
                        onChange={handleChange} 
                        className="mr-2 mt-1 h-4 w-4 rounded border-gray-300 text-[#C1D8DA] focus:ring-[#aBc3c5]" 
                    />
                    <span>
                        By checking this box, you agree to our <a href="/privacy-policy" className="text-[#C1D8DA] hover:underline">Privacy Policy</a> and consent to receive communications from us. You may unsubscribe at any time.
                    </span>
                </label>
           </div>
           <div className="text-center">
             <Button type="submit" variant="contactSubmit" className="rounded-md" disabled={isSubmitting}> {/* Match style */}
               {isSubmitting ? 'Sending...' : 'Send Message'}
             </Button>
           </div>
         </form>
      </div>
    </Section>
  );
};


// Schedule CTA Component
const ContactScheduleCTA = () => {
    return (
        <Section className="bg-[#C1D8DA]">
            <div className="text-center">
                <h2 className="text-3xl md:text-4xl font-serif text-white mb-6">Schedule Your Appointment Today!</h2>
                <Button 
                    href="https://book2.getweave.com/c75537b1-99cf-4707-be85-1fdb170d76c3/request-appointment?source=WEBSITE" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    variant="dark" // Use dark variant for contrast
                    className="rounded-md" // Match shape
                >
                    Book an Appointment
                </Button>
            </div>
        </Section>
    );
};

// Contact Testimonials (Reusing Testimonials component)
const ContactTestimonials = () => <Testimonials />; // Simple alias for clarity

// Contact Gallery (Reusing AboutGallery component)
const ContactGallery = () => <AboutGallery />; // Simple alias for clarity

// Footer Component (Keep existing component)
const Footer = () => { /* ... existing code ... */ };

// --- Main App Component ---

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState('Contact'); // Set default to Contact

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
       case 'Contact':
         return (
             <>
                 <ContactHero />
                 <ContactInfo />
                 <ContactForm />
                 <ContactScheduleCTA />
                 <ContactTestimonials />
                 <ContactGallery />
             </>
         );
      // Add cases for other pages like 'Home', 'Services' etc.
      default:
        // Perhaps render the Home page as default if not Contact?
        return <ContactHero />; // Fallback or default page
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

          /* Form input placeholder color (optional) */
          input::placeholder, textarea::placeholder {
             color: #9ca3af; /* Tailwind gray-400 */
          }
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

