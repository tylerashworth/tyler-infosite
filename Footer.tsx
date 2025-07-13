import React from 'react';
import { ChevronUp, Linkedin, Instagram, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    {
      icon: Linkedin,
      href: '#',
      label: 'LinkedIn'
    },
    {
      icon: Instagram,
      href: '#',
      label: 'Instagram'
    },
    {
      icon: Mail,
      href: 'mailto:tyler@example.com',
      label: 'Email'
    }
  ];

  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col items-center space-y-8">
          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="flex items-center space-x-2 text-slate-400 hover:text-teal-400 transition-colors duration-300 group"
          >
            <ChevronUp className="w-5 h-5 group-hover:transform group-hover:-translate-y-1 transition-transform duration-300" />
            <span className="font-medium">Back to Top</span>
          </button>

          {/* Social Links */}
          <div className="flex space-x-6">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center text-slate-400 hover:text-teal-400 hover:bg-slate-700 transition-all duration-300 hover:transform hover:scale-110"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-center space-y-2">
            <p className="text-slate-400 text-sm">
              © 2025 Tyler Ashworth. All rights reserved.
            </p>
            <p className="text-slate-500 text-xs">
              Designed and built with passion for great user experiences
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;