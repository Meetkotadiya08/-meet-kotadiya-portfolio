import React from 'react';
import { profileData } from '../data/profile';
import { 
  Download, 
  Mail, 
  Phone, 
  MapPin, 
  Briefcase, 
  Sparkles, 
  CheckCircle2, 
  Layers, 
  Cpu, 
  ArrowRight,
  ExternalLink,
  ShieldCheck,
  ShoppingBag,
  CreditCard,
  Database,
  Smartphone
} from 'lucide-react';

export const Hero = () => {
  const { personal, keyHighlights } = profileData;

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
    <section
      id="home"
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-b from-blue-50/50 via-white to-slate-50/30 dark:from-slate-900/60 dark:via-slate-950 dark:to-slate-950"
    >
      {/* Background Decorative Grid */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40 dark:opacity-20 pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Core Identity & Actions */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Status & Credential Badges */}
            <div className="flex flex-wrap items-center gap-2.5 mb-6">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800/60 shadow-subtle">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                {personal.status}
              </span>

              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800/60">
                <Briefcase className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                {personal.experience} Hands-on Experience
              </span>

              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-slate-700">
                <MapPin className="w-3 h-3 text-slate-500 dark:text-slate-400" />
                {personal.location}
              </span>
            </div>

            {/* Candidate Name & Title */}
            <div className="mb-4">
              <p className="text-xs sm:text-sm font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-2">
                {personal.fullName}
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-950 dark:text-white tracking-tight leading-[1.12]">
                {personal.professionalName}
              </h1>
              <div className="flex flex-wrap items-center gap-2.5 mt-2">
                <p className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-500 bg-clip-text text-transparent">
                  {personal.title}
                </p>
                <span className="text-sm sm:text-base font-medium px-2.5 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                  Swift &bull; UIKit &bull; SwiftUI
                </span>
              </div>
            </div>

            {/* Headline & Description */}
            <h2 className="text-lg sm:text-xl font-semibold text-slate-800 dark:text-slate-200 mb-3 max-w-2xl leading-snug">
              {personal.headline}
            </h2>

            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-2xl leading-relaxed">
              {personal.shortBio}
            </p>

            {/* Core Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 mb-10 w-full sm:w-auto">
              <a
                href="#experience"
                onClick={(e) => scrollToSection(e, '#experience')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm shadow-md hover:shadow-lg transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
              >
                <span>View Work Experience</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={personal.resumeUrl}
                download="Meet_Kotadiya_iOS_Developer_Resume.pdf"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-900 dark:text-white font-semibold text-sm shadow-sm hover:shadow transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
              >
                <Download className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span>Download Resume</span>
              </a>

              <a
                href="#resume"
                onClick={(e) => scrollToSection(e, '#resume')}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50/60 dark:hover:bg-slate-800/60 font-semibold text-sm transition-all duration-150"
              >
                <span>Preview CV</span>
              </a>
            </div>

            {/* Direct Contact Bar */}
            <div className="w-full pt-6 border-t border-slate-200 dark:border-slate-800/80">
              <div className="flex flex-wrap items-center gap-y-3 gap-x-6 text-sm text-slate-600 dark:text-slate-400">
                {/* LinkedIn with official SVG */}
                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium"
                  aria-label="Meet Kotadiya on LinkedIn (opens in new tab)"
                >
                  <svg className="w-4 h-4 fill-current text-[#0A66C2]" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76c-.97 0-1.75-.79-1.75-1.76s.78-1.75 1.75-1.75 1.75.78 1.75 1.75-.78 1.76-1.75 1.76m1.39 9.74v-8.37H5.07v8.37h2.78z" />
                  </svg>
                  <span>LinkedIn</span>
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>

                {/* Email */}
                <a
                  href={`mailto:${personal.email}`}
                  className="inline-flex items-center gap-2 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium"
                >
                  <Mail className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  <span>{personal.email}</span>
                </a>

                {/* Phone */}
                <a
                  href={`tel:${personal.phone.replace(/[\s-]+/g, '')}`}
                  className="inline-flex items-center gap-2 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium"
                >
                  <Phone className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  <span>{personal.phone}</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Apple Xcode / Swift IDE Card */}
          <div className="lg:col-span-5 w-full">
            <div className="relative rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl overflow-hidden">
              
              {/* Window Header (macOS / Xcode style) */}
              <div className="px-5 py-3.5 bg-slate-50 dark:bg-slate-850 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400/80"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-400/80"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-400/80"></div>
                  <span className="ml-2 font-mono text-xs text-slate-500 dark:text-slate-400">
                    MeetKotadiya.swift
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-semibold text-blue-600 dark:text-blue-400 px-2 py-0.5 rounded bg-blue-50 dark:bg-blue-950/80">
                    Swift 5.10
                  </span>
                  <span className="text-[11px] font-semibold text-emerald-600 dark:text-emerald-400 px-2 py-0.5 rounded bg-emerald-50 dark:bg-emerald-950/80">
                    iOS 18 Ready
                  </span>
                </div>
              </div>

              {/* Code Snippet Card */}
              <div className="p-6 font-mono text-xs sm:text-sm text-slate-800 dark:text-slate-200 leading-relaxed overflow-x-auto">
                <p className="text-slate-400 dark:text-slate-500 italic mb-2">
                  // Production iOS Developer Specification
                </p>
                <p>
                  <span className="text-purple-600 dark:text-purple-400 font-bold">struct</span>{' '}
                  <span className="text-amber-600 dark:text-amber-300 font-semibold">iOSDeveloper</span>{' '}
                  &#123;
                </p>
                
                <div className="pl-4 my-1 space-y-1">
                  <p>
                    <span className="text-purple-600 dark:text-purple-400">let</span> name ={' '}
                    <span className="text-emerald-600 dark:text-emerald-400">"{personal.professionalName}"</span>
                  </p>
                  <p>
                    <span className="text-purple-600 dark:text-purple-400">let</span> role ={' '}
                    <span className="text-emerald-600 dark:text-emerald-400">"{personal.title}"</span>
                  </p>
                  <p>
                    <span className="text-purple-600 dark:text-purple-400">let</span> experience ={' '}
                    <span className="text-emerald-600 dark:text-emerald-400">"{personal.experience} Hands-on"</span>
                  </p>
                  <p>
                    <span className="text-purple-600 dark:text-purple-400">let</span> companies = [
                  </p>
                  <div className="pl-4 text-emerald-600 dark:text-emerald-400">
                    "Codlens Innovation LLP",<br />
                    "Stricker Apps"
                  </div>
                  <p>]</p>
                  <p>
                    <span className="text-purple-600 dark:text-purple-400">let</span> highlights = [
                  </p>
                  <div className="pl-4 text-blue-600 dark:text-blue-300">
                    "E-Commerce & Payments",<br />
                    "POS & NFC/HID Scanner",<br />
                    "Offline-First (SQLite/FMDatabase)",<br />
                    "Reusable UIKit & SwiftUI"
                  </div>
                  <p>]</p>
                </div>

                <div className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-800">
                  <p className="text-slate-400 dark:text-slate-500 italic mb-2">
                    // Immediate production contribution
                  </p>
                  <p className="text-slate-700 dark:text-slate-300">
                    <span className="text-purple-600 dark:text-purple-400 font-bold">func</span>{' '}
                    <span className="text-blue-600 dark:text-blue-400 font-semibold">hireCandidate</span>() -&gt;{' '}
                    <span className="text-emerald-600 dark:text-emerald-400 font-semibold">ProductionReady</span> &#123;
                  </p>
                  <p className="pl-4 text-slate-600 dark:text-slate-400">
                    <span className="text-purple-600 dark:text-purple-400">return</span> .readyToBuild
                  </p>
                  <p>&#125;</p>
                </div>
              </div>

              {/* Bottom Quick Feature Highlights */}
              <div className="p-4 bg-slate-50/80 dark:bg-slate-850/60 border-t border-slate-200 dark:border-slate-800 grid grid-cols-2 gap-3 text-xs">
                <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                  <ShoppingBag className="w-4 h-4 text-blue-500 shrink-0" />
                  <span>Cart, Checkout &amp; Payments</span>
                </div>
                <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                  <CreditCard className="w-4 h-4 text-indigo-500 shrink-0" />
                  <span>POS &amp; NFC/HID Scanning</span>
                </div>
                <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                  <Database className="w-4 h-4 text-cyan-500 shrink-0" />
                  <span>Offline SQLite/FMDatabase</span>
                </div>
                <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                  <Smartphone className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Native Swift &amp; SwiftUI</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
