import { Link, Outlet, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Anchor, MessageSquare, ChevronDown } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Head } from 'vite-react-ssg';
import CookieBanner from './CookieBanner';
import { trackWhatsAppClick, trackPhoneClick } from '../utils/telemetry';

const getWhatsAppText = (pathname: string): string => {
  if (pathname === '/') return 'Si esto te hace ruido, podemos hablar';
  if (pathname.startsWith('/recursos/voces/')) return '¿Te identificas con esta historia? Escribinos';
  if (pathname.startsWith('/recursos/')) return '¿Quieres hablarlo con alguien? Estamos aquí';
  if (pathname.includes('-mar-del-plata')) return '¿Esto describe lo que estás viviendo? Hablemos';

  return 'Escribinos por WhatsApp';
};

export default function Layout({ children }: { children?: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [logoError, setLogoError] = useState(false);
  const location = useLocation();
  const [isWhatsAppExpanded, setIsWhatsAppExpanded] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsMenuOpen(false);
    setIsDropdownOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  useEffect(() => {
    setIsWhatsAppExpanded(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      if (isWhatsAppExpanded) return;

      if (location.pathname === '/') {
        const servicesSection = document.getElementById('services-section');
        if (servicesSection) {
          const rect = servicesSection.getBoundingClientRect();
          if (rect.bottom <= window.innerHeight) {
            setIsWhatsAppExpanded(true);
          }
        } else {
          if (window.scrollY > 600) {
            setIsWhatsAppExpanded(true);
          }
        }
      } else {
        if (window.scrollY > 600) {
          setIsWhatsAppExpanded(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [location.pathname, isWhatsAppExpanded]);

  const desktopNavLinks = [
    { name: 'Inicio', path: '/' },
    { name: 'Adicciones', path: '/adicciones-mar-del-plata' },
    { name: 'Psicología', path: '/psicologo-mar-del-plata' },
    { name: 'Terapia', path: '/terapia-mar-del-plata' },
  ];

  const elFaroSublinks = [
    { name: 'Nuestros orígenes', path: '/asociacion' },
    { name: 'Historia', path: '/historia' },
    { name: 'Quiénes lo hacemos', path: '/quienes-lo-hacemos' },
  ];

  const mobileServiceLinks = [
    { name: 'Adicciones', path: '/adicciones-mar-del-plata' },
    { name: 'Psicología', path: '/psicologo-mar-del-plata' },
    { name: 'Terapia', path: '/terapia-mar-del-plata' },
    { name: 'Cómo pedir ayuda', path: '/como-pedir-ayuda-psicologia-mar-del-plata' },
  ];

  const mobileInstitutionalLinks = [
    { name: 'Nuestros orígenes', path: '/asociacion' },
    { name: 'Historia', path: '/historia' },
    { name: 'Quiénes lo hacemos', path: '/quienes-lo-hacemos' },
  ];

  const isElFaroActive = elFaroSublinks.some((link) => location.pathname === link.path);

  return (
    <div className="min-h-screen flex flex-col bg-faro-bg text-faro-ink font-sans">
      <Head>
        <link rel="preconnect" href="https://res.cloudinary.com" />
        <link rel="dns-prefetch" href="https://res.cloudinary.com" />
      </Head>
      {/* SVG Filters for Logo Colorization */}
      <svg width="0" height="0" className="absolute hidden">
        <filter id="extract-logo">
          <feColorMatrix type="matrix" values="
            0 0 0 0 0.964
            0 0 0 0 0.949
            0 0 0 0 0.917
            -1 -1 -1 0 2.6" />
        </filter>
      </svg>

      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-faro-bg-alt/80 backdrop-blur-md border-b border-faro-olive/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 lg:gap-12">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 sm:gap-4 group shrink-0 lg:mr-8">
              {!logoError ? (
                <img 
                  src="https://res.cloudinary.com/dwv5ehc6e/image/upload/f_auto,q_auto/v1779830147/mifaro/IMG-0990_mgVHpGR8.jpg" 
                  alt="Logo El Faro Argentina" 
                  className="h-11 sm:h-12 lg:h-14 w-auto object-contain [clip-path:inset(2px)]"
                  style={{ filter: 'url(#extract-logo)' }}
                  onError={() => setLogoError(true)}
                />
              ) : (
                <div className="w-11 h-11 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-full bg-faro-gold flex items-center justify-center text-faro-bg">
                  <Anchor size={24} className="fill-current" />
                </div>
              )}
              <div className="flex flex-col text-left">
                <span className="font-sans text-[18px] sm:text-[20px] lg:text-[22px] font-semibold tracking-tight text-faro-ink leading-tight">
                  EL FARO
                </span>
                <span className="font-sans text-[10px] sm:text-[11px] lg:text-[12px] font-normal tracking-wide text-faro-ink/75 leading-none mt-0.5">
                  Argentina
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center ml-auto gap-3 xl:gap-6">
              <a 
                href="tel:+542234921953" 
                onClick={() => trackPhoneClick('header', '+542234921953')}
                className="flex items-center gap-2 text-faro-ink hover:text-faro-gold transition-colors group mr-2 xl:mr-4 shrink-0 whitespace-nowrap"
              >
                <Phone size={16} className="text-faro-gold group-hover:scale-110 transition-transform" />
                <span className="text-xs xl:text-sm font-medium tracking-wide">+54 223 4921953</span>
              </a>
              {desktopNavLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-xs xl:text-sm tracking-wide uppercase transition-colors whitespace-nowrap ${
                    location.pathname === link.path
                      ? 'text-faro-gold font-medium'
                      : 'text-faro-ink/80 hover:text-faro-gold'
                  }`}
                >
                  {link.name}
                </Link>
              ))}

              {/* Dropdown EL FARO */}
              <div 
                ref={dropdownRef} 
                className="relative"
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}
              >
                <button
                  type="button"
                  onClick={() => setIsDropdownOpen((prev) => !prev)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setIsDropdownOpen((prev) => !prev);
                    }
                  }}
                  aria-expanded={isDropdownOpen}
                  aria-haspopup="true"
                  className={`text-xs xl:text-sm tracking-wide uppercase transition-colors whitespace-nowrap flex items-center gap-1 cursor-pointer py-2 ${
                    isElFaroActive
                      ? 'text-faro-gold font-medium'
                      : 'text-faro-ink/80 hover:text-faro-gold'
                  }`}
                >
                  <span>EL FARO</span>
                  <ChevronDown 
                    size={14} 
                    className={`transition-transform duration-200 ${isDropdownOpen ? 'rotate-180 text-faro-gold' : ''}`} 
                  />
                </button>

                <AnimatePresence>
                  {isDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 6 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-full left-1/2 -translate-x-1/2 w-52 py-2 rounded-2xl bg-faro-bg-alt/95 backdrop-blur-md border border-faro-olive/40 shadow-xl z-50"
                    >
                      {elFaroSublinks.map((sublink) => (
                        <Link
                          key={sublink.path}
                          to={sublink.path}
                          onClick={() => setIsDropdownOpen(false)}
                          className={`block px-4 py-2 text-xs xl:text-sm font-sans tracking-wide transition-colors ${
                            location.pathname === sublink.path
                              ? 'text-faro-gold font-semibold bg-faro-olive/20'
                              : 'text-faro-ink/85 hover:text-faro-gold hover:bg-faro-olive/15'
                          }`}
                        >
                          {sublink.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link
                to="/contacto"
                className="bg-faro-gold text-faro-bg px-5 xl:px-6 py-2 xl:py-2.5 rounded-full text-xs xl:text-sm tracking-wide font-semibold uppercase hover:bg-faro-gold/90 transition-colors whitespace-nowrap shadow-md ml-1"
              >
                HABLEMOS
              </Link>
            </nav>

            {/* Mobile/Tablet Menu Button */}
            <button
              className="lg:hidden p-2 text-faro-ink"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
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
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-faro-bg-alt/95 backdrop-blur-md pt-24 pb-8 px-6 lg:hidden border-b border-faro-olive/30 flex flex-col items-center overflow-y-auto"
          >
            <nav className="flex flex-col gap-4 items-center w-full max-w-sm my-auto">
              <a 
                href="tel:+542234921953" 
                onClick={() => trackPhoneClick('header_mobile', '+542234921953')}
                className="flex items-center gap-2.5 text-faro-ink hover:text-faro-gold transition-colors py-1 mb-2"
              >
                <Phone size={18} className="text-faro-gold" />
                <span className="text-lg font-medium tracking-wide">+54 223 4921953</span>
              </a>

              {/* Grupo 1: Servicios */}
              <div className="flex flex-col gap-3 items-center w-full">
                {mobileServiceLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`text-xl font-serif tracking-wide transition-colors ${
                      location.pathname === link.path ? 'text-faro-gold font-medium' : 'text-faro-ink'
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>

              {/* Separación visual */}
              <div className="w-16 h-px bg-faro-olive/40 my-1" />

              {/* Grupo 2: Institucional */}
              <div className="flex flex-col gap-2.5 items-center w-full">
                {mobileInstitutionalLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`text-base font-serif tracking-wide transition-colors ${
                      location.pathname === link.path ? 'text-faro-gold font-medium' : 'text-faro-ink/80'
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>

              {/* Separación visual */}
              <div className="w-16 h-px bg-faro-olive/40 my-1" />

              {/* Botón HABLEMOS */}
              <Link
                to="/contacto"
                className="w-full text-center bg-faro-gold text-faro-bg font-semibold px-8 py-3 rounded-full text-sm tracking-wide uppercase hover:bg-faro-gold/90 transition-colors shadow-md mt-2"
              >
                HABLEMOS
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="flex-grow pt-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {children || <Outlet />}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Floating Contact System */}
      <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex flex-col gap-3 sm:gap-4 items-end scale-90 sm:scale-100 origin-bottom-right">
        {/* WhatsApp */}
        <a
          href="https://wa.me/5492235923790"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackWhatsAppClick('floating_button', 'https://wa.me/5492235923790')}
          className={`bg-[#25D366] text-white h-14 rounded-full shadow-lg hover:scale-105 motion-safe:transition-all duration-500 ease-out flex items-center overflow-hidden whitespace-nowrap select-none ${
            isWhatsAppExpanded ? 'max-w-[450px] px-4 gap-2.5' : 'max-w-[56px] w-14 justify-center px-0'
          }`}
          aria-label={`Abrir conversación por WhatsApp con El Faro Argentina: ${getWhatsAppText(location.pathname)}. Se abre en una nueva pestaña.`}
        >
          <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" className="shrink-0">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
          </svg>
          <span
            className={`text-[13px] sm:text-sm font-medium tracking-wide motion-safe:transition-all duration-500 ease-out overflow-hidden ${
              isWhatsAppExpanded ? 'opacity-100 max-w-sm' : 'opacity-0 max-w-0'
            }`}
          >
            {getWhatsAppText(location.pathname)}
          </span>
        </a>

        {/* Contact Form */}
        <Link
          to="/contacto"
          className="bg-faro-gold text-faro-bg w-14 h-14 rounded-full shadow-lg hover:bg-faro-gold/90 hover:scale-105 transition-all duration-300 flex items-center justify-center group font-bold"
          aria-label="Formulario de contacto"
        >
          <MessageSquare size={24} />
        </Link>
      </div>

      {/* Footer */}
      <footer className="bg-faro-bg-alt pt-16 pb-8 border-t border-faro-olive/30 text-faro-ink">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
            
            {/* Col 1: Institutional Phrase */}
            <div className="lg:col-span-1">
              <Link to="/" className="flex items-center gap-2 mb-4 group">
                {!logoError ? (
                  <img 
                    src="https://res.cloudinary.com/dwv5ehc6e/image/upload/f_auto,q_auto/v1779830147/mifaro/IMG-0990_mgVHpGR8.jpg" 
                    alt="Logo El Faro Argentina" 
                    className="h-6 w-auto object-contain [clip-path:inset(2px)]"
                    style={{ filter: 'url(#extract-logo)' }}
                    onError={() => setLogoError(true)}
                  />
                ) : (
                  <div className="w-8 h-8 rounded-full bg-faro-gold flex items-center justify-center text-faro-bg">
                    <Anchor size={16} className="fill-current" />
                  </div>
                )}
                <span className="font-sans text-xl font-semibold tracking-tight text-faro-ink">El Faro Argentina</span>
              </Link>
              <p className="text-xs text-faro-ink/75 font-light leading-relaxed pr-4">
                El Faro abre sus puertas en 1993 en Mar del Plata como modelo humanista no-residencial centrado en la persona y el vínculo.
              </p>
            </div>

            {/* Col 2: Contacto */}
            <div className="lg:col-span-1">
              <h2 className="text-xs font-semibold tracking-widest uppercase text-faro-gold mb-4">Contacto Mar del Plata</h2>
              <ul className="space-y-3 text-xs text-faro-ink/75 font-light">
                <li>
                  <span className="block text-faro-ink font-medium mb-1">Dirección</span>
                  <p>Garay 2073, Mar del Plata, Argentina</p>
                </li>
                <li>
                  <span className="block text-faro-ink font-medium mb-1">Teléfonos</span>
                  <a 
                    href="tel:+542234921953" 
                    onClick={() => trackPhoneClick('footer', '+542234921953')}
                    className="hover:text-faro-gold transition-colors block"
                  >
                    Fijo: +54 223 4921953
                  </a>
                  <a 
                    href="https://wa.me/5492235923790" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    onClick={() => trackWhatsAppClick('footer', 'https://wa.me/5492235923790')}
                    className="hover:text-faro-gold transition-colors block mt-1"
                  >
                    WhatsApp: +54 9 223 592 3790
                  </a>
                </li>
              </ul>
            </div>

            {/* Col 3: Navegación Institucional */}
            <div className="lg:col-span-1">
              <h2 className="text-xs font-semibold tracking-widest uppercase text-faro-gold mb-4">Navegación</h2>
              <ul className="space-y-2 text-xs text-faro-ink/75 font-light">
                <li><Link to="/" className="hover:text-faro-gold transition-colors">Inicio</Link></li>
                <li><Link to="/asociacion" className="hover:text-faro-gold transition-colors">Nuestros Orígenes</Link></li>
                <li><Link to="/historia" className="hover:text-faro-gold transition-colors">Nuestra Historia</Link></li>
                <li><Link to="/quienes-lo-hacemos" className="hover:text-faro-gold transition-colors">Quiénes lo hacemos</Link></li>
                <li><Link to="/adicciones-mar-del-plata" className="hover:text-faro-gold transition-colors">Adicciones y consumos</Link></li>
                <li><Link to="/psicologo-mar-del-plata" className="hover:text-faro-gold transition-colors">Psicoterapia individual y grupal</Link></li>
                <li><Link to="/terapia-mar-del-plata" className="hover:text-faro-gold transition-colors">Terapia familiar y de pareja</Link></li>
                <li><Link to="/como-pedir-ayuda-psicologia-mar-del-plata" className="hover:text-faro-gold transition-colors">Cómo pedir ayuda</Link></li>
                <li><Link to="/contacto" className="hover:text-faro-gold transition-colors">Contacto</Link></li>
              </ul>
            </div>

          </div>

          <div className="pt-8 border-t border-faro-olive/30 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-faro-ink/60 uppercase tracking-widest">
            <div>
              &copy; {new Date().getFullYear()} El Faro Argentina. Todos los derechos reservados.
            </div>
            <div className="flex gap-4">
              <Link to="/aviso-legal" className="hover:text-faro-gold transition-colors">Aviso legal</Link>
              <Link to="/privacidad" className="hover:text-faro-gold transition-colors">Privacidad</Link>
              <Link to="/cookies" className="hover:text-faro-gold transition-colors">Cookies</Link>
            </div>
          </div>
        </div>
      </footer>
      <CookieBanner />
    </div>
  );
}
