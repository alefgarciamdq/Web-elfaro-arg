import { Link, Outlet, useLocation } from 'react-router-dom';
import { Menu, X, Mail, MessageSquare } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import CookieBanner from './CookieBanner';
import { CONTACT } from '../data/contact';

export default function Layout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Inicio', path: '/' },
    { name: 'Estructuras', path: '/estructuras-de-tratamiento' },
    { name: 'Talleres', path: '/talleres' },
    { name: 'Historia', path: '/historia' },
    { name: 'Quiénes lo hacemos', path: '/quienes-lo-hacemos' },
    { name: 'Mi Faro España', path: '/espana' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-transparent text-texto font-sans relative">
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;1,400&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet" />
      </Helmet>

      {/* Nav */}
      <nav style={{
        background: 'var(--blanco)',
        borderBottom: '1px solid var(--borde)',
        height: '68px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 48px',
        position: 'sticky',
        top: 0,
        zIndex: 50,
      }}>
        {/* Logo */}
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}>
          <div style={{
            width: 36, height: 36,
            background: 'var(--azul-noche)',
            borderRadius: '50%',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="var(--arena)">
              <path d="M12 2L8 7H4l4 4-2 7 6-4 6 4-2-7 4-4h-4L12 2z"/>
            </svg>
          </div>
          <div>
            <div style={{ fontFamily: 'var(--serif)', fontSize: '17px', color: 'var(--azul-noche)', lineHeight: 1.1 }}>
              El Faro
            </div>
            <div style={{ fontSize: '9.5px', letterSpacing: '2.5px', textTransform: 'uppercase', color: 'var(--tierra)', marginTop: '1px' }}>
              Mar del Plata · Desde 1993
            </div>
          </div>
        </Link>

        {/* Links */}
        <div className="hidden lg:flex" style={{ alignItems: 'center', gap: '28px' }}>
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              style={{
                fontSize: '13px',
                color: location.pathname === link.path ? 'var(--azul-cielo)' : 'var(--texto-suave)',
                fontWeight: location.pathname === link.path ? 500 : 400,
                textDecoration: 'none',
              }}
            >
              {link.name}
            </Link>
          ))}
          
          {/* CTA */}
          <Link to="/contacto" style={{
            background: 'var(--azul-noche)',
            color: 'var(--blanco)',
            padding: '9px 22px',
            borderRadius: '6px',
            fontSize: '13px',
            fontWeight: 500,
            textDecoration: 'none',
          }}>
            Escribinos
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden p-2 rounded-lg hover:bg-[#f0ece6] transition-colors"
          style={{ color: 'var(--texto-suave)' }}
          aria-label="Menú"
        >
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-crema/95 backdrop-blur-2xl pt-28 border-b border-borde"
          >
            <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="px-4 py-4 text-xl font-serif rounded-2xl transition-colors text-texto hover:bg-[#f0ece6]"
                  style={{
                    color: location.pathname === link.path ? 'var(--azul-cielo)' : 'var(--texto)',
                    fontWeight: location.pathname === link.path ? 600 : 400,
                    textDecoration: 'none',
                  }}
                >
                  {link.name}
                </Link>
              ))}
              <div className="mt-6 pt-6 border-t border-borde flex flex-col gap-3">
                <a
                  href={CONTACT.whatsappAR}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-[#25d366] text-white px-6 py-4 rounded-full text-sm font-medium tracking-wide"
                >
                  <MessageSquare size={18} />
                  WhatsApp
                </a>
                <Link
                  to="/contacto"
                  className="flex items-center justify-center gap-2 border border-borde text-texto px-6 py-4 rounded-full text-sm font-medium tracking-wide hover:bg-[#f0ece6] transition-colors"
                >
                  Formulario de contacto
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      <footer>
        {/* Banda superior */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8" style={{
          background: 'var(--azul-noche)',
          padding: '36px 48px',
          alignItems: 'center',
        }}>
          {/* Col 1: marca */}
          <div>
            <div style={{ fontFamily: 'var(--serif)', fontSize: '16px', color: 'rgba(255,255,255,0.88)' }}>
              El Faro · Mar del Plata
            </div>
            <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.38)', marginTop: '6px', lineHeight: 1.6 }}>
              Garay 2073, Mar del Plata<br/>
              +54 223 492-1953 · info@programaelfaro.com.ar
            </div>
          </div>

          {/* Col 2: links */}
          <div className="flex flex-col gap-2">
            {[
              { label: 'Inicio', path: '/' },
              { label: 'Estructuras de tratamiento', path: '/estructuras-de-tratamiento' },
              { label: 'Talleres', path: '/talleres' },
              { label: 'Historia', path: '/historia' },
              { label: 'Quiénes lo hacemos', path: '/quienes-lo-hacemos' },
            ].map(l => (
              <Link key={l.path} to={l.path} style={{ color: 'rgba(255,255,255,0.42)', fontSize: '12px', textDecoration: 'none' }}>
                {l.label}
              </Link>
            ))}
          </div>

          {/* Col 3: red */}
          <div className="text-left md:text-right">
            <div style={{ fontSize: '9.5px', letterSpacing: '2.5px', textTransform: 'uppercase', color: 'var(--arena)', opacity: 0.7, marginBottom: '6px' }}>
              Red El Faro
            </div>
            <a href="https://mifaro.es" target="_blank" rel="noopener noreferrer" style={{
              fontFamily: 'var(--serif)', fontSize: '14px', color: 'rgba(255,255,255,0.6)', fontStyle: 'italic', textDecoration: 'none',
            }}>
              Mi Faro Valencia · España →
            </a>
          </div>
        </div>

        {/* Franja copyright */}
        <div className="flex flex-col md:flex-row justify-between gap-2" style={{
          background: 'rgba(0,0,0,0.25)',
          padding: '12px 48px',
        }}>
          <span style={{ fontSize: '10.5px', color: 'rgba(255,255,255,0.25)' }}>
            © 2025 El Faro · Centro de orientación y acompañamiento · Mar del Plata, Argentina
          </span>
          <span style={{ fontSize: '10.5px', color: 'rgba(255,255,255,0.25)' }}>
            programaelfaro.com.ar
          </span>
        </div>
      </footer>

      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-center gap-3">
        {/* Contact Form Button */}
        <Link
          to="/contacto"
          className="w-12 h-12 rounded-full bg-azul-noche/85 backdrop-blur-md hover:bg-azul-noche text-arena border border-arena/30 flex items-center justify-center shadow-[0_8px_24px_rgba(0,0,0,0.3)] transition-all duration-300 hover:scale-105 group relative"
          aria-label="Formulario de contacto"
        >
          <Mail size={20} />
          {/* Tooltip */}
          <span className="absolute right-14 bg-azul-noche/90 backdrop-blur-md text-crema text-xs font-medium px-3 py-1.5 rounded-lg border border-arena/15 shadow-md opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
            Formulario de contacto
          </span>
        </Link>

        {/* WhatsApp Button */}
        <a
          href={CONTACT.whatsappAR}
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20BA5A] text-white flex items-center justify-center shadow-[0_8px_24px_rgba(37,211,102,0.3)] transition-all duration-300 hover:scale-105 group relative"
          aria-label="WhatsApp"
        >
          <MessageSquare size={24} className="fill-current" />
          {/* Tooltip */}
          <span className="absolute right-16 bg-azul-noche/90 backdrop-blur-md text-crema text-xs font-medium px-3 py-1.5 rounded-lg border border-arena/15 shadow-md opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
            WhatsApp Argentina
          </span>
        </a>
      </div>

      <CookieBanner />
    </div>
  );
}
