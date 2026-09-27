import React from 'react';

export default function SkillBadge({ name, category }) {
  return (
    <div className="group relative flex items-center gap-2.5 px-3.5 py-2.5 rounded-lg bg-slate-900/60 border border-slate-800/80 hover:border-blue-500/50 hover:bg-slate-800/60 transition-all duration-200 shadow-sm hover:shadow-md hover:shadow-blue-500/5">
      <span className="w-2 h-2 rounded-full bg-blue-400/80 group-hover:scale-125 transition-transform duration-200"></span>
      <span className="text-sm font-medium text-slate-200 group-hover:text-white transition-colors">
        {name}
      </span>
    </div>
  );
}
