import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [copiedEmail, setCopiedEmail] = useState<boolean>(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitted(false), 6000);
    }, 900);
  };

  return (
    <section className="w-full bg-surface-container-lowest/50 py-20 md:py-28" id="contact">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8 lg:px-12 flex flex-col gap-10">
        {/* Section Header */}
        <div className="flex flex-col gap-2 max-w-2xl">
          <div className="flex items-center gap-2">
            <span className="font-label-code text-xs md:text-sm text-secondary uppercase tracking-wider font-semibold">
              07 // Connect
            </span>
            <span className="h-px w-12 bg-outline-variant/50" />
          </div>
          <h2 className="font-headline-lg text-3xl md:text-4xl font-bold text-on-surface">
            Get In Touch
          </h2>
          <p className="font-body-md text-sm md:text-base text-on-surface-variant">
            Whether for software engineering internships, collaborative research in machine learning,
            or discussing algorithmic architectures, I welcome your message.
          </p>
        </div>

        {/* Contact Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left: Contact Points */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <h3 className="font-headline-sm text-lg font-bold text-on-surface mb-1">
              Direct Contact Points
            </h3>

            {/* Email Card */}
            <div className="p-5 rounded-xl bg-surface-container flex flex-col gap-2 shadow-sm border border-outline-variant/15">
              <div className="flex items-center justify-between">
                <span className="font-label-badge text-xs text-outline uppercase font-medium">
                  Primary Email
                </span>
                <button
                  onClick={handleCopyEmail}
                  className="font-label-badge text-xs text-primary hover:text-primary-fixed transition-colors flex items-center gap-1 cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[14px]">
                    {copiedEmail ? 'check' : 'content_copy'}
                  </span>
                  <span>{copiedEmail ? 'Copied' : 'Copy'}</span>
                </button>
              </div>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="font-headline-sm text-base md:text-lg font-bold text-on-surface hover:text-primary transition-colors flex items-center gap-2"
              >
                <span className="material-symbols-outlined text-primary text-[20px]">mail</span>
                <span className="break-all">{PERSONAL_INFO.email}</span>
              </a>
            </div>

            {/* University Department Card */}
            <div className="p-5 rounded-xl bg-surface-container flex flex-col gap-2 shadow-sm border border-outline-variant/15">
              <span className="font-label-badge text-xs text-outline uppercase font-medium">
                University Department
              </span>
              <div className="flex items-start gap-2.5">
                <span className="material-symbols-outlined text-secondary text-[20px] mt-0.5">school</span>
                <div className="flex flex-col text-xs md:text-sm">
                  <span className="text-on-surface font-semibold">
                    {PERSONAL_INFO.department}
                  </span>
                  <span className="text-on-surface-variant">{PERSONAL_INFO.university}</span>
                  <span className="text-primary font-label-badge text-xs mt-0.5 font-medium">
                    Batch 44 • Student ID / Profile
                  </span>
                </div>
              </div>
            </div>

            {/* Location & Timezone Card */}
            <div className="p-5 rounded-xl bg-surface-container flex flex-col gap-2 shadow-sm border border-outline-variant/15">
              <span className="font-label-badge text-xs text-outline uppercase font-medium">
                Base Coordinates
              </span>
              <div className="flex items-center gap-2.5">
                <span className="material-symbols-outlined text-primary-fixed text-[20px]">location_on</span>
                <span className="font-body-md text-xs md:text-sm text-on-surface">
                  Dhaka, Bangladesh • Standard Time (UTC+6)
                </span>
              </div>
            </div>

            {/* Network Handles Strip */}
            <div className="p-5 rounded-xl bg-surface-container flex flex-col gap-2 shadow-sm border border-outline-variant/15">
              <span className="font-label-badge text-xs text-outline uppercase font-medium">
                Network &amp; Handles
              </span>
              <div className="flex items-center gap-2 pt-1">
                <a
                  href={PERSONAL_INFO.socials.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  className="p-2.5 rounded-lg bg-surface-container-low hover:bg-surface-container-high text-on-surface-variant hover:text-primary transition-colors border border-outline-variant/15"
                >
                  <span className="material-symbols-outlined text-[20px]">terminal</span>
                </a>
                <a
                  href={PERSONAL_INFO.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="p-2.5 rounded-lg bg-surface-container-low hover:bg-surface-container-high text-on-surface-variant hover:text-secondary transition-colors border border-outline-variant/15"
                >
                  <span className="material-symbols-outlined text-[20px]">share</span>
                </a>
                <a
                  href={PERSONAL_INFO.socials.kaggle}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Kaggle"
                  className="p-2.5 rounded-lg bg-surface-container-low hover:bg-surface-container-high text-on-surface-variant hover:text-primary transition-colors border border-outline-variant/15"
                >
                  <span className="material-symbols-outlined text-[20px]">analytics</span>
                </a>
                <a
                  href={PERSONAL_INFO.socials.leetcode}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LeetCode"
                  className="p-2.5 rounded-lg bg-surface-container-low hover:bg-surface-container-high text-on-surface-variant hover:text-secondary transition-colors border border-outline-variant/15"
                >
                  <span className="material-symbols-outlined text-[20px]">code_blocks</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right: Message Dispatch Form */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            <div className="p-6 md:p-8 rounded-xl bg-surface-container flex flex-col gap-5 shadow-xl border border-outline-variant/15">
              <div className="flex items-center justify-between pb-3 border-b border-outline-variant/15">
                <h3 className="font-headline-sm text-lg font-bold text-on-surface">
                  Dispatch Message
                </h3>
                <span className="font-label-badge text-xs text-secondary bg-secondary/10 px-2 py-0.5 rounded font-semibold border border-secondary/20">
                  Direct Inbox
                </span>
              </div>

              {submitted ? (
                <div className="p-6 rounded-xl bg-surface-container-low border border-secondary/40 flex flex-col items-center justify-center text-center gap-3 animate-fade-in py-10">
                  <span className="material-symbols-outlined text-secondary text-[40px]">
                    check_circle
                  </span>
                  <h4 className="font-headline-sm text-lg font-bold text-on-surface">
                    Message Dispatched Successfully!
                  </h4>
                  <p className="font-body-md text-xs md:text-sm text-on-surface-variant max-w-md">
                    Thank you for reaching out. Your transmission has been queued for Sohel Rana. Expect a
                    response within 24–48 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-2 text-xs font-label-badge text-primary hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className="font-label-code text-xs text-outline uppercase font-semibold">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Dr. Emily Chen / Recruiter"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-surface-container-low border border-outline-variant/20 text-on-surface font-body-sm text-sm focus:outline-none focus:border-primary transition-colors"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="font-label-code text-xs text-outline uppercase font-semibold">
                        Your Email
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="emily.chen@organization.org"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-surface-container-low border border-outline-variant/20 text-on-surface font-body-sm text-sm focus:outline-none focus:border-primary transition-colors"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="font-label-code text-xs text-outline uppercase font-semibold">
                      Subject / Topic
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="Software Engineering Internship / Research Collaboration"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-surface-container-low border border-outline-variant/20 text-on-surface font-body-sm text-sm focus:outline-none focus:border-primary transition-colors"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="font-label-code text-xs text-outline uppercase font-semibold">
                      Message
                    </label>
                    <textarea
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Provide project specifications, research domain context, or interview details..."
                      className="w-full px-3.5 py-2.5 rounded-lg bg-surface-container-low border border-outline-variant/20 text-on-surface font-body-sm text-sm focus:outline-none focus:border-primary transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto self-end px-6 py-3 rounded-lg font-headline-sm text-sm font-semibold bg-primary text-on-primary hover:bg-primary-container hover:text-on-primary-container transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(208,188,255,0.25)] cursor-pointer disabled:opacity-60"
                  >
                    <span className="material-symbols-outlined text-[18px]">
                      {isSubmitting ? 'sync' : 'send'}
                    </span>
                    <span>{isSubmitting ? 'Transmitting...' : 'Send Message'}</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
