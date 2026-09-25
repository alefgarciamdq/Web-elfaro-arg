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
  Heart,
  HelpCircle
} from 'lucide-react';
import { Head } from 'vite-react-ssg';
import { motion, AnimatePresence, useReducedMotion, type Variants } from 'framer-motion';
import JsonLd from './JsonLd';
import { trackWhatsAppClick } from '../utils/telemetry';

const WHATSAPP_URL = 'https://wa.me/5492235923790?text=Hola,%20quisiera%20hacer%20una%20consulta%20en%20El%20Faro.';

// Catálogo de imágenes marplatenses de Carlos en WebP optimizado + fallback JPG
const CARLOS_MEDIA = {
  hero: {
    webpSrc: '/voces/carlos/carlos-01-apertura-mar-del-plata.webp',
    jpgSrc: '/voces/carlos/carlos-01-apertura-mar-del-plata.jpg',
    alt: 'Carlos sentado junto a una ventana al atardecer en Mar del Plata, contemplando el horizonte en penumbra'
  },
  caminoCompartido: {
    webpSrc: '/voces/carlos/carlos-02-carlos-sonia-camino-compartido.webp',
    jpgSrc: '/voces/carlos/carlos-02-carlos-sonia-camino-compartido.jpg',
    alt: 'Carlos y Sonia caminando juntos al atardecer por una calle costera de Mar del Plata, de espaldas',
    caption: 'Durante años Carlos y Sonia recorrieron juntos distintos lugares buscando una manera de ayudar a su hija.'
  },
  ausenciaSonia: {
    webpSrc: '/voces/carlos/carlos-03-ausencia-sonia.webp',
    jpgSrc: '/voces/carlos/carlos-03-ausencia-sonia.jpg',
    alt: 'Carlos sentado en un interior sereno junto a una mesa donde permanece una silla vacía, de perfil suave',
    caption: 'Seguir caminando solo: el duelo por la compañera de vida y la necesidad de continuar presente para Lucía.'
  },
  mensajeWhatsapp: {
    webpSrc: '/voces/carlos/carlos-04-mensaje-whatsapp.webp',
    jpgSrc: '/voces/carlos/carlos-04-mensaje-whatsapp.jpg',
    alt: 'Manos de Carlos sosteniendo un teléfono móvil sobre una mesa de café en Mar del Plata',
    caption: 'El primer contacto: a veces el siguiente paso no es un plan gigantesco, sino animarse a pedir orientación.'
  },
  mirarseIdentidad: {
    webpSrc: '/voces/carlos/carlos-05-mirarse-identidad.webp',
    jpgSrc: '/voces/carlos/carlos-05-mirarse-identidad.jpg',
    alt: 'Carlos de espaldas frente al mar en Mar del Plata, contemplando la amplitud del horizonte',
    caption: 'Mirar hacia adentro: comprender que acompañar a un hijo exige también hacerse cargo de las propias heridas.'
  },
  carlosLuciaCierre: {
    webpSrc: '/voces/carlos/carlos-06-carlos-lucia-cierre.webp',
    jpgSrc: '/voces/carlos/carlos-06-carlos-lucia-cierre.jpg',
    alt: 'Carlos y su hija Lucía caminando juntos de espaldas por la costanera de Mar del Plata al atardecer',
    caption: 'Caminar juntos: cuando el acompañamiento deja de ser un intento de rescate y se convierte en un espacio compartido de amor y respeto.'
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
  mediaKey: keyof typeof CARLOS_MEDIA;
  className?: string;
  imgClassName?: string;
  sizes?: string;
  caption?: string;
}) {
  const media = CARLOS_MEDIA[mediaKey];
  const finalCaption = caption || ('caption' in media ? media.caption : undefined);

  return (
    <figure className={`relative ${className}`}>
      <div className="overflow-hidden rounded-2xl sm:rounded-3xl bg-[#181E19] shadow-sm border border-white/10 aspect-[16/9]">
        <picture>
          <source type="image/webp" srcSet={media.webpSrc} />
          <img
            src={media.jpgSrc}
            alt={media.alt}
            width={1672}
            height={941}
            loading="lazy"
            decoding="async"
            sizes={sizes}
            className={`w-full h-full object-cover transition-transform duration-700 hover:scale-[1.015] ${imgClassName}`}
          />
        </picture>
      </div>
      {finalCaption && (
        <figcaption className="mt-3 px-2 text-xs sm:text-sm text-[#9A968D] font-sans font-light italic leading-relaxed text-center sm:text-left">
          {finalCaption}
        </figcaption>
      )}
    </figure>
  );
}

export default function VozCarlosHijaAdicciones() {
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

  const faqsCarlos = [
    {
      question: '¿Qué puedo hacer si mi hijo consume drogas y no quiere pedir ayuda?',
      answer: 'Es una situación difícil y muy frecuente para las familias. Aunque no es posible obligar a otra persona adulta a iniciar un tratamiento si no lo desea, la familia no tiene por qué quedarse sola esperando. Consultar con un equipo especializado brinda un espacio para entender mejor qué está pasando, evaluar la situación con mayor serenidad y pensar cómo posicionarse en el día a día, sin desgastarse en intentos que no vienen funcionando.'
    },
    {
      question: '¿Puede una familia pedir orientación aunque la persona que consume no quiera asistir?',
      answer: 'Sí. Muchas consultas familiares comienzan justamente de esa manera. Una orientación profesional no busca forzar al otro a cambiar ni promete resultados mágicos, sino ofrecer un lugar donde la familia pueda revisar cómo está acompañando, pensar límites posibles y cuidar también a quienes llevan años intentando ayudar.'
    },
    {
      question: '¿Cómo acompañar a un hijo con una adicción sin hacerse cargo de todo ni enfermarse en el intento?',
      answer: 'Acompañar durante años suele generar un desgaste silencioso y muy profundo en el entorno cercano. Por eso es importante que quienes acompañan cuenten también con un espacio propio. Pensar los límites no implica desentenderse ni actuar con dureza, sino poder distinguir hasta dónde es posible intervenir y cómo cuidar la propia salud y el equilibrio cotidiano mientras se sigue presente.'
    },
    {
      question: '¿Qué puede hacer un padre o una madre cuando lleva años intentando ayudar sin ver cambios?',
      answer: 'Después de mucho tiempo de búsqueda, es comprensible sentir agotamiento y desánimo. En esos momentos puede ser valioso hacer una pausa y mirar cómo está el propio padre o madre. Un espacio de orientación permite poner en palabras ese cansancio acumulado, revisar el camino recorrido y pensar de qué manera continuar acompañando sin descuidar la propia vida.'
    }
  ];

  return (
    <div className="bg-[#141915] min-h-screen text-[#C8C4BA] selection:bg-[#6F7C63]/30 overflow-x-hidden">
      <Head>
        <title>Acompañar a un hijo con adicciones: la historia de Carlos y Lucía | El Faro</title>
        <meta
          name="description"
          content="Lucía había empezado a consumir a los 16. Al momento de este relato, tenía 42. Veintiséis años de búsqueda, dolor y amor de un padre que aprendió a mirarse. Las Voces del Faro Mar del Plata."
        />
        <link rel="canonical" href="https://programaelfaro.com.ar/voces/carlos-hija-adicciones-mar-del-plata" />
        <meta property="og:title" content="Acompañar a un hijo con adicciones: la historia de Carlos y Lucía | El Faro" />
        <meta
          property="og:description"
          content="Lucía había empezado a consumir a los 16. Al momento de este relato, tenía 42. Veintiséis años de búsqueda, dolor y amor de un padre que aprendió a mirarse. Las Voces del Faro Mar del Plata."
        />
        <meta property="og:url" content="https://programaelfaro.com.ar/voces/carlos-hija-adicciones-mar-del-plata" />
        <meta property="og:type" content="article" />
        <meta property="og:image" content="https://programaelfaro.com.ar/voces/carlos/carlos-01-apertura-mar-del-plata.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Acompañar a un hijo con adicciones: la historia de Carlos y Lucía | El Faro" />
        <meta
          name="twitter:description"
          content="Lucía había empezado a consumir a los 16. Al momento de este relato, tenía 42. Veintiséis años de búsqueda, dolor y amor de un padre que aprendió a mirarse. Las Voces del Faro Mar del Plata."
        />
        <meta name="twitter:image" content="https://programaelfaro.com.ar/voces/carlos/carlos-01-apertura-mar-del-plata.jpg" />
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
            "name": "La historia de Carlos",
            "item": "https://programaelfaro.com.ar/voces/carlos-hija-adicciones-mar-del-plata"
          }
        ]
      }} />

      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "«Lucía me ayudó tanto.»",
        "description": "Durante años Carlos creyó que era él quien tenía que ayudar a su hija. Con el tiempo descubrió que acompañarla también lo estaba cambiando a él.",
        "image": "https://programaelfaro.com.ar/voces/carlos/carlos-01-apertura-mar-del-plata.jpg",
        "inLanguage": "es-AR",
        "mainEntityOfPage": "https://programaelfaro.com.ar/voces/carlos-hija-adicciones-mar-del-plata",
        "author": {
          "@type": "Person",
          "name": "Carlos"
        },
        "publisher": {
          "@type": "Organization",
          "name": "El Faro",
          "url": "https://programaelfaro.com.ar"
        }
      }} />

      {/* ──────────────────────────────────────────────────
          1. HERO EDITORIAL DE CARLOS CON FOTOGRAFÍA 01 (TEXTO IZQUIERDA / CARLOS DERECHA)
          ────────────────────────────────────────────────── */}
      <section className="relative min-h-[78vh] md:min-h-[85vh] lg:min-h-[92vh] flex items-end overflow-hidden pt-24 sm:pt-28 pb-14 sm:pb-16 md:pb-20">
        {/* Imagen Hero de Fondo */}
        <div className="absolute inset-0 z-0">
          <picture>
            <source type="image/webp" srcSet={CARLOS_MEDIA.hero.webpSrc} />
            <img
              src={CARLOS_MEDIA.hero.jpgSrc}
              alt={CARLOS_MEDIA.hero.alt}
              width={1672}
              height={941}
              fetchPriority="high"
              loading="eager"
              decoding="async"
              className="w-full h-full object-cover object-[75%_center] sm:object-[78%_center] md:object-[80%_center] lg:object-[right_center] brightness-[0.88] contrast-[1.04]"
            />
          </picture>
          {/* Overlay suave */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#141915] via-[#141915]/60 to-transparent lg:bg-gradient-to-r lg:from-[#141915]/90 lg:via-[#141915]/50 lg:to-transparent" />
          
          {/* DIFUMINADO / FADE PROGRESIVO INFERIOR HACIA EL FONDO OSCURO */}
          <div className="absolute inset-x-0 bottom-0 h-36 sm:h-52 md:h-64 lg:h-72 bg-gradient-to-b from-transparent via-[#141915]/70 to-[#141915] pointer-events-none" />
        </div>

        {/* Contenido del Hero: alineado a la IZQUIERDA en pantallas amplias */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 xl:px-16">
          <div className="flex justify-start w-full">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={animFadeUp}
              className="w-full lg:w-[50%] xl:w-[46%] lg:max-w-[560px] space-y-4 sm:space-y-5 pb-4 sm:pb-6 text-left"
            >
              {/* Navegación sutil hacia el Hub */}
              <Link
                to="/voces"
                className="inline-flex items-center gap-2 text-xs uppercase font-sans tracking-[0.25em] text-[#C8C4BA] hover:text-[#F6F2EA] transition-colors duration-200"
              >
                <ArrowLeft size={14} />
                <span>Las Voces del Faro</span>
              </Link>

              <div className="space-y-2.5 sm:space-y-3">
                <span className="block text-[11px] sm:text-xs uppercase font-sans tracking-[0.25em] text-[#C2A675] font-semibold">
                  LAS VOCES DEL FARO · CARLOS
                </span>

                <h1 className="text-3xl sm:text-4xl lg:text-[2.65rem] xl:text-[2.85rem] font-serif text-[#F6F2EA] font-normal leading-[1.16] tracking-tight drop-shadow-sm">
                  «Lucía me ayudó tanto.»
                </h1>
              </div>

              <p className="text-base sm:text-lg lg:text-xl text-[#C8C4BA] font-light font-serif leading-relaxed drop-shadow-sm">
                Durante años Carlos creyó que era él quien tenía que ayudar a su hija. Con el tiempo descubrió que acompañarla también lo estaba cambiando a él.
              </p>

              <div className="pt-1 flex flex-wrap items-center gap-y-2 gap-x-3 text-xs text-[#9A968D] font-sans font-light">
                <span className="inline-flex items-center gap-1.5">
                  <Clock size={13} className="text-[#C2A675]" />
                  7 min de lectura
                </span>
                <span className="text-white/20">•</span>
                <span>Testimonio real</span>
                <span className="text-white/20">•</span>
                <span>Mar del Plata</span>
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

          {/* ──────────────────────────────────────────────────
              2. APERTURA: EL PESO DE LOS 26 AÑOS
              ────────────────────────────────────────────────── */}
          <article className="max-w-3xl mx-auto space-y-6 text-lg sm:text-xl font-serif text-[#C8C4BA] font-normal leading-relaxed">
            <p className="first-letter:float-left first-letter:text-5xl sm:first-letter:text-6xl first-letter:pr-3 first-letter:font-serif first-letter:text-[#6F7C63] first-letter:leading-none">
              Durante muchos años pensé que mi tarea era ayudar a Lucía.
            </p>
            <p>
              Lucía empezó a consumir cuando tenía 16 años. En el momento en que me senté a contar esto, ella tenía 42.
            </p>
            <p>
              Son veintiséis años. Cuando uno lo dice rápido parece una cifra, un número que entra en una frase. Pero adentro de esos veintiséis años cabe una vida entera de incertidumbre, de cansancio y de preocupación constante.
            </p>
            <p>
              Durante todo ese tiempo, casi cada decisión giró alrededor de una sola inquietud: qué más podía hacer.
            </p>
          </article>

          {/* MARCADOR TEMPORAL EDITORIAL */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={animFadeUp}
            className="max-w-xl mx-auto p-6 rounded-2xl bg-[#181E19] border border-white/10 text-center space-y-2"
          >
            <span className="text-[11px] uppercase tracking-[0.2em] font-sans text-[#6F7C63] font-semibold block">
              El paso del tiempo
            </span>
            <div className="flex items-center justify-center gap-3 sm:gap-6 font-serif text-xl sm:text-2xl md:text-3xl text-[#F6F2EA]">
              <div className="flex flex-col items-center">
                <span>16 años</span>
                <span className="text-[10px] sm:text-xs font-sans text-[#9A968D] uppercase tracking-wider">Inicio</span>
              </div>
              <span className="text-[#6F7C63]">→</span>
              <div className="flex flex-col items-center">
                <span className="text-[#C2A675] font-normal">26 años</span>
                <span className="text-[10px] sm:text-xs font-sans text-[#9A968D] uppercase tracking-wider">De búsqueda</span>
              </div>
              <span className="text-[#6F7C63]">→</span>
              <div className="flex flex-col items-center">
                <span>42 años</span>
                <span className="text-[10px] sm:text-xs font-sans text-[#9A968D] uppercase tracking-wider">Al relatarlo</span>
              </div>
            </div>
            <p className="text-xs font-sans text-[#9A968D] pt-1">
              Un camino que atravesó distintas etapas, lugares y maneras de entender la ayuda.
            </p>
          </motion.div>

          {/* ──────────────────────────────────────────────────
              3. CARLOS Y SONIA: EL CAMINO COMPARTIDO
              ────────────────────────────────────────────────── */}
          <article className="max-w-3xl mx-auto space-y-6 text-lg sm:text-xl font-serif text-[#C8C4BA] font-normal leading-relaxed">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-[#F6F2EA] font-normal pt-2">
              Probarlo todo
            </h2>
            <p>
              Durante muchos años no estuve solo en esta búsqueda. Sonia, mi esposa, estuvo a mi lado desde el primer día.
            </p>
            <p>
              Los dos recorrimos juntos todo lo que pudimos encontrar. Fuimos a distintos lugares, consultamos con diferentes profesionales, escuchamos pautas y consejos que con frecuencia se contradecían entre sí.
            </p>
            <p>
              En algunos momentos nos decían que había que ser firmes, poner límites estrictos, cerrar puertas, dejar que tocara fondo. En otros momentos, otros terapeutas nos explicaban que había que ser flexibles, comprensivos, no soltarla nunca, acompañar sin juzgar.
            </p>
            <p>
              Probamos las dos cosas. Hubo etapas en las que fui más duro y etapas en las que fui más permisivo. Estaba influido por lo que me decían los profesionales en cada etapa, pero también por mi propia desesperación.
            </p>
            <p className="border-l-2 border-[#6F7C63] pl-6 italic text-[#F6F2EA]">
              No cambiaba porque me diera lo mismo. Cambiaba precisamente porque me importaba demasiado.
            </p>
          </article>

          {/* CARLOS 02 — CARLOS + SONIA / CAMINO COMPARTIDO */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={animFadeUp}
            className="max-w-4xl mx-auto"
          >
            <StoryImage
              mediaKey="caminoCompartido"
            />
          </motion.div>

          {/* ──────────────────────────────────────────────────
              4. SONIA: DESPUÉS FALTÓ SONIA
              ────────────────────────────────────────────────── */}
          <section className="max-w-3xl mx-auto space-y-6">
            <div className="p-8 sm:p-12 rounded-[2.5rem] bg-[#181E19] text-[#C8C4BA] border border-white/10 space-y-6 shadow-md">
              <span className="text-xs uppercase tracking-[0.22em] font-sans text-[#C2A675] font-semibold block">
                La pérdida
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#F6F2EA] font-normal leading-tight">
                Después faltó Sonia.
              </h2>
              <div className="space-y-5 text-base sm:text-lg text-[#C8C4BA] font-light leading-relaxed font-serif">
                <p>
                  Sonia era mi esposa y la madre de Lucía. Durante años habíamos acompañado juntos a nuestra hija, buscando ayuda y recurriendo a distintos lugares y profesionales.
                </p>
                <p>
                  Cuando Sonia falleció, quedé profundamente sacudido. Perder a mi compañera de vida fue un golpe inmenso, y de pronto me encontré solo frente a una realidad que ya de a dos era muy difícil de llevar.
                </p>
                <p>
                  El dolor de la pérdida no frenó el consumo de Lucía. A pesar del cansancio, del miedo y de la soledad, continué acompañándola. Lucía seguía siendo mi hija.
                </p>
              </div>
            </div>
          </section>

          {/* CARLOS 03 — AUSENCIA DE SONIA */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={animFadeUp}
            className="max-w-4xl mx-auto"
          >
            <StoryImage
              mediaKey="ausenciaSonia"
            />
          </motion.div>

          {/* ──────────────────────────────────────────────────
              5. VER A LUCÍA: EL NÚCLEO EMOCIONAL
              ────────────────────────────────────────────────── */}
          <article className="max-w-3xl mx-auto space-y-6 text-lg sm:text-xl font-serif text-[#C8C4BA] font-normal leading-relaxed">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-[#F6F2EA] font-normal pt-2">
              Seguir viendo a mi hija
            </h2>
            <p>
              Yo podía ver el consumo. Lo veía todos los días. Veía el deterioro, el dolor y las dificultades que atravesaba nuestra familia.
            </p>
            <p>
              Podía cansarme. Me cansé muchas veces. Me equivoqué otras tantas, diciendo cosas en momentos de enojo de las que después me arrepentí, o callando cuando tendría que haber hablado.
            </p>
            <p>
              Pero hubo algo que nunca dejé de hacer: nunca dejé de ver a Lucía.
            </p>
            <p>
              No a una etiqueta. No a un caso clínico para resolver. No a un problema que había que sacarse de encima. A Lucía. Mi hija. Una persona de carne y hueso que estaba sufriendo y que no encontraba la forma de salir del lugar donde estaba atrapada.
            </p>
          </article>

          {/* DESTACADO EDITORIAL */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={animFadeUp}
            className="my-10 sm:my-14 py-8 sm:py-12 border-y border-white/10 text-center max-w-4xl mx-auto px-4"
          >
            <p className="font-serif italic text-2xl sm:text-3xl md:text-4xl text-[#F6F2EA] leading-snug max-w-3xl mx-auto">
              Podía ver el consumo, podía cansarme y podía tener miedo. Pero nunca dejé de ver a Lucía como mi hija y como una persona que sufría.
            </p>
          </motion.div>

          {/* ──────────────────────────────────────────────────
              6. BLOQUE DE IDENTIFICACIÓN: ¿HASTA DÓNDE SE ACOMPAÑA?
              ────────────────────────────────────────────────── */}
          <section className="max-w-3xl mx-auto p-8 sm:p-12 rounded-[2.5rem] bg-[#181E19] border border-white/10 space-y-6">
            <div className="space-y-2">
              <span className="text-[11px] uppercase tracking-[0.2em] font-sans text-[#6F7C63] font-semibold block">
                Preguntas que no tienen receta
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#F6F2EA] font-normal">
                ¿Hasta dónde se acompaña a un hijo?
              </h3>
              <p className="text-base sm:text-lg text-[#C8C4BA] font-light leading-relaxed">
                Cualquier familia que convive con el consumo problemático de drogas conoce estas preguntas. Se repiten a medianoche, en el auto, en la mesa:
              </p>
            </div>

            <div className="space-y-4 pt-2">
              <div className="p-5 rounded-2xl bg-[#141915] border border-white/10 space-y-2">
                <div className="flex items-center gap-2 text-[#C2A675] font-sans font-medium text-sm">
                  <HelpCircle size={16} />
                  <span>¿Estoy ayudando o estoy sosteniendo algo que le hace mal?</span>
                </div>
                <p className="text-sm text-[#C8C4BA]/90 font-light leading-relaxed">
                  La duda permanente sobre si intervenir resuelve una urgencia o prolonga el circuito del consumo.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#141915] border border-white/10 space-y-2">
                <div className="flex items-center gap-2 text-[#C2A675] font-sans font-medium text-sm">
                  <HelpCircle size={16} />
                  <span>¿Estoy poniendo un límite sano o la estoy abandonando?</span>
                </div>
                <p className="text-sm text-[#C8C4BA]/90 font-light leading-relaxed">
                  El temor a que marcar una distancia necesaria sea vivido por el hijo como un rechazo irreparable.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#141915] border border-white/10 space-y-2">
                <div className="flex items-center gap-2 text-[#C2A675] font-sans font-medium text-sm">
                  <HelpCircle size={16} />
                  <span>¿Estoy haciendo demasiado o me estoy quedando corto?</span>
                </div>
                <p className="text-sm text-[#C8C4BA]/90 font-light leading-relaxed">
                  La culpa que aparece tanto al involucrarse a fondo como al intentar proteger la propia vida y el descanso.
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm font-sans italic text-[#9A968D] pt-2 text-center">
              No existen respuestas de manual para estas dudas. Cada familia las va respondiendo en la intimidad de su propio proceso.
            </p>
          </section>

          {/* ──────────────────────────────────────────────────
              7. EL MENSAJE DE WHATSAPP: CAMBIO DE RITMO
              ────────────────────────────────────────────────── */}
          <article className="max-w-3xl mx-auto space-y-6 text-lg sm:text-xl font-serif text-[#C8C4BA] font-normal leading-relaxed">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-[#F6F2EA] font-normal pt-2">
              Un mensaje después de veintiséis años
            </h2>
            <p>
              Después de tantos años de deambular, después de tantas consultas y de tantos intentos, el acercamiento a El Faro empezó de la manera más simple que uno pueda imaginar.
            </p>
            <p>
              No fue una derivación judicial ni un ingreso de urgencia. Fue un mensaje de WhatsApp.
            </p>
            <p>
              Escribí brevemente lo que estábamos viviendo. Del otro lado encontré una respuesta humana, sin protocolos distantes. Me ofrecieron un espacio de orientación con tranquilidad.
            </p>
            <p>
              Poco después llegué de manera presencial a su espacio de Mar del Plata.
            </p>
          </article>

          {/* CARLOS 04 — WHATSAPP / PEDIR AYUDA */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={animFadeUp}
            className="max-w-4xl mx-auto"
          >
            <StoryImage
              mediaKey="mensajeWhatsapp"
            />
          </motion.div>

          {/* ──────────────────────────────────────────────────
              8. EL PRIMER ENCUENTRO: LA HISTORIA QUE SE AMPLÍA
              ────────────────────────────────────────────────── */}
          <article className="max-w-3xl mx-auto space-y-6 text-lg sm:text-xl font-serif text-[#C8C4BA] font-normal leading-relaxed">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-[#F6F2EA] font-normal pt-2">
              El primer encuentro
            </h2>
            <p>
              El primer contacto con El Faro fue a través de un mensaje de WhatsApp. Poco después llegué de manera presencial a su espacio en Mar del Plata.
            </p>
            <p>
              Allí conté la historia de mi familia. Hablé de Lucía desde sus 16 años, hablé de Sonia, hablé de los caminos recorridos a lo largo de más de dos décadas y de los momentos de miedo que habíamos atravesado.
            </p>
            <p>
              Al relatar lo que habíamos vivido, no hablé únicamente de mi hija ni me coloqué en el lugar de un observador ajeno: me incluí también a mí mismo, asumiendo mi propio lugar en todo ese tiempo.
            </p>
            <p className="font-serif text-2xl sm:text-3xl text-[#C2A675] leading-snug pt-2">
              Con el tiempo, ese espacio me permitió expresar algo que transformó el sentido de todo lo transitado: comprender que Lucía me había ayudado a trabajar sobre mí mismo y a mirar mi propia historia.
            </p>
          </article>

          {/* ──────────────────────────────────────────────────
              9. CLÍMAX: «LUCÍA ME AYUDÓ TANTO»
              ────────────────────────────────────────────────── */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={animFadeUp}
            className="my-10 sm:my-14 py-10 sm:py-14 border-y border-white/10 text-center max-w-4xl mx-auto px-4 bg-[#181E19]/40 rounded-3xl"
          >
            <span className="text-xs uppercase tracking-[0.25em] font-sans text-[#6F7C63] font-semibold block mb-4">
              La inversión del camino
            </span>
            <blockquote className="font-serif italic text-2xl sm:text-3xl md:text-4xl text-[#F6F2EA] leading-snug max-w-3xl mx-auto">
              “Lucía me ayudó a trabajar sobre mí, a sanar mis heridas, a ver mi propia historia. Lucía me ayudó tanto.”
            </blockquote>
            <p className="mt-4 text-xs font-sans text-[#9A968D] uppercase tracking-widest">
              Carlos · El Faro Mar del Plata
            </p>
          </motion.div>

          <article className="max-w-3xl mx-auto space-y-6 text-lg sm:text-xl font-serif text-[#C8C4BA] font-normal leading-relaxed">
            <p>
              Durante veintiséis años la ecuación parecía indiscutible: Lucía era quien necesitaba ayuda y yo era quien tenía que ayudarla.
            </p>
            <p>
              Esa certeza, que parecía tan noble, también me había servido de refugio. Mientras todo el foco estaba puesto en ella y en lo que consumía, yo no tenía que mirar mis propios dolores, ni mis duelos no resueltos, ni las exigencias con las que había vivido toda la vida.
            </p>
            <p>
              El proceso terapéutico no resolvió el consumo de Lucía de un día para el otro. Pero hizo algo que transformó todo el vínculo: me devolvió la mirada hacia mí mismo. Empecé a entender que no podía estar entero para mi hija si yo mismo estaba roto por dentro y no me permitía reconocerlo.
            </p>
          </article>

          {/* CARLOS 05 — MIRARSE / IDENTIDAD */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={animFadeUp}
            className="max-w-4xl mx-auto"
          >
            <StoryImage
              mediaKey="mirarseIdentidad"
            />
          </motion.div>

          {/* ──────────────────────────────────────────────────
              10. «LUCÍA PUSO SU CUERPO...»
              ────────────────────────────────────────────────── */}
          <article className="max-w-3xl mx-auto space-y-6 text-lg sm:text-xl font-serif text-[#C8C4BA] font-normal leading-relaxed">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-[#F6F2EA] font-normal pt-2">
              Poner el cuerpo
            </h2>
            <p>
              Tiempo después, al reflexionar sobre ese recorrido, Carlos expresó una frase que condensa la hondura de lo que había comprendido:
            </p>
            <blockquote className="my-6 border-l-2 border-[#6F7C63] pl-6 py-2 text-2xl sm:text-3xl font-serif italic text-[#F6F2EA]">
              “Lucía puso su cuerpo para que pudiéramos vernos a los ojos.”
            </blockquote>
            <p>
              No lo dijo para romantizar el consumo de drogas ni para justificar el sufrimiento. Las adicciones representaron un dolor real y constante que desgastó a una familia entera durante décadas.
            </p>
            <p>
              Lo dijo desde la honestidad de quien descubre que, a veces, la situación límite de un hijo es lo que obliga a una familia a detenerse y mirarse de frente.
            </p>
          </article>

          {/* ──────────────────────────────────────────────────
              11. EL ABRAZO
              ────────────────────────────────────────────────── */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={animFadeUp}
            className="my-10 sm:my-14 py-10 sm:py-12 border-y border-white/10 text-center max-w-4xl mx-auto px-4"
          >
            <blockquote className="font-serif italic text-2xl sm:text-3xl md:text-4xl text-[#F6F2EA] leading-snug max-w-3xl mx-auto">
              “Por Lucía conocí lo que es un abrazo.”
            </blockquote>
            <p className="mt-4 text-xs font-sans text-[#6F7C63] uppercase tracking-[0.2em] font-semibold">
              El afecto que sostiene
            </p>
          </motion.div>

          {/* ──────────────────────────────────────────────────
              12. IDENTIFICACIÓN CON EL LECTOR: QUIZÁS CONOCÉS ESTA HISTORIA
              ────────────────────────────────────────────────── */}
          <section className="max-w-3xl mx-auto p-8 sm:p-10 rounded-[2rem] bg-[#181E19] border border-white/10 space-y-6">
            <div className="space-y-2">
              <span className="text-[11px] uppercase tracking-[0.2em] font-sans text-[#6F7C63] font-semibold block">
                Para familias que acompañan
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#F6F2EA] font-normal">
                Quizás conocés esta historia
              </h3>
            </div>

            <p className="text-base sm:text-lg text-[#C8C4BA] font-light leading-relaxed">
              Si sos padre, madre o familiar de alguien que consume drogas, probablemente reconozcas la sensación de que tu vida entera quedó suspendida alrededor de la vida de otro.
            </p>

            <ul className="space-y-4 text-base sm:text-lg text-[#C8C4BA] font-light leading-relaxed">
              <li className="flex items-start gap-3">
                <span className="p-1 rounded-full bg-[#6F7C63]/20 text-[#C2A675] shrink-0 mt-1">
                  <Check size={14} />
                </span>
                <span>Llevás años intentando distintas opciones y sentís que nada termina de consolidarse.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="p-1 rounded-full bg-[#6F7C63]/20 text-[#C2A675] shrink-0 mt-1">
                  <Check size={14} />
                </span>
                <span>Sentís culpa cuando descansás o cuando intentás hacer algo por tu propia cuenta.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="p-1 rounded-full bg-[#6F7C63]/20 text-[#C2A675] shrink-0 mt-1">
                  <Check size={14} />
                </span>
                <span>Probaste ser firme y ser tolerante, y en los dos casos te quedaste con dudas.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="p-1 rounded-full bg-[#6F7C63]/20 text-[#C2A675] shrink-0 mt-1">
                  <Check size={14} />
                </span>
                <span>Estás cansado, pero no querés ni podés soltar el vínculo con esa persona a la que amás.</span>
              </li>
            </ul>

            <p className="text-sm font-sans text-[#9A968D] pt-2 leading-relaxed">
              Pedir orientación profesional para vos no significa traicionar a tu familiar ni darte por vencido. Significa encontrar un lugar donde ordenar lo que te pasa para poder seguir acompañando de una manera más sana y duradera.
            </p>
          </section>

          {/* ──────────────────────────────────────────────────
              13. CIERRE NARRATIVO: ¿QUIÉN AYUDA A QUIÉN?
              ────────────────────────────────────────────────── */}
          <article className="max-w-3xl mx-auto space-y-6 text-lg sm:text-xl font-serif text-[#C8C4BA] font-normal leading-relaxed">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-[#F6F2EA] font-normal pt-2">
              ¿Quién ayuda a quién?
            </h2>
            <p>
              Cuando Carlos contó esta historia, él y Lucía seguían caminando juntos.
            </p>
            <p>
              No había un cartel de final feliz ni una promesa de que nada volvería a doler. Pero había algo mucho más real: un padre que ya no actuaba desde la desesperación ni desde la culpa, y una hija que sabía que su padre estaba ahí, mirándola como persona y no como un síntoma.
            </p>
            <p>
              A veces, después de recorrer tanto camino, las certezas cambian de lugar. Ya no queda tan claro quién ayuda a quién. Lo único que queda claro es el amor que se sostuvo a través del tiempo.
            </p>
          </article>

          {/* CARLOS 06 — CARLOS + LUCÍA / CIERRE */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={animFadeUp}
            className="max-w-4xl mx-auto"
          >
            <StoryImage
              mediaKey="carlosLuciaCierre"
            />
          </motion.div>

          {/* ──────────────────────────────────────────────────
              14. BLOQUE INSTITUCIONAL DE EL FARO (APARICIÓN TARDÍA Y MODERADA)
              ────────────────────────────────────────────────── */}
          <section className="max-w-4xl mx-auto p-8 sm:p-12 rounded-[2.5rem] bg-[#181E19] border border-white/10 space-y-8">
            <div className="space-y-3">
              <span className="text-xs uppercase tracking-[0.22em] font-sans text-[#6F7C63] font-semibold flex items-center gap-2">
                <Compass size={16} />
                Orientación a Familias · El Faro Mar del Plata
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-[#F6F2EA] font-normal leading-snug">
                Cuando la familia necesita un espacio propio
              </h2>
            </div>

            <div className="space-y-4 text-base sm:text-lg text-[#C8C4BA] font-light leading-relaxed">
              <p>
                Cuando alguien de la familia tiene un problema con las drogas, no es necesario esperar a que esa persona quiera pedir ayuda para empezar a entender qué está pasando.
              </p>
              <p>
                Un padre, una madre, una pareja o un hermano también pueden pedir un primer encuentro. No para recibir una receta mágica sobre cómo cambiar al otro, sino para encontrar un espacio donde ordenar lo que sienten, poner en palabras el agotamiento y aprender a acompañar sin desaparecer en el intento.
              </p>
              <p>
                En El Faro brindamos orientación interdisciplinaria y humana en nuestro espacio de Garay 2073, en Mar del Plata, y también respondemos consultas iniciales por WhatsApp.
              </p>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsAppClick('carlos_bottom_cta', WHATSAPP_URL)}
                className="inline-flex items-center justify-center gap-2 bg-[#6F7C63] text-[#F6F2EA] px-8 py-4 rounded-full text-xs font-medium tracking-widest uppercase hover:bg-[#5E6B53] transition-colors font-sans text-center shadow-sm"
              >
                <MessageSquare size={16} />
                Pedir un primer encuentro
              </a>

              <Link
                to="/adicciones-mar-del-plata"
                className="inline-flex items-center justify-center gap-2 bg-[#141915] text-[#F6F2EA] border border-white/15 px-7 py-4 rounded-full text-xs font-medium tracking-widest uppercase hover:bg-[#141915]/80 transition-colors font-sans text-center"
              >
                Conocer cómo trabajamos con las adicciones
                <ArrowRight size={14} />
              </Link>
            </div>
          </section>

          {/* ──────────────────────────────────────────────────
              15. ACORDEÓN DE PREGUNTAS FRECUENTES (FAQ)
              ────────────────────────────────────────────────── */}
          <section className="max-w-3xl mx-auto space-y-6 pt-4">
            <div className="border-t border-white/10 pt-8 space-y-2">
              <span className="text-[11px] uppercase tracking-[0.2em] font-sans text-[#6F7C63] font-semibold block">
                Orientación práctica
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#F6F2EA] font-normal">
                Preguntas frecuentes sobre adicciones y familia
              </h3>
            </div>

            <div className="space-y-3 pt-2">
              {faqsCarlos.map((faq, idx) => {
                const isOpen = openFaqIdx === idx;
                return (
                  <div
                    key={idx}
                    className="border border-white/10 rounded-xl bg-[#181E19] overflow-hidden transition-colors"
                  >
                    <button
                      onClick={() => toggleFaq(idx)}
                      className="w-full flex items-center justify-between text-left p-4 sm:p-5 group focus:outline-none"
                      aria-expanded={isOpen}
                    >
                      <span className="font-serif text-lg sm:text-xl text-[#F6F2EA] font-normal group-hover:text-[#C2A675] transition-colors pr-4">
                        {faq.question}
                      </span>
                      <span className={`p-1 rounded-full bg-[#141915] text-[#6F7C63] transition-transform duration-200 shrink-0 ${isOpen ? 'rotate-180' : ''}`}>
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
          </section>

          {/* ──────────────────────────────────────────────────
              16. OTRAS HISTORIAS DE LAS VOCES DEL FARO
              ────────────────────────────────────────────────── */}
          <section className="max-w-4xl mx-auto pt-10 border-t border-white/10 space-y-8">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-[11px] uppercase tracking-[0.2em] font-sans text-[#6F7C63] font-semibold block">
                  Seguir leyendo
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif text-[#F6F2EA] font-normal">
                  Otras historias de Las Voces del Faro
                </h3>
              </div>
              <Link
                to="/voces"
                className="hidden sm:inline-flex items-center gap-1.5 text-xs uppercase font-sans tracking-widest text-[#C2A675] hover:underline"
              >
                Ver todas las historias
                <ArrowRight size={13} />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Tarjeta de María */}
              <Link
                to="/voces/maria-hijo-adicciones-mar-del-plata"
                className="group bg-[#181E19] border border-white/10 rounded-2xl p-6 space-y-3 hover:border-[#6F7C63]/50 hover:shadow-md transition-all block"
              >
                <span className="text-[10px] uppercase font-sans tracking-[0.2em] text-[#6F7C63] font-semibold block">
                  LAS VOCES DEL FARO · MARÍA
                </span>
                <h4 className="font-serif text-xl sm:text-2xl text-[#F6F2EA] group-hover:text-[#C2A675] transition-colors leading-tight">
                  Mi hijo consumía y yo ya no sabía cómo ayudarlo
                </h4>
                <p className="text-sm text-[#C8C4BA] font-light leading-relaxed">
                  Una madre, un hijo y años intentando encontrar una salida. María cuenta qué cambió cuando comprendió que pedir ayuda no era solamente algo que Lucas necesitaba hacer.
                </p>
                <div className="pt-2 flex items-center gap-2 text-xs font-sans text-[#C2A675] font-medium">
                  <span>Leer historia</span>
                  <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>

              {/* Tarjeta de Andrés */}
              <Link
                to="/voces/andres-adicciones-mar-del-plata"
                className="group bg-[#181E19] border border-white/10 rounded-2xl p-6 space-y-3 hover:border-[#6F7C63]/50 hover:shadow-md transition-all block"
              >
                <span className="text-[10px] uppercase font-sans tracking-[0.2em] text-[#6F7C63] font-semibold block">
                  LAS VOCES DEL FARO · ANDRÉS
                </span>
                <h4 className="font-serif text-xl sm:text-2xl text-[#F6F2EA] group-hover:text-[#C2A675] transition-colors leading-tight">
                  Yo no me drogaba para escapar. Me drogaba para rendir.
                </h4>
                <p className="text-sm text-[#C8C4BA] font-light leading-relaxed">
                  Andrés tenía empresa, familia y compromisos que cumplía con precisión casi obsesiva. Por fuera todo funcionaba. Por dentro, el consumo sostenía todo.
                </p>
                <div className="pt-2 flex items-center gap-2 text-xs font-sans text-[#C2A675] font-medium">
                  <span>Leer historia</span>
                  <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </div>
          </section>

          {/* CTA FINAL DE DESPEDIDA */}
          <section className="max-w-4xl mx-auto pt-6">
            <div className="bg-[#181E19] border border-white/10 rounded-[2.5rem] p-8 sm:p-12 md:p-16 text-center space-y-6 shadow-sm">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#F6F2EA] font-normal leading-tight">
                No tenés que atravesar esto en soledad
              </h2>
              <p className="text-lg sm:text-xl text-[#C8C4BA] font-light max-w-2xl mx-auto leading-relaxed">
                Podés pedir un primer encuentro en Mar del Plata para hablar de lo que está pasando en tu familia, con reserva absoluta y a tu propio ritmo. Si querés hablar de lo que te está pasando, podés escribirnos.
              </p>

              <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackWhatsAppClick('carlos_footer_whatsapp', WHATSAPP_URL)}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#6F7C63] text-[#F6F2EA] px-8 py-4 rounded-full text-xs font-medium tracking-widest uppercase hover:bg-[#5E6B53] transition-colors font-sans shadow-sm"
                >
                  <MessageSquare size={16} />
                  Escribir por WhatsApp
                </a>

                <Link
                  to="/contacto"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#141915] text-[#F6F2EA] border border-white/15 px-8 py-4 rounded-full text-xs font-medium tracking-widest uppercase hover:bg-[#141915]/80 transition-colors font-sans"
                >
                  Conocer nuestro espacio
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </section>

        </div>
      </main>
    </div>
  );
}
