import React, { useState } from 'react';
import SectionHeader from '../components/SectionHeader';
import { personalInfo } from '../data/portfolioData';
import { Mail, Send, CheckCircle2, AlertCircle, MessageSquare } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../components/SocialIcons';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Please provide your full name.';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please enter your message.';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);

    // Front-end processing: Creates a convenient mailto link fallback & triggers success state
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setFormData({ name: '', email: '', message: '' });
    setSubmitted(false);
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Get in Touch"
          title="Let's Connect"
          subtitle="I'm open to opportunities, collaborations, and conversations about software development."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Contact Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-slate-900/60 border border-slate-800/80 rounded-2xl p-6 sm:p-8 backdrop-blur-sm">
              <h3 className="text-xl font-bold text-white mb-3">
                Contact Details
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Feel free to reach out directly via email or connect with me on GitHub and LinkedIn.
              </p>

              <div className="space-y-4">
                {/* Email card */}
                <a
                  href={personalInfo.socialLinks.email}
                  className="flex items-center gap-4 p-3.5 rounded-xl bg-slate-800/40 border border-slate-800 hover:border-blue-500/40 hover:bg-slate-800/80 transition-all duration-200 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="overflow-hidden">
                    <div className="text-xs text-slate-400 font-medium">Email</div>
                    <div className="text-sm font-semibold text-white truncate group-hover:text-blue-300">
                      {personalInfo.socialLinks.emailRaw}
                    </div>
                  </div>
                </a>

                {/* GitHub card */}
                <a
                  href={personalInfo.socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-3.5 rounded-xl bg-slate-800/40 border border-slate-800 hover:border-slate-600 hover:bg-slate-800/80 transition-all duration-200 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-slate-700/40 text-slate-300 flex items-center justify-center group-hover:bg-slate-200 group-hover:text-slate-900 transition-colors">
                    <GithubIcon className="w-5 h-5" />
                  </div>
                  <div className="overflow-hidden">
                    <div className="text-xs text-slate-400 font-medium">GitHub</div>
                    <div className="text-sm font-semibold text-white truncate group-hover:text-slate-200">
                      github.com/{personalInfo.socialLinks.githubHandle || 'srkanth136'}
                    </div>
                  </div>
                </a>

                {/* LinkedIn card */}
                <a
                  href={personalInfo.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-3.5 rounded-xl bg-slate-800/40 border border-slate-800 hover:border-blue-500/40 hover:bg-slate-800/80 transition-all duration-200 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-blue-600/10 text-blue-400 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <LinkedinIcon className="w-5 h-5" />
                  </div>
                  <div className="overflow-hidden">
                    <div className="text-xs text-slate-400 font-medium">LinkedIn</div>
                    <div className="text-sm font-semibold text-white truncate group-hover:text-blue-300">
                      linkedin.com/in/{personalInfo.socialLinks.linkedinHandle || 'srikanth-bheemagani-a5258732b'}
                    </div>
                  </div>
                </a>
              </div>

              {/* Note */}
              <div className="mt-6 pt-5 border-t border-slate-800/80 text-xs text-slate-500">
                Replace placeholders in <code className="text-blue-400 font-mono">src/data/portfolioData.js</code>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form with Frontend Validation */}
          <div className="lg:col-span-7">
            <div className="bg-slate-900/60 border border-slate-800/80 rounded-2xl p-6 sm:p-8 backdrop-blur-sm shadow-xl">
              
              {submitted ? (
                <div className="py-8 text-center animate-in fade-in zoom-in-95 duration-300">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-2">
                    Message Prepared!
                  </h4>
                  <p className="text-slate-300 text-sm max-w-md mx-auto mb-6">
                    Thank you, <strong className="text-white">{formData.name}</strong>. Your message is validated and ready to send directly via your email client or connected backend service.
                  </p>

                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                      href={`mailto:${personalInfo.socialLinks.emailRaw}?subject=Portfolio Contact from ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(formData.message + '\n\nFrom: ' + formData.name + ' (' + formData.email + ')')}`}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium text-sm transition-colors shadow-md shadow-blue-500/25"
                    >
                      <Send className="w-4 h-4" />
                      <span>Send via Default Email App</span>
                    </a>

                    <button
                      type="button"
                      onClick={handleReset}
                      className="w-full sm:w-auto px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-sm transition-colors border border-slate-700"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <div className="flex items-center gap-2 mb-2 text-slate-300 text-sm">
                    <MessageSquare className="w-4 h-4 text-blue-400" />
                    <span>Send a direct message</span>
                  </div>

                  {/* Name field */}
                  <div>
                    <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                      Your Name <span className="text-rose-400">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. John Doe"
                      className={`w-full px-4 py-3 rounded-xl bg-slate-950/70 border text-white placeholder-slate-500 text-sm focus:outline-none transition-colors ${
                        errors.name
                          ? 'border-rose-500/80 focus:border-rose-500 focus:ring-1 focus:ring-rose-500'
                          : 'border-slate-800 focus:border-blue-500 focus:ring-1 focus:ring-blue-500'
                      }`}
                    />
                    {errors.name && (
                      <p className="mt-1.5 text-xs text-rose-400 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.name}</span>
                      </p>
                    )}
                  </div>

                  {/* Email field */}
                  <div>
                    <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                      Your Email <span className="text-rose-400">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. johndoe@company.com"
                      className={`w-full px-4 py-3 rounded-xl bg-slate-950/70 border text-white placeholder-slate-500 text-sm focus:outline-none transition-colors ${
                        errors.email
                          ? 'border-rose-500/80 focus:border-rose-500 focus:ring-1 focus:ring-rose-500'
                          : 'border-slate-800 focus:border-blue-500 focus:ring-1 focus:ring-blue-500'
                      }`}
                    />
                    {errors.email && (
                      <p className="mt-1.5 text-xs text-rose-400 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>

                  {/* Message field */}
                  <div>
                    <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                      Message <span className="text-rose-400">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Hi Srikanth, I would like to discuss an opportunity or project..."
                      className={`w-full px-4 py-3 rounded-xl bg-slate-950/70 border text-white placeholder-slate-500 text-sm focus:outline-none transition-colors resize-none ${
                        errors.message
                          ? 'border-rose-500/80 focus:border-rose-500 focus:ring-1 focus:ring-rose-500'
                          : 'border-slate-800 focus:border-blue-500 focus:ring-1 focus:ring-blue-500'
                      }`}
                    />
                    {errors.message && (
                      <p className="mt-1.5 text-xs text-rose-400 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.message}</span>
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-500 hover:to-indigo-500 shadow-lg shadow-blue-500/25 transition-all duration-200 transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-blue-400"
                  >
                    {loading ? (
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>

                  <div className="pt-2 text-center">
                    <p className="text-[11px] text-slate-500">
                      Frontend validated form. Ready for integration with Formspree, EmailJS, or serverless endpoint.
                    </p>
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
