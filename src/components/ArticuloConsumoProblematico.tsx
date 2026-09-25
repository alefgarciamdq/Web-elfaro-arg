import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  ArrowRight, 
  Clock, 
  MessageSquare, 
  PhoneCall, 
  Compass, 
  ShieldCheck, 
  CheckCircle2, 
  HelpCircle,
  Users
} from 'lucide-react';
import { Head } from 'vite-react-ssg';
import { motion } from 'framer-motion';
import '@fontsource/cormorant-garamond/latin-300.css';
import JsonLd from './JsonLd';
import { fadeUp, viewportConfig } from '../utils/animations';
import { trackWhatsAppClick, trackPhoneClick, trackCtaClick } from '../utils/telemetry';

const WHATSAPP_URL = 'https://wa.me/5492235923790?text=Hola,%20quisiera%20hacer%20una%20consulta%20en%20El%20Faro.';
const PHONE_NUMBER = '+542234921953';

export default function ArticuloConsumoProblematico() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "¿Cómo saber cuándo un consumo se volvió problemático?",
    "description": "Señales para entender cuándo un consumo empieza a volverse problemático, qué lugar ocupa en la vida cotidiana y cuándo puede ser momento de pedir ayuda.",
    "image": "https://programaelfaro.com.ar/lecturas/consumo-problematico-mar-del-plata-eleccion.jpg",
    "author": {
      "@type": "Organization",
      "name": "Equipo Terapéutico El Faro Mar del Plata",
      "url": "https://programaelfaro.com.ar"
    },
    "publisher": {
      "@type": "Organization",
      "name": "El Faro Argentina",
      "logo": {
        "@type": "ImageObject",
        "url": "https://res.cloudinary.com/dwv5ehc6e/image/upload/f_auto,q_auto/v1779830147/mifaro/IMG-0990_mgVHpGR8.jpg"
      }
    },
    "datePublished": "2026-09-18",
    "dateModified": "2026-09-18",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://programaelfaro.com.ar/lecturas/como-saber-cuando-un-consumo-se-volvio-problematico"
    }
  };

  const breadcrumbSchema = {
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
        "name": "Lecturas del Faro",
        "item": "https://programaelfaro.com.ar/lecturas"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "¿Cómo saber cuándo un consumo se volvió problemático?",
        "item": "https://programaelfaro.com.ar/lecturas/como-saber-cuando-un-consumo-se-volvio-problematico"
      }
    ]
  };

  return (
    <article className="min-h-screen bg-[#141915] text-[#C8C4BA] selection:bg-[#6F7C63]/30 font-sans">
      <Head>
        <title>Cómo saber si un consumo es problemático | El Faro Mar del Plata</title>
        <meta 
          name="description" 
          content="Señales para entender cuándo un consumo empieza a volverse problemático, qué lugar ocupa en la vida cotidiana y cuándo puede ser momento de pedir ayuda." 
        />
        <link rel="canonical" href="https://programaelfaro.com.ar/lecturas/como-saber-cuando-un-consumo-se-volvio-problematico" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Cómo saber si un consumo es problemático | El Faro Mar del Plata" />
        <meta 
          property="og:description" 
          content="Señales para entender cuándo un consumo empieza a volverse problemático, qué lugar ocupa en la vida cotidiana y cuándo puede ser momento de pedir ayuda." 
        />
        <meta property="og:url" content="https://programaelfaro.com.ar/lecturas/como-saber-cuando-un-consumo-se-volvio-problematico" />
        <meta property="og:type" content="article" />
        <meta property="og:image" content="https://programaelfaro.com.ar/lecturas/consumo-problematico-mar-del-plata-eleccion.jpg" />
        <meta property="og:image:alt" content="Hombre caminando por la costa de Mar del Plata, imagen editorial sobre consumos problemáticos" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Cómo saber si un consumo es problemático | El Faro Mar del Plata" />
        <meta 
          name="twitter:description" 
          content="Señales para entender cuándo un consumo empieza a volverse problemático, qué lugar ocupa en la vida cotidiana y cuándo puede ser momento de pedir ayuda." 
        />
        <meta name="twitter:image" content="https://programaelfaro.com.ar/lecturas/consumo-problematico-mar-del-plata-eleccion.jpg" />
        <link rel="preload" as="image" href="/lecturas/consumo-problematico-mar-del-plata-eleccion.webp" type="image/webp" fetchPriority="high" />
      </Head>

      <JsonLd data={articleSchema} />
      <JsonLd data={breadcrumbSchema} />

      {/* ── BARRA SUPERIOR DE RETORNO EDITORIAL ── */}
      <div className="border-b border-white/10 bg-[#141915]/90 backdrop-blur-md sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-12 sm:h-14 flex items-center justify-between">
          <Link 
            to="/lecturas" 
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-sans text-[#9A968D] hover:text-[#F6F2EA] transition-colors"
          >
            <ArrowLeft size={16} />
            <span>Volver a Lecturas del Faro</span>
          </Link>
          <span className="text-[10px] sm:text-xs font-mono uppercase tracking-widest text-[#6F7C63] font-semibold">
            EL FARO · MAR DEL PLATA
          </span>
        </div>
      </div>

      {/* ── HERO VISUAL CON FOTOGRAFÍA LIMPIA Y TEXTO SUPERPUESTO EN EL CIELO ── */}
      <section className="relative w-full overflow-hidden bg-[#141915]">
        <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] lg:aspect-[16/9] min-h-[440px] sm:min-h-[520px] lg:min-h-[620px]">
          {/* Fotografía de fondo limpia: hombre y reflejo nítidos */}
          <picture className="absolute inset-0 w-full h-full">
            <source type="image/webp" srcSet="/lecturas/consumo-problematico-mar-del-plata-eleccion.webp" />
            <img 
              src="/lecturas/consumo-problematico-mar-del-plata-eleccion.jpg" 
              alt="Hombre caminando por la costa de Mar del Plata, imagen editorial sobre consumos problemáticos"
              className="w-full h-full object-cover object-[55%_center] sm:object-[50%_center]"
              loading="eager"
              decoding="async"
              fetchPriority="high"
              width="1536"
              height="1024"
            />
          </picture>

          {/* Fundido editorial El Faro oscuro */}
          <div 
            className="absolute inset-0 pointer-events-none 
                       bg-[linear-gradient(180deg,rgba(20,25,21,0.92)_0%,rgba(20,25,21,0.60)_35%,rgba(20,25,21,0.25)_60%,rgba(20,25,21,0.85)_88%,#141915_100%)]
                       sm:bg-[linear-gradient(90deg,rgba(20,25,21,0.96)_0%,rgba(20,25,21,0.88)_30%,rgba(20,25,21,0.50)_55%,rgba(20,25,21,0.15)_75%,transparent_90%)]" 
          />

          {/* Transición visual hacia el fondo oscuro (#141915) */}
          <div 
            className="absolute inset-x-0 bottom-0 h-36 sm:h-48 md:h-60 pointer-events-none 
                       bg-[linear-gradient(180deg,transparent_0%,rgba(20,25,21,0.7)_40%,#141915_100%)]" 
          />

          {/* Texto HTML real montado sobre la zona libre del cielo a la izquierda */}
          <div className="absolute inset-0 z-10 flex flex-col justify-start">
            <div className="max-w-7xl mx-auto w-full h-full px-5 sm:px-8 md:px-12 lg:px-16 pt-8 sm:pt-12 md:pt-16 lg:pt-20">
              <div className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
                {/* Titular del Hero */}
                <p className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-[2.65rem] leading-[1.14] text-[#F6F2EA] font-normal tracking-tight">
                  ¿Cuándo deja de ser una elección<br className="hidden sm:inline" />
                  {' '}y empieza a ser un problema?
                </p>

                {/* Bajada del Hero */}
                <p className="mt-3 sm:mt-4 md:mt-5 font-serif italic text-base sm:text-lg md:text-xl text-[#C8C4BA] font-light leading-relaxed">
                  A veces el cambio llega<br className="hidden sm:inline" />
                  {' '}más despacio de lo que pensamos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECCIÓN SEMÁNTICA Y CUERPO EDITORIAL DEL ARTÍCULO ── */}
      <section className="py-14 sm:py-20 lg:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Metadatos de cabecera en header semántico */}
          <header className="space-y-4 mb-10 sm:mb-12">
            <div className="flex flex-wrap items-center gap-3 text-xs font-mono uppercase tracking-[0.18em]">
              <span className="text-[#6F7C63] font-semibold">EL FARO · MAR DEL PLATA</span>
              <span className="text-white/20">·</span>
              <span className="text-[#9A968D] inline-flex items-center gap-1">
                <Clock size={13} className="text-[#C2A675]" /> 6 min de lectura
              </span>
            </div>

            {/* H1 Semántico SEO */}
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#F6F2EA] font-light leading-tight">
              ¿Cómo saber cuándo un consumo se volvió problemático?
            </h1>

            {/* Bajada / Epígrafe */}
            <p className="text-base sm:text-lg md:text-xl font-serif italic text-[#C8C4BA] leading-relaxed border-l-2 border-[#6F7C63] pl-5 py-2.5 bg-[#181E19] rounded-r-lg">
              Consumos problemáticos, adicciones y señales cotidianas. Consecuencias en los vínculos, la capacidad de decisión y pautas clínicas para identificar cuándo es momento de consultar.
            </p>
          </header>

          {/* Contenido Editorial Completo */}
          <div className="space-y-8 sm:space-y-10 text-base sm:text-lg font-light leading-relaxed text-[#C8C4BA]">
            <p>
              Casi nadie empieza a consumir pensando que va a perder el control. Al principio, la sustancia o la conducta parece responder a una decisión voluntaria: acompañar una salida, distenderse después de una jornada agotadora, regular el estrés o tolerar una exigencia que cuesta sostener de otra manera. Durante semanas, meses o incluso años, la persona siente que tiene el control, que sigue cumpliendo y que puede interrumpirlo en cualquier momento.
            </p>

            <p>
              Sin embargo, el paso entre lo recreativo, lo funcional y lo problemático rara vez se da como un salto dramático. Es una transformación silenciosa y paulatina: lo que al principio era una elección ocasional empieza, poco a poco, a ocupar un lugar central en la organización de la rutina, en los pensamientos y en la forma de gestionar el malestar.
            </p>

            {/* Bloque 1: La frontera entre elegir y necesitar */}
            <div className="pt-8 border-t border-white/10 space-y-4">
              <h2 className="font-serif text-2xl sm:text-3xl text-[#F6F2EA] font-normal leading-snug">
                La frontera entre elegir y necesitar
              </h2>
              <p>
                La pregunta clínica no pasa únicamente por la sustancia concreta ni por la cantidad exacta consumida. En El Faro solemos recordar una premisa esencial: <strong className="text-[#F6F2EA] font-normal">no preguntamos solamente cuánto, sino para qué</strong>. ¿Qué función cumple ese consumo en la vida de quien lo sostiene? Cuando una copa, una sustancia o una conducta repetida deja de ser un momento compartido y pasa a ser el recurso necesario para arrancar el día, para dormir, para estar en una reunión o para no sentir angustia, el lugar de la conducta ya cambió.
              </p>
              <p>
                Aparece entonces una paradoja cotidiana ligada a la libertad de elección: la persona sigue convencida de que elige consumir, pero ya no tiene la misma libertad de <em className="text-[#F6F2EA]/90 italic">no hacerlo</em>. La ilusión de control («yo lo manejo», «lo dejo cuando quiero») convive con una necesidad que empieza a gobernar los tiempos, los presupuestos y los acuerdos cotidianos. La pérdida de control rara vez empieza con un colapso estrepitoso; empieza cuando no consumir produce una incomodidad difícil de tolerar.
              </p>
              <p>
                Por eso, <strong className="text-[#F6F2EA] font-normal">quizás la pregunta no sea «¿soy adicto?»</strong>. Quedar atrapados en discusiones sobre rótulos o diagnósticos rígidos suele demorar la posibilidad de mirarse con sinceridad. La pregunta más fecunda es mucho más simple: ¿cuánta libertad real conservo frente a esto y cuánto de mi bienestar diario depende de que el consumo esté garantizado?
              </p>
            </div>

            {/* Bloque 2: Las ocho preguntas */}
            <div className="pt-8 border-t border-white/10 space-y-6">
              <h2 className="font-serif text-2xl sm:text-3xl text-[#F6F2EA] font-normal leading-snug">
                Ocho preguntas para reflexionar en lo cotidiano
              </h2>
              <p>
                Desde la práctica clínica en salud mental y <Link to="/adicciones-mar-del-plata" className="text-[#C2A675] hover:text-[#F6F2EA] underline underline-offset-4 decoration-[#C2A675]/40 transition-colors">adicciones en El Faro</Link>, proponemos estas pautas de autoobservación. No son un test diagnóstico ni buscan poner una etiqueta. Son preguntas para abrir una reflexión honesta sobre lo que pasa en el día a día:
              </p>

              <div className="space-y-4 sm:space-y-5">
                <div className="p-6 rounded-2xl bg-[#181E19] border border-white/10">
                  <div className="flex items-start gap-3">
                    <span className="font-mono text-xs font-semibold text-[#C2A675] mt-1">01</span>
                    <div className="space-y-1">
                      <h3 className="font-serif text-lg sm:text-xl font-normal text-[#F6F2EA]">
                        La capacidad de decidir
                      </h3>
                      <p className="text-sm sm:text-base text-[#C8C4BA]/90 leading-relaxed font-light">
                        ¿Te propusiste reducir, espaciar o frenar el consumo y descubriste que el compromiso no se sostuvo en el tiempo? Sentir que el impulso se anticipa a la voluntad y que las promesas hechas a uno mismo o a los demás se quiebran con frecuencia.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-6 rounded-2xl bg-[#181E19] border border-white/10">
                  <div className="flex items-start gap-3">
                    <span className="font-mono text-xs font-semibold text-[#C2A675] mt-1">02</span>
                    <div className="space-y-1">
                      <h3 className="font-serif text-lg sm:text-xl font-normal text-[#F6F2EA]">
                        El consumo para funcionar o anestesiar
                      </h3>
                      <p className="text-sm sm:text-base text-[#C8C4BA]/90 leading-relaxed font-light">
                        ¿Empezaste a usar la sustancia o conducta para rendir más, tapar el cansancio acumulado, tolerar exigencias laborales o anestesiar dolores emocionales que no encuentran otra vía de expresión?
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-6 rounded-2xl bg-[#181E19] border border-white/10">
                  <div className="flex items-start gap-3">
                    <span className="font-mono text-xs font-semibold text-[#C2A675] mt-1">03</span>
                    <div className="space-y-1">
                      <h3 className="font-serif text-lg sm:text-xl font-normal text-[#F6F2EA]">
                        El tiempo y la energía mental
                      </h3>
                      <p className="text-sm sm:text-base text-[#C8C4BA]/90 leading-relaxed font-light">
                        ¿El consumo ocupa cada vez más espacio en tus pensamientos? Anticipar el momento de consumir, pensar en cómo conseguirlo, reorganizar planes alrededor de ello o esperar con ansiedad que llegue el fin de semana o la noche.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-6 rounded-2xl bg-[#181E19] border border-white/10">
                  <div className="flex items-start gap-3">
                    <span className="font-mono text-xs font-semibold text-[#C2A675] mt-1">04</span>
                    <div className="space-y-1">
                      <h3 className="font-serif text-lg sm:text-xl font-normal text-[#F6F2EA]">
                        El secreto, la disimulación y el ocultamiento
                      </h3>
                      <p className="text-sm sm:text-base text-[#C8C4BA]/90 leading-relaxed font-light">
                        ¿Ocultás gastos, mentís sobre cantidades o minimizás la frecuencia ante la pareja, la familia o los amigos? La incomodidad inmediata cuando alguien pregunta y la tendencia gradual a replegarse para evitar reproches.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-6 rounded-2xl bg-[#181E19] border border-white/10">
                  <div className="flex items-start gap-3">
                    <span className="font-mono text-xs font-semibold text-[#C2A675] mt-1">05</span>
                    <div className="space-y-1">
                      <h3 className="font-serif text-lg sm:text-xl font-normal text-[#F6F2EA]">
                        El costo en los vínculos significativos
                      </h3>
                      <p className="text-sm sm:text-base text-[#C8C4BA]/90 leading-relaxed font-light">
                        ¿Aparecieron discusiones reiteradas, silencios tensos, distancia afectiva o reclamos en el entorno cercano? Los vínculos suelen registrar el cambio de presencia y el aislamiento antes de que quien consume lo admita.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-6 rounded-2xl bg-[#181E19] border border-white/10">
                  <div className="flex items-start gap-3">
                    <span className="font-mono text-xs font-semibold text-[#C2A675] mt-1">06</span>
                    <div className="space-y-1">
                      <h3 className="font-serif text-lg sm:text-xl font-normal text-[#F6F2EA]">
                        Las responsabilidades que empiezan a resentirse
                      </h3>
                      <p className="text-sm sm:text-base text-[#C8C4BA]/90 leading-relaxed font-light">
                        ¿Hubo llegadas tarde, ausencias, postergación de proyectos o baja en el rendimiento laboral o de estudio? La sensación constante de estar corriendo detrás de un desborde cotidiano que cuesta disimular.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-6 rounded-2xl bg-[#181E19] border border-white/10">
                  <div className="flex items-start gap-3">
                    <span className="font-mono text-xs font-semibold text-[#C2A675] mt-1">07</span>
                    <div className="space-y-1">
                      <h3 className="font-serif text-lg sm:text-xl font-normal text-[#F6F2EA]">
                        El aumento de la tolerancia y la frecuencia
                      </h3>
                      <p className="text-sm sm:text-base text-[#C8C4BA]/90 leading-relaxed font-light">
                        ¿Necesitás dosis más altas, mayor frecuencia o situaciones de mayor intensidad para alcanzar el mismo alivio, euforia o desconexión que antes lograbas con mucho menos?
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-6 rounded-2xl bg-[#181E19] border border-white/10">
                  <div className="flex items-start gap-3">
                    <span className="font-mono text-xs font-semibold text-[#C2A675] mt-1">08</span>
                    <div className="space-y-1">
                      <h3 className="font-serif text-lg sm:text-xl font-normal text-[#F6F2EA]">
                        La dificultad para disfrutar o estar sin consumir
                      </h3>
                      <p className="text-sm sm:text-base text-[#C8C4BA]/90 leading-relaxed font-light">
                        ¿Sentís que los momentos de descanso, diversión o encuentro social se volvieron desabridos o intolerables si no está presente la sustancia? Cuando nada parece suficiente sin ese estímulo, el consumo ya colonizó el deseo.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Conexión testimonial: La historia de Andrés */}
            <div className="p-6 sm:p-8 rounded-2xl bg-[#181E19] border border-white/10 space-y-4">
              <span className="text-[10px] font-mono tracking-widest uppercase text-[#6F7C63] font-semibold">
                VOCES DEL FARO · TESTIMONIO
              </span>
              <h3 className="font-serif text-xl sm:text-2xl text-[#F6F2EA] font-normal">
                «Yo no me drogaba para escapar. Me drogaba para rendir.»
              </h3>
              <p className="text-sm sm:text-base text-[#C8C4BA] leading-relaxed font-light">
                En la experiencia de quienes inician un tratamiento en El Faro, este proceso suele describirse con dolorosa lucidez. En su testimonio, Andrés —quien realizó su tratamiento en nuestra sede de Mar del Plata— relata cómo seguía trabajando, cumpliendo, viajando y sosteniendo responsabilidades mientras el consumo iba ocupando cada vez más lugar en su vida. La consulta no llegó tras un desastre público, sino al advertir el desgaste insostenible de depender de una sustancia para poder funcionar.
              </p>
              <div className="pt-2">
                <Link 
                  to="/voces/andres-adicciones-mar-del-plata" 
                  className="inline-flex items-center gap-2 text-sm font-sans text-[#C2A675] hover:text-[#F6F2EA] transition-colors"
                >
                  <span>Leer la historia de Andrés</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            {/* Bloque 3: No hace falta tocar fondo */}
            <div className="pt-8 border-t border-white/10 space-y-4">
              <h2 className="font-serif text-2xl sm:text-3xl text-[#F6F2EA] font-normal leading-snug">
                No hace falta tocar fondo para consultar
              </h2>
              <p>
                Existe una creencia muy arraigada según la cual una persona solo puede iniciar un tratamiento cuando lo ha perdido todo: el trabajo, la pareja, la salud o los vínculos. Esperar ese supuesto «fondo» puede retrasar la posibilidad de pedir ayuda y aumentar el sufrimiento.
              </p>
              <p>
                El problema puede empezar mucho antes de que todo se derrumbe. En la clínica cotidiana vemos con frecuencia que esperar a que sobrevenga una crisis irreversible no es un requisito indispensable para el cambio: es un riesgo innecesario que suele dejar heridas profundas en la persona y en quienes la rodean.
              </p>
              <p>
                En El Faro promovemos una mirada temprana: poder conversar cuando las dudas empiezan a aparecer permite intervenir antes de que el desgaste sea mayor. No hace falta tener un diagnóstico cerrado ni sentirse rotulado para solicitar una <Link to="/contacto" className="text-[#C2A675] hover:text-[#F6F2EA] underline underline-offset-4 decoration-[#C2A675]/40 transition-colors">primera entrevista</Link> y pensar juntos qué está pasando.
              </p>
            </div>

            {/* Bloque 4: La familia no queda afuera */}
            <div className="pt-8 border-t border-white/10 space-y-4">
              <h2 className="font-serif text-2xl sm:text-3xl text-[#F6F2EA] font-normal leading-snug">
                La familia y el entorno cercano
              </h2>
              <p>
                Cuando hay consumos problemáticos, <Link to="/voces/carlos-hija-adicciones-mar-del-plata" className="text-[#C2A675] hover:text-[#F6F2EA] underline underline-offset-4 decoration-[#C2A675]/40 transition-colors">la familia y las personas cercanas</Link> también sufren. Madres, padres, parejas y hermanos suelen quedar atrapados en un circuito desgastante de control, preocupación constante y miedo al desborde.
              </p>
              <p>
                La familia no es responsable del consumo de otro, pero sí puede aprender a cuidarse, establecer límites sanos y construir un acompañamiento que no destruya su propio equilibrio. Por eso, en nuestro abordaje, los familiares tienen un espacio terapéutico propio, incluso si la persona que consume todavía no se siente lista para consultar.
              </p>
            </div>

            {/* Bloque 5: El trabajo en El Faro Mar del Plata */}
            <div className="pt-8 border-t border-white/10 space-y-4">
              <h2 className="font-serif text-2xl sm:text-3xl text-[#F6F2EA] font-normal leading-snug">
                Cómo trabajamos en El Faro Mar del Plata
              </h2>
              <p>
                En nuestra práctica clínica sostenemos una certeza fundamental: <strong className="text-[#F6F2EA] font-normal">el síntoma importa, pero la persona importa más</strong>. El consumo no es un fenómeno aislado ni una debilidad moral; es la expresión de un malestar subjetivo que necesita ser comprendido y acompañado con rigor profesional y respeto por la singularidad.
              </p>
              <p>
                Desde 1993, El Faro funciona en Mar del Plata como un centro de salud mental y <Link to="/adicciones-mar-del-plata" className="text-[#C2A675] hover:text-[#F6F2EA] underline underline-offset-4 decoration-[#C2A675]/40 transition-colors">adicciones</Link> con metodología cercana, humana y profesional. Nuestra propuesta es de <Link to="/adicciones-mar-del-plata" className="text-[#C2A675] hover:text-[#F6F2EA] underline underline-offset-4 decoration-[#C2A675]/40 transition-colors"><strong className="text-[#F6F2EA] font-normal hover:text-[#C2A675]">tratamiento integral</strong></Link>: combinamos psicoterapia individual, espacios grupales, orientación familiar, Centro de Día y Centro de Mediodía articulados según las necesidades de cada situación.
              </p>
              <p>
                Creemos en un proceso que respeta los tiempos de cada persona, sosteniendo su inserción en la vida cotidiana y brindando herramientas reales para recuperar la autonomía y el bienestar.
              </p>
            </div>
          </div>

          {/* ── CUADRO EDITORIAL DE CONTACTO / CTA ── */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            variants={fadeUp}
            className="mt-16 sm:mt-20 p-8 sm:p-10 rounded-3xl bg-[#181E19] text-[#C8C4BA] border border-white/10 space-y-6 shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-80 h-80 bg-[radial-gradient(circle_at_top_right,rgba(194,166,117,0.08),transparent_70%)] pointer-events-none" />

            <div className="relative z-10 space-y-2">
              <div className="text-[10px] font-mono tracking-[0.2em] uppercase text-[#6F7C63] font-semibold">
                EL FARO · ATENCIÓN Y ORIENTACIÓN
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#F6F2EA] font-light">
                Dar el primer paso es ordenar lo que te pasa
              </h3>
              <p className="text-[#C8C4BA]/90 text-sm sm:text-base font-light leading-relaxed">
                Podés escribirnos o llamarnos para coordinar una primera entrevista en nuestra sede de Mar del Plata (Garay 2073). Si querés hablar de lo que te está pasando, podés escribirnos. Escuchamos tu situación con calma, sin juzgar y pensando juntos el camino más adecuado.
              </p>
            </div>

            <div className="relative z-10 pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsAppClick('articulo_consumo_problematico', WHATSAPP_URL)}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#6F7C63] hover:bg-[#5E6B53] text-[#F6F2EA] font-medium text-sm transition-colors shadow-sm"
              >
                <MessageSquare size={16} />
                <span>Escribir por WhatsApp</span>
              </a>

              <Link
                to="/contacto"
                onClick={() => trackCtaClick('articulo_consumo_problematico', 'Consultar por el centro', '/contacto')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border border-white/15 hover:border-white/30 text-[#F6F2EA] hover:text-white font-medium text-sm transition-colors"
              >
                <span>Consultar por el centro</span>
                <ArrowRight size={16} />
              </Link>
            </div>

            <div className="relative z-10 pt-4 border-t border-white/10 text-xs text-[#9A968D] flex flex-wrap items-center justify-between gap-2">
              <span>Garay 2073, Mar del Plata</span>
              <span>Tel: (0223) 492-1953</span>
            </div>
          </motion.div>

          {/* ── ENLACES DE RETORNO Y NAVEGACIÓN ── */}
          <div className="mt-12 pt-8 border-t border-white/10 space-y-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs font-sans text-[#9A968D]">
              <span className="uppercase tracking-widest text-[#6F7C63] font-mono text-[10px]">
                VOCES DEL FARO
              </span>
              <div className="flex flex-wrap items-center gap-4">
                <Link 
                  to="/voces/andres-adicciones-mar-del-plata" 
                  className="text-[#C8C4BA] hover:text-[#C2A675] transition-colors inline-flex items-center gap-1.5"
                >
                  <span>Historia de Andrés</span>
                  <ArrowRight size={12} />
                </Link>
                <span className="text-white/20">·</span>
                <Link 
                  to="/voces/carlos-hija-adicciones-mar-del-plata" 
                  className="text-[#C8C4BA] hover:text-[#C2A675] transition-colors inline-flex items-center gap-1.5"
                >
                  <span>Perspectiva familiar (Carlos)</span>
                  <ArrowRight size={12} />
                </Link>
              </div>
            </div>

            <div className="pt-4 border-t border-white/5 flex items-center justify-between">
              <Link 
                to="/lecturas" 
                className="inline-flex items-center gap-2 text-sm font-sans text-[#F6F2EA] hover:text-[#C2A675] transition-colors font-medium"
              >
                <ArrowLeft size={16} />
                <span>Ver todas las Lecturas del Faro</span>
              </Link>

              <Link 
                to="/adicciones-mar-del-plata" 
                className="inline-flex items-center gap-2 text-sm font-sans text-[#6F7C63] hover:text-[#F6F2EA] transition-colors"
              >
                <span>Tratamiento en Mar del Plata</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
