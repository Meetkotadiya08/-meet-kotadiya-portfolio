import React, { useState } from 'react';
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
  ChevronRight
} from 'lucide-react';

export const Projects = () => {
  const { projects } = profileData;
  const [showArchitectureGuide, setShowArchitectureGuide] = useState(false);

  return (
    <section id="projects" className="py-20 md:py-28 bg-slate-50/50 dark:bg-slate-900/50 border-t border-slate-100 dark:border-slate-850">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800/60 mb-3">
            <Smartphone className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
            <span>Applications &amp; Architecture</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 dark:text-white tracking-tight">
            Featured Projects
          </h2>
          <p className="mt-2 text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl">
            Real-world iOS applications, system designs, and technical implementations built with Swift and UIKit.
          </p>
        </div>

        {/* Case 1: Projects Available */}
        {projects && projects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((proj) => (
              <div
                key={proj.id || proj.title}
                className="flex flex-col rounded-2xl bg-white dark:bg-slate-850 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-all overflow-hidden"
              >
                {/* Project Image / Screenshot Placeholder */}
                {proj.image && (
                  <div className="w-full h-48 bg-slate-100 dark:bg-slate-800 relative overflow-hidden">
                    <img
                      src={proj.image}
                      alt={proj.title}
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}

                <div className="p-6 sm:p-8 flex flex-col flex-grow">
                  <div className="flex items-center justify-between gap-3 mb-3">
                    <span className="px-2.5 py-1 rounded-md text-xs font-semibold bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800">
                      {proj.role || "iOS Developer"}
                    </span>
                    
                    <div className="flex items-center gap-2">
                      {/* GitHub Link: ONLY rendered if specified individually for this project */}
                      {proj.github && (
                        <a
                          href={proj.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1.5 rounded-lg text-slate-500 hover:text-slate-900 dark:hover:text-white"
                          title="View Source"
                        >
                          <FolderGit2 className="w-4 h-4" />
                        </a>
                      )}
                      {proj.liveDemo && (
                        <a
                          href={proj.liveDemo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline"
                        >
                          <span>Live Demo</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-slate-950 dark:text-white mb-2">
                    {proj.title}
                  </h3>

                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                    {proj.description}
                  </p>

                  {/* Key Features */}
                  {proj.features && proj.features.length > 0 && (
                    <div className="mb-4">
                      <h4 className="text-xs uppercase font-bold text-slate-500 dark:text-slate-400 mb-2">
                        Key Features
                      </h4>
                      <ul className="space-y-1.5 text-xs text-slate-700 dark:text-slate-300">
                        {proj.features.map((feat, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <CheckCircle className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Technical Challenges & Contribution */}
                  {proj.contribution && (
                    <div className="mb-4 p-3 rounded-lg bg-slate-50 dark:bg-slate-800/60 text-xs text-slate-600 dark:text-slate-300">
                      <span className="font-semibold text-slate-800 dark:text-slate-200">My Contribution: </span>
                      {proj.contribution}
                    </div>
                  )}

                  {/* Technologies Tags */}
                  <div className="mt-auto pt-4 border-t border-slate-100 dark:border-slate-800">
                    <div className="flex flex-wrap gap-1.5">
                      {proj.technologies && proj.technologies.map((t) => (
                        <span
                          key={t}
                          className="px-2 py-0.5 rounded text-[11px] font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Case 2: Clean Zero-Fabrication Showcase Architecture (As requested: no invented fake projects) */
          <div className="rounded-2xl bg-white dark:bg-slate-850 border border-slate-200 dark:border-slate-800 p-8 sm:p-12 text-center max-w-3xl mx-auto shadow-sm">
            <div className="w-16 h-16 rounded-2xl bg-blue-50 dark:bg-blue-950/80 text-blue-600 dark:text-blue-400 flex items-center justify-center mx-auto mb-6">
              <FolderGit2 className="w-8 h-8" />
            </div>

            <h3 className="text-2xl font-bold text-slate-950 dark:text-white mb-3">
              Production Projects Showcase
            </h3>

            <p className="text-base text-slate-600 dark:text-slate-400 leading-relaxed mb-6 max-w-xl mx-auto">
              Real-world iOS production applications and architecture case studies are being curated. In accordance with strict professional standards, no unverified or fabricated project details are displayed.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={() => setShowArchitectureGuide(!showArchitectureGuide)}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 font-semibold text-sm transition-colors"
              >
                <Code2 className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span>{showArchitectureGuide ? "Hide Project Schema" : "View Project Data Structure"}</span>
              </button>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm shadow-sm transition-colors"
              >
                <span>Inquire About Recent Work</span>
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>

            {/* Expandable Architecture Schema */}
            {showArchitectureGuide && (
              <div className="mt-8 text-left p-6 rounded-xl bg-slate-900 text-slate-200 font-mono text-xs sm:text-sm overflow-x-auto border border-slate-800">
                <div className="flex items-center justify-between mb-3 text-slate-400 text-xs">
                  <span>src/data/profile.js &gt; projects</span>
                  <span className="text-blue-400">Easy to update anytime</span>
                </div>
                <pre>{`projects: [
  {
    title: "Your iOS App Title",
    description: "Detailed overview of the app's functionality.",
    role: "iOS Developer",
    technologies: ["Swift", "UIKit", "REST APIs", "Firebase", "Core Data"],
    features: [
      "User authentication via Apple & Google Sign-In",
      "Network caching & offline state management"
    ],
    challenges: "Memory optimization and UI responsiveness.",
    contribution: "End-to-end architecture and API integration.",
    image: "", // Optional screenshot path
    github: "", // Optional repository link
    liveDemo: "" // Optional App Store or TestFlight link
  }
]`}</pre>
              </div>
            )}

          </div>
        )}

      </div>
    </section>
  );
};
