import React from 'react';
import { profileData } from '../data/profile';
import { Mail, Phone, ExternalLink, ArrowUp } from 'lucide-react';

export const Footer = () => {
  const { personal, navLinks } = profileData;

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const targetEl = document.getElementById(targetId);
    if (targetEl) {
      const navOffset = 80;
      const elementPosition = targetEl.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="bg-slate-100 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 py-12 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-200 dark:border-slate-800">
          
          {/* Identity */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold text-sm">
              MK
            </div>
            <div>
              <p className="font-bold text-slate-900 dark:text-white text-base">
                {personal.fullName}
              </p>
              <p className="text-xs text-slate-500">
                {personal.title} &bull; {personal.location}
              </p>
            </div>
          </div>

          {/* Quick Nav Links */}
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs sm:text-sm font-medium">
            {navLinks.slice(0, 6).map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Social Links (LinkedIn, Email, Phone - NO GitHub) */}
          <div className="flex items-center gap-4 text-slate-600 dark:text-slate-400">
            {/* LinkedIn */}
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-800 text-[#0A66C2] transition-colors"
              aria-label="LinkedIn Profile"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76c-.97 0-1.75-.79-1.75-1.76s.78-1.75 1.75-1.75 1.75.78 1.75 1.75-.78 1.76-1.75 1.76m1.39 9.74v-8.37H5.07v8.37h2.78z" />
              </svg>
            </a>

            {/* Email */}
            <a
              href={`mailto:${personal.email}`}
              className="p-2 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-800 hover:text-blue-600 transition-colors"
              aria-label="Send Email"
            >
              <Mail className="w-5 h-5" />
            </a>

            {/* Phone */}
            <a
              href={`tel:${personal.phone.replace(/\s+/g, '')}`}
              className="p-2 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-800 hover:text-emerald-600 transition-colors"
              aria-label="Call Mobile"
            >
              <Phone className="w-5 h-5" />
            </a>
          </div>

        </div>

        {/* Bottom Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p className="text-slate-500 dark:text-slate-500 text-center sm:text-left">
            &copy; 2026 Kotadiya Meet Maheshbhai. All Rights Reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-slate-500 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
