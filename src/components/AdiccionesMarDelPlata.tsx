import React from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  MessageSquare, 
  ShieldCheck, 
  Compass, 
  Users, 
  PhoneCall, 
  Sparkles
} from 'lucide-react';
import { Head } from 'vite-react-ssg';
import JsonLd from './JsonLd';
import FAQBlock from './FAQBlock';
import { trackWhatsAppClick, trackPhoneClick, trackCtaClick } from '../utils/telemetry';
import { fadeUp, staggerContainer, viewportConfig } from '../utils/animations';
import { FAQ, Situacion } from '../types';

function StatCounter({ 
  value, 
  decimals = 1, 
  duration = 1000 
}: { 
  value: number; 
  decimals?: number; 
  duration?: number; 
}) {
  const formattedTarget = value.toFixed(decimals).replace('.', ',');
  const [displayValue, setDisplayValue] = React.useState<string>(formattedTarget);
  const ref = React.useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const shouldReduceMotion = useReducedMotion();
  const hasAnimated = React.useRef(false);

  React.useEffect(() => {
    if (!isInView || shouldReduceMotion || hasAnimated.current) return;
    hasAnimated.current = true;

    let startTimestamp: number | null = null;
    const startValue = 0;
    const endValue = value;
    let animationFrameId: number;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      const current = startValue + (endValue - startValue) * easeProgress;
      setDisplayValue(current.toFixed(decimals).replace('.', ','));

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(step);
      } else {
        setDisplayValue(formattedTarget);
      }
    };

    animationFrameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isInView, value, decimals, duration, shouldReduceMotion, formattedTarget]);

  return (
    <span ref={ref}>
      {displayValue}
    </span>
  );
}

export default function AdiccionesMarDelPlata() {
  const situacionesAdicciones: Situacion[] = [
    { 
      title: "Desborde", 
      description: "Sentir que el consumo de sustancias o ciertas conductas ocupan gran parte de los pensamientos cotidianos." 
    },
    { 
      title: "Intentos", 
      description: "Haber intentado frenar o regular la conducta en varias oportunidades sin lograr sostenerlo en el tiempo." 
    },
    { 
      title: "Vínculos", 
      description: "Notar que la pareja, la familia o los lazos más cercanos se desgastan por el secreto, la discusión o la distancia." 
    },
    { 
      title: "Consecuencias", 
      description: "Aparición de dificultades en el trabajo, el estudio, la salud física o la economía personal." 
    }
  ];

  const faqsAdicciones: FAQ[] = [
    {
      question: "¿Cuándo conviene pedir ayuda por un consumo?",
      answer: "Conviene consultar cuando una sustancia o conducta empieza a ocupar demasiado espacio mental, genera conflictos en los vínculos o interfiere en tu día a día. No hace falta tocar fondo ni esperar a una situación límite; la orientación a tiempo permite ordenar el malestar antes de que el costo sea mayor."
    },
    {
      question: "¿También atienden y orientan a familiares?",
      answer: "Sí, de manera central. Gran parte de nuestra tarea en Mar del Plata consiste en acompañar a familiares y parejas que conviven con una situación de consumo. Ayudamos a entender qué está pasando, cómo poner límites sanos y cómo sostener el equilibrio sin desgastarse."
    },
    {
      question: "¿Qué pasa si la persona que consume no quiere pedir ayuda?",
      answer: "Es una situación sumamente frecuente. En esos casos empezamos trabajando con la familia o el entorno cercano. Modificar la dinámica relacional y el modo de posicionarse suele abrir preguntas y, en muchas ocasiones, motiva a la persona a buscar su propio espacio de escucha."
    },
    {
      question: "¿La atención es presencial en Mar del Plata o también online?",
      answer: "Brindamos atención presencial en nuestro espacio de Mar del Plata para entrevistas individuales y grupales. Asimismo, contamos con modalidad online para quienes se encuentran en otras localidades o requieren mayor flexibilidad horaria."
    }
  ];

  return (
    <div className="bg-[#111613] text-[#DDD8CD] font-sans selection:bg-[#D4AF37]/30 selection:text-[#F6F2EA] min-h-screen">
      <Head>
        <title>Tratamiento de adicciones en Mar del Plata · El Faro Argentina</title>
        <meta 
          name="description" 
          content="Orientación y tratamiento en adicciones y consumos problemáticos en Mar del Plata. Abordaje humanista, ambulatorio y familiar. Más de 30 años de experiencia comunitaria." 
        />
        <link rel="canonical" href="https://programaelfaro.com.ar/adicciones-mar-del-plata" />
        <meta property="og:title" content="Tratamiento de adicciones en Mar del Plata · El Faro Argentina" />
        <meta 
          property="og:description" 
          content="Orientación y tratamiento en adicciones y consumos problemáticos en Mar del Plata. Abordaje humanista, ambulatorio y familiar sin internación." 
        />
        <meta property="og:url" content="https://programaelfaro.com.ar/adicciones-mar-del-plata" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://res.cloudinary.com/dwv5ehc6e/image/upload/f_auto,q_auto/mifaro/hero-hombre-faro-atlantico" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Tratamiento de adicciones en Mar del Plata · El Faro Argentina" />
        <meta 
          name="twitter:description" 
          content="Orientación y acompañamiento ante consumos problemáticos en Mar del Plata. Atención ambulatoria y familiar." 
        />
        <meta name="twitter:image" content="https://res.cloudinary.com/dwv5ehc6e/image/upload/f_auto,q_auto/mifaro/hero-hombre-faro-atlantico" />
      </Head>

      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Tratamiento de adicciones y consumos problemáticos en Mar del Plata",
        "description": "Acompañamiento, orientación y abordaje ambulatorio para personas y familias ante consumos problemáticos en Mar del Plata.",
        "serviceType": "Tratamiento de adicciones y acompañamiento familiar",
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
        "url": "https://programaelfaro.com.ar/adicciones-mar-del-plata"
      }} />

      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://programaelfaro.com.ar" },
          { "@type": "ListItem", "position": 2, "name": "Adicciones en Mar del Plata", "item": "https://programaelfaro.com.ar/adicciones-mar-del-plata" }
        ]
      }} />

      {/* ── 1. HERO FOTOGRÁFICO INMERSIVO ── */}
      <section className="relative min-h-[85vh] lg:min-h-[92vh] flex items-center overflow-hidden bg-[#111613]">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://res.cloudinary.com/dwv5ehc6e/image/upload/f_auto,q_auto/mifaro/hero-hombre-faro-atlantico" 
            alt="Espacio terapéutico y horizonte del mar en Mar del Plata" 
            width={1600}
            height={900}
            className="w-full h-full object-cover object-[center_35%] lg:object-[center_28%] opacity-50 filter contrast-[1.05]"
            fetchPriority="high"
            decoding="async"
          />
          {/* Overlays de integración profunda: Fotografía → Fondo Carbón */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#111613] via-[#111613]/90 to-[#111613]/40 lg:from-[#111613] lg:via-[#111613]/85 lg:to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#141A15] via-transparent to-[#111613]/60" />
          <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-[#141A15] via-[#141A15]/80 to-transparent" />
        </div>

        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10 w-full pt-32 pb-24 lg:pt-40 lg:pb-32">
          <div className="max-w-3xl lg:max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[#D4AF37] text-xs font-semibold tracking-widest uppercase mb-8 backdrop-blur-sm">
                <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse" />
                El Faro Argentina · Mar del Plata · Desde 1993
              </div>

              <h1 className="text-4xl sm:text-6xl lg:text-7xl xl:text-[5rem] font-serif text-[#F6F2EA] leading-[1.08] mb-8 tracking-tight">
                Orientación y tratamiento en <span className="italic text-[#D4AF37]">adicciones</span> y consumos problemáticos
              </h1>

              <p className="text-lg sm:text-xl lg:text-2xl text-[#C8C4BB] font-light leading-relaxed mb-10 max-w-2xl">
                No hace falta tocar fondo para empezar a salir. Si te encontrás ante la duda de buscar apoyo o de cuándo dar el primer paso, ofrecemos un espacio de escucha y orientación profesional para personas y familias en Mar del Plata.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <Link
                  to="/contacto"
                  className="inline-flex items-center justify-center gap-3 bg-[#D4AF37] text-[#111613] px-9 py-4 rounded-full text-sm font-semibold tracking-wider uppercase hover:bg-[#E5C358] transition-all shadow-xl group"
                >
                  Pedir orientación
                  <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                </Link>

                <a 
                  href="https://wa.me/5492235923790?text=Hola,%20quisiera%20hacer%20una%20consulta%20en%20El%20Faro." 
                  target="_blank" 
                  rel="noopener noreferrer"
                  onClick={() => trackWhatsAppClick('adicciones_hero', 'https://wa.me/5492235923790?text=Hola,%20quisiera%20hacer%20una%20consulta%20en%20El%20Faro.')}
                  className="inline-flex items-center justify-center gap-3 bg-white/10 hover:bg-white/15 text-[#F6F2EA] border border-white/20 px-8 py-4 rounded-full text-sm font-medium tracking-widest uppercase transition-all backdrop-blur-sm"
                >
                  WhatsApp (+54 9 223 592 3790)
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 2. NARRATIVA EDITORIAL / CITA ── */}
      <section className="py-20 bg-[#141A15] text-[#DDD8CD] border-y border-white/10">
        <motion.div 
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <MessageSquare className="mx-auto text-[#D4AF37]/40 mb-6" size={42} />
          <blockquote className="text-2xl sm:text-3xl md:text-4xl font-serif leading-snug text-[#F6F2EA] mb-4">
            «La adicción es un síntoma de un malestar mayor, es un intento potente de decir lo que aún no se sabe pero se siente.»
          </blockquote>
          <p className="text-sm sm:text-base font-serif italic text-[#D4AF37] mb-8">
            Ale García
          </p>
          <p className="text-xl sm:text-2xl md:text-3xl font-serif leading-snug text-[#F6F2EA] mb-8">
            «No buscamos solo abstinencia. En el centro de tu tratamiento estás vos: buscamos que recuperes tu vida, tus vínculos, tu libertad…»
          </p>
          <div className="w-16 h-0.5 bg-[#D4AF37]/30 mx-auto mb-8" />
          <p className="text-base sm:text-lg text-[#C8C4BB] font-light leading-relaxed max-w-3xl mx-auto">
            En El Faro entendemos que el consumo problemático siempre está ligado a una historia singular y a una red de afectos. Por eso, además del proceso individual, acompañamos a las familias para recomponer el diálogo y desarticular el desgaste. Nuestro trabajo en Mar del Plata se apoya en una trayectoria comunitaria pionera que prioriza la palabra, el lazo social y salidas posibles que no aíslen a la persona de su vida cotidiana.
          </p>
        </motion.div>
      </section>

      {/* ── 3. SITUACIONES FRECUENTES ── */}
      <section className="py-24 bg-[#111613] border-b border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="bg-white/[0.03] border border-white/10 rounded-[2.5rem] p-8 md:p-14"
          >
            <h2 className="text-3xl font-serif text-[#F6F2EA] mb-12 text-center md:text-left">Cuándo conviene consultar</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
              {situacionesAdicciones.map((situacion, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="mt-2 w-1.5 h-1.5 rounded-full bg-[#D4AF37] shrink-0" />
                  <div>
                    <h3 className="text-lg font-serif text-[#F6F2EA] mb-2">{situacion.title}</h3>
                    <p className="text-[#C8C4BB] font-light text-sm leading-relaxed">
                      {situacion.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── 4. BLOQUE EDITORIAL: DATOS OFICIALES Y EXPERIENCIA COMPARTIDA ── */}
      <section className="py-24 sm:py-28 bg-[#141A15] border-b border-white/10">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="max-w-3xl mb-16 sm:mb-20"
          >
            <span className="text-xs uppercase tracking-[0.2em] text-[#D4AF37] font-semibold block mb-3">
              Experiencia compartida
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#F6F2EA] leading-[1.2]">
              Cuando algo empieza a preocuparte, hacer algo también puede empezar de a poco.
            </h2>
          </motion.div>

          {/* Secuencia narrativa en tres momentos */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-14 relative">
            {/* Momento 1: Preocupación */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              className="border-t border-white/10 pt-8 space-y-4 flex flex-col justify-between"
            >
              <div>
                <span className="text-xs font-semibold tracking-[0.2em] text-[#D4AF37]/90 uppercase block mb-3">
                  01 · Preocupación propia
                </span>
                <div className="font-serif text-5xl sm:text-6xl text-[#F6F2EA] tracking-tight mb-4 flex items-baseline">
                  <StatCounter value={5.9} decimals={1} />
                  <span className="text-3xl sm:text-4xl text-[#D4AF37] font-serif ml-1">%</span>
                </div>
                <p className="text-sm sm:text-base text-[#C8C4BB] font-light leading-relaxed">
                  De las personas que consumieron alguna sustancia durante el último año, este porcentaje manifestó sentir preocupación por su propia forma de consumir.
                </p>
              </div>
              <p className="text-xs text-[#9E988D] font-light italic pt-2">
                Preocuparse no equivale a tener un diagnóstico ni una dependencia: es una primera señal interna de que algo merece ser escuchado.
              </p>
            </motion.div>

            {/* Momento 2: Acción */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              className="border-t border-white/10 pt-8 space-y-4 flex flex-col justify-between"
            >
              <div>
                <span className="text-xs font-semibold tracking-[0.2em] text-[#D4AF37]/90 uppercase block mb-3">
                  02 · Intento de actuar
                </span>
                <div className="font-serif text-5xl sm:text-6xl text-[#F6F2EA] tracking-tight mb-4 flex items-baseline">
                  <StatCounter value={69.4} decimals={1} />
                  <span className="text-3xl sm:text-4xl text-[#D4AF37] font-serif ml-1">%</span>
                </div>
                <p className="text-sm sm:text-base text-[#C8C4BB] font-light leading-relaxed">
                  Entre quienes manifestaron sentir esa preocupación, casi 7 de cada 10 intentaron realizar alguna acción concreta al respecto.
                </p>
              </div>
              <p className="text-xs text-[#9E988D] font-light italic pt-2">
                La preocupación no suele quedarse inmóvil: la gran mayoría de las personas intenta modificar hábitos, cuidarse o buscar alternativas.
              </p>
            </motion.div>

            {/* Momento 3: Dar el siguiente paso */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              className="border-t border-white/10 pt-8 space-y-5 flex flex-col justify-between"
            >
              <div>
                <span className="text-xs font-semibold tracking-[0.2em] text-[#D4AF37]/90 uppercase block mb-3">
                  03 · Dar el siguiente paso
                </span>

                {/* 22,6% Red afectiva */}
                <div className="pt-1 pb-4">
                  <div className="flex items-baseline gap-2 mb-1.5">
                    <span className="font-serif text-2xl sm:text-3xl text-[#F6F2EA] font-normal">
                      <StatCounter value={22.6} decimals={1} />
                      <span className="text-lg text-[#D4AF37] ml-0.5">%</span>
                    </span>
                    <span className="text-xs font-medium text-[#C8C4BB] uppercase tracking-wider">
                      Red afectiva
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#C8C4BB] font-light leading-relaxed">
                    Hablar con alguien cercano puede ser una forma de empezar a poner en palabras lo que preocupa.
                  </p>
                </div>

                {/* 20,4% Institución o profesional */}
                <div className="p-5 rounded-2xl bg-white/[0.04] border border-[#D4AF37]/30 space-y-2">
                  <div className="flex items-baseline gap-2.5">
                    <div className="font-serif text-3xl sm:text-4xl text-[#F6F2EA] tracking-tight flex items-baseline">
                      <StatCounter value={20.4} decimals={1} />
                      <span className="text-xl sm:text-2xl text-[#D4AF37] font-serif ml-0.5">%</span>
                    </div>
                    <span className="text-xs font-semibold text-[#F6F2EA] uppercase tracking-wider">
                      Institución o profesional
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#C8C4BB] font-light leading-relaxed">
                    Cuando la preocupación persiste, se repite o empieza a afectar tu vida, una consulta profesional permite ordenar lo que está pasando y pensar qué hacer a partir de ahí.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Cierre del bloque + CTA */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="mt-14 pt-8 sm:pt-10 border-t border-white/10 max-w-3xl space-y-6"
          >
            <p className="font-serif text-xl sm:text-2xl text-[#F6F2EA] italic leading-relaxed">
              «No necesitás saber si es una adicción antes de consultar. Podemos empezar por entender juntos qué está pasando.»
            </p>
            <div>
              <Link
                to="/contacto"
                onClick={() => trackCtaClick('adicciones_datos', 'Hablar con El Faro', '/contacto')}
                className="inline-flex items-center justify-center gap-3 bg-[#D4AF37] text-[#111613] px-8 py-4 rounded-full text-sm font-semibold tracking-wider uppercase hover:bg-[#E5C358] transition-all shadow-md group"
              >
                Hablar con El Faro
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </motion.div>

          {/* Fuente visible */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="mt-10 pt-6 border-t border-white/10"
          >
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-[#C8C4BB]">
              <span className="font-medium text-[#F6F2EA]/80">Fuente oficial:</span>
              <a
                href="https://www.indec.gob.ar/ftp/cuadros/sociedad/encoprac_2022.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#D4AF37] hover:text-[#F6F2EA] underline decoration-[#D4AF37]/40 hover:decoration-[#F6F2EA] transition-colors inline-flex items-center gap-1 group"
              >
                ENCoPraC 2022 · INDEC · Observatorio Argentino de Drogas / SEDRONAR
                <span className="text-[10px] inline-block transition-transform group-hover:translate-x-0.5">↗</span>
              </a>
            </div>

            <p className="mt-3 text-[11px] sm:text-xs text-[#9E988D] font-light leading-relaxed max-w-2xl">
              Trabajamos con información de organismos oficiales y publicaciones académicas, utilizando las fuentes más recientes disponibles para cada territorio. Cuando presentamos un antecedente local, indicamos su año y alcance para que cada dato pueda leerse en su contexto.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── 5. DISPOSITIVO INTEGRAL — IMAGEN 1: GRUPO DE APOYO Y SOSTÉN ── */}
      <section className="py-24 lg:py-32 bg-[#111613] text-[#DDD8CD] border-b border-white/10">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Fotografía Documental 1: Gran Escala (58% del layout en desktop) */}
            <motion.div 
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              className="lg:col-span-7 relative overflow-hidden rounded-3xl lg:rounded-[2.5rem] bg-[#141A15] border border-white/10 shadow-2xl group"
            >
              <img 
                src="/adicciones/adicciones-grupo-apoyo-el-faro.png" 
                alt="Grupo de apoyo, acompañamiento y proceso terapéutico en El Faro Mar del Plata" 
                width={1024}
                height={1536}
                className="w-full h-full object-cover object-[center_25%] max-h-[620px] lg:max-h-[720px] filter contrast-[1.04]"
                loading="lazy"
                decoding="async"
              />
              {/* Overlays de integración: la fotografía se funde con el fondo carbón/verde */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#111613] via-[#111613]/30 to-transparent opacity-90 pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#111613]/40 via-transparent to-[#111613]/50 pointer-events-none" />
              <div className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8 sm:right-8 text-[#F6F2EA] pointer-events-none">
                <span className="text-xs uppercase tracking-[0.2em] text-[#D4AF37] font-semibold block mb-2">
                  Tratamiento ambulatorio · Mar del Plata
                </span>
                <p className="font-serif text-xl sm:text-2xl lg:text-3xl text-[#F6F2EA] leading-snug max-w-lg">
                  Construir la recuperación en el entorno real de la persona.
                </p>
              </div>
            </motion.div>

            {/* Columna de Texto Editorial */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              className="lg:col-span-5 space-y-8"
            >
              <div>
                <span className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold block mb-3">
                  Enfoque clínico y humano
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#F6F2EA] leading-tight mb-4">
                  Un tratamiento construido alrededor de cada persona
                </h2>
                <p className="text-base sm:text-lg text-[#C8C4BB] font-light leading-relaxed">
                  En El Faro trabajamos con un abordaje ambulatorio que integra distintos espacios y dispositivos según cada situación. El proceso se construye junto a la persona, con un equipo profesional y con la participación de su familia y su red cuando es necesario.
                </p>
              </div>

              <div className="space-y-6">
                {[
                  { 
                    icon: <Compass size={22} />, 
                    title: "Un proceso con rumbo", 
                    text: "Evaluamos cada situación y construimos un recorrido posible, con objetivos progresivos y espacios de trabajo acordes a cada momento del proceso." 
                  },
                  { 
                    icon: <Users size={22} />, 
                    title: "Espacios individuales, grupales y familiares", 
                    text: "El tratamiento puede integrar entrevistas individuales, grupos terapéuticos y espacios con familiares y personas significativas, articulados como parte de un mismo proceso." 
                  },
                  { 
                    icon: <ShieldCheck size={22} />, 
                    title: "Un equipo que acompaña el proceso", 
                    text: "Distintas miradas profesionales trabajan de manera articulada para comprender cada situación, revisar lo que va ocurriendo y ajustar el recorrido cuando sea necesario." 
                  }
                ].map((item, i) => (
                  <div key={i} className="flex gap-5">
                    <div className="mt-1 text-[#D4AF37] bg-white/5 border border-white/10 p-3 rounded-2xl h-fit shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-serif text-xl text-[#F6F2EA] mb-1">{item.title}</h3>
                      <p className="text-[#C8C4BB] font-light text-sm leading-relaxed">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Transición natural hacia lo online y el intercambio */}
              <div className="pt-6 border-t border-white/10 bg-white/[0.03] p-6 rounded-2xl">
                <p className="text-base text-[#DDD8CD] leading-relaxed font-light">
                  Cada proceso puede combinar distintos espacios a lo largo del tiempo. La intensidad, la frecuencia y los dispositivos se van definiendo según la situación y el momento de cada persona.
                </p>
                <p className="text-base text-[#DDD8CD] leading-relaxed font-light mt-2">
                  El trabajo se realiza de manera presencial en nuestra sede de Mar del Plata y se integra también con espacios online, tanto individuales como grupales.
                </p>
                <p className="text-sm font-medium text-[#D4AF37] tracking-wide uppercase mt-4 flex items-center gap-2">
                  Y a veces, lo online nos permite algo más.
                  <ArrowRight size={16} />
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 6. MOMENTO CINEMATOGRÁFICO DE GRAN ESCALA — IMAGEN 3: COMUNIDAD FRENTE AL MAR ── */}
      <section className="py-20 lg:py-32 bg-[#111613] text-[#DDD8CD] overflow-hidden border-b border-white/10">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="max-w-4xl mx-auto text-center mb-10 sm:mb-14"
          >
            <span className="text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-semibold block mb-3">
              Comunidad y pertenencia
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#F6F2EA] leading-tight mb-4">
              Nadie se recupera en soledad
            </h2>
            <p className="text-base sm:text-lg text-[#C8C4BB] font-light max-w-2xl mx-auto leading-relaxed">
              El lazo con otros, el encuentro y la pertenencia son el corazón de nuestro abordaje en Mar del Plata.
            </p>
          </motion.div>

          {/* Composición Panorámica de Gran Escala */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="relative w-full overflow-hidden rounded-2xl lg:rounded-3xl border border-white/10 shadow-2xl bg-[#0D110E]"
          >
            <img 
              src="/adicciones/adicciones-comunidad-mar-del-plata.jpg" 
              alt="Comunidad terapéutica de El Faro tomada de las manos frente al mar en Mar del Plata" 
              width={2038}
              height={578}
              className="w-full h-auto object-cover max-h-[520px] lg:max-h-[620px] filter contrast-[1.08] brightness-[0.98]"
              loading="lazy"
              decoding="async"
            />
            {/* Fundido lateral y perimetral profundo */}
            <div className="absolute inset-y-0 left-0 w-24 sm:w-36 lg:w-48 bg-gradient-to-r from-[#111613] via-[#111613]/70 to-transparent pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-24 sm:w-36 lg:w-48 bg-gradient-to-l from-[#111613] via-[#111613]/70 to-transparent pointer-events-none" />
            <div className="absolute inset-x-0 top-0 h-16 sm:h-24 bg-gradient-to-b from-[#111613] via-[#111613]/50 to-transparent pointer-events-none" />
            <div className="absolute inset-x-0 bottom-0 h-20 sm:h-28 bg-gradient-to-t from-[#111613] via-[#111613]/60 to-transparent pointer-events-none" />
          </motion.div>

          <div className="mt-4 text-center">
            <p className="text-xs sm:text-sm font-light text-[#9E988D] tracking-wide">
              Espacio comunitario El Faro · Mar del Plata · Encuentro terapéutico frente al mar
            </p>
          </div>
        </div>
      </section>

      {/* ── 7. FRANJA EDITORIAL DIFERENCIAL: DOS ORILLAS, OTRAS MIRADAS ── */}
      <section className="relative py-28 lg:py-36 bg-[#1A211B] text-offwhite overflow-hidden border-b border-white/10">
        {/* Fondo con textura sutil marina/nocturna sobria */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-15 mix-blend-screen">
          <img 
            src="https://res.cloudinary.com/dwv5ehc6e/image/upload/f_auto,q_auto/v1779830146/mifaro/CB4EA85B-5039-4954-A3CB-B9E85D8DD4D3_kXCfckpZ.png"
            alt=""
            aria-hidden="true"
            className="w-full h-full object-cover object-center filter grayscale contrast-125 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1A211B] via-transparent to-[#1A211B]" />
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sand/10 border border-sand/20 text-sand text-xs font-semibold tracking-[0.22em] uppercase mb-6 backdrop-blur-sm">
              <Sparkles size={14} className="text-gold" />
              DOS ORILLAS, OTRAS MIRADAS
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif text-offwhite leading-tight mb-6">
              Un océano, un mar. <br />
              <span className="italic text-sand font-serif">Un puente entre experiencias.</span>
            </h2>

            <p className="text-lg sm:text-xl text-sand-light/90 font-light leading-relaxed mb-4">
              En determinados momentos del proceso abrimos encuentros online compartidos entre nuestro espacio en Mar del Plata y nuestro espacio en Valencia, España.
            </p>

            <p className="text-base sm:text-lg text-sand/80 font-light leading-relaxed mb-10">
              De un lado, el Atlántico. Del otro, el Mediterráneo. Dos contextos, dos culturas y experiencias diferentes que pueden encontrarse en un mismo espacio de intercambio.
            </p>
          </motion.div>

          <div className="my-10 py-6 border-y border-sand/15 grid grid-cols-1 md:grid-cols-2 gap-6 items-center text-sm font-light text-sand/75">
            <div className="flex items-center gap-3">
              <div className="w-2.5 h-2.5 rounded-full bg-olive-light ring-4 ring-olive/20" />
              <div>
                <span className="font-serif text-offwhite text-base tracking-wide block">Mar del Plata · Océano Atlántico</span>
                <span className="text-xs text-sand/60">Espacio fundacional y sede de tratamiento</span>
              </div>
            </div>

            <div className="flex items-center gap-3 md:justify-end">
              <div className="text-left md:text-right">
                <span className="font-serif text-offwhite text-base tracking-wide block">Valencia · Mar Mediterráneo</span>
                <span className="text-xs text-sand/60">Espacio hermano de orientación y resonancia</span>
              </div>
              <div className="w-2.5 h-2.5 rounded-full bg-gold ring-4 ring-gold/20" />
            </div>
          </div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mt-12"
          >
            <motion.div 
              variants={fadeUp}
              className="p-8 rounded-3xl bg-white/[0.04] border border-sand/15 hover:border-sand/30 transition-all duration-300 backdrop-blur-sm"
            >
              <span className="text-xs font-semibold tracking-widest text-gold uppercase block mb-3">01 · Perspectiva</span>
              <h3 className="text-2xl font-serif text-offwhite mb-3">Cruzar experiencias</h3>
              <p className="text-sm font-light leading-relaxed text-sand/80">
                Escuchar cómo otras personas atraviesan procesos similares desde contextos diferentes.
              </p>
            </motion.div>

            <motion.div 
              variants={fadeUp}
              className="p-8 rounded-3xl bg-white/[0.04] border border-sand/15 hover:border-sand/30 transition-all duration-300 backdrop-blur-sm"
            >
              <span className="text-xs font-semibold tracking-widest text-gold uppercase block mb-3">02 · Comprensión</span>
              <h3 className="text-2xl font-serif text-offwhite mb-3">Ampliar la mirada</h3>
              <p className="text-sm font-light leading-relaxed text-sand/80">
                Encontrarse con otras formas de pensar, sentir y poner en palabras lo que sucede.
              </p>
            </motion.div>

            <motion.div 
              variants={fadeUp}
              className="p-8 rounded-3xl bg-white/[0.04] border border-sand/15 hover:border-sand/30 transition-all duration-300 backdrop-blur-sm"
            >
              <span className="text-xs font-semibold tracking-widest text-gold uppercase block mb-3">03 · Comunidad</span>
              <h3 className="text-2xl font-serif text-offwhite mb-3">Construir pertenencia</h3>
              <p className="text-sm font-light leading-relaxed text-sand/80">
                Descubrir coincidencias y diferencias entre personas que, aun viviendo a miles de kilómetros, pueden reconocerse en experiencias comunes.
              </p>
            </motion.div>
          </motion.div>

          <motion.div 
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="mt-14 pt-8 border-t border-sand/10 max-w-3xl"
          >
            <p className="text-lg font-serif italic text-sand-light">
              «No reemplazan los espacios individuales o grupales de cada proceso. Los amplían: suman otras voces, otras experiencias y otras maneras de mirar.»
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── 8. VALORES: QUÉ VAS A ENCONTRAR ── */}
      <section className="py-24 sm:py-32 bg-[#141A15] text-[#DDD8CD] border-b border-white/10">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="max-w-3xl mb-16 sm:mb-20"
          >
            <span className="text-xs uppercase tracking-[0.2em] text-[#D4AF37] font-semibold block mb-3">
              Acompañamiento humano
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#F6F2EA] leading-tight">
              Lo que vas a encontrar en El Faro
            </h2>
          </motion.div>

          <motion.div 
            variants={staggerContainer} 
            initial="hidden" 
            whileInView="visible" 
            viewport={viewportConfig} 
            className="grid grid-cols-1 md:grid-cols-2 gap-x-12 lg:gap-x-20 gap-y-12 sm:gap-y-16"
          >
            {[
              { 
                num: "01",
                title: "Empatía", 
                desc: "Podemos entender claramente tus circunstancias. Buscamos comprender qué función cumple el consumo en tu historia. Mientras, construimos junto a vos y tu red —familia, pareja, etc.— una red personal más contenedora y efectiva." 
              },
              { 
                num: "02",
                title: "Cercanía", 
                desc: "Un encuentro genuino donde la persona no queda reducida a un síntoma, a un diagnóstico ni a una opinión subjetiva." 
              },
              { 
                num: "03",
                title: "Pasos concretos", 
                desc: "Equipo interdisciplinario: psicólogos, psiquiatras, médicos, operadores terapéuticos, psicólogos sociales y acompañantes terapéuticos. También contamos con guardias telefónicas: tener a quién llamar fuera de los horarios de El Faro." 
              },
              { 
                num: "04",
                title: "Conocimiento, experiencia y trayectoria", 
                desc: "Reconstrucción de vínculos, adaptación del proceso personal al escenario vital de cada persona e interconsultas con otros dispositivos cuando sean necesarias, con el fin de fortalecer y ampliar su red de contención." 
              }
            ].map((item, i) => (
              <motion.div 
                key={i} 
                variants={fadeUp} 
                className="border-t border-white/10 pt-8 flex flex-col justify-between"
              >
                <div>
                  <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#D4AF37]/80 font-semibold block mb-4">
                    {item.num} · Principio
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-serif mb-4 text-[#F6F2EA]">{item.title}</h3>
                  <p className="text-base text-[#C8C4BB] font-light leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── 9. FAQS ── */}
      <FAQBlock 
        title="Dudas frecuentes sobre adicciones"
        faqs={faqsAdicciones}
        variant="dark"
        bgClass="bg-[#111613] border-b border-white/10 text-white"
      />

      {/* ── 10. UBICACIÓN Y COBERTURA: DÓNDE ESTAMOS EN MAR DEL PLATA ── */}
      <section className="py-20 bg-[#141A15] border-b border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="space-y-6"
          >
            <span className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold block mb-2">
              Presencial y Online
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif text-[#F6F2EA]">Dónde estamos en Mar del Plata</h2>
            <p className="text-base sm:text-lg text-[#C8C4BB] font-light leading-relaxed max-w-2xl mx-auto">
              Nuestro espacio central se encuentra en la ciudad de Mar del Plata, con fácil acceso desde toda el área urbana, Batán y localidades costeras vecinas. Para quienes residen en otros puntos de la provincia o del país, coordinamos consultas y seguimiento a través de modalidad online.
            </p>
            <div className="pt-2">
              <a 
                href="tel:+542234921953"
                onClick={() => trackPhoneClick('adicciones_sede', '+542234921953')}
                className="inline-flex items-center gap-2 text-[#F6F2EA] font-medium hover:text-[#D4AF37] transition-colors text-base"
              >
                <PhoneCall size={18} className="text-[#D4AF37]" />
                Teléfono de atención: +54 223 4921953
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── 11. NAVEGACIÓN CRUZADA A OTROS ESPACIOS DE ARGENTINA ── */}
      <section className="py-20 bg-[#111613] border-b border-white/10">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold block mb-2">
              Red de Acompañamiento
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif text-[#F6F2EA]">Otros espacios y recursos en El Faro</h2>
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
                title: "Terapia y vínculos", 
                desc: "Parejas y dinámica familiar", 
                link: "/terapia-mar-del-plata" 
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
                className="group p-6 bg-white/[0.03] rounded-2xl border border-white/10 hover:border-[#D4AF37]/50 hover:bg-white/[0.05] transition-all flex flex-col justify-between"
              >
                <div>
                  <h3 className="font-serif text-lg text-[#F6F2EA] group-hover:text-[#D4AF37] transition-colors mb-1">{item.title}</h3>
                  <p className="text-xs text-[#9E988D] font-light">{item.desc}</p>
                </div>
                <div className="mt-4 flex items-center justify-end text-[#D4AF37]">
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── 12. CTA FINAL: CIERRE DOBLE ── */}
      <section className="py-28 bg-[#0D110E] text-[#F6F2EA] overflow-hidden">
        <motion.div 
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <h2 className="text-3xl sm:text-5xl font-serif mb-6 text-[#F6F2EA]">El cambio empieza cuando se puede poner en palabras</h2>
          <p className="text-lg sm:text-xl text-[#C8C4BB] font-light leading-relaxed mb-10 max-w-2xl mx-auto">
            No tenés que pasar por esto a solas. Estamos para escucharte, ordenar la situación y pensar juntos el camino de salida.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/contacto"
              className="inline-flex items-center justify-center gap-3 bg-[#D4AF37] text-[#111613] px-10 py-5 rounded-full text-sm font-semibold tracking-wider uppercase hover:bg-[#E5C358] transition-all shadow-lg"
            >
              Consultar de forma privada
              <ArrowRight size={18} />
            </Link>
          </div>
        </motion.div>
      </section>

      {/* ── 13. BARRA FINAL DE CONTACTO RÁPIDO ── */}
      <section className="py-14 bg-[#111613] border-t border-white/10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-base text-[#F6F2EA] mb-1">Si llegaste hasta acá, algo te trajo. Dar este paso ya es empezar.</p>
          <p className="text-sm text-[#C8C4BB] font-light mb-6">Escribinos o llamanos para coordinar un primer encuentro sin compromiso.</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/5492235923790?text=Hola,%20quisiera%20hacer%20una%20consulta%20en%20El%20Faro."
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsAppClick('adicciones_footer', 'https://wa.me/5492235923790?text=Hola,%20quisiera%20hacer%20una%20consulta%20en%20El%20Faro.')}
              className="inline-flex items-center justify-center px-8 py-3.5 bg-[#D4AF37] text-[#111613] font-semibold rounded-full hover:bg-[#E5C358] transition-colors text-sm tracking-wider uppercase shadow-md"
            >
              Escribinos por WhatsApp
            </a>

            <a
              href="tel:+542234921953"
              onClick={() => trackPhoneClick('adicciones_footer', '+542234921953')}
              className="inline-flex items-center justify-center px-8 py-3.5 border border-white/20 text-[#F6F2EA] font-medium rounded-full hover:bg-white/10 transition-colors text-sm tracking-wider uppercase"
            >
              Llamar al (0223) 492-1953
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
