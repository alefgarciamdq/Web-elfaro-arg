import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Clock, HeartHandshake, Camera } from 'lucide-react';
import { Head } from 'vite-react-ssg';
import { motion, useReducedMotion, type Variants } from 'framer-motion';
import JsonLd from './JsonLd';

interface VoiceStoryItem {
  id: string;
  slug: string;
  category: string;
  person: string;
  title: string;
  description: string;
  imageSrc?: string;
  imageAlt?: string;
  status: 'published' | 'upcoming';
  readingTime?: string;
  tags?: string[];
  isPlaceholderImage?: boolean;
  objectPosition?: string;
}

const stories: VoiceStoryItem[] = [
  {
    id: 'maria',
    slug: '/voces/maria-hijo-adicciones-mar-del-plata',
    category: 'LAS VOCES DEL FARO · MARÍA',
    person: 'María',
    title: 'Mi hijo consumía y yo ya no sabía cómo ayudarlo',
    description: 'Una madre, un hijo y años intentando encontrar una salida.',
    imageSrc: '/voces/maria/maria-01-apertura-mar-del-plata.jpg',
    imageAlt: 'María contemplando el mar en Mar del Plata al atardecer',
    status: 'published',
    readingTime: '7 min de lectura',
    tags: ['Adicciones', 'Familia', 'Límites']
  },
  {
    id: 'andres',
    slug: '/voces/andres-adicciones-mar-del-plata',
    category: 'LAS VOCES DEL FARO · ANDRÉS',
    person: 'Andrés',
    title: 'Yo no me drogaba para escapar. Me drogaba para rendir.',
    description: 'Andrés tenía empresa, familia y responsabilidades que cumplía con precisión casi obsesiva. Por fuera todo funcionaba. Por dentro, el consumo sostenía una vida que ya no sabía cómo llevar adelante solo.',
    imageSrc: '/voces/andres/andres-01-apertura-mar-del-plata.webp',
    imageAlt: 'Andrés contemplando el mar desde un ventanal en Mar del Plata',
    status: 'published',
    readingTime: '6 min de lectura',
    tags: ['Adicciones', 'Consumo problemático', 'Identidad'],
    objectPosition: 'object-[left_center]'
  },
  {
    id: 'carlos',
    slug: '/voces/carlos-hija-adicciones-mar-del-plata',
    category: 'LAS VOCES DEL FARO · CARLOS',
    person: 'Carlos',
    title: '«Lucía me ayudó tanto.»',
    description: 'Durante años Carlos creyó que era él quien tenía que ayudar a su hija. Con el tiempo descubrió que acompañarla también lo estaba cambiando a él.',
    imageSrc: '/voces/carlos/carlos-01-apertura-mar-del-plata.webp',
    imageAlt: 'Carlos contemplando el mar desde una ventana en Mar del Plata al atardecer',
    status: 'published',
    readingTime: '7 min de lectura',
    tags: ['Adicciones', 'Familia', 'Acompañamiento'],
    objectPosition: 'object-[right_center]'
  }
];

export default function VocesHub() {
  const shouldReduceMotion = useReducedMotion();
  const publishedStories = stories.filter(s => s.status === 'published');
  const heroRef = useRef<HTMLElement>(null);
  const parallaxLayerRef = useRef<HTMLDivElement>(null);

  const animFadeUp: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } 
    }
  };

  // Entrada suave del contenido editorial del hero (fade + mínimo desplazamiento vertical)
  const heroContentAnim: Variants = {
    hidden: { 
      opacity: 0, 
      y: shouldReduceMotion ? 0 : 10 
    },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: shouldReduceMotion ? 0 : 1.1, 
        delay: shouldReduceMotion ? 0 : 0.35, 
        ease: [0.16, 1, 0.3, 1] 
      } 
    }
  };

  // Parallax interactivo sutil en desktop con puntero fino + desplazamiento vertical en scroll
  useEffect(() => {
    if (shouldReduceMotion) return;

    // Deshabilitar en dispositivos táctiles / sin puntero fino
    const isFinePointer = window.matchMedia('(pointer: fine)').matches;
    if (!isFinePointer) return;

    const heroEl = heroRef.current;
    const layerEl = parallaxLayerRef.current;
    if (!heroEl || !layerEl) return;

    let rafId: number;
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;
    let scrollYOffset = 0;
    let currentScrollY = 0;

    // Factor de inercia y amortiguación ultra suave
    const LERP = 0.045;
    // Rango máximo de desplazamiento con ratón: 4.5px (profundidad pura, sin persecución visual)
    const MAX_MOUSE_SHIFT = 4.5;
    // Factor de desplazamiento suave por scroll
    const SCROLL_SPEED = 0.14;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = heroEl.getBoundingClientRect();
      if (e.clientY < rect.bottom + 120 && e.clientY > rect.top - 120) {
        const normalizedX = ((e.clientX - rect.left) / rect.width) * 2 - 1;
        const normalizedY = ((e.clientY - rect.top) / rect.height) * 2 - 1;
        targetX = -normalizedX * MAX_MOUSE_SHIFT;
        targetY = -normalizedY * MAX_MOUSE_SHIFT;
      } else {
        targetX = 0;
        targetY = 0;
      }
    };

    const handleMouseLeave = () => {
      targetX = 0;
      targetY = 0;
    };

    const handleScroll = () => {
      const scroll = window.scrollY || window.pageYOffset;
      if (scroll < (heroEl.offsetHeight || 800) + 150) {
        scrollYOffset = scroll * SCROLL_SPEED;
      }
    };

    const loop = () => {
      currentX += (targetX - currentX) * LERP;
      currentY += (targetY - currentY) * LERP;
      currentScrollY += (scrollYOffset - currentScrollY) * 0.08;

      const totalY = currentY + currentScrollY;
      layerEl.style.transform = `translate3d(${currentX.toFixed(2)}px, ${totalY.toFixed(2)}px, 0)`;

      rafId = requestAnimationFrame(loop);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    heroEl.addEventListener('mouseleave', handleMouseLeave, { passive: true });
    window.addEventListener('scroll', handleScroll, { passive: true });

    handleScroll();
    currentScrollY = scrollYOffset;
    rafId = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('mousemove', handleMouseMove);
      heroEl.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [shouldReduceMotion]);

  return (
    <div className="bg-[#141915] min-h-screen text-[#C8C4BA] selection:bg-[#C2A675]/30 selection:text-[#F6F2EA]">
      {/* Estilos encapsulados para la entrada y movimiento ambiental orgánico del hero */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes heroCollageEntrance {
          0% {
            opacity: 0;
            transform: scale(1.025);
          }
          100% {
            opacity: 1;
            transform: scale(1.002);
          }
        }

        @keyframes heroCollageAmbient {
          0% {
            transform: scale(1.002) translate3d(0, 0, 0);
          }
          50% {
            transform: scale(1.014) translate3d(-2px, -1.5px, 0);
          }
          100% {
            transform: scale(1.002) translate3d(0, 0, 0);
          }
        }

        .hero-collage-motion {
          width: 100%;
          height: 100%;
          will-change: transform, opacity;
          transform-origin: center center;
          animation: 
            heroCollageEntrance 1.8s cubic-bezier(0.16, 1, 0.3, 1) forwards,
            heroCollageAmbient 18s ease-in-out 1.8s infinite alternate;
        }

        @media (max-width: 767px) {
          .hero-collage-motion {
            animation: heroCollageMobileFade 1.6s ease-out forwards !important;
            transform: scale(1) !important;
          }
          @keyframes heroCollageMobileFade {
            0% {
              opacity: 0;
            }
            100% {
              opacity: 1;
            }
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .hero-collage-motion {
            animation: none !important;
            opacity: 1 !important;
            transform: none !important;
          }
        }
      `}} />

      <Head>
        <title>Las Voces del Faro | Historias de salud mental y adicciones</title>
        <meta 
          name="description" 
          content="Historias reales sobre adicciones, salud mental, familia y vínculos. Las Voces del Faro, desde Mar del Plata." 
        />
        <link rel="canonical" href="https://programaelfaro.com.ar/voces" />
        <meta property="og:title" content="Las Voces del Faro | Historias de salud mental y adicciones" />
        <meta 
          property="og:description" 
          content="Historias reales sobre adicciones, salud mental, familia y vínculos. Las Voces del Faro, desde Mar del Plata." 
        />
        <meta property="og:url" content="https://programaelfaro.com.ar/voces" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://programaelfaro.com.ar/voces/maria/maria-01-apertura-mar-del-plata.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Las Voces del Faro | Historias de salud mental y adicciones" />
        <meta 
          name="twitter:description" 
          content="Historias reales sobre adicciones, salud mental, familia y vínculos. Las Voces del Faro, desde Mar del Plata." 
        />
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
          }
        ]
      }} />

      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "name": "Las Voces del Faro",
        "description": "Historias reales sobre adicciones, salud mental, familia y vínculos. Las Voces del Faro, desde Mar del Plata.",
        "url": "https://programaelfaro.com.ar/voces",
        "publisher": {
          "@type": "Organization",
          "name": "El Faro",
          "url": "https://programaelfaro.com.ar"
        }
      }} />

      {/* Hero Editorial con Fondo Collage y Movimiento Orgánico */}
      <section 
        ref={heroRef}
        className="relative min-h-[580px] sm:min-h-[640px] md:min-h-[700px] lg:min-h-[760px] flex items-center justify-center overflow-hidden pt-28 sm:pt-32 md:pt-36 pb-16 md:pb-20"
      >
        {/* Capa Parallax interactiva (desplazamiento sutil ratón + scroll con margen de seguridad) */}
        <div 
          ref={parallaxLayerRef}
          className="absolute -inset-[18px] z-0 will-change-transform pointer-events-none"
          aria-hidden="true"
        >
          {/* Capa con animación de entrada y movimiento ambiental Ken Burns */}
          <div className="hero-collage-motion">
            <picture className="w-full h-full block">
              <source type="image/webp" srcSet="/voces/hub/voces-hub-collage-hero.webp" />
              <img
                src="/voces/hub/voces-hub-collage-hero.jpg"
                alt="Las Voces del Faro - Historias de salud mental y adicciones"
                width={1672}
                height={941}
                fetchPriority="high"
                loading="eager"
                decoding="async"
                className="w-full h-full object-cover object-center"
              />
            </picture>
          </div>
        </div>

        {/* Velo suave central para garantizar legibilidad impecable sobre fondo oscuro */}
        <div 
          className="absolute inset-0 z-[1] bg-[radial-gradient(ellipse_at_center,_rgba(20,25,21,0.85)_0%,_rgba(20,25,21,0.45)_55%,_transparent_80%)] pointer-events-none" 
          aria-hidden="true" 
        />

        {/* Difuminado suave inferior para disolución natural hacia el fondo #141915 */}
        <div 
          className="absolute inset-x-0 bottom-0 h-28 sm:h-36 md:h-44 bg-gradient-to-b from-transparent via-[#141915]/60 to-[#141915] pointer-events-none z-[2]" 
          aria-hidden="true" 
        />

        {/* Contenido Editorial Centrado */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={heroContentAnim}
            className="space-y-6"
          >
            <span className="inline-block text-xs uppercase font-sans tracking-[0.25em] text-[#6F7C63] font-semibold">
              Espacio Editorial · El Faro
            </span>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif text-[#F6F2EA] tracking-tight font-normal leading-[1.08]">
              Las Voces del Faro
            </h1>

            <p className="text-xl sm:text-2xl text-[#C8C4BA] font-light font-serif max-w-2xl mx-auto leading-relaxed">
              Historias en primera persona sobre consumos, salud mental, vínculos, familia y esos momentos en los que pedir ayuda empieza a ser una posibilidad.
            </p>

            <div className="pt-2">
              <p className="text-xs sm:text-sm text-[#9A968D] font-sans italic max-w-xl mx-auto border-t border-white/10 pt-4">
                “Historias reales, emociones vivas. Algunos nombres y datos fueron modificados para preservar la intimidad.”
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Colección de Historias Publicadas - Disposición Editorial Abierta */}
      <section className="py-16 md:py-24 bg-[#141915]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <span className="text-xs uppercase tracking-[0.2em] font-sans text-[#6F7C63] font-semibold">
              Historias publicadas
            </span>
            <span className="text-xs text-[#9A968D] font-sans">
              {publishedStories.length} {publishedStories.length === 1 ? 'relato disponible' : 'relatos disponibles'}
            </span>
          </div>

          <div className="divide-y divide-white/10">
            {publishedStories.map((story) => (
              <motion.article
                key={story.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
                variants={animFadeUp}
                className="group relative py-12 sm:py-16 md:py-20 transition-all duration-300"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                  {/* Fotografía o Placeholder de la historia */}
                  <div className="lg:col-span-5 w-full">
                    <div className="relative aspect-[16/10] sm:aspect-[4/3] rounded-2xl sm:rounded-3xl overflow-hidden bg-[#181E19] border border-white/10 shadow-lg">
                      {story.isPlaceholderImage || !story.imageSrc ? (
                        <div className="w-full h-full bg-gradient-to-br from-[#181E19] via-[#141915] to-[#101311] flex flex-col items-center justify-center p-6 text-center transition-transform duration-700 group-hover:scale-105">
                          <div className="space-y-2 max-w-[220px]">
                            <div className="inline-flex p-3 rounded-full bg-white/5 text-[#9A968D] mx-auto border border-white/10">
                              <Camera size={20} strokeWidth={1.5} />
                            </div>
                            <span className="text-[10px] uppercase font-sans tracking-[0.2em] text-[#C8C4BA] font-medium block">
                              Fotografía en preparación
                            </span>
                            <span className="text-xs text-[#9A968D] font-serif italic block">
                              {story.person} · Mar del Plata
                            </span>
                          </div>
                        </div>
                      ) : (
                        <img
                          src={story.imageSrc}
                          alt={story.imageAlt}
                          loading="lazy"
                          decoding="async"
                          className={`w-full h-full object-cover ${story.objectPosition || 'object-center'} transition-transform duration-700 group-hover:scale-105`}
                        />
                      )}
                      {!story.isPlaceholderImage && (
                        <>
                          <div className="absolute inset-0 bg-gradient-to-t from-[#141915]/70 via-transparent to-transparent opacity-60 pointer-events-none" />
                          <div className="absolute bottom-3 left-3 text-xs text-[#F6F2EA] font-sans tracking-wider uppercase font-medium drop-shadow-sm">
                            Mar del Plata
                          </div>
                        </>
                      )}
                    </div>
                  </div>

                  {/* Detalle y texto editorial */}
                  <div className="lg:col-span-7 space-y-4">
                    <div className="flex items-center justify-between gap-4">
                      <span className="text-[11px] sm:text-xs uppercase font-sans tracking-[0.22em] text-[#6F7C63] font-semibold block">
                        {story.category}
                      </span>
                      {story.readingTime && (
                        <span className="flex items-center gap-1.5 text-xs text-[#9A968D] font-sans font-light">
                          <Clock size={13} className="text-[#6F7C63]" />
                          {story.readingTime}
                        </span>
                      )}
                    </div>

                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-[#F6F2EA] font-normal leading-tight group-hover:text-[#C2A675] transition-colors">
                      <Link to={story.slug} className="focus:outline-none">
                        {story.title}
                      </Link>
                    </h2>

                    <p className="text-base sm:text-lg text-[#C8C4BA] font-light leading-relaxed">
                      {story.description}
                    </p>

                    <div className="pt-3">
                      <Link
                        to={story.slug}
                        className="inline-flex items-center gap-2.5 bg-white/[0.04] text-[#F6F2EA] border border-white/15 hover:border-[#C2A675] hover:text-[#C2A675] px-7 py-3.5 rounded-full text-xs font-medium tracking-widest uppercase transition-all duration-200 font-sans shadow-sm"
                      >
                        <span>Leer la historia</span>
                        <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}

            {/* Espacio editorial preparado para próximas Voces */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={animFadeUp}
              className="pt-12 sm:pt-16 pb-4"
            >
              <div className="p-8 sm:p-10 rounded-2xl bg-[#181E19]/80 border border-white/10 text-center space-y-3 max-w-2xl mx-auto">
                <div className="inline-flex p-2.5 rounded-full bg-white/5 text-[#6F7C63] mb-1 border border-white/10">
                  <BookOpen size={22} />
                </div>
                <h3 className="font-serif text-xl sm:text-2xl text-[#F6F2EA] font-normal">
                  Nuevas historias en preparación
                </h3>
                <p className="text-sm sm:text-base text-[#C8C4BA] font-light leading-relaxed">
                  Las Voces del Faro es una colección viva. En las próximas semanas sumaremos nuevos relatos testimoniales de Mar del Plata sobre salud mental, adicciones y vínculos familiares.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Cierre editorial sutil */}
      <section className="py-16 md:py-20 border-t border-white/10 bg-[#181E19]/40">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <HeartHandshake size={28} className="mx-auto text-[#6F7C63]" />
          <h2 className="text-2xl sm:text-3xl font-serif text-[#F6F2EA] font-normal">
            ¿Sentís que algo de esto resuena con tu presente?
          </h2>
          <p className="text-base sm:text-lg text-[#C8C4BA] font-light leading-relaxed">
            No hace falta que estés en una situación límite para escribirnos. En El Faro podemos escucharte y pensar juntos cómo seguir.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://wa.me/5492235923790?text=Hola,%20quisiera%20hacer%20una%20consulta%20en%20El%20Faro."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#6F7C63] text-[#F6F2EA] px-7 py-3.5 rounded-full text-xs font-medium tracking-widest uppercase hover:bg-[#5E6B53] transition-colors font-sans w-full sm:w-auto shadow-sm"
            >
              Hablar con El Faro
              <ArrowRight size={14} />
            </a>
            <Link
              to="/adicciones-mar-del-plata"
              className="inline-flex items-center justify-center gap-2 bg-transparent text-[#F6F2EA] border border-white/20 px-7 py-3.5 rounded-full text-xs font-medium tracking-widest uppercase hover:border-white/40 transition-colors font-sans w-full sm:w-auto"
            >
              Tratamiento de adicciones
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
