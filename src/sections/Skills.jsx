import React, { useState } from 'react';
import { profileData } from '../data/profile';
import { 
  Cpu, 
  Layers, 
  Network, 
  ShieldCheck, 
  Database, 
  Package, 
  Wrench, 
  Code, 
  Sparkles,
  CheckCircle2,
  Languages,
  HeartHandshake
} from 'lucide-react';

export const Skills = () => {
  const { skills, softSkills, languages } = profileData;
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Category Icon Resolver
  const getCategoryIcon = (category) => {
    switch (category) {
      case 'iOS Development':
        return <Layers className="w-5 h-5 text-blue-600 dark:text-blue-400" />;
      case 'Networking & APIs':
        return <Network className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />;
      case 'Authentication & Services':
        return <ShieldCheck className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />;
      case 'Data & Storage':
        return <Database className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />;
      case 'Libraries & Packages':
        return <Package className="w-5 h-5 text-amber-600 dark:text-amber-400" />;
      case 'Development Tools':
        return <Wrench className="w-5 h-5 text-rose-600 dark:text-rose-400" />;
      case 'Programming / Web Basics':
        return <Code className="w-5 h-5 text-purple-600 dark:text-purple-400" />;
      default:
        return <Cpu className="w-5 h-5 text-blue-600 dark:text-blue-400" />;
    }
  };

  const categories = ['All', ...skills.map(s => s.category)];

  const filteredSkills = selectedCategory === 'All'
    ? skills
    : skills.filter(s => s.category === selectedCategory);

  return (
    <section id="skills" className="py-20 md:py-28 bg-slate-50/50 dark:bg-slate-900/50 border-t border-slate-100 dark:border-slate-850">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800/60 mb-3">
            <Cpu className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 dark:text-white tracking-tight">
            Skills &amp; Technologies
          </h2>
          <p className="mt-2 text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl">
            A comprehensive overview of my real-world iOS development toolchain, native frameworks, and technical competencies.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-150 ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Categorized Technical Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredSkills.map((group) => (
            <div
              key={group.category}
              className="flex flex-col rounded-2xl bg-white dark:bg-slate-850 border border-slate-200 dark:border-slate-800 p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800">
                  {getCategoryIcon(group.category)}
                </div>
                <div>
                  <h3 className="font-bold text-base text-slate-900 dark:text-white">
                    {group.category}
                  </h3>
                  <span className="text-xs text-slate-500 dark:text-slate-400">
                    {group.skills.length} competencies
                  </span>
                </div>
              </div>

              <p className="text-xs text-slate-500 dark:text-slate-400 mb-4 line-clamp-2">
                {group.description}
              </p>

              {/* Badges / Tech Tags (Categorized, No Fake Percentages) */}
              <div className="flex flex-wrap gap-2 mt-auto pt-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-medium bg-slate-100 dark:bg-slate-800/80 text-slate-800 dark:text-slate-200 border border-slate-200/60 dark:border-slate-700/60 hover:border-blue-300 dark:hover:border-blue-600 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Secondary Grid: Soft Skills & Languages */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-8 border-t border-slate-200 dark:border-slate-800">
          
          {/* Soft Skills */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2 mb-4">
              <HeartHandshake className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                Professional Soft Skills
              </h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {softSkills.map((soft) => (
                <div
                  key={soft.title}
                  className="p-4 rounded-xl bg-white dark:bg-slate-850 border border-slate-200 dark:border-slate-800 shadow-subtle"
                >
                  <div className="flex items-center gap-2 mb-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <h4 className="font-semibold text-sm text-slate-900 dark:text-white">
                      {soft.title}
                    </h4>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed pl-6">
                    {soft.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Languages Spoken */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-2 mb-4">
              <Languages className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                Languages Spoken
              </h3>
            </div>
            <div className="space-y-3">
              {languages.map((lang) => (
                <div
                  key={lang.name}
                  className="flex items-center justify-between p-4 rounded-xl bg-white dark:bg-slate-850 border border-slate-200 dark:border-slate-800 shadow-subtle"
                >
                  <span className="font-semibold text-sm text-slate-900 dark:text-white">
                    {lang.name}
                  </span>
                  <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                    {lang.level}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
