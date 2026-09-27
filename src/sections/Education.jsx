import React from 'react';
import SectionHeader from '../components/SectionHeader';
import { educationData } from '../data/portfolioData';
import { GraduationCap, Calendar, BookOpen } from 'lucide-react';

export default function Education() {
  return (
    <section id="education" className="py-20 relative bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Academic Background"
          title="Education"
          subtitle="Formal computer science foundation driving modern software engineering practices."
        />

        <div className="max-w-3xl mx-auto">
          {educationData.map((item) => (
            <div
              key={item.id}
              className="relative pl-8 sm:pl-10 pb-8 border-l-2 border-blue-500/30 last:border-l-0"
            >
              {/* Timeline dot */}
              <div className="absolute -left-[17px] top-0 w-8 h-8 rounded-full bg-slate-900 border-2 border-blue-500 flex items-center justify-center text-blue-400 shadow-md shadow-blue-500/20">
                <GraduationCap className="w-4 h-4" />
              </div>

              {/* Content Card */}
              <div className="bg-slate-900/60 border border-slate-800/80 rounded-2xl p-6 sm:p-8 backdrop-blur-sm shadow-md hover:border-slate-700/80 transition-all duration-200">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    {item.degree}
                  </h3>
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-400 border border-blue-500/20">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{item.period}</span>
                  </div>
                </div>

                <div className="inline-flex items-center gap-1.5 text-xs font-medium text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-md border border-emerald-500/20 mb-4">
                  <span>Status:</span>
                  <span>{item.status}</span>
                </div>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                  {item.description}
                </p>

                <div className="pt-4 border-t border-slate-800/80">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5 text-blue-400" />
                    Key Focus Areas:
                  </h4>
                  <div className="flex flex-wrap gap-2 text-xs text-slate-300">
                    <span className="px-2.5 py-1 rounded-md bg-slate-800/80 border border-slate-700/60">
                      Data Structures & Algorithms
                    </span>
                    <span className="px-2.5 py-1 rounded-md bg-slate-800/80 border border-slate-700/60">
                      Database Management Systems (DBMS)
                    </span>
                    <span className="px-2.5 py-1 rounded-md bg-slate-800/80 border border-slate-700/60">
                      Object-Oriented Programming (OOP)
                    </span>
                    <span className="px-2.5 py-1 rounded-md bg-slate-800/80 border border-slate-700/60">
                      Operating Systems & Computer Networks
                    </span>
                    <span className="px-2.5 py-1 rounded-md bg-slate-800/80 border border-slate-700/60">
                      Full-Stack Web Architectures
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
