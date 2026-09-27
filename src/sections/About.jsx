import React from 'react';
import SectionHeader from '../components/SectionHeader';
import { personalInfo, whatIDo } from '../data/portfolioData';
import { LayoutGrid, Server, Database, Brain, CheckCircle } from 'lucide-react';

const iconMap = {
  LayoutGrid: LayoutGrid,
  Server: Server,
  Database: Database,
  Brain: Brain
};

export default function About() {
  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Overview"
          title="About Me"
          subtitle="Engineering robust full-stack software with a focus on Python, modern frontend architecture, and dependable databases."
        />

        {/* Narrative & Interests Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          {/* Main Narrative */}
          <div className="lg:col-span-7 bg-slate-900/50 border border-slate-800/80 rounded-2xl p-6 sm:p-8 backdrop-blur-sm shadow-md">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-400" />
              Computer Science Engineering & Full Stack Engineering
            </h3>
            
            <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
              {personalInfo.aboutText.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-6 pt-6 border-t border-slate-800/80 flex flex-wrap items-center gap-4 text-xs sm:text-sm text-slate-400">
              <span className="text-slate-200 font-semibold">Degree Program:</span>
              <span className="px-3 py-1 rounded-md bg-blue-500/10 text-blue-400 border border-blue-500/20">
                B.Tech CSE (Class of 2026)
              </span>
              <span className="text-slate-200 font-semibold">Core Focus:</span>
              <span className="px-3 py-1 rounded-md bg-purple-500/10 text-purple-300 border border-purple-500/20">
                Python Full Stack
              </span>
            </div>
          </div>

          {/* Core Areas of Interest */}
          <div className="lg:col-span-5 bg-slate-900/50 border border-slate-800/80 rounded-2xl p-6 sm:p-8 backdrop-blur-sm shadow-md">
            <h3 className="text-xl font-bold text-white mb-4">
              Core Technical Interests
            </h3>
            <p className="text-slate-400 text-xs sm:text-sm mb-5">
              Disciplines and technology areas I actively explore and practice:
            </p>

            <ul className="space-y-2.5">
              {personalInfo.interests.map((interest, idx) => (
                <li
                  key={idx}
                  className="flex items-center gap-3 p-2.5 rounded-lg bg-slate-800/40 border border-slate-800 hover:border-slate-700 hover:bg-slate-800/80 transition-colors text-xs sm:text-sm text-slate-200"
                >
                  <CheckCircle className="w-4 h-4 text-blue-400 shrink-0" />
                  <span className="font-medium">{interest}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* "What I Do" Cards */}
        <div>
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white tracking-tight">
              What I Do
            </h3>
            <p className="text-slate-400 text-sm mt-1">
              End-to-end capabilities spanning frontend, backend, databases, and problem solving.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whatIDo.map((item) => {
              const IconComponent = iconMap[item.icon] || LayoutGrid;
              return (
                <div
                  key={item.id}
                  className="group p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-blue-500/40 hover:bg-slate-900/90 transition-all duration-300 shadow-sm hover:shadow-lg hover:shadow-blue-500/5 hover:-translate-y-1 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center mb-5 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <h4 className="text-lg font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
