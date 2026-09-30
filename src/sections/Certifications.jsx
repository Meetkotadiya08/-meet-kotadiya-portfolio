import React from 'react';
import { profileData } from '../data/profile';
import { 
  Award, 
  Calendar, 
  Building2, 
  CheckCircle2, 
  FileCheck,
  PlusCircle
} from 'lucide-react';

export const Certifications = () => {
  const { certifications } = profileData;

  return (
    <section id="certifications" className="py-20 md:py-28 bg-slate-50/50 dark:bg-slate-900/50 border-t border-slate-100 dark:border-slate-850">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800/60 mb-3">
            <Award className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
            <span>Credentials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 dark:text-white tracking-tight">
            Certifications &amp; Training
          </h2>
          <p className="mt-2 text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl">
            Verified course completions and specialized technical coursework.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, idx) => (
            <div
              key={idx}
              className="flex flex-col rounded-2xl bg-white dark:bg-slate-850 border border-slate-200 dark:border-slate-800 p-6 sm:p-7 shadow-sm hover:shadow-md transition-all"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-amber-50 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400 border border-amber-200 dark:border-amber-800 flex items-center justify-center">
                  <FileCheck className="w-5 h-5" />
                </div>

                <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                  <Calendar className="w-3 h-3 text-blue-500" />
                  {cert.date}
                </span>
              </div>

              <h3 className="text-lg font-bold text-slate-950 dark:text-white mb-1.5 leading-snug">
                {cert.title}
              </h3>

              <div className="flex items-center gap-1.5 text-sm font-semibold text-blue-600 dark:text-blue-400 mb-3">
                <Building2 className="w-4 h-4 shrink-0" />
                <span>{cert.organization}</span>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed mt-auto pt-4 border-t border-slate-100 dark:border-slate-800">
                {cert.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
