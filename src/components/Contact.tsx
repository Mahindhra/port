import React, { useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Copy,
  Check,
  Send,
  Sparkles,
  MessageSquare,
  AlertCircle,
  ExternalLink,
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { soundFx } from '../utils/sound';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: '',
    message: '',
  });
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'ready'>('idle');

  const copyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.personal.email);
    setCopied(true);
    soundFx.playChime();
    setTimeout(() => setCopied(false), 2500);
  };

  const validate = () => {
    const errors: Record<string, string> = {};
    if (!formData.fullName.trim()) {
      errors.fullName = 'Full Name is required';
    }
    if (!formData.email.trim()) {
      errors.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Please enter a valid email address';
    }
    if (!formData.subject.trim()) {
      errors.subject = 'Subject is required';
    }
    if (!formData.message.trim() || formData.message.length < 10) {
      errors.message = 'Message must be at least 10 characters';
    }
    return errors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    soundFx.playClick();

    const errors = validate();
    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      setFormStatus('submitting');

      // Prepare real mailto link to candidate email with user input
      const encodedSubject = encodeURIComponent(`[Portfolio Inquiry] ${formData.subject}`);
      const encodedBody = encodeURIComponent(
        `Hi Mahindhra,\n\nName: ${formData.fullName}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}\n\n--\nSent from Doddi Mahindhra Developer Portfolio`
      );
      const mailtoUrl = `mailto:${PORTFOLIO_DATA.personal.email}?subject=${encodedSubject}&body=${encodedBody}`;

      setTimeout(() => {
        setFormStatus('ready');
        soundFx.playChime();
        // Trigger real email client
        window.location.href = mailtoUrl;
      }, 600);
    }
  };

  return (
    <section id="contact" className="relative py-28 px-4 sm:px-6 lg:px-12 overflow-hidden">
      {/* Background Section Glow */}
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full bg-[#00E5FF]/10 blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00E5FF]/10 border border-[#00E5FF]/30 text-[#00E5FF] text-xs font-mono tracking-widest uppercase mb-4">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>09 // CONNECT DIRECTLY</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-black text-[#E8EDF7] tracking-tight leading-tight">
            LET'S BUILD SOMETHING <br className="hidden sm:inline" />
            <span className="text-gradient-cinematic">AMAZING TOGETHER.</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#E8EDF7]/70 font-sans max-w-xl mx-auto">
            Open to entry-level software engineering positions, developer roles, and technical collaborations.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-[#00E5FF] via-[#287BFF] to-[#A855F7] mx-auto mt-4 rounded-full" />
        </div>

        {/* Contact Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Info Panel & Direct Action Buttons */}
          <div className="lg:col-span-5 space-y-6 text-left">
            {/* Identity Card */}
            <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 space-y-6 shadow-xl">
              <div>
                <p className="font-mono text-xs text-[#00E5FF] uppercase tracking-wider font-semibold">
                  DEVELOPER PROFILE
                </p>
                <h3 className="font-display text-2xl font-bold text-[#E8EDF7] mt-1">
                  {PORTFOLIO_DATA.personal.name}
                </h3>
                <p className="text-xs font-mono text-[#E8EDF7]/60 mt-0.5">
                  Aspiring Software Developer • Visakhapatnam
                </p>
              </div>

              {/* Contact Items */}
              <div className="space-y-4 pt-2">
                {/* Email */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#050510] border border-white/10 flex items-center justify-center flex-shrink-0 text-[#00E5FF]">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="overflow-hidden">
                    <p className="text-[11px] font-mono text-[#E8EDF7]/50 uppercase">Email Address</p>
                    <a
                      href={`mailto:${PORTFOLIO_DATA.personal.email}`}
                      className="text-sm font-mono text-[#E8EDF7] hover:text-[#00E5FF] transition-colors truncate block"
                    >
                      {PORTFOLIO_DATA.personal.email}
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#050510] border border-white/10 flex items-center justify-center flex-shrink-0 text-[#287BFF]">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[11px] font-mono text-[#E8EDF7]/50 uppercase">Phone Number</p>
                    <a
                      href={`tel:${PORTFOLIO_DATA.personal.phone}`}
                      className="text-sm font-mono text-[#E8EDF7] hover:text-[#00E5FF] transition-colors block"
                    >
                      {PORTFOLIO_DATA.personal.phoneDisplay}
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#050510] border border-white/10 flex items-center justify-center flex-shrink-0 text-[#FF8A36]">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[11px] font-mono text-[#E8EDF7]/50 uppercase">Current Location</p>
                    <p className="text-sm text-[#E8EDF7] font-sans">
                      {PORTFOLIO_DATA.personal.location}
                    </p>
                  </div>
                </div>

                {/* GitHub */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#050510] border border-white/10 flex items-center justify-center flex-shrink-0 text-[#A855F7]">
                    <Github className="w-5 h-5" />
                  </div>
                  <div className="overflow-hidden">
                    <p className="text-[11px] font-mono text-[#E8EDF7]/50 uppercase">GitHub Profile</p>
                    <a
                      href={PORTFOLIO_DATA.personal.github}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm font-mono text-[#00E5FF] hover:underline truncate block"
                    >
                      {PORTFOLIO_DATA.personal.github}
                    </a>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-white/10 flex flex-wrap gap-3">
                <a
                  href={`mailto:${PORTFOLIO_DATA.personal.email}`}
                  onClick={() => soundFx.playClick()}
                  className="flex-1 min-w-[130px] flex items-center justify-center gap-2 py-3 rounded-xl text-xs font-mono font-bold tracking-wider uppercase text-[#050510] bg-gradient-to-r from-[#00E5FF] to-[#287BFF] hover:shadow-glow-cyan hover:scale-105 transition-all"
                >
                  <Mail className="w-4 h-4" />
                  <span>Email Me</span>
                </a>

                <a
                  href={PORTFOLIO_DATA.personal.github}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => soundFx.playClick()}
                  className="flex-1 min-w-[130px] flex items-center justify-center gap-2 py-3 rounded-xl text-xs font-mono font-bold tracking-wider uppercase text-[#E8EDF7] bg-[#050510] border border-white/15 hover:border-[#00E5FF]/50 transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub</span>
                </a>

                <button
                  type="button"
                  onClick={copyEmail}
                  className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-mono text-[#E8EDF7]/80 hover:text-[#00E5FF] border border-white/10 hover:border-[#00E5FF]/40 bg-white/5 transition-colors"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-400" />
                      <span className="text-emerald-400 font-bold">Email Copied to Clipboard!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-[#00E5FF]" />
                      <span>Copy Email Address</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-6 sm:p-10 rounded-3xl border border-white/10 relative overflow-hidden text-left shadow-2xl">
              <div className="mb-6">
                <h3 className="font-display text-2xl font-bold text-[#E8EDF7]">
                  Send a Direct Message
                </h3>
                <p className="text-xs sm:text-sm text-[#E8EDF7]/70 font-sans mt-1">
                  Fill in the details below to initiate contact directly with Doddi Mahindhra.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Full Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#E8EDF7]/70 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      value={formData.fullName}
                      onChange={(e) => {
                        setFormData({ ...formData, fullName: e.target.value });
                        if (formErrors.fullName) setFormErrors({ ...formErrors, fullName: '' });
                      }}
                      placeholder="e.g. John Doe"
                      className={`w-full px-4 py-3 rounded-xl bg-[#050510] border text-xs sm:text-sm text-[#E8EDF7] placeholder:text-[#E8EDF7]/30 focus:outline-none transition-colors ${
                        formErrors.fullName
                          ? 'border-rose-500 focus:border-rose-400'
                          : 'border-white/15 focus:border-[#00E5FF]'
                      }`}
                    />
                    {formErrors.fullName && (
                      <p className="mt-1 text-[11px] text-rose-400 font-mono">
                        {formErrors.fullName}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#E8EDF7]/70 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                        if (formErrors.email) setFormErrors({ ...formErrors, email: '' });
                      }}
                      placeholder="e.g. recruiter@company.com"
                      className={`w-full px-4 py-3 rounded-xl bg-[#050510] border text-xs sm:text-sm text-[#E8EDF7] placeholder:text-[#E8EDF7]/30 focus:outline-none transition-colors ${
                        formErrors.email
                          ? 'border-rose-500 focus:border-rose-400'
                          : 'border-white/15 focus:border-[#00E5FF]'
                      }`}
                    />
                    {formErrors.email && (
                      <p className="mt-1 text-[11px] text-rose-400 font-mono">
                        {formErrors.email}
                      </p>
                    )}
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#E8EDF7]/70 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => {
                      setFormData({ ...formData, subject: e.target.value });
                      if (formErrors.subject) setFormErrors({ ...formErrors, subject: '' });
                    }}
                    placeholder="e.g. Software Developer Opportunity / Interview"
                    className={`w-full px-4 py-3 rounded-xl bg-[#050510] border text-xs sm:text-sm text-[#E8EDF7] placeholder:text-[#E8EDF7]/30 focus:outline-none transition-colors ${
                      formErrors.subject
                        ? 'border-rose-500 focus:border-rose-400'
                        : 'border-white/15 focus:border-[#00E5FF]'
                    }`}
                  />
                  {formErrors.subject && (
                    <p className="mt-1 text-[11px] text-rose-400 font-mono">
                      {formErrors.subject}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#E8EDF7]/70 mb-2">
                    Message *
                  </label>
                  <textarea
                    rows={5}
                    value={formData.message}
                    onChange={(e) => {
                      setFormData({ ...formData, message: e.target.value });
                      if (formErrors.message) setFormErrors({ ...formErrors, message: '' });
                    }}
                    placeholder="Share role requirements, company details, or project scope..."
                    className={`w-full px-4 py-3 rounded-xl bg-[#050510] border text-xs sm:text-sm text-[#E8EDF7] placeholder:text-[#E8EDF7]/30 focus:outline-none transition-colors resize-none ${
                      formErrors.message
                        ? 'border-rose-500 focus:border-rose-400'
                        : 'border-white/15 focus:border-[#00E5FF]'
                    }`}
                  />
                  {formErrors.message && (
                    <p className="mt-1 text-[11px] text-rose-400 font-mono">
                      {formErrors.message}
                    </p>
                  )}
                </div>

                {/* Submit Feedback Notification */}
                {formStatus === 'ready' && (
                  <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono flex items-start gap-3">
                    <Sparkles className="w-5 h-5 flex-shrink-0 mt-0.5 text-emerald-400" />
                    <div>
                      <p className="font-bold">Message formatted &amp; email client triggered!</p>
                      <p className="text-[11px] text-emerald-300/80 mt-1">
                        Your draft has been composed to send directly to{' '}
                        <strong>{PORTFOLIO_DATA.personal.email}</strong>.
                      </p>
                    </div>
                  </div>
                )}

                {/* Animated Send Button */}
                <button
                  type="submit"
                  disabled={formStatus === 'submitting'}
                  className="w-full flex items-center justify-center gap-3 py-4 rounded-xl font-mono text-xs sm:text-sm font-bold tracking-wider uppercase text-[#050510] bg-gradient-to-r from-[#00E5FF] via-[#287BFF] to-[#A855F7] hover:shadow-glow-cyan transition-all hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50"
                >
                  <Send className="w-4 h-4 text-[#050510]" />
                  <span>
                    {formStatus === 'submitting' ? 'PREPARING DISPATCH...' : 'SEND MESSAGE VIA EMAIL'}
                  </span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
