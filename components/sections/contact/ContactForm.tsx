'use client';

import React, { useState } from 'react';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';

const SectionHeader: React.FC<{ title: string }> = ({ title }) => (
  <div className="text-center max-w-3xl mx-auto mb-12 md:mb-20">
    <h2 className="text-4xl md:text-5xl font-serif text-[#4A4A4A] mb-4 font-bold">{title}</h2>
  </div>
);

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    message: '',
    optin: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Create email body with form data
      const emailBody = `
First Name: ${formData.firstName}
Last Name: ${formData.lastName}
Phone: ${formData.phone}
Email: ${formData.email}

Message:
${formData.message}

Opt-in for communications: ${formData.optin ? 'Yes' : 'No'}
      `.trim();

      // Create email subject
      const emailSubject = `Contact Form Submission from ${formData.firstName} ${formData.lastName}`;

      // Create mailto link
      const mailtoLink = `mailto:info@nexusmedicalcare.ca?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;

      // Open default email client
      window.location.href = mailtoLink;

      // Show success message after a short delay
      setTimeout(() => {
        setSubmitStatus('success');
        setFormData({ firstName: '', lastName: '', phone: '', email: '', message: '', optin: false });
      }, 500);
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Section className="bg-[#FBF9F6]" id="form">
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
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                First Name: *
              </label>
              <input 
                type="text" 
                name="firstName" 
                id="firstName" 
                required 
                value={formData.firstName} 
                onChange={handleChange} 
                className="w-full px-4 py-2 border border-[#5DBDC4] rounded-md focus:ring-[#5DBDC4] focus:border-[#5DBDC4] bg-transparent text-[#4A4A4A]" 
              />
            </div>
            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                Last Name: *
              </label>
              <input 
                type="text" 
                name="lastName" 
                id="lastName" 
                required 
                value={formData.lastName} 
                onChange={handleChange} 
                className="w-full px-4 py-2 border border-[#5DBDC4] rounded-md focus:ring-[#5DBDC4] focus:border-[#5DBDC4] bg-transparent text-[#4A4A4A]" 
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                Phone: *
              </label>
              <input 
                type="tel" 
                name="phone" 
                id="phone" 
                required 
                value={formData.phone} 
                onChange={handleChange} 
                className="w-full px-4 py-2 border border-[#5DBDC4] rounded-md focus:ring-[#5DBDC4] focus:border-[#5DBDC4] bg-transparent text-[#4A4A4A]" 
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email: *
              </label>
              <input 
                type="email" 
                name="email" 
                id="email" 
                required 
                value={formData.email} 
                onChange={handleChange} 
                className="w-full px-4 py-2 border border-[#5DBDC4] rounded-md focus:ring-[#5DBDC4] focus:border-[#5DBDC4] bg-transparent text-[#4A4A4A]" 
              />
            </div>
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
              Message:
            </label>
            <textarea 
              name="message" 
              id="message" 
              rows={4} 
              value={formData.message} 
              onChange={handleChange} 
              className="w-full px-4 py-2 border border-[#5DBDC4] rounded-md focus:ring-[#5DBDC4] focus:border-[#5DBDC4] bg-transparent text-[#4A4A4A]"
            ></textarea>
          </div>
          <div className="mb-8">
            <label className="flex items-start text-sm text-gray-600">
              <input 
                type="checkbox" 
                name="optin" 
                checked={formData.optin} 
                onChange={handleChange} 
                className="mr-2 mt-1 h-4 w-4 rounded border-gray-300 text-[#5DBDC4] focus:ring-[#5DBDC4]" 
              />
              <span>
                By checking this box, you agree to our Privacy Policy and consent to receive 
                communications from us. You may unsubscribe at any time.
              </span>
            </label>
          </div>
          <div className="text-center">
            <Button 
              type="submit" 
              variant="primary" 
              className="w-full md:w-auto"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </Button>
          </div>
        </form>
      </div>
    </Section>
  );
};
