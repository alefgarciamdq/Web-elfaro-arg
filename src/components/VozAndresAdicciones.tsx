import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  ArrowRight, 
  MessageSquare, 
  ChevronDown, 
  Check, 
  Compass, 
  Clock, 
  Eye,
  EyeOff
} from 'lucide-react';
import { Head } from 'vite-react-ssg';
import { motion, AnimatePresence, useReducedMotion, type Variants } from 'framer-motion';
import JsonLd from './JsonLd';
import { trackWhatsAppClick } from '../utils/telemetry';

const WHATSAPP_URL = 'https://wa.me/5492235923790?text=Hola,%20quisiera%20hacer%20una%20consulta%20en%20El%20Faro.';

// Catálogo de imágenes marplatenses de Andrés en WebP optimizado + fallback JPG
const ANDRES_MEDIA = {
  hero: {
    webpSrc: '/voces/andres/andres-01-apertura-mar-del-plata.webp',
    jpgSrc: '/voces/andres/andres-01-apertura-mar-del-plata.jpg',
    alt: 'Andrés contemplando el mar desde un ventanal en Mar del Plata, de espaldas y en penumbra'
  },
  rendimiento: {
    webpSrc: '/voces/andres/andres-02-rendimiento.webp',
    jpgSrc: '/voces/andres/andres-02-rendimiento.jpg',
    alt: 'Andrés trabajando hasta tarde en su oficina de Mar del Plata, concentrado y en soledad',
    caption: 'Sostener una empresa, reuniones y compromisos con precisión rigurosa mientras el consumo ocupaba el centro de la mente.'
  },
  mentiaOcultabaEscapaba: {
    webpSrc: '/voces/andres/andres-03-mentia-ocultaba-escapaba.webp',
    jpgSrc: '/voces/andres/andres-03-mentia-ocultaba-escapaba.jpg',
    alt: 'Andrés caminando cabizbajo al atardecer por una calle residencial de Mar del Plata',
    caption: 'Tres momentos que se repetían siempre en el mismo orden: mentir, ocultar y escapar de cualquier conversación que se acercara a la verdad.'
  },
  hijoDistancia: {
    webpSrc: '/voces/andres/andres-04-hijo-distancia.webp',
    jpgSrc: '/voces/andres/andres-04-hijo-distancia.jpg',
    alt: 'Andrés sentado en el living familiar mientras su hijo juega al fondo, con la mirada ausente y distante',
    caption: 'Estar físicamente al lado de un hijo pero con la mente lejos, calculando el próximo momento de consumo.'
  },
  sinElla: {
    webpSrc: '/voces/andres/andres-05-sin-ella-no-sabia-quien-era.webp',
    jpgSrc: '/voces/andres/andres-05-sin-ella-no-sabia-quien-era.jpg',
    alt: 'Andrés mirando hacia el horizonte nublado en la costa de Mar del Plata, envuelto en un abrigo oscuro',
    caption: 'El miedo a soltar la sustancia cuando durante años fue el único sostén para funcionar y estar a la altura.'
  },
  primerEncuentro: {
    webpSrc: '/voces/andres/andres-06-primer-encuentro.webp',
    jpgSrc: '/voces/andres/andres-06-primer-encuentro.jpg',
    alt: 'Espacio de orientación y escucha en El Faro Mar del Plata con mural de fondo que dice Dejar de estar solo',
    caption: 'El primer encuentro: poder decir la historia completa sin disimular y empezar a dejar de estar solo.'
  }
};

// Componente para imágenes narrativas con picture WebP y fallback JPG
function StoryImage({
  mediaKey,
  className = '',
  imgClassName = '',
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 896px',
  caption
}: {
  mediaKey: keyof typeof ANDRES_MEDIA;
  className?: string;
  imgClassName?: string;
  sizes?: string;
  caption?: string;
}) {
  const media = ANDRES_MEDIA[mediaKey];
  const finalCaption = caption || ('caption' in media ? media.caption : undefined);

  return (
    <figure className={`relative ${className}`}>
      <div className="overflow-hidden rounded-2xl sm:rounded-3xl bg-sand/30 shadow-sm border border-sand/50 aspect-[16/9]">
        <picture>
          <source type="image/webp" srcSet={media.webpSrc} />
          <img
            src={media.jpgSrc}
            alt={media.alt}
            loading="lazy"
            decoding="async"
            sizes={sizes}
            className={`w-full h-full object-cover transition-transform duration-700 hover:scale-[1.015] ${imgClassName}`}
          />
        </picture>
      </div>
      {finalCaption && (
        <figcaption className="mt-3 px-2 text-xs sm:text-sm text-ink-light/75 font-sans font-light italic leading-relaxed text-center sm:text-left">
          {finalCaption}
        </figcaption>
      )}
    </figure>
  );
}

export default function VozAndresAdicciones() {
  const shouldReduceMotion = useReducedMotion();
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(null);

  const toggleFaq = (idx: number) => {
    setOpenFaqIdx(openFaqIdx === idx ? null : idx);
  };

  const animFadeUp: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } 
    }
  };

  const faqsAndres = [
    {
      question: '¿Puedo tener un problema con las drogas si sigo funcionando bien en mi trabajo y mi familia?',
      answer: 'Que una persona siga trabajando, cumpliendo responsabilidades o sosteniendo su vida cotidiana no permite saber por sí solo qué relación tiene con el consumo. Lo importante es mirar qué lugar ocupa, cuánto condiciona sus decisiones y qué está pasando en sus vínculos y en su vida diaria.'
    },
    {
      question: '¿Por qué cuesta tanto dejar una sustancia si sé que me está haciendo daño?',
      answer: 'Porque con el tiempo el consumo deja de ser un hecho aislado y se transforma en la forma en que la persona aprendió a funcionar, a sentirse capaz o a tolerar la exigencia. Dejarlo implica también el temor de no saber quién es uno sin ese sostén y cómo encarar la vida diaria sin él.'
    },
    {
      question: '¿Es necesario esperar a una crisis grave o a un límite visible para consultar?',
      answer: 'No. La idea de que hay que llegar a un límite extremo o perder el trabajo o los afectos para recién consultar hace que muchas personas sufran en silencio durante años. Cuanto antes se hable sobre lo que está pasando, mayor margen hay para intervenir y menor es el costo personal y familiar.'
    },
    {
      question: '¿Qué pasa en un primer encuentro si decido contar lo que me pasa?',
      answer: 'Un primer encuentro profesional no tiene como fin juzgarte, reprocharte ni exigirte renuncias de un día para el otro. Es un espacio de escucha respetuosa y reservada en Mar del Plata donde podés dejar de disimular, ordenar lo que estás viviendo y evaluar juntos los caminos posibles, a tu ritmo.'
    },
    {
      question: '¿Cómo es el acompañamiento en adicciones en El Faro Mar del Plata?',
      answer: 'Trabajamos con un enfoque interdisciplinario y humano, adaptado a la situación singular de cada persona y a su contexto familiar. Atendemos de manera presencial en nuestro espacio de Garay 2073, en Mar del Plata, y también respondemos consultas iniciales de orientación por WhatsApp.'
    }
  ];

  return (
    <div className="bg-[#141915] min-h-screen text-[#C8C4BA] selection:bg-[#C2A675]/30 selection:text-[#F6F2EA] overflow-x-hidden">
      <Head>
        <title>Adicciones y consumo de drogas: la historia de Andrés | El Faro</title>
        <meta
          name="description"
          content="Sostener la empresa, la familia y la rutina mientras por dentro todo se cae. La historia de Andrés y el consumo en silencio. El Faro Mar del Plata."
        />
        <link rel="canonical" href="https://programaelfaro.com.ar/voces/andres-adicciones-mar-del-plata" />
        <meta property="og:title" content="Adicciones y consumo de drogas: la historia de Andrés | El Faro" />
        <meta
          property="og:description"
          content="Sostener la empresa, la familia y la rutina mientras por dentro todo se cae. La historia de Andrés y el consumo en silencio. El Faro Mar del Plata."
        />
        <meta property="og:url" content="https://programaelfaro.com.ar/voces/andres-adicciones-mar-del-plata" />
        <meta property="og:type" content="article" />
        <meta property="og:image" content="https://programaelfaro.com.ar/voces/andres/andres-01-apertura-mar-del-plata.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Adicciones y consumo de drogas: la historia de Andrés | El Faro" />
        <meta
          name="twitter:description"
          content="Sostener la empresa, la familia y la rutina mientras por dentro todo se cae. La historia de Andrés y el consumo en silencio. El Faro Mar del Plata."
        />
        <meta name="twitter:image" content="https://programaelfaro.com.ar/voces/andres/andres-01-apertura-mar-del-plata.jpg" />
      </Head>

      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Inicio",
            "item": "https://programaelfaro.com.ar"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Las Voces del Faro",
            "item": "https://programaelfaro.com.ar/voces"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "La historia de Andrés",
            "item": "https://programaelfaro.com.ar/voces/andres-adicciones-mar-del-plata"
          }
        ]
      }} />

      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Yo no me drogaba para escapar. Me drogaba para rendir.",
        "description": "Andrés tenía empresa, familia y responsabilidades que cumplía con precisión obsesiva. Por fuera todo funcionaba. Por dentro, el consumo sostenía todo.",
        "image": "https://programaelfaro.com.ar/voces/andres/andres-01-apertura-mar-del-plata.jpg",
        "inLanguage": "es-AR",
        "mainEntityOfPage": "https://programaelfaro.com.ar/voces/andres-adicciones-mar-del-plata",
        "author": {
          "@type": "Person",
          "name": "Andrés"
        },
        "publisher": {
          "@type": "Organization",
          "name": "El Faro",
          "url": "https://programaelfaro.com.ar"
        }
      }} />

      {/* ──────────────────────────────────────────────────
          HERO EDITORIAL CON FOTOGRAFÍA 01 Y TEXTO A LA DERECHA
          ────────────────────────────────────────────────── */}
      <section className="relative min-h-[78vh] md:min-h-[85vh] lg:min-h-[92vh] flex items-end overflow-hidden pt-24 sm:pt-28 pb-14 sm:pb-16 md:pb-20">
        {/* Imagen Hero de Fondo */}
        <div className="absolute inset-0 z-0">
          <picture>
            <source type="image/webp" srcSet={ANDRES_MEDIA.hero.webpSrc} />
            <img
              src={ANDRES_MEDIA.hero.jpgSrc}
              alt={ANDRES_MEDIA.hero.alt}
              fetchPriority="high"
              loading="eager"
              decoding="async"
              className="w-full h-full object-cover object-[25%_center] sm:object-[22%_center] md:object-[20%_center] lg:object-[left_center] brightness-[0.88] contrast-[1.04]"
            />
          </picture>
          {/* Overlay suave sobre fondo oscuro */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#141915] via-[#141915]/60 to-transparent lg:bg-gradient-to-l lg:from-[#141915] lg:via-[#141915]/70 lg:to-transparent" />
          
          {/* DIFUMINADO / FADE PROGRESIVO INFERIOR HACIA EL FONDO #141915 */}
          <div className="absolute inset-x-0 bottom-0 h-36 sm:h-52 md:h-64 lg:h-72 bg-gradient-to-b from-transparent via-[#141915]/60 to-[#141915] pointer-events-none" />
        </div>

        {/* Contenido del Hero: alineado a la derecha en pantallas amplias */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 xl:px-16">
          <div className="flex justify-end w-full">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={animFadeUp}
              className="w-full lg:w-[48%] xl:w-[44%] lg:max-w-[500px] xl:max-w-[540px] space-y-4 sm:space-y-5 pb-4 sm:pb-6 text-left"
            >
              {/* Navegación sutil hacia el Hub */}
              <Link
                to="/voces"
                className="inline-flex items-center gap-2 text-xs uppercase font-sans tracking-[0.25em] text-[#9A968D] hover:text-[#F6F2EA] transition-colors duration-200"
              >
                <ArrowLeft size={14} />
                <span>Las Voces del Faro</span>
              </Link>

              <div className="space-y-2.5 sm:space-y-3">
                <span className="block text-[11px] sm:text-xs uppercase font-sans tracking-[0.25em] text-[#C2A675] font-semibold">
                  LAS VOCES DEL FARO · ANDRÉS
                </span>

                <h1 className="text-3xl sm:text-4xl lg:text-[2.65rem] xl:text-[2.85rem] font-serif text-[#F6F2EA] font-normal leading-[1.16] tracking-tight drop-shadow-sm">
                  Yo no me drogaba para escapar. Me drogaba para rendir.
                </h1>
              </div>

              <p className="text-base sm:text-lg lg:text-xl text-[#C8C4BA] font-light font-serif leading-relaxed drop-shadow-sm">
                Andrés tenía empresa, familia y responsabilidades que cumplía con precisión casi obsesiva. Pagaba el colegio de sus hijos y llegaba puntual a todas partes. Por eso tardó ocho años en poder decir lo que le pasaba.
              </p>

              <div className="pt-1">
                <span className="inline-flex items-center gap-1.5 text-xs text-[#9A968D] font-sans font-light">
                  <Clock size={13} className="text-[#C2A675]" />
                  6 min de lectura · Testimonio real · Mar del Plata
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Epígrafe Editorial Fijo */}
      <section className="relative z-10 bg-[#141915] -mt-4 pb-8 pt-4 border-b border-white/10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs sm:text-sm text-[#9A968D] font-sans italic text-center leading-relaxed">
            “Historias reales, emociones vivas. Algunos nombres y datos fueron modificados para preservar la intimidad.”
          </p>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────
          CUERPO NARRATIVO EDITORIAL
          ────────────────────────────────────────────────── */}
      <main className="py-14 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-20">
          
          {/* BLOQUE 1: EL INICIO Y EL CRECIMIENTO DE LA NECESIDAD */}
          <article className="max-w-3xl mx-auto space-y-6 text-lg sm:text-xl font-serif text-[#C8C4BA] font-normal leading-relaxed">
            <p className="first-letter:float-left first-letter:text-5xl sm:first-letter:text-6xl first-letter:pr-3 first-letter:font-serif first-letter:text-[#6F7C63] first-letter:leading-none">
              Tengo 38 años.
            </p>
            <p>
              La conocí hace ocho años, en una época en la que todo me costaba: hablar en reuniones, sonreír sin esfuerzo, sostener una conversación sin sentir que me ahogaba por dentro. La conocí y fue amor a primera vista. Lo digo sin ironía, como se habla de alguien que te cambió la vida.
            </p>
            <p>
              Al principio aparecía únicamente los fines de semana. Después empezó a meterse en los días de semana: antes de una reunión importante, antes de una cena con gente que no conocía bien. Y después pasó a estar todos los días, porque sin ella yo ya no podía.
            </p>
            <p>
              No podía trabajar. No podía sonreír. No podía hablar con soltura. No podía rendir. No podía ser el que los demás esperaban que fuera.
            </p>
          </article>

          {/* GRAN CITA 1 */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={animFadeUp}
            className="my-10 sm:my-14 py-8 sm:py-12 border-y border-white/10 text-center max-w-4xl mx-auto px-4"
          >
            <blockquote className="font-serif italic text-2xl sm:text-3xl md:text-4xl text-[#F6F2EA] leading-snug max-w-3xl mx-auto">
              «Durante años ocupó un lugar demasiado importante en mi vida. Llegó un momento en que todo parecía depender de ella.»
            </blockquote>
            <p className="mt-4 text-xs sm:text-sm uppercase tracking-[0.2em] font-sans text-[#6F7C63] font-semibold">
              El secreto como centro de la vida
            </p>
          </motion.div>

          {/* BLOQUE 2: LA VIDA QUE POR FUERA SEGUÍA FUNCIONANDO */}
          <article className="max-w-3xl mx-auto space-y-6 text-lg sm:text-xl font-serif text-[#C8C4BA] font-normal leading-relaxed">
            <p>
              Mi vida giraba alrededor de tres momentos.
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-[#F6F2EA] font-normal pt-2">
              Mentía. Ocultaba. Escapaba.
            </h2>
            <p>
              Solo eran tres, siempre en ese orden.
            </p>
            <p>
              No era un adolescente con miedo a que lo descubrieran. Tenía 38 años, una empresa, una familia, reuniones, viajes y responsabilidades. Y, sin embargo, una parte enorme de mi vida estaba dedicada a que nadie supiera lo que realmente estaba pasando.
            </p>
            <p>
              Mentía sobre dónde había estado. Ocultaba cuánto la necesitaba. Escapaba de cualquier conversación que se acercara demasiado a la verdad.
            </p>
            <p>
              Como si esas tres cosas se hubieran convertido, casi sin darme cuenta, en una forma de vivir.
            </p>
          </article>

          {/* FOTOGRAFÍA 03: MENTÍA. OCULTABA. ESCAPABA. */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={animFadeUp}
            className="max-w-4xl mx-auto"
          >
            <StoryImage
              mediaKey="mentiaOcultabaEscapaba"
              caption="Tres momentos que se repetían siempre en el mismo orden: mentir, ocultar y escapar de cualquier conversación que se acercara a la verdad."
            />
          </motion.div>

          <article className="max-w-3xl mx-auto space-y-6 text-lg sm:text-xl font-serif text-[#C8C4BA] font-normal leading-relaxed">
            <p>
              Y supe desde el principio que no iba a terminar bien. Siempre lo supe, desde la primera vez. Lo supe y seguí igual. Eso es lo que no consigo explicarle a nadie: que no fue ignorancia. Fue elegir, una y otra vez, algo que sabía que me iba a costar todo.
            </p>
            <p>
              Yo no encajaba en la imagen que la gente tiene de alguien con un problema de drogas. Tenía empresa. Reuniones, viajes, responsabilidades que cumplía con una precisión casi obsesiva. Pagaba el colegio de mis hijos. Llegaba puntual a todas partes. Por fuera, todo funcionaba.
            </p>
            <p>
              Por eso tardé tanto en pedir ayuda. Porque la imagen que tenía de «alguien con un problema» era la de quien pierde el trabajo, no sostiene nada, se le nota desde lejos. Yo sostenía todo. Demasiado bien. Y esa misma capacidad de sostener fue lo que me permitió esconderme durante años, incluso de mí mismo.
            </p>
            <p>
              No me drogaba para escapar. Me drogaba para rendir. Para estar a la altura. Para que nadie notara que por dentro me caía a pedazos.
            </p>
          </article>

          {/* FOTOGRAFÍA 02: RENDIMIENTO / TRABAJO */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={animFadeUp}
            className="max-w-4xl mx-auto"
          >
            <StoryImage
              mediaKey="rendimiento"
              caption="Sostener una empresa, reuniones y compromisos con precisión rigurosa mientras el consumo ocupaba el centro de la mente."
            />
          </motion.div>

          {/* ──────────────────────────────────────────────────
              BLOQUE DE CONTRASTE VISUAL: LO QUE SE VE vs. LO QUE NO SE VE
              ────────────────────────────────────────────────── */}
          <section className="max-w-4xl mx-auto space-y-6">
            <div className="space-y-2 text-center max-w-2xl mx-auto">
              <span className="text-[11px] uppercase tracking-[0.2em] font-sans text-[#6F7C63] font-semibold block">
                La doble vida del consumo funcional
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#F6F2EA] font-normal">
                Dos realidades conviviendo en la misma persona
              </h3>
              <p className="text-sm sm:text-base text-[#C8C4BA] font-light leading-relaxed">
                El consumo que se sostiene en silencio genera una fractura entre la apariencia cotidiana y la realidad íntima.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
              {/* Columna: Lo que se ve */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={animFadeUp}
                className="bg-[#181E19] border border-white/10 rounded-3xl p-6 sm:p-8 space-y-5 shadow-sm"
              >
                <div className="flex items-center gap-3 border-b border-white/10 pb-4">
                  <span className="p-2 rounded-xl bg-white/5 text-[#6F7C63]">
                    <Eye size={18} />
                  </span>
                  <div>
                    <span className="text-[11px] uppercase tracking-wider font-sans text-[#6F7C63] font-semibold block">
                      Hacia afuera
                    </span>
                    <h4 className="text-xl sm:text-2xl font-serif text-[#F6F2EA] font-normal">
                      Lo que se ve
                    </h4>
                  </div>
                </div>

                <ul className="space-y-3.5 text-base text-[#C8C4BA] font-light leading-relaxed">
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#6F7C63] shrink-0" />
                    <span><strong>Empresa:</strong> proyectos activos y actividad continua.</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#6F7C63] shrink-0" />
                    <span><strong>Reuniones:</strong> presencia formal y conversaciones resueltas.</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#6F7C63] shrink-0" />
                    <span><strong>Viajes:</strong> traslados laborales sostenidos a término.</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#6F7C63] shrink-0" />
                    <span><strong>Responsabilidades:</strong> cumplimiento riguroso de compromisos.</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#6F7C63] shrink-0" />
                    <span><strong>Puntualidad:</strong> llegar a horario a cada cita y deber.</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#6F7C63] shrink-0" />
                    <span><strong>Familia:</strong> cuotas del colegio al día y presencia visible.</span>
                  </li>
                </ul>
              </motion.div>

              {/* Columna: Lo que no se ve */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={animFadeUp}
                className="bg-[#141915]/90 text-[#F6F2EA] border border-[#C2A675]/30 rounded-3xl p-6 sm:p-8 space-y-5 shadow-md"
              >
                <div className="flex items-center gap-3 border-b border-white/10 pb-4">
                  <span className="p-2 rounded-xl bg-white/5 text-[#C2A675]">
                    <EyeOff size={18} />
                  </span>
                  <div>
                    <span className="text-[11px] uppercase tracking-wider font-sans text-[#C2A675] font-semibold block">
                      Hacia adentro
                    </span>
                    <h4 className="text-xl sm:text-2xl font-serif text-[#F6F2EA] font-normal">
                      Lo que no se ve
                    </h4>
                  </div>
                </div>

                <ul className="space-y-3.5 text-base text-[#C8C4BA] font-light leading-relaxed">
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C2A675] shrink-0" />
                    <span><strong>Necesidad:</strong> no poder arrancar ni sostener el día sin consumir.</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C2A675] shrink-0" />
                    <span><strong>Mentira:</strong> relatos armados sobre horarios y ausencias.</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C2A675] shrink-0" />
                    <span><strong>Ocultamiento:</strong> esconder cuánto y cuándo se necesita.</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C2A675] shrink-0" />
                    <span><strong>Distancia:</strong> estar sentado al lado del otro pero con la mente lejos.</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C2A675] shrink-0" />
                    <span><strong>Pensamiento alrededor del consumo:</strong> calcular permanentemente el próximo momento.</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C2A675] shrink-0" />
                    <span><strong>Miedo:</strong> no saber quién era uno sin la sustancia.</span>
                  </li>
                </ul>
              </motion.div>
            </div>
          </section>

          {/* BLOQUE 3: LA ESCENA DEL HIJO */}
          <article className="max-w-3xl mx-auto space-y-6 text-lg sm:text-xl font-serif text-ink font-normal leading-relaxed">
            <p>
              ¿Cuándo empezaste a notar que algo se rompía?
            </p>
            <p>
              Lo pensé un momento.
            </p>
            <p>
              Mi hijo me preguntó una vez si estaba enojado con él. No lo estaba. Estaba lejos. Estaba con ella, en mi cabeza, aunque estuviera sentado a su lado.
            </p>
            <p>
              Porque eso es lo que hace este tipo de consumo, lo que lo vuelve tan difícil de ver desde fuera: la persona sigue físicamente en cada sitio donde se la espera, pero una parte de ella —la que de verdad importa— está siempre en otro lado. Con la sustancia. Pensando en la sustancia. Calculando cuándo podrá volver a ella.
            </p>
          </article>

          {/* GRAN CITA 2 */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={animFadeUp}
            className="my-10 sm:my-14 py-8 sm:py-12 border-y border-white/10 text-center max-w-4xl mx-auto px-4"
          >
            <blockquote className="font-serif italic text-2xl sm:text-3xl md:text-4xl text-[#F6F2EA] leading-snug max-w-3xl mx-auto">
              «Mi hijo me preguntó una vez si estaba enojado con él. No lo estaba. Estaba lejos. Estaba con ella, en mi cabeza, aunque estuviera sentado a su lado.»
            </blockquote>
            <p className="mt-4 text-xs sm:text-sm uppercase tracking-[0.2em] font-sans text-[#6F7C63] font-semibold">
              La presencia ausente
            </p>
          </motion.div>

          {/* FOTOGRAFÍA 04: EL HIJO Y LA DISTANCIA */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={animFadeUp}
            className="max-w-4xl mx-auto"
          >
            <StoryImage
              mediaKey="hijoDistancia"
              caption="Estar físicamente al lado de un hijo pero con la mente lejos, calculando el próximo momento de consumo."
            />
          </motion.div>

          {/* CUADRO SINÓPTICO: QUIZÁS ALGO DE ESTO TE RESULTE FAMILIAR */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={animFadeUp}
            className="max-w-3xl mx-auto p-8 sm:p-10 rounded-[2rem] bg-[#181E19] border border-white/10 space-y-6"
          >
            <div className="space-y-2">
              <span className="text-[11px] uppercase tracking-[0.2em] font-sans text-[#6F7C63] font-semibold block">
                Situaciones frecuentes
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#F6F2EA] font-normal">
                Quizás algo de esto te resulte familiar
              </h3>
            </div>

            <ul className="space-y-4 text-base sm:text-lg text-[#C8C4BA] font-light leading-relaxed">
              <li className="flex items-start gap-3">
                <span className="p-1 rounded-full bg-white/5 text-[#6F7C63] shrink-0 mt-1 border border-white/10">
                  <Check size={14} />
                </span>
                <span>Por fuera funcionás bien —trabajo, familia, responsabilidades— mientras por dentro algo se cae a pedazos.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="p-1 rounded-full bg-white/5 text-[#6F7C63] shrink-0 mt-1 border border-white/10">
                  <Check size={14} />
                </span>
                <span>Llevás tiempo mintiendo u ocultando sobre dónde estás o qué necesitás.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="p-1 rounded-full bg-white/5 text-[#6F7C63] shrink-0 mt-1 border border-white/10">
                  <Check size={14} />
                </span>
                <span>Supiste desde el principio que esto no iba a salir bien y seguiste igual.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="p-1 rounded-full bg-white/5 text-[#6F7C63] shrink-0 mt-1 border border-white/10">
                  <Check size={14} />
                </span>
                <span>Necesitás algo para sentirte capaz de trabajar, socializar o estar a la altura.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="p-1 rounded-full bg-white/5 text-[#6F7C63] shrink-0 mt-1 border border-white/10">
                  <Check size={14} />
                </span>
                <span>Estás presente físicamente pero una parte de vos está siempre en otro lado.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="p-1 rounded-full bg-white/5 text-[#6F7C63] shrink-0 mt-1 border border-white/10">
                  <Check size={14} />
                </span>
                <span>No sabés muy bien quién sos sin eso que llevás tiempo necesitando.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="p-1 rounded-full bg-white/5 text-[#6F7C63] shrink-0 mt-1 border border-white/10">
                  <Check size={14} />
                </span>
                <span>Tardás en pedir ayuda porque no encajás en la imagen de «alguien con un problema».</span>
              </li>
            </ul>
          </motion.div>

          {/* BLOQUE 4: LA PÉRDIDA DE IDENTIDAD */}
          <article className="max-w-3xl mx-auto space-y-6 text-lg sm:text-xl font-serif text-[#C8C4BA] font-normal leading-relaxed">
            <p>
              «Sabías que no iba a salir bien,» le dije. «¿Por qué seguiste?»
            </p>
            <p>
              «Porque sin ella no sabía quién era yo. Llevaba tanto tiempo necesitándola para todo que ya no recordaba cómo se sentía hablar, trabajar, estar con mi familia, sin tenerla de fondo.»
            </p>
            <p>
              Eso es lo más difícil de soltar en un consumo así. No es solo la sustancia. Es la identidad construida alrededor de ella. Andrés no sabía quién era Andrés sin aquello que durante años había sido su manera de funcionar en el mundo.
            </p>
          </article>

          {/* FOTOGRAFÍA 05: SIN ELLA NO SABÍA QUIÉN ERA YO */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={animFadeUp}
            className="max-w-4xl mx-auto"
          >
            <StoryImage
              mediaKey="sinElla"
              caption="El miedo a soltar la sustancia cuando durante años fue el único sostén para funcionar y estar a la altura."
            />
          </motion.div>

          {/* CTA INTERMEDIO */}
          <section className="max-w-3xl mx-auto p-8 sm:p-10 rounded-[2rem] bg-[#181E19] border border-white/10 shadow-lg">
            <div className="space-y-4">
              <span className="text-[11px] uppercase tracking-[0.2em] font-sans text-[#6F7C63] font-semibold block">
                Orientación en Mar del Plata
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif text-[#F6F2EA] font-normal">
                Si algo de esta historia se parece a lo que estás viviendo, podemos empezar por hablar de lo que está pasando.
              </h3>
              <p className="text-base sm:text-lg text-[#C8C4BA] font-light leading-relaxed">
                No tenés que esperar a que nada se derrumbe para tener un primer encuentro. En El Faro podemos escucharte con total reserva y pensar juntos los pasos a dar.
              </p>
              <div className="pt-3 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackWhatsAppClick('andres_mid_cta', WHATSAPP_URL)}
                  className="inline-flex items-center justify-center gap-2 bg-[#6F7C63] text-[#F6F2EA] px-7 py-3.5 rounded-full text-xs font-medium tracking-widest uppercase hover:bg-[#5E6B53] transition-colors font-sans text-center shadow-sm"
                >
                  <MessageSquare size={16} />
                  Hablar con El Faro
                </a>
                <Link
                  to="/adicciones-mar-del-plata"
                  className="inline-flex items-center justify-center gap-2 bg-transparent text-[#F6F2EA] border border-white/20 px-6 py-3.5 rounded-full text-xs font-medium tracking-widest uppercase hover:border-white/40 transition-colors font-sans text-center"
                >
                  Conocer cómo trabajamos con las adicciones
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </section>

          {/* BLOQUE 5: EL PRIMER ENCUENTRO (CIERRE HONESTO) */}
          <article className="max-w-3xl mx-auto space-y-6 text-lg sm:text-xl font-serif text-[#C8C4BA] font-normal leading-relaxed">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-[#F6F2EA] font-normal pt-2">
              El primer encuentro: decir la verdad entera por primera vez
            </h2>
            <p>
              Lo que pasó en ese primer encuentro no fue que Andrés decidiera dejarlo de un día para otro.
            </p>
            <p>
              Fue algo anterior, y necesario: pudo decir en voz alta, por primera vez, la historia completa. No la versión que contaba a su familia. No la que se contaba a sí mismo para poder seguir funcionando. La verdad entera, con la mentira, el ocultamiento, la huida y la certeza callada de que supo desde el principio cómo terminaba esto.
            </p>
          </article>

          {/* GRAN CIERRE NARRATIVO */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={animFadeUp}
            className="my-10 sm:my-14 py-8 sm:py-12 border-y border-white/10 text-center max-w-4xl mx-auto px-4"
          >
            <blockquote className="font-serif italic text-2xl sm:text-3xl md:text-4xl text-[#F6F2EA] leading-snug max-w-3xl mx-auto">
              «Decirlo en voz alta no resolvió nada de inmediato. Pero fue la primera vez en años que Andrés no tuvo que sostener una versión de sí mismo. Y eso, después de tanto tiempo actuando, fue suficiente para empezar.»
            </blockquote>
          </motion.div>

          {/* FOTOGRAFÍA 06: EL PRIMER ENCUENTRO (CIERRE) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={animFadeUp}
            className="max-w-4xl mx-auto"
          >
            <StoryImage
              mediaKey="primerEncuentro"
              caption="El primer encuentro: poder decir la historia completa sin disimular y empezar a dejar de estar solo."
            />
          </motion.div>

          {/* ──────────────────────────────────────────────────
              BLOQUE EDITORIAL E INSTITUCIONAL DE EL FARO
              ────────────────────────────────────────────────── */}
          <section className="max-w-4xl mx-auto p-8 sm:p-12 rounded-[2.5rem] bg-[#181E19] border border-white/10 space-y-8">
            <div className="space-y-3">
              <span className="text-xs uppercase tracking-[0.22em] font-sans text-[#6F7C63] font-semibold flex items-center gap-2">
                <Compass size={16} />
                Orientación Profesional · El Faro Mar del Plata
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-[#F6F2EA] font-normal leading-snug">
                El consumo que se sostiene en silencio
              </h2>
            </div>

            <p className="text-lg text-[#C8C4BA] font-light leading-relaxed">
              En El Faro vemos con frecuencia cómo la capacidad de rendir y sostener compromisos laborales o familiares disimula el desgaste real. Algunas claves sobre este tipo de situaciones:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-2">
              <div className="p-6 rounded-2xl bg-[#141915]/80 border border-white/10 space-y-2.5">
                <div className="flex items-center gap-2 text-[#6F7C63] font-sans font-semibold text-sm">
                  <Check size={16} />
                  <span>La apariencia de control como camuflaje</span>
                </div>
                <p className="text-sm text-[#C8C4BA] font-light leading-relaxed">
                  Cumplir con las obligaciones externas no significa que no exista un problema. A menudo permite postergar el pedido de ayuda durante años.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#141915]/80 border border-white/10 space-y-2.5">
                <div className="flex items-center gap-2 text-[#6F7C63] font-sans font-semibold text-sm">
                  <Check size={16} />
                  <span>El consumo para cumplir con la exigencia</span>
                </div>
                <p className="text-sm text-[#C8C4BA] font-light leading-relaxed">
                  Muchas personas recurren a sustancias no para alejarse de la realidad, sino para intentar estar a la altura de lo que se espera de ellas.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#141915]/80 border border-white/10 space-y-2.5">
                <div className="flex items-center gap-2 text-[#6F7C63] font-sans font-semibold text-sm">
                  <Check size={16} />
                  <span>El miedo a perder la identidad</span>
                </div>
                <p className="text-sm text-[#C8C4BA] font-light leading-relaxed">
                  Cuando una sustancia se asocia al rendimiento durante mucho tiempo, dejarla despierta la duda de quién es uno sin ese sostén.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#141915]/80 border border-white/10 space-y-2.5">
                <div className="flex items-center gap-2 text-[#6F7C63] font-sans font-semibold text-sm">
                  <Check size={16} />
                  <span>Consultar antes del colapso visible</span>
                </div>
                <p className="text-sm text-[#C8C4BA] font-light leading-relaxed">
                  No es necesario esperar a que se rompa el trabajo o la familia. Cuanto antes se interviene, mayor margen hay para ordenar la vida.
                </p>
              </div>
            </div>

            {/* Acordeón de FAQs */}
            <div className="pt-6 border-t border-white/10 space-y-4">
              <h3 className="font-serif text-xl sm:text-2xl text-[#F6F2EA] font-normal">
                Preguntas frecuentes sobre consumo y rendimiento
              </h3>
              <div className="space-y-3">
                {faqsAndres.map((faq, idx) => {
                  const isOpen = openFaqIdx === idx;
                  return (
                    <div
                      key={idx}
                      className="border border-white/10 rounded-xl bg-[#141915]/80 overflow-hidden transition-colors"
                    >
                      <button
                        onClick={() => toggleFaq(idx)}
                        className="w-full flex items-center justify-between text-left p-4 sm:p-5 group focus:outline-none"
                      >
                        <span className="font-serif text-lg sm:text-xl text-[#F6F2EA] font-normal group-hover:text-[#C2A675] transition-colors pr-4">
                          {faq.question}
                        </span>
                        <span className={`p-1 rounded-full bg-white/5 text-[#6F7C63] transition-transform duration-200 shrink-0 ${isOpen ? 'rotate-180' : ''}`}>
                          <ChevronDown size={18} />
                        </span>
                      </button>
                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.25, ease: 'easeInOut' }}
                            className="overflow-hidden px-4 sm:px-5 pb-5 text-[#C8C4BA] font-light text-base leading-relaxed"
                          >
                            <p className="border-t border-white/10 pt-3">
                              {faq.answer}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* ──────────────────────────────────────────────────
              CTA FINAL
              ────────────────────────────────────────────────── */}
          <section className="max-w-4xl mx-auto pt-6">
            <div className="bg-[#181E19] border border-white/10 rounded-[2.5rem] p-8 sm:p-12 md:p-16 text-center space-y-6 shadow-xl">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#F6F2EA] font-normal leading-tight">
                No tenés que seguir sosteniendo todo solo
              </h2>
              <p className="text-lg sm:text-xl text-[#C8C4BA] font-light max-w-2xl mx-auto leading-relaxed">
                Podés tener un primer encuentro en Mar del Plata para hablar de lo que te pasa sin juicio, con total reserva y a tu propio ritmo. Si querés hablar de lo que te está pasando, podés escribirnos.
              </p>

              <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackWhatsAppClick('andres_bottom_cta', WHATSAPP_URL)}
                  className="inline-flex items-center justify-center gap-2.5 bg-[#6F7C63] text-[#F6F2EA] px-8 py-4 rounded-full text-xs font-medium tracking-widest uppercase hover:bg-[#5E6B53] transition-all font-sans shadow-sm w-full sm:w-auto"
                >
                  <MessageSquare size={16} />
                  Escribir por WhatsApp
                </a>

                <Link
                  to="/contacto"
                  className="inline-flex items-center justify-center gap-2 bg-white/[0.04] text-[#F6F2EA] border border-white/15 px-8 py-4 rounded-full text-xs font-medium tracking-widest uppercase hover:border-[#C2A675] hover:text-[#C2A675] transition-colors font-sans w-full sm:w-auto"
                >
                  Otras formas de contacto
                  <ArrowRight size={14} />
                </Link>
              </div>

              <div className="pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs sm:text-sm text-[#9A968D] font-sans">
                <Link
                  to="/adicciones-mar-del-plata"
                  className="hover:text-[#C2A675] underline underline-offset-4 transition-colors"
                >
                  Tratamiento de adicciones en Mar del Plata
                </Link>
                <Link
                  to="/como-pedir-ayuda-psicologia-mar-del-plata"
                  className="hover:text-[#C2A675] underline underline-offset-4 transition-colors"
                >
                  Cómo pedir ayuda
                </Link>
                <Link
                  to="/terapia-mar-del-plata"
                  className="hover:text-[#C2A675] underline underline-offset-4 transition-colors"
                >
                  Terapia psicológica
                </Link>
                <Link
                  to="/contacto"
                  className="hover:text-[#C2A675] underline underline-offset-4 transition-colors"
                >
                  Sede Garay 2073 · Contacto
                </Link>
              </div>
            </div>
          </section>

          {/* ──────────────────────────────────────────────────
              OTRAS VOCES: NAVEGACIÓN HACIA MARÍA Y HUB
              ────────────────────────────────────────────────── */}
          <section className="max-w-3xl mx-auto pt-8 border-t border-white/10 text-center space-y-6">
            <div className="space-y-2">
              <span className="text-xs uppercase tracking-[0.2em] font-sans text-[#6F7C63] font-semibold block">
                Las Voces del Faro
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#F6F2EA] font-normal">
                Otras historias en primera persona
              </h3>
            </div>

            {/* Tarjeta de enlace a María */}
            <div className="p-6 sm:p-8 rounded-2xl bg-[#181E19] border border-white/10 text-left hover:border-[#6F7C63]/40 transition-all shadow-md group">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="space-y-1.5">
                  <span className="text-[11px] uppercase tracking-wider font-sans text-[#6F7C63] font-semibold block">
                    LAS VOCES DEL FARO · MARÍA
                  </span>
                  <h4 className="text-xl sm:text-2xl font-serif text-[#F6F2EA] group-hover:text-[#C2A675] transition-colors">
                    <Link to="/voces/maria-hijo-adicciones-mar-del-plata">
                      Mi hijo consumía y yo ya no sabía cómo ayudarlo
                    </Link>
                  </h4>
                  <p className="text-sm text-[#C8C4BA] font-light">
                    Una madre, un hijo y años intentando encontrar una salida desde Mar del Plata.
                  </p>
                </div>
                <Link
                  to="/voces/maria-hijo-adicciones-mar-del-plata"
                  className="inline-flex items-center gap-2 bg-white/[0.04] text-[#F6F2EA] border border-white/15 px-5 py-2.5 rounded-full text-xs font-medium tracking-wider uppercase hover:border-[#C2A675] hover:text-[#C2A675] transition-colors font-sans shrink-0"
                >
                  <span>Leer historia</span>
                  <ArrowRight size={13} />
                </Link>
              </div>
            </div>

            <div className="pt-2">
              <Link
                to="/voces"
                className="inline-flex items-center gap-2 text-[#6F7C63] font-sans text-xs font-semibold tracking-widest uppercase hover:text-[#F6F2EA] transition-colors"
              >
                <ArrowLeft size={14} />
                Volver al espacio de Voces
              </Link>
            </div>
          </section>

        </div>
      </main>
    </div>
  );
}
