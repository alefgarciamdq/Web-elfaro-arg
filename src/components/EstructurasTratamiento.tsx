import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Clock, Users, HeartHandshake, Laptop, Home as HomeIcon, PhoneCall, ClipboardList } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { fadeUp, staggerContainer, viewportConfig } from '../utils/animations';
import { CONTACT } from '../data/contact';

export default function EstructurasTratamiento() {
  return (
    <div style={{ background: 'var(--crema)' }} className="min-h-screen">
      <Helmet>
        <title>Estructuras de tratamiento | El Faro · Mar del Plata</title>
        <meta name="description" content="Estructuras de tratamiento especializadas para salud mental y adicciones en Mar del Plata. Centro de Día, Medio Día y Acompañamiento Ambulatorio." />
        <link rel="canonical" href="https://programaelfaro.com.ar/estructuras-de-tratamiento" />
        <meta property="og:title" content="Estructuras de tratamiento | El Faro Mar del Plata" />
        <meta property="og:description" content="Descubrí nuestras estructuras de tratamiento en Mar del Plata: Centro de Día, Centro de Medio Día, ambulatorio y orientación familiar." />
        <meta property="og:image" content="https://i.postimg.cc/W4VCwCT3/563018699020179.jpg" />
      </Helmet>

      {/* Hero */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden" style={{ background: 'var(--azul-suave)' }}>
        <div className="absolute inset-0 z-0">
          <img
            src="https://i.postimg.cc/W4VCwCT3/563018699020179.jpg"
            alt="Estructuras de tratamiento El Faro"
            className="w-full h-full object-cover blur-[2px] contrast-[0.95] opacity-40 mix-blend-multiply"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-sand-light/30 via-sand-light/60 to-offwhite" style={{ background: 'linear-gradient(to bottom, rgba(26, 47, 74, 0.3), rgba(26, 47, 74, 0.6), #faf7f2)' }} />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl md:text-7xl mb-6 leading-tight" style={{ fontFamily: 'var(--serif)', color: 'var(--azul-noche)' }}>
              Estructuras de<br />
              <span style={{ fontStyle: 'italic', color: 'var(--azul-cielo)' }}>tratamiento</span>
            </h1>
            <p className="text-xl font-light leading-relaxed mb-10" style={{ color: 'var(--texto-suave)' }}>
              Nuestras estructuras clínicas se adaptan a la intensidad y nivel de contención que requiere cada momento de la persona, favoreciendo una integración progresiva y respetuosa con su vida.
            </p>
            <a
              href={CONTACT.phoneARHref}
              className="inline-flex items-center gap-3 hover:text-olive transition-colors group"
              style={{ color: 'var(--texto)' }}
            >
              <PhoneCall size={24} className="group-hover:scale-110 transition-transform" style={{ color: 'var(--azul-cielo)' }} />
              <span className="text-xl md:text-2xl font-medium tracking-wider">{CONTACT.phoneAR}</span>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Dispositivos detail */}
      <section className="py-24" style={{ background: 'var(--crema)' }}>
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
                badge: 'Jornada Completa',
                desc: 'Nuestra estructura de contención intensiva de lunes a viernes, en el horario de 13:00 a 21:00 hs. Una propuesta clínica única que protege el espacio matutino para promover la inserción paulatina y saludable del paciente en su vida diaria.',
                items: [
                  'Acompañamiento y contención clínica diaria',
                  'Talleres expresivos: teatro, radio/podcast, cine debate y clown',
                  'Grupos de psicodrama y terapia grupal',
                  'Psicoterapia individual y abordaje psiquiátrico interdisciplinar',
                  'Terapia e integración de la red vincular y familiar',
                ],
                img: 'https://i.postimg.cc/jjh5Wb2K/Adicciones_Valencia_mar_del_plata.jpg',
              },
              {
                icon: <Clock size={28} />,
                title: 'Centro de Medio Día',
                badge: 'Media Jornada',
                desc: 'Un espacio intermedio de media jornada, pensado para quienes requieren una contención clínica sólida pero pueden sostener de manera activa responsabilidades en su cotidianidad, como el estudio o la actividad laboral.',
                items: [
                  'Abordaje psicoterapéutico adaptado en carga horaria',
                  'Participación en talleres de expresión y movimiento',
                  'Psicoterapia individual y grupal focalizada',
                  'Espacio de orientación familiar y de pareja',
                ],
                img: 'https://i.postimg.cc/C1rNBHjW/Psicólogo_valencia.jpg',
                reverse: true,
              },
              {
                icon: <Users size={28} />,
                title: 'Acompañamiento Ambulatorio',
                badge: 'Baja Intensidad',
                desc: 'Orientado a personas con problemáticas de menor complejidad o en etapas de post-tratamiento avanzado. Permite consolidar la autonomía y los hábitos saludables logrados, manteniendo un anclaje clínico estable.',
                items: [
                  'Grupos de psicoterapia y prevención de recaídas',
                  'Psicoterapia individual continua',
                  'Talleres comunitarios de integración',
                  'Seguimiento de evolución y sostén a largo plazo',
                ],
                img: 'https://i.postimg.cc/KjK5nkNw/Terapia_online.jpg',
              },
              {
                icon: <HeartHandshake size={28} />,
                title: 'Terapia Familiar y de Pareja',
                badge: 'Red Afectiva',
                desc: 'Entendemos que el malestar emocional y las adicciones no ocurren de forma aislada. Toda la red afectiva y vincular se ve impactada y necesita orientación, comprensión y sus propias herramientas de sanación.',
                items: [
                  'Espacios exclusivos para padres, parejas y familiares',
                  'Terapia vincular y de pareja para resolver nudos relacionales',
                  'Grupos de apoyo y reflexión para la red de contención',
                  'Talleres psicoeducativos sobre comunicación y límites',
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
                  <div className="inline-flex items-center gap-2 font-medium tracking-wide uppercase text-xs mb-4 px-3 py-1.5 rounded-full" style={{ color: 'var(--azul-cielo)', background: 'var(--azul-suave)' }}>
                    {d.badge}
                  </div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center text-olive" style={{ background: 'var(--azul-suave)', color: 'var(--azul-cielo)' }}>
                      {d.icon}
                    </div>
                    <h2 className="text-3xl md:text-4xl" style={{ fontFamily: 'var(--serif)', color: 'var(--texto)' }}>{d.title}</h2>
                  </div>
                  <p className="font-light leading-relaxed mb-6" style={{ color: 'var(--texto-suave)' }}>{d.desc}</p>
                  <ul className="space-y-3">
                    {d.items.map((item) => (
                      <li key={item} className="flex items-start gap-3 font-light text-sm" style={{ color: 'var(--texto-suave)' }}>
                        <div className="w-1.5 h-1.5 rounded-full mt-2 shrink-0" style={{ background: 'var(--arena)' }} />
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
      <section className="py-24" style={{ background: 'var(--azul-suave)' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl mb-6" style={{ fontFamily: 'var(--serif)', color: 'var(--texto)' }}>
            No hace falta saber<br />
            <span style={{ fontStyle: 'italic', color: 'var(--azul-cielo)' }}>por dónde empezar</span>
          </h2>
          <p className="font-light text-lg mb-10" style={{ color: 'var(--texto-suave)' }}>
            Una primera conversación es suficiente. A partir de ahí, pensamos juntos cuál es el camino más adecuado para cada situación.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contacto"
              className="px-8 py-4 rounded-full text-sm font-medium tracking-wide uppercase hover:bg-olive-light transition-colors inline-flex items-center justify-center gap-2"
              style={{ background: 'var(--azul-noche)', color: 'var(--blanco)' }}
            >
              Solicitar orientación
              <ArrowRight size={16} />
            </Link>
            <a
              href={CONTACT.whatsappAR}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-olive/30 px-8 py-4 rounded-full text-sm font-medium tracking-wide uppercase hover:bg-olive/5 transition-colors inline-flex items-center justify-center gap-2"
              style={{ color: 'var(--azul-cielo)' }}
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
