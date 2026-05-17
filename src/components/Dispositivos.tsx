import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Clock, Users, HeartHandshake, Laptop, Home as HomeIcon, PhoneCall, ClipboardList } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { fadeUp, staggerContainer, viewportConfig } from '../utils/animations';

export default function Dispositivos() {
  return (
    <div className="bg-offwhite min-h-screen">
      <Helmet>
        <title>Dispositivos terapéuticos | El Faro · Mar del Plata</title>
        <meta name="description" content="Centro de Día, Centro de Mediodía, tratamiento ambulatorio y acompañamiento online. El Faro ofrece diferentes dispositivos adaptados a cada etapa del proceso." />
        <link rel="canonical" href="https://programaelfaro.com.ar/dispositivos" />
        <meta property="og:title" content="Dispositivos terapéuticos | El Faro Mar del Plata" />
        <meta property="og:description" content="Conocé los dispositivos de El Faro: Centro de Día, Centro de Mediodía, ambulatorio y online." />
        <meta property="og:image" content="https://i.postimg.cc/W4VCwCT3/563018699020179.jpg" />
      </Helmet>

      {/* Hero */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-sand-light">
        <div className="absolute inset-0 z-0">
          <img
            src="https://i.postimg.cc/W4VCwCT3/563018699020179.jpg"
            alt="Dispositivos terapéuticos El Faro"
            className="w-full h-full object-cover blur-[2px] contrast-[0.95] opacity-40 mix-blend-multiply"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-sand-light/30 via-sand-light/60 to-offwhite" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl md:text-7xl font-serif text-ink mb-6 leading-tight">
              Dispositivos<br />
              <span className="italic text-olive">terapéuticos</span>
            </h1>
            <p className="text-xl text-ink-light font-light leading-relaxed mb-10">
              Contamos con diferentes modalidades de tratamiento que se ajustan al nivel de contención necesario en cada etapa. Cada persona necesita un camino propio.
            </p>
            <a
              href="tel:+5492235923790"
              className="inline-flex items-center gap-3 text-ink hover:text-olive transition-colors group"
            >
              <PhoneCall size={24} className="text-olive group-hover:scale-110 transition-transform" />
              <span className="text-xl md:text-2xl font-medium tracking-wider">+54 9 223 592 3790</span>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Dispositivos detail */}
      <section className="py-24 bg-offwhite">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="space-y-12"
          >
            {[
              {
                icon: <HomeIcon size={28} />,
                title: 'Centro de Día',
                badge: 'Mayor contención',
                desc: 'Estructura de mayor contención con una carga horaria de 8 o más horas diarias. Espacios grupales e individuales de lunes a viernes para quienes necesitan un sostén más intensivo en su proceso.',
                items: [
                  'Jornadas estructuradas con acompañamiento profesional',
                  'Talleres de expresión emotiva, teatro, podcast y psicodrama',
                  'Psicoterapia individual y grupal',
                  'Terapia familiar integrada al proceso',
                  'Acompañamiento interdisciplinario',
                ],
                img: 'https://i.postimg.cc/jjh5Wb2K/Adicciones_Valencia_mar_del_plata.jpg',
              },
              {
                icon: <Clock size={28} />,
                title: 'Centro de Mediodía',
                badge: 'Media jornada',
                desc: 'Un espacio de media jornada para quienes pueden sostener responsabilidades de manera sólida en su día a día —actividad laboral, estudio— pero necesitan un apoyo terapéutico estructurado.',
                items: [
                  'Grupos, talleres y seminarios',
                  'Terapia familiar y de pareja',
                  'Psicoterapia individual y grupal',
                  'Actividades de expresión y movimiento',
                ],
                img: 'https://i.postimg.cc/C1rNBHjW/Psicólogo_valencia.jpg',
                reverse: true,
              },
              {
                icon: <Users size={28} />,
                title: 'Tratamiento Ambulatorio',
                badge: 'Post-intensivo o leve',
                desc: 'Para personas que han terminado su tratamiento intensivo o no presentan una problemática compleja. Permite sostener responsabilidades cotidianas mientras se mantiene el proceso terapéutico.',
                items: [
                  'Psicoterapia individual y grupal',
                  'Participación en talleres y actividades',
                  'Seguimiento y acompañamiento continuado',
                  'Orientación familiar',
                ],
                img: 'https://i.postimg.cc/KjK5nkNw/Terapia_online.jpg',
              },
              {
                icon: <Laptop size={28} />,
                title: 'Acompañamiento Online',
                badge: 'A distancia',
                desc: 'Modalidad a distancia para personas y familias que necesitan orientación, seguimiento y herramientas concretas sin importar dónde se encuentren.',
                items: [
                  'Encuentros individuales y familiares',
                  'Orientación y seguimiento',
                  'Herramientas para el día a día',
                  'Para argentinos en el exterior y familiares lejanos',
                ],
                img: 'https://i.postimg.cc/G3fZ8H3C/Mi-faro-valencia-psicologo.png',
                reverse: true,
              },
            ].map((d) => (
              <motion.div
                key={d.title}
                variants={fadeUp}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${d.reverse ? 'lg:[&>*:first-child]:order-2' : ''}`}
              >
                <div>
                  <div className="inline-flex items-center gap-2 text-olive font-medium tracking-wide uppercase text-xs mb-4 bg-olive/10 px-3 py-1.5 rounded-full">
                    {d.badge}
                  </div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-sand-light rounded-full flex items-center justify-center text-olive">
                      {d.icon}
                    </div>
                    <h2 className="text-3xl md:text-4xl font-serif text-ink">{d.title}</h2>
                  </div>
                  <p className="text-ink-light font-light leading-relaxed mb-6">{d.desc}</p>
                  <ul className="space-y-3">
                    {d.items.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-ink-light font-light text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-gold mt-2 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <img
                    src={d.img}
                    alt={d.title}
                    className="rounded-[2rem] shadow-xl object-cover aspect-[4/3] w-full"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-sand-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-serif text-ink mb-6">
            No hace falta saber<br />
            <span className="italic text-olive">por dónde empezar</span>
          </h2>
          <p className="text-ink-light font-light text-lg mb-10">
            Una primera conversación es suficiente. A partir de ahí, pensamos juntos cuál es el camino más adecuado para cada situación.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contacto"
              className="bg-olive text-white px-8 py-4 rounded-full text-sm font-medium tracking-wide uppercase hover:bg-olive-light transition-colors inline-flex items-center justify-center gap-2"
            >
              Solicitar orientación
              <ArrowRight size={16} />
            </Link>
            <a
              href="https://wa.me/5492235923790"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-olive/30 text-olive px-8 py-4 rounded-full text-sm font-medium tracking-wide uppercase hover:bg-olive/5 transition-colors inline-flex items-center justify-center gap-2"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
