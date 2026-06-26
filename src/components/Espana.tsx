import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, MapPin, Network, PhoneCall, Coffee, Quote } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import JsonLd from './JsonLd';
import { fadeUp, viewportConfig } from '../utils/animations';
import { CONTACT } from '../data/contact';

export default function Espana() {
  return (
    <div style={{ background: 'var(--crema)' }} className="min-h-screen">
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
      <section className="relative pt-12 pb-16 lg:pt-24 lg:pb-24 overflow-hidden flex items-center min-h-[70vh] lg:min-h-[75vh]" style={{ background: 'var(--azul-suave)' }}>
        <div className="absolute inset-0 z-0">
          <img
            src="https://i.postimg.cc/G3fZ8H3C/Mi-faro-valencia-psicologo.png"
            alt=""
            className="w-full h-full object-cover object-[70%_center] opacity-50 mix-blend-multiply grayscale-[0.1]"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1a2f4a]/30 via-[#1a2f4a]/60 to-[#faf7f2]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 font-medium tracking-wide uppercase text-sm mb-6 px-4 py-2 rounded-full" style={{ color: 'var(--azul-cielo)', background: 'var(--azul-suave)' }}>
                <MapPin size={14} />
                Valencia, España
              </div>
              <h1 className="text-6xl md:text-7xl lg:text-8xl leading-[1.1] mb-8" style={{ fontFamily: 'var(--serif)', color: 'var(--azul-noche)' }}>
                Mi Faro en <span style={{ fontStyle: 'italic', color: 'var(--azul-cielo)' }}>Valencia</span>
              </h1>
              <p className="text-xl font-light leading-relaxed mb-8" style={{ color: 'var(--texto-suave)' }}>
                La historia de El Faro encontró proyección en España. Mi Faro Valencia es un espacio de orientación y acompañamiento emocional, con la misma mirada humana y vincular que nos define desde 1993.
              </p>
              <div className="flex flex-wrap gap-4 mb-12">
                <a
                  href="https://mifaro.es"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full text-sm font-medium tracking-widest uppercase hover:bg-olive-light transition-all shadow-md group"
                  style={{ background: 'var(--azul-noche)', color: 'var(--blanco)' }}
                >
                  Visitar mifaro.es
                  <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                </a>
                <div className="flex items-center gap-3 italic text-sm" style={{ color: 'rgba(82, 82, 82, 0.8)' }}>
                  <Coffee size={18} style={{ color: 'var(--azul-cielo)' }} />
                  Presencial y online
                </div>
              </div>
              <div className="space-y-3">
                <a
                  href={CONTACT.phoneESHref}
                  className="inline-flex items-center gap-3 hover:text-olive transition-colors group"
                  style={{ color: 'var(--texto)' }}
                >
                  <PhoneCall size={20} className="group-hover:scale-110 transition-transform" style={{ color: 'var(--azul-cielo)' }} />
                  <span className="text-lg font-medium tracking-wider">{CONTACT.phoneES}</span>
                </a>
                <p className="text-sm font-light" style={{ color: 'var(--texto-suave)' }}>
                  Estamos en Valencia, frente al Jardín de Ayora.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Narrativa */}
      <section className="py-20" style={{ background: 'rgba(201, 184, 154, 0.2)' }}>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <Quote className="mx-auto mb-8" size={48} style={{ color: 'rgba(61, 106, 158, 0.2)' }} />
          <p className="text-2xl md:text-3xl leading-snug mb-8" style={{ fontFamily: 'var(--serif)', color: 'var(--texto)' }}>
            «La apertura de Mi Faro en Valencia suma una nueva dimensión a la historia del Faro: la de un proyecto que, sin perder su raíz, empieza a encontrar también proyección en otros territorios.»
          </p>
          <div className="w-12 h-px mx-auto mb-8" style={{ background: 'var(--azul-noche)' }} />
          <p className="text-lg font-light leading-relaxed" style={{ color: 'var(--texto-suave)' }}>
            En Mi Faro España integramos la escucha psicológica con una mirada vincular y humana. Un lugar para parar, entender mejor lo que está pasando y encontrar un camino posible.
          </p>
        </motion.div>
      </section>

      {/* Servicios Valencia */}
      <section className="py-24" style={{ background: 'var(--crema)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl mb-4" style={{ fontFamily: 'var(--serif)', color: 'var(--texto)' }}>
              Espacios de <span style={{ fontStyle: 'italic', color: 'var(--azul-cielo)' }}>acompañamiento en Valencia</span>
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
              <div key={s.title} className="p-8 rounded-[2rem] hover:shadow-md transition-shadow" style={{ background: 'var(--azul-suave)', borderColor: 'var(--borde)', borderWidth: '1px', borderStyle: 'solid' }}>
                <h3 className="text-xl mb-3" style={{ fontFamily: 'var(--serif)', color: 'var(--texto)' }}>{s.title}</h3>
                <p className="font-light text-sm leading-relaxed" style={{ color: 'var(--texto-suave)' }}>{s.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="https://mifaro.es"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-medium tracking-wide uppercase hover:bg-olive-light transition-colors"
              style={{ background: 'var(--azul-noche)', color: 'var(--blanco)' }}
            >
              Ver el sitio de Mi Faro España
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* Proyección institucional */}
      <section className="py-24" style={{ background: 'var(--azul-noche)', color: 'var(--blanco)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
            >
              <div className="inline-flex items-center gap-2 font-medium tracking-wide uppercase text-sm mb-6" style={{ color: 'var(--arena)' }}>
                <Network size={16} />
                Red El Faro
              </div>
              <h2 className="text-4xl md:text-5xl mb-6" style={{ fontFamily: 'var(--serif)' }}>
                Una misma raíz,<br />
                <span style={{ fontStyle: 'italic', color: 'var(--arena)' }}>dos territorios</span>
              </h2>
              <p className="font-light leading-relaxed text-lg mb-8" style={{ color: 'var(--arena-claro)' }}>
                El Faro en Mar del Plata y Mi Faro en Valencia comparten identidad, historia y equipo. Ale García, fundador del Faro, coordina ambas sedes y viaja regularmente entre Argentina y España.
              </p>
              <p className="font-light leading-relaxed mb-8" style={{ color: 'var(--arena-claro)' }}>
                Si estás en España y necesitás orientación, podés contactar directamente con Mi Faro Valencia. Si estás en Argentina, estamos aquí.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://mifaro.es/contacto"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-medium tracking-wide uppercase hover:bg-gold-light transition-colors"
                  style={{ background: 'var(--arena)', color: 'var(--azul-noche)' }}
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
