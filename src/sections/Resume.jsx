import React, { useState } from 'react';
import { profileData } from '../data/profile';
import { 
  FileText, 
  Download, 
  Eye, 
  CheckCircle2, 
  Sparkles, 
  ShieldCheck, 
  ExternalLink,
  Printer,
  FileCheck2,
  ZoomIn
} from 'lucide-react';

export const Resume = () => {
  const { personal, keyHighlights, experience, skills, education, certifications, coreStrengths, languages } = profileData;
  const [showFullPreview, setShowFullPreview] = useState(false);

  return (
    <section id="resume" className="py-20 md:py-28 bg-slate-50/50 dark:bg-slate-900/50 border-t border-slate-100 dark:border-slate-850">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800/60 mb-3">
            <FileText className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
            <span>Curriculum Vitae</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 dark:text-white tracking-tight">
            Resume &amp; Credentials
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-3xl leading-relaxed">
            Download my latest ATS-formatted 1-page resume with verified work experience at Codlens Innovation LLP and Stricker Apps.
          </p>
        </div>

        {/* CTA Hero Card */}
        <div className="relative rounded-3xl bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-950 text-white p-8 sm:p-12 lg:p-14 overflow-hidden shadow-2xl mb-12">
          
          {/* Subtle Ambient Backlight */}
          <div 
            className="absolute -right-24 -top-24 w-96 h-96 rounded-full bg-blue-500/20 blur-3xl pointer-events-none"
            aria-hidden="true"
          />

          <div className="relative max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-blue-200 border border-white/15 mb-6 backdrop-blur-sm">
              <Sparkles className="w-3.5 h-3.5 text-blue-300" />
              <span>Updated &bull; 2026 Production Edition</span>
            </div>

            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4 leading-tight">
              Get Meet's Official Resume
            </h3>

            <p className="text-base sm:text-lg text-blue-100 leading-relaxed mb-8 max-w-2xl">
              Includes full technical skill breakdown, key domain highlights (E-commerce, POS &amp; Offline-First), comprehensive work experience, academic background, and direct contact details.
            </p>

            {/* Resume Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-8">
              {/* Direct Download Button */}
              <a
                href={personal.resumeUrl}
                download="Meet_Kotadiya_iOS_Developer_Resume.pdf"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-blue-500 hover:bg-blue-400 text-white font-bold text-sm shadow-lg hover:shadow-xl transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume (PDF)</span>
              </a>

              {/* View in New Tab Button */}
              <a
                href={personal.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-white text-blue-950 hover:bg-blue-50 font-bold text-sm shadow-md hover:shadow-lg transition-all duration-150"
              >
                <Eye className="w-4 h-4 text-blue-600" />
                <span>Open PDF in Tab</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
              </a>

              {/* Preview Toggle Button */}
              <button
                onClick={() => setShowFullPreview(!showFullPreview)}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-sm border border-white/20 transition-all duration-150 backdrop-blur-sm"
              >
                <ZoomIn className="w-4 h-4 text-blue-300" />
                <span>{showFullPreview ? "Hide In-Page Preview" : "Interactive In-Page Preview"}</span>
              </button>
            </div>

            {/* Document Verification Guarantee */}
            <div className="pt-6 border-t border-white/15 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-blue-200">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>1-Page ATS Standard Format</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Verified Work History</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Recruiter &amp; HR Ready</span>
              </div>
            </div>

          </div>

        </div>

        {/* In-Browser Document Preview (Rendered directly matching the PDF) */}
        {showFullPreview && (
          <div className="transition-all duration-300 mb-12">
            <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xl overflow-hidden max-w-4xl mx-auto">
              
              {/* Document Window Top Bar */}
              <div className="bg-slate-100 dark:bg-slate-800 px-6 py-3.5 border-b border-slate-200 dark:border-slate-700 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <FileText className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  <span className="font-semibold text-xs text-slate-800 dark:text-slate-200">
                    Meet_Kotadiya_Resume.pdf &bull; Live ATS Preview
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <a
                    href={personal.resumeUrl}
                    download="Meet_Kotadiya_iOS_Developer_Resume.pdf"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold shadow-sm transition-colors"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download</span>
                  </a>
                </div>
              </div>

              {/* Document Canvas (A4 White Paper Look) */}
              <div className="p-6 sm:p-10 lg:p-12 bg-white text-[#111827] font-sans text-xs sm:text-sm leading-normal selection:bg-blue-200">
                
                {/* Header */}
                <div className="text-center pb-4 mb-4 border-b border-slate-200">
                  <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#111827]">
                    MEET KOTADIYA
                  </h1>
                  <p className="text-xs sm:text-sm font-bold tracking-widest text-[#1f2937] uppercase mt-1">
                    IOS DEVELOPER
                  </p>
                  <p className="text-[11px] sm:text-xs text-slate-600 mt-1">
                    Ahmedabad, Gujarat &nbsp;|&nbsp; +91 70692-23256 &nbsp;|&nbsp; kotadiyameet38@gmail.com
                  </p>
                </div>

                {/* Section Bar Generator */}
                {/* 1. Summary */}
                <div className="mb-4">
                  <div className="bg-[#D9E1E8] px-3 py-1 font-bold text-xs uppercase tracking-wide text-[#111827] mb-2 rounded-sm">
                    SUMMARY
                  </div>
                  <p className="text-xs text-slate-800 leading-relaxed">
                    iOS Developer with 2 years of hands-on experience building and maintaining production-ready native apps in Swift, UIKit and SwiftUI. Strong in REST API integration, clean and responsive UI, offline-first data handling, and real-world e-commerce, POS and payment workflows. Comfortable across the full iOS cycle, from UI implementation and API integration to debugging and performance tuning.
                  </p>
                </div>

                {/* 2. Technical Skills */}
                <div className="mb-4">
                  <div className="bg-[#D9E1E8] px-3 py-1 font-bold text-xs uppercase tracking-wide text-[#111827] mb-2 rounded-sm">
                    TECHNICAL SKILLS
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1.5 text-xs">
                    <div>
                      <span className="font-bold text-slate-900">Language:</span> <span className="text-slate-800">Swift</span>
                    </div>
                    <div>
                      <span className="font-bold text-slate-900">Tools:</span> <span className="text-slate-800">Xcode, Git, GitHub, CocoaPods, SPM</span>
                    </div>
                    <div>
                      <span className="font-bold text-slate-900">iOS Frameworks:</span> <span className="text-slate-800">UIKit, SwiftUI, Auto Layout</span>
                    </div>
                    <div>
                      <span className="font-bold text-slate-900">Additional:</span> <span className="text-slate-800">Python, HTML, CSS, JavaScript</span>
                    </div>
                    <div>
                      <span className="font-bold text-slate-900">Networking:</span> <span className="text-slate-800">REST APIs, JSON, Alamofire</span>
                    </div>
                    <div>
                      <span className="font-bold text-slate-900">Data / Offline:</span> <span className="text-slate-800">SQLite, FMDatabase, Local Caching, Sync</span>
                    </div>
                    <div className="sm:col-span-2">
                      <span className="font-bold text-slate-900">Libraries / SDKs:</span> <span className="text-slate-800">Firebase, SkeletonView, SDWebImage, Kingfisher, Google Maps/Places, IQKeyboardManager</span>
                    </div>
                    <div className="sm:col-span-2">
                      <span className="font-bold text-slate-900">Specialized:</span> <span className="text-slate-800">NFC/HID Scanner, OTP, POS, Payment Flows</span>
                    </div>
                  </div>
                </div>

                {/* 3. Key Highlights */}
                <div className="mb-4">
                  <div className="bg-[#D9E1E8] px-3 py-1 font-bold text-xs uppercase tracking-wide text-[#111827] mb-2 rounded-sm">
                    KEY HIGHLIGHTS
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-[11px] leading-snug">
                    <div className="p-2 rounded bg-slate-50 border border-slate-200">
                      <p className="font-bold text-slate-900 mb-1">E-commerce &amp; Payments</p>
                      <p className="text-slate-700">Cart, checkout, coupons, gift wrap, tips and payment flows</p>
                    </div>
                    <div className="p-2 rounded bg-slate-50 border border-slate-200">
                      <p className="font-bold text-slate-900 mb-1">POS &amp; Hardware</p>
                      <p className="text-slate-700">NFC/HID card scanning, customer credit checks, OTP verification</p>
                    </div>
                    <div className="p-2 rounded bg-slate-50 border border-slate-200">
                      <p className="font-bold text-slate-900 mb-1">Offline-First</p>
                      <p className="text-slate-700">SQLite/FMDatabase caching with background sync</p>
                    </div>
                    <div className="p-2 rounded bg-slate-50 border border-slate-200">
                      <p className="font-bold text-slate-900 mb-1">Native iOS</p>
                      <p className="text-slate-700">Swift, UIKit, SwiftUI with reusable, responsive UI</p>
                    </div>
                  </div>
                </div>

                {/* 4. Work Experience */}
                <div className="mb-4">
                  <div className="bg-[#D9E1E8] px-3 py-1 font-bold text-xs uppercase tracking-wide text-[#111827] mb-2 rounded-sm">
                    WORK EXPERIENCE
                  </div>
                  
                  {/* Codlens */}
                  <div className="mb-3">
                    <div className="flex flex-wrap items-center justify-between font-bold text-xs text-slate-900 mb-1">
                      <span>iOS Developer, Codlens Innovation LLP (Surat, Gujarat)</span>
                      <span>18 Aug 2025 – 25 Aug 2026</span>
                    </div>
                    <ul className="list-disc list-inside space-y-0.5 text-[11px] text-slate-800">
                      <li>Developed and maintained production iOS applications using Swift, UIKit, SwiftUI and Xcode.</li>
                      <li>Built reusable UI components, collection views, forms, custom interactions and responsive layouts.</li>
                      <li>Integrated REST APIs, parsed JSON responses, handled validation and resolved API/data-type issues.</li>
                      <li>Worked with Alamofire, Firebase, SkeletonView, SDWebImage/Kingfisher and other iOS SDKs.</li>
                      <li>Implemented e-commerce features including cart, checkout, coupons, gift wrap, tips and payment flows.</li>
                      <li>Developed POS features including NFC/HID card scanning, customer credit checks and OTP verification.</li>
                      <li>Implemented offline mode with SQLite/FMDatabase, local caching and data synchronization.</li>
                      <li>Investigated and fixed UI, networking, navigation, parsing and performance issues with the team.</li>
                    </ul>
                  </div>

                  {/* Stricker Apps */}
                  <div>
                    <div className="flex flex-wrap items-center justify-between font-bold text-xs text-slate-900 mb-1">
                      <span>iOS Developer, Stricker Apps</span>
                      <span>2024</span>
                    </div>
                    <ul className="list-disc list-inside space-y-0.5 text-[11px] text-slate-800">
                      <li>Developed iOS application features using Swift, UIKit, SwiftUI and Xcode.</li>
                      <li>Worked on UI implementation, application logic, API integration, debugging and feature enhancements.</li>
                      <li>Used Git/GitHub and followed standard iOS development and version-control workflows.</li>
                    </ul>
                  </div>
                </div>

                {/* 5. Education */}
                <div className="mb-4">
                  <div className="bg-[#D9E1E8] px-3 py-1 font-bold text-xs uppercase tracking-wide text-[#111827] mb-2 rounded-sm">
                    EDUCATION
                  </div>
                  <div className="space-y-1.5 text-xs">
                    <div className="flex justify-between items-baseline">
                      <div>
                        <span className="font-bold text-slate-900">B.Sc. Information Technology</span> &bull; <span className="text-slate-600">Atmiya University</span>
                      </div>
                      <span className="font-bold text-slate-800">2024</span>
                    </div>
                    <div className="flex justify-between items-baseline">
                      <div>
                        <span className="font-bold text-slate-900">HSC (Higher Secondary)</span> &bull; <span className="text-slate-600">Shree Swaminarayan Gurukul, Rajkot</span>
                      </div>
                      <span className="font-bold text-slate-800">2019–2021</span>
                    </div>
                    <div className="flex justify-between items-baseline">
                      <div>
                        <span className="font-bold text-slate-900">SSC (Secondary School)</span> &bull; <span className="text-slate-600">Shree Swaminarayan Gurukul, Rajkot</span>
                      </div>
                      <span className="font-bold text-slate-800">2018–2019</span>
                    </div>
                  </div>
                </div>

                {/* 6. Certification */}
                <div className="mb-3">
                  <div className="bg-[#D9E1E8] px-3 py-1 font-bold text-xs uppercase tracking-wide text-[#111827] mb-1.5 rounded-sm">
                    CERTIFICATION
                  </div>
                  <p className="text-xs text-slate-800">
                    <span className="font-bold">Python Basics &amp; Advanced</span> — Bascom Computer &bull; Aug 2024
                  </p>
                </div>

                {/* 7. Core Strengths */}
                <div className="mb-3">
                  <div className="bg-[#D9E1E8] px-3 py-1 font-bold text-xs uppercase tracking-wide text-[#111827] mb-1.5 rounded-sm">
                    CORE STRENGTHS
                  </div>
                  <p className="text-xs text-slate-800">
                    Problem Solving &bull; Debugging &bull; Team Collaboration &bull; Communication &bull; Quick Learning
                  </p>
                </div>

                {/* 8. Languages */}
                <div>
                  <div className="bg-[#D9E1E8] px-3 py-1 font-bold text-xs uppercase tracking-wide text-[#111827] mb-1.5 rounded-sm">
                    LANGUAGES
                  </div>
                  <p className="text-xs text-slate-800">
                    English &bull; Gujarati &bull; Hindi
                  </p>
                </div>

              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
