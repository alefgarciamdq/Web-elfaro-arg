import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Music, Film, Mic, Theater, Users, HeartHandshake, PhoneCall } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { fadeUp, staggerContainer, viewportConfig } from '../utils/animations';
import { CONTACT } from '../data/contact';

export default function Talleres() {
  return (
    <div className="bg-offwhite min-h-screen">
      <Helmet>
        <title>Talleres y expresión emotiva | El Faro · Mar del Plata</title>
        <meta name="description" content="Psicodrama, talleres de expresión emotiva NIP, teatro, podcast y radio. En El Faro la terapia se cruza con el arte desde 1993." />
        <link rel="canonical" href="https://programaelfaro.com.ar/talleres" />
        <meta property="og:title" content="Talleres y expresión | El Faro Mar del Plata" />
        <meta property="og:description" content="Psicodrama, expresión emotiva, teatro, podcast. En El Faro la terapia se cruza con el arte." />
        <meta property="og:image" content="https://i.postimg.cc/jjh5Wb2K/Adicciones_Valencia_mar_del_plata.jpg" />
      </Helmet>

      {/* Hero */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-sand-light">
        <div className="absolute inset-0 z-0">
          <img
            src="https://i.postimg.cc/jjh5Wb2K/Adicciones_Valencia_mar_del_plata.jpg"
            alt="Talleres El Faro"
            className="w-full h-full object-cover blur-[2px] opacity-40 mix-blend-multiply"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-sand-light/20 via-sand-light/60 to-offwhite" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl md:text-7xl font-serif text-ink mb-6 leading-tight">
              Talleres y<br />
              <span className="italic text-olive">expresión emotiva</span>
            </h1>
            <p className="text-xl text-ink-light font-light leading-relaxed mb-10">
              En El Faro, el encuentro entre la terapia y el arte no es un complemento: es parte de nuestra identidad desde el primer día. El movimiento, la voz, el juego y la creación son caminos de transformación tan válidos como la palabra.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Cita */}
      <section className="py-20 bg-olive text-offwhite">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-2xl md:text-3xl font-serif leading-relaxed mb-6">
            «El rico intercambio que se genera cuando la terapia se cruza con el arte, el movimiento o la expresión emotiva ha dado luz a El Faro cada día.»
          </p>
          <div className="w-12 h-px bg-gold mx-auto" />
        </div>
      </section>

      {/* Talleres */}
      <section className="py-24 bg-offwhite">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {[
              {
                icon: <Theater size={28} />,
                title: 'Psicodrama',
                desc: 'El psicodrama utiliza la acción dramática como herramienta terapéutica. A través de la escenificación de situaciones pasadas, presentes o imaginadas, se trabaja con emociones, vínculos y conflictos de un modo que trasciende la palabra.',
                detail: 'Uno de los pilares históricos de El Faro. Coordinado por profesionales formados específicamente en esta técnica.',
              },
              {
                icon: <HeartHandshake size={28} />,
                title: 'Talleres de Expresión Emotiva (NIP)',
                desc: 'La Terapia de Bonding o NIP (Necesidades, Integración Personal) trabaja con el cuerpo, la emoción y la expresión como vías de acceso a procesos internos que la sola palabra no alcanza a tocar.',
                detail: 'Espacios grupales con dinámica vivencial. Aptos para personas en diferentes etapas del proceso terapéutico.',
              },
              {
                icon: <Theater size={28} />,
                title: 'Talleres de Teatro',
                desc: 'El teatro en El Faro no es un taller recreativo: es un espacio de autoconocimiento, vínculo y presencia. A través del juego dramático, la improvisación y la creación colectiva se trabajan aspectos profundos del mundo interno.',
                detail: 'Coordinado por profesionales con formación actoral y terapéutica.',
              },
              {
                icon: <Mic size={28} />,
                title: 'Podcast y Radio',
                desc: 'El taller de podcast y radio es un espacio de voz, narración y escucha. Participantes producen episodios reales sobre sus experiencias, intereses y visiones del mundo, desarrollando habilidades comunicativas y de autoexpresión.',
                detail: 'Formato de producción real. Los episodios pueden publicarse y compartirse.',
              },
              {
                icon: <Film size={28} />,
                title: 'Taller de Cine',
                desc: 'El cine como lenguaje para entender la condición humana. El taller trabaja desde el visionado y análisis de películas hasta la producción audiovisual propia como herramienta narrativa y expresiva.',
                detail: 'Combina análisis, debate y producción propia.',
              },
              {
                icon: <Users size={28} />,
                title: 'Psicoterapia Grupal',
                desc: 'El grupo terapéutico es uno de los espacios más potentes de El Faro. En el encuentro con otros que también atraviesan situaciones complejas, se trabajan vínculos, emociones y patrones de un modo que la terapia individual no puede reproducir.',
                detail: 'Grupos abiertos y cerrados según etapa del proceso.',
              },
            ].map((t) => (
              <motion.div key={t.title} variants={fadeUp} className="p-8 rounded-[2rem] bg-sand-light border border-sand hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-offwhite rounded-full flex items-center justify-center mb-6 text-olive shadow-sm">
                  {t.icon}
                </div>
                <h3 className="text-2xl font-serif text-ink mb-3">{t.title}</h3>
                <p className="text-ink-light font-light leading-relaxed mb-4 text-sm">{t.desc}</p>
                <p className="text-olive text-xs font-medium italic">{t.detail}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-sand-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-serif text-ink mb-6">
            ¿Querés participar<br />
            <span className="italic text-olive">de algún espacio?</span>
          </h2>
          <p className="text-ink-light font-light text-lg mb-10">
            Algunos talleres son parte del proceso terapéutico. Otros están abiertos a personas que no están en tratamiento. Escribinos y te contamos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contacto"
              className="bg-olive text-white px-8 py-4 rounded-full text-sm font-medium tracking-wide uppercase hover:bg-olive-light transition-colors inline-flex items-center justify-center gap-2"
            >
              Contactar
              <ArrowRight size={16} />
            </Link>
            <a
              href={CONTACT.whatsappAR}
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
