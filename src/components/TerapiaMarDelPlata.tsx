import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Heart, 
  Users, 
  MessageSquare, 
  Compass, 
  HelpCircle, 
  PhoneCall, 
  ShieldCheck, 
  CheckCircle2, 
  Sparkles,
  ChevronDown,
  UserCheck,
  Home as HomeIcon,
  LifeBuoy
} from 'lucide-react';
import { Head } from 'vite-react-ssg';
import JsonLd from './JsonLd';
import FAQBlock from './FAQBlock';
import { trackWhatsAppClick, trackPhoneClick, trackCtaClick } from '../utils/telemetry';
import { fadeUp, staggerContainer, viewportConfig } from '../utils/animations';
import { FAQ } from '../types';

export default function TerapiaMarDelPlata() {
  const situacionesPareja = [
    {
      title: "Discusiones en círculo",
      description: "Conversaciones cotidianas que terminan siempre en reproches cruzados, desacuerdos reiterados o malentendidos difíciles de frenar."
    },
    {
      title: "Silencios y distancia",
      description: "El silencio se volvió la única forma de evitar peleas, pero genera una frialdad y un distanciamiento emocional cada vez mayor."
    },
    {
      title: "Desgaste acumulado",
      description: "Sensación de agotamiento en el vínculo, donde cualquier interacción cotidiana requiere un esfuerzo excesivo y despierta tensión."
    },
    {
      title: "Reproches repetidos",
      description: "Volver una y otra vez sobre situaciones del pasado sin lograr construir acuerdos nuevos ni recuperar la tranquilidad."
    },
    {
      title: "Crianza y convivencia",
      description: "Desacuerdos permanentes en torno a las reglas del hogar, los límites compartidos o la organización de la rutina diaria."
    },
    {
      title: "Pérdida de cercanía",
      description: "Desconexión afectiva o de intimidad, sintiendo que conviven más como compañeros de logística que como una pareja."
    },
    {
      title: "Dudas sobre el futuro",
      description: "Incertidumbre sobre cómo seguir juntos, desgaste del proyecto común o preguntas difíciles acerca de continuar o separarse."
    },
    {
      title: "Momentos de crisis",
      description: "El impacto de una infidelidad, un duelo, un cambio económico o una transición vital profunda que sacudió la confianza mutua."
    }
  ];

  const situacionesFamilia = [
    {
      title: "Discusiones repetidas",
      description: "Tensiones cotidianas que escalan rápidamente y dejan una sensación de frustración o desgaste en todos los integrantes."
    },
    {
      title: "Dificultad para comunicarse",
      description: "Sentir que ya no se puede hablar de ciertos temas en casa sin que alguien se enoje, se cierre o se retire."
    },
    {
      title: "Límites y convivencia",
      description: "Dificultades para sostener pautas claras en el hogar con firmeza y afecto, temiendo romper el lazo o generar más conflicto."
    },
    {
      title: "Padres, madres e hijos",
      description: "Desencuentros intergeneracionales que generan malestar, distancias afectivas o reproches difíciles de canalizar."
    },
    {
      title: "Adolescencia y aislamiento",
      description: "Un hijo o hija que se aísla, cambia repentinamente de conducta o muestra un rechazo que desorienta a los adultos."
    },
    {
      title: "Tensiones por crianza",
      description: "Disparidad de criterios entre los adultos a la hora de educar, acompañar o intervenir frente a situaciones difíciles."
    },
    {
      title: "Separación y familias ensambladas",
      description: "Reorganizar la convivencia y los roles familiares tras una separación o la conformación de nuevas parejas y hogares."
    },
    {
      title: "Duelos y cambios vitales",
      description: "Procesar en familia la pérdida de un ser querido, una enfermedad, mudanzas o crisis socioeconómicas complejas."
    },
    {
      title: "Consumos problemáticos",
      description: "El sufrimiento o la conducta de consumo de un familiar que desborda a la casa entera es una situación que requiere evaluación profesional."
    },
    {
      title: "Centralidad del problema",
      description: "La vivencia agobiante de que toda la vida familiar gira de manera constante alrededor de un único conflicto o preocupación."
    }
  ];

  const faqsTerapia: FAQ[] = [
    {
      question: "¿Cuándo conviene consultar por un problema de pareja?",
      answer: "Conviene consultar cuando las discusiones se vuelven repetitivas, cuando el silencio o la distancia se instalan como forma cotidiana de convivir, o cuando sienten que hablar termina siempre en reproche. No hace falta esperar a que la relación esté al borde de la ruptura; intervenir a tiempo ayuda a evitar que el desgaste y el resentimiento se vuelvan más profundos."
    },
    {
      question: "¿Tenemos que venir los dos?",
      answer: "Lo ideal para un trabajo de pareja es contar con ambas personas cuando sea posible, pero no siempre están los dos listos en el mismo momento. Si uno de los dos todavía no quiere participar, una primera entrevista puede servir para ordenar la situación y pensar cómo seguir trabajando con lo que está pasando."
    },
    {
      question: "¿La terapia de pareja sirve solamente para evitar una separación?",
      answer: "No. El objetivo no es sostener una relación a cualquier precio. A veces el trabajo permite reconstruir acuerdos y formas de comunicación; otras veces ayuda a comprender mejor una decisión de separación y transitarla de una manera más cuidada, especialmente cuando hay hijos."
    },
    {
      question: "¿Qué pasa si uno quiere separarse y el otro no?",
      answer: "Es un motivo de consulta habitual. En estos casos trabajamos para que cada uno pueda expresar qué está pasando, qué necesita y qué decisiones está pudiendo o no pudiendo tomar, sin convertir el espacio en una disputa por quién tiene razón."
    },
    {
      question: "¿Tiene que venir toda la familia?",
      answer: "No necesariamente. La terapia familiar no exige que concurran todos desde el inicio. Con frecuencia el proceso se inicia con los padres, con uno de ellos o con quien siente la urgencia de consultar. Desde ahí se evalúa quiénes y en qué momentos conviene que participen."
    },
    {
      question: "¿Puede empezar una sola persona?",
      answer: "Sí. Muchas consultas familiares o de pareja comienzan porque una persona siente que ya no sabe cómo manejar lo que está pasando. Una primera entrevista permite ordenar esa situación y decidir cómo conviene continuar."
    },
    {
      question: "¿Qué pasa si mi hijo adolescente no quiere venir?",
      answer: "Es frecuente que un adolescente no quiera consultar al comienzo. En esos casos podemos empezar trabajando con los padres o referentes adultos, revisar qué está ocurriendo en casa y pensar cómo abordar la situación sin convertir la consulta en una imposición."
    },
    {
      question: "¿Cómo es la primera entrevista?",
      answer: "Es un espacio tranquilo de escucha y evaluación. Nos encontramos para entender el contexto, conocer qué los trae a consultar y ordenar las prioridades. No es un examen ni se juzga a nadie. Al finalizar, pensamos juntos qué tipo de espacio o dispositivo puede resultar más adecuado para su situación."
    },
    {
      question: "¿Podemos hacer parte del proceso online?",
      answer: "Sí. El Faro trabaja de manera presencial en Mar del Plata y cuenta también con espacios online. Según la situación, se puede evaluar qué modalidad tiene más sentido en cada momento del proceso."
    }
  ];

  return (
    <div className="bg-offwhite min-h-screen text-ink selection:bg-gold/30 selection:text-ink">
      <Head>
        <title>Terapia familiar y de pareja en Mar del Plata | El Faro</title>
        <meta 
          name="description" 
          content="Terapia familiar y de pareja en Mar del Plata. Trabajo profesional sobre vínculos, comunicación, conflictos, límites, crianza y crisis familiares o de pareja." 
        />
        <link rel="canonical" href="https://programaelfaro.com.ar/terapia-mar-del-plata" />
        <meta property="og:title" content="Terapia familiar y de pareja en Mar del Plata | El Faro" />
        <meta 
          property="og:description" 
          content="Terapia familiar y de pareja en Mar del Plata. Trabajo profesional sobre vínculos, comunicación, conflictos, límites, crianza y crisis familiares o de pareja." 
        />
        <meta property="og:url" content="https://programaelfaro.com.ar/terapia-mar-del-plata" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://programaelfaro.com.ar/favicon.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Terapia familiar y de pareja en Mar del Plata | El Faro" />
        <meta 
          name="twitter:description" 
          content="Terapia familiar y de pareja en Mar del Plata. Trabajo profesional sobre vínculos, comunicación, conflictos, límites, crianza y crisis familiares o de pareja." 
        />
        <meta name="twitter:image" content="https://programaelfaro.com.ar/favicon.png" />
      </Head>

      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Terapia familiar y de pareja en Mar del Plata",
        "description": "Terapia familiar y de pareja en Mar del Plata. Trabajo profesional sobre vínculos, comunicación, conflictos, límites, crianza y crisis familiares o de pareja.",
        "serviceType": "Terapia familiar y de pareja",
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
        "url": "https://programaelfaro.com.ar/terapia-mar-del-plata"
      }} />

      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://programaelfaro.com.ar" },
          { "@type": "ListItem", "position": 2, "name": "Terapia familiar y de pareja en Mar del Plata", "item": "https://programaelfaro.com.ar/terapia-mar-del-plata" }
        ]
      }} />

      {/* ========================================================================= */}
      {/* 1. HERO SECTION                                                           */}
      {/* ========================================================================= */}
      <section className="relative pt-28 pb-20 lg:pt-36 lg:pb-28 overflow-hidden bg-sand-light/20 border-b border-sand/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-olive/10 border border-olive/20 text-olive text-xs font-semibold tracking-widest uppercase mb-6">
                <span className="w-2 h-2 rounded-full bg-olive animate-pulse" />
                VÍNCULOS · PAREJA · FAMILIA
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-ink leading-[1.15] mb-6">
                Terapia familiar y de pareja en Mar del Plata
              </h1>

              <p className="text-lg sm:text-xl text-ink-light font-light leading-relaxed mb-8 max-w-2xl">
                Cuando hablar termina siempre igual, cuando la distancia crece o cuando toda la familia empieza a girar alrededor de un conflicto, pedir ayuda puede abrir otra forma de entender lo que está pasando.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  to="/contacto"
                  onClick={() => trackCtaClick('terapia_hero', 'Coordinar primera entrevista', '/contacto')}
                  className="inline-flex items-center justify-center gap-3 bg-olive text-white px-8 py-4 rounded-full text-sm font-medium tracking-widest uppercase hover:bg-olive-light transition-all shadow-md group"
                >
                  Coordinar una primera entrevista
                  <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                </Link>

                <a 
                  href="https://wa.me/5492235923790" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  onClick={() => trackWhatsAppClick('terapia_hero', 'https://wa.me/5492235923790')}
                  className="inline-flex items-center justify-center gap-3 bg-white text-ink border border-sand/40 px-8 py-4 rounded-full text-sm font-medium tracking-widest uppercase hover:bg-sand/20 transition-all font-sans shadow-sm"
                >
                  WhatsApp (+54 9 223 592 3790)
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. DOS PUERTAS DE ENTRADA (BLOQUE EDITORIAL)                              */}
      {/* ========================================================================= */}
      <section className="py-20 lg:py-24 bg-white border-b border-sand/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="text-xs uppercase tracking-widest text-olive font-semibold block mb-3">Punto de partida</span>
            <h2 className="text-3xl sm:text-4xl font-serif text-ink mb-4">
              ¿Dónde sentís que está hoy el conflicto?
            </h2>
            <p className="text-base sm:text-lg text-ink-light font-light leading-relaxed">
              Cada situación tiene su propio cauce. Identificar dónde se concentra el malestar ayuda a orientar el primer paso de consulta.
            </p>
            <div className="w-12 h-0.5 bg-olive/40 mx-auto mt-6" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* Puerta Pareja */}
            <motion.div 
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              className="bg-sand-light/20 border border-sand/30 rounded-3xl p-8 sm:p-10 flex flex-col justify-between hover:border-olive/30 transition-all shadow-sm"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-olive/10 flex items-center justify-center text-olive mb-2">
                  <Heart size={24} />
                </div>
                <span className="text-xs uppercase tracking-widest text-olive font-semibold block">Espacio de Pareja</span>
                <h3 className="font-serif text-2xl sm:text-3xl text-ink">PAREJA</h3>
                <p className="text-base text-ink-light font-light leading-relaxed">
                  Cuando cuesta escucharse, aparecen reproches, silencios, distancia, desgaste o dudas sobre cómo seguir.
                </p>
              </div>

              <div className="pt-8 mt-6 border-t border-sand/30">
                <a 
                  href="#pareja"
                  className="inline-flex items-center gap-2 text-sm font-semibold tracking-wider uppercase text-olive hover:text-ink transition-colors"
                >
                  Explorar el trabajo de pareja
                  <ChevronDown size={16} />
                </a>
              </div>
            </motion.div>

            {/* Puerta Familia */}
            <motion.div 
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              className="bg-sand-light/20 border border-sand/30 rounded-3xl p-8 sm:p-10 flex flex-col justify-between hover:border-olive/30 transition-all shadow-sm"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-olive/10 flex items-center justify-center text-olive mb-2">
                  <Users size={24} />
                </div>
                <span className="text-xs uppercase tracking-widest text-olive font-semibold block">Espacio Familiar</span>
                <h3 className="font-serif text-2xl sm:text-3xl text-ink">FAMILIA</h3>
                <p className="text-base text-ink-light font-light leading-relaxed">
                  Cuando las discusiones, los límites, la crianza, los cambios o un problema particular empiezan a afectar a toda la dinámica familiar.
                </p>
              </div>

              <div className="pt-8 mt-6 border-t border-sand/30">
                <a 
                  href="#familia"
                  className="inline-flex items-center gap-2 text-sm font-semibold tracking-wider uppercase text-olive hover:text-ink transition-colors"
                >
                  Explorar el trabajo familiar
                  <ChevronDown size={16} />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. SECCIÓN PAREJA                                                         */}
      {/* ========================================================================= */}
      <section id="pareja" className="py-24 bg-sand/10 border-b border-sand/20 scroll-mt-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="max-w-3xl mb-16"
          >
            <span className="text-xs uppercase tracking-widest text-olive font-semibold block mb-3">Terapia de pareja en Mar del Plata</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-ink mb-6">
              Cuando el vínculo de pareja empieza a desgastarse
            </h2>
            <p className="text-lg text-ink-light font-light leading-relaxed">
              No todas las crisis significan que una relación terminó. A veces lo que se perdió fue la forma de hablar, de escucharse o de poder decir lo que cada uno necesita sin que todo termine en reproche.
            </p>
          </motion.div>

          {/* Grilla de situaciones de pareja */}
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-14"
          >
            {situacionesPareja.map((item, idx) => (
              <motion.div 
                key={idx}
                variants={fadeUp}
                className="bg-white p-6 sm:p-7 rounded-2xl border border-sand/30 hover:border-olive/30 hover:shadow-sm transition-all flex flex-col justify-between"
              >
                <div>
                  <h3 className="font-serif text-lg sm:text-xl text-ink mb-3">{item.title}</h3>
                  <p className="text-sm text-ink-light font-light leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Idea Central Destacada - Pareja */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="bg-white p-8 sm:p-12 rounded-3xl border border-sand/40 shadow-sm max-w-4xl mx-auto"
          >
            <div className="flex items-start gap-4 mb-4">
              <Sparkles size={24} className="text-olive shrink-0 mt-1" />
              <blockquote className="font-serif text-xl sm:text-2xl text-ink leading-snug">
                «El trabajo de pareja no busca decidir quién tiene razón ni mantener una relación a cualquier precio. Busca entender la dinámica que se instaló, recuperar claridad y construir decisiones más conscientes.»
              </blockquote>
            </div>
            <p className="text-sm sm:text-base text-ink-light font-light leading-relaxed mt-4 pl-10">
              En El Faro acompañamos a parejas que buscan reencontrarse, renovar acuerdos o transitar una separación de manera cuidada, sin juicios ni imposiciones.
            </p>
            <div className="mt-8 pl-10">
              <Link
                to="/contacto"
                onClick={() => trackCtaClick('terapia_pareja_block', 'Coordinar primera entrevista', '/contacto')}
                className="inline-flex items-center gap-2 text-sm font-semibold tracking-wider uppercase text-olive hover:text-ink transition-colors border-b border-olive/30 pb-1"
              >
                Coordinar una primera entrevista de pareja
                <ArrowRight size={16} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. SECCIÓN FAMILIA                                                        */}
      {/* ========================================================================= */}
      <section id="familia" className="py-24 bg-white border-b border-sand/20 scroll-mt-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="max-w-3xl mb-16"
          >
            <span className="text-xs uppercase tracking-widest text-olive font-semibold block mb-3">Terapia familiar en Mar del Plata</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-ink mb-6">
              Cuando el problema empieza a atravesar a toda la familia
            </h2>
            <p className="text-lg text-ink-light font-light leading-relaxed">
              Los conflictos familiares rara vez aparecen de un día para otro. A veces empiezan con pequeñas discusiones, silencios o cambios de conducta y, con el tiempo, toda la familia empieza a organizarse alrededor de eso que preocupa.
            </p>
          </motion.div>

          {/* Grilla de situaciones familiares */}
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14"
          >
            {situacionesFamilia.map((item, idx) => (
              <motion.div 
                key={idx}
                variants={fadeUp}
                className="bg-sand-light/20 p-6 sm:p-7 rounded-2xl border border-sand/30 hover:border-olive/30 hover:shadow-sm transition-all flex flex-col justify-between"
              >
                <div>
                  <h3 className="font-serif text-lg sm:text-xl text-ink mb-3">{item.title}</h3>
                  <p className="text-sm text-ink-light font-light leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Idea Central Destacada - Familia */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="bg-sand/15 p-8 sm:p-12 rounded-3xl border border-sand/40 max-w-4xl mx-auto"
          >
            <div className="flex items-start gap-4 mb-4">
              <HomeIcon size={24} className="text-olive shrink-0 mt-1" />
              <blockquote className="font-serif text-xl sm:text-2xl text-ink leading-snug">
                «El trabajo familiar no busca señalar culpables. Busca comprender qué se repite, qué lugar ocupa cada uno y qué necesita modificarse para que los vínculos puedan funcionar de otra manera.»
              </blockquote>
            </div>
            <p className="text-sm sm:text-base text-ink-light font-light leading-relaxed mt-4 pl-10">
              Ofrecemos un espacio reflexivo y cuidado para revisar la comunicación, ordenar la convivencia y acompañar a padres, madres e hijos en las distintas etapas de la vida familiar.
            </p>
            <div className="mt-8 pl-10">
              <Link
                to="/contacto"
                onClick={() => trackCtaClick('terapia_familia_block', 'Coordinar primera entrevista', '/contacto')}
                className="inline-flex items-center gap-2 text-sm font-semibold tracking-wider uppercase text-olive hover:text-ink transition-colors border-b border-olive/30 pb-1"
              >
                Coordinar una primera entrevista familiar
                <ArrowRight size={16} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. BLOQUE PROPIO DE EL FARO: UNA MIRADA INTEGRAL                           */}
      {/* ========================================================================= */}
      <section className="py-24 bg-sand/10 border-b border-sand/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="space-y-6"
          >
            <span className="text-xs uppercase tracking-widest text-olive font-semibold block mb-2">
              UNA MIRADA INTEGRAL
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-ink">
              No trabajamos con personas aisladas de su historia.
            </h2>
            <div className="w-16 h-0.5 bg-olive/40 mx-auto my-6" />
            <p className="text-base sm:text-lg text-ink-light font-light leading-relaxed max-w-3xl mx-auto">
              Lo que pasa en una pareja o en una familia se construye entre vínculos, momentos vitales, formas de comunicarse y maneras de cuidarse que a veces dejan de funcionar. Por eso miramos la situación completa y no solamente el síntoma o el conflicto que llevó a consultar.
            </p>
            <p className="text-base sm:text-lg text-ink-light font-light leading-relaxed max-w-3xl mx-auto pt-2">
              En el trabajo con parejas y familias buscamos comprender qué situaciones se repiten, cómo se comunican las distintas posiciones, qué acuerdos o límites necesitan revisarse y quiénes conviene que participen en cada momento del proceso.
            </p>
            <p className="text-base sm:text-lg text-ink font-light leading-relaxed max-w-3xl mx-auto pt-2">
              Según cada situación, el proceso puede incluir entrevistas individuales, de pareja, familiares y otros dispositivos de El Faro.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. PRIMERA ENTREVISTA                                                     */}
      {/* ========================================================================= */}
      <section className="py-24 bg-white border-b border-sand/20">
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
              <h2 className="text-3xl sm:text-4xl font-serif text-ink">¿Cómo es una primera entrevista?</h2>

              <p className="text-base sm:text-lg text-ink-light font-light leading-relaxed">
                La primera entrevista sirve para escuchar qué está pasando, ordenar la situación y pensar juntos qué tipo de espacio puede tener sentido.
              </p>

              <ul className="space-y-3 text-base text-ink-light font-light">
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-olive shrink-0 mt-1" />
                  <span>No hace falta que venga toda la familia desde el primer día.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-olive shrink-0 mt-1" />
                  <span>A veces empieza una persona, una pareja, una madre, un padre, un hijo adulto o alguien que siente que ya no sabe cómo seguir sosteniendo la situación.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-olive shrink-0 mt-1" />
                  <span>Escuchamos con calma, sin juzgar y sin derivaciones automáticas.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-olive shrink-0 mt-1" />
                  <span>Definimos con honestidad qué formato de trabajo se adapta mejor a la realidad actual.</span>
                </li>
              </ul>
            </motion.div>

            <motion.div 
              variants={fadeUp} 
              initial="hidden" 
              whileInView="visible" 
              viewport={viewportConfig}
              className="lg:col-span-5 bg-sand-light/20 p-8 sm:p-10 rounded-3xl border border-sand/40 shadow-sm space-y-6"
            >
              <div className="w-12 h-12 rounded-full bg-olive/10 flex items-center justify-center text-olive">
                <MessageSquare size={24} />
              </div>
              <h3 className="font-serif text-2xl text-ink">Espacio de confianza</h3>
              <p className="text-sm text-ink-light font-light leading-relaxed">
                No necesitás llegar con todo resuelto ni con un acuerdo previo entre todos los miembros. Una primera entrevista permite empezar a ordenar el panorama y evaluar posibilidades con total libertad.
              </p>
              <div className="pt-2">
                <Link
                  to="/contacto"
                  onClick={() => trackCtaClick('terapia_pasos', 'Coordinar primera entrevista', '/contacto')}
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

      {/* ========================================================================= */}
      {/* 7. TAMBIÉN PUEDE EMPEZAR UNO SOLO                                         */}
      {/* ========================================================================= */}
      <section className="py-20 bg-sand/10 border-b border-sand/20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="space-y-6"
          >
            <div className="w-12 h-12 rounded-full bg-olive/10 flex items-center justify-center text-olive mx-auto mb-2">
              <UserCheck size={24} />
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif text-ink">
              No hace falta que todos estén de acuerdo para empezar
            </h2>
            <p className="text-base sm:text-lg text-ink-light font-light leading-relaxed">
              A veces uno quiere pedir ayuda y el otro todavía no. Un hijo puede no querer venir. Una pareja puede tener dudas. Eso no significa que no se pueda empezar a entender qué está pasando.
            </p>
            <p className="text-base sm:text-lg text-ink font-light leading-relaxed">
              Una primera entrevista puede ayudar a ordenar la situación y pensar cómo acercar a los demás sin convertir la consulta en una imposición.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 8. PREGUNTAS FRECUENTES (FAQ)                                             */}
      {/* ========================================================================= */}
      <FAQBlock 
        title="Dudas frecuentes sobre terapia de pareja y familiar"
        faqs={faqsTerapia}
      />

      {/* ========================================================================= */}
      {/* 9. NAVEGACIÓN CRUZADA: OTROS ESPACIOS DE EL FARO                          */}
      {/* ========================================================================= */}
      <section className="py-20 bg-sand/10 border-t border-sand/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="text-xs uppercase tracking-widest text-olive font-semibold block mb-2">Otros espacios de El Faro</span>
            <h2 className="text-2xl sm:text-3xl font-serif text-ink">Otros espacios y recursos en El Faro</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { 
                title: "Cómo pedir ayuda", 
                desc: "Primeros pasos y orientación", 
                link: "/como-pedir-ayuda-psicologia-mar-del-plata" 
              },
              { 
                title: "Psicólogo en MdP", 
                desc: "Espacio individual y clínico", 
                link: "/psicologo-mar-del-plata" 
              },
              { 
                title: "Adicciones en MdP", 
                desc: "Abordaje ambulatorio integral", 
                link: "/adicciones-mar-del-plata" 
              },
              { 
                title: "Asociación Civil", 
                desc: "Nuestra historia y marco institucional", 
                link: "/asociacion" 
              }
            ].map((item, i) => (
              <Link 
                key={i} 
                to={item.link}
                className="group p-6 bg-white rounded-2xl border border-sand/30 hover:border-olive/40 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <h3 className="font-serif text-lg text-ink group-hover:text-olive transition-colors mb-1">{item.title}</h3>
                  <p className="text-xs text-ink-light font-light">{item.desc}</p>
                </div>
                <div className="mt-4 flex items-center justify-end text-olive">
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 10. CIERRE FINAL / CTA                                                    */}
      {/* ========================================================================= */}
      <section className="py-28 bg-ink text-offwhite overflow-hidden">
        <motion.div 
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <h2 className="text-3xl sm:text-5xl font-serif mb-6 text-offwhite">
            No hace falta que todos tengan claro qué hacer para empezar.
          </h2>
          <p className="text-lg sm:text-xl text-sand font-light leading-relaxed mb-10 max-w-2xl mx-auto">
            A veces alcanza con que una persona pueda decir: algo en nuestra familia o en nuestra pareja no está funcionando como antes y necesito entender qué está pasando.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/contacto"
              onClick={() => trackCtaClick('terapia_cierre', 'Coordinar primera entrevista', '/contacto')}
              className="inline-flex items-center justify-center gap-3 bg-olive text-white px-10 py-5 rounded-full text-sm font-medium tracking-widest uppercase hover:bg-olive-light transition-all shadow-lg"
            >
              Coordinar una primera entrevista
              <ArrowRight size={18} />
            </Link>

            <a
              href="https://wa.me/5492235923790"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsAppClick('terapia_cierre', 'https://wa.me/5492235923790')}
              className="inline-flex items-center justify-center gap-3 bg-white/10 text-offwhite border border-sand/30 px-10 py-5 rounded-full text-sm font-medium tracking-widest uppercase hover:bg-white/20 transition-all shadow-lg"
            >
              Hablar con El Faro
            </a>
          </div>
        </motion.div>
      </section>

      {/* ========================================================================= */}
      {/* 11. BARRA FINAL DE CONTACTO RÁPIDO                                        */}
      {/* ========================================================================= */}
      <section className="py-14 bg-sand-light/40 border-t border-sand/30">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-base text-ink mb-1">Si llegaste hasta acá, algo te trajo. Dar este paso ya es empezar.</p>
          <p className="text-sm text-ink-light font-light mb-6">Escribinos o llamanos para coordinar una primera entrevista sin compromiso.</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/5492235923790"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsAppClick('terapia_footer', 'https://wa.me/5492235923790')}
              className="inline-flex items-center justify-center px-8 py-3.5 bg-olive text-white font-medium rounded-full hover:bg-olive-light transition-colors text-sm tracking-wide uppercase"
            >
              Escribinos por WhatsApp
            </a>

            <a
              href="tel:+542234921953"
              onClick={() => trackPhoneClick('terapia_footer', '+542234921953')}
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
