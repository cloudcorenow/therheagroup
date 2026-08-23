import { useState, type FormEvent } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Linkedin, Send, CheckCircle, AlertCircle, ArrowRight } from 'lucide-react';
import Section, { SectionHeading } from '@/components/Section';
import { useDocumentMeta } from '@/hooks/useDocumentMeta';

type Status = 'idle' | 'submitting' | 'success' | 'error';

const serviceOptions = [
  'Asset Performance Diagnostic',
  'Portfolio Advisory & Oversight',
  'Special Situations Advisory',
  'Performance Improvement',
  'Acquisition Diligence',
  'Estate & Trust Coordination',
  'Other / Not Sure Yet',
];

const contactInfo = [
  { icon: MapPin, label: 'Location', value: 'Greater Los Angeles / Orange County, CA' },
  { icon: Mail, label: 'Email', value: 'joanne@therheagroup.com' },
  { icon: Linkedin, label: 'LinkedIn', value: 'Connect with Joanne', href: 'https://www.linkedin.com/in/joannelucas/' },
];

const ease = [0.22, 1, 0.36, 1] as const;

export default function Contact() {
  useDocumentMeta({
    title: 'Contact | The Rhea Group',
    description:
      'Get in touch with The Rhea Group to discuss your multifamily portfolio, capital planning, or disposition goals. Confidential, no-obligation consultation.',
    path: '/contact',
  });
  const [status, setStatus] = useState<Status>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    const formData = new FormData(e.currentTarget);
    const payload = {
      name: String(formData.get('name') || ''),
      email: String(formData.get('email') || ''),
      company: String(formData.get('company') || ''),
      phone: String(formData.get('phone') || ''),
      service: String(formData.get('service') || ''),
      message: String(formData.get('message') || ''),
    };

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const errBody = await res.json().catch(() => ({}));
        throw new Error(errBody.error ?? `Request failed (${res.status})`);
      }
      setStatus('success');
      (e.target as HTMLFormElement).reset();
    } catch (err) {
      console.error('Contact form error:', err);
      setStatus('error');
      const msg = err instanceof Error ? err.message : '';
      setErrorMessage(
        msg ||
          'We could not send your message right now. Please email us directly at joanne@therheagroup.com.',
      );
    }
  }

  return (
    <>
      {/* ─── Page hero ─── */}
      <section className="relative pt-40 pb-28 md:pt-52 md:pb-36 bg-navy-gradient overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent" />
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease }}
          >
            <div className="flex items-center gap-4 justify-center mb-10">
              <div className="w-12 h-px bg-gold-500" />
              <p className="text-gold-light font-label text-[11px] font-semibold tracking-[0.35em] uppercase">
                Get in Touch
              </p>
              <div className="w-12 h-px bg-gold-500" />
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-light text-cream-50 leading-[1.12] mb-10 tracking-tighter-2">
              Let&apos;s start a
              <br />
              <span className="italic gold-text font-normal">conversation.</span>
            </h1>
            <div className="gold-divider mx-auto mb-10" />
            <p className="text-cream-200/55 text-base sm:text-lg leading-[1.85] font-light max-w-2xl mx-auto">
              Whether you are exploring a portfolio review, navigating an estate transition, or
              just want to learn more about how we work — we welcome the opportunity to talk.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─── Contact form + info ─── */}
      <Section className="bg-cream-50">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease }}
            className="lg:col-span-7"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-px bg-gold-500" />
              <p className="font-label text-[11px] font-semibold tracking-[0.35em] uppercase text-gold-600">
                Send a Message
              </p>
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-[2.5rem] font-light text-navy-800 mb-4 tracking-tighter-2">
              Tell us about your portfolio.
            </h2>
            <div className="gold-divider mb-12" />

            {status === 'success' ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="bg-cream-100 border border-gold-400 p-10 text-center shadow-luxe"
              >
                <div className="w-16 h-16 mx-auto flex items-center justify-center bg-gold-500/10 border border-gold-500/20 mb-5">
                  <CheckCircle className="text-gold-600" size={32} strokeWidth={1.25} />
                </div>
                <h3 className="text-xl font-normal text-navy-800 mb-3">Message sent.</h3>
                <p className="text-navy-600 text-sm mb-8 font-light leading-relaxed">
                  Thank you for reaching out. Joanne will respond personally within one
                  business day.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="group inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.25em] uppercase text-gold-600 hover:text-gold-500 transition-colors"
                >
                  <span className="link-underline">Send Another Message</span>
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block font-label text-[10px] font-semibold tracking-[0.2em] uppercase text-navy-700 mb-2">
                      Full Name <span className="text-gold-600">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="input-luxe w-full px-4 py-3.5 bg-cream-100 border border-cream-200 focus:border-gold-500 focus:bg-cream-50 text-navy-800 text-sm transition-all duration-300 outline-none"
                      placeholder="Jane Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block font-label text-[10px] font-semibold tracking-[0.2em] uppercase text-navy-700 mb-2">
                      Email Address <span className="text-gold-600">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="input-luxe w-full px-4 py-3.5 bg-cream-100 border border-cream-200 focus:border-gold-500 focus:bg-cream-50 text-navy-800 text-sm transition-all duration-300 outline-none"
                      placeholder="jane@familyoffice.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block font-label text-[10px] font-semibold tracking-[0.2em] uppercase text-navy-700 mb-2">
                      Company / Family Office
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      className="input-luxe w-full px-4 py-3.5 bg-cream-100 border border-cream-200 focus:border-gold-500 focus:bg-cream-50 text-navy-800 text-sm transition-all duration-300 outline-none"
                      placeholder="Family Office / Firm Name"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block font-label text-[10px] font-semibold tracking-[0.2em] uppercase text-navy-700 mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="input-luxe w-full px-4 py-3.5 bg-cream-100 border border-cream-200 focus:border-gold-500 focus:bg-cream-50 text-navy-800 text-sm transition-all duration-300 outline-none"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="block font-label text-[10px] font-semibold tracking-[0.2em] uppercase text-navy-700 mb-2">
                    Area of Interest
                  </label>
                  <select
                    id="service"
                    name="service"
                    defaultValue=""
                    className="input-luxe w-full px-4 py-3.5 bg-cream-100 border border-cream-200 focus:border-gold-500 focus:bg-cream-50 text-navy-800 text-sm transition-all duration-300 outline-none"
                  >
                    <option value="" disabled>Select a service...</option>
                    {serviceOptions.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block font-label text-[10px] font-semibold tracking-[0.2em] uppercase text-navy-700 mb-2">
                    Message <span className="text-gold-600">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="input-luxe w-full px-4 py-3.5 bg-cream-100 border border-cream-200 focus:border-gold-500 focus:bg-cream-50 text-navy-800 text-sm transition-all duration-300 outline-none resize-none"
                    placeholder="Tell us about your portfolio, your goals, or the situation you're navigating..."
                  />
                </div>

                {status === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-start gap-3 bg-red-50 border border-red-200 p-4"
                  >
                    <AlertCircle className="text-red-600 shrink-0 mt-0.5" size={18} strokeWidth={1.5} />
                    <p className="text-red-700 text-sm">{errorMessage}</p>
                  </motion.div>
                )}

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="btn-shine group inline-flex items-center gap-3 px-12 py-5 bg-navy-800 text-cream-50 text-[11px] font-semibold tracking-[0.25em] uppercase hover:bg-gold-500 hover:text-navy-950 hover:shadow-gold-hover disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-300"
                >
                  {status === 'submitting' ? 'Sending...' : 'Send Message'}
                  <Send size={15} className="group-hover:translate-x-1 transition-transform" strokeWidth={1.5} />
                </button>
              </form>
            )}
          </motion.div>

          {/* Contact info sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, delay: 0.1, ease }}
            className="lg:col-span-5"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-px bg-gold-500" />
              <p className="font-label text-[11px] font-semibold tracking-[0.35em] uppercase text-gold-600">
                Contact Details
              </p>
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-[2.5rem] font-light text-navy-800 mb-4 tracking-tighter-2">
              Direct lines.
            </h2>
            <div className="gold-divider mb-12" />

            <div className="space-y-8">
              {contactInfo.map((info) => (
                <motion.div
                  key={info.label}
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.3 }}
                  className="card-lift flex items-center gap-5 p-8 bg-cream-100 border border-cream-200 hover:border-gold-400 transition-all duration-500"
                >
                  <info.icon className="text-gold-500 shrink-0" size={20} strokeWidth={1.25} />
                  <div>
                    <p className="font-label text-[10px] font-semibold tracking-[0.2em] uppercase text-gold-600 mb-1">
                      {info.label}
                    </p>
                    {info.href ? (
                      <a
                        href={info.href}
                        target="_blank"
                        rel="noreferrer"
                        className="text-navy-700 text-sm hover:text-gold-600 transition-colors font-light"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-navy-700 text-sm font-light">{info.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Location block */}
            <div className="bg-navy-900 p-10 lg:p-12 mt-8 border border-gold-500/10 relative overflow-hidden paper-texture-dark">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gold-500/5 rounded-full blur-3xl" />
              <h3 className="text-lg font-light text-cream-50 mb-5">Our Office</h3>
              <div className="gold-divider mb-8" />
              <p className="text-cream-200/55 text-sm leading-[1.85] mb-8 font-light">
                Based in the Greater Los Angeles and Orange County area, we serve families and
                their advisors across Southern California. In-person meetings are available by
                appointment; virtual consultations are always welcome.
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-navy-700/50">
                <MapPin size={16} className="text-gold-500" strokeWidth={1.25} />
                <p className="text-cream-200/50 text-sm font-light">Greater Los Angeles / Orange County, CA</p>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>
    </>
  );
}
