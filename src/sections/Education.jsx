import React from 'react';
import { profileData } from '../data/profile';
import { 
  GraduationCap, 
  Calendar, 
  MapPin, 
  Building2, 
  BookOpen,
  Award
} from 'lucide-react';

export const Education = () => {
  const { education } = profileData;

  return (
    <section id="education" className="py-20 md:py-28 bg-white dark:bg-slate-950 border-t border-slate-100 dark:border-slate-850">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800/60 mb-3">
            <GraduationCap className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 dark:text-white tracking-tight">
            Education
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">
            Formal educational background in Information Technology and secondary schooling with distinction.
          </p>
        </div>

        {/* Education Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {education.map((item, idx) => {
            const isLatest = idx === 0;
            return (
              <div
                key={item.degree}
                className={`relative flex flex-col rounded-3xl p-7 border transition-all duration-200 ${
                  isLatest
                    ? 'bg-gradient-to-b from-blue-50/50 via-white to-white dark:from-slate-850 dark:via-slate-900 dark:to-slate-900 border-blue-200 dark:border-blue-800/80 shadow-md ring-1 ring-blue-500/10'
                    : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md'
                }`}
              >
                {/* Degree / Level Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-2.5 py-1 rounded-lg text-xs font-bold ${
                    isLatest
                      ? 'bg-blue-600 text-white'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300'
                  }`}>
                    {item.type}
                  </span>

                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-slate-500 dark:text-slate-400">
                    <Calendar className="w-3.5 h-3.5 text-blue-500" />
                    {item.period}
                  </span>
                </div>

                {/* Degree Title */}
                <h3 className="text-lg sm:text-xl font-bold text-slate-950 dark:text-white mb-2 leading-snug">
                  {item.degree}
                </h3>

                {/* Institution & Location */}
                <div className="flex flex-col gap-1 text-sm text-slate-600 dark:text-slate-400 mb-4">
                  <div className="flex items-center gap-1.5 font-semibold text-slate-800 dark:text-slate-200">
                    <Building2 className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />
                    <span>{item.institution}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-slate-500">
                    <MapPin className="w-3.5 h-3.5 shrink-0" />
                    <span>{item.location}</span>
                  </div>
                </div>

                {/* Details */}
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed mt-auto pt-3 border-t border-slate-100 dark:border-slate-800">
                  {item.details}
                </p>

                {/* Graduation Marker */}
                <div className="mt-4 pt-3 flex items-center justify-between text-xs font-semibold text-slate-700 dark:text-slate-300">
                  <span>Year of Completion:</span>
                  <span className="text-blue-600 dark:text-blue-400 font-bold">{item.graduationYear}</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
