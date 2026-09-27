import React from 'react';
import SectionHeader from '../components/SectionHeader';
import SkillBadge from '../components/SkillBadge';
import { skillsData } from '../data/portfolioData';
import { Code, Layout, Server, Database, Wrench } from 'lucide-react';

const categories = [
  {
    key: 'programmingLanguages',
    title: 'Programming Languages',
    icon: Code,
    color: 'from-blue-500/20 to-cyan-500/10',
    borderColor: 'border-blue-500/20',
    textColor: 'text-blue-400'
  },
  {
    key: 'frontend',
    title: 'Frontend Development',
    icon: Layout,
    color: 'from-cyan-500/20 to-teal-500/10',
    borderColor: 'border-cyan-500/20',
    textColor: 'text-cyan-400'
  },
  {
    key: 'backend',
    title: 'Backend Frameworks',
    icon: Server,
    color: 'from-indigo-500/20 to-purple-500/10',
    borderColor: 'border-indigo-500/20',
    textColor: 'text-indigo-400'
  },
  {
    key: 'databases',
    title: 'Databases & Storage',
    icon: Database,
    color: 'from-emerald-500/20 to-teal-500/10',
    borderColor: 'border-emerald-500/20',
    textColor: 'text-emerald-400'
  },
  {
    key: 'tools',
    title: 'Tools & Workflow',
    icon: Wrench,
    color: 'from-purple-500/20 to-pink-500/10',
    borderColor: 'border-purple-500/20',
    textColor: 'text-purple-400'
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 relative bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Technical Stack"
          title="Skills & Technologies"
          subtitle="A comprehensive overview of programming languages, frameworks, and developer tools in my workflow."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const skillsList = skillsData[cat.key] || [];

            return (
              <div
                key={cat.key}
                className="bg-slate-900/60 border border-slate-800/80 rounded-2xl p-6 hover:border-slate-700/80 transition-all duration-300 shadow-sm flex flex-col justify-between"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-5">
                    <div className={`w-10 h-10 rounded-xl bg-slate-800/80 border ${cat.borderColor} ${cat.textColor} flex items-center justify-center`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-white text-base sm:text-lg">
                        {cat.title}
                      </h3>
                      <p className="text-xs text-slate-400 font-mono">
                        {skillsList.length} technologies
                      </p>
                    </div>
                  </div>

                  {/* Badges */}
                  <div className="flex flex-wrap gap-2.5">
                    {skillsList.map((skill, idx) => (
                      <SkillBadge
                        key={idx}
                        name={skill.name}
                        category={skill.category}
                      />
                    ))}
                  </div>
                </div>

                <div className="mt-5 pt-4 border-t border-slate-800/60 flex items-center justify-between text-[11px] text-slate-500">
                  <span>Production & Academic Use</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-700" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
