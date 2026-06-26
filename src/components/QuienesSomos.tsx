import { ShieldCheck, Coffee, PhoneCall } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { fadeUp, staggerContainer, viewportConfig } from '../utils/animations';
import { CONTACT } from '../data/contact';

export default function QuienesSomos() {
  const team = [
    { 
      name: 'Alejandro García', 
      level: 1,
      role: 'Psicología Social',
      area: 'Intervención psicosocial, desarrollo humano y adicciones.',
      location: (
        <>
          MIFARO / ELFARO
          <span className="block mt-1">Valencia / Mar del Plata</span>
        </>
      ), 
      quote: '"Más de 30 años acompañando procesos vinculados a las adicciones y al malestar emocional. Formación en Italia, Francia y Países Bajos."', 
      img: 'https://i.postimg.cc/LswM4gxq/file_000000009108720a82938bdcbe45a897_2.jpg', 
      imagePosition: 'object-top',
      isNexo: true,
      size: 'w-56 h-56 md:w-64 md:h-64'
    },
    { 
      name: 'Dra. Amparo Pons Ferrer', 
      level: 1,
      role: 'Coordinación interinstitucional',
      area: 'Intervención psicosocial y articulación profesional',
      location: 'Barcelona', 
      quote: (
        <>
          «Donde reina el amor, no hay voluntad de poder; y donde predomina el poder, falta el amor.»
          <span className="block mt-2 text-[10px] opacity-80 not-italic tracking-widest uppercase">- C. G. Jung</span>
        </>
      ), 
      img: 'https://i.postimg.cc/zXv7TrzN/Psicologa_Barcelona.png', 
      imagePosition: 'object-center',
      isNexo: true,
      size: 'w-56 h-56 md:w-64 md:h-64'
    },
    { 
      name: 'Dr. Alejandro Loreti', 
      level: 2,
      role: 'Médico', 
      area: 'Medicina General y de Familia',
      location: 'EL FARO ARGENTINA', 
      quote: '«Donde existe una necesidad nace un derecho.»', 
      img: 'https://i.postimg.cc/g0QPcLgL/Alejandro_Loreti.png', 
      size: 'w-48 h-48 md:w-56 md:h-56'
    },
    { 
      name: 'Arantza Gómez Badiola', 
      level: 2,
      role: 'Psicóloga', 
      area: 'Psicoterapia y salud mental',
      location: 'Mi Faro - Madrid', 
      quote: '«La alegría que no depende de que ocurra algo especial, sino de reconocer lo especial que es que todo esté ocurriendo.»', 
      img: 'https://i.postimg.cc/NMC80RXt/Arantza.jpg', 
      imagePosition: 'object-top',
      size: 'w-48 h-48 md:w-56 md:h-56'
    },
    { 
      name: 'Sere Casañ Guzmán', 
      level: 2,
      role: 'Psicóloga', 
      area: 'Intervención con adultos y psicología social',
      location: 'VALENCIA', 
      quote: 'Graduada en Psicología por la Universitat de València, con especialización en Psicología social', 
      img: 'https://i.postimg.cc/25MfjL0B/Psicologa_valencia.jpg', 
      imagePosition: 'object-center',
      size: 'w-48 h-48 md:w-56 md:h-56'
    },
    { 
      name: 'Marta Pinillos Arpón', 
      level: 2,
      role: 'Psicóloga', 
      area: 'Psicoterapia y acompañamiento',
      location: 'MI FARO · BARCELONA', 
      quote: '«La curiosa paradoja es que cuando me acepto tal como soy, entonces puedo cambiar.» - Rogers', 
      img: 'https://i.postimg.cc/ZnsqGQM4/Psicologa-de-barcelona.png', 
      imagePosition: 'object-center',
      size: 'w-48 h-48 md:w-56 md:h-56'
    },
    { 
      name: 'Natalia Campos', 
      level: 3,
      role: 'Operadora social', 
      area: 'Consumo problemático y vulnerabilidad social',
      location: 'EL FARO ARGENTINA', 
      quote: '«Acompañar desde la cercanía y el compromiso para transformar realidades.»', 
      img: 'https://i.postimg.cc/pr0fpznN/Natalia_Campos.jpg', 
      imagePosition: 'object-center',
      size: 'w-44 h-44 md:w-52 md:h-52'
    },
    { 
      name: 'Julia Valla', 
      level: 3,
      role: 'Psicóloga', 
      area: 'Psicoterapia y orientación psicológica',
      location: 'Madrid · MI FARO', 
      quote: '«Acompañar la apuesta por el deseo propio a través de una escucha que no juzga, sino que aloja»', 
      img: 'https://i.postimg.cc/HxbVpLSq/Julia_Psicóloga_sanitaria.jpg', 
      imagePosition: 'object-center',
      size: 'w-48 h-48 md:w-56 md:h-56'
    },
    { 
      name: 'Lorena Gandara', 
      level: 3,
      role: 'Dirección Terapéutica', 
      area: 'Lic. en Psicología',
      location: 'EL FARO ARGENTINA', 
      quote: '«Cuida tu presente porque en él vivirás toda tu vida.»', 
      img: 'https://i.postimg.cc/sX5vV2nb/Lorena_Gandara.jpg', 
      imagePosition: 'object-center',
      size: 'w-48 h-48 md:w-56 md:h-56'
    },
    { 
      name: 'Marcelo Kloberdanz', 
      level: 3,
      role: 'Psicólogo Social', 
      area: 'Intervención grupal y comunitaria',
      location: 'EL FARO ARGENTINA', 
      quote: '«En tiempos de incertidumbre y desesperanza, aprender a caminar con otro puede volverse imprescindible.»', 
      img: 'https://i.postimg.cc/tCPhmXt3/Marcelo_k.jpg', 
      imagePosition: '[object-position:60%_25%]',
      size: 'w-48 h-48 md:w-56 md:h-56'
    },
    { 
      name: 'Florencia Cazenave', 
      level: 3,
      role: 'Psicóloga Social', 
      area: 'Acompañamiento y procesos subjetivos',
      location: 'EL FARO ARGENTINA', 
      quote: '«Pedir ayuda no te hace débil, te devuelve la posibilidad de elegir.»', 
      img: 'https://i.postimg.cc/bw1Z51NQ/Flor.jpg', 
      imagePosition: 'object-center',
      size: 'w-44 h-44 md:w-52 md:h-52'
    },
    { 
      name: 'Sabrina Belén Braggio', 
      level: 3,
      role: 'Trabajadora Social', 
      area: 'Compromiso social y escucha profesional',
      location: 'ARGENTINA / MAR DEL PLATA', 
      quote: '«Acompañando procesos desde el compromiso social y la escucha profesional.»', 
      img: 'https://i.postimg.cc/281RHgkh/Trabajadora-social.jpg', 
      imagePosition: 'object-center',
      size: 'w-44 h-44 md:w-52 md:h-52'
    },
    { 
      name: 'Ana Sosa', 
      level: 3,
      role: 'Lic. en Psicología', 
      area: 'Intervenciones familiares e individuales',
      location: 'Mar del Plata / Argentina', 
      quote: '', 
      img: 'https://i.postimg.cc/fbDW2Xz3/Psicologo-Mar-del-Plata.jpg', 
      imagePosition: 'object-center',
      size: 'w-48 h-48 md:w-56 md:h-56'
    },
  ];

  const renderTeamMember = (person: any, index: number) => (
    <motion.div 
      key={index}
      variants={fadeUp}
      className="flex flex-col items-center text-center px-4"
    >
      <div className={`${person.size} rounded-full overflow-hidden mb-6 shadow-xl border-8 group relative transition-transform duration-500 hover:scale-105`} style={{ borderColor: 'rgba(255,255,255,0.3)', background: 'var(--crema)' }}>
        <img 
          src={person.img} 
          alt={person.name} 
          className={`w-full h-full object-cover sepia-[.10] contrast-[0.95] saturate-[0.90] transition-all duration-700 group-hover:scale-110 ${person.imagePosition || ''}`}
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: 'var(--azul-suave)' }} />
      </div>
      
      <div className="max-w-[280px]">
        <h3 className={`${person.isNexo ? 'text-2xl md:text-3xl' : 'text-xl md:text-2xl'} mb-1 leading-tight`} style={{ fontFamily: 'var(--serif)', color: 'var(--texto)' }}>
          {person.name}
        </h3>
        <p className="text-[10px] md:text-xs font-semibold tracking-widest uppercase mb-1 leading-tight" style={{ color: 'var(--azul-cielo)' }}>
          {person.role}
        </p>
        {person.area && (
          <p className="text-[9px] md:text-[10px] font-medium tracking-wide mb-2 leading-tight" style={{ color: 'rgba(26,26,26,0.8)' }}>
            {person.area}
          </p>
        )}
        {person.location && (
          <p className="text-[9px] md:text-[10px] tracking-widest uppercase mb-4 opacity-70" style={{ color: 'var(--texto-suave)' }}>
            {person.location}
          </p>
        )}
        {person.quote && (
          <div className="font-light italic text-[11px] leading-relaxed mt-4 border-t pt-4 opacity-80" style={{ color: 'var(--texto-suave)', borderColor: 'rgba(61,106,158,0.1)' }}>
            {person.quote}
          </div>
        )}
      </div>
    </motion.div>
  );

  return (
    <div style={{ background: 'var(--crema)' }} className="min-h-screen">
      <Helmet>
        <title>Quiénes lo hacemos | El equipo de El Faro · Mar del Plata</title>
        <meta name="description" content="Conocé al equipo de El Faro: psicólogos, trabajadores sociales y profesionales con trayectoria en salud mental y adicciones en Mar del Plata." />
        <link rel="canonical" href="https://programaelfaro.com.ar/quienes-lo-hacemos" />
        <meta property="og:title" content="Quiénes lo hacemos | El equipo de El Faro · Mar del Plata" />
        <meta property="og:description" content="Conocé al equipo de El Faro: psicólogos, trabajadores sociales y profesionales con más de 30 años de experiencia." />
        <meta property="og:image" content="https://i.postimg.cc/LswM4gxq/file_000000009108720a82938bdcbe45a897_2.jpg" />
        <meta property="og:url" content="https://programaelfaro.com.ar/quienes-lo-hacemos" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Quiénes lo hacemos | El Faro" />
        <meta name="twitter:description" content="Conocé al equipo de El Faro: psicólogos, trabajadores sociales y profesionales con más de 30 años de experiencia." />
        <meta name="twitter:image" content="https://i.postimg.cc/LswM4gxq/file_000000009108720a82938bdcbe45a897_2.jpg" />
      </Helmet>
      {/* Hero */}
      <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 overflow-hidden flex items-center min-h-[85vh]" style={{ background: 'var(--azul-suave)' }}>
        {/* Fondo con imagen integrada */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://i.postimg.cc/4y3SZLG2/Quienes-somos.jpg" 
            alt="" 
            className="w-full h-full object-cover opacity-50 mix-blend-multiply grayscale-[0.1]"
            referrerPolicy="no-referrer"
          />
          {/* Overlay gradiente para legibilidad */}
          <div className="absolute inset-0 bg-gradient-to-b from-sand-light/30 via-sand-light/60 to-offwhite" style={{ background: 'linear-gradient(to bottom, rgba(26, 47, 74, 0.3), rgba(26, 47, 74, 0.6), #faf7f2)' }} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 font-medium tracking-wide uppercase text-sm mb-6 px-4 py-2 rounded-full" style={{ color: 'var(--azul-cielo)', background: 'var(--azul-suave)' }}>
              <ShieldCheck size={16} />
              Quienes hacen posible este camino
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl mb-8 leading-tight" style={{ fontFamily: 'var(--serif)', color: 'var(--azul-noche)' }}>
              Lo hacemos <span style={{ fontStyle: 'italic', color: 'var(--azul-cielo)' }}>posible</span>
            </h1>
            <h2 className="text-2xl md:text-3xl mb-8" style={{ fontFamily: 'var(--serif)', color: 'var(--texto-suave)' }}>
              Equipo interdisciplinar con trayectoria entre España y Argentina
            </h2>
            <p className="text-xl md:text-2xl font-light leading-relaxed mb-8" style={{ color: 'var(--texto)' }}>
              El Faro se sostiene en un equipo interdisciplinar y en una red de trayectorias profesionales que articulan experiencia, criterio y acompañamiento entre España y Argentina.
            </p>
            <p className="text-lg font-light leading-relaxed max-w-3xl mb-10" style={{ color: 'var(--texto-suave)' }}>
              Nuestro proyecto se nutre de la escucha, del intercambio y del pensamiento compartido. Las reuniones conjuntas permiten que el trabajo se enriquezca a través del diálogo entre equipos, la circulación de experiencias y la puesta en común de recursos profesionales. De ese intercambio entre profesionales del ámbito psicológico, médico y social nace una forma de acompañar que integra distintas miradas, trayectorias y experiencias en el trabajo con personas, familias y vínculos.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Link
                to="/contacto"
                className="px-8 py-4 rounded-full text-sm font-medium tracking-wide uppercase hover:bg-olive-light transition-colors inline-flex items-center justify-center gap-2 shadow-md"
                style={{ background: 'var(--azul-noche)', color: 'var(--blanco)' }}
              >
                Solicitar orientación
              </Link>
              <Link
                to="/contacto"
                className="bg-white/10 backdrop-blur-sm border px-8 py-4 rounded-full text-sm font-medium tracking-wide uppercase hover:bg-white/20 transition-colors inline-flex items-center justify-center gap-2 shadow-sm"
                style={{ background: 'var(--azul-suave)', color: 'var(--azul-cielo)', borderColor: 'rgba(61,106,158,0.3)' }}
              >
                <Coffee size={16} />
                Tomar un café y charlar
              </Link>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              <a 
                href={CONTACT.phoneARHref} 
                className="inline-flex items-center gap-3 hover:text-olive transition-colors group"
                style={{ color: 'var(--texto)' }}
              >
                <PhoneCall size={20} className="group-hover:scale-110 transition-transform" style={{ color: 'var(--azul-cielo)' }} />
                <span className="text-lg md:text-xl font-medium tracking-wider">{CONTACT.phoneAR}</span>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Red Orgánica de Equipo */}
      <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative overflow-hidden lg:overflow-visible">
        {/* Líneas sutiles de conexión de fondo (Constelación) */}
        <div className="absolute inset-0 pointer-events-none hidden lg:block opacity-30">
          <svg width="100%" height="100%" viewBox="0 0 1200 1200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <motion.path 
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 2, delay: 0.5 }}
              d="M 150 150 L 450 250 L 750 100 L 1050 250" 
              stroke="#C06C55" strokeWidth="0.5" strokeDasharray="4 4" 
            />
            <motion.path 
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 2, delay: 0.7 }}
              d="M 250 450 L 550 550 L 850 400 L 1050 550" 
              stroke="#C06C55" strokeWidth="0.5" strokeDasharray="4 4" 
            />
            <motion.path 
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 2, delay: 0.9 }}
              d="M 150 850 L 450 950 L 750 800 L 1050 950" 
              stroke="#C06C55" strokeWidth="0.5" strokeDasharray="4 4" 
            />
            {/* Conexiones transversales más densas */}
            <motion.path 
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 2, delay: 1.1 }}
              d="M 450 250 L 550 550 M 750 100 L 850 400 M 550 550 L 450 950 M 850 400 L 750 800" 
              stroke="#C06C55" strokeWidth="0.5" strokeDasharray="4 4" 
            />
          </svg>
        </div>

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="relative z-10 space-y-24 lg:space-y-32"
        >
          {/* Nivel 1: Fundadores */}
          <div className="flex flex-col md:flex-row justify-center gap-16 md:gap-24 lg:gap-32">
            {team.filter(p => p.level === 1).map((person, index) => renderTeamMember(person, index))}
          </div>

          {/* Nivel 2: Equipo Intermedio */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 max-w-6xl mx-auto">
            {team.filter(p => p.level === 2).map((person, index) => renderTeamMember(person, index))}
          </div>

          {/* Nivel 3: Resto del Equipo */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16 max-w-5xl mx-auto">
            {team.filter(p => p.level === 3).map((person, index) => renderTeamMember(person, index))}
          </div>
        </motion.div>
      </section>

      {/* Cierre */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 text-center max-w-4xl mx-auto">
        <div className="w-12 h-px mx-auto mb-10" style={{ background: 'var(--azul-noche)' }} />
        <p className="text-2xl md:text-3xl leading-relaxed" style={{ fontFamily: 'var(--serif)', color: 'var(--texto)' }}>
          Y junto a ellos, <span style={{ fontStyle: 'italic', color: 'var(--azul-cielo)' }}>una red más amplia de colegas, colaboradores y personas</span> que acompañan la continuidad cotidiana del proyecto.
        </p>
        <div className="mt-12 flex flex-wrap justify-center gap-6">
          <Link to="/historia" className="hover:underline font-medium" style={{ color: 'var(--azul-cielo)' }}>Nuestra historia</Link>
          <Link to="/contacto" className="hover:underline font-medium" style={{ color: 'var(--azul-cielo)' }}>Contacto</Link>
        </div>
        <div className="w-12 h-px mx-auto mt-10" style={{ background: 'var(--azul-noche)' }} />
        <p className="text-[9px] md:text-[10px] font-light max-w-2xl mx-auto leading-relaxed mt-16 pb-8" style={{ color: 'var(--texto-suave)', opacity: 0.4 }}>
          * El Faro cuenta con profesionales del ámbito de la salud mental, la medicina, la intervención social y el acompañamiento terapéutico. Las titulaciones, habilitaciones y datos profesionales correspondientes se encuentran disponibles para consulta cuando sea necesario. La participación de cada profesional se enmarca en su país, titulación y ámbito de actuación.
        </p>
      </section>

      {/* Footer Spacer */}
      <div className="h-12" />
    </div>
  );
}
