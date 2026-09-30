import React from 'react';
import { profileData } from '../data/profile';
import { 
  Briefcase, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  Layers, 
  FileEdit,
  ArrowUpRight,
  Sparkles
} from 'lucide-react';

export const Experience = () => {
  const { experience, personal } = profileData;

  return (
    <section id="experience" className="py-20 md:py-28 bg-white dark:bg-slate-950 border-t border-slate-100 dark:border-slate-850">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800/60 mb-3">
            <Briefcase className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
            <span>Work History</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 dark:text-white tracking-tight">
            Professional Experience
          </h2>
          <p className="mt-2 text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl">
            {personal.experience} of dedicated iOS application engineering, interface development, and API integration.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="relative pl-6 sm:pl-8 border-l-2 border-blue-200 dark:border-blue-900/60 space-y-12 max-w-4xl">
          {experience.map((item) => (
            <div key={item.id} className="relative group">
              
              {/* Timeline Pin Indicator */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-5 h-5 rounded-full border-4 border-white dark:border-slate-950 bg-blue-600 shadow-sm" />

              <div className="rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow">
                
                {/* Header Row: Role, Status & Metadata */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <h3 className="text-xl sm:text-2xl font-bold text-slate-950 dark:text-white">
                        {item.role}
                      </h3>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300">
                        {item.status}
                      </span>
                    </div>
                    <p className="text-sm sm:text-base font-semibold text-blue-600 dark:text-blue-400">
                      {item.company}
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                    <span className="inline-flex items-center gap-1.5 font-medium px-3 py-1 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                      <Calendar className="w-3.5 h-3.5 text-blue-500" />
                      {item.period}
                    </span>
                    <span className="inline-flex items-center gap-1.5 font-medium px-3 py-1 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                      <MapPin className="w-3.5 h-3.5 text-slate-400" />
                      {item.location}
                    </span>
                  </div>
                </div>

                {/* Summary */}
                <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
                  {item.summary}
                </p>

                {/* Responsibilities List */}
                <div className="mb-6">
                  <h4 className="text-xs uppercase tracking-wider font-bold text-slate-500 dark:text-slate-400 mb-3">
                    Key Technical Responsibilities &amp; Workflows
                  </h4>
                  <ul className="space-y-2.5 text-sm text-slate-700 dark:text-slate-300">
                    {item.responsibilities.map((resp, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                        <span className="leading-snug">{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies Used in this role */}
                <div>
                  <h4 className="text-xs uppercase tracking-wider font-bold text-slate-500 dark:text-slate-400 mb-2.5">
                    Stack &amp; Toolchain Utilized
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {item.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md text-xs font-semibold bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
