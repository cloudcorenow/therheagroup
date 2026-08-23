import { Link } from 'react-router-dom';
import { Linkedin, Mail, MapPin, ArrowRight } from 'lucide-react';

const footerLinks = {
  Company: [
    { label: 'About', path: '/about' },
    { label: 'Services', path: '/services' },
    { label: 'Contact', path: '/contact' },
  ],
  Services: [
    { label: 'Asset Performance Diagnostic', path: '/services' },
    { label: 'Portfolio Advisory & Oversight', path: '/services' },
    { label: 'Special Situations Advisory', path: '/services' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-cream-100 relative overflow-hidden paper-texture-dark">
      {/* Top hairline */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* CTA banner */}
        <div className="pt-28 pb-24 border-b border-navy-700/60">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-12">
            <div className="max-w-xl">
              <p className="font-label text-[10px] font-semibold tracking-[0.35em] uppercase text-gold-light mb-5">
                Let&apos;s Talk
              </p>
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-light text-cream-50 tracking-tighter-2 leading-[1.2]">
                Protect and grow your portfolio with institutional clarity.
              </h3>
            </div>
            <Link
              to="/contact"
              className="btn-shine group inline-flex items-center gap-3 px-12 py-5 bg-gold-500 text-navy-950 text-[11px] font-semibold tracking-[0.25em] uppercase hover:bg-gold-400 hover:shadow-gold-hover transition-all duration-300 shrink-0"
            >
              Start a Conversation
              <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Main footer grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 py-24">
          {/* Brand */}
          <div className="lg:col-span-1">
            <img
              src="/assets/images/RheaWhiteTransparent.png"
              alt="The Rhea Group"
              className="h-20 w-auto mb-6"
            />
            <p className="text-cream-200/50 text-sm leading-[1.75] max-w-xs font-light">
              Boutique real estate asset strategy and advisory for high-net-worth families and
              their advisors.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-label text-[10px] font-semibold tracking-[0.3em] uppercase text-gold-light mb-5">
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.path}
                      className="link-underline text-cream-200/55 hover:text-gold-300 text-sm font-light transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact */}
          <div>
            <h4 className="font-label text-[10px] font-semibold tracking-[0.3em] uppercase text-gold-light mb-5">
              Connect
            </h4>
            <ul className="space-y-4 text-sm text-cream-200/55 font-light">
              <li className="flex items-start gap-3">
                <MapPin size={15} className="text-gold-light/70 mt-0.5 shrink-0" strokeWidth={1.5} />
                <span>Greater Los Angeles / Orange County, CA</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={15} className="text-gold-light/70 shrink-0" strokeWidth={1.5} />
                <a
                  href="mailto:joanne@therheagroup.com"
                  className="hover:text-gold-300 transition-colors"
                >
                  joanne@therheagroup.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Linkedin size={15} className="text-gold-light/70 shrink-0" strokeWidth={1.5} />
                <a
                  href="https://www.linkedin.com/in/joannelucas/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-gold-300 transition-colors"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-navy-700/60 py-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-cream-200/35 text-xs font-light">
            &copy; {new Date().getFullYear()} The Rhea Group. All rights reserved.
          </p>
          <div className="flex gap-8">
            <Link to="/privacy" className="link-underline text-cream-200/35 hover:text-gold-300 text-xs font-light transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="link-underline text-cream-200/35 hover:text-gold-300 text-xs font-light transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
