import React from 'react';
import { FileDown, ExternalLink, CheckCircle, Info } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Resume() {
  return (
    <section id="resume" className="py-20 relative bg-slate-950/60">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-gradient-to-b from-slate-900 via-slate-900/90 to-slate-950 border border-blue-500/30 p-8 sm:p-12 shadow-2xl overflow-hidden text-center">
          
          {/* Subtle background glow */}
          <div className="absolute -top-24 -left-24 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

          {/* Icon badge */}
          <div className="w-16 h-16 rounded-2xl bg-blue-500/10 border border-blue-500/30 text-blue-400 flex items-center justify-center mx-auto mb-6 shadow-inner">
            <FileDown className="w-8 h-8" />
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Want to know more about me?
          </h2>

          {/* Description */}
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
            Download my resume to learn more about my education, skills, projects, and experience.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <a
              href={personalInfo.resumePath}
              download="Srikanth_Bheemagani_Resume.pdf"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-base bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition-all duration-200 transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <FileDown className="w-5 h-5" />
              <span>Download Resume</span>
            </a>

            <a
              href={personalInfo.resumePath}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-base bg-slate-800/90 hover:bg-slate-700/90 text-slate-200 hover:text-white border border-slate-700 transition-all duration-200 transform hover:-translate-y-0.5"
            >
              <ExternalLink className="w-5 h-5 text-slate-400" />
              <span>Preview in Browser</span>
            </a>
          </div>

          {/* Resume Highlights Summary */}
          <div className="pt-6 border-t border-slate-800/80 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs sm:text-sm text-slate-300">
            <div className="flex items-center justify-center gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-400" />
              <span>B.Tech in CSE (2026)</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-400" />
              <span>Python, Django & React</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-400" />
              <span>SQL & Relational Databases</span>
            </div>
          </div>

          {/* Replacement instructions box for Srikanth */}
          <div className="mt-6 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-slate-950/80 border border-slate-800 text-[11px] text-slate-400">
            <Info className="w-3.5 h-3.5 text-blue-400 shrink-0" />
            <span>
              Place your resume PDF at <strong className="text-slate-300 font-mono">public/resume.pdf</strong> to replace the current document anytime.
            </span>
          </div>

        </div>
      </div>
    </section>
  );
}
