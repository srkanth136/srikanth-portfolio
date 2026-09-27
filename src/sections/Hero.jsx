import React, { useState } from 'react';
import { ArrowRight, FileDown, Terminal, Copy, Check, Sparkles } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../components/SocialIcons';
import { personalInfo } from '../data/portfolioData';

export default function Hero() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(personalInfo.socialLinks.emailRaw);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="home" className="relative min-h-[90vh] flex items-center justify-center pt-28 pb-16 overflow-hidden">
      {/* Background Subtle Gradient Blobs */}
      <div className="absolute top-1/4 -left-40 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-40 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-7xl h-full bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.03)_0,transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & CTA */}
          <div className="lg:col-span-7 text-center lg:text-left">
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-slate-800 text-xs sm:text-sm text-slate-300 mb-6 shadow-sm">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Available for Full-time Roles & Internships</span>
              <span className="text-slate-600">|</span>
              <span className="text-blue-400 font-medium">{personalInfo.educationBadge}</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15] mb-4">
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">
                {personalInfo.name}
              </span>
            </h1>

            {/* Subtitle */}
            <h2 className="text-xl sm:text-2xl font-semibold text-slate-300 mb-6 flex items-center justify-center lg:justify-start gap-2">
              <span className="text-blue-400">⚡</span>
              <span>{personalInfo.shortRole}</span>
            </h2>

            {/* Description */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-8">
              {personalInfo.heroDescription}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-8">
              <a
                href="#projects"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-500 hover:to-indigo-500 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-200 transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={personalInfo.resumePath}
                download="Srikanth_Bheemagani_Resume.pdf"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm bg-slate-900/90 text-slate-200 hover:text-white hover:bg-slate-800 border border-slate-700/80 hover:border-slate-600 shadow-sm transition-all duration-200 transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-slate-500"
              >
                <FileDown className="w-4 h-4 text-blue-400" />
                <span>Download Resume</span>
              </a>
            </div>

            {/* Secondary Links & Email Copy */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4 border-t border-slate-800/80 text-sm text-slate-400">
              <span className="text-xs uppercase tracking-wider text-slate-500 font-semibold">
                Connect:
              </span>
              
              <a
                href={personalInfo.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors"
                title="GitHub Profile"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GitHub</span>
              </a>

              <a
                href={personalInfo.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-slate-300 hover:text-blue-400 transition-colors"
                title="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>

              <button
                onClick={copyEmail}
                className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-slate-200 transition-colors px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800"
                title="Click to copy email address"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400 font-medium">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy Email</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Right Column: Modern Developer Terminal Card (Interactive visual) */}
          <div className="lg:col-span-5 w-full">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer decorative ring */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-blue-600/30 to-purple-600/30 blur-lg opacity-70 group-hover:opacity-100 transition duration-1000" />

              {/* Main Terminal Window */}
              <div className="relative rounded-2xl bg-[#0d131f] border border-slate-800/90 shadow-2xl overflow-hidden font-mono text-xs sm:text-sm">
                
                {/* Window Header */}
                <div className="flex items-center justify-between px-4 py-3 bg-[#090d15] border-b border-slate-800/80">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  </div>
                  <div className="flex items-center gap-1.5 text-slate-400 text-xs">
                    <Terminal className="w-3.5 h-3.5 text-blue-400" />
                    <span>srikanth_profile.py</span>
                  </div>
                  <div className="text-[11px] text-slate-500">Python 3.12</div>
                </div>

                {/* Code Body */}
                <div className="p-5 space-y-2 text-slate-300 leading-relaxed overflow-x-auto">
                  <div>
                    <span className="text-purple-400">class</span>{' '}
                    <span className="text-yellow-300">Developer</span>:
                  </div>
                  <div className="pl-4">
                    <span className="text-purple-400">def</span>{' '}
                    <span className="text-blue-400">__init__</span>(self):
                  </div>
                  <div className="pl-8 text-slate-400">
                    self.name = <span className="text-emerald-300">"Srikanth Bheemagani"</span><br />
                    self.role = <span className="text-emerald-300">"Python Full Stack"</span><br />
                    self.degree = <span className="text-emerald-300">"B.Tech CSE (2026)"</span><br />
                    self.stack = [
                    <span className="text-blue-300">"Python"</span>,{' '}
                    <span className="text-blue-300">"Django"</span>,{' '}
                    <span className="text-blue-300">"React"</span>,{' '}
                    <span className="text-blue-300">"SQL"</span>]
                  </div>
                  <div className="pl-4 pt-1">
                    <span className="text-purple-400">def</span>{' '}
                    <span className="text-blue-400">build_impact</span>(self):
                  </div>
                  <div className="pl-8 text-slate-400">
                    <span className="text-purple-400">return</span>{' '}
                    <span className="text-emerald-300">"Scalable web applications & clean code"</span>
                  </div>
                  
                  <div className="pt-3 border-t border-slate-800 text-slate-500">
                    <span># Terminal Output</span>
                  </div>
                  <div className="text-emerald-400 flex items-center gap-2">
                    <span>&gt; Ready to engineer robust backend & modern frontend solutions</span>
                    <span className="inline-block w-2 h-4 bg-emerald-400 animate-pulse" />
                  </div>
                </div>

                {/* Footer Tag Badges */}
                <div className="px-5 py-3 bg-[#090d15] border-t border-slate-800/80 flex flex-wrap gap-1.5 text-[11px]">
                  <span className="text-blue-400">#Backend</span>
                  <span className="text-slate-500">•</span>
                  <span className="text-indigo-400">#Frontend</span>
                  <span className="text-slate-500">•</span>
                  <span className="text-purple-400">#Databases</span>
                  <span className="text-slate-500">•</span>
                  <span className="text-emerald-400">#FastAPI</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
