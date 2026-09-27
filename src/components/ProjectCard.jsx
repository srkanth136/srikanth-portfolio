import React from 'react';
import { ExternalLink, CheckCircle2, Sparkles } from 'lucide-react';
import { GithubIcon } from './SocialIcons';

export default function ProjectCard({ project }) {
  const {
    title,
    featured,
    techSubtitle,
    description,
    technologies,
    features,
    githubUrl,
    liveUrl
  } = project;

  return (
    <div
      className={`group relative rounded-2xl transition-all duration-300 flex flex-col justify-between overflow-hidden ${
        featured
          ? 'bg-gradient-to-b from-slate-900/90 to-slate-950/90 border-2 border-blue-500/40 shadow-xl shadow-blue-500/10 hover:border-blue-400 hover:shadow-blue-500/20 md:col-span-2'
          : 'bg-slate-900/60 border border-slate-800/80 hover:border-slate-700/80 hover:bg-slate-900/90 shadow-md hover:shadow-xl hover:shadow-indigo-500/5'
      } hover:-translate-y-1`}
    >
      {/* Subtle top accent gradient line */}
      <div
        className={`h-1 w-full ${
          featured
            ? 'bg-gradient-to-r from-blue-500 via-indigo-400 to-purple-500'
            : 'bg-gradient-to-r from-transparent via-slate-700 to-transparent group-hover:via-blue-500/50 transition-colors'
        }`}
      />

      <div className="p-6 sm:p-8 flex flex-col flex-grow">
        {/* Top Badges */}
        <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
          <div className="flex items-center gap-2">
            {featured && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-blue-500/20 text-blue-300 border border-blue-500/40 shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-blue-400" />
                Featured Project
              </span>
            )}
            {techSubtitle && (
              <span className="text-xs font-medium text-slate-400 px-2.5 py-0.5 rounded-md bg-slate-800/70 border border-slate-700/50">
                {techSubtitle}
              </span>
            )}
          </div>
        </div>

        {/* Project Title */}
        <h3 className={`font-bold text-white mb-3 group-hover:text-blue-300 transition-colors ${
          featured ? 'text-2xl sm:text-3xl' : 'text-xl sm:text-2xl'
        }`}>
          {title}
        </h3>

        {/* Description */}
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
          {description}
        </p>

        {/* Key Features List */}
        {features && features.length > 0 && (
          <div className="mb-6">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">
              Key Features:
            </h4>
            <ul className={`grid gap-2 ${featured ? 'sm:grid-cols-2' : 'grid-cols-1'}`}>
              {features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Technology Badges */}
        <div className="mt-auto pt-4 border-t border-slate-800/80">
          <div className="flex flex-wrap gap-1.5 mb-6">
            {technologies.map((tech, idx) => (
              <span
                key={idx}
                className="px-2.5 py-1 text-xs rounded-md bg-slate-800/80 text-blue-300 font-mono border border-slate-700/60"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Action Links */}
          <div className="flex flex-wrap items-center gap-3">
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium bg-slate-800 text-white hover:bg-slate-700 border border-slate-700 transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-900"
                title="View Source on GitHub (Replace placeholder URL in src/data/portfolioData.js)"
              >
                <GithubIcon className="w-4 h-4 text-slate-300" />
                <span>GitHub</span>
              </a>
            )}

            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium bg-blue-600 text-white hover:bg-blue-500 transition-colors shadow-sm hover:shadow-blue-500/25 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-slate-900"
                title="View Live Demo (Replace placeholder URL in src/data/portfolioData.js)"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Live Demo</span>
              </a>
            )}

            {/* Note tooltip for easy customization awareness */}
            <span className="text-[11px] text-slate-500 font-mono ml-auto">
              Configurable in data/portfolioData.js
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
