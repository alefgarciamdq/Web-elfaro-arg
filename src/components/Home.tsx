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
        <title>El Faro Argentina · Adicciones, salud mental y acompañamiento en Mar del Plata</title>
        <meta name="description" content="Acompañamiento humanista en Mar del Plata para personas, parejas y familias ante consumos problemáticos, malestar emocional y situaciones vinculares. Dispositivos no-residenciales." />
        <meta property="og:title" content="El Faro Argentina · Adicciones, salud mental y acompañamiento en Mar del Plata" />
        <meta property="og:description" content="Acompañamiento humanista en Mar del Plata para personas, parejas y familias ante consumos problemáticos, malestar emocional y situaciones vinculares. Dispositivos no-residenciales." />
        <meta property="og:image" content="https://res.cloudinary.com/dwv5ehc6e/image/upload/f_auto,q_auto/v1779830167/mifaro/BC7D2F3A-15F7-4AC3-8CD7-18CBE748DB49_tgv7sj1B.png" />
        <meta property="og:url" content="https://programaelfaro.com.ar" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="El Faro Argentina · Adicciones y acompañamiento humanista" />
        <meta name="twitter:description" content="Acompañamiento vincular y dispositivos no-residenciales en Mar del Plata." />
        <meta name="twitter:image" content="https://res.cloudinary.com/dwv5ehc6e/image/upload/f_auto,q_auto/v1779830167/mifaro/BC7D2F3A-15F7-4AC3-8CD7-18CBE748DB49_tgv7sj1B.png" />
        <link rel="canonical" href="https://programaelfaro.com.ar" />
        <link rel="alternate" hrefLang="es-AR" href="https://programaelfaro.com.ar" />
        <link rel="preload" as="image" href="https://res.cloudinary.com/dwv5ehc6e/image/upload/f_auto,q_auto,w_900/v1779830167/mifaro/BC7D2F3A-15F7-4AC3-8CD7-18CBE748DB49_tgv7sj1B.png" fetchPriority="high" />
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
            src="https://res.cloudinary.com/dwv5ehc6e/image/upload/f_auto,q_auto,w_900/v1779830167/mifaro/BC7D2F3A-15F7-4AC3-8CD7-18CBE748DB49_tgv7sj1B.png"
            alt="El Faro Argentina, orientación y acompañamiento en Mar del Plata"
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
            ¿Algo no va bien, pero no sabes por dónde empezar?
            <span className="block text-lg sm:text-xl md:text-2xl font-sans text-faro-ink/75 font-normal tracking-wide mt-6">
              El Faro Argentina · Orientación, acompañamiento humano y comunidad en Mar del Plata
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-xl md:text-2xl font-serif text-faro-ink/85 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            <p>
              Un espacio de modelo humano centrado en la persona y en el vínculo. Desde 1993, acompañamos a personas, familias y parejas ante situaciones de consumo problemático y malestar emocional.
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
                Reservar consulta
                <ArrowRight size={18} />
              </Link>
              <a 
                href="https://wa.me/5492235607009" 
                target="_blank" 
                rel="noopener noreferrer"
                onClick={() => trackWhatsAppClick('hero_section', 'https://wa.me/5492235607009')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-faro-bg-alt text-faro-ink border border-faro-olive/40 px-10 py-5 rounded-full text-sm font-semibold tracking-widest uppercase hover:bg-faro-olive/30 transition-all font-sans shadow-sm"
              >
                Escríbenos por WhatsApp
              </a>
            </div>
            <p className="text-sm text-faro-ink/65 italic">
              Sin compromiso. Podemos ayudarte a entender qué necesita tu situación.
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
              href="https://wa.me/5492235607009" 
              target="_blank" 
              rel="noopener noreferrer"
              onClick={() => trackWhatsAppClick('hero_section_tel', 'https://wa.me/5492235607009')}
              className="inline-flex items-center gap-3 text-faro-ink hover:text-faro-gold transition-colors group"
            >
              <PhoneCall size={22} className="text-faro-gold group-hover:scale-110 transition-transform" />
              <span className="text-lg md:text-xl font-medium tracking-wider">+54 9 2235 60-7009</span>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Enlaces de acceso rápido */}
      <section className="py-6 bg-faro-bg-alt/50 border-b border-faro-olive/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm sm:text-base text-faro-ink/80 font-light leading-relaxed">
            Puedes empezar por aquí si estás atravesando{' '}
            <Link to="/adicciones-mar-del-plata" className="text-faro-gold hover:text-faro-ink font-medium underline underline-offset-4 decoration-faro-gold/30 transition-colors">
              consumos problemáticos o adicciones
            </Link>
            ,{' '}
            <Link to="/terapia-mar-del-plata" className="text-faro-gold hover:text-faro-ink font-medium underline underline-offset-4 decoration-faro-gold/30 transition-colors">
              dificultades familiares o de pareja
            </Link>
            , buscas información sobre{' '}
            <Link to="/asociacion" className="text-faro-gold hover:text-faro-ink font-medium underline underline-offset-4 decoration-faro-gold/30 transition-colors">
              nuestros orígenes
            </Link>
            , o necesitas espacios de{' '}
            <Link to="/psicologo-mar-del-plata" className="text-faro-gold hover:text-faro-ink font-medium underline underline-offset-4 decoration-faro-gold/30 transition-colors">
              psicoterapia y talleres expresivos
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
              Un espacio para parar, <span className="italic text-faro-gold">entender y acompañar</span>
            </h2>
            <p className="text-faro-gold font-serif italic text-xl md:text-2xl mb-6 max-w-3xl mx-auto">
              El Faro abre sus puertas en 1993 de la mano de Alejandro García, planteando un modelo humanista centrado en la persona y el vínculo como alternativa al consumo problemático.
            </p>
            <p className="text-faro-ink/80 max-w-3xl mx-auto font-light text-xl leading-relaxed">
              En Mar del Plata trabajamos con toda la red socioafectiva (familia, pareja, amigos) ofreciendo dispositivos no-residenciales que priorizan la palabra, la contención y el desarrollo de proyectos de vida.
            </p>
          </motion.div>

          <div className="mb-20 rounded-[3rem] overflow-hidden shadow-sm border border-faro-olive/30 group">
            <img 
              src="https://res.cloudinary.com/dwv5ehc6e/image/upload/f_auto,q_auto,w_900/v1779830159/mifaro/Psicologo-en-valencia_rwSHDf8p.png" 
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
              <h3 className="text-xl font-serif text-faro-ink mb-4">Primera conversación sin compromiso</h3>
              <p className="text-faro-ink/75 font-light text-sm leading-relaxed">
                Un espacio de recepción inicial para alojar tu inquietud, orientar a la familia y evaluar qué dispositivo es el más conveniente.
              </p>
            </div>
            <div className="bg-faro-bg-alt/80 p-10 rounded-[2rem] border border-faro-olive/30 shadow-sm hover:border-faro-gold/40 transition-colors">
              <h3 className="text-xl font-serif text-faro-ink mb-4">Desde 1993 en Mar del Plata</h3>
              <p className="text-faro-ink/75 font-light text-sm leading-relaxed">
                Más de tres décadas impulsando un modelo pionero humanista que sitúa el vínculo afectivo y la dignidad en el centro del tratamiento.
              </p>
            </div>
            <div className="bg-faro-bg-alt/80 p-10 rounded-[2rem] border border-faro-olive/30 shadow-sm hover:border-faro-gold/40 transition-colors">
              <h3 className="text-xl font-serif text-faro-ink mb-4">Integración de toda la red</h3>
              <p className="text-faro-ink/75 font-light text-sm leading-relaxed">
                Acompañamiento cercano a familias, parejas y amigos para reconstruir los lazos y evitar transitar la dificultad en soledad.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link
              to="/contacto"
              className="w-full sm:w-auto bg-faro-gold text-faro-bg px-10 py-5 rounded-full text-sm font-semibold tracking-widest uppercase hover:bg-faro-gold/90 transition-all flex items-center justify-center gap-3 shadow-lg shadow-faro-gold/20"
            >
              Reservar consulta
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
            <h3 className="text-2xl font-serif text-faro-ink mb-4">¿No sabes si consultar?</h3>
            <p className="text-faro-ink/80 font-light mb-6">
              Si sientes angustia, desorientación o no sabes cómo acompañar a un familiar o allegado, podemos asesorarte sin compromiso en una primera entrevista.
            </p>
            <Link 
              to="/como-pedir-ayuda-psicologia-mar-del-plata"
              className="text-faro-gold font-medium border-b border-faro-gold pb-1 hover:text-faro-ink hover:border-faro-ink transition-colors inline-flex items-center gap-2 group"
            >
              Ver cuándo pedir ayuda 
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Guía de Reconocimiento de Adicciones */}
      <section className="py-6 bg-faro-bg border-b border-faro-olive/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-faro-bg-alt/60 p-8 rounded-[2.5rem] border border-faro-olive/30 shadow-sm">
            <h3 className="text-2xl font-serif text-faro-ink mb-4">¿Te preocupa el consumo o la situación de alguien en casa?</h3>
            <p className="text-faro-ink/80 font-light mb-6">
              Una mirada profesional y humana para comprender el problema sin etiquetas y orientar a la familia.
            </p>
            <Link 
              to="/adicciones-mar-del-plata"
              className="text-faro-gold font-medium border-b border-faro-gold pb-1 hover:text-faro-ink hover:border-faro-ink transition-colors inline-flex items-center gap-2 group"
            >
              Guía para orientarte
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
              Dispositivos y <span className="italic text-faro-gold">espacios</span>
            </h2>
            <p className="text-faro-ink/80 max-w-2xl mx-auto font-light text-lg">
              Desarrollamos abordajes no-residenciales adaptados a cada persona y su red, combinando la práctica clínica con talleres grupales y expresivos.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-8 rounded-[2rem] bg-faro-bg-alt/70 border border-faro-olive/30 hover:border-faro-gold/40 hover:shadow-md transition-all flex flex-col group">
              <ShieldCheck size={24} className="text-faro-gold mb-4" />
              <h3 className="text-2xl font-serif text-faro-ink mb-3 group-hover:text-faro-gold transition-colors">Centro de Día y Mediodía</h3>
              <p className="text-faro-ink/75 font-light leading-relaxed mb-6 text-sm flex-grow">
                Dispositivos no-residenciales de contención e intensificación terapéutica diaria para acompañar el proceso sin aislar a la persona de su cotidianeidad.
              </p>
              <span className="text-faro-gold font-medium text-xs uppercase tracking-widest flex items-center gap-2">Dispositivo no-residencial</span>
            </div>

            <div className="p-8 rounded-[2rem] bg-faro-bg-alt/70 border border-faro-olive/30 hover:border-faro-gold/40 hover:shadow-md transition-all flex flex-col group">
              <MessageCircle size={24} className="text-faro-gold mb-4" />
              <h3 className="text-2xl font-serif text-faro-ink mb-3 group-hover:text-faro-gold transition-colors">Psicoterapia Individual y Grupal</h3>
              <p className="text-faro-ink/75 font-light leading-relaxed mb-6 text-sm flex-grow">
                Espacios de escucha profunda y elaboración clínica para abordar el malestar emocional, los consumos problemáticos y los momentos de crisis.
              </p>
              <span className="text-faro-gold font-medium text-xs uppercase tracking-widest flex items-center gap-2">Atención individual y grupal</span>
            </div>

            <div className="p-8 rounded-[2rem] bg-faro-bg-alt/70 border border-faro-olive/30 hover:border-faro-gold/40 hover:shadow-md transition-all flex flex-col group">
              <Users size={24} className="text-faro-gold mb-4" />
              <h3 className="text-2xl font-serif text-faro-ink mb-3 group-hover:text-faro-gold transition-colors">Terapia Familiar y de Pareja</h3>
              <p className="text-faro-ink/75 font-light leading-relaxed mb-6 text-sm flex-grow">
                Acompañamiento a toda la red (familia, pareja, amigos) para trabajar la comunicación, los límites y el desgaste relacional.
              </p>
              <span className="text-faro-gold font-medium text-xs uppercase tracking-widest flex items-center gap-2">Trabajo vincular y familiar</span>
            </div>

            <div className="p-8 rounded-[2rem] bg-faro-bg-alt/70 border border-faro-olive/30 hover:border-faro-gold/40 hover:shadow-md transition-all flex flex-col group">
              <HeartHandshake size={24} className="text-faro-gold mb-4" />
              <h3 className="text-2xl font-serif text-faro-ink mb-3 group-hover:text-faro-gold transition-colors">Psicodrama</h3>
              <p className="text-faro-ink/75 font-light leading-relaxed mb-6 text-sm flex-grow">
                Dispositivo terapéutico vivencial a través de la acción y la representación dramática para poner en juego emociones, roles y conflictos.
              </p>
              <span className="text-faro-gold font-medium text-xs uppercase tracking-widest flex items-center gap-2">Abordaje vivencial</span>
            </div>

            <div className="p-8 rounded-[2rem] bg-faro-bg-alt/70 border border-faro-olive/30 hover:border-faro-gold/40 hover:shadow-md transition-all flex flex-col group">
              <HeartHandshake size={24} className="text-faro-gold mb-4" />
              <h3 className="text-2xl font-serif text-faro-ink mb-3 group-hover:text-faro-gold transition-colors">Expresión Emotiva (Bonding)</h3>
              <p className="text-faro-ink/75 font-light leading-relaxed mb-6 text-sm flex-grow">
                Talleres enfocados en la liberación de tensiones, la reconexión corporal y el registro profundo del sentir en un entorno cuidado.
              </p>
              <span className="text-faro-gold font-medium text-xs uppercase tracking-widest flex items-center gap-2">Talleres de expresión</span>
            </div>

            <div className="p-8 rounded-[2rem] bg-faro-bg-alt/70 border border-faro-olive/30 hover:border-faro-gold/40 hover:shadow-md transition-all flex flex-col group">
              <Laptop size={24} className="text-faro-gold mb-4" />
              <h3 className="text-2xl font-serif text-faro-ink mb-3 group-hover:text-faro-gold transition-colors">Teatro, Cine, Radio y Podcast</h3>
              <p className="text-faro-ink/75 font-light leading-relaxed mb-6 text-sm flex-grow">
                Talleres artísticos y comunitarios de producción donde poner la voz, crear colectivamente y reconstruir proyectos culturales y sociales.
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
              Nuestra casa en <span className="italic text-faro-gold">Mar del Plata</span>
            </h2>
            <p className="text-faro-ink/80 max-w-2xl mx-auto font-light text-lg">
              Un espacio abierto y cercano en Mar del Plata, pensado para alojar a personas y familias en un entorno sereno de trabajo cotidiano.
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
                  Nuestra sede está ubicada en Garay 2073, en Mar del Plata (Provincia de Buenos Aires, Argentina). Un lugar accesible y tranquilo para llevar adelante actividades terapéuticas, centro de día y talleres.
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
                <h3 className="text-2xl font-serif text-faro-ink mb-4 text-center lg:text-left">Líneas de Atención</h3>
                <p className="text-faro-ink/75 font-light text-sm leading-relaxed text-center lg:text-left">
                  Atención fija al <strong className="font-semibold text-faro-ink">+54 223 4921953</strong> y WhatsApp al <strong className="font-semibold text-faro-ink">+54 9 2235 60-7009</strong>. Puedes contactarnos de lunes a viernes para orientarte o coordinar un primer encuentro.
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
                <h3 className="text-2xl font-serif text-faro-ink mb-4 text-center lg:text-left">Dispositivos No-Residenciales</h3>
                <p className="text-faro-ink/75 font-light text-sm leading-relaxed text-center lg:text-left">
                  Centro de día, centro de mediodía, grupos y talleres que permiten realizar tratamientos intensivos integrados a la vida personal, familiar y comunitaria.
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
                Más de 30 años de <br/><span className="italic text-faro-gold font-light">trayectoria humanista</span>
              </h2>
              <div className="w-12 h-px bg-faro-gold mb-6" />
              <p className="font-serif italic text-2xl md:text-3xl text-faro-gold leading-relaxed max-w-xl mb-8">
                "30 años cerca de vos, de la ciudad y su gente"
              </p>
              <div className="space-y-6 text-faro-ink/80 font-light text-lg leading-relaxed">
                <p>
                  El Faro abre sus puertas en 1993 de la mano de Alejandro García, naciendo como una alternativa pionera al abordaje del consumo problemático en Mar del Plata.
                </p>
                <p>
                  Creemos en el poder de los vínculos y la palabra. Nuestro trabajo no aísla a la persona, sino que involucra a su familia, su pareja y su red para construir proyectos de vida duraderos.
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
                Un modelo humanista transdisciplinario centrado en la persona, los vínculos y la expresión comunitaria.
              </p>
              <Link
                to="/contacto"
                className="inline-flex items-center gap-2 bg-faro-gold text-faro-bg px-8 py-4 rounded-full text-sm font-medium tracking-wide uppercase hover:bg-faro-gold/90 transition-colors"
              >
                Reservar consulta
                <ArrowRight size={16} />
              </Link>
            </div>
            
            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="border-t border-faro-olive/30 pt-6">
                <h3 className="text-xl font-serif text-faro-gold mb-3">Modelo Humanista</h3>
                <p className="text-faro-ink/75 text-sm leading-relaxed font-light">
                  Priorizamos la dignidad de la persona, su voz y su historia, superando visiones punitivas o estigmatizantes.
                </p>
              </div>
              <div className="border-t border-faro-olive/30 pt-6">
                <h3 className="text-xl font-serif text-faro-gold mb-3">Centrados en el Vínculo</h3>
                <p className="text-faro-ink/75 text-sm leading-relaxed font-light">
                  Entendemos que la recuperación se da en relación con los demás: trabajamos activamente con la red afectiva.
                </p>
              </div>
              <div className="border-t border-faro-olive/30 pt-6">
                <h3 className="text-xl font-serif text-faro-gold mb-3">Dispositivos No-Residenciales</h3>
                <p className="text-faro-ink/75 text-sm leading-relaxed font-light">
                  Centro de día, mediodía y psicoterapia que sostienen la intensidad del proceso sin aislar de la vida cotidiana.
                </p>
              </div>
              <div className="border-t border-faro-olive/30 pt-6">
                <h3 className="text-xl font-serif text-faro-gold mb-3">Arte, Expresión y Comunicación</h3>
                <p className="text-faro-ink/75 text-sm leading-relaxed font-light">
                  Psicodrama, bonding, teatro, cine, radio y podcast como herramientas fundamentales de creación y encuentro.
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
              El primer paso es encontrar un espacio de escucha para orientarte y valorar juntos las posibilidades.
            </p>
          </div>

          <AnimatedStepLoop
            steps={[
              {
                number: 1,
                title: '1. Primer contacto',
                description: 'Una llamada al +54 223 4921953 o un mensaje de WhatsApp al +54 9 2235 60-7009 para escuchar tu inquietud.',
                accent: 'olive',
              },
              {
                number: 2,
                title: '2. Primer encuentro',
                description: 'Un espacio presencial en Garay 2073 (Mar del Plata) para alojar la situación y explorar alternativas.',
                accent: 'olive',
              },
              {
                number: 3,
                title: '3. Orientación y Dispositivo',
                description: 'Propuesta terapéutica a medida: psicoterapia, grupos, centro de día, mediodía o acompañamiento familiar.',
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
          <h2 className="text-3xl md:text-4xl font-serif text-faro-ink mb-6">Si esta manera de acompañar te resuena</h2>
          <p className="text-lg text-faro-ink/80 font-light leading-relaxed mb-10 max-w-2xl mx-auto">
            Buscamos ampliar nuestra red de profesionales y colaboradores que compartan nuestra visión del acompañamiento humanista y vincular.
          </p>
          <Link
            to="/contacto"
            className="inline-flex items-center gap-3 bg-faro-gold text-faro-bg px-10 py-5 rounded-full text-sm font-semibold tracking-widest uppercase hover:bg-faro-gold/90 transition-all shadow-sm"
          >
            <Coffee size={20} />
            Tomar un café y charlar
          </Link>
        </div>
      </section>
    </div>
  );
}
