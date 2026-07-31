import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowDown } from 'lucide-react';

const ease = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background video (with image poster fallback) */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1439122590297-dde626bb7cf5?auto=format&fit=crop&w=2070&q=80"
          alt="Atmospheric mountain landscape emerging from mist at dawn"
          className="absolute inset-0 h-full w-full object-cover"
          loading="eager"
        />
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster="https://images.unsplash.com/photo-1439122590297-dde626bb7cf5?auto=format&fit=crop&w=2070&q=80"
        >
          <source src="/assets/video/hero-mountain.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 hero-overlay" />
        {/* Bottom gradient for depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/30 to-transparent" />
        {/* Left edge gradient for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950/60 via-transparent to-transparent" />
      </div>

      {/* Top hairline */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent z-20" />

      {/* Vertical side label */}
      <div className="absolute left-6 top-1/2 -translate-y-1/2 z-20 hidden xl:block">
        <p className="vertical-label text-cream-100/25 text-[10px] font-label tracking-[0.3em] uppercase">
          Est. 2024 — The Rhea Group
        </p>
      </div>

      {/* Right-side vertical scroll indicator */}
      <div className="absolute right-8 bottom-32 z-20 hidden lg:flex flex-col items-center gap-3">
        <p className="vertical-label text-cream-100/30 text-[9px] font-label tracking-[0.3em] uppercase">
          Scroll
        </p>
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: 48 }}
          transition={{ duration: 1.2, delay: 1, ease }}
          className="w-px bg-gradient-to-b from-gold-500/50 to-transparent"
        />
        <ArrowDown size={12} className="text-cream-100/30" strokeWidth={1.5} />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 w-full pt-24 pb-12 md:pt-28 md:pb-20 lg:pb-44">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease }}
          className="max-w-3xl"
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex items-center gap-4 mb-10"
          >
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 48 }}
              transition={{ duration: 0.8, delay: 0.4, ease }}
              className="h-px bg-gold-500"
            />
            <p className="text-gold-light font-label text-[11px] font-semibold tracking-[0.35em] uppercase">
              Real Estate Asset Strategy &amp; Advisory
            </p>
          </motion.div>

          <h1 className="text-[2.5rem] sm:text-5xl md:text-6xl lg:text-[5rem] font-extralight text-cream-50 leading-[1.08] mb-10 tracking-tighter-2">
            Institutional clarity
            <br />
            for <span className="gold-text font-normal italic pr-1">private</span> real
            estate wealth.
          </h1>

          <p className="text-cream-200/65 text-base sm:text-lg md:text-xl leading-[1.85] mb-16 max-w-xl font-light">
            We help high-net-worth families and their advisors protect, optimize, and transition
            multifamily portfolios with the rigor of an institution and the attention of a boutique.
          </p>

          <div className="flex flex-col sm:flex-row gap-5">
            <Link
              to="/contact"
              className="btn-shine group inline-flex items-center justify-center gap-3 px-10 py-4 bg-gold-500 text-navy-950 text-[11px] font-semibold tracking-[0.25em] uppercase hover:bg-gold-400 hover:shadow-gold-hover transition-all duration-300"
            >
              Schedule a Consultation
              <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/services"
              className="group inline-flex items-center justify-center gap-3 px-10 py-4 border border-cream-50/15 text-cream-50 text-[11px] font-semibold tracking-[0.25em] uppercase hover:border-gold-500/40 hover:bg-cream-50/[0.03] transition-all duration-500"
            >
              Explore Services
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Bottom stat bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="absolute bottom-0 left-0 right-0 z-10 hidden lg:block"
      >
        <div className="mx-auto max-w-7xl px-10 pb-12">
          <div className="grid grid-cols-3 gap-0 border-t border-cream-100/10">
            {[
              { value: '16K+', label: 'Units Overseen' },
              { value: '~$1B', label: 'Disposition Led' },
              { value: '$5B+', label: 'Assets Under Oversight' },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 + i * 0.12 }}
                className="pt-6 flex items-baseline gap-4"
              >
                <p className="editorial-num text-3xl font-light text-cream-50">{stat.value}</p>
                <p className="text-[10px] text-cream-100/75 tracking-[0.25em] uppercase font-label">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
