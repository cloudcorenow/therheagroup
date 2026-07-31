import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const isHome = location.pathname === '/';

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 overflow-visible ${
          scrolled || !isHome
            ? 'bg-cream-50/90 backdrop-blur-2xl py-2 shadow-[0_1px_0_0_rgba(200,144,106,0.12)]'
            : 'bg-transparent py-2'
        }`}
      >
        <nav className="mx-auto max-w-7xl px-4 lg:px-6 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3" aria-label="The Rhea Group home">
            <img
              src="/assets/images/logonotexttransparent.png"
              alt="The Rhea Group"
              className="h-14 w-14 md:h-20 md:w-20 object-contain shrink-0"
            />
            <span
              className={`font-label text-[13px] font-semibold tracking-[0.25em] uppercase transition-colors duration-500 ${
                scrolled || !isHome ? 'text-navy-800' : 'text-cream-50'
              }`}
            >
              The Rhea Group
            </span>
          </Link>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-12">
            {navLinks.map((link) => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `link-underline text-[11px] font-medium tracking-[0.25em] uppercase transition-colors duration-300 ${
                      isActive
                        ? 'is-active text-gold-600'
                        : scrolled || !isHome
                          ? 'text-navy-600 hover:text-gold-600'
                          : 'text-cream-100/70 hover:text-gold-300'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
            <li>
              <Link
                to="/contact"
                className="group relative inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.25em] uppercase transition-colors duration-300"
              >
                <span
                  className={`transition-colors duration-300 ${
                    scrolled || !isHome
                      ? 'text-navy-800 hover:text-gold-600'
                      : 'text-cream-50 hover:text-gold-300'
                  }`}
                >
                  Get in Touch
                </span>
                <span
                  className={`w-8 h-px transition-all duration-500 group-hover:w-12 ${
                    scrolled || !isHome ? 'bg-gold-600' : 'bg-gold-500'
                  }`}
                />
              </Link>
            </li>
          </ul>

          {/* Mobile toggle */}
          <button
            className="md:hidden flex items-center"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? (
              <X className="text-cream-50" size={22} strokeWidth={1.5} />
            ) : (
              <Menu className={scrolled || !isHome ? 'text-navy-900' : 'text-cream-50'} size={22} strokeWidth={1.5} />
            )}
          </button>
        </nav>
      </header>

      {/* Mobile menu — full-screen overlay, outside header so z-index is independent */}
      {mobileOpen && (
        <div className="md:hidden fixed inset-0 z-[9999] bg-navy-900 flex flex-col">
          <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
            <div className="flex items-center gap-3">
              <img
                src="/assets/images/logonotexttransparent.png"
                alt="The Rhea Group"
                className="h-16 w-16 object-contain"
              />
              <span className="font-label text-[13px] font-semibold tracking-[0.25em] uppercase text-cream-50">
                The Rhea Group
              </span>
            </div>
            <button
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
              className="text-cream-50"
            >
              <X size={22} strokeWidth={1.5} />
            </button>
          </div>

          <ul className="flex flex-col flex-1 justify-center px-8 gap-0">
            {navLinks.map((link) => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `block text-2xl font-light tracking-[0.1em] py-5 border-b border-white/10 transition-colors ${
                      isActive ? 'text-gold-500' : 'text-cream-50 hover:text-gold-300'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="px-8 pb-12">
            <Link
              to="/contact"
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-center gap-3 w-full py-4 bg-gold-600 hover:bg-gold-500 transition-colors text-[11px] font-semibold tracking-[0.25em] uppercase text-white"
            >
              Schedule a Consultation
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
