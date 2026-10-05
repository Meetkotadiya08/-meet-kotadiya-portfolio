import React from 'react';
import { profileData } from '../data/profile';
import { 
  Briefcase, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  Layers, 
  Sparkles,
  ShoppingBag,
  CreditCard,
  Database,
  Smartphone,
  ShieldCheck,
  Building2,
  ExternalLink,
  ChevronRight
} from 'lucide-react';

export const Experience = () => {
  const { experience, personal, keyHighlights } = profileData;

  const getHighlightIcon = (id) => {
    switch (id) {
      case 'ecommerce':
        return <ShoppingBag className="w-5 h-5 text-blue-600 dark:text-blue-400" />;
      case 'pos':
        return <CreditCard className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />;
      case 'offline':
        return <Database className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />;
      case 'native':
        return <Smartphone className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />;
      default:
        return <Sparkles className="w-5 h-5 text-blue-600 dark:text-blue-400" />;
    }
  };

  return (
    <section id="experience" className="py-20 md:py-28 bg-white dark:bg-slate-950 border-t border-slate-100 dark:border-slate-850">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800/60 mb-3">
            <Briefcase className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
            <span>Production Track Record</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 dark:text-white tracking-tight">
            Work Experience
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-3xl leading-relaxed">
            {personal.experience} of hands-on professional iOS development, architecting production-ready native applications with Swift, UIKit, and SwiftUI.
          </p>
        </div>

        {/* Domain Key Highlights Cards (from Resume) */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-6">
            <div>
              <span className="text-xs uppercase tracking-wider font-bold text-blue-600 dark:text-blue-400">
                Core Specializations
              </span>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                Key Engineering Highlights
              </h3>
            </div>
            <span className="text-xs font-medium text-slate-500 hidden sm:inline-block">
              Derived from production app deployments
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {keyHighlights.map((hl) => (
              <div
                key={hl.id}
                className="group relative rounded-2xl bg-slate-50/80 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800 p-5 hover:bg-white dark:hover:bg-slate-850 hover:border-blue-300 dark:hover:border-blue-700/60 hover:shadow-md transition-all duration-200"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="p-2.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200/60 dark:border-slate-700 shadow-subtle group-hover:scale-105 transition-transform">
                    {getHighlightIcon(hl.id)}
                  </div>
                  <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300 border border-blue-200/60 dark:border-blue-800/60">
                    {hl.tag}
                  </span>
                </div>
                <h4 className="text-base font-bold text-slate-950 dark:text-white mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {hl.title}
                </h4>
                <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 mb-2">
                  {hl.subtitle}
                </p>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  {hl.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Work Experience Timeline */}
        <div className="relative pl-6 sm:pl-8 border-l-2 border-blue-200 dark:border-blue-900/60 space-y-12 max-w-5xl">
          {experience.map((item, index) => {
            const isLatest = index === 0;
            return (
              <div key={item.id} className="relative group">
                
                {/* Timeline Pin Indicator */}
                <div 
                  className={`absolute -left-[31px] sm:-left-[39px] top-2 w-5 h-5 rounded-full border-4 border-white dark:border-slate-950 shadow-sm transition-transform group-hover:scale-125 ${
                    isLatest ? 'bg-blue-600' : 'bg-slate-400 dark:bg-slate-600'
                  }`} 
                />

                <div className={`rounded-3xl border p-6 sm:p-8 lg:p-9 transition-all duration-200 shadow-sm hover:shadow-lg ${
                  isLatest 
                    ? 'bg-gradient-to-b from-white via-blue-50/20 to-white dark:from-slate-900 dark:via-slate-900/90 dark:to-slate-900 border-blue-200 dark:border-blue-800/80 ring-1 ring-blue-500/10'
                    : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800'
                }`}>
                  
                  {/* Header Row: Role, Company & Metadata */}
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-slate-100 dark:border-slate-800">
                    <div>
                      <div className="flex flex-wrap items-center gap-2.5 mb-1.5">
                        <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                          {item.company}
                        </span>
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 border border-emerald-300/60 dark:border-emerald-800/60">
                          {item.status}
                        </span>
                        {isLatest && (
                          <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-blue-600 text-white uppercase tracking-wider">
                            Latest Experience
                          </span>
                        )}
                      </div>

                      <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-950 dark:text-white tracking-tight">
                        {item.role}
                      </h3>

                      <div className="flex items-center gap-2 mt-1 text-sm font-semibold text-slate-700 dark:text-slate-300">
                        <Building2 className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                        <span>{item.company}</span>
                      </div>
                    </div>

                    {/* Metadata: Dates & Location */}
                    <div className="flex flex-wrap items-center gap-2.5 text-xs sm:text-sm">
                      <span className="inline-flex items-center gap-1.5 font-semibold px-3.5 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200/80 dark:border-slate-700">
                        <Calendar className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                        {item.period}
                      </span>
                      <span className="inline-flex items-center gap-1.5 font-medium px-3.5 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-slate-700">
                        <MapPin className="w-3.5 h-3.5 text-slate-500 dark:text-slate-400" />
                        {item.location}
                      </span>
                    </div>
                  </div>

                  {/* Summary */}
                  <p className="mt-5 text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
                    {item.summary}
                  </p>

                  {/* Focus Badges */}
                  {item.badges && (
                    <div className="flex flex-wrap gap-2 my-5">
                      {item.badges.map((b) => (
                        <span
                          key={b}
                          className="inline-flex items-center gap-1 px-3 py-1 rounded-lg text-xs font-semibold bg-blue-50 dark:bg-blue-950/70 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800/60"
                        >
                          <Sparkles className="w-3 h-3 text-blue-500" />
                          {b}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Key Technical Responsibilities (From Resume) */}
                  <div className="mb-6 pt-2">
                    <h4 className="text-xs uppercase tracking-wider font-bold text-slate-500 dark:text-slate-400 mb-3.5">
                      Core Responsibilities &amp; Production Deliverables
                    </h4>
                    <ul className="space-y-3 text-sm text-slate-700 dark:text-slate-300">
                      {item.responsibilities.map((resp, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0 mt-1" />
                          <span className="leading-relaxed">{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technology Stack Tags */}
                  <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
                    <h4 className="text-xs uppercase tracking-wider font-bold text-slate-500 dark:text-slate-400 mb-3">
                      Technologies &amp; Libraries Utilized
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {item.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200/80 dark:border-slate-700 hover:border-blue-400 dark:hover:border-blue-600 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
