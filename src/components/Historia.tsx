import { Clock, Heart, Users, MapPin, PhoneCall } from 'lucide-react';
import { motion } from 'framer-motion';
import { Head } from 'vite-react-ssg';
import { Link } from 'react-router-dom';
import { fadeUp, viewportConfig } from '../utils/animations';
import { trackPhoneClick } from '../utils/telemetry';
import JsonLd from './JsonLd';

export default function Historia() {
  return (
    <div className="bg-faro-bg text-faro-ink min-h-screen">
      <Head>
        <title>Nuestra Historia · El Faro Argentina · Más de 30 años en Mar del Plata</title>
        <meta name="description" content="La historia de El Faro Argentina: nacidos en Mar del Plata en 1993. Más de 30 años acompañando a personas, parejas y familias en salud mental, adicciones y desarrollo humano." />
        <link rel="canonical" href="https://programaelfaro.com.ar/historia" />
        <meta property="og:title" content="Nuestra Historia · El Faro Argentina · Más de 30 años en Mar del Plata" />
        <meta property="og:description" content="La historia de El Faro Argentina: nacidos en Mar del Plata en 1993. Más de 30 años acompañando a personas, parejas y familias." />
        <meta property="og:image" content="https://res.cloudinary.com/dwv5ehc6e/image/upload/f_auto,q_auto/v1779830162/mifaro/IMG-3803_rySbyr08.jpg" />
        <meta property="og:url" content="https://programaelfaro.com.ar/historia" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Nuestra Historia · El Faro Argentina" />
        <meta name="twitter:description" content="La historia de El Faro Argentina: nacidos en Mar del Plata en 1993. Más de 30 años acompañando a personas y familias." />
        <meta name="twitter:image" content="https://res.cloudinary.com/dwv5ehc6e/image/upload/f_auto,q_auto/v1779830162/mifaro/IMG-3803_rySbyr08.jpg" />
      </Head>

      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "AboutPage",
        "name": "Nuestra Historia · El Faro Argentina",
        "description": "Historia y trayectoria de más de 30 años en Mar del Plata acompañando en salud mental, adicciones y vínculos familiares desde 1993.",
        "url": "https://programaelfaro.com.ar/historia",
        "mainEntity": {
          "@type": "Organization",
          "name": "El Faro Argentina",
          "legalName": "Asociación Civil Arco Baleno",
          "taxID": "30-68558066-3",
          "foundingDate": "1993",
          "url": "https://programaelfaro.com.ar/"
        }
      }} />

      {/* Hero */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-faro-bg-alt/40 border-b border-faro-olive/30">
        <div className="absolute inset-0 z-0">
          <img
            src="https://res.cloudinary.com/dwv5ehc6e/image/upload/f_auto,q_auto/v1779830162/mifaro/IMG-3803_rySbyr08.jpg"
            alt="Nuestra historia en El Faro Argentina"
            className="w-full h-full object-cover opacity-55 mix-blend-luminosity"
            referrerPolicy="no-referrer"
            fetchPriority="high"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-faro-bg/40 via-faro-bg/70 to-faro-bg" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-faro-ink mb-6 leading-tight">
              Nuestra <span className="italic text-faro-gold">historia</span>
            </h1>
            <p className="text-xl text-faro-ink/80 font-light leading-relaxed mb-10">
              El Faro nace de una trayectoria de más de 30 años en Mar del Plata en el campo de las adicciones, el malestar emocional y el acompañamiento vincular. Un recorrido pionero que construyó una alternativa comunitaria y no-residencial centrada en la persona.
            </p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              <a 
                href="tel:+542234921953" 
                onClick={() => trackPhoneClick('historia_hero', '+542234921953')}
                className="inline-flex items-center gap-3 text-faro-ink hover:text-faro-gold transition-colors group"
              >
                <PhoneCall size={20} className="text-faro-gold group-hover:scale-110 transition-transform" />
                <span className="text-lg md:text-xl font-medium tracking-wider">+54 223 4921953</span>
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-faro-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative border-l border-faro-olive/40 ml-6 md:ml-0">
            {/* Event 1 */}
            <motion.div 
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              className="mb-16 relative pl-10 md:pl-0"
            >
              <div className="absolute -left-[45px] md:left-1/2 md:-ml-[20px] top-0 w-10 h-10 rounded-full bg-faro-gold flex items-center justify-center text-faro-bg shadow-md z-10">
                <Clock size={20} />
              </div>
              <div className="md:w-1/2 md:pr-16 md:text-right">
                <h2 className="text-3xl font-serif text-faro-ink mb-2">El origen en Mar del Plata</h2>
                <p className="text-faro-gold font-medium tracking-wide uppercase text-sm mb-4">1993 - 1994</p>
                <div className="space-y-4 text-faro-ink/80 font-light leading-relaxed">
                  <p>
                    En Mar del Plata, Argentina, Alejandro García abrió una puerta pionera junto al equipo inicial.
                  </p>
                  <p>
                    Era, desde el principio, una apuesta poco habitual para su tiempo: la convicción de que una persona que sufre no necesita sólo un diagnóstico o aislamiento, sino un lugar donde pueda ser mirada, escuchada y acompañada desde su red.
                  </p>
                  <p>
                    Así nació El Faro: como un espacio capaz de poner palabras allí donde durante mucho tiempo sólo había silencio o desconcierto.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Event 2 */}
            <motion.div 
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              className="mb-16 relative pl-10 md:pl-0"
            >
              <div className="absolute -left-[45px] md:left-1/2 md:-ml-[20px] top-0 w-10 h-10 rounded-full bg-faro-terra flex items-center justify-center text-white shadow-md z-10">
                <Heart size={20} />
              </div>
              <div className="md:w-1/2 md:ml-auto md:pl-16">
                <h3 className="text-3xl font-serif text-faro-ink mb-2">Cuando el arte entró en escena</h3>
                <p className="text-faro-terra font-medium tracking-wide uppercase text-sm mb-4">Herramientas vivas</p>
                <div className="space-y-4 text-faro-ink/80 font-light leading-relaxed">
                  <p>
                    Muy pronto hubo algo que quedó claro: la palabra, por sí sola, no siempre basta.
                  </p>
                  <p>
                    Hay experiencias que no se ordenan únicamente hablando. Hay cosas que empiezan a moverse cuando el cuerpo se mueve, cuando alguien se atreve a sostener la mirada del otro, cuando una escena permite volver a atravesar la propia historia desde otro lugar.
                  </p>
                  <p>
                    Por eso el teatro y los talleres expresivos llegaron a El Faro como vías centrales de reconexión corporal, emocional y relacional.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Event 3 */}
            <motion.div 
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              className="mb-16 relative pl-10 md:pl-0"
            >
              <div className="absolute -left-[45px] md:left-1/2 md:-ml-[20px] top-0 w-10 h-10 rounded-full bg-faro-gold flex items-center justify-center text-faro-bg shadow-md z-10">
                <Users size={20} />
              </div>
              <div className="md:w-1/2 md:pr-16 md:text-right">
                <h2 className="text-3xl font-serif text-faro-ink mb-2">Consolidación institucional</h2>
                <p className="text-faro-gold font-medium tracking-wide uppercase text-sm mb-4">30 años de trayectoria</p>
                <div className="space-y-4 text-faro-ink/80 font-light leading-relaxed">
                  <p>
                    El Faro no creció solo. Creció con la comunidad de Mar del Plata y su red afectiva.
                  </p>
                  <p>
                    A lo largo de más de tres décadas fue tejiendo una red de relaciones institucionales, formativas y humanas que lo sostienen: centro de día, centro de mediodía, grupos terapéuticos, psicodrama y acompañamiento a familias.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Event 4 */}
            <motion.div 
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              className="relative pl-10 md:pl-0"
            >
              <div className="absolute -left-[45px] md:left-1/2 md:-ml-[20px] top-0 w-10 h-10 rounded-full bg-faro-olive-light flex items-center justify-center text-white shadow-md z-10">
                <MapPin size={20} />
              </div>
              <div className="md:w-1/2 md:ml-auto md:pl-16">
                <h2 className="text-3xl font-serif text-faro-ink mb-2">Nuestra sede en Garay 2073</h2>
                <p className="text-faro-gold font-medium tracking-wide uppercase text-sm mb-4">Mar del Plata</p>
                <div className="space-y-4 text-faro-ink/80 font-light leading-relaxed">
                  <p>
                    Nuestra casa en Mar del Plata es un lugar donde las personas y sus seres queridos encuentran una comunidad abierta de escucha, contención y desarrollo de proyectos de vida.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pregunta de fondo */}
      <section className="py-20 bg-faro-bg-alt/40 border-t border-faro-olive/30">
        <motion.div 
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-serif text-faro-ink mb-8">Una misma pregunta de fondo</h2>
          <p className="text-lg text-faro-ink/80 font-light leading-relaxed mb-6">
            El arte sigue formando parte de esta mirada. La red sigue creciendo. Y la pregunta que dio origen a todo continúa intacta:
          </p>
          <p className="text-2xl md:text-3xl font-serif text-faro-gold italic leading-relaxed">
            cómo acompañar a una persona para que pueda recuperar su voz, su lugar y la posibilidad de empezar de nuevo.
          </p>
        </motion.div>
      </section>

      {/* Identidad */}
      <section className="py-24 bg-faro-bg-alt text-faro-ink border-t border-faro-olive/30 overflow-hidden">
        <motion.div 
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-serif mb-8 text-faro-ink">
            Nuestra <span className="italic text-faro-gold">identidad</span>
          </h2>
          <div className="max-w-3xl mx-auto space-y-6 text-xl text-faro-ink/85 font-light leading-relaxed mb-8">
            <p>
              Entendemos que los momentos de crisis no se atraviesan en soledad.
            </p>
            <p>
              Nuestro compromiso es ofrecer un marco profesional, seguro y profundamente humano donde las personas y sus familias puedan encontrar escucha, orientación y un acompañamiento serio para reconstruir vínculos, ordenar lo que duele y recuperar autonomía.
            </p>
          </div>
          <div className="mt-12 flex flex-wrap justify-center gap-6">
            <Link to="/quienes-lo-hacemos" className="text-faro-gold hover:underline font-medium">Quiénes lo hacemos</Link>
            <Link to="/contacto" className="text-faro-gold hover:underline font-medium">Contacto Mar del Plata</Link>
            <a
              href="https://wa.me/5492235923790?text=Hola,%20quisiera%20hacer%20una%20consulta%20en%20El%20Faro."
              target="_blank"
              rel="noopener noreferrer"
              className="text-faro-gold hover:underline font-medium"
            >
              WhatsApp (+54 9 223 592 3790)
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
