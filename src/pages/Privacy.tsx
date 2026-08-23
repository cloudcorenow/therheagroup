import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import Section from '@/components/Section';
import { useDocumentMeta } from '@/hooks/useDocumentMeta';

const ease = [0.22, 1, 0.36, 1] as const;

const sections = [
  {
    id: 'information-we-collect',
    title: '1. Information We Collect',
    body: [
      'We collect information that you provide directly to us when you express interest in our services, request a consultation, or otherwise communicate with us. This may include your name, email address, phone number, organization, and any details you share about your portfolio or advisory needs.',
      'We also collect limited technical information automatically when you visit our website, such as IP address, browser type, pages visited, and referring URLs. This information is used to understand how visitors use our site and to improve the experience.',
    ],
  },
  {
    id: 'how-we-use-information',
    title: '2. How We Use Your Information',
    body: [
      'We use the information we collect to respond to your inquiries, schedule and conduct consultations, provide advisory services, send relevant communications you have requested, and improve the content and functionality of our website.',
      'We do not sell, rent, or trade your personal information to third parties. Any sharing with service providers (such as the platforms that host our website or store inquiry data) is limited to what is necessary to operate our business, and those providers are bound by obligations of confidentiality.',
    ],
  },
  {
    id: 'data-retention',
    title: '3. Data Retention',
    body: [
      'We retain personal information only as long as necessary to fulfill the purposes described in this policy, to comply with legal obligations, to resolve disputes, and to enforce our agreements. Inquiries submitted through our contact form are retained to allow us to follow up and to maintain a record of our communications.',
    ],
  },
  {
    id: 'cookies',
    title: '4. Cookies and Tracking',
    body: [
      'Our website may use cookies and similar technologies to understand how visitors use the site and to measure performance. You can control cookies through your browser settings; disabling them may affect some functionality.',
    ],
  },
  {
    id: 'third-party-links',
    title: '5. Third-Party Links and Services',
    body: [
      'Our website may contain links to third-party websites or services that we do not control. We are not responsible for the privacy practices or content of those sites and encourage you to review their policies separately.',
    ],
  },
  {
    id: 'security',
    title: '6. Data Security',
    body: [
      'We take reasonable measures to protect the information we collect against unauthorized access, alteration, or disclosure. However, no method of transmission or electronic storage is completely secure, and we cannot guarantee absolute security.',
    ],
  },
  {
    id: 'your-rights',
    title: '7. Your Rights',
    body: [
      'You may request access to, correction of, or deletion of the personal information we hold about you. You may also opt out of receiving marketing communications at any time. To exercise these rights, contact us using the details below.',
    ],
  },
  {
    id: 'childrens-privacy',
    title: "8. Children's Privacy",
    body: [
      'Our services are intended for adults and businesses. We do not knowingly collect personal information from children under 16, and we do not knowingly direct our services to them.',
    ],
  },
  {
    id: 'changes',
    title: '9. Changes to This Policy',
    body: [
      'We may update this Privacy Policy from time to time. Changes will be posted on this page with a revised effective date. We encourage you to review this page periodically.',
    ],
  },
  {
    id: 'contact',
    title: '10. Contact Us',
    body: [
      'If you have questions about this Privacy Policy or our handling of personal information, please contact us at joanne@therheagroup.com or through our contact page.',
    ],
  },
];

export default function Privacy() {
  useDocumentMeta({
    title: 'Privacy Policy | The Rhea Group',
    description:
      'How The Rhea Group collects, uses, and protects personal information submitted through our website and advisory engagements.',
    path: '/privacy',
  });

  return (
    <>
      <section className="relative pt-40 pb-24 md:pt-52 md:pb-32 bg-navy-gradient overflow-hidden">
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
                Legal
              </p>
              <div className="w-12 h-px bg-gold-500" />
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-light text-cream-50 leading-[1.12] mb-10 tracking-tighter-2">
              Privacy Policy
            </h1>
            <div className="gold-divider mx-auto mb-8" />
            <p className="text-cream-200/55 text-base sm:text-lg leading-[1.85] font-light max-w-2xl mx-auto">
              Your trust matters. This policy explains what information we collect, how we use it,
              and the choices you have.
            </p>
            <p className="text-cream-200/40 text-xs font-label tracking-[0.2em] uppercase mt-8">
              Last updated: July 2026
            </p>
          </motion.div>
        </div>
      </section>

      <Section className="bg-cream-50">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24">
          {/* Sticky table of contents */}
          <aside className="lg:col-span-4 xl:col-span-3">
            <div className="lg:sticky lg:top-32">
              <div className="flex items-center gap-3 mb-8">
                <ShieldCheck className="text-gold-500" size={18} strokeWidth={1.25} />
                <p className="font-label text-[10px] font-semibold tracking-[0.3em] uppercase text-gold-600">
                  Contents
                </p>
              </div>
              <nav>
                <ul className="space-y-3 border-l border-cream-200 pl-5">
                  {sections.map((s) => (
                    <li key={s.id}>
                      <a
                        href={`#${s.id}`}
                        className="block text-sm text-navy-600 hover:text-gold-600 font-light transition-colors duration-200"
                      >
                        {s.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </aside>

          {/* Body */}
          <div className="lg:col-span-8 xl:col-span-9">
            <div className="space-y-16">
              {sections.map((s, i) => (
                <motion.section
                  key={s.id}
                  id={s.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.6, delay: i * 0.04, ease }}
                  className="scroll-mt-32"
                >
                  <h2 className="text-2xl md:text-3xl font-light text-navy-800 mb-6 tracking-tight">
                    {s.title}
                  </h2>
                  <div className="w-10 h-px bg-gold-500/40 mb-6" />
                  <div className="space-y-5">
                    {s.body.map((p, j) => (
                      <p key={j} className="text-navy-600 text-base leading-[1.85] font-light">
                        {p}
                      </p>
                    ))}
                  </div>
                </motion.section>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-20 p-10 lg:p-14 bg-navy-900 border border-gold-500/15 text-center">
              <h3 className="text-2xl md:text-3xl font-light text-cream-50 mb-6 tracking-tight">
                Questions about your privacy?
              </h3>
              <div className="gold-divider mx-auto mb-8" />
              <Link
                to="/contact"
                className="btn-shine group inline-flex items-center gap-3 px-10 py-4 bg-gold-500 text-navy-950 text-[11px] font-semibold tracking-[0.25em] uppercase hover:bg-gold-400 hover:shadow-gold-hover transition-all duration-300"
              >
                Contact Us
                <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
