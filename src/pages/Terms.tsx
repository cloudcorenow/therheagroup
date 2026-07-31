import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, FileText } from 'lucide-react';
import Section from '@/components/Section';
import { useDocumentMeta } from '@/hooks/useDocumentMeta';

const ease = [0.22, 1, 0.36, 1] as const;

const sections = [
  {
    id: 'acceptance',
    title: '1. Acceptance of Terms',
    body: [
      'By accessing or using this website, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any part of these terms, you may not access the website or engage our services.',
    ],
  },
  {
    id: 'services',
    title: '2. Description of Services',
    body: [
      'The Rhea Group provides real estate asset strategy and advisory services, including asset performance diagnostics, portfolio advisory and oversight, special situations advisory, and disposition guidance. The specifics of any engagement are governed by a separate written agreement between you and The Rhea Group.',
      'These Terms govern use of this website and general inquiries. They do not constitute an advisory relationship or a binding engagement until a separate agreement is executed.',
    ],
  },
  {
    id: 'no-advice',
    title: '3. Informational Content; No Professional Advice',
    body: [
      'Content on this website is provided for general informational purposes only and does not constitute legal, tax, investment, accounting, or other professional advice. You should consult qualified professionals before making decisions based on information presented here.',
      'Real estate involves risk. Past performance is not indicative of future results. Any figures, case studies, or examples are illustrative and not guarantees of outcome.',
    ],
  },
  {
    id: 'intellectual-property',
    title: '4. Intellectual Property',
    body: [
      'All content on this website — including text, graphics, logos, images, and design — is the property of The Rhea Group or its licensors and is protected by intellectual property laws. You may not reproduce, distribute, or create derivative works without prior written permission.',
    ],
  },
  {
    id: 'user-conduct',
    title: '5. User Conduct',
    body: [
      'You agree to use this website lawfully and not to disrupt its operation, attempt to gain unauthorized access, transmit viruses or harmful code, or use the site to send unsolicited communications. We may restrict access at our discretion for violations of these terms.',
    ],
  },
  {
    id: 'inquiries',
    title: '6. Inquiries and Communications',
    body: [
      'When you submit an inquiry through our contact form, you consent to being contacted regarding your request. You are responsible for the accuracy of the information you provide. Communications are not confidential until a formal engagement is established, and you should avoid sharing sensitive non-public information through the website form.',
    ],
  },
  {
    id: 'third-party',
    title: '7. Third-Party Content and Links',
    body: [
      'This website may reference or link to third-party content, services, or tools. We do not endorse and are not responsible for the accuracy, availability, or practices of third parties. Your interactions with third parties are solely between you and them.',
    ],
  },
  {
    id: 'disclaimer',
    title: '8. Disclaimer of Warranties',
    body: [
      'This website is provided "as is" and "as available" without warranties of any kind, express or implied, including warranties of merchantability, fitness for a particular purpose, or non-infringement. We do not warrant the site will be uninterrupted, error-free, or secure.',
    ],
  },
  {
    id: 'liability',
    title: '9. Limitation of Liability',
    body: [
      'To the fullest extent permitted by law, The Rhea Group and its affiliates shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or data, arising from your use of or inability to use this website.',
    ],
  },
  {
    id: 'governing-law',
    title: '10. Governing Law',
    body: [
      'These Terms are governed by the laws of the State of California, without regard to conflict-of-laws principles. Any disputes shall be resolved in the courts located in Orange County, California.',
    ],
  },
  {
    id: 'changes',
    title: '11. Changes to These Terms',
    body: [
      'We may revise these Terms at any time. Updated terms will be posted on this page with a revised effective date. Your continued use of the website after changes constitutes acceptance of the revised Terms.',
    ],
  },
  {
    id: 'contact',
    title: '12. Contact Us',
    body: [
      'If you have questions about these Terms of Service, please contact us at joanne@therheagroup.com or through our contact page.',
    ],
  },
];

export default function Terms() {
  useDocumentMeta({
    title: 'Terms of Service | The Rhea Group',
    description:
      'The terms that govern use of The Rhea Group website and the basis on which advisory engagements are initiated.',
    path: '/terms',
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
              Terms of Service
            </h1>
            <div className="gold-divider mx-auto mb-8" />
            <p className="text-cream-200/55 text-base sm:text-lg leading-[1.85] font-light max-w-2xl mx-auto">
              The terms that govern your use of this website and the basis on which we work together.
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
                <FileText className="text-gold-500" size={18} strokeWidth={1.25} />
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
                Have questions about these terms?
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
