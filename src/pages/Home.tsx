import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Search,
  ClipboardCheck,
  AlertTriangle,
  ArrowRight,
  Plus,
} from 'lucide-react';
import Hero from '@/components/Hero';
import Section, { SectionHeading } from '@/components/Section';
import { useDocumentMeta } from '@/hooks/useDocumentMeta';

const ease = [0.22, 1, 0.36, 1] as const;

const services = [
  {
    icon: Search,
    title: 'Asset Performance Diagnostic',
    description:
      'A deep-dive into each property’s financials, operations, and market position to surface hidden value and risk.',
  },
  {
    icon: ClipboardCheck,
    title: 'Portfolio Advisory & Oversight',
    description:
      'Ongoing strategic oversight of your multifamily holdings \u2014 from capital planning to disposition timing.',
  },
  {
    icon: AlertTriangle,
    title: 'Special Situations Advisory',
    description:
      'Targeted guidance for transitions, estate planning, partnership restructuring, and time-sensitive decisions.',
  },
];

const differentiators = [
  { title: 'Institutional Rigor', description: 'Two decades of institutional RE experience applied to portfolios that deserve the same standard of care.' },
  { title: 'Trusted Intermediary', description: 'A bridge between families, estate attorneys, CPAs, and wealth advisors navigating complex real estate decisions.' },
  { title: 'Fiduciary Mindset', description: 'Recommendations aligned with your family’s long-term wealth preservation and transition goals — not transactions.' },
];

const steps = [
  { number: '01', title: 'Diagnose', description: 'We immerse ourselves in your portfolio’s financials, operations, and market dynamics to understand the full picture before recommending a path forward.' },
  { number: '02', title: 'Strategize', description: 'We craft a tailored asset strategy — hold/sell/refinance calls, capital planning, and transition roadmaps — stress-tested against market realities.' },
  { number: '03', title: 'Execute', description: 'We work alongside your family, property managers, and advisors to execute the plan and measure outcomes until value is realized.' },
];

const featuredTestimonial = {
  quote:
    'Joanne identified operational gaps across our 12-property portfolio that were quietly eroding returns. Her diagnostic paid for itself within the first quarter.',
  author: 'Terri Deluca',
  role: 'Property Manager, Cowboy Properties',
};

const secondaryTestimonials = [
  { quote: 'As an estate attorney, I trust The Rhea Group to give my clients clarity on real estate holdings that are often the most complex part of their estate.', author: 'Nicole McLaughlin', role: 'Manager, Mapletree Investments' },
  { quote: 'She led the disposition of a $1B portfolio with precision. The process was seamless, and the outcome exceeded our family’s expectations.', author: 'Zenobia Walji', role: 'Independent Board Member' },
];

const faqs = [
  { q: 'What types of clients does The Rhea Group work with?', a: 'We work with high-net-worth families and private owners of multifamily real estate — typically portfolios of 5 to 20 properties. We also partner with the estate attorneys, CPAs, and wealth advisors who serve these families.' },
  { q: 'Do you manage properties?', a: 'No. We are not a property management firm. We provide strategic asset-level and portfolio-level advisory. We can help you evaluate and coordinate with the right property management partners, but our role is advisory, not operational.' },
  { q: 'How are engagements structured?', a: 'Engagements range from a one-time Asset Performance Diagnostic to ongoing Portfolio Advisory & Oversight retainers. Special Situations Advisory is scoped based on the complexity of the situation. We are transparent about all terms upfront.' },
  { q: 'What makes The Rhea Group different from a traditional real estate broker?', a: 'We bring institutional-grade analytical rigor and a fiduciary mindset to private portfolios. Our focus is on long-term wealth preservation and strategic transitions — not just closing transactions. We are strategy-first, not commission-first.' },
  { q: 'What geographic markets do you cover?', a: 'We are based in the Greater Los Angeles and Orange County area and serve clients across Southern California. For existing portfolio advisory relationships, we also engage with assets in other major U.S. multifamily markets.' },
  { q: 'How quickly can you start an engagement?', a: 'Most engagements begin within two to three weeks of our initial conversation. For time-sensitive special situations — estate deadlines, partnership disputes — we can mobilize faster when needed.' },
];

export default function Home() {
  useDocumentMeta({
    title: 'The Rhea Group | Real Estate Asset Strategy & Advisory',
    description:
      'Institutional-grade asset strategy and advisory for private families managing multifamily real estate. Diagnostics, portfolio oversight, and disposition guidance.',
    path: '/',
  });
  return (
    <>
      <Hero />

      {/* ─── Trust bar ─── */}
      <section className="bg-navy-950 py-14 relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/25 to-transparent" />
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <p className="text-center font-label text-[10px] font-semibold tracking-[0.4em] uppercase text-cream-200/30 mb-10">
            Trusted by families, owners &amp; their advisors
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-16 gap-y-4">
            {['HNW Families', 'Private Owners', 'Estate Attorneys', 'CPAs', 'Wealth Advisors'].map((sector, i) => (
              <motion.span
                key={sector}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="text-sm font-light tracking-[0.1em] text-cream-200/35 hover:text-cream-200/60 transition-colors duration-500"
              >
                {sector}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Value proposition — asymmetric editorial ─── */}
      <Section className="bg-cream-50">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          {/* Left: large text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.9, ease }}
            className="lg:col-span-7 lg:pr-12"
          >
            <div className="flex items-center gap-4 mb-10">
              <div className="w-12 h-px bg-gold-500" />
              <p className="font-label text-[11px] font-semibold tracking-[0.35em] uppercase text-gold-600">
                Our Approach
              </p>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-[3.25rem] font-light text-navy-800 leading-[1.15] mb-10 tracking-tighter-2">
              Institutional standards.
              <br />
              <span className="italic gold-text font-normal pr-1">Private wealth</span> focus.
            </h2>
            <div className="space-y-8 text-navy-600 text-base lg:text-lg leading-[1.85] font-light max-w-xl">
              <p>
                Many families own significant multifamily real estate but lack the institutional
                framework to manage it strategically. Properties drift, returns erode, and estate
                transitions become reactive instead of planned.
              </p>
              <p>
                The Rhea Group bridges that gap. We bring two decades of institutional real estate
                experience — from HealthPeak to Greystar to a $1.5B family office — to
                private portfolios that deserve the same standard of care.
              </p>
            </div>
            <Link
              to="/about"
              className="group inline-flex items-center gap-3 mt-12 text-[11px] font-semibold tracking-[0.25em] uppercase text-gold-600 hover:text-gold-500 transition-colors"
            >
              <span className="link-underline">Meet Joanne Lucas</span>
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          {/* Right: stat panel */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.9, delay: 0.15, ease }}
            className="lg:col-span-5 lg:mt-8"
          >
            <div className="bg-navy-gradient p-12 lg:p-14 border border-gold-500/10 relative overflow-hidden paper-texture-dark">
              <div className="absolute top-0 right-0 w-48 h-48 bg-gold-500/5 rounded-full blur-3xl" />
              <p className="editorial-num text-6xl lg:text-7xl font-light gold-text mb-4">16K+</p>
              <div className="w-12 h-px bg-gold-500/40 mb-5" />
              <p className="text-[11px] text-cream-100/80 tracking-[0.25em] uppercase font-label leading-relaxed">
                Units overseen across institutional &amp; private portfolios
              </p>
              <div className="mt-12 pt-12 border-t border-navy-700/40 space-y-8">
                {[
                  { value: '$5B+', label: 'Assets Under Oversight' },
                  { value: '~$1B', label: 'Disposition Led' },
                  { value: '20+', label: 'Years Institutional RE' },
                ].map((stat) => (
                  <div key={stat.label} className="flex items-baseline gap-8">
                    <p className="editorial-num text-3xl font-light text-cream-50 w-24 shrink-0">
                      {stat.value}
                    </p>
                    <p className="text-[10px] text-cream-100/75 tracking-[0.2em] uppercase font-label">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* ─── Services — horizontal asymmetric ─── */}
      <Section className="bg-cream-100">
        <div className="grid lg:grid-cols-12 gap-12 mb-20">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-px bg-gold-500" />
              <p className="font-label text-[11px] font-semibold tracking-[0.35em] uppercase text-gold-600">
                What We Do
              </p>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-navy-800 leading-[1.15] tracking-tighter-2">
              Advisory built for private real estate.
            </h2>
          </div>
          <div className="lg:col-span-5 lg:col-start-8 flex items-end">
            <p className="text-navy-600 text-base leading-[1.85] font-light">
              Three core practice areas, one senior advisor, and a relentless focus on protecting
              and growing your family’s real estate wealth.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.7, delay: i * 0.1, ease }}
              className="group bg-cream-50 border border-cream-200 p-10 lg:p-12 hover:border-gold-400 transition-all duration-700"
            >
              <div className="flex items-center justify-between mb-10">
                <service.icon
                  className="text-gold-500 group-hover:text-gold-600 transition-colors duration-700"
                  size={28}
                  strokeWidth={1.25}
                />
                <p className="editorial-num text-2xl font-extralight text-navy-200">
                  0{i + 1}
                </p>
              </div>
              <h3 className="text-lg font-medium text-navy-800 mb-5">{service.title}</h3>
              <div className="w-8 h-px bg-gold-500/40 mb-6 group-hover:w-16 transition-all duration-700" />
              <p className="text-navy-600 text-sm leading-[1.85] font-light mb-8">{service.description}</p>
              <Link
                to="/services"
                className="group/link inline-flex items-center gap-2 text-[10px] font-semibold tracking-[0.25em] uppercase text-gold-600 hover:text-gold-500 transition-colors"
              >
                <span className="link-underline">Learn More</span>
                <ArrowRight size={12} className="group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* ─── Differentiators — full-width dark band ─── */}
      <section className="bg-navy-gradient relative overflow-hidden paper-texture-dark">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/25 to-transparent" />
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-24 md:py-32 lg:py-40">
          <div className="grid lg:grid-cols-12 gap-12 mb-20">
            <div className="lg:col-span-6">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-px bg-gold-500" />
                <p className="font-label text-[11px] font-semibold tracking-[0.35em] uppercase text-gold-light">
                  Why The Rhea Group
                </p>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-cream-50 leading-[1.15] tracking-tighter-2">
                Not a broker. Not a manager.
                <br />
                <span className="italic gold-text font-normal">Your advisor.</span>
              </h2>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {differentiators.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.7, delay: i * 0.12, ease }}
                className="group bg-navy-950/40 p-12 lg:p-14 hover:bg-navy-900/40 transition-colors duration-700 border border-gold-500/5 hover:border-gold-500/15"
              >
                <p className="editorial-num text-5xl font-extralight text-gold-500/25 mb-10 group-hover:text-gold-500/40 transition-colors duration-700">
                  0{i + 1}
                </p>
                <h3 className="text-xl font-light text-cream-50 mb-5">{item.title}</h3>
                <div className="gold-divider mb-6" />
                <p className="text-cream-200/55 text-sm leading-[1.85] font-light">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── How it works — editorial timeline ─── */}
      <Section className="bg-cream-50">
        <SectionHeading
          eyebrow="How We Work"
          title="A disciplined path from diagnosis to value"
          subtitle="Our three-phase engagement model keeps senior attention on your portfolio from first conversation to realized outcome."
        />
        <div className="grid md:grid-cols-3 gap-0">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.7, delay: i * 0.12, ease }}
              className="group relative p-10 lg:p-14 border-t-2 border-cream-200 hover:border-gold-500 transition-colors duration-700 md:border-t-0 md:border-l-2 first:md:border-l-0"
            >
              <div className="flex items-center gap-5 mb-8">
                <p className="editorial-num text-5xl font-extralight text-navy-200 group-hover:text-gold-500/50 transition-colors duration-700">
                  {step.number}
                </p>
                <div className="flex-1 h-px bg-cream-200 group-hover:bg-gold-500/30 transition-colors duration-700" />
              </div>
              <h3 className="text-xl font-light text-navy-800 mb-5">{step.title}</h3>
              <div className="gold-divider mb-6" />
              <p className="text-navy-600 text-sm leading-[1.85] font-light">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* ─── Testimonial — single featured + two secondary ─── */}
      <section className="bg-navy-950 relative overflow-hidden paper-texture-dark">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/25 to-transparent" />
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-24 md:py-32 lg:py-40">
          {/* Featured */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.9, ease }}
            className="max-w-4xl mb-32"
          >
            <div className="flex items-center gap-4 mb-12">
              <div className="w-12 h-px bg-gold-500" />
              <p className="font-label text-[11px] font-semibold tracking-[0.35em] uppercase text-gold-light">
                Client Outcomes
              </p>
            </div>
            <p className="pull-quote-mark text-gold-500/20 mb-8 select-none" aria-hidden="true">&ldquo;</p>
            <blockquote className="text-2xl md:text-3xl lg:text-[2.5rem] font-extralight text-cream-50 leading-[1.4] italic mb-12">
              {featuredTestimonial.quote}
            </blockquote>
            <div className="flex items-center gap-4">
              <div className="w-12 h-px bg-gold-500" />
              <div>
                <p className="font-label text-sm font-semibold tracking-[0.15em] uppercase text-gold-light">
                  {featuredTestimonial.author}
                </p>
                <p className="text-sm text-cream-200/45 mt-1 tracking-wide font-light">{featuredTestimonial.role}</p>
              </div>
            </div>
          </motion.div>

          {/* Secondary — two columns */}
          <div className="grid md:grid-cols-2 gap-8">
            {secondaryTestimonials.map((t, i) => (
              <motion.article
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.7, delay: i * 0.12, ease }}
                className="group bg-navy-950/50 p-12 lg:p-14 hover:bg-navy-900/50 transition-colors duration-700 border border-gold-500/5 hover:border-gold-500/15"
              >
                <blockquote className="mb-10">
                  <p className="text-cream-100 text-base leading-[1.85] font-light italic">
                    {t.quote}
                  </p>
                </blockquote>
                <div className="w-8 h-px bg-gold-500/40 mb-4 group-hover:w-14 transition-all duration-700" />
                <p className="font-label text-sm font-semibold tracking-[0.15em] uppercase text-gold-light">
                  {t.author}
                </p>
                <p className="text-sm text-cream-200/45 mt-1 tracking-wide font-light">{t.role}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FAQ — asymmetric two-column ─── */}
      <Section className="bg-cream-100">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease }}
            className="lg:col-span-4 lg:sticky lg:top-32 lg:self-start"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-px bg-gold-500" />
              <p className="font-label text-[11px] font-semibold tracking-[0.35em] uppercase text-gold-600">
                Frequently Asked
              </p>
            </div>
            <h2 className="text-3xl md:text-4xl font-light text-navy-800 leading-[1.15] mb-8 tracking-tighter-2">
              Questions, answered.
            </h2>
            <div className="gold-divider mb-8" />
            <p className="text-navy-600 text-base leading-[1.85] font-light">
              Common questions about working with The Rhea Group. Don’t see what you’re
              looking for? We’re happy to talk through any specifics.
            </p>
            <Link
              to="/contact"
              className="group inline-flex items-center gap-3 mt-10 text-[11px] font-semibold tracking-[0.25em] uppercase text-gold-600 hover:text-gold-500 transition-colors"
            >
              <span className="link-underline">Ask a Question</span>
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          <div className="lg:col-span-8 space-y-4">
            {faqs.map((faq, i) => (
              <motion.details
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="group bg-cream-50 border border-cream-200 hover:border-gold-400 transition-colors duration-500 overflow-hidden"
              >
                <summary className="cursor-pointer p-8 flex items-center justify-between gap-4 list-none">
                  <span className="text-base md:text-lg font-normal text-navy-800">{faq.q}</span>
                  <div className="w-9 h-9 flex items-center justify-center border border-gold-500/15 group-open:border-gold-500 group-open:bg-gold-500 transition-colors duration-500 shrink-0">
                    <Plus
                      size={14}
                      className="text-gold-600 group-open:text-cream-50 group-open:rotate-45 transition-all duration-500"
                    />
                  </div>
                </summary>
                <div className="faq-content px-8 pb-8 text-navy-600 text-sm leading-[1.85] font-light">{faq.a}</div>
              </motion.details>
            ))}
          </div>
        </div>
      </Section>

      {/* ─── CTA — minimal, editorial ─── */}
      <section className="bg-navy-gradient py-28 md:py-36 lg:py-44 relative overflow-hidden paper-texture-dark">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent" />
        <div className="relative z-10 mx-auto max-w-4xl px-6 lg:px-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease }}
          >
            <h2 className="text-3xl md:text-5xl lg:text-[3.5rem] font-extralight text-cream-50 mb-10 tracking-tighter-2 leading-[1.15]">
              Your portfolio deserves
              <br />
              <span className="italic gold-text font-normal">institutional clarity.</span>
            </h2>
            <div className="gold-divider mx-auto mb-10" />
            <p className="text-cream-200/55 text-lg mb-14 max-w-2xl mx-auto font-light leading-[1.85]">
              Reach out to schedule a confidential discussion about your portfolio, your goals,
              and how we can help you protect and grow your family’s real estate wealth.
            </p>
            <Link
              to="/contact"
              className="btn-shine group inline-flex items-center gap-3 px-12 py-5 bg-gold-500 text-navy-950 text-[11px] font-semibold tracking-[0.25em] uppercase hover:bg-gold-400 hover:shadow-gold-hover transition-all duration-300"
            >
              Contact The Rhea Group
              <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
