import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Moon, 
  Brain, 
  Zap, 
  Utensils, 
  Wine, 
  Users, 
  HelpCircle, 
  PhoneCall, 
  MessageSquare, 
  Heart, 
  ShieldCheck, 
  CheckCircle2, 
  Sparkles,
  MapPin,
  Laptop
} from 'lucide-react';
import { Head } from 'vite-react-ssg';
import JsonLd from './JsonLd';
import { trackCtaClick, trackWhatsAppClick, trackPhoneClick } from '../utils/telemetry';
import { fadeUp, staggerContainer, viewportConfig } from '../utils/animations';

export default function ComoPedirAyudaPsicologiaMarDelPlata() {
  const senales = [
    { icon: <Moon size={24} />, text: "Dormís mal o te despertás durante la noche" },
    { icon: <Brain size={24} />, text: "Te cuesta concentrarte o descansar la cabeza" },
    { icon: <Zap size={24} />, text: "Estás más irritable o con poca paciencia" },
    { icon: <Heart size={24} />, text: "Sentís ansiedad, presión o agotamiento continuo" },
    { icon: <Utensils size={24} />, text: "Cambió tu forma de comer: comés de más o perdiste el apetito" },
    { icon: <Wine size={24} />, text: "Aumentó el consumo de alcohol u otras sustancias" },
    { icon: <Users size={24} />, text: "Se repiten conflictos en la pareja o la familia" },
    { icon: <HelpCircle size={24} />, text: "Te estás aislando o sentís que algo no está bien, aunque no sepas explicarlo" }
  ];

  const faqs = [
    {
      question: "¿Cómo sé si es momento de pedir ayuda?",
      answer: "Es momento cuando el malestar, el cansancio, la irritabilidad o la sensación de que algo no anda bien empiezan a repetirse en tu día a día. No hace falta esperar a una crisis grave ni a que la situación sea insostenible para tener una primera entrevista."
    },
    {
      question: "¿Tengo que tener un diagnóstico?",
      answer: "No. En El Faro trabajamos desde una mirada humanista y singular, no desde rótulos cerrados. No necesitás llegar con un diagnóstico médico ni con un nombre técnico; la consulta sirve justamente para entender qué te está pasando en tu contexto de vida."
    },
    {
      question: "¿Puedo consultar aunque no sepa explicar qué me pasa?",
      answer: "Totalmente. Es lo más habitual. Muchas personas llegan diciendo «no sé bien qué me pasa, pero algo no está bien». La primera entrevista está pensada para darte tiempo, escuchar con calma y ayudarte a ordenar lo que estás viviendo."
    },
    {
      question: "¿Qué pasa en el primer encuentro?",
      answer: "Es una primera entrevista tranquila y cuidada. Escuchamos tu situación, comprendemos el contexto y pensamos juntos cuál es el próximo paso más adecuado, sin derivaciones automáticas."
    },
    {
      question: "¿Puede consultar primero un familiar?",
      answer: "Sí. Gran parte de nuestra tarea en Mar del Plata consiste en orientar a familiares que conviven con el sufrimiento o el consumo problemático de un ser querido. Acompañamos a la red cercana para poner límites sanos y recuperar el equilibrio sin desgastarse."
    },
    {
      question: "¿También trabajan con consumos problemáticos?",
      answer: "Sí. Contamos con un dispositivo ambulatorio especializado en adicciones y consumos problemáticos con más de 30 años de experiencia comunitaria en Mar del Plata, con abordaje integral y sin internación."
    },
    {
      question: "¿Hay espacios online?",
      answer: "Sí. Brindamos atención presencial en nuestra sede de Mar del Plata y disponemos de espacios online individuales y grupales que pueden integrarse al proceso cuando corresponde."
    }
  ];

  return (
    <div className="bg-offwhite min-h-screen text-ink selection:bg-gold/30 selection:text-ink">
      <Head>
        <title>Cuándo pedir ayuda psicológica en Mar del Plata · El Faro Argentina</title>
        <meta 
          name="description" 
          content="No hace falta esperar a una crisis ni tener un diagnóstico para consultar. Orientación psicológica, salud mental y acompañamiento en Mar del Plata." 
        />
        <link rel="canonical" href="https://programaelfaro.com.ar/como-pedir-ayuda-psicologia-mar-del-plata" />
        <meta property="og:title" content="Cuándo pedir ayuda psicológica en Mar del Plata · El Faro Argentina" />
        <meta 
          property="og:description" 
          content="No hace falta tener un diagnóstico ni esperar a una crisis para dar el primer paso. Orientación psicológica y salud mental en Mar del Plata." 
        />
        <meta property="og:url" content="https://programaelfaro.com.ar/como-pedir-ayuda-psicologia-mar-del-plata" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Cuándo pedir ayuda psicológica en Mar del Plata · El Faro Argentina" />
        <meta 
          name="twitter:description" 
          content="Orientación psicológica, salud mental y acompañamiento en Mar del Plata. Primera entrevista para ordenar lo que te pasa." 
        />
      </Head>

      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Orientación y ayuda psicológica en Mar del Plata",
        "description": "Espacio de primera entrevista y orientación psicológica, salud mental y acompañamiento vincular en Mar del Plata.",
        "serviceType": "Orientación psicológica y salud mental",
        "provider": {
          "@type": "Organization",
          "name": "El Faro Argentina",
          "url": "https://programaelfaro.com.ar",
          "telephone": "+54 223 4921953"
        },
        "areaServed": {
          "@type": "City",
          "name": "Mar del Plata"
        },
        "url": "https://programaelfaro.com.ar/como-pedir-ayuda-psicologia-mar-del-plata"
      }} />

      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://programaelfaro.com.ar" },
          { "@type": "ListItem", "position": 2, "name": "Cuándo pedir ayuda", "item": "https://programaelfaro.com.ar/como-pedir-ayuda-psicologia-mar-del-plata" }
        ]
      }} />

      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
          }
        }))
      }} />

      {/* Hero Section */}
      <section className="relative pt-28 pb-20 lg:pt-36 lg:pb-28 overflow-hidden flex items-center min-h-[82vh] bg-sand-light/25">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-olive/10 border border-olive/20 text-olive text-xs font-semibold tracking-widest uppercase mb-6">
                <span className="w-2 h-2 rounded-full bg-olive animate-pulse" />
                El Faro Argentina · Mar del Plata
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-serif text-ink leading-[1.12] mb-6">
                Cuándo pedir ayuda <span className="italic text-olive">psicológica en Mar del Plata</span>
              </h1>

              <div className="space-y-4 mb-8">
                <p className="text-xl sm:text-2xl font-serif italic text-ink/90">
                  «No hace falta tener todo resuelto para venir.»
                </p>
                <p className="text-lg sm:text-xl text-ink-light font-light leading-relaxed max-w-2xl">
                  A veces no hay un diagnóstico ni una crisis evidente. Puede haber insomnio, ansiedad, irritabilidad, agotamiento, cambios en la alimentación, aumento del consumo de alcohol u otras sustancias, conflictos familiares o de pareja, aislamiento, o simplemente la sensación persistente de que algo no está bien.
                </p>
                <p className="text-base text-ink-light/80 font-light">
                  Estas señales no son etiquetas definitivas: son llamados de atención de que necesitás un espacio de escucha donde ponerlo en palabras.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <Link
                  to="/contacto"
                  onClick={() => trackCtaClick('como_pedir_ayuda_hero', 'Hablar con El Faro', '/contacto')}
                  className="inline-flex items-center justify-center gap-3 bg-olive text-white px-8 py-4 rounded-full text-sm font-medium tracking-widest uppercase hover:bg-olive-light transition-all shadow-md group"
                >
                  Hablar con El Faro
                  <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                </Link>

                <a 
                  href="https://wa.me/5492235923790?text=Hola,%20quisiera%20hacer%20una%20consulta%20en%20El%20Faro." 
                  target="_blank" 
                  rel="noopener noreferrer"
                  onClick={() => trackWhatsAppClick('como_pedir_ayuda_hero', 'https://wa.me/5492235923790?text=Hola,%20quisiera%20hacer%20una%20consulta%20en%20El%20Faro.')}
                  className="inline-flex items-center justify-center gap-3 bg-white text-ink border border-sand/40 px-8 py-4 rounded-full text-sm font-medium tracking-widest uppercase hover:bg-sand/20 transition-all font-sans shadow-sm"
                >
                  WhatsApp (+54 9 223 592 3790)
                </a>
              </div>

              <div className="mt-8 flex items-center gap-2 text-sm text-ink-light/70">
                <MapPin size={16} className="text-olive shrink-0" />
                <span>Atención presencial en Mar del Plata y espacios online.</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* No hace falta esperar una crisis */}
      <section className="py-20 bg-sand/10 border-y border-sand/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="space-y-6"
          >
            <span className="text-xs uppercase tracking-widest text-olive font-semibold block">Una mirada anticipatoria</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-ink leading-snug">
              No hace falta esperar a una crisis para consultar
            </h2>
            
            <div className="space-y-5 text-lg sm:text-xl text-ink-light font-light leading-relaxed pt-2">
              <p className="font-serif text-2xl text-ink italic leading-relaxed">
                Muchas personas no llegan diciendo «tengo ansiedad» o «tengo un problema».
              </p>
              <p>
                Llegan diciendo:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-2">
                {[
                  "«No sé bien qué me pasa.»",
                  "«Estoy durmiendo mal.»",
                  "«Me preocupa alguien cercano.»",
                  "«Algo no está bien.»"
                ].map((frase, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-white/70 border border-sand/40 font-serif text-lg text-ink">
                    {frase}
                  </div>
                ))}
              </div>
              <p className="pt-2">
                Una primera entrevista puede servir justamente para eso: para ordenar lo que está pasando, bajar la exigencia de tener todo claro y pensar juntos cómo seguir.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Señales Frecuentes */}
      <section className="py-24 bg-white border-b border-sand/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="text-xs uppercase tracking-widest text-olive font-semibold block mb-3">Auto-observación</span>
            <h2 className="text-3xl sm:text-4xl font-serif text-ink mb-4">
              Señales que pueden indicar que necesitás hablar con alguien
            </h2>
            <p className="text-base text-ink-light font-light">
              Situaciones cotidianas que no siempre implican un cuadro grave, pero sí merecen ser escuchadas a tiempo.
            </p>
            <div className="w-12 h-0.5 bg-olive/40 mx-auto mt-6" />
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {senales.map((item, i) => (
              <motion.div 
                key={i} 
                variants={fadeUp}
                className="bg-sand-light/20 border border-sand/30 p-8 rounded-3xl hover:shadow-sm hover:border-olive/30 transition-all group flex flex-col justify-between"
              >
                <div className="text-olive mb-4 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <p className="text-ink text-base sm:text-lg font-serif leading-snug">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </motion.div>

          <motion.p 
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="text-center mt-12 text-ink-light font-light italic text-base max-w-2xl mx-auto"
          >
            Estas señales no son diagnósticos definitivos. Son indicadores de que algo en tu vida cotidiana o en tus vínculos necesita cuidado y orientación.
          </motion.p>
        </div>
      </section>

      {/* Primer Encuentro: ¿Qué pasa en una primera entrevista? */}
      <section className="py-24 bg-sand/10 border-b border-sand/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <motion.div 
              variants={fadeUp} 
              initial="hidden" 
              whileInView="visible" 
              viewport={viewportConfig}
              className="lg:col-span-7 space-y-6"
            >
              <span className="text-xs uppercase tracking-widest text-olive font-semibold block">Primer paso</span>
              <h2 className="text-3xl sm:text-4xl font-serif text-ink">¿Qué pasa en una primera entrevista?</h2>

              <blockquote className="border-l-2 border-olive/50 pl-4 font-serif text-xl sm:text-2xl italic text-ink py-1">
                «En El Faro no te dejamos solo con lo que te pasa. Escuchamos, ordenamos y juntos pensamos cómo seguir.»
              </blockquote>

              <p className="text-base sm:text-lg text-ink-light font-light leading-relaxed">
                No hace falta llegar sabiendo exactamente qué necesitás ni con un plan estructurado. La primera entrevista es un encuentro tranquilo y cuidado para:
              </p>

              <ul className="space-y-3 text-base text-ink-light font-light">
                {[
                  "Escuchar lo que estás viviendo sin juzgarte.",
                  "Entender el contexto, tu historia y tu momento actual.",
                  "Hacer preguntas que ayuden a clarificar.",
                  "Ordenar la situación y aliviar la sensación de confusión.",
                  "Pensar juntos cuál puede ser el próximo paso más conveniente."
                ].map((paso, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-olive shrink-0 mt-1" />
                    <span>{paso}</span>
                  </li>
                ))}
              </ul>

              <p className="text-sm text-ink-light/80 font-light pt-2">
                No prometemos automáticamente psicoterapia individual. El Faro cuenta con distintos espacios y dispositivos (individuales, de pareja, familiares y comunitarios), y la primera entrevista permite definir con honestidad qué camino se ajusta mejor a tu situación.
              </p>
            </motion.div>

            <motion.div 
              variants={fadeUp} 
              initial="hidden" 
              whileInView="visible" 
              viewport={viewportConfig}
              className="lg:col-span-5 bg-white p-8 sm:p-10 rounded-3xl border border-sand/40 shadow-sm space-y-6"
            >
              <div className="w-12 h-12 rounded-full bg-olive/10 flex items-center justify-center text-olive">
                <MessageSquare size={24} />
              </div>
              <h3 className="font-serif text-2xl text-ink">Podés venir con una duda simple</h3>
              <p className="text-sm text-ink-light font-light leading-relaxed">
                A veces cuesta consultar porque se cree que hay que estar seguro de empezar un tratamiento largo. No es así: una primera entrevista sirve para clarificar y tomar decisiones con libertad.
              </p>
              <div className="pt-2">
                <Link
                  to="/contacto"
                  onClick={() => trackCtaClick('como_pedir_ayuda_pasos', 'Coordinar primera entrevista', '/contacto')}
                  className="inline-flex items-center gap-2 text-sm font-semibold tracking-wider uppercase text-olive hover:text-ink transition-colors border-b border-olive/30 pb-1"
                >
                  Coordinar una primera entrevista
                  <ArrowRight size={16} />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Puertas de Entrada: Quizás llegaste por... */}
      <section className="py-24 bg-offwhite border-b border-sand/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="text-xs uppercase tracking-widest text-olive font-semibold block mb-3">Motivos de consulta</span>
            <h2 className="text-3xl sm:text-4xl font-serif text-ink mb-4">Quizás llegaste por...</h2>
            <p className="text-base text-ink-light font-light">
              Diferentes puntos de partida que encuentran un lugar de orientación en El Faro.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1: Ansiedad y malestar */}
            <Link 
              to="/psicologo-mar-del-plata"
              className="group p-8 bg-white rounded-3xl border border-sand/40 hover:border-olive/40 hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-start mb-4">
                  <span className="text-xs font-semibold uppercase tracking-widest text-olive">Individual</span>
                  <ArrowRight size={18} className="text-olive group-hover:translate-x-1 transition-transform" />
                </div>
                <h3 className="text-2xl font-serif text-ink group-hover:text-olive transition-colors mb-3">
                  Ansiedad y malestar
                </h3>
                <p className="text-ink-light font-light text-sm leading-relaxed">
                  Angustia, sobrecarga mental, miedos, insomnio o la sensación de no poder frenar el ritmo cotidiano.
                </p>
              </div>
              <span className="text-xs font-medium text-olive tracking-wide uppercase mt-6 block">
                Ver psicoterapia en Mar del Plata →
              </span>
            </Link>

            {/* Card 2: Pareja y vínculos */}
            <Link 
              to="/terapia-mar-del-plata"
              className="group p-8 bg-white rounded-3xl border border-sand/40 hover:border-olive/40 hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-start mb-4">
                  <span className="text-xs font-semibold uppercase tracking-widest text-olive">Vínculos</span>
                  <ArrowRight size={18} className="text-olive group-hover:translate-x-1 transition-transform" />
                </div>
                <h3 className="text-2xl font-serif text-ink group-hover:text-olive transition-colors mb-3">
                  Pareja y vínculos
                </h3>
                <p className="text-ink-light font-light text-sm leading-relaxed">
                  Discusiones que se repiten, silencios que distancian o crisis en las que hablar ya no parece alcanzar.
                </p>
              </div>
              <span className="text-xs font-medium text-olive tracking-wide uppercase mt-6 block">
                Ver terapia de pareja y vínculos →
              </span>
            </Link>

            {/* Card 3: Familia */}
            <Link 
              to="/terapia-mar-del-plata"
              className="group p-8 bg-white rounded-3xl border border-sand/40 hover:border-olive/40 hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-start mb-4">
                  <span className="text-xs font-semibold uppercase tracking-widest text-olive">Dinámica</span>
                  <ArrowRight size={18} className="text-olive group-hover:translate-x-1 transition-transform" />
                </div>
                <h3 className="text-2xl font-serif text-ink group-hover:text-olive transition-colors mb-3">
                  Familia y convivencia
                </h3>
                <p className="text-ink-light font-light text-sm leading-relaxed">
                  Conflictos de convivencia, dificultades para poner límites o el desgaste de sostener una situación familiar difícil.
                </p>
              </div>
              <span className="text-xs font-medium text-olive tracking-wide uppercase mt-6 block">
                Ver abordaje familiar →
              </span>
            </Link>

            {/* Card 4: Consumos problemáticos (Enlace fuerte) */}
            <Link 
              to="/adicciones-mar-del-plata"
              className="group p-8 bg-sand-light/40 rounded-3xl border-2 border-olive/30 hover:border-olive hover:shadow-md transition-all flex flex-col justify-between lg:col-span-2"
            >
              <div>
                <div className="flex justify-between items-start mb-4">
                  <span className="text-xs font-semibold uppercase tracking-widest text-olive bg-olive/10 px-2.5 py-1 rounded-full">
                    Dispositivo especializado
                  </span>
                  <ArrowRight size={18} className="text-olive group-hover:translate-x-1 transition-transform" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-serif text-ink group-hover:text-olive transition-colors mb-3">
                  Consumos problemáticos y adicciones
                </h3>
                <p className="text-ink-light font-light text-sm sm:text-base leading-relaxed max-w-2xl">
                  Preocupación por alcohol, sustancias, juego, pantallas o conductas compulsivas. Atención para la persona afectada y orientación específica para sus familiares, sin internación.
                </p>
              </div>
              <span className="text-sm font-semibold text-olive tracking-wide uppercase mt-6 block">
                Ver tratamiento de adicciones en Mar del Plata →
              </span>
            </Link>

            {/* Card 5: Adolescentes */}
            <Link 
              to="/contacto"
              className="group p-8 bg-white rounded-3xl border border-sand/40 hover:border-olive/40 hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-start mb-4">
                  <span className="text-xs font-semibold uppercase tracking-widest text-olive">Etapa vital</span>
                  <ArrowRight size={18} className="text-olive group-hover:translate-x-1 transition-transform" />
                </div>
                <h3 className="text-2xl font-serif text-ink group-hover:text-olive transition-colors mb-3">
                  Adolescentes y jóvenes
                </h3>
                <p className="text-ink-light font-light text-sm leading-relaxed">
                  Cambios bruscos de conducta, aislamiento, desmotivación escolar o dificultades para comunicarse en casa.
                </p>
              </div>
              <span className="text-xs font-medium text-olive tracking-wide uppercase mt-6 block">
                Consultar por orientación →
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Bloque Destacado de Adicciones (Interlinking prioritario) */}
      <section className="py-16 bg-sand-light/50 border-b border-sand/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-12 rounded-3xl bg-white border border-sand shadow-sm flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-3 text-left">
              <span className="text-xs font-semibold tracking-widest uppercase text-olive block">
                Área de consumos y adicciones
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-ink">
                ¿El motivo de consulta está relacionado con consumos?
              </h3>
              <p className="text-sm sm:text-base text-ink-light font-light leading-relaxed max-w-xl">
                Si lo que te preocupa tiene que ver con alcohol, drogas, juego u otras conductas —en vos o en alguien de tu familia—, contamos con un dispositivo ambulatorio pionero en Mar del Plata desde 1993.
              </p>
            </div>
            <Link
              to="/adicciones-mar-del-plata"
              className="inline-flex items-center justify-center gap-2 bg-olive text-white px-7 py-4 rounded-full text-xs font-semibold tracking-widest uppercase hover:bg-olive-light transition-all shadow-md shrink-0 w-full md:w-auto"
            >
              Ver Adicciones en MdP
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Presencial en Mar del Plata + Modalidad Online */}
      <section className="py-24 bg-white border-b border-sand/20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-widest text-olive font-semibold block mb-2">Modalidades</span>
            <h2 className="text-3xl sm:text-4xl font-serif text-ink mb-4">
              Atención presencial en Mar del Plata y espacios online
            </h2>
            <p className="text-base text-ink-light font-light">
              Flexibilidad para que la distancia o los horarios no sean un obstáculo para comenzar.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Presencial */}
            <div className="p-8 sm:p-10 rounded-3xl bg-sand-light/20 border border-sand/40 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-olive/10 flex items-center justify-center text-olive mb-2">
                <MapPin size={24} />
              </div>
              <h3 className="font-serif text-2xl text-ink">Sede Mar del Plata</h3>
              <p className="text-sm sm:text-base text-ink-light font-light leading-relaxed">
                Trabajamos presencialmente en nuestro espacio institucional de Mar del Plata, ubicado en Garay 2073.
              </p>
              <div className="pt-2">
                <a 
                  href="tel:+542234921953"
                  onClick={() => trackPhoneClick('como_pedir_ayuda_presencial', '+542234921953')}
                  className="inline-flex items-center gap-2 text-sm font-medium text-olive hover:text-ink transition-colors"
                >
                  <PhoneCall size={16} />
                  Teléfono: (0223) 492-1953
                </a>
              </div>
            </div>

            {/* Online */}
            <div className="p-8 sm:p-10 rounded-3xl bg-sand-light/20 border border-sand/40 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-olive/10 flex items-center justify-center text-olive mb-2">
                <Laptop size={24} />
              </div>
              <h3 className="font-serif text-2xl text-ink">Espacios online</h3>
              <p className="text-sm sm:text-base text-ink-light font-light leading-relaxed">
                Disponemos de espacios online individuales y grupales que pueden integrarse al proceso cuando corresponde.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-24 bg-sand/10 border-b border-sand/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="text-center mb-16"
          >
            <span className="text-xs uppercase tracking-widest text-olive font-semibold block mb-2">Dudas habituales</span>
            <h2 className="text-3xl sm:text-4xl font-serif text-ink">Preguntas frecuentes</h2>
            <p className="text-ink-light mt-3 text-base font-light">
              Claridad sobre el primer paso y el modo de trabajo en El Faro.
            </p>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.details 
                key={index}
                variants={fadeUp}
                className="group bg-white rounded-2xl border border-sand/40 p-6 open:bg-sand-light/30 transition-all cursor-pointer"
              >
                <summary className="font-serif text-lg sm:text-xl text-ink list-none flex justify-between items-center pr-2">
                  <span className="pr-4">{faq.question}</span>
                  <span className="text-olive group-open:rotate-180 transition-transform shrink-0 font-sans text-sm">▼</span>
                </summary>
                <div className="mt-4 text-ink-light font-light leading-relaxed text-sm sm:text-base pt-2 border-t border-sand/20">
                  {faq.answer}
                </div>
              </motion.details>
            ))}
          </div>
        </div>
      </section>

      {/* Bloque Institucional: Confirmación de Confianza */}
      <section className="py-24 sm:py-28 bg-offwhite border-b border-sand/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="max-w-3xl mb-16 sm:mb-20"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-ink leading-[1.2]">
              Sentirte acompañado importa. Saber quién te acompaña, también.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-14">
            {/* 1. DESDE 1993 */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              className="border-t border-sand/60 pt-6 space-y-4"
            >
              <h3 className="text-xs font-semibold tracking-[0.2em] text-olive uppercase">
                Desde 1993
              </h3>
              <p className="text-sm sm:text-base text-ink-light font-light leading-relaxed">
                Más de tres décadas cerca tuyo, ejerciendo esta vocación junto a personas y familias que atraviesan diferentes problemáticas de salud mental, en Mar del Plata y también desde nuestro espacio en Valencia, España.
              </p>
            </motion.div>

            {/* 2. EQUIPO PROFESIONAL */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              className="border-t border-sand/60 pt-6 space-y-4"
            >
              <h3 className="text-xs font-semibold tracking-[0.2em] text-olive uppercase">
                Equipo profesional
              </h3>
              <p className="text-sm sm:text-base text-ink-light font-light leading-relaxed">
                En El Faro desarrollamos constantemente nuevos escenarios y opciones terapéuticas, acompañando los cambios sociales y los nuevos paradigmas en salud. Es desde ahí que distintas miradas y disciplinas convergen desde una empatía profesional, artística y profundamente humana, acompañándote de manera integral en tu proceso personal.
              </p>
            </motion.div>

            {/* 3. RESPONSABILIDAD Y COMPROMISO */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              className="border-t border-sand/60 pt-6 space-y-4"
            >
              <h3 className="text-xs font-semibold tracking-[0.2em] text-olive uppercase">
                Responsabilidad y compromiso
              </h3>
              <p className="text-sm sm:text-base text-ink-light font-light leading-relaxed">
                El Faro desarrolla su actividad dentro del marco legal establecido por organismos de Salud locales, provinciales y nacionales, y forma parte de organizaciones y redes que trabajan en adicciones, consumos problemáticos y salud mental en todo el territorio nacional.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Final: Cierre Reflexivo */}
      <section className="py-28 bg-ink text-offwhite overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div 
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            <span className="text-xs uppercase tracking-[0.2em] text-sand font-semibold block mb-4">
              El primer paso
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif mb-6 text-offwhite">
              No hace falta tenerlo todo claro.
            </h2>
            <p className="text-lg sm:text-xl text-sand font-light leading-relaxed mb-10 max-w-2xl mx-auto">
              A veces el primer paso no es saber exactamente qué necesitás, sino encontrar un lugar donde poder decir lo que está pasando.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/contacto"
                onClick={() => trackCtaClick('como_pedir_ayuda_final', 'Hablar con El Faro', '/contacto')}
                className="inline-flex items-center justify-center gap-3 bg-olive text-white px-10 py-5 rounded-full text-sm font-medium tracking-widest uppercase hover:bg-olive-light transition-all shadow-lg"
              >
                Hablar con El Faro
                <ArrowRight size={18} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Barra final de contacto rápido */}
      <section className="py-14 bg-sand-light/40 border-t border-sand/30">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-base text-ink mb-1">
            Si sentís que es momento de ordenar lo que pasa, podés escribirnos hoy.
          </p>
          <p className="text-sm text-ink-light font-light mb-6">
            Atención presencial en Mar del Plata y espacios online.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/5492235923790?text=Hola,%20quisiera%20hacer%20una%20consulta%20en%20El%20Faro."
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsAppClick('como_pedir_ayuda_footer', 'https://wa.me/5492235923790?text=Hola,%20quisiera%20hacer%20una%20consulta%20en%20El%20Faro.')}
              className="inline-flex items-center justify-center px-8 py-3.5 bg-olive text-white font-medium rounded-full hover:bg-olive-light transition-colors text-sm tracking-wide uppercase"
            >
              Escribinos por WhatsApp
            </a>

            <a
              href="tel:+542234921953"
              onClick={() => trackPhoneClick('como_pedir_ayuda_footer', '+542234921953')}
              className="inline-flex items-center justify-center px-8 py-3.5 border border-ink/40 text-ink font-medium rounded-full hover:bg-sand/30 transition-colors text-sm tracking-wide uppercase"
            >
              Llamar al (0223) 492-1953
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
