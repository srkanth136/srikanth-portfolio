import React from 'react';
import SectionHeader from '../components/SectionHeader';
import { certificationsData } from '../data/portfolioData';
import { Award, ExternalLink, ShieldCheck } from 'lucide-react';

export default function Certifications() {
  return (
    <section id="certifications" className="py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Credentials"
          title="Certifications"
          subtitle="Continuous learning and professional skill development."
        />

        <div className="max-w-3xl mx-auto grid grid-cols-1 gap-6">
          {certificationsData.map((cert) => (
            <div
              key={cert.id}
              className="bg-slate-900/60 border border-slate-800/80 rounded-2xl p-6 sm:p-7 backdrop-blur-sm shadow-md hover:border-slate-700/80 transition-all duration-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-blue-600/20 to-purple-600/20 border border-blue-500/30 text-blue-400 flex items-center justify-center shrink-0 mt-0.5">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-400">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      Verified
                    </span>
                    <span className="text-slate-600">•</span>
                    <span className="text-xs text-slate-400">{cert.issuedDate}</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-1">
                    {cert.title}
                  </h3>
                  <p className="text-sm font-medium text-blue-400 mb-2">
                    Issued by {cert.issuer}
                  </p>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-xl">
                    {cert.description}
                  </p>
                </div>
              </div>

              {cert.credentialUrl && (
                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="sm:self-center shrink-0 inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 hover:border-slate-600 transition-colors"
                  title="View Certificate (Placeholder URL in portfolioData.js)"
                >
                  <span>Verify</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
