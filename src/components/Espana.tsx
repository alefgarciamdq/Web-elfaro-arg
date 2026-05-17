import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, MapPin, Network, PhoneCall, Coffee, Quote } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import JsonLd from './JsonLd';
import { fadeUp, viewportConfig } from '../utils/animations';
import { CONTACT } from '../data/contact';

export default function Espana() {
  return (
    <div className="bg-offwhite min-h-screen">
      <Helmet>
        <title>El Faro en España · Mi Faro Valencia | Orientación y acompañamiento</title>
        <meta name="description" content="La historia de El Faro encontró proyección en Valencia, España. Mi Faro España ofrece orientación psicológica y acompañamiento emocional para personas, parejas y familias." />
        <link rel="canonical" href="https://programaelfaro.com.ar/espana" />
        <meta property="og:title" content="El Faro en España · Mi Faro Valencia" />
        <meta property="og:description" content="Orientación psicológica y acompañamiento emocional en Valencia, España. La misma raíz de 30 años, en un nuevo territorio." />
        <meta property="og:image" content="https://i.postimg.cc/G3fZ8H3C/Mi-faro-valencia-psicologo.png" />
      </Helmet>

      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://programaelfaro.com.ar" },
          { "@type": "ListItem", "position": 2, "name": "España", "item": "https://programaelfaro.com.ar/espana" }
        ]
      }} />

      {/* Hero */}
      <section className="relative pt-12 pb-16 lg:pt-24 lg:pb-24 overflow-hidden flex items-center min-h-[70vh] lg:min-h-[75vh]">
        <div className="absolute inset-0 z-0">
          <img
            src="https://i.postimg.cc/G3fZ8H3C/Mi-faro-valencia-psicologo.png"
            alt=""
            className="w-full h-full object-cover object-[70%_center] opacity-50 mix-blend-multiply grayscale-[0.1]"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-offwhite via-offwhite/80 to-transparent lg:from-offwhite/95 lg:via-offwhite/60" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 text-olive font-medium tracking-wide uppercase text-sm mb-6 bg-olive/10 px-4 py-2 rounded-full">
                <MapPin size={14} />
                Valencia, España
              </div>
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-serif text-ink leading-[1.1] mb-8">
                Mi Faro en <span className="italic text-olive">Valencia</span>
              </h1>
              <p className="text-xl text-ink-light font-light leading-relaxed mb-8">
                La historia de El Faro encontró proyección en España. Mi Faro Valencia es un espacio de orientación y acompañamiento emocional, con la misma mirada humana y vincular que nos define desde 1993.
              </p>
              <div className="flex flex-wrap gap-4 mb-12">
                <a
                  href="https://mifaro.es"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 bg-olive text-white px-8 py-4 rounded-full text-sm font-medium tracking-widest uppercase hover:bg-olive-light transition-all shadow-md group"
                >
                  Visitar mifaro.es
                  <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                </a>
                <div className="flex items-center gap-3 text-ink-light/80 italic text-sm">
                  <Coffee size={18} className="text-olive" />
                  Presencial y online
                </div>
              </div>
              <div className="space-y-3">
                <a
                  href={CONTACT.phoneESHref}
                  className="inline-flex items-center gap-3 text-ink hover:text-olive transition-colors group"
                >
                  <PhoneCall size={20} className="text-olive group-hover:scale-110 transition-transform" />
                  <span className="text-lg font-medium tracking-wider">{CONTACT.phoneES}</span>
                </a>
                <p className="text-sm text-ink-light font-light">
                  Estamos en Valencia, frente al Jardín de Ayora.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Narrativa */}
      <section className="py-20 bg-sand/20">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <Quote className="mx-auto text-olive/20 mb-8" size={48} />
          <p className="text-2xl md:text-3xl font-serif leading-snug mb-8 text-ink">
            «La apertura de Mi Faro en Valencia suma una nueva dimensión a la historia del Faro: la de un proyecto que, sin perder su raíz, empieza a encontrar también proyección en otros territorios.»
          </p>
          <div className="w-12 h-px bg-olive mx-auto mb-8" />
          <p className="text-lg text-ink-light font-light leading-relaxed">
            En Mi Faro España integramos la escucha psicológica con una mirada vincular y humana. Un lugar para parar, entender mejor lo que está pasando y encontrar un camino posible.
          </p>
        </motion.div>
      </section>

      {/* Servicios Valencia */}
      <section className="py-24 bg-offwhite">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif text-ink mb-4">
              Espacios de <span className="italic text-olive">acompañamiento en Valencia</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Orientación individual',
                desc: 'Para personas que sienten que algo no va bien pero no saben cómo nombrarlo. Sin diagnósticos precipitados, sin prisa.',
              },
              {
                title: 'Acompañamiento a familias',
                desc: 'Cuando alguien en la familia atraviesa consumos o malestar emocional, el entorno también necesita orientación y herramientas.',
              },
              {
                title: 'Terapia de pareja',
                desc: 'Un espacio para las dos personas. Para hablar de lo que cuesta hablar en casa, con un tercero que ayude a escucharse mejor.',
              },
              {
                title: 'Adicciones y consumos',
                desc: 'Orientación especializada para personas y familias con consumos problemáticos. Sin etiquetas, con 30 años de experiencia.',
              },
              {
                title: 'Acompañamiento online',
                desc: 'Para personas en España, Argentina o cualquier lugar. La misma calidad de acompañamiento, sin necesidad de presencia física.',
              },
              {
                title: 'Consulta y orientación',
                desc: 'Una primera conversación para entender mejor la situación y ver si hay un camino posible. Sin compromisos.',
              },
            ].map((s) => (
              <div key={s.title} className="p-8 rounded-[2rem] bg-sand-light border border-sand hover:shadow-md transition-shadow">
                <h3 className="text-xl font-serif text-ink mb-3">{s.title}</h3>
                <p className="text-ink-light font-light text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="https://mifaro.es"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-olive text-white px-8 py-4 rounded-full text-sm font-medium tracking-wide uppercase hover:bg-olive-light transition-colors"
            >
              Ver el sitio de Mi Faro España
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* Proyección institucional */}
      <section className="py-24 bg-olive text-offwhite">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
            >
              <div className="inline-flex items-center gap-2 text-gold font-medium tracking-wide uppercase text-sm mb-6">
                <Network size={16} />
                Red El Faro
              </div>
              <h2 className="text-4xl md:text-5xl font-serif mb-6">
                Una misma raíz,<br />
                <span className="italic text-gold">dos territorios</span>
              </h2>
              <p className="text-sand font-light leading-relaxed text-lg mb-8">
                El Faro en Mar del Plata y Mi Faro en Valencia comparten identidad, historia y equipo. Ale García, fundador del Faro, coordina ambas sedes y viaja regularmente entre Argentina y España.
              </p>
              <p className="text-sand font-light leading-relaxed mb-8">
                Si estás en España y necesitás orientación, podés contactar directamente con Mi Faro Valencia. Si estás en Argentina, estamos aquí.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://mifaro.es/contacto"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-gold text-ink px-6 py-3 rounded-full text-sm font-medium tracking-wide uppercase hover:bg-gold-light transition-colors"
                >
                  Contactar Mi Faro Valencia
                  <ArrowRight size={16} />
                </a>
              </div>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
            >
              <img
                src="https://i.postimg.cc/LswM4gxq/file_000000009108720a82938bdcbe45a897_2.jpg"
                alt="Alejandro García - El Faro / Mi Faro"
                className="rounded-[2rem] shadow-2xl object-cover aspect-[3/4] w-full max-w-sm mx-auto"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
