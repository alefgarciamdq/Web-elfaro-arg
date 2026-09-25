import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  ArrowRight, 
  MessageSquare, 
  ChevronDown, 
  Check, 
  Compass, 
  Heart,
  ShieldCheck,
  Clock,
  Share2
} from 'lucide-react';
import { Head } from 'vite-react-ssg';
import { motion, AnimatePresence, useReducedMotion, type Variants } from 'framer-motion';
import JsonLd from './JsonLd';
import { trackWhatsAppClick } from '../utils/telemetry';

const CLOUDINARY_CLOUD_NAME = 'dwv5ehc6e';
const WHATSAPP_URL = 'https://wa.me/5492235923790?text=Hola,%20quisiera%20hacer%20una%20consulta%20en%20El%20Faro.';

// Catálogo de imágenes marplatenses de María con Public ID Cloudinary y fallback local nativo
const MARIA_MEDIA = {
  hero: {
    publicId: 'elfaro-argentina/voces/maria/maria-01-apertura-mar-del-plata',
    localSrc: '/voces/maria/maria-01-apertura-mar-del-plata.jpg',
    alt: 'María contemplando el horizonte de la costa de Mar del Plata al atardecer'
  },
  distancia: {
    publicId: 'elfaro-argentina/voces/maria/maria-02-distancia-lucas',
    localSrc: '/voces/maria/maria-02-distancia-lucas.jpg',
    alt: 'María sentada al borde de la cama observando a Lucas alejarse por el pasillo',
    caption: 'La distancia no empezó con un portazo: empezó con pasos silenciosos y una puerta que se cerraba cada vez más temprano.'
  },
  habitacion: {
    publicId: 'elfaro-argentina/voces/maria/maria-03-habitacion-lucas',
    localSrc: '/voces/maria/maria-03-habitacion-lucas.jpg',
    alt: 'María en la habitación de Lucas ordenando en silencio frente a la ventana de la ciudad',
    caption: 'La habitación de Lucas se convirtió en un territorio ajeno donde cada objeto guardaba una pregunta que yo no sabía cómo hacer.'
  },
  limites: {
    publicId: 'elfaro-argentina/voces/maria/maria-04-limites-desde-el-amor',
    localSrc: '/voces/maria/maria-04-limites-desde-el-amor.jpg',
    alt: 'María en su mesa de trabajo reflexionando y escribiendo en su cuaderno junto a una frase sobre límites desde el amor',
    caption: 'Aprender que poner límites no es romper el lazo, sino crear un suelo firme para cuidarnos los dos.'
  },
  pedirAyuda: {
    publicId: 'elfaro-argentina/voces/maria/maria-05-pedir-ayuda',
    localSrc: '/voces/maria/maria-05-pedir-ayuda.jpg',
    alt: 'María conversando frente al mar en Mar del Plata, abriendo su relato con alivio y serenidad',
    caption: 'El primer encuentro de orientación: dejar de cargar todo en soledad y empezar a entender qué estaba pasando.'
  },
  cierre: {
    publicId: 'elfaro-argentina/voces/maria/maria-06-maria-lucas-cierre',
    localSrc: '/voces/maria/maria-06-maria-lucas-cierre.jpg',
    alt: 'María y Lucas caminando juntos por la costanera de Mar del Plata al atardecer, mirándose con complicidad',
    caption: 'Volver a caminar juntos, mirarse a los ojos en la mesa y saber que el proceso no busca milagros, sino presencia.'
  }
};

function buildCloudinaryUrl(publicId: string, width?: number) {
  const transforms = ['f_auto', 'q_auto'];
  if (width) transforms.push(`w_${width}`, 'c_limit');
  return `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/${transforms.join(',')}/${publicId}.jpg`;
}

// Componente de imagen con fallback automático resiliente (Cloudinary -> Local)
function StoryImage({
  mediaKey,
  className = '',
  imgClassName = '',
  isHero = false,
  sizes = '100vw',
  caption
}: {
  mediaKey: keyof typeof MARIA_MEDIA;
  className?: string;
  imgClassName?: string;
  isHero?: boolean;
  sizes?: string;
  caption?: string;
}) {
  const media = MARIA_MEDIA[mediaKey];
  const [imgSrc, setImgSrc] = useState(media.localSrc);

  return (
    <figure className={`relative ${className}`}>
      <div className="overflow-hidden rounded-2xl sm:rounded-3xl bg-[#181E19] shadow-md border border-white/10">
        <img
          src={imgSrc}
          alt={media.alt}
          loading={isHero ? 'eager' : 'lazy'}
          fetchPriority={isHero ? 'high' : 'auto'}
          decoding="async"
          sizes={sizes}
          onError={() => {
            if (imgSrc !== media.localSrc) {
              setImgSrc(media.localSrc);
            }
          }}
          className={`w-full h-auto object-cover transition-transform duration-700 hover:scale-[1.015] ${imgClassName}`}
        />
      </div>
      {caption && (
        <figcaption className="mt-3 px-2 text-xs sm:text-sm text-[#9A968D] font-sans font-light italic leading-relaxed text-center sm:text-left">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

export default function VozMariaHijoAdicciones() {
  const shouldReduceMotion = useReducedMotion();
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(null);

  const toggleFaq = (idx: number) => {
    setOpenFaqIdx(openFaqIdx === idx ? null : idx);
  };

  const faqsGeoIa = [
    {
      question: '¿Es posible hacer una consulta si mi familiar todavía no quiere tratarse?',
      answer: 'Sí, y con mucha frecuencia es el camino más efectivo. No hace falta esperar a que la persona que consume decida pedir ayuda por sí misma. Una primera consulta de orientación familiar permite entender la dinámica de la situación, evaluar riesgos y definir pautas claras para que el entorno deje de desgastarse sin rumbo y empiece a actuar con criterio terapéutico.'
    },
    {
      question: '¿Cómo diferenciar la distancia habitual de la adolescencia de un consumo problemático?',
      answer: 'La adolescencia suele traer repliegue, necesidad de intimidad y cambios de humor que son esperables. Sin embargo, cuando el aislamiento se vuelve hermético y prolongado, se abandonan actividades que antes importaban, aparecen ausencias injustificadas, cambios bruscos de amistades, irritabilidad desmedida o alteraciones notorias del sueño y el dinero, conviene consultar a un equipo especializado sin esperar.'
    },
    {
      question: '¿Qué rol cumple la familia en el tratamiento de consumos en El Faro?',
      answer: 'La familia no es juzgada ni señalada como culpable. Es considerada un pilar fundamental de recuperación. Acompañamos a los familiares a construir límites protectores, evitar el desgaste de la hipervigilancia y reconstruir un diálogo posible que sostenga al paciente a lo largo de su proceso en Mar del Plata.'
    }
  ];

  // Variantes de animación respetando prefers-reduced-motion
  const animFadeUp: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } 
    }
  };

  return (
    <div className="bg-[#141915] min-h-screen text-[#C8C4BA] selection:bg-[#C2A675]/30 selection:text-[#F6F2EA] overflow-x-hidden">
      <Head>
        <title>Mi hijo tiene problemas de adicciones: la historia de María | El Faro</title>
        <meta
          name="description"
          content="María cuenta cómo vivió el consumo problemático de su hijo Lucas y por qué pedir ayuda para ella también cambió el proceso. El Faro, Mar del Plata."
        />
        <link rel="canonical" href="https://programaelfaro.com.ar/voces/maria-hijo-adicciones-mar-del-plata" />
        <meta property="og:title" content="Mi hijo tiene problemas de adicciones: la historia de María | El Faro" />
        <meta
          property="og:description"
          content="María cuenta cómo vivió el consumo problemático de su hijo Lucas y por qué pedir ayuda para ella también cambió el proceso. El Faro, Mar del Plata."
        />
        <meta property="og:url" content="https://programaelfaro.com.ar/voces/maria-hijo-adicciones-mar-del-plata" />
        <meta property="og:type" content="article" />
        <meta property="og:image" content="https://programaelfaro.com.ar/voces/maria/maria-01-apertura-mar-del-plata.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Mi hijo tiene problemas de adicciones: la historia de María | El Faro" />
        <meta
          name="twitter:description"
          content="María cuenta cómo vivió el consumo problemático de su hijo Lucas y por qué pedir ayuda para ella también cambió el proceso. El Faro, Mar del Plata."
        />
        <meta name="twitter:image" content="https://programaelfaro.com.ar/voces/maria/maria-01-apertura-mar-del-plata.jpg" />
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
            "name": "La historia de María",
            "item": "https://programaelfaro.com.ar/voces/maria-hijo-adicciones-mar-del-plata"
          }
        ]
      }} />

      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Mi hijo consumía y yo ya no sabía cómo ayudarlo",
        "description": "María cuenta cómo vivió el consumo problemático de su hijo Lucas y por qué pedir ayuda para ella también cambió el proceso. El Faro, Mar del Plata.",
        "inLanguage": "es-AR",
        "mainEntityOfPage": "https://programaelfaro.com.ar/voces/maria-hijo-adicciones-mar-del-plata",
        "image": "https://programaelfaro.com.ar/voces/maria/maria-01-apertura-mar-del-plata.jpg",
        "author": {
          "@type": "Person",
          "name": "María"
        },
        "publisher": {
          "@type": "Organization",
          "name": "El Faro",
          "url": "https://programaelfaro.com.ar"
        }
      }} />

      {/* ──────────────────────────────────────────────────
          HERO EDITORIAL DE ALTA CALIDAD CON FOTOGRAFÍA 01 Y DIFUMINADO INFERIOR
          ────────────────────────────────────────────────── */}
      <section className="relative min-h-[78vh] md:min-h-[85vh] lg:min-h-[92vh] flex items-end overflow-hidden pt-24 sm:pt-28 pb-14 sm:pb-16 md:pb-20">
        {/* Imagen Hero de Fondo */}
        <div className="absolute inset-0 z-0">
          <img
            src={MARIA_MEDIA.hero.localSrc}
            alt={MARIA_MEDIA.hero.alt}
            fetchPriority="high"
            loading="eager"
            decoding="async"
            className="w-full h-full object-cover object-[35%_top] sm:object-[25%_15%] md:object-[22%_20%] lg:object-[left_center] brightness-[0.92] contrast-[1.02]"
          />
          {/* Overlay suave sobre fondo oscuro */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#141915] via-[#141915]/60 to-transparent lg:bg-gradient-to-l lg:from-[#141915] lg:via-[#141915]/70 lg:to-transparent" />
          
          {/* DIFUMINADO / FADE PROGRESIVO INFERIOR HACIA EL FONDO #141915 */}
          <div className="absolute inset-x-0 bottom-0 h-36 sm:h-52 md:h-64 lg:h-72 bg-gradient-to-b from-transparent via-[#141915]/60 to-[#141915] pointer-events-none" />
        </div>

        {/* Contenido del Hero: alineado físicamente a la derecha en pantallas desktop */}
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
                  LAS VOCES DEL FARO · MARÍA
                </span>

                <h1 className="text-3xl sm:text-4xl lg:text-[2.65rem] xl:text-[2.85rem] font-serif text-[#F6F2EA] font-normal leading-[1.16] tracking-tight drop-shadow-sm">
                  Mi hijo consumía y yo ya no sabía cómo ayudarlo
                </h1>
              </div>

              <p className="text-base sm:text-lg lg:text-xl text-[#C8C4BA] font-light font-serif leading-relaxed drop-shadow-sm">
                Una madre, un hijo y años intentando encontrar una salida. María cuenta qué cambió cuando comprendió que pedir ayuda no era solamente algo que Lucas necesitaba hacer.
              </p>

              <div className="pt-1">
                <span className="inline-flex items-center gap-1.5 text-xs text-[#9A968D] font-sans font-light">
                  <Clock size={13} className="text-[#C2A675]" />
                  7 min de lectura · Testimonio real desde Mar del Plata
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
          CUERPO NARRATIVO EDITORIAL Y RITMO VISUAL
          ────────────────────────────────────────────────── */}
      <main className="py-14 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-20">
          
          {/* BLOQUE 1: INICIO DEL RELATO */}
          <article className="max-w-3xl mx-auto space-y-6 text-lg sm:text-xl font-serif text-[#C8C4BA] font-normal leading-relaxed">
            <p className="first-letter:float-left first-letter:text-5xl sm:first-letter:text-6xl first-letter:pr-3 first-letter:font-serif first-letter:text-[#6F7C63] first-letter:leading-none">
              Tengo 46 años y soy la mamá de Lucas.
            </p>
            <p>
              Durante mucho tiempo creí que ser madre consistía en tener una respuesta para cada cosa. Si mi hijo tenía un problema en la escuela, si se raspaba la rodilla, si se sentía triste, yo estaba ahí: lo escuchaba, lo contenía y de alguna manera las cosas volvían a encajar.
            </p>
            <p>
              Cuando Lucas tenía ocho años, nuestra vida tenía una complicidad transparente. Corría a contarme lo que había pasado en el colegio, se metía en mi cama los domingos por la mañana y hablábamos de cualquier cosa con esa naturalidad que uno da por sentada mientras la vive. Nadie te advierte que ese aire cotidiano se puede ir perdiendo sin que haya un terremoto evidente.
            </p>
          </article>

          {/* FOTOGRAFÍA 02: LA DISTANCIA CON LUCAS */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={animFadeUp}
            className="max-w-4xl mx-auto"
          >
            <StoryImage
              mediaKey="distancia"
              caption={MARIA_MEDIA.distancia.caption}
              className="my-4"
            />
          </motion.div>

          {/* BLOQUE 2: LA VIDA FAMILIAR ORGANIZADA ALREDEDOR DEL CONSUMO */}
          <article className="max-w-3xl mx-auto space-y-6 text-lg sm:text-xl font-serif text-[#C8C4BA] font-normal leading-relaxed">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-[#F6F2EA] font-normal pt-2">
              Vivir pendientes de una puerta cerrada
            </h2>
            <p>
              El cambio no llegó con una escena dramática. Llegó despacio, de a poco, como se filtran las cosas que terminan desarmando una casa. A los quince años, Lucas empezó a cenar en su pieza. Después vinieron los monosílabos cuando le preguntaba cómo le había ido: <em>«bien»</em>, <em>«nada»</em>. Después, el silencio.
            </p>
            <p>
              Al principio me convencí de que era la adolescencia: que todos los chicos se repliegan, que necesitan intimidad, que ya se le pasaría. Pero con los meses empecé a notar cosas que no encajaban: plata que faltaba de la billetera, olores que intentaba tapar con desodorante, ausencias inexplicables al volver del colegio y una mirada esquiva que rehuía cualquier encuentro con la mía.
            </p>
            <p>
              Casi sin darnos cuenta, toda la rutina de la casa se organizó alrededor del consumo de Lucas. Vivíamos pendientes del ruido de la llave en la cerradura a la madrugada, de cómo se levantaba al día siguiente, de qué cara ponía al sentarse. La casa se transformó en un campo minado donde cada palabra se medía con miedo a provocar una discusión o un portazo.
            </p>
          </article>

          {/* CITA DESTACADA POTENTE (ROMPER ANCHO DEL ARTÍCULO) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={animFadeUp}
            className="my-10 sm:my-14 py-8 sm:py-12 border-y border-white/10 text-center max-w-4xl mx-auto px-4"
          >
            <blockquote className="font-serif italic text-2xl sm:text-3xl md:text-4xl text-[#F6F2EA] leading-snug max-w-3xl mx-auto">
              «¿Cómo le explicás a alguien que extrañás a tu hijo si tu hijo está vivo en la habitación de al lado?»
            </blockquote>
            <p className="mt-4 text-xs sm:text-sm uppercase tracking-[0.2em] font-sans text-[#6F7C63] font-semibold">
              El duelo silencioso de las familias
            </p>
          </motion.div>

          {/* BLOQUE 3: PROBAR TODO Y QUEDARSE SIN RESPUESTAS */}
          <article className="max-w-3xl mx-auto space-y-6 text-lg sm:text-xl font-serif text-[#C8C4BA] font-normal leading-relaxed">
            <p>
              Probé todo lo que una madre intenta cuando siente que el piso se abre: hablarle con dulzura, enojarme y gritar, darle espacio para no asfixiarlo, vigilarle la mochila, revisarle las redes, buscarle planes o hacer como si no pasara nada para tener una comida en paz.
            </p>
            <p>
              Nada devolvía lo de antes. Cada intento terminaba en el mismo lugar: Lucas encerrado en su cuarto y yo en la cocina con el pecho cerrado, preguntándome qué había hecho mal. Pasé casi dos años cargando esa angustia en soledad. Me daba vergüenza que los demás juzgaran a Lucas o que me juzgaran a mí. No se lo contaba a nadie.
            </p>
          </article>

          {/* FOTOGRAFÍA 03: LA HABITACIÓN / VIDA COTIDIANA */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={animFadeUp}
            className="max-w-4xl mx-auto"
          >
            <StoryImage
              mediaKey="habitacion"
              caption={MARIA_MEDIA.habitacion.caption}
              className="my-4"
            />
          </motion.div>

          {/* CUADRO SINÓPTICO A: QUIZÁS ALGO DE ESTO TE RESULTE FAMILIAR */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={animFadeUp}
            className="max-w-3xl mx-auto p-8 sm:p-10 rounded-[2rem] bg-sand-light/35 border border-sand/70 space-y-6"
          >
            <div className="space-y-2">
              <span className="text-[11px] uppercase tracking-[0.2em] font-sans text-olive font-semibold block">
                Situaciones frecuentes
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-ink font-normal">
                Quizás algo de esto te resulte familiar
              </h3>
            </div>

            <ul className="space-y-4 text-base sm:text-lg text-ink-light font-light leading-relaxed">
              <li className="flex items-start gap-3">
                <span className="p-1 rounded-full bg-olive/15 text-olive shrink-0 mt-1">
                  <Check size={14} />
                </span>
                <span><strong>Intentar hablar y no encontrar cómo:</strong> preguntar cómo está y recibir únicamente monosílabos, evasivas o silencio.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="p-1 rounded-full bg-olive/15 text-olive shrink-0 mt-1">
                  <Check size={14} />
                </span>
                <span><strong>Controlar cada vez más:</strong> vigilar horarios, miradas, gastos y pertenencias, viviendo en estado de alerta constante.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="p-1 rounded-full bg-olive/15 text-olive shrink-0 mt-1">
                  <Check size={14} />
                </span>
                <span><strong>Dudar entre poner límites o ceder:</strong> no saber si una exigencia firme va a empeorar las cosas o si ceder es seguir tapando el problema.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="p-1 rounded-full bg-olive/15 text-olive shrink-0 mt-1">
                  <Check size={14} />
                </span>
                <span><strong>La casa girando alrededor del consumo:</strong> medir cada palabra y cada gesto por miedo a desatar una discusión o un nuevo alejamiento.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="p-1 rounded-full bg-olive/15 text-olive shrink-0 mt-1">
                  <Check size={14} />
                </span>
                <span><strong>Guardar lo que pasa por miedo al juicio:</strong> aislarse de amigos y familiares por vergüenza a que etiqueten a quien consume o a la familia.</span>
              </li>
            </ul>
          </motion.div>

          {/* CTA CONTEXTUAL INTERMEDIO */}
          <section className="max-w-3xl mx-auto p-8 sm:p-10 rounded-[2rem] bg-gradient-to-br from-sand-light via-sand/30 to-sand-light/60 border border-sand/80 shadow-sm">
            <div className="space-y-4">
              <span className="text-[11px] uppercase tracking-[0.2em] font-sans text-olive font-semibold block">
                Orientación para familias en Mar del Plata
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif text-ink font-normal">
                Si algo de esto se parece a lo que estás viviendo
              </h3>
              <p className="text-base sm:text-lg text-ink-light font-light leading-relaxed">
                No hace falta esperar a que la persona que consume sea quien pida ayuda. También podés consultar vos para empezar a entender qué está pasando y pensar cómo actuar.
              </p>
              <div className="pt-3 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackWhatsAppClick('maria_mid_cta', WHATSAPP_URL)}
                  className="inline-flex items-center justify-center gap-2 bg-olive text-white px-7 py-3.5 rounded-full text-xs font-medium tracking-widest uppercase hover:bg-olive-light transition-colors font-sans text-center shadow-sm"
                >
                  <MessageSquare size={16} />
                  Hablar con El Faro
                </a>
                <Link
                  to="/adicciones-mar-del-plata"
                  className="inline-flex items-center justify-center gap-2 bg-white text-ink border border-sand px-6 py-3.5 rounded-full text-xs font-medium tracking-widest uppercase hover:bg-sand-light transition-colors font-sans text-center"
                >
                  Conocer cómo trabajamos con las adicciones
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </section>

          {/* COMPOSICIÓN EDITORIAL B: FOTOGRAFÍA 04 + LOS LÍMITES DESDE EL AMOR */}
          <section className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-4xl mx-auto">
              <div className="lg:col-span-6">
                <StoryImage
                  mediaKey="limites"
                  caption={MARIA_MEDIA.limites.caption}
                />
              </div>
              <div className="lg:col-span-6 space-y-4 pl-0 lg:pl-4">
                <span className="text-[11px] uppercase tracking-[0.2em] font-sans text-olive font-semibold block">
                  Enfoque vincular
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif text-ink font-normal leading-snug">
                  Los límites desde el amor también son una forma de cuidar
                </h3>
                <p className="text-base sm:text-lg text-ink-light font-light leading-relaxed">
                  Durante mucho tiempo confundí cuidar con aguantar cualquier cosa. Pensaba que si ponía un freno, Lucas se iba a hundir más. En El Faro aprendí que tapar las consecuencias del consumo o justificar lo injustificable no era protegerlo: era dejarlo más desamparado.
                </p>
                <p className="text-base sm:text-lg text-ink-light font-light leading-relaxed">
                  Poner límites claros, firmes y sin violencia no significa castigar ni retirar el afecto. Significa construir una pared segura donde la persona pueda apoyarse cuando ya no sabe cómo frenar sola.
                </p>
              </div>
            </div>
          </section>

          {/* BLOQUE 4: LLEGAR A EL FARO */}
          <article className="max-w-3xl mx-auto space-y-6 text-lg sm:text-xl font-serif text-ink font-normal leading-relaxed">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-ink font-normal pt-4">
              El día que decidí no seguir cargándolo sola
            </h2>
            <p>
              Llegué a El Faro un jueves por la tarde. Lucas no quería saber nada con consultar; decía que yo exageraba y que él tenía todo bajo control. Pero la que ya no podía más era yo.
            </p>
            <p>
              Entré despacio, dejé el bolso en el piso y me senté. No hubo sermones ni reproches. Dije en voz alta lo que venía masticando durante meses: <em>«Estoy agotada y sola. No sé qué hacer ya. Lo que antes funcionaba ya no alcanzaba»</em>.
            </p>
            <p>
              Allí entendí que yo también necesitaba un espacio. Que antes de poder acompañar a Lucas de un modo que realmente sirviera, yo tenía que soltar el papel de inspectora de su vida, tramitar mi propia angustia y aprender a pararme desde un lugar más sólido y sereno.
            </p>
          </article>

          {/* FOTOGRAFÍA 05: PEDIR AYUDA */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={animFadeUp}
            className="max-w-4xl mx-auto"
          >
            <StoryImage
              mediaKey="pedirAyuda"
              caption={MARIA_MEDIA.pedirAyuda.caption}
              className="my-4"
            />
          </motion.div>

          {/* CUADRO SINÓPTICO C: BLOQUE INFORMATIVO PARA FAMILIAS / GEO IA */}
          <section className="max-w-4xl mx-auto p-8 sm:p-12 rounded-[2.5rem] bg-[#181E19] border border-white/10 space-y-8">
            <div className="space-y-3">
              <span className="text-xs uppercase tracking-[0.22em] font-sans text-[#6F7C63] font-semibold flex items-center gap-2">
                <Compass size={16} />
                Orientación Profesional · El Faro Mar del Plata
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-[#F6F2EA] font-normal leading-snug">
                ¿Qué puede hacer una familia cuando alguien tiene un consumo problemático?
              </h2>
            </div>

            <p className="text-lg text-[#C8C4BA] font-light leading-relaxed">
              Cuando el consumo problemático entra en la vida familiar, la soledad y la improvisación suelen desgastar los vínculos. Estas son pautas terapéuticas clave basadas en el abordaje de El Faro:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-2">
              <div className="p-6 rounded-2xl bg-[#141915]/80 border border-white/10 space-y-2.5">
                <div className="flex items-center gap-2 text-[#6F7C63] font-sans font-semibold text-sm">
                  <Check size={16} />
                  <span>Pedir ayuda sin esperar a que el otro quiera</span>
                </div>
                <p className="text-sm text-[#C8C4BA] font-light leading-relaxed">
                  Esperar a que la situación sea insostenible suele agravar los daños. Un familiar puede consultar de manera individual para evaluar la situación y planificar los primeros pasos.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#141915]/80 border border-white/10 space-y-2.5">
                <div className="flex items-center gap-2 text-[#6F7C63] font-sans font-semibold text-sm">
                  <Check size={16} />
                  <span>Recuperar un espacio propio</span>
                </div>
                <p className="text-sm text-[#C8C4BA] font-light leading-relaxed">
                  Acompañar a quien consume exige que el familiar esté contenido y no absorba toda la angustia en soledad. La orientación al entorno es parte del tratamiento.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#141915]/80 border border-white/10 space-y-2.5">
                <div className="flex items-center gap-2 text-[#6F7C63] font-sans font-semibold text-sm">
                  <Check size={16} />
                  <span>Poner límites sin abandono emocional</span>
                </div>
                <p className="text-sm text-[#C8C4BA] font-light leading-relaxed">
                  Aprender a no sostener económicamente ni encubrir los episodios de consumo, manteniendo abierta la posibilidad del diálogo y la consulta profesional.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#141915]/80 border border-white/10 space-y-2.5">
                <div className="flex items-center gap-2 text-[#6F7C63] font-sans font-semibold text-sm">
                  <Check size={16} />
                  <span>Consultar antes de que empeore</span>
                </div>
                <p className="text-sm text-[#C8C4BA] font-light leading-relaxed">
                  Intervenir tempranamente evita que el aislamiento se consolide y permite que las intervenciones sean más cuidadosas, singulares y sostenibles en el tiempo.
                </p>
              </div>
            </div>

            {/* Acordeón de FAQs citables */}
            <div className="pt-6 border-t border-white/10 space-y-4">
              <h3 className="font-serif text-xl sm:text-2xl text-[#F6F2EA] font-normal">
                Preguntas frecuentes de orientación familiar
              </h3>
              <div className="space-y-3">
                {faqsGeoIa.map((faq, idx) => {
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

          {/* BLOQUE 5: EL PROCESO DE LUCAS Y EL REENCUENTRO */}
          <article className="max-w-3xl mx-auto space-y-6 text-lg sm:text-xl font-serif text-[#C8C4BA] font-normal leading-relaxed">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-[#F6F2EA] font-normal pt-4">
              Un camino que se construye paso a paso
            </h2>
            <p>
              Cuando cambié mi postura en casa y dejé de perseguirlo, algo en la dinámica familiar empezó a aflojar. A la tercera semana, Lucas aceptó tener un primer encuentro en El Faro.
            </p>
            <p>
              No fue una solución mágica ni una transformación de un día para el otro. El tratamiento de las adicciones tiene tiempos propios, dudas y días difíciles. Pero lo que cambió de raíz fue que ya no estábamos solos. Teníamos un equipo clínico que nos orientaba, nos ayudaba a poner palabras donde antes había gritos o silencios, y un espacio donde mirarnos de verdad.
            </p>
            <p>
              Lucas fue encontrando sus propios motivos para cuidarse. Y yo volví a encontrar a mi hijo: no al nene de ocho años, sino a un muchacho que está aprendiendo a vivir, a elegir y a hacerse cargo de su presente. Volvimos a sentarnos a la mesa y a mirarnos a los ojos sin miedo.
            </p>
          </article>

          {/* FOTOGRAFÍA 06: MARÍA Y LUCAS / CIERRE */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={animFadeUp}
            className="max-w-4xl mx-auto"
          >
            <StoryImage
              mediaKey="cierre"
              caption={MARIA_MEDIA.cierre.caption}
              className="my-4"
            />
          </motion.div>

          {/* CIERRE NARRATIVO DESDE MARÍA */}
          <article className="max-w-3xl mx-auto text-center space-y-4 pt-4">
            <p className="font-serif italic text-xl sm:text-2xl text-[#F6F2EA] leading-relaxed">
              «Pedir ayuda no significa que fracasaste como madre o como familia. Significa que entendiste que el amor necesita herramientas para sostenerse en el tiempo.»
            </p>
            <span className="text-xs uppercase tracking-[0.2em] font-sans text-[#6F7C63] font-semibold block">
              María · El Faro Argentina
            </span>
          </article>

          {/* ──────────────────────────────────────────────────
              CTA FINAL CÁLIDO Y CONTEXTUAL
              ────────────────────────────────────────────────── */}
          <section className="max-w-4xl mx-auto pt-6">
            <div className="bg-[#181E19] border border-white/10 rounded-[2.5rem] p-8 sm:p-12 md:p-16 text-center space-y-6 shadow-xl">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#F6F2EA] font-normal leading-tight">
                Si estás buscando ayuda por alguien que querés, podés empezar vos
              </h2>
              <p className="text-lg sm:text-xl text-[#C8C4BA] font-light max-w-2xl mx-auto leading-relaxed">
                No necesitás tener todas las respuestas antes de escribirnos. Si querés hablar de lo que te está pasando, podés escribirnos. Podemos empezar por entender qué pasa y pensar juntos cómo seguir.
              </p>

              <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackWhatsAppClick('maria_bottom_cta', WHATSAPP_URL)}
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
                  Contacto
                </Link>
              </div>
            </div>
          </section>

          {/* ──────────────────────────────────────────────────
              OTRAS VOCES / SEGUIR LEYENDO
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

            {/* Tarjeta de enlace a Andrés */}
            <div className="p-6 sm:p-8 rounded-2xl bg-[#181E19] border border-white/10 text-left hover:border-[#6F7C63]/40 transition-all shadow-md group">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="space-y-1.5">
                  <span className="text-[11px] uppercase tracking-wider font-sans text-[#6F7C63] font-semibold block">
                    LAS VOCES DEL FARO · ANDRÉS
                  </span>
                  <h4 className="text-xl sm:text-2xl font-serif text-[#F6F2EA] group-hover:text-[#C2A675] transition-colors">
                    <Link to="/voces/andres-adicciones-mar-del-plata">
                      Yo no me drogaba para escapar. Me drogaba para rendir.
                    </Link>
                  </h4>
                  <p className="text-sm text-[#C8C4BA] font-light">
                    Sostener la empresa, la familia y la rutina mientras por dentro todo se cae.
                  </p>
                </div>
                <Link
                  to="/voces/andres-adicciones-mar-del-plata"
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
