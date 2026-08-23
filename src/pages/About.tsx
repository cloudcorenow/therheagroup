import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Target,
  Eye,
  Gem,
  ArrowRight,
  Award,
  HeartHandshake,
  Lightbulb,
  ShieldCheck,
  Building2,
  TrendingUp,
  Briefcase,
  Sparkles,
} from 'lucide-react';
import Section, { SectionHeading } from '@/components/Section';
import { useDocumentMeta } from '@/hooks/useDocumentMeta';

const ease = [0.22, 1, 0.36, 1] as const;

const values = [
  {
    icon: Gem,
    title: 'Excellence',
    description: 'We hold ourselves to the highest institutional standard in every analysis and recommendation.',
  },
  {
    icon: HeartHandshake,
    title: 'Partnership',
    description: 'We succeed only when your family succeeds. Your goals drive our strategy, from diagnostic to outcome.',
  },
  {
    icon: Lightbulb,
    title: 'Insight',
    description: 'We combine two decades of institutional experience with fresh perspective to surface value others miss.',
  },
  {
    icon: ShieldCheck,
    title: 'Integrity',
    description: 'We tell you what you need to hear, not what you want to hear. Always fiduciary, always honest.',
  },
];

const stats = [
  { value: '20+', label: 'Years in Institutional RE' },
  { value: '$5B+', label: 'Capital & Assets Overseen' },
  { value: '16K+', label: 'Units Under Oversight' },
  { value: '$1B', label: 'Disposition Led' },
];

const careerHighlights = [
  { icon: Building2, org: 'HealthPeak', role: 'Acquisitions & Asset Management', detail: 'Contributed to a $2B publicly traded REIT’s senior housing and skilled nursing portfolio strategy.' },
  { icon: Building2, org: 'Greystar', role: 'Investment Management', detail: 'Managed institutional capital across major U.S. multifamily markets (co-architect $500M active adult investment fund).' },
  { icon: Building2, org: 'Mapletree', role: 'Portfolio Strategy', detail: 'Oversaw approximately $1B in multifamily assets across high-growth U.S. markets, driving 19% year-over-year revenue growth.' },
  { icon: Briefcase, org: 'Private Family Office', role: 'Vice President of Asset Management', detail: 'Recruited to transform a $1.5B private family office into an institutional-grade platform across 8,000+ units.' },
];

const credentials = [
  'Deloitte Board Readiness Program',
  'Boardvance Board Candidate',
  'MBA — UC Irvine, Paul Merage School of Business',
  'Past President, CREW Orange County',
  'Board Member, CASA OC',
  'UCI Merage Dean’s Circle — Executive Board Member, 2025–Present',
];

export default function About() {
  useDocumentMeta({
    title: 'About | The Rhea Group',
    description:
      'Meet Joanne Lucas and The Rhea Group — 20+ years of institutional real estate experience, now serving private families and family offices with boutique attention.',
    path: '/about',
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
                About The Rhea Group
              </p>
              <div className="w-12 h-px bg-gold-500" />
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-light text-cream-50 leading-[1.12] mb-10 tracking-tighter-2">
              Boutique by design.
              <br />
              <span className="italic gold-text font-normal pr-3">Institutional</span> by experience.
            </h1>
            <div className="gold-divider mx-auto mb-10" />
            <p className="text-cream-200/55 text-base sm:text-lg leading-[1.85] font-light max-w-2xl mx-auto">
              We founded The Rhea Group on a simple conviction: private families managing
              significant multifamily real estate deserve the same caliber of strategic advisory
              as the largest institutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─── Story ─── */}
      <Section className="bg-cream-50">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.9, ease }}
            className="lg:col-span-5 relative"
          >
            <div className="relative overflow-hidden">
              <img
                src="/assets/images/JLucas_Headshot_1.jpg"
                alt="Joanne Lucas, Founder and Senior Advisor of The Rhea Group"
                className="w-full h-80 sm:h-[420px] md:h-[560px] object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/30 via-transparent to-transparent" />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-navy-900 px-8 py-6 hidden md:block shadow-luxe-dark border border-gold-500/15">
              <p className="text-sm font-normal text-cream-50">Joanne Lucas</p>
              <p className="text-[10px] text-gold-light tracking-[0.2em] uppercase mt-1 font-label">
                Founder &amp; Senior Advisor
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.9, delay: 0.1, ease }}
            className="lg:col-span-7"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-px bg-gold-500" />
              <p className="font-label text-[11px] font-semibold tracking-[0.35em] uppercase text-gold-600">
                Our Story
              </p>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-[3.25rem] font-light text-navy-800 leading-[1.15] mb-10 tracking-tighter-2">
              Built for families who expect more from their real estate.
            </h2>
            <div className="gold-divider mb-12" />
            <div className="space-y-8 text-navy-600 text-base lg:text-lg leading-[1.85] font-light">
              <p>
                The Rhea Group was founded to bridge a gap in the real estate advisory market.
                High-net-worth families often hold their largest non-financial wealth in multifamily
                real estate, yet manage it without the institutional frameworks that large REITs
                and funds take for granted.
              </p>
              <p>
                We bring the analytical rigor, operational discipline, and strategic perspective of
                institutional real estate — and apply it to private portfolios with the
                attention and discretion a boutique provides. The advisor who pitches the work is
                the advisor who does the work.
              </p>
              <p>
                Our name — Rhea — draws from mythology, symbolizing generation and new
                beginnings. It reflects what we help our clients achieve: not just incremental
                improvement, but lasting transformation across generations.
              </p>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* ─── Mission & Vision ─── */}
      <Section className="bg-cream-100">
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8, ease }}
            className="group relative overflow-hidden bg-navy-900 border border-gold-500/10 hover:border-gold-500/25 transition-all duration-700"
          >
            {/* top accent line */}
            <div className="h-px w-full bg-gradient-to-r from-gold-500/60 via-gold-400/20 to-transparent" />
            {/* background glow */}
            <div className="absolute -top-16 -right-16 w-64 h-64 bg-gold-500/5 rounded-full blur-3xl pointer-events-none" />
            <div className="relative p-10 lg:p-14 flex flex-col h-full">
              {/* eyebrow */}
              <div className="flex items-center justify-end gap-3 mb-10">
                <span className="font-label text-[10px] font-semibold tracking-[0.3em] uppercase text-gold-500/70">
                  Our Mission
                </span>
                <div className="flex items-center justify-center w-10 h-10 border border-gold-500/20 bg-gold-500/5">
                  <Target className="text-gold-500" size={18} strokeWidth={1.25} />
                </div>
              </div>
              <h3 className="text-2xl md:text-3xl font-light text-cream-50 leading-[1.2] mb-6 tracking-tight">
                Protect and grow private real estate wealth.
              </h3>
              <div className="gold-divider mb-8" />
              <p className="text-cream-200/50 text-base leading-[1.9] font-light flex-1">
                To deliver institutional-grade asset strategy and advisory to private families —
                with the analytical rigor of a top firm and the personal commitment of a
                trusted advisor.
              </p>
            </div>
          </motion.div>

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8, delay: 0.12, ease }}
            className="group relative overflow-hidden bg-[#b08452] border border-gold-400/40 hover:border-gold-400/70 transition-all duration-700"
          >
            {/* top accent line */}
            <div className="h-px w-full bg-gradient-to-r from-navy-900/40 via-navy-900/15 to-transparent" />
            {/* background glow */}
            <div className="absolute -top-16 -right-16 w-64 h-64 bg-navy-900/10 rounded-full blur-3xl pointer-events-none" />
            <div className="relative p-10 lg:p-14 flex flex-col h-full">
              {/* eyebrow */}
              <div className="flex items-center justify-end gap-3 mb-10">
                <span className="font-label text-[10px] font-semibold tracking-[0.3em] uppercase text-navy-900/60">
                  Our Vision
                </span>
                <div className="flex items-center justify-center w-10 h-10 border border-navy-900/20 bg-navy-900/8">
                  <Eye className="text-navy-900" size={18} strokeWidth={1.25} />
                </div>
              </div>
              <h3 className="text-2xl md:text-3xl font-light text-navy-950 leading-[1.2] mb-6 tracking-tight">
                The most trusted boutique real estate advisor for private families.
              </h3>
              <div className="w-12 h-px bg-navy-900/30 mb-8" />
              <p className="text-navy-900/65 text-base leading-[1.9] font-light flex-1">
                Recognized by high-net-worth families and their advisors for the depth of our
                experience, the clarity of our thinking, and the outcomes we consistently create.
              </p>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* ─── Values ─── */}
      <Section className="bg-cream-50">
        <SectionHeading
          eyebrow="What Drives Us"
          title="Values that shape every engagement"
          subtitle="These principles are not aspirational — they are the operating standards we hold ourselves to."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, i) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: i * 0.08, ease }}
              className="group bg-cream-100 border border-cream-200 p-10 lg:p-12 hover:border-gold-400 transition-all duration-700"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-medium text-navy-800">{value.title}</h3>
                <value.icon
                  className="text-gold-500 group-hover:text-gold-600 transition-colors duration-700 shrink-0 ml-4"
                  size={20}
                  strokeWidth={1.25}
                />
              </div>
              <div className="w-8 h-px bg-gold-500/40 mb-5 group-hover:w-14 transition-all duration-700" />
              <p className="text-navy-600 text-sm leading-[1.85] font-light">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* ─── Stats ─── */}
      <section className="bg-navy-950 py-28 md:py-36 relative overflow-hidden paper-texture-dark">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/25 to-transparent" />
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: i * 0.1, ease }}
                className="text-center"
              >
                <p className="shimmer-text text-4xl md:text-5xl lg:text-6xl font-extralight mb-5">{stat.value}</p>
                <div className="w-10 h-px bg-gold-500/30 mx-auto mb-5" />
                <p className="text-xs text-cream-100/90 tracking-[0.25em] uppercase font-label font-semibold">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Leadership / Joanne Lucas ─── */}
      <Section className="bg-cream-100">
        <div className="grid lg:grid-cols-12 gap-16 items-start max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.9, ease }}
            className="lg:col-span-5"
          >
            <div className="relative overflow-hidden">
              <img
                src="/assets/images/JLucas_Headshot_2.jpg"
                alt="Joanne Lucas, Founder and Senior Advisor"
                className="w-full h-80 sm:h-[420px] md:h-[480px] object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/30 to-transparent" />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.9, delay: 0.1, ease }}
            className="lg:col-span-7"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-px bg-gold-500" />
              <p className="font-label text-[11px] font-semibold tracking-[0.35em] uppercase text-gold-600">
                Leadership
              </p>
            </div>
            <h3 className="text-3xl md:text-4xl lg:text-[3rem] font-light text-navy-800 mb-3 tracking-tighter-2">
              Joanne Lucas
            </h3>
            <p className="text-gold-600 text-[11px] font-semibold tracking-[0.25em] uppercase mb-8 font-label">
              Founder &amp; Senior Advisor
            </p>
            <div className="gold-divider mb-12" />
            <div className="space-y-6 text-navy-600 text-base lg:text-lg leading-[1.85] font-light">
              <p>
                With nearly two decades of experience in institutional real estate, Joanne Lucas
                founded The Rhea Group to bring senior-level asset strategy and advisory to
                high-net-worth families managing significant multifamily portfolios.
              </p>
              <p>
                Her career spans some of the most respected names in real estate — from
                HealthPeak ($2B REIT, senior housing and skilled nursing) and Greystar
                (co-architect of a $500M active adult investment fund) to Mapletree (~$1B in U.S.
                multifamily, driving 19% year-over-year revenue growth) and a $1.5B private family
                office, where as Vice President of Asset Management she transformed the platform
                across 8,000+ units. She has overseen more than 16,000 units and led the
                disposition of approximately $1B in real estate assets.
              </p>
              <p>
                Joanne is deeply engaged in the real estate community. She is Past President of
                CREW Orange County, serves on the Dean’s Circle Executive Board for UCI’s Paul
                Merage School of Business and recently joined the board of CASA OC. Her commitment
                to governance and leadership extends to board readiness certifications from
                Deloitte and Boardvance.
              </p>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* ─── Career highlights ─── */}
      <Section className="bg-cream-50">
        <SectionHeading
          eyebrow="Career Highlights"
          title="Institutional roots, private wealth focus"
          subtitle="The organizations and portfolios that shaped Joanne’s approach to real estate strategy."
        />
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {careerHighlights.map((item, i) => (
            <motion.div
              key={item.org}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: i * 0.08, ease }}
              className="group flex gap-6 p-10 lg:p-12 bg-cream-100 border border-cream-200 hover:border-gold-400 transition-all duration-700"
            >
              <item.icon
                className="text-gold-500 group-hover:text-gold-600 transition-colors duration-700 shrink-0 mt-1"
                size={22}
                strokeWidth={1.25}
              />
              <div>
                <h3 className="text-lg font-normal text-navy-800 mb-1">{item.org}</h3>
                <p className="font-label text-[10px] font-semibold tracking-[0.2em] uppercase text-gold-600 mb-4">
                  {item.role}
                </p>
                <p className="text-sm text-navy-600 leading-[1.85] font-light">{item.detail}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* ─── Credentials ─── */}
      <Section className="bg-navy-gradient paper-texture-dark">
        <SectionHeading
          eyebrow="Credentials & Affiliations"
          title="Qualifications that matter"
          subtitle="Education, governance training, and community leadership that inform our advisory work."
          light
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {credentials.map((cred, i) => (
            <motion.div
              key={cred}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="dark-card-hover flex items-center gap-4 px-8 py-7 bg-navy-800/50 border border-gold-500/20 hover:border-gold-500/40 transition-colors duration-300"
            >
              <Award className="text-gold-500 shrink-0" size={18} strokeWidth={1.25} />
              <span className="text-sm text-cream-100/90 font-light">{cred}</span>
            </motion.div>
          ))}
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
              Ready to bring institutional clarity to your portfolio?
            </h2>
            <div className="gold-divider mx-auto mb-10" />
            <Link
              to="/contact"
              className="btn-shine group inline-flex items-center gap-3 px-12 py-5 bg-gold-500 text-navy-950 text-[11px] font-semibold tracking-[0.25em] uppercase hover:bg-gold-400 hover:shadow-gold-hover transition-all duration-300"
            >
              Schedule a Consultation
              <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
