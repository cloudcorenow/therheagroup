import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Search,
  ClipboardCheck,
  AlertTriangle,
  ArrowRight,
  Check,
  TrendingUp,
  Building2,
  Users,
  FileBarChart,
  Lightbulb,
  Sparkles,
} from 'lucide-react';
import Section, { SectionHeading } from '@/components/Section';
import { useDocumentMeta } from '@/hooks/useDocumentMeta';

const ease = [0.22, 1, 0.36, 1] as const;

const services = [
  {
    icon: Search,
    title: 'Asset Performance Diagnostic',
    tagline: 'Surface hidden value and risk.',
    description:
      'A focused, one-time engagement that examines each property\u2019s financials, operations, and market position. We identify what\u2019s working, what\u2019s eroding returns, and where institutional-grade improvements can unlock value.',
    offerings: [
      'Full financial & operational review',
      'Market positioning & rent benchmarking',
      'Hold / sell / refinance recommendations',
      'Operational gap & risk assessment',
      'Executive presentation to stakeholders',
    ],
  },
  {
    icon: ClipboardCheck,
    title: 'Portfolio Advisory & Oversight',
    tagline: 'Ongoing strategic partnership.',
    description:
      'A retainer-based relationship for families managing significant multifamily holdings. We provide quarterly strategic oversight, capital planning guidance, and coordination with your property managers, attorneys, and wealth advisors.',
    offerings: [
      'Quarterly portfolio performance reviews',
      'Capital planning & deployment guidance',
      'Disposition & acquisition strategy',
      'Property manager oversight & benchmarking',
      'Estate & transition planning coordination',
    ],
  },
  {
    icon: AlertTriangle,
    title: 'Special Situations Advisory',
    tagline: 'Clarity when the stakes are highest.',
    description:
      'Targeted guidance for estate planning, partnership restructuring, forced sales, or time-sensitive real estate decisions. We coordinate with attorneys, CPAs, and wealth advisors to ensure real estate holdings align with the broader family strategy.',
    offerings: [
      'Estate planning real estate strategy',
      'Partnership restructuring advisory',
      'Forced sale & litigation support',
      'Coordination with attorneys & CPAs',
      'Disposition execution oversight',
    ],
  },
];

const additionalCapabilities = [
  { icon: TrendingUp, title: 'Performance Improvement', description: 'Margin expansion, revenue optimization, and operational benchmarking across your portfolio.' },
  { icon: Building2, title: 'Acquisition Diligence', description: 'Institutional-grade underwriting and due diligence support for multifamily acquisitions.' },
  { icon: null, title: 'Estate & Trust Coordination', description: 'Ownership Transition Support — Coordinating asset-level reporting and governance alongside your estate attorney and wealth advisors during generational transitions.' },
  { icon: Users, title: 'Partnership Advisory', description: 'Joint venture structuring, partner buyouts, and governance framework design.' },
  { icon: FileBarChart, title: 'Portfolio Reporting', description: 'Institutional-style reporting packages for families, boards, and wealth advisors.' },
  { icon: Lightbulb, title: 'Strategic Planning', description: 'Multi-year portfolio roadmaps aligned with family wealth and transition goals.' },
];

const process = [
  { phase: 'Diagnose', description: 'Deep-dive into your portfolio\u2019s financials, operations, market position, and family objectives.' },
  { phase: 'Strategize', description: 'Tailored recommendations with clear priorities, hold/sell calls, and capital deployment plans.' },
  { phase: 'Execute', description: 'Hands-on implementation support alongside your team, tracking progress against milestones.' },
  { phase: 'Realize', description: 'Measure outcomes, capture learnings, and ensure lasting value creation for your family.' },
];

export default function Services() {
  useDocumentMeta({
    title: 'Services | The Rhea Group',
    description:
      'Asset performance diagnostics, portfolio advisory, special situations, and disposition guidance for multifamily real estate owners.',
    path: '/services',
  });
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
                Our Services
              </p>
              <div className="w-12 h-px bg-gold-500" />
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-light text-cream-50 leading-[1.12] mb-10 tracking-tighter-2">
              Strategy. Oversight.
              <br />
              <span className="italic gold-text font-normal">Outcomes.</span>
            </h1>
            <div className="gold-divider mx-auto mb-10" />
            <p className="text-cream-200/55 text-base sm:text-lg leading-[1.85] font-light max-w-2xl mx-auto">
              Three integrated practice areas, one senior advisor, and a relentless focus on
              protecting and growing your family’s multifamily real estate wealth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─── Main services ─── */}
      <Section className="bg-cream-50">
        <div className="space-y-32">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.8, ease }}
              className="grid lg:grid-cols-12 gap-16 items-start"
            >
              {/* Icon + number */}
              <div className="lg:col-span-4">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-14 h-14 flex items-center justify-center border border-gold-500/20 bg-gold-500/5">
                    <service.icon className="text-gold-600" size={24} strokeWidth={1.25} />
                  </div>
                  <p className="editorial-num text-3xl font-extralight text-navy-300">
                    0{i + 1}
                  </p>
                </div>
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-8 h-px bg-gold-500" />
                  <p className="font-label text-xs font-semibold tracking-[0.3em] uppercase text-gold-600">
                    {service.tagline}
                  </p>
                </div>
                <h2 className="text-2xl md:text-3xl font-light text-navy-800 mb-5 tracking-tighter-2">
                  {service.title}
                </h2>
                <div className="gold-divider mb-6" />
                <p className="text-navy-600 text-base leading-[1.8] font-light">
                  {service.description}
                </p>
              </div>

              {/* Offerings */}
              <div className="lg:col-span-7 lg:col-start-6">
                <p className="font-label text-xs font-semibold tracking-[0.3em] uppercase text-navy-400 mb-8">
                  What&apos;s included
                </p>
                <ul className="space-y-5">
                  {service.offerings.map((offering) => (
                    <li key={offering} className="flex items-start gap-4 pb-5 border-b border-cream-200">
                      <div className="w-6 h-6 flex items-center justify-center shrink-0 mt-0.5 border border-gold-500/20 bg-gold-500/5">
                        <Check size={13} strokeWidth={1.5} className="text-gold-600" />
                      </div>
                      <span className="text-sm text-navy-700 font-light leading-relaxed">{offering}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-2 mt-10 text-xs font-semibold tracking-[0.2em] uppercase text-gold-600 hover:text-gold-500 transition-colors"
                >
                  <span className="link-underline">Discuss Your Needs</span>
                  <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* ─── Who We Serve ─── */}
      <Section className="bg-cream-100">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-gold-500" />
              <p className="font-label text-xs font-semibold tracking-[0.3em] uppercase text-gold-600">
                Who We Serve
              </p>
            </div>
            <h2 className="text-3xl md:text-4xl font-light text-navy-800 mb-6 tracking-tighter-2 leading-[1.15]">
              Families and advisors who need an institutional voice at the table.
            </h2>
            <div className="gold-divider mb-8" />
            <p className="text-navy-600 text-base leading-[1.85] font-light">
              The Rhea Group works with private families and family offices with
              $10M&ndash;$75M in multifamily real estate holdings &mdash; typically 50 to 500
              units &mdash; whose portfolios have outgrown the informal oversight that got
              them here, but who aren&apos;t yet ready for a full-time asset management
              executive.
            </p>
          </div>

          <div className="lg:col-span-6 lg:col-start-7 space-y-8">
            <p className="text-navy-600 text-base leading-[1.85] font-light">
              Our clients are not unsophisticated. They built real wealth in real
              estate; what they haven&apos;t always built is the reporting and governance
              infrastructure to protect it &mdash; particularly as ownership transitions to
              the next generation.
            </p>
            <p className="text-navy-600 text-base leading-[1.85] font-light">
              We are particularly well-suited for estate attorneys, CPAs, and wealth
              advisors whose clients hold significant real estate alongside their
              broader portfolios, and who need an independent, institutional-grade
              voice at the table.
            </p>

            <div className="grid sm:grid-cols-3 gap-4 pt-4">
              {[
                { label: 'Portfolio Size', value: '$10M–$75M' },
                { label: 'Unit Count', value: '50–500 units' },
                { label: 'Asset Class', value: 'Multifamily' },
              ].map((stat) => (
                <div key={stat.label} className="border-l border-gold-500/30 pl-5">
                  <p className="text-xl font-light text-navy-800 mb-1">{stat.value}</p>
                  <p className="font-label text-[10px] font-semibold tracking-[0.25em] uppercase text-navy-400">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* ─── Additional capabilities ─── */}
      <Section className="bg-cream-50">
        <SectionHeading
          eyebrow="Additional Capabilities"
          title="Beyond the core practices"
          subtitle="Specialized advisory services that complement our three primary practice areas."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {additionalCapabilities.map((cap, i) => (
            <motion.div
              key={cap.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: i * 0.06, ease }}
              className="group bg-cream-50 border border-cream-200 p-10 lg:p-12 hover:border-gold-400 transition-all duration-700"
            >
              {cap.icon ? (
                <cap.icon
                  className="text-gold-500 mb-10 group-hover:text-gold-600 transition-colors duration-700"
                  size={24}
                  strokeWidth={1.25}
                />
              ) : (
                <svg
                  width="28"
                  height="20"
                  viewBox="0 0 28 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-gold-500 mb-10 group-hover:text-gold-600 transition-colors duration-700"
                >
                  <circle cx="10" cy="10" r="9" stroke="currentColor" strokeWidth="1.25" />
                  <circle cx="18" cy="10" r="9" stroke="currentColor" strokeWidth="1.25" />
                </svg>
              )}
              <h3 className="text-lg font-medium text-navy-800 mb-4">{cap.title}</h3>
              <div className="w-8 h-px bg-gold-500/40 mb-5 group-hover:w-14 transition-all duration-700" />
              <p className="text-navy-600 text-sm leading-[1.85] font-light">{cap.description}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* ─── Engagement process ─── */}
      <Section className="bg-navy-gradient relative overflow-hidden">
        <div className="relative z-10">
          <SectionHeading
            eyebrow="Our Process"
            title="A structured path to outcomes"
            subtitle="Every engagement follows a disciplined framework, adapted to your portfolio and family context."
            light
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((phase, i) => (
              <motion.div
                key={phase.phase}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: i * 0.1, ease }}
                className="group bg-navy-950/40 p-12 lg:p-14 hover:bg-navy-900/40 transition-colors duration-700 border border-gold-500/5 hover:border-gold-500/15"
              >
                <p className="editorial-num text-5xl font-extralight text-gold-500/60 mb-10 group-hover:text-gold-500/80 transition-colors duration-700">
                  0{i + 1}
                </p>
                <h3 className="text-xl font-light text-cream-50 mb-5">{phase.phase}</h3>
                <div className="gold-divider mb-6" />
                <p className="text-cream-200/55 text-sm leading-[1.85] font-light">{phase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* ─── CTA ─── */}
      <section className="bg-navy-950 py-28 md:py-36 relative overflow-hidden paper-texture-dark">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/25 to-transparent" />
        <div className="mx-auto max-w-4xl px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease }}
          >
            <Sparkles className="text-gold-500 mx-auto mb-10" size={22} strokeWidth={1.25} />
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-cream-50 mb-10 tracking-tighter-2">
              Not sure which service fits your situation?
            </h2>
            <div className="gold-divider mx-auto mb-10" />
            <p className="text-cream-200/55 text-lg mb-14 max-w-2xl mx-auto font-light leading-[1.85]">
              Start with a confidential consultation. We’ll help you clarify your needs and
              recommend the right path forward — even if that means we’re not the right fit.
            </p>
            <Link
              to="/contact"
              className="btn-shine group inline-flex items-center gap-3 px-12 py-5 bg-gold-500 text-navy-950 text-[11px] font-semibold tracking-[0.25em] uppercase hover:bg-gold-400 hover:shadow-gold-hover transition-all duration-300"
            >
              Book a Consultation
              <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
