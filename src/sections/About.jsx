import React from 'react';
import { profileData } from '../data/profile';
import { 
  User, 
  Briefcase, 
  MapPin, 
  Mail, 
  Phone, 
  Calendar, 
  Code2, 
  Compass, 
  CheckCircle, 
  Check, 
  Copy,
  ExternalLink
} from 'lucide-react';

export const About = () => {
  const { personal, about } = profileData;
  const [copiedEmail, setCopiedEmail] = React.useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="about" className="py-20 md:py-28 bg-white dark:bg-slate-950 border-t border-slate-100 dark:border-slate-850">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800/60 mb-3">
            <User className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
            <span>Profile &amp; Biodata</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 dark:text-white tracking-tight">
            About Me
          </h2>
          <p className="mt-2 text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl">
            Professional background, core engineering strengths, and development focus in the Apple ecosystem.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Narrative, Development Focus & Career Interests */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            
            {/* Professional Summary Paragraphs */}
            <div className="space-y-4 text-slate-700 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
              {about.summary.map((paragraph, idx) => (
                <p key={idx} className="text-justify sm:text-left">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Development Focus */}
            <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
              <div className="flex items-center gap-2.5 mb-4">
                <Code2 className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  Technical &amp; Development Focus
                </h3>
              </div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-700 dark:text-slate-300">
                {about.developmentFocus.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400 mt-2 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Career Interests */}
            <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
              <div className="flex items-center gap-2.5 mb-4">
                <Compass className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  Career Interests &amp; Direction
                </h3>
              </div>
              <ul className="space-y-2.5 text-sm text-slate-700 dark:text-slate-300">
                {about.careerInterests.map((interest, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{interest}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Right Column: Professional Biodata / Info Card */}
          <div className="lg:col-span-5">
            <div className="sticky top-28 rounded-2xl bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-850 border border-slate-200 dark:border-slate-800 shadow-lg p-6 sm:p-8">
              
              <div className="flex items-center justify-between pb-6 border-b border-slate-200 dark:border-slate-800">
                <div>
                  <span className="text-xs uppercase tracking-wider font-bold text-blue-600 dark:text-blue-400">
                    Biodata &amp; Profile Card
                  </span>
                  <h3 className="text-xl font-extrabold text-slate-950 dark:text-white mt-1">
                    {personal.professionalName}
                  </h3>
                  <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                    {personal.title}
                  </p>
                </div>
                
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  {personal.status}
                </span>
              </div>

              {/* Information Table Rows */}
              <div className="divide-y divide-slate-100 dark:divide-slate-800 text-sm py-2">
                
                {/* Full Name */}
                <div className="py-3 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1">
                  <span className="text-slate-500 dark:text-slate-400 font-medium">Full Name</span>
                  <span className="font-semibold text-slate-900 dark:text-white sm:text-right">
                    {personal.fullName}
                  </span>
                </div>

                {/* Professional Name */}
                <div className="py-3 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1">
                  <span className="text-slate-500 dark:text-slate-400 font-medium">Professional Name</span>
                  <span className="font-semibold text-slate-900 dark:text-white sm:text-right">
                    {personal.professionalName}
                  </span>
                </div>

                {/* Role */}
                <div className="py-3 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1">
                  <span className="text-slate-500 dark:text-slate-400 font-medium">Role</span>
                  <span className="font-semibold text-slate-900 dark:text-white sm:text-right">
                    {personal.title}
                  </span>
                </div>

                {/* Experience */}
                <div className="py-3 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1">
                  <span className="text-slate-500 dark:text-slate-400 font-medium">Experience</span>
                  <span className="font-semibold text-blue-600 dark:text-blue-400 sm:text-right">
                    {personal.experience} Professional
                  </span>
                </div>

                {/* Location */}
                <div className="py-3 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1">
                  <span className="text-slate-500 dark:text-slate-400 font-medium">Location</span>
                  <span className="font-semibold text-slate-900 dark:text-white sm:text-right">
                    {personal.location}
                  </span>
                </div>

                {/* Status */}
                <div className="py-3 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1">
                  <span className="text-slate-500 dark:text-slate-400 font-medium">Current Status</span>
                  <span className="font-semibold text-emerald-600 dark:text-emerald-400 sm:text-right">
                    {personal.status}
                  </span>
                </div>

                {/* Email */}
                <div className="py-3 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1">
                  <span className="text-slate-500 dark:text-slate-400 font-medium">Email</span>
                  <div className="flex items-center gap-2">
                    <a 
                      href={`mailto:${personal.email}`}
                      className="font-semibold text-blue-600 dark:text-blue-400 hover:underline break-all"
                    >
                      {personal.email}
                    </a>
                    <button
                      onClick={handleCopyEmail}
                      aria-label="Copy email address"
                      className="p-1 rounded hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-500 dark:text-slate-400"
                      title="Copy email"
                    >
                      {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                    </button>
                  </div>
                </div>

                {/* Phone */}
                <div className="py-3 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1">
                  <span className="text-slate-500 dark:text-slate-400 font-medium">Phone</span>
                  <a
                    href={`tel:${personal.phone.replace(/\s+/g, '')}`}
                    className="font-semibold text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400"
                  >
                    {personal.phone}
                  </a>
                </div>

                {/* LinkedIn */}
                <div className="py-3 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1">
                  <span className="text-slate-500 dark:text-slate-400 font-medium">LinkedIn</span>
                  <a
                    href={personal.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-semibold text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    <span>View Profile</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

              </div>

              {/* Bottom Quick Contact Prompt */}
              <div className="mt-6 pt-6 border-t border-slate-200 dark:border-slate-800">
                <a
                  href={`mailto:${personal.email}?subject=Job%20Opportunity%20-%20iOS%20Developer`}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm shadow-sm transition-colors text-center"
                >
                  <Mail className="w-4 h-4" />
                  <span>Send Direct Email</span>
                </a>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
