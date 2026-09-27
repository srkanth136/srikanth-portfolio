import React from 'react';
import SectionHeader from '../components/SectionHeader';
import ProjectCard from '../components/ProjectCard';
import { projectsData, personalInfo } from '../data/portfolioData';
import { FolderGit2 } from 'lucide-react';

export default function Projects() {
  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Portfolio"
          title="Featured Projects"
          subtitle="Real-world software projects showcasing full-stack web applications, desktop automation, browser extensions, and database architecture."
        />

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Note Box for Srikanth */}
        <div className="mt-12 p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <FolderGit2 className="w-4 h-4 text-blue-400 shrink-0" />
            <span>
              All project repositories and live demos can be updated inside <code className="text-blue-300 font-mono bg-slate-800 px-1.5 py-0.5 rounded">src/data/portfolioData.js</code>.
            </span>
          </div>
          <a
            href={personalInfo.socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300 font-medium whitespace-nowrap"
          >
            Visit GitHub Profile →
          </a>
        </div>
      </div>
    </section>
  );
}
