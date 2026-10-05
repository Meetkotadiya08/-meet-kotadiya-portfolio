import React from 'react';
import { profileData } from '../data/profile';
import { 
  FolderGit2, 
  ExternalLink, 
  Layers, 
  Cpu, 
  CheckCircle, 
  Code2, 
  Info,
  Smartphone,
  Sparkles,
  ChevronRight,
  ShoppingBag,
  CreditCard,
  Database,
  Building2
} from 'lucide-react';

export const Projects = () => {
  const { projects } = profileData;

  const getProjectIcon = (id) => {
    switch (id) {
      case 'ecommerce-suite':
        return <ShoppingBag className="w-5 h-5 text-blue-600 dark:text-blue-400" />;
      case 'pos-hardware':
        return <CreditCard className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />;
      case 'offline-sync':
        return <Database className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />;
      default:
        return <Smartphone className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />;
    }
  };

  return (
    <section id="projects" className="py-20 md:py-28 bg-slate-50/50 dark:bg-slate-900/50 border-t border-slate-100 dark:border-slate-850">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800/60 mb-3">
            <Smartphone className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
            <span>Production Architecture</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 dark:text-white tracking-tight">
            Featured iOS Implementations
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-3xl leading-relaxed">
            Real-world features, system designs, and technical implementations built for production applications during professional experience.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((proj) => (
            <div
              key={proj.id}
              className="flex flex-col rounded-3xl bg-white dark:bg-slate-850 border border-slate-200 dark:border-slate-800 p-7 sm:p-8 shadow-sm hover:shadow-lg hover:border-blue-300 dark:hover:border-blue-700/60 transition-all duration-200"
            >
              {/* Header Badges */}
              <div className="flex items-center justify-between gap-3 mb-4">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-xl bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400 border border-blue-200/60 dark:border-blue-800">
                    {getProjectIcon(proj.id)}
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                      {proj.company}
                    </span>
                    <p className="text-xs text-slate-500">{proj.role}</p>
                  </div>
                </div>

                <span className="px-2.5 py-1 rounded-md text-[11px] font-bold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-slate-700">
                  Production Case
                </span>
              </div>

              {/* Title & Description */}
              <h3 className="text-xl font-bold text-slate-950 dark:text-white mb-2 leading-snug">
                {proj.title}
              </h3>

              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                {proj.description}
              </p>

              {/* Key Features */}
              <div className="mb-6">
                <h4 className="text-xs uppercase font-bold text-slate-500 dark:text-slate-400 mb-3">
                  Delivered Capabilities
                </h4>
                <ul className="space-y-2 text-xs text-slate-700 dark:text-slate-300">
                  {proj.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contribution Highlight */}
              {proj.contribution && (
                <div className="mb-6 p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  <span className="font-semibold text-slate-900 dark:text-white">Engineering Focus: </span>
                  {proj.contribution}
                </div>
              )}

              {/* Tech Badges */}
              <div className="mt-auto pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-wrap gap-1.5">
                {proj.technologies.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 rounded-md text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700"
                  >
                    {t}
                  </span>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
