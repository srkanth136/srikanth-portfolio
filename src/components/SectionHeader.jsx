import React from 'react';

export default function SectionHeader({ badge, title, subtitle, align = 'center' }) {
  return (
    <div className={`mb-12 ${align === 'center' ? 'text-center' : 'text-left'}`}>
      {badge && (
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium tracking-wide uppercase bg-blue-500/10 text-blue-400 border border-blue-500/20 mb-3">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse"></span>
          {badge}
        </div>
      )}
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-slate-400 max-w-2xl text-base md:text-lg mx-auto">
          {subtitle}
        </p>
      )}
      <div className={`mt-4 h-1 w-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full ${align === 'center' ? 'mx-auto' : ''}`} />
    </div>
  );
}
