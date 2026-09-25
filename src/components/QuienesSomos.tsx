import { ShieldCheck, Coffee, PhoneCall, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Head } from 'vite-react-ssg';
import { trackWhatsAppClick, trackPhoneClick } from '../utils/telemetry';
import { fadeUp, staggerContainer, viewportConfig } from '../utils/animations';
import JsonLd from './JsonLd';

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
      img: 'https://res.cloudinary.com/dwv5ehc6e/image/upload/f_auto,q_auto/v1779830091/mifaro/file_000000009108720a82938bdcbe45a897_2_LswM4gxq.jpg', 
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
      img: 'https://res.cloudinary.com/dwv5ehc6e/image/upload/f_auto,q_auto/v1779830180/mifaro/Psicologa_Barcelona_zXv7TrzN.png', 
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
      img: 'https://res.cloudinary.com/dwv5ehc6e/image/upload/f_auto,q_auto/v1779830130/mifaro/Alejandro_Loreti_g0QPcLgL.png', 
      size: 'w-48 h-48 md:w-56 md:h-56'
    },
    { 
      name: 'Arantza Gómez Badiola', 
      level: 2,
      role: 'Psicóloga', 
      area: 'Psicoterapia y salud mental',
      location: 'Mi Faro - Madrid', 
      quote: '«La alegría que no depende de que ocurra algo especial, sino de reconocer lo especial que es que todo esté ocurriendo.»', 
      img: 'https://res.cloudinary.com/dwv5ehc6e/image/upload/f_auto,q_auto/v1779830093/mifaro/Arantza_NMC80RXt.jpg', 
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
      img: 'https://res.cloudinary.com/dwv5ehc6e/image/upload/f_auto,q_auto/v1779830056/mifaro/Psicologa_valencia_25MfjL0B.jpg', 
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
      img: 'https://res.cloudinary.com/dwv5ehc6e/image/upload/f_auto,q_auto/v1779830118/mifaro/Psicologa-de-barcelona_ZnsqGQM4.png', 
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
      img: 'https://res.cloudinary.com/dwv5ehc6e/image/upload/f_auto,q_auto/v1779830152/mifaro/Natalia_Campos_pr0fpznN.jpg', 
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
      img: 'https://res.cloudinary.com/dwv5ehc6e/image/upload/f_auto,q_auto/v1779830084/mifaro/Julia_Psicologa_sanitaria_HxbVpLSq.jpg', 
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
      img: 'https://res.cloudinary.com/dwv5ehc6e/image/upload/f_auto,q_auto/v1779830163/mifaro/Lorena_Gandara_sX5vV2nb.jpg', 
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
      img: 'https://res.cloudinary.com/dwv5ehc6e/image/upload/f_auto,q_auto/v1779830166/mifaro/Marcelo_k_tCPhmXt3.jpg', 
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
      img: 'https://res.cloudinary.com/dwv5ehc6e/image/upload/f_auto,q_auto/v1779830123/mifaro/Flor_bw1Z51NQ.jpg', 
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
      img: 'https://res.cloudinary.com/dwv5ehc6e/image/upload/f_auto,q_auto/v1779830058/mifaro/Trabajadora-social_281RHgkh.jpg', 
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
      img: 'https://res.cloudinary.com/dwv5ehc6e/image/upload/f_auto,q_auto/v1779830127/mifaro/Psicologo-Mar-del-Plata_fbDW2Xz3.jpg', 
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
      <div className={`${person.size} rounded-full overflow-hidden mb-6 shadow-xl border-8 border-offwhite/30 bg-offwhite group relative transition-transform duration-500 hover:scale-105`}>
        <img 
          src={person.img} 
          alt={person.name} 
          className={`w-full h-full object-cover sepia-[.10] contrast-[0.95] saturate-[0.90] transition-all duration-700 group-hover:scale-110 ${person.imagePosition || ''}`}
          referrerPolicy="no-referrer"
          loading="lazy"
          decoding="async"
        />
        <div className="absolute inset-0 bg-olive/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
      
      <div className="max-w-[280px]">
        <h3 className={`${person.isNexo ? 'text-2xl md:text-3xl' : 'text-xl md:text-2xl'} font-serif text-ink mb-1 leading-tight`}>
          {person.name}
        </h3>
        <p className="text-[10px] md:text-xs font-semibold tracking-widest uppercase text-olive mb-1 leading-tight">
          {person.role}
        </p>
        {person.area && (
          <p className="text-[9px] md:text-[10px] font-medium tracking-wide text-ink/80 mb-2 leading-tight">
            {person.area}
          </p>
        )}
        {person.location && (
          <p className="text-[9px] md:text-[10px] text-ink-light tracking-widest uppercase mb-4 opacity-70">
            {person.location}
          </p>
        )}
        {person.quote && (
          <div className="text-ink-light font-light italic text-[11px] leading-relaxed mt-4 border-t border-olive/10 pt-4 opacity-80">
            {person.quote}
          </div>
        )}
      </div>
    </motion.div>
  );

  return (
    <div className="bg-sand-light min-h-screen">
      <Head>
        <title>Quiénes lo hacemos | El Faro Argentina</title>
        <meta name="description" content="Conocé al equipo y la red profesional de El Faro Argentina. Más de 30 años de trabajo en salud mental, adicciones, vínculos y familias." />
        <link rel="canonical" href="https://programaelfaro.com.ar/quienes-lo-hacemos" />
        <meta property="og:title" content="Quiénes lo hacemos | El Faro Argentina" />
        <meta property="og:description" content="Conocé al equipo y la red profesional de El Faro Argentina. Más de 30 años de trabajo en salud mental, adicciones, vínculos y familias." />
        <meta property="og:image" content="https://res.cloudinary.com/dwv5ehc6e/image/upload/f_auto,q_auto/v1779830091/mifaro/file_000000009108720a82938bdcbe45a897_2_LswM4gxq.jpg" />
        <meta property="og:url" content="https://programaelfaro.com.ar/quienes-lo-hacemos" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Quiénes lo hacemos | El Faro Argentina" />
        <meta name="twitter:description" content="Conocé al equipo y la red profesional de El Faro Argentina. Más de 30 años de trabajo en salud mental, adicciones, vínculos y familias." />
        <meta name="twitter:image" content="https://res.cloudinary.com/dwv5ehc6e/image/upload/f_auto,q_auto/v1779830091/mifaro/file_000000009108720a82938bdcbe45a897_2_LswM4gxq.jpg" />
      </Head>

      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "AboutPage",
        "name": "Quiénes lo hacemos · El Faro Argentina",
        "description": "Equipo interdisciplinario y red profesional de El Faro Argentina en salud mental, adicciones y vínculos.",
        "url": "https://programaelfaro.com.ar/quienes-lo-hacemos",
        "mainEntity": {
          "@type": "Organization",
          "name": "El Faro Argentina",
          "legalName": "Asociación Civil Arco Baleno",
          "taxID": "30-68558066-3",
          "url": "https://programaelfaro.com.ar/"
        }
      }} />

      {/* Hero */}
      <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 lg:pt-48 lg:pb-32 overflow-hidden lg:flex lg:items-center lg:min-h-[85vh] isolate">
        {/* Fondo con imagen integrada */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://res.cloudinary.com/dwv5ehc6e/image/upload/f_auto,q_auto/v1779830062/mifaro/Quienes-somos_4y3SZLG2.jpg" 
            alt="Quienes hacemos posible este camino" 
            className="w-full h-full object-cover opacity-50 mix-blend-multiply grayscale-[0.1]"
            referrerPolicy="no-referrer"
          />
          {/* Overlay gradiente para legibilidad */}
          <div className="absolute inset-0 bg-gradient-to-r from-offwhite via-offwhite/85 to-transparent lg:from-offwhite/95 lg:via-offwhite/70 lg:to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full animate-fadeIn">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 text-olive font-medium tracking-wide uppercase text-xs sm:text-sm mb-6 bg-olive/10 px-4 py-2 rounded-full">
              <ShieldCheck size={16} />
              Quienes hacen posible este camino
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif text-ink mb-6 sm:mb-8 leading-tight">
              Lo hacemos <span className="italic text-olive">posible</span>
            </h1>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-ink-light mb-6 sm:mb-8">
              Equipo interdisciplinar con trayectoria entre España y Argentina
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-ink font-light leading-relaxed mb-6 sm:mb-8">
              El Faro se sostiene en un equipo interdisciplinar y en una red de trayectorias profesionales que articulan experiencia, criterio y acompañamiento entre España y Argentina.
            </p>
            <p className="text-base sm:text-lg text-ink-light font-light leading-relaxed max-w-3xl mb-8 sm:mb-10">
              Nuestro proyecto se nutre de la escucha, del intercambio y del pensamiento compartido. Las reuniones conjuntas permiten que el trabajo se enriquezca a través del diálogo entre equipos, la circulación de experiencias y la puesta en común de recursos profesionales. De ese intercambio entre profesionales del ámbito psicológico, médico y social nace una forma de acompañar que integra distintas miradas, trayectorias y experiencias en el trabajo con personas, familias y vínculos.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8 sm:mb-10 w-full sm:w-auto">
              <Link
                to="/contacto"
                className="bg-ink text-white px-6 py-3.5 sm:px-8 sm:py-4 rounded-full text-sm font-medium tracking-wide uppercase hover:bg-ink-light transition-colors inline-flex items-center justify-center gap-2 shadow-md w-full sm:w-auto text-center"
              >
                Solicitar orientación
              </Link>
              <Link
                to="/contacto"
                className="bg-white/80 backdrop-blur-sm text-olive border border-olive/20 px-6 py-3.5 sm:px-8 sm:py-4 rounded-full text-sm font-medium tracking-wide uppercase hover:bg-olive/20 transition-colors inline-flex items-center justify-center gap-2 shadow-sm w-full sm:w-auto text-center"
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
                href="tel:+542234921953" 
                onClick={() => trackPhoneClick('quienes_lo_hacemos', '+542234921953')}
                className="inline-flex items-center gap-3 text-ink hover:text-olive transition-colors group"
              >
                <PhoneCall size={20} className="text-olive group-hover:scale-110 transition-transform" />
                <span className="text-base sm:text-lg md:text-xl font-medium tracking-wider">+54 223 4921953</span>
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
          viewport={{ once: true, amount: 0 }}
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
        <div className="w-12 h-px bg-olive mx-auto mb-10" />
        <p className="text-2xl md:text-3xl font-serif text-ink leading-relaxed">
          Y junto a ellos, <span className="italic text-olive">una red más amplia de colegas, colaboradores y personas</span> que acompañan la continuidad cotidiana del proyecto.
        </p>
        <div className="mt-12 flex flex-wrap justify-center gap-6">
          <Link to="/historia" className="text-olive hover:underline font-medium">Nuestra historia</Link>
          <Link to="/contacto" className="text-olive hover:underline font-medium">Contacto</Link>
          <a
            href="https://wa.me/5492235923790?text=Hola,%20quisiera%20hacer%20una%20consulta%20en%20El%20Faro."
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWhatsAppClick('quienes_lo_hacemos', 'https://wa.me/5492235923790?text=Hola,%20quisiera%20hacer%20una%20consulta%20en%20El%20Faro.')}
            className="text-olive hover:underline font-medium"
          >
            WhatsApp
          </a>
        </div>
        <div className="w-12 h-px bg-olive mx-auto mt-10" />
        <p className="text-[9px] md:text-[10px] text-ink-light/40 font-light max-w-2xl mx-auto leading-relaxed mt-16 pb-8">
          * El Faro cuenta con profesionales del ámbito de la salud mental, la medicina, la intervención social y el acompañamiento terapéutico. Las titulaciones, habilitaciones y datos profesionales correspondientes se encuentran disponibles para consulta cuando sea necesario. La participación de cada profesional se enmarca en su país, titulación y ámbito de actuación.
        </p>
      </section>

      {/* CTA Final */}
      <section className="py-24 bg-ink text-white overflow-hidden">
        <motion.div 
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-serif mb-8 text-offwhite">Ahora que nos conoces... ¿hablamos?</h2>
          <p className="text-xl text-sand font-light leading-relaxed mb-12">
            El primer paso no tiene que ser una decisión grande. <br className="hidden sm:inline" />Puede ser simplemente escribirnos.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link
              to="/contacto"
              className="inline-flex items-center justify-center gap-3 bg-olive text-white px-10 py-5 rounded-full text-sm font-medium tracking-widest uppercase hover:bg-olive-light transition-all shadow-lg w-full sm:w-auto text-center group"
            >
              Escríbenos
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <a 
              href="https://wa.me/5492235923790?text=Hola,%20quisiera%20hacer%20una%20consulta%20en%20El%20Faro." 
              target="_blank" 
              rel="noopener noreferrer" 
              onClick={() => trackWhatsAppClick('quienes_lo_hacemos_cta', 'https://wa.me/5492235923790?text=Hola,%20quisiera%20hacer%20una%20consulta%20en%20El%20Faro.')}
              className="inline-flex items-center justify-center gap-3 bg-white text-ink border border-sand/30 px-10 py-5 rounded-full text-sm font-medium tracking-widest uppercase hover:bg-sand/10 transition-all font-sans shadow-sm w-full sm:w-auto text-center"
            >
              WhatsApp
            </a>
          </div>
        </motion.div>
      </section>

      {/* Footer Spacer */}
      <div className="h-12" />
    </div>
  );
}
