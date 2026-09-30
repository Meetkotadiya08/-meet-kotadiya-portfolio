import React from 'react';
import { profileData } from '../data/profile';
import { 
  FileText, 
  Download, 
  Eye, 
  CheckCircle2, 
  Sparkles, 
  ShieldCheck, 
  ExternalLink 
} from 'lucide-react';

export const Resume = () => {
  const { personal } = profileData;

  return (
    <section id="resume" className="py-20 md:py-28 bg-white dark:bg-slate-950 border-t border-slate-100 dark:border-slate-850">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main CTA Card */}
        <div className="relative rounded-3xl bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-950 text-white p-8 sm:p-12 lg:p-16 overflow-hidden shadow-xl">
          
          {/* Subtle Ambient Backlight */}
          <div 
            className="absolute -right-24 -top-24 w-96 h-96 rounded-full bg-blue-500/20 blur-3xl pointer-events-none"
            aria-hidden="true"
          />

          <div className="relative max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-blue-200 border border-white/15 mb-6 backdrop-blur-sm">
              <FileText className="w-3.5 h-3.5 text-blue-300" />
              <span>Curriculum Vitae &amp; Resume</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4 leading-tight">
              Download My Resume
            </h2>

            <p className="text-base sm:text-lg text-blue-100 leading-relaxed mb-8">
              For a detailed overview of my professional experience, education, and technical skills, you can download my latest resume.
            </p>

            {/* Resume Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-8">
              {/* View Resume Button */}
              <a
                href={personal.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-white text-blue-900 hover:bg-blue-50 font-bold text-sm shadow-md hover:shadow-lg transition-all"
              >
                <Eye className="w-4 h-4 text-blue-600" />
                <span>View Resume</span>
                <ExternalLink className="w-3.5 h-3.5 text-blue-400" />
              </a>

              {/* Download Resume Button */}
              <a
                href={personal.resumeUrl}
                download="Meet_Kotadiya_iOS_Developer_Resume.pdf"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm border border-blue-400/40 shadow-md hover:shadow-lg transition-all"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume</span>
              </a>
            </div>

            {/* Document Verification & Replacement Guarantee */}
            <div className="pt-6 border-t border-white/15 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-blue-200">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Standard PDF Format</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Updated with Latest Experience</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Recruiter &amp; ATS Ready</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
