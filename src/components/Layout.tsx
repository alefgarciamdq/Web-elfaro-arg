import { Link, Outlet, useLocation } from 'react-router-dom';
import { Menu, X, Heart, MapPin, Phone, Mail, Anchor, MessageSquare } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CookieBanner from './CookieBanner';

export default function Layout({ children }: { children?: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [logoError, setLogoError] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Inicio', path: '/' },
    { name: 'Dispositivos', path: '/dispositivos' },
    { name: 'Talleres', path: '/talleres' },
    { name: 'Historia', path: '/historia' },
    { name: 'Quiénes lo hacemos', path: '/quienes-lo-hacemos' },
    { name: 'Mi Faro España', path: '/espana' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-offwhite text-ink font-sans">
      {/* SVG Filters for Logo */}
      <svg width="0" height="0" className="absolute hidden">
        <filter id="extract-logo">
          <feColorMatrix type="matrix" values="
            0 0 0 0 0.102
            0 0 0 0 0.102
            0 0 0 0 0.102
            -1 -1 -1 0 2.6" />
        </filter>
        <filter id="colorize-olive">
          <feColorMatrix type="matrix" values="
            1 0 0 0 0.353
            0 1 0 0 0.420
            0 0 1 0 0.365
            0 0 0 1 0" />
        </filter>
      </svg>

      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-offwhite/75 backdrop-blur-md border-b border-sand/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 lg:gap-12">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 sm:gap-4 group shrink-0 lg:mr-8">
              {!logoError ? (
                <img
                  src="https://i.postimg.cc/mgVHpGR8/IMG-0990.jpg"
                  alt="Logo El Faro"
                  className="h-11 sm:h-12 lg:h-14 w-auto object-contain [clip-path:inset(2px)]"
                  style={{ filter: 'url(#extract-logo)' }}
                  onError={() => setLogoError(true)}
                />
              ) : (
                <div className="w-11 h-11 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-full bg-olive flex items-center justify-center text-offwhite group-hover:bg-olive-light transition-colors">
                  <Anchor size={24} className="fill-current" />
                </div>
              )}
              <span className="font-sans text-[22px] sm:text-[24px] lg:text-[28px] font-semibold tracking-tight text-ink whitespace-nowrap">El Faro</span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2 flex-1 justify-center">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-3 py-2 text-sm font-medium tracking-wide transition-colors rounded-full whitespace-nowrap ${
                    location.pathname === link.path
                      ? 'text-olive bg-olive/10'
                      : 'text-ink-light hover:text-ink hover:bg-sand/50'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-3 shrink-0">
              <a
                href="https://wa.me/5492235923790"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-olive text-white px-5 py-2.5 rounded-full text-sm font-medium tracking-wide hover:bg-olive-light transition-colors"
              >
                <MessageSquare size={16} />
                WhatsApp
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-full hover:bg-sand/50 transition-colors"
              aria-label="Menú"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-offwhite pt-20"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-4 py-4 text-xl font-serif rounded-2xl transition-colors ${
                    location.pathname === link.path
                      ? 'text-olive bg-olive/10'
                      : 'text-ink hover:bg-sand/50'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="mt-6 pt-6 border-t border-sand flex flex-col gap-3">
                <a
                  href="https://wa.me/5492235923790"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-olive text-white px-6 py-4 rounded-full text-sm font-medium tracking-wide"
                >
                  <MessageSquare size={18} />
                  WhatsApp
                </a>
                <Link
                  to="/contacto"
                  className="flex items-center justify-center gap-2 border border-sand text-ink px-6 py-4 rounded-full text-sm font-medium tracking-wide hover:bg-sand/30 transition-colors"
                >
                  Formulario de contacto
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main content */}
      <main className="flex-1 pt-20">
        <Outlet />
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-ink text-offwhite py-16 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            {/* Brand */}
            <div className="md:col-span-1">
              <div className="flex items-center gap-3 mb-6">
                <img
                  src="https://i.postimg.cc/mgVHpGR8/IMG-0990.jpg"
                  alt="El Faro"
                  className="h-12 w-auto object-contain [clip-path:inset(2px)] brightness-0 invert"
                  onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                />
                <span className="font-sans text-2xl font-semibold tracking-tight text-offwhite">El Faro</span>
              </div>
              <p className="text-sand/70 text-sm font-light leading-relaxed mb-6">
                Más de 30 años acompañando procesos de salud mental y adicciones en Mar del Plata.
              </p>
              <div className="flex gap-4">
                <a
                  href="https://www.instagram.com/elfaromdq/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-offwhite/10 flex items-center justify-center hover:bg-offwhite/20 transition-colors"
                  aria-label="Instagram El Faro"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a
                  href="https://www.facebook.com/ProgramaElFaro"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-offwhite/10 flex items-center justify-center hover:bg-offwhite/20 transition-colors"
                  aria-label="Facebook El Faro"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Nav */}
            <div>
              <h3 className="text-sm font-medium tracking-widest uppercase text-sand/50 mb-6">El Faro</h3>
              <ul className="space-y-3">
                {[
                  { label: 'Inicio', path: '/' },
                  { label: 'Dispositivos', path: '/dispositivos' },
                  { label: 'Talleres', path: '/talleres' },
                  { label: 'Historia', path: '/historia' },
                  { label: 'Quiénes lo hacemos', path: '/quienes-lo-hacemos' },
                ].map(l => (
                  <li key={l.path}>
                    <Link to={l.path} className="text-sand/70 text-sm hover:text-offwhite transition-colors">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-sm font-medium tracking-widest uppercase text-sand/50 mb-6">Contacto</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin size={16} className="text-gold mt-0.5 shrink-0" />
                  <span className="text-sand/70 text-sm">Mar del Plata<br />Buenos Aires, Argentina</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone size={16} className="text-gold shrink-0" />
                  <a href="tel:+5492235923790" className="text-sand/70 text-sm hover:text-offwhite transition-colors">
                    +54 9 223 592 3790
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Phone size={16} className="text-gold/60 shrink-0" />
                  <a href="tel:+34611568705" className="text-sand/50 text-sm hover:text-offwhite transition-colors">
                    +34 611 56 87 05 (España)
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail size={16} className="text-gold shrink-0" />
                  <a href="mailto:info@programaelfaro.com.ar" className="text-sand/70 text-sm hover:text-offwhite transition-colors">
                    info@programaelfaro.com.ar
                  </a>
                </li>
              </ul>
            </div>

            {/* Red institucional */}
            <div>
              <h3 className="text-sm font-medium tracking-widest uppercase text-sand/50 mb-6">Red El Faro</h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="https://mifaro.es"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sand/70 text-sm hover:text-offwhite transition-colors"
                  >
                    Mi Faro España →
                  </a>
                </li>
                <li>
                  <Link to="/espana" className="text-sand/70 text-sm hover:text-offwhite transition-colors">
                    El Faro en Valencia
                  </Link>
                </li>
                <li>
                  <Link to="/recursos" className="text-sand/70 text-sm hover:text-offwhite transition-colors">
                    Blog / Recursos
                  </Link>
                </li>
                <li>
                  <Link to="/contacto" className="text-sand/70 text-sm hover:text-offwhite transition-colors">
                    Contacto
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-offwhite/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sand/40 text-xs flex items-center gap-2">
              © {new Date().getFullYear()} El Faro · Mar del Plata, Argentina
              <Heart size={12} className="text-gold/60 fill-current" />
            </p>
            <div className="flex gap-6">
              <Link to="/aviso-legal" className="text-sand/40 text-xs hover:text-sand/70 transition-colors">Aviso Legal</Link>
              <Link to="/privacidad" className="text-sand/40 text-xs hover:text-sand/70 transition-colors">Privacidad</Link>
              <Link to="/cookies" className="text-sand/40 text-xs hover:text-sand/70 transition-colors">Cookies</Link>
            </div>
          </div>
        </div>
      </footer>

      <CookieBanner />
    </div>
  );
}
