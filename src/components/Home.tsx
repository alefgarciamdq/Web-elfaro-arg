import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, PhoneCall, ShieldCheck, HeartHandshake, Users, Laptop, MapPin, Network, Coffee, MessageCircle } from 'lucide-react';
import { Head } from 'vite-react-ssg';
import JsonLd from './JsonLd';
import ReviewsBlock from './ReviewsBlock';
import VoicesCarousel from './VoicesCarousel';
import RelatedArticles from './RelatedArticles';
import AnimatedStepLoop from './guide/AnimatedStepLoop';
import { fadeUp, viewportConfig } from '../utils/animations';
import { trackWhatsAppClick, trackPhoneClick } from '../utils/telemetry';

export default function Home() {
  return (
    <div className="bg-faro-bg text-faro-ink min-h-screen">
      <Head>
        <title>tratamiento de adicciones en Mar del Plata | El Faro</title>
        <meta name="description" content="Centro de adicciones en Mar del Plata. Tratamiento ambulatorio, salud mental y trabajo con familias desde 1993." />
        <meta property="og:title" content="El Faro | Tratamiento de adicciones y salud mental en Mar del Plata" />
        <meta property="og:description" content="Más de treinta años de trabajo con personas, familias y comunidad frente a consumos problemáticos y malestar emocional." />
        <meta property="og:image" content="https://res.cloudinary.com/dwv5ehc6e/image/upload/f_auto,q_auto/mifaro/hero-hombre-faro-atlantico" />
        <meta property="og:url" content="https://programaelfaro.com.ar" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="El Faro | Tratamiento de adicciones y salud mental en Mar del Plata" />
        <meta name="twitter:description" content="Tratamiento ambulatorio, salud mental y trabajo con familias desde 1993." />
        <meta name="twitter:image" content="https://res.cloudinary.com/dwv5ehc6e/image/upload/f_auto,q_auto/mifaro/hero-hombre-faro-atlantico" />
        <link rel="canonical" href="https://programaelfaro.com.ar" />
        <link rel="alternate" hrefLang="es-AR" href="https://programaelfaro.com.ar" />
        <link rel="preload" as="image" href="https://res.cloudinary.com/dwv5ehc6e/image/upload/f_auto,q_auto/mifaro/hero-hombre-faro-atlantico" fetchPriority="high" />
      </Head>
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "El Faro Argentina",
        "url": "https://programaelfaro.com.ar"
      }} />
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "El Faro Argentina",
        "url": "https://programaelfaro.com.ar",
        "logo": "https://res.cloudinary.com/dwv5ehc6e/image/upload/f_auto,q_auto/v1779830171/mifaro/Mi_faro_wvHsGngJ.png",
        "description": "Centro de orientación, acompañamiento humanista y dispositivos no-residenciales en adicciones y salud mental en Mar del Plata, Argentina.",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Garay 2073",
          "addressLocality": "Mar del Plata",
          "addressRegion": "Buenos Aires",
          "postalCode": "B7600",
          "addressCountry": "AR"
        },
        "contactPoint": [
          {
            "@type": "ContactPoint",
            "telephone": "+54-223-4921953",
            "contactType": "customer service",
            "areaServed": "AR",
            "availableLanguage": ["Spanish"]
          },
          {
            "@type": "ContactPoint",
            "telephone": "+54-9-2235-60-7009",
            "contactType": "customer service",
            "areaServed": "AR",
            "availableLanguage": ["Spanish"]
          }
        ],
        "foundingDate": "1993",
        "founder": {
          "@type": "Person",
          "name": "Alejandro García"
        }
      }} />
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Programa El Faro - Mar del Plata",
        "description": "Dispositivos no-residenciales, centro de día, mediodía, psicoterapia individual, familiar y talleres en Mar del Plata.",
        "url": "https://programaelfaro.com.ar",
        "telephone": "+542234921953",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Garay 2073",
          "addressLocality": "Mar del Plata",
          "addressRegion": "Buenos Aires",
          "addressCountry": "AR"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": -38.0055,
          "longitude": -57.5426
        },
        "openingHours": "Mo-Fr 09:00-20:00",
        "sameAs": [
          "https://www.instagram.com/elfaromdq/",
          "https://www.facebook.com/ProgramaElFaro"
        ],
        "image": "https://res.cloudinary.com/dwv5ehc6e/image/upload/f_auto,q_auto/v1779830147/mifaro/IMG-0990_mgVHpGR8.jpg",
        "priceRange": "$$"
      }} />

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 bg-faro-bg">
          <img
            src="https://res.cloudinary.com/dwv5ehc6e/image/upload/f_auto,q_auto/mifaro/hero-hombre-faro-atlantico"
            alt="Ale mirando el faro desde la playa"
            className="absolute inset-0 w-full h-full object-cover opacity-55 mix-blend-luminosity"
            fetchPriority="high"
            decoding="async"
            width={900}
            height={507}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-faro-bg/30 via-faro-bg/50 to-faro-bg/90" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-20">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl sm:text-5xl md:text-7xl font-serif text-faro-ink mb-10 leading-tight"
          >
            ¿Cuánto más tenés que pasar para que puedas pedir ayuda?
            <span className="block text-lg sm:text-xl md:text-2xl font-sans text-faro-ink/75 font-normal tracking-wide mt-6">
              Tratamiento de adicciones y salud mental en Mar del Plata. Desde 1993.
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-xl md:text-2xl font-serif text-faro-ink/85 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            <p>
              En El Faro no te dejamos solo con lo que te pasa. Escuchamos, ordenamos y juntos pensamos cómo seguir. Trabajamos con personas que atraviesan consumos problemáticos, adicciones y otra dependecnias, y con familias que ya no encuentran cómo sostener la situación.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col items-center mb-12"
          >
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
              <Link
                to="/contacto"
                className="w-full sm:w-auto bg-faro-gold text-faro-bg px-10 py-5 rounded-full text-sm font-semibold tracking-widest uppercase hover:bg-faro-gold/90 transition-all flex items-center justify-center gap-3 shadow-lg shadow-faro-gold/20"
              >
                Hablar con El Faro
                <ArrowRight size={18} />
              </Link>
              <a 
                href="https://wa.me/5492235607009" 
                target="_blank" 
                rel="noopener noreferrer"
                onClick={() => trackWhatsAppClick('hero_section', 'https://wa.me/5492235607009')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-faro-bg-alt text-faro-ink border border-faro-olive/40 px-10 py-5 rounded-full text-sm font-semibold tracking-widest uppercase hover:bg-faro-olive/30 transition-all font-sans shadow-sm"
              >
                Escribinos por WhatsApp
              </a>
            </div>
            <p className="text-sm text-faro-ink/65 italic">
              Una primera entrevista para poner en palabras lo que está pasando y conocer las posibilidades de tratamiento.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mb-16 flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <a 
              href="tel:+542234921953" 
              onClick={() => trackPhoneClick('hero_section', '+542234921953')}
              className="inline-flex items-center gap-3 text-faro-ink hover:text-faro-gold transition-colors group"
            >
              <PhoneCall size={22} className="text-faro-gold group-hover:scale-110 transition-transform" />
              <span className="text-lg md:text-xl font-medium tracking-wider">+54 223 4921953</span>
            </a>
            <span className="hidden sm:inline text-faro-olive font-light">•</span>
            <a
              href="https://wa.me/34611568705"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsAppClick('hero_section_tel', 'https://wa.me/34611568705')}
              className="inline-flex items-center gap-3 text-faro-ink hover:text-faro-gold transition-colors group"
            >
              <PhoneCall size={22} className="text-faro-gold group-hover:scale-110 transition-transform" />
              <span className="text-lg md:text-xl font-medium tracking-wider">+34 611 568 705</span>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Enlaces de acceso rápido */}
      <section className="py-6 bg-faro-bg-alt/50 border-b border-faro-olive/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm sm:text-base text-faro-ink/80 font-light leading-relaxed">
            No todos llegan por el mismo motivo. Podés empezar por acá si{' '}
            <Link to="/adicciones-mar-del-plata" className="text-faro-gold hover:text-faro-ink font-medium underline underline-offset-4 decoration-faro-gold/30 transition-colors">
              te preocupa tu consumo
            </Link>
            ,{' '}
            <Link to="/terapia-mar-del-plata" className="text-faro-gold hover:text-faro-ink font-medium underline underline-offset-4 decoration-faro-gold/30 transition-colors">
              te preocupa un hijo, una pareja o alguien de tu familia
            </Link>
            ,{' '}
            <Link to="/asociacion" className="text-faro-gold hover:text-faro-ink font-medium underline underline-offset-4 decoration-faro-gold/30 transition-colors">
              buscás tratamiento ambulatorio de adicciones en Mar del Plata
            </Link>
            , o{' '}
            <Link to="/psicologo-mar-del-plata" className="text-faro-gold hover:text-faro-ink font-medium underline underline-offset-4 decoration-faro-gold/30 transition-colors">
              necesitás orientación para entender qué hacer
            </Link>
            .
          </p>
        </div>
      </section>

      {/* Orientación Institucional en Mar del Plata */}
      <section className="py-24 bg-faro-bg-alt/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-faro-ink mb-6">
              Un lugar de Mar del Plata para cuando ya no se puede <span className="italic text-faro-gold">seguir igual</span>
            </h2>
            <p className="text-faro-gold font-serif italic text-xl md:text-2xl mb-6 max-w-3xl mx-auto">
              El Faro es una institución de Mar del Plata fundada en 1993 por Alejandro García. Hace más de treinta años trabajamos en adicciones, salud mental, familias, grupos y comunidad.
            </p>
            <p className="text-faro-ink/80 max-w-3xl mx-auto font-light text-xl leading-relaxed">
              Somos un centro de adicciones con una forma de trabajo humana, profesional y no residencial. Recibimos a personas que necesitan tratar un consumo, ordenar una crisis, recuperar un vínculo o volver a encontrar un lugar propio en su vida cotidiana. La familia también tiene un espacio dentro del proceso.
            </p>
          </motion.div>

          <div className="mb-20 rounded-[3rem] overflow-hidden shadow-sm border border-faro-olive/30 group">
            <img 
              src="https://res.cloudinary.com/dwv5ehc6e/image/upload/f_auto,q_auto,w_900/v1779830127/mifaro/Psicologo-Mar-del-Plata_fbDW2Xz3.jpg"
              alt="El Faro Argentina en Mar del Plata" 
              className="w-full h-auto max-h-[600px] object-cover transition-transform duration-[3000ms] hover:scale-105 opacity-90"
              referrerPolicy="no-referrer"
              decoding="async"
              width={900}
              height={600}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-faro-bg-alt/80 p-10 rounded-[2rem] border border-faro-olive/30 shadow-sm hover:border-faro-gold/40 transition-colors">
              <h3 className="text-xl font-serif text-faro-ink mb-4">Una primera entrevista para empezar</h3>
              <p className="text-faro-ink/75 font-light text-sm leading-relaxed">
                Un encuentro para escuchar la situación tal como está hoy, ordenar lo urgente y pensar qué tipo de proceso puede resultar más útil.
              </p>
            </div>
            <div className="bg-faro-bg-alt/80 p-10 rounded-[2rem] border border-faro-olive/30 shadow-sm hover:border-faro-gold/40 transition-colors">
              <h3 className="text-xl font-serif text-faro-ink mb-4">Desde 1993 en la ciudad</h3>
              <p className="text-faro-ink/75 font-light text-sm leading-relaxed">
                Más de tres décadas de trabajo sostenido en Mar del Plata, con personas, familias y equipos que buscan otra forma de abordar las adicciones y el sufrimiento emocional.
              </p>
            </div>
            <div className="bg-faro-bg-alt/80 p-10 rounded-[2rem] border border-faro-olive/30 shadow-sm hover:border-faro-gold/40 transition-colors">
              <h3 className="text-xl font-serif text-faro-ink mb-4">La familia no queda afuera</h3>
              <p className="text-faro-ink/75 font-light text-sm leading-relaxed">
                Cuando hay consumos problemáticos, todo el entorno se ve afectado. Trabajamos con madres, padres, parejas, hermanos y personas cercanas.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link
              to="/contacto"
              className="w-full sm:w-auto bg-faro-gold text-faro-bg px-10 py-5 rounded-full text-sm font-semibold tracking-widest uppercase hover:bg-faro-gold/90 transition-all flex items-center justify-center gap-3 shadow-lg shadow-faro-gold/20"
            >
              Hablar con El Faro
              <ArrowRight size={18} />
            </Link>
            <Link
              to="/historia"
              className="text-faro-ink font-medium hover:text-faro-gold transition-colors border-b border-faro-ink hover:border-faro-gold pb-1"
            >
              Conocer nuestra trayectoria
            </Link>
          </div>
        </div>
      </section>

      {/* Guía Conversacional */}
      <section className="py-12 bg-faro-bg border-b border-faro-olive/20 pb-6">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-faro-bg-alt/60 p-8 rounded-[2.5rem] border border-faro-olive/30 shadow-sm">
            <h3 className="text-2xl font-serif text-faro-ink mb-4">No hace falta tener todo resuelto para venir</h3>
            <p className="text-faro-ink/80 font-light mb-6">
              A veces hay una situación que se repite o una preocupación que ya ocupa demasiado lugar en la casa, en el trabajo o en los vínculos. La primera entrevista permite frenar, mirar lo que está pasando y pensar por dónde empezar.
            </p>
            <Link 
              to="/como-pedir-ayuda-psicologia-mar-del-plata"
              className="text-faro-gold font-medium border-b border-faro-gold pb-1 hover:text-faro-ink hover:border-faro-ink transition-colors inline-flex items-center gap-2 group"
            >
              Conocer cómo podemos ayudarte
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Guía de Reconocimiento de Adicciones */}
      <section className="py-6 bg-faro-bg border-b border-faro-olive/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-faro-bg-alt/60 p-8 rounded-[2.5rem] border border-faro-olive/30 shadow-sm">
            <h3 className="text-2xl font-serif text-faro-ink mb-4">Cuando el consumo empieza a ordenar la vida de todos</h3>
            <p className="text-faro-ink/80 font-light mb-6">
              El consumo problemático no siempre aparece de golpe. Puede empezar con cambios de ánimo, aislamiento, mentiras, deudas o conflictos en casa. En El Faro trabajamos sin culpas ni etiquetas rápidas, pero sin minimizar lo que está pasando.
            </p>
            <Link 
              to="/adicciones-mar-del-plata"
              className="text-faro-gold font-medium border-b border-faro-gold pb-1 hover:text-faro-ink hover:border-faro-ink transition-colors inline-flex items-center gap-2 group"
            >
              Ver tratamiento de adicciones
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Servicios y Dispositivos de El Faro Argentina */}
      <section id="services-section" className="py-24 bg-faro-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif text-faro-ink mb-4">
              Tratamiento ambulatorio de adicciones y <span className="italic text-faro-gold">salud mental</span>
            </h2>
            <p className="text-faro-ink/80 max-w-2xl mx-auto font-light text-lg">
              No existe un único recorrido para todas las personas. Combinamos espacios individuales, grupales, familiares y dispositivos de mayor intensidad sin separar a la persona de su mundo.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-8 rounded-[2rem] bg-faro-bg-alt/70 border border-faro-olive/30 hover:border-faro-gold/40 hover:shadow-md transition-all flex flex-col group">
              <ShieldCheck size={24} className="text-faro-gold mb-4" />
              <h3 className="text-2xl font-serif text-faro-ink mb-3 group-hover:text-faro-gold transition-colors">Centro de Día y Mediodía</h3>
              <p className="text-faro-ink/75 font-light leading-relaxed mb-6 text-sm flex-grow">
                Dispositivos no residenciales para quienes necesitan más presencia terapéutica durante la semana. Una alternativa de rehabilitación de drogas sin internación, integrada a la vida personal, familiar y comunitaria.
              </p>
              <span className="text-faro-gold font-medium text-xs uppercase tracking-widest flex items-center gap-2">Tratamiento ambulatorio</span>
            </div>

            <div className="p-8 rounded-[2rem] bg-faro-bg-alt/70 border border-faro-olive/30 hover:border-faro-gold/40 hover:shadow-md transition-all flex flex-col group">
              <MessageCircle size={24} className="text-faro-gold mb-4" />
              <h3 className="text-2xl font-serif text-faro-ink mb-3 group-hover:text-faro-gold transition-colors">Psicoterapia Individual y Grupal</h3>
              <p className="text-faro-ink/75 font-light leading-relaxed mb-6 text-sm flex-grow">
                Espacios para trabajar consumos problemáticos, malestar emocional, crisis personales y momentos en los que algo dejó de poder sostenerse como antes.
              </p>
              <span className="text-faro-gold font-medium text-xs uppercase tracking-widest flex items-center gap-2">Atención individual y grupal</span>
            </div>

            <div className="p-8 rounded-[2rem] bg-faro-bg-alt/70 border border-faro-olive/30 hover:border-faro-gold/40 hover:shadow-md transition-all flex flex-col group">
              <Users size={24} className="text-faro-gold mb-4" />
              <h3 className="text-2xl font-serif text-faro-ink mb-3 group-hover:text-faro-gold transition-colors">Terapia Familiar y de Pareja</h3>
              <p className="text-faro-ink/75 font-light leading-relaxed mb-6 text-sm flex-grow">
                Un espacio para que la familia y las personas cercanas puedan entender qué les está pasando, revisar modos de vincularse y construir límites posibles.
              </p>
              <span className="text-faro-gold font-medium text-xs uppercase tracking-widest flex items-center gap-2">Familia y adicciones</span>
            </div>

            <div className="p-8 rounded-[2rem] bg-faro-bg-alt/70 border border-faro-olive/30 hover:border-faro-gold/40 hover:shadow-md transition-all flex flex-col group">
              <HeartHandshake size={24} className="text-faro-gold mb-4" />
              <h3 className="text-2xl font-serif text-faro-ink mb-3 group-hover:text-faro-gold transition-colors">Psicodrama</h3>
              <p className="text-faro-ink/75 font-light leading-relaxed mb-6 text-sm flex-grow">
                Un trabajo vivencial para poner en juego aquello que cuesta decir: emociones, conflictos, roles repetidos y formas de relacionarse que ya no alcanzan.
              </p>
              <span className="text-faro-gold font-medium text-xs uppercase tracking-widest flex items-center gap-2">Abordaje vivencial</span>
            </div>

            <div className="p-8 rounded-[2rem] bg-faro-bg-alt/70 border border-faro-olive/30 hover:border-faro-gold/40 hover:shadow-md transition-all flex flex-col group">
              <HeartHandshake size={24} className="text-faro-gold mb-4" />
              <h3 className="text-2xl font-serif text-faro-ink mb-3 group-hover:text-faro-gold transition-colors">Expresión Emotiva (Bonding)</h3>
              <p className="text-faro-ink/75 font-light leading-relaxed mb-6 text-sm flex-grow">
                Talleres para registrar el cuerpo, las emociones y las tensiones que muchas veces quedan sin nombre. Un espacio cuidado para volver a conectar con lo que se siente.
              </p>
              <span className="text-faro-gold font-medium text-xs uppercase tracking-widest flex items-center gap-2">Talleres de expresión</span>
            </div>

            <div className="p-8 rounded-[2rem] bg-faro-bg-alt/70 border border-faro-olive/30 hover:border-faro-gold/40 hover:shadow-md transition-all flex flex-col group">
              <Laptop size={24} className="text-faro-gold mb-4" />
              <h3 className="text-2xl font-serif text-faro-ink mb-3 group-hover:text-faro-gold transition-colors">Teatro, Cine, Radio y Podcast</h3>
              <p className="text-faro-ink/75 font-light leading-relaxed mb-6 text-sm flex-grow">
                Propuestas de creación colectiva para recuperar la voz, compartir experiencias y volver a formar parte de una red.
              </p>
              <span className="text-faro-gold font-medium text-xs uppercase tracking-widest flex items-center gap-2">Talleres de creación</span>
            </div>
          </div>
        </div>
      </section>

      {/* Las Voces del Faro */}
      <VoicesCarousel variant="dark" />

      {/* Ubicación y Contacto en Argentina */}
      <section className="py-24 bg-faro-bg-alt/30 border-t border-faro-olive/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif text-faro-ink mb-4">
              El Faro, centro de adicciones en <span className="italic text-faro-gold">Mar del Plata</span>
            </h2>
            <p className="text-faro-ink/80 max-w-2xl mx-auto font-light text-lg">
              Trabajamos con personas y familias que necesitan un lugar serio, cercano y profesional para tratar consumos problemáticos, alcoholismo, crisis emocionales y dificultades vinculares.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-faro-bg-alt p-10 rounded-[2.5rem] border border-faro-olive/30 shadow-sm hover:border-faro-gold/40 transition-all group flex flex-col justify-between">
              <div>
                <div className="text-faro-gold mb-6 flex items-center justify-center lg:justify-start">
                  <div className="p-3 bg-faro-gold/10 rounded-2xl w-fit">
                    <MapPin size={28} />
                  </div>
                </div>
                <h3 className="text-2xl font-serif text-faro-ink mb-4 text-center lg:text-left">Garay 2073, Mar del Plata</h3>
                <p className="text-faro-ink/75 font-light text-sm leading-relaxed text-center lg:text-left">
                  Nuestra sede es un lugar de trabajo cotidiano: entrevistas, psicoterapia, grupos, centro de día y talleres. Un espacio pensado para recibir, escuchar y trabajar.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-faro-olive/30 text-center lg:text-left">
                <span className="text-xs font-semibold uppercase tracking-wider text-faro-gold bg-faro-gold/10 px-3 py-1.5 rounded-full">
                  Garay 2073 · Mar del Plata
                </span>
              </div>
            </div>

            <div className="bg-faro-bg-alt p-10 rounded-[2.5rem] border border-faro-olive/30 shadow-sm hover:border-faro-gold/40 transition-all group flex flex-col justify-between">
              <div>
                <div className="text-faro-gold mb-6 flex items-center justify-center lg:justify-start">
                  <div className="p-3 bg-faro-gold/10 rounded-2xl w-fit">
                    <PhoneCall size={28} />
                  </div>
                </div>
                <h3 className="text-2xl font-serif text-faro-ink mb-4 text-center lg:text-left">Hablemos de lo que está pasando</h3>
                <p className="text-faro-ink/75 font-light text-sm leading-relaxed text-center lg:text-left">
                  Podés comunicarte por teléfono o WhatsApp para pedir una primera entrevista. No hace falta saber exactamente qué tratamiento necesitás antes de llamar.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-faro-olive/30 text-center lg:text-left">
                <span className="text-xs font-semibold uppercase tracking-wider text-faro-gold bg-faro-gold/10 px-3 py-1.5 rounded-full">
                  Tel. +54 223 4921953 / +54 9 2235 60-7009
                </span>
              </div>
            </div>

            <div className="bg-faro-bg-alt p-10 rounded-[2.5rem] border border-faro-olive/30 shadow-sm hover:border-faro-gold/40 transition-all group flex flex-col justify-between">
              <div>
                <div className="text-faro-gold mb-6 flex items-center justify-center lg:justify-start">
                  <div className="p-3 bg-faro-gold/10 rounded-2xl w-fit">
                    <Network size={28} />
                  </div>
                </div>
                <h3 className="text-2xl font-serif text-faro-ink mb-4 text-center lg:text-left">Tratamiento sin internación</h3>
                <p className="text-faro-ink/75 font-light text-sm leading-relaxed text-center lg:text-left">
                  Centro de día, centro de mediodía, grupos, psicoterapia y trabajo familiar para sostener procesos intensivos sin cortar los lazos con la vida cotidiana.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-faro-olive/30 text-center lg:text-left">
                <span className="text-xs font-semibold uppercase tracking-wider text-faro-gold bg-faro-gold/10 px-3 py-1.5 rounded-full">
                  Acompañamiento integral
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Historia / Trayectoria de El Faro */}
      <section className="py-32 bg-faro-bg-alt/80 relative overflow-hidden">
        <div className="absolute inset-0 z-0 bg-faro-bg-alt">
          <img
            src="https://res.cloudinary.com/dwv5ehc6e/image/upload/f_auto,q_auto,w_1600/v1779830117/mifaro/Psicoterapia-valencia_ZKDPV1y3.png"
            alt="Espacio de acompañamiento humanista en Mar del Plata"
            className="absolute inset-0 w-full h-full object-cover opacity-35 mix-blend-luminosity"
            referrerPolicy="no-referrer"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-faro-bg-alt via-faro-bg-alt/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-faro-bg-alt/20 via-transparent to-faro-bg-alt" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center">
            <div className="lg:col-span-6 lg:col-start-1">
              <div className="inline-flex items-center gap-2 text-faro-gold font-medium tracking-wide uppercase text-xs mb-8">
                <ShieldCheck size={16} />
                Nuestra Trayectoria
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-faro-ink mb-10 leading-tight">
                Más de treinta años trabajando en <br/><span className="italic text-faro-gold font-light">Mar del Plata</span>
              </h2>
              <div className="w-12 h-px bg-faro-gold mb-6" />
              <p className="font-serif italic text-2xl md:text-3xl text-faro-gold leading-relaxed max-w-xl mb-8">
                Desde 1993, cerca de las personas, las familias y la comunidad.
              </p>
              <div className="space-y-6 text-faro-ink/80 font-light text-lg leading-relaxed">
                <p>
                  El Faro nació en 1993 de la mano de Alejandro García como una propuesta para abordar las adicciones desde una mirada distinta: más humana, más cercana y comprometida con la vida real de cada persona.
                </p>
                <p>
                  Con los años, la institución fue construyendo un trabajo sostenido en salud mental, consumos problemáticos, grupos, familias y comunidad. Seguimos creyendo que ningún proceso se sostiene en soledad y que una red puede hacer una diferencia concreta cuando todo parece haberse desordenado.
                </p>
              </div>
              <div className="mt-12">
                <Link
                  to="/historia"
                  className="inline-flex items-center gap-2 text-faro-ink font-medium hover:text-faro-gold transition-colors border-b border-faro-ink hover:border-faro-gold pb-1"
                >
                  Conoce nuestra historia
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nuestro Enfoque */}
      <section className="py-24 bg-faro-bg-alt text-faro-ink border-t border-b border-faro-olive/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-1">
              <h2 className="text-4xl md:text-5xl font-serif mb-6 text-faro-ink">
                Nuestro <br />
                <span className="italic text-faro-gold">enfoque</span>
              </h2>
              <p className="text-faro-ink/80 font-light leading-relaxed text-lg mb-8">
                Un consumo problemático puede ser parte de una historia más amplia: una crisis, un dolor que no encuentra lugar, vínculos dañados, soledad, cansancio o una forma de sobrevivir que ya empezó a traer más problemas que alivio.
              </p>
              <Link
                to="/contacto"
                className="inline-flex items-center gap-2 bg-faro-gold text-faro-bg px-8 py-4 rounded-full text-sm font-medium tracking-wide uppercase hover:bg-faro-gold/90 transition-colors"
              >
                Hablar con El Faro
                <ArrowRight size={16} />
              </Link>
            </div>
            
            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="border-t border-faro-olive/30 pt-6">
                <h3 className="text-xl font-serif text-faro-gold mb-3">Modelo humano y profesional</h3>
                <p className="text-faro-ink/75 text-sm leading-relaxed font-light">
                  Escuchamos la historia de cada persona sin reducirla a un diagnóstico. Trabajamos con seriedad clínica, respeto y una mirada que no estigmatiza.
                </p>
              </div>
              <div className="border-t border-faro-olive/30 pt-6">
                <h3 className="text-xl font-serif text-faro-gold mb-3">El vínculo como parte del proceso</h3>
                <p className="text-faro-ink/75 text-sm leading-relaxed font-light">
                  La familia, la pareja y las personas cercanas pueden necesitar orientación propia. Incluir la red permite entender mejor lo que está pasando y construir apoyos más reales.
                </p>
              </div>
              <div className="border-t border-faro-olive/30 pt-6">
                <h3 className="text-xl font-serif text-faro-gold mb-3">Dispositivos No-Residenciales</h3>
                <p className="text-faro-ink/75 text-sm leading-relaxed font-light">
                  Ofrecemos tratamientos que sostienen intensidad y continuidad sin aislar a la persona de su ciudad, su familia, sus responsabilidades y sus vínculos.
                </p>
              </div>
              <div className="border-t border-faro-olive/30 pt-6">
                <h3 className="text-xl font-serif text-faro-gold mb-3">Arte, Expresión y Comunicación</h3>
                <p className="text-faro-ink/75 text-sm leading-relaxed font-light">
                  Los grupos, los talleres y la creación colectiva son parte del trabajo porque recuperar la voz y el lugar entre otros también forma parte de un proceso de cambio.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cómo empezar un proceso */}
      <section className="py-24 bg-faro-bg-alt/40 border-t border-b border-faro-olive/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif text-faro-ink mb-4">
              Cómo empezar <span className="italic text-faro-gold">un proceso</span>
            </h2>
            <p className="text-faro-ink/80 max-w-2xl mx-auto font-light text-lg">
              El primer paso no es decidirlo todo. Es poder contar lo que está pasando y encontrar un equipo que escuche la situación con atención.
            </p>
          </div>

          <AnimatedStepLoop
            steps={[
              {
                number: 1,
                title: '1. Primer contacto',
                description: 'Llamanos o escribinos por WhatsApp. Podés contar brevemente qué está pasando y coordinamos una primera entrevista.',
                accent: 'olive',
              },
              {
                number: 2,
                title: '2. Primer encuentro',
                description: 'Un encuentro presencial en Garay 2073 para conocer la situación, escuchar a la persona o a su familia y ordenar las prioridades.',
                accent: 'olive',
              },
              {
                number: 3,
                title: '3. Propuesta de tratamiento',
                description: 'A partir de esa primera entrevista, pensamos el dispositivo más adecuado: psicoterapia, grupos, centro de día, centro de mediodía o trabajo con la familia.',
                accent: 'olive',
              },
            ]}
            variant="dark"
          />
        </div>
      </section>

      {/* Rutas del Faro (dynamic reviews block) */}
      <ReviewsBlock dark />

      <RelatedArticles limit={3} variant="dark" />

      {/* Invitación Red */}
      <section className="py-24 bg-faro-bg-alt/60 border-t border-faro-olive/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-faro-bg-alt rounded-full mb-8 shadow-sm border border-faro-olive/30">
            <Coffee className="text-faro-gold" size={32} />
          </div>
          <h2 className="text-3xl md:text-4xl font-serif text-faro-ink mb-6">Si compartís esta forma de trabajar</h2>
          <p className="text-lg text-faro-ink/80 font-light leading-relaxed mb-10 max-w-2xl mx-auto">
            El Faro es también una institución construida entre personas. Nos interesa conocer profesionales y colaboradores que crean en el trabajo con grupos, familias, comunidad y redes reales de sostén.
          </p>
          <Link
            to="/contacto"
            className="inline-flex items-center gap-3 bg-faro-gold text-faro-bg px-10 py-5 rounded-full text-sm font-semibold tracking-widest uppercase hover:bg-faro-gold/90 transition-all shadow-sm"
          >
            <Coffee size={20} />
            Conversemos
          </Link>
        </div>
      </section>
    </div>
  );
}
