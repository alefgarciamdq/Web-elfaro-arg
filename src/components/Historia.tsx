import { Clock, Heart, Users, MapPin, PhoneCall, Globe } from 'lucide-react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { fadeUp, viewportConfig } from '../utils/animations';
import { CONTACT } from '../data/contact';

export default function Historia() {
  return (
    <div style={{ background: 'var(--crema)' }} className="min-h-screen">
      <Helmet>
        <title>Nuestra Historia | El Faro · Más de 30 años en salud mental and adicciones</title>
        <meta name="description" content="La historia de El Faro: desde Mar del Plata en 1993 hasta Valencia. Más de 30 años acompañando a personas y familias en salud mental, adicciones, arte y comunidad." />
        <link rel="canonical" href="https://programaelfaro.com.ar/historia" />
        <meta property="og:title" content="Nuestra Historia | El Faro · 30 años" />
        <meta property="og:description" content="La historia de El Faro desde Mar del Plata en 1993. Más de 30 años acompañando a personas y familias." />
        <meta property="og:image" content="https://i.postimg.cc/rySbyr08/IMG-3803.jpg" />
      </Helmet>

      {/* Hero */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden" style={{ background: 'var(--azul-suave)' }}>
        <div className="absolute inset-0 z-0">
          <img
            src="https://i.postimg.cc/rySbyr08/IMG-3803.jpg"
            alt="Historia de El Faro"
            className="w-full h-full object-cover blur-[1px] contrast-[0.85] sepia-[.15] saturate-[0.9] opacity-45 mix-blend-multiply"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-sand-light/30 via-sand-light/60 to-offwhite" style={{ background: 'linear-gradient(to bottom, rgba(26, 47, 74, 0.3), rgba(26, 47, 74, 0.6), #faf7f2)' }} />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl mb-6 leading-tight" style={{ fontFamily: 'var(--serif)', color: 'var(--azul-noche)' }}>
              Nuestra <span style={{ fontStyle: 'italic', color: 'var(--azul-cielo)' }}>historia</span>
            </h1>
            <p className="text-xl font-light leading-relaxed mb-10" style={{ color: 'var(--texto-suave)' }}>
              El Faro nace de una historia de más de 30 años en salud mental y adicciones. Un camino que comenzó en Mar del Plata en 1993 y que hoy encuentra también proyección en Valencia, España.
            </p>
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
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24" style={{ background: 'var(--crema)' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative ml-6 md:ml-0 md:border-l-0" style={{ borderColor: 'var(--borde)' }}>

            {/* 1993 */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              className="mb-16 relative pl-10 md:pl-0 md:grid md:grid-cols-2 md:gap-16"
            >
              <div className="absolute left-[-9px] md:left-1/2 md:-ml-[9px] top-2 w-4 h-4 rounded-full border-4 shadow-md z-10" style={{ background: 'var(--azul-cielo)', borderColor: 'var(--crema)' }} />
              <div className="md:text-right md:pr-12">
                <p className="font-medium tracking-wide uppercase text-sm mb-2" style={{ color: 'var(--azul-cielo)' }}>1993</p>
                <h2 className="text-3xl mb-4" style={{ fontFamily: 'var(--serif)', color: 'var(--texto)' }}>El origen en Mar del Plata</h2>
                <div className="space-y-4 font-light leading-relaxed" style={{ color: 'var(--texto-suave)' }}>
                  <p>
                    El Faro abre sus puertas en Mar del Plata de la mano de Alejandro García como una alternativa al consumo problemático de drogas. Inspirado en un modelo humanista, centrado en el vínculo y la persona.
                  </p>
                  <p>
                    Desde el primer día, El Faro no fue solo un centro de tratamiento: fue un lugar en continuo movimiento, donde los espacios terapéuticos convivían con talleres de expresión, teatro y creación.
                  </p>
                </div>
              </div>
              <div className="hidden md:block md:pl-12">
                <img
                  src="https://i.postimg.cc/W4VCwCT3/563018699020179.jpg"
                  alt="Origen El Faro Mar del Plata"
                  className="rounded-2xl object-cover aspect-[4/3] w-full"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>

            {/* Crecimiento */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              className="mb-16 relative pl-10 md:pl-0 md:grid md:grid-cols-2 md:gap-16"
            >
              <div className="absolute left-[-9px] md:left-1/2 md:-ml-[9px] top-2 w-4 h-4 rounded-full border-4 shadow-md z-10" style={{ background: 'var(--azul-cielo)', borderColor: 'var(--crema)' }} />
              <div className="hidden md:block md:pr-12">
                <img
                  src="https://i.postimg.cc/jjh5Wb2K/Adicciones_Valencia_mar_del_plata.jpg"
                  alt="Crecimiento El Faro"
                  className="rounded-2xl object-cover aspect-[4/3] w-full"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="md:pl-12">
                <p className="font-medium tracking-wide uppercase text-sm mb-2" style={{ color: 'var(--azul-cielo)' }}>Los primeros años</p>
                <h2 className="text-3xl mb-4" style={{ fontFamily: 'var(--serif)', color: 'var(--texto)' }}>Innovación y crecimiento</h2>
                <div className="space-y-4 font-light leading-relaxed" style={{ color: 'var(--texto-suave)' }}>
                  <p>
                    El acceso a la formación continua dentro y fuera del país abrió infinitas posibilidades: gestionar diferentes dispositivos terapéuticos para responder a los nuevos paradigmas en torno al consumo y la salud mental.
                  </p>
                  <p>
                    El Faro fue consolidándose como punto de referencia, consulta y tratamiento en adicciones en Mar del Plata, con un enfoque interdisciplinario que integraba psicología, medicina, trabajo social y socioterapia.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Arte y expresión */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              className="mb-16 relative pl-10 md:pl-0 md:grid md:grid-cols-2 md:gap-16"
            >
              <div className="absolute left-[-9px] md:left-1/2 md:-ml-[9px] top-2 w-4 h-4 rounded-full border-4 shadow-md z-10" style={{ background: 'var(--azul-cielo)', borderColor: 'var(--crema)' }} />
              <div className="md:text-right md:pr-12">
                <p className="font-medium tracking-wide uppercase text-sm mb-2" style={{ color: 'var(--azul-cielo)' }}>Identidad</p>
                <h2 className="text-3xl mb-4" style={{ fontFamily: 'var(--serif)', color: 'var(--texto)' }}>Arte, expresión y terapia</h2>
                <div className="space-y-4 font-light leading-relaxed" style={{ color: 'var(--texto-suave)' }}>
                  <p>
                    El rico intercambio entre terapia y arte fue definiendo la identidad del Faro: psicodrama, talleres de expresión emotiva (NIP), teatro, podcast, radio. Espacios donde no solo prima la palabra, sino el cuerpo, la emoción y la creación.
                  </p>
                  <p>
                    Esta mezcla entre lo terapéutico y lo expresivo no es un complemento: es parte constitutiva de lo que El Faro es.
                  </p>
                </div>
              </div>
              <div className="hidden md:block md:pl-12">
                <img
                  src="https://i.postimg.cc/C1rNBHjW/Psicólogo_valencia.jpg"
                  alt="Arte y expresión en El Faro"
                  className="rounded-2xl object-cover aspect-[4/3] w-full"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>

            {/* Expansión España */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              className="mb-16 relative pl-10 md:pl-0 md:grid md:grid-cols-2 md:gap-16"
            >
              <div className="absolute left-[-9px] md:left-1/2 md:-ml-[9px] top-2 w-4 h-4 rounded-full border-4 shadow-md z-10" style={{ background: 'var(--arena)', borderColor: 'var(--crema)' }} />
              <div className="hidden md:block md:pr-12">
                <img
                  src="https://i.postimg.cc/G3fZ8H3C/Mi-faro-valencia-psicologo.png"
                  alt="Mi Faro Valencia España"
                  className="rounded-2xl object-cover aspect-[4/3] w-full"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="md:pl-12">
                <p className="font-medium tracking-wide uppercase text-sm mb-2" style={{ color: 'var(--arena)' }}>Hoy</p>
                <h2 className="text-3xl mb-4" style={{ fontFamily: 'var(--serif)', color: 'var(--texto)' }}>Una raíz, dos territorios</h2>
                <div className="space-y-4 font-light leading-relaxed" style={{ color: 'var(--texto-suave)' }}>
                  <p>
                    Alejandro García se instala en Valencia y abre Mi Faro España: un espacio de orientación psicológica y acompañamiento emocional para personas, parejas y familias, con la misma mirada que define al Faro desde 1993.
                  </p>
                  <p>
                    El Faro en Mar del Plata y Mi Faro en Valencia forman hoy una red institucional con equipo compartido, que viaja regularmente entre Argentina y España.
                  </p>
                </div>
                <div className="mt-6">
                  <Link
                    to="/espana"
                    className="inline-flex items-center gap-2 hover:text-olive-light transition-colors font-medium text-sm"
                    style={{ color: 'var(--azul-cielo)' }}
                  >
                    <Globe size={16} />
                    Ver Mi Faro España
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="py-24" style={{ background: 'var(--azul-suave)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-4" style={{ fontFamily: 'var(--serif)', color: 'var(--texto)' }}>
              Lo que nos <span style={{ fontStyle: 'italic', color: 'var(--azul-cielo)' }}>define</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Heart size={24} />,
                title: 'Humanista y vincular',
                desc: 'El centro del tratamiento es la persona, no la patología. Los vínculos -familiares, afectivos, sociales- son parte del proceso desde el primer momento.',
              },
              {
                icon: <Users size={24} />,
                title: 'Interdisciplinario',
                desc: 'Psicólogos, médico, psiquiatra, trabajador social y profesionales de la socioterapia trabajan de manera integrada en cada proceso.',
              },
              {
                icon: <MapPin size={24} />,
                title: 'Arraigado en la comunidad',
                desc: 'El Faro trabaja con la red: familias, amigos, parejas. El entorno no es ajeno al tratamiento -es parte constitutiva del proceso de recuperación.',
              },
            ].map((v) => (
              <div key={v.title} className="p-8 rounded-[2rem] text-center" style={{ background: 'var(--crema)', borderColor: 'var(--borde)', borderWidth: '1px', borderStyle: 'solid' }}>
                <div className="w-12 h-12 rounded-full flex items-center justify-center mb-6 mx-auto" style={{ background: 'var(--azul-suave)', color: 'var(--azul-cielo)' }}>
                  {v.icon}
                </div>
                <h3 className="text-xl mb-3" style={{ fontFamily: 'var(--serif)', color: 'var(--texto)' }}>{v.title}</h3>
                <p className="font-light text-sm leading-relaxed" style={{ color: 'var(--texto-suave)' }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
