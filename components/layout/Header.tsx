'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, Phone, Mail, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/Button';

const navItems = [
  { name: 'Nexus Therapy', href: '/nexus-therapy' },
  { name: 'Medical Aesthetics', href: 'https://www.thedermclinic.ca/', external: true },
  { name: 'Newborn Circumcision', href: '/newborn-circumcision' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="absolute top-0 left-0 right-0 z-50 py-4 bg-gradient-to-b from-black/40 to-transparent">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
              <Image 
                src="/logo.png"
                alt="Nexus Medical Centre Logo"
                width={500}
                height={180}
                priority
                className="h-40 md:h-52 w-auto"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-6">
              {navItems.map((item) => (
                item.external ? (
                  <a 
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white text-base font-medium hover:text-[#5DBDC4] transition-colors duration-300"
                  >
                    {item.name}
                  </a>
                ) : (
                  <Link 
                    key={item.name}
                    href={item.href}
                    className="text-white text-base font-medium hover:text-[#5DBDC4] transition-colors duration-300"
                  >
                    {item.name}
                  </Link>
                )
              ))}
            </nav>

            {/* Desktop Contact & CTA */}
            <div className="hidden lg:flex items-center space-x-4">
              <a 
                href="tel:365-694-5255" 
                className="flex items-center bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-md hover:bg-white/30 transition-colors"
              >
                <Phone size={18} className="mr-2" />
                Call Us
              </a>
              <Button href="/contact" variant="primary">
                Book Appointment
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMenuOpen(true)} 
              className="lg:hidden text-white"
              aria-label="Open menu"
            >
              <Menu size={32} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div 
        className={`fixed inset-0 z-[100] bg-black/50 transition-opacity duration-300 lg:hidden ${
          isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMenuOpen(false)}
      >
        <div 
          className={`fixed top-0 right-0 h-full w-full max-w-sm bg-[#2C3E50] shadow-lg transition-transform duration-300 ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex justify-between items-center p-6 border-b border-white/20">
            <h2 className="text-xl font-semibold text-white">Menu</h2>
            <button onClick={() => setIsMenuOpen(false)} className="text-white" aria-label="Close menu">
              <X size={28} />
            </button>
          </div>
          
          <nav className="flex flex-col p-6 space-y-4">
            {navItems.map((item) => (
              item.external ? (
                <a 
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-lg py-2 border-b border-white/10"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ) : (
                <Link 
                  key={item.name}
                  href={item.href}
                  className="text-white text-lg py-2 border-b border-white/10"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              )
            ))}
          </nav>
          
          <div className="p-6 border-t border-white/20 space-y-4">
            <Button 
              href="/contact" 
              className="w-full"
              variant="primary"
            >
              Book Appointment
            </Button>
            <a 
              href="tel:365-694-5255" 
              className="flex items-center justify-center w-full bg-white/20 backdrop-blur-sm text-white px-4 py-3 rounded-md hover:bg-white/30 transition-colors"
            >
              <Phone size={18} className="mr-2" />
              (365) 694-5255
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
