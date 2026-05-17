import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Users, ShieldCheck, MessageCircle, Laptop, Coffee, MapPin, Instagram, Star, PhoneCall, ClipboardList, Clock, HeartHandshake, Network, Quote } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import JsonLd from './JsonLd';
import { blogPosts } from '../data/blogPosts';
import RelatedArticles from './RelatedArticles';
import { fadeUp, staggerContainer, viewportConfig } from '../utils/animations';
import { dispositivosBase } from '../data/dispositivos';
import { CONTACT } from '../data/contact';

export default function Home() {
  return (
    <div className="bg-offwhite">
      <Helmet>
        <title>El Faro | Salud Mental y Adicciones · Mar del Plata</title>
        <meta name="description" content="Más de 30 años acompañando procesos de salud mental y adicciones en Mar del Plata. Centro de Día, ambulatorio, talleres de expresión emotiva, psicodrama y mucho más." />
        <meta property="og:title" content="El Faro | Salud Mental y Adicciones · Mar del Plata" />
        <meta property="og:description" content="Más de 30 años acompañando a personas y familias en Mar del Plata. Un lugar donde el tratamiento se cruza con el arte, el movimiento y la expresión emotiva." />
        <meta property="og:image" content="https://i.postimg.cc/W4VCwCT3/563018699020179.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="El Faro | Salud Mental y Adicciones · Mar del Plata" />
        <meta name="twitter:description" content="Más de 30 años acompañando a personas y familias en salud mental y adicciones en Mar del Plata." />
        <meta name="twitter:image" content="https://i.postimg.cc/W4VCwCT3/563018699020179.jpg" />
        <link rel="canonical" href="https://programaelfaro.com.ar/" />
      </Helmet>
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "El Faro",
        "url": "https://programaelfaro.com.ar"
      }} />
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "El Faro",
        "url": "https://programaelfaro.com.ar",
        "telephone": "+54922359237890",
        "areaServed": { "@type": "City", "name": "Mar del Plata" },
        "logo": "https://i.postimg.cc/mgVHpGR8/IMG-0990.jpg",
        "image": "https://i.postimg.cc/W4VCwCT3/563018699020179.jpg",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Mar del Plata",
          "addressCountry": "AR"
        },
        "sameAs": [
          "https://www.instagram.com/elfaromdq/",
          "https://www.facebook.com/ProgramaElFaro",
          "https://www.instagram.com/alemdq/"
        ]
      }} />

      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 bg-offwhite">
          <div
            className="absolute inset-0 w-full h-full bg-cover bg-center opacity-55 mix-blend-multiply"
            style={{ backgroundImage: "url('https://i.postimg.cc/W4VCwCT3/563018699020179.jpg')" }}
            aria-label="El Faro, acompañamiento en salud mental y adicciones en Mar del Plata"
            role="img"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-offwhite/10 via-offwhite/40 to-offwhite" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-2 text-olive font-medium tracking-wide uppercase text-sm mb-8 bg-olive/10 px-4 py-2 rounded-full backdrop-blur-sm"
          >
            <MapPin size={14} />
            Mar del Plata · Buenos Aires · Argentina
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-5xl md:text-7xl font-serif text-ink mb-10 leading-tight"
          >
            Salud mental y adicciones<br />
            <span className="italic text-olive">en Mar del Plata</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-xl md:text-2xl text-ink-light font-light leading-relaxed mb-12 max-w-2xl mx-auto"
          >
            Desde 1993, acompañamos a personas y familias en procesos vinculados a las adicciones y el malestar emocional. Un lugar en continuo movimiento.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-14"
          >
            <Link
              to="/contacto"
              className="bg-olive text-white px-8 py-4 rounded-full text-sm font-medium tracking-wide uppercase hover:bg-olive-light transition-colors inline-flex items-center justify-center gap-2 shadow-lg"
            >
              Solicitar orientación
              <ArrowRight size={16} />
            </Link>
            <a
              href={CONTACT.whatsappAR}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-offwhite/80 backdrop-blur-sm text-olive border border-olive/20 px-8 py-4 rounded-full text-sm font-medium tracking-wide uppercase hover:bg-sand transition-colors inline-flex items-center justify-center gap-2"
            >
              <MessageCircle size={16} />
              WhatsApp
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 text-ink-light"
          >
            <a href={CONTACT.phoneARHref} className="inline-flex items-center gap-3 hover:text-olive transition-colors group">
              <PhoneCall size={20} className="text-olive group-hover:scale-110 transition-transform" />
              <span className="text-xl font-medium tracking-wider">{CONTACT.phoneAR}</span>
            </a>
            <span className="hidden sm:block text-sand">·</span>
            <a href={CONTACT.phoneESHref} className="inline-flex items-center gap-2 hover:text-olive transition-colors group">
              <PhoneCall size={14} className="text-olive/60 group-hover:scale-110 transition-transform" />
              <span className="text-sm opacity-70">{CONTACT.phoneES} (España)</span>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Cita editorial */}
      <section className="py-20 bg-sand/20">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <Quote className="mx-auto text-olive/20 mb-8" size={48} />
          <p className="text-2xl md:text-3xl font-serif text-ink leading-snug mb-8">
            «El Faro lo hacemos vos, yo, él, nosotros. Lo hacemos en la cotidianidad del acompañarnos, sin juicio, desde una terapéutica profundamente humana, plena de empatía y esperanza.»
          </p>
          <div className="w-12 h-px bg-olive mx-auto mb-6" />
          <p className="text-ink-light font-light">Alejandro García · Fundador · 1993</p>
        </motion.div>
      </section>

      {/* Dispositivos */}
      <section className="py-24 bg-offwhite">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 text-olive font-medium tracking-wide uppercase text-sm mb-6 bg-olive/10 px-4 py-2 rounded-full">
              <ShieldCheck size={14} />
              Dispositivos terapéuticos
            </div>
            <h2 className="text-4xl md:text-5xl font-serif text-ink mb-4">
              Un acompañamiento <span className="italic text-olive">a tu medida</span>
            </h2>
            <p className="text-ink-light max-w-2xl mx-auto font-light text-lg">
              Contamos con diferentes modalidades de tratamiento que se ajustan al nivel de contención necesario en cada etapa.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {dispositivosBase.map((item) => (
              <motion.div key={item.title} variants={fadeUp} className="p-8 rounded-[2rem] bg-sand-light border border-sand hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-offwhite rounded-full flex items-center justify-center mb-6 text-olive shadow-sm">
                  {item.icon}
                </div>
                <h3 className="text-xl font-serif text-ink mb-3">{item.title}</h3>
                <p className="text-ink-light font-light text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          <div className="text-center mt-12">
            <Link
              to="/dispositivos"
              className="inline-flex items-center gap-2 text-olive hover:text-olive-light transition-colors font-medium"
            >
              Ver todos los dispositivos
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Talleres y expresión */}
      <section className="py-24 bg-olive text-offwhite overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
            >
              <div className="inline-flex items-center gap-2 text-gold font-medium tracking-wide uppercase text-sm mb-6">
                <HeartHandshake size={16} />
                Expresión y crecimiento
              </div>
              <h2 className="text-4xl md:text-5xl font-serif mb-6">
                Donde la terapia se<br />
                <span className="italic text-gold">cruza con el arte</span>
              </h2>
              <p className="text-sand font-light leading-relaxed text-lg mb-8">
                En El Faro, los espacios terapéuticos conviven con talleres de expresión emotiva, teatro, psicodrama, podcast y cine. Ese cruce entre terapia y arte es parte de nuestra identidad desde el primer día.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {['Psicodrama', 'Teatro', 'Talleres NIP', 'Podcast / Radio', 'Psicoterapia grupal', 'Terapia familiar'].map((t) => (
                  <div key={t} className="flex items-center gap-2 text-sand text-sm font-light">
                    <div className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                    {t}
                  </div>
                ))}
              </div>
              <Link
                to="/talleres"
                className="inline-flex items-center gap-2 bg-gold text-ink px-6 py-3 rounded-full text-sm font-medium tracking-wide uppercase hover:bg-gold-light transition-colors"
              >
                Ver talleres y espacios
                <ArrowRight size={16} />
              </Link>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
            >
              <img
                src="https://i.postimg.cc/jjh5Wb2K/Adicciones_Valencia_mar_del_plata.jpg"
                alt="Talleres de expresión emotiva en El Faro"
                className="rounded-[2rem] shadow-2xl object-cover aspect-[4/3] w-full"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Familias */}
      <section className="py-24 bg-sand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
            >
              <img
                src="https://i.postimg.cc/C1rNBHjW/Psicólogo_valencia.jpg"
                alt="Orientación a familias en Mar del Plata"
                className="rounded-[2rem] shadow-xl object-cover aspect-[4/3] w-full"
                referrerPolicy="no-referrer"
              />
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
            >
              <div className="inline-flex items-center gap-2 text-olive font-medium tracking-wide uppercase text-sm mb-6 bg-olive/10 px-4 py-2 rounded-full">
                <Users size={14} />
                Pilar fundamental
              </div>
              <h2 className="text-4xl md:text-5xl font-serif text-ink mb-6">
                Trabajar con la<br />
                <span className="italic text-olive">red afectiva</span>
              </h2>
              <p className="text-ink-light font-light leading-relaxed text-lg mb-8">
                Cuando alguien atraviesa consumos problemáticos o una crisis vincular, su entorno también necesita orientación y herramientas. En El Faro trabajamos con familias, parejas y vínculos cercanos desde el primer momento.
              </p>
              <div className="space-y-4">
                <div className="p-5 rounded-2xl bg-offwhite border border-sand">
                  <h4 className="font-serif text-lg text-ink mb-1">Orientación familiar</h4>
                  <p className="text-sm text-ink-light font-light">Para madres, padres, parejas y familiares que necesitan comprender lo que sucede y encontrar una mejor forma de acompañar.</p>
                </div>
                <div className="p-5 rounded-2xl bg-offwhite border border-sand">
                  <h4 className="font-serif text-lg text-ink mb-1">Parejas y vínculos cercanos</h4>
                  <p className="text-sm text-ink-light font-light">Trabajo terapéutico con parejas y red afectiva para abordar conflictos, desgaste y modos de sostenerse sin perderse en el proceso.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonios */}
      <section className="py-24 bg-offwhite">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif text-ink mb-4">
              Voces de <span className="italic text-olive">personas y familias</span>
            </h2>
            <p className="text-ink-light max-w-2xl mx-auto font-light text-lg">
              Experiencias reales de quienes encontraron en El Faro un espacio de orientación, trabajo terapéutico y sostén profesional.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                text: '«Excelente lugar, muy buena atención y contención. Profesionales muy capacitados y humanos. Un espacio donde uno se siente acompañado de verdad.»',
                name: 'María S.', time: 'Hace 2 meses'
              },
              {
                text: '«El Faro nos devolvió la esperanza como familia. El acompañamiento es constante y el equipo tiene un compromiso excepcional.»',
                name: 'Juan P.', time: 'Hace 5 meses'
              },
              {
                text: '«Un lugar lleno de luz y empatía. Agradezco profundamente a todo el equipo por la dedicación y el respeto con el que tratan a cada persona.»',
                name: 'Laura G.', time: 'Hace 8 meses'
              },
            ].map((r) => (
              <div key={r.name} className="p-8 rounded-[2rem] bg-sand-light border border-sand flex flex-col hover:shadow-md transition-shadow">
                <div className="flex gap-1 text-gold mb-6">
                  {[...Array(5)].map((_, i) => <Star key={i} size={18} className="fill-current" />)}
                </div>
                <p className="text-ink-light font-light leading-relaxed mb-8 flex-grow italic">{r.text}</p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-olive/20 flex items-center justify-center text-olive font-serif text-lg">
                    {r.name[0]}
                  </div>
                  <div>
                    <p className="font-medium text-ink text-sm">{r.name}</p>
                    <p className="text-xs text-ink-light">{r.time}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cómo empezar */}
      <section className="py-24 bg-sand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif text-ink mb-4">
              Cómo empezar <span className="italic text-olive">un proceso</span>
            </h2>
            <p className="text-ink-light max-w-2xl mx-auto font-light text-lg">
              A veces el primer paso no es tenerlo todo claro, sino encontrar un espacio para parar y entender mejor lo que está pasando.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-px bg-gold z-0" />
            {[
              { icon: <PhoneCall size={32} />, title: '1. Primer contacto', desc: 'Una primera conversación por teléfono, WhatsApp o formulario. Puede iniciarla la propia persona, su pareja o alguien de la familia.' },
              { icon: <ClipboardList size={32} />, title: '2. Primer encuentro', desc: 'Un espacio para comprender lo que está ocurriendo, ordenar la situación y explorar cuáles pueden ser los siguientes pasos.' },
              { icon: <Clock size={32} />, title: '3. Orientación y camino', desc: 'Pensamos juntos la forma de acompañamiento más adecuada: individual, familiar, ambulatorio o centro de día.' },
            ].map((s) => (
              <div key={s.title} className="relative z-10 flex flex-col items-center text-center">
                <div className="w-24 h-24 bg-offwhite rounded-full flex items-center justify-center mb-6 text-olive shadow-md border-4 border-sand-light">
                  {s.icon}
                </div>
                <h3 className="text-2xl font-serif text-ink mb-3">{s.title}</h3>
                <p className="text-ink-light font-light text-sm">{s.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link
              to="/contacto"
              className="bg-ink text-white px-8 py-4 rounded-full text-sm tracking-wide uppercase hover:bg-ink-light transition-colors inline-flex items-center gap-2"
            >
              Solicitar orientación
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Proyección España */}
      <section className="py-24 bg-offwhite border-t border-sand">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
            >
              <div className="inline-flex items-center gap-2 text-olive font-medium tracking-wide uppercase text-sm mb-6 bg-olive/10 px-4 py-2 rounded-full">
                <Network size={14} />
                Red institucional
              </div>
              <h2 className="text-4xl md:text-5xl font-serif text-ink mb-6">
                El Faro también<br />
                <span className="italic text-olive">está en Valencia</span>
              </h2>
              <p className="text-ink-light font-light leading-relaxed text-lg mb-8">
                La historia de El Faro encontró proyección en Valencia, España. Mi Faro España nace de la misma raíz: orientación psicológica y acompañamiento emocional para personas, parejas y familias, desde una mirada humana y vincular.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/espana"
                  className="inline-flex items-center gap-2 bg-olive text-white px-6 py-3 rounded-full text-sm font-medium tracking-wide uppercase hover:bg-olive-light transition-colors"
                >
                  Mi Faro Valencia
                  <ArrowRight size={16} />
                </Link>
                <a
                  href="https://mifaro.es"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-olive/30 text-olive px-6 py-3 rounded-full text-sm font-medium tracking-wide uppercase hover:bg-olive/5 transition-colors"
                >
                  mifaro.es →
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
                src="https://i.postimg.cc/G3fZ8H3C/Mi-faro-valencia-psicologo.png"
                alt="Mi Faro Valencia España"
                className="rounded-[2rem] shadow-xl object-cover aspect-[4/3] w-full"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Cita institucional */}
      <section className="py-32 bg-sand-light border-t border-sand">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-12 h-px bg-olive mx-auto mb-10" />
          <p className="text-2xl md:text-3xl font-serif text-ink leading-relaxed">
            Desde hace 30 años hemos ido evolucionando y aprendiendo juntos, en un camino de acompañar a través de la palabra, el cuerpo, la emoción y la vocación que estimula día a día nuestra esperanza <span className="italic text-olive">y la de ya miles de familias a lo largo de nuestra historia.</span>
          </p>
          <div className="w-12 h-px bg-olive mx-auto mt-10" />
        </div>
      </section>

      {/* Blog */}
      {blogPosts.length > 0 && (
        <section className="py-24 bg-offwhite">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-serif text-ink mb-4">
                Lecturas del <span className="italic text-olive">Faro</span>
              </h2>
              <p className="text-ink-light max-w-2xl mx-auto font-light text-lg">
                Reflexiones y recursos sobre salud mental, adicciones y vínculos.
              </p>
            </div>
            <RelatedArticles posts={blogPosts.slice(0, 3)} />
            <div className="text-center mt-12">
              <Link
                to="/recursos"
                className="inline-flex items-center gap-2 text-olive hover:text-olive-light transition-colors font-medium"
              >
                Ver todos los artículos
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
