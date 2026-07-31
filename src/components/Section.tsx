import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  containerClassName?: string;
}

export default function Section({ children, className = '', id, containerClassName = '' }: SectionProps) {
  return (
    <section id={id} className={`py-24 md:py-32 lg:py-40 ${className}`}>
      <div className={`mx-auto max-w-7xl px-6 lg:px-10 ${containerClassName}`}>{children}</div>
    </section>
  );
}

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  light?: boolean;
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  light = false,
  className = '',
}: SectionHeadingProps) {
  const alignment = align === 'center' ? 'text-center mx-auto' : 'text-left';

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`max-w-2xl mb-20 ${alignment} ${className}`}
    >
      {eyebrow && (
        <div className={`flex items-center gap-3 mb-8 ${align === 'center' ? 'justify-center' : ''}`}>
          <div className="w-10 h-px bg-gold-500" />
          <p
            className={`font-label text-[11px] font-semibold tracking-[0.35em] uppercase ${
              light ? 'text-gold-light' : 'text-gold-600'
            }`}
          >
            {eyebrow}
          </p>
          {align === 'center' && <div className="w-10 h-px bg-gold-500" />}
        </div>
      )}
      <h2
        className={`text-3xl md:text-4xl lg:text-5xl font-light leading-[1.2] mb-8 tracking-tighter-2 ${
          light ? 'text-cream-50' : 'text-navy-800'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`text-base md:text-lg leading-[1.85] font-light ${
            light ? 'text-cream-200/60' : 'text-navy-600'
          }`}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
