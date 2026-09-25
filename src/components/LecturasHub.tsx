import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Clock, Compass } from 'lucide-react';
import { Head } from 'vite-react-ssg';
import { motion, useReducedMotion, type Variants } from 'framer-motion';
import JsonLd from './JsonLd';

interface PublishedArticle {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readingTime: string;
  imageUrl: string;
  imageAlt: string;
  datePublished: string;
}

const PUBLISHED_ARTICLES: PublishedArticle[] = [
  {
    id: 'como-saber-cuando-un-consumo-se-volvio-problematico',
    slug: '/lecturas/como-saber-cuando-un-consumo-se-volvio-problematico',
    title: '¿Cómo saber cuándo un consumo se volvió problemático?',
    excerpt: 'Consumos problemáticos, adicciones y señales cotidianas. Consecuencias en los vínculos, la capacidad de decisión y pautas clínicas para identificar cuándo es momento de consultar.',
    category: 'Consumos problemáticos · Criterios clínicos',
    readingTime: '6 min de lectura',
    imageUrl: '/lecturas/consumo-problematico-mar-del-plata-eleccion.webp',
    imageAlt: 'Hombre caminando por la costa de Mar del Plata, imagen editorial sobre consumos problemáticos',
    datePublished: '2026-09-18'
  },
  {
    id: 'cuando-las-adicciones-organizan-la-vida-familiar',
    slug: '/lecturas/cuando-las-adicciones-organizan-la-vida-familiar',
    title: 'Cuando las adicciones terminan organizando la vida de toda una familia',
    excerpt: 'Cómo una adicción puede modificar vínculos, decisiones y rutinas de toda una familia, y por qué la familia también puede pedir ayuda.',
    category: 'Dinámica familiar · Vínculos y límites',
    readingTime: '8 min de lectura',
    imageUrl: '/lecturas/adicciones-familia/adicciones-familia-silla-vacia-mar-del-plata.webp',
    imageAlt: 'Familia reunida alrededor de una mesa cotidiana donde permanece una silla vacía, imagen editorial sobre el impacto familiar del consumo',
    datePublished: '2026-09-19'
  }
];

export default function LecturasHub() {
  const shouldReduceMotion = useReducedMotion();

  const animFadeUp: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } 
    }
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.15,
        delayChildren: shouldReduceMotion ? 0 : 0.1
      }
    }
  };

  return (
    <div className="bg-[#141915] min-h-screen text-[#C8C4BA] selection:bg-[#6F7C63]/30">
      <Head>
        <title>Lecturas del Faro | Ideas, salud mental y adicciones | El Faro</title>
        <meta 
          name="description" 
          content="Ensayos, pautas clínicas y reflexiones sobre consumos problemáticos, adicciones y vínculos familiares. Lecturas del Faro, desde Mar del Plata." 
        />
        <link rel="canonical" href="https://programaelfaro.com.ar/lecturas" />
        <meta property="og:title" content="Lecturas del Faro | Ideas, salud mental y adicciones | El Faro" />
        <meta 
          property="og:description" 
          content="Ensayos, pautas clínicas y reflexiones sobre consumos problemáticos, adicciones y vínculos familiares. Lecturas del Faro, desde Mar del Plata." 
        />
        <meta property="og:url" content="https://programaelfaro.com.ar/lecturas" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://programaelfaro.com.ar/lecturas/consumo-problematico-mar-del-plata-eleccion.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Lecturas del Faro | Ideas, salud mental y adicciones | El Faro" />
        <meta 
          name="twitter:description" 
          content="Ensayos, pautas clínicas y reflexiones sobre consumos problemáticos, adicciones y vínculos familiares. Lecturas del Faro, desde Mar del Plata." 
        />
        <meta name="twitter:image" content="https://programaelfaro.com.ar/lecturas/consumo-problematico-mar-del-plata-eleccion.jpg" />
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
            "name": "Lecturas del Faro",
            "item": "https://programaelfaro.com.ar/lecturas"
          }
        ]
      }} />

      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "name": "Lecturas del Faro",
        "description": "Ensayos, pautas clínicas y reflexiones sobre consumos problemáticos, adicciones y vínculos familiares. Lecturas del Faro, desde Mar del Plata.",
        "url": "https://programaelfaro.com.ar/lecturas",
        "publisher": {
          "@type": "Organization",
          "name": "El Faro Argentina",
          "url": "https://programaelfaro.com.ar"
        },
        "mainEntity": {
          "@type": "ItemList",
          "itemListElement": PUBLISHED_ARTICLES.map((article, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "url": `https://programaelfaro.com.ar${article.slug}`,
            "name": article.title
          }))
        }
      }} />

      {/* ── CABECERA EDITORIAL ── */}
      <header className="pt-28 sm:pt-32 lg:pt-36 pb-20 sm:pb-24 lg:pb-28 border-b border-white/10 bg-[#181E19]/60">
        <div className="max-w-6xl 2xl:max-w-[1240px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="flex items-center gap-2.5 mb-6 text-xs sm:text-sm font-mono uppercase tracking-[0.25em] text-[#6F7C63] font-semibold">
            <span>EL FARO · MAR DEL PLATA</span>
            <span className="text-white/20">•</span>
            <span>PUBLICACIONES</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl 2xl:text-[4.75rem] text-[#F6F2EA] font-normal tracking-tight leading-[1.06] mb-8">
            Lecturas del Faro
          </h1>

          <p className="max-w-3xl text-base sm:text-lg lg:text-xl 2xl:text-[1.35rem] text-[#C8C4BA] font-light leading-relaxed">
            Ideas, experiencias y herramientas clínicas para entender mejor lo que nos pasa y lo que les pasa a quienes queremos. Un espacio editorial de El Faro para pensar los consumos problemáticos, la salud mental y la vida cotidiana.
          </p>
        </div>
      </header>

      {/* ── CATÁLOGO EDITORIAL ── */}
      <main className="max-w-6xl 2xl:max-w-[1240px] mx-auto px-5 sm:px-8 lg:px-12 py-20 sm:py-28 lg:py-32">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="space-y-20 sm:space-y-28 lg:space-y-36"
        >
          {PUBLISHED_ARTICLES.map((article, index) => (
            <motion.article
              key={article.id}
              variants={animFadeUp}
              className="group border-b border-white/10 pb-20 sm:pb-28 lg:pb-36 last:border-b-0"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 2xl:gap-20 items-center">
                {/* Fotografía Documental */}
                <div className="lg:col-span-7 overflow-hidden rounded-2xl sm:rounded-3xl bg-[#181E19] aspect-[16/10] relative shadow-sm border border-white/10">
                  <Link to={article.slug} tabIndex={-1} aria-hidden="true" className="block w-full h-full">
                    <img
                      src={article.imageUrl}
                      alt={article.imageAlt}
                      loading={index === 0 ? 'eager' : 'lazy'}
                      decoding="async"
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                      width={1200}
                      height={750}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#141915]/40 via-transparent to-transparent opacity-60 pointer-events-none" />
                  </Link>
                </div>

                {/* Bloque Editorial */}
                <div className="lg:col-span-5 flex flex-col space-y-5 2xl:space-y-6">
                  <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm font-sans text-[#6F7C63]">
                    <span className="uppercase tracking-[0.18em] font-medium text-xs">
                      {article.category}
                    </span>
                    <span className="text-white/20">•</span>
                    <span className="inline-flex items-center gap-1.5 text-[#9A968D] text-xs font-light">
                      <Clock size={14} className="text-[#6F7C63]/70" />
                      {article.readingTime}
                    </span>
                  </div>

                  <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl 2xl:text-[2.65rem] text-[#F6F2EA] font-normal leading-[1.16] tracking-tight group-hover:text-[#C2A675] transition-colors">
                    <Link to={article.slug}>
                      {article.title}
                    </Link>
                  </h2>

                  <p className="text-base sm:text-lg 2xl:text-[1.125rem] text-[#C8C4BA] font-light leading-relaxed">
                    {article.excerpt}
                  </p>

                  <div className="pt-2">
                    <Link
                      to={article.slug}
                      className="inline-flex items-center gap-2.5 text-sm sm:text-base font-sans font-medium uppercase tracking-wider text-[#C2A675] hover:text-[#C2A675]/80 transition-colors group-hover:gap-3.5"
                    >
                      <span>Leer artículo</span>
                      <ArrowRight size={16} className="transition-transform duration-200" />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* ── NOTA EDITORIAL DE PRÓXIMAS LECTURAS ── */}
        <section className="mt-12 sm:mt-16 p-8 sm:p-12 lg:p-14 rounded-3xl bg-[#181E19] border border-white/10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div className="space-y-2.5 max-w-2xl">
            <span className="text-xs uppercase font-mono tracking-[0.2em] text-[#6F7C63] font-semibold block">
              Próximamente
            </span>
            <h3 className="text-lg sm:text-xl lg:text-2xl text-[#F6F2EA] font-serif font-normal leading-snug">
              Nuevas Lecturas del Faro en preparación editorial.
            </h3>
            <p className="text-sm sm:text-base text-[#C8C4BA] font-light leading-relaxed">
              Publicamos periódicamente pautas de orientación clínica, análisis de dinámicas cotidianas y herramientas dirigidas a personas en tratamiento, familias y profesionales.
            </p>
          </div>

          <div className="shrink-0">
            <Link
              to="/voces"
              className="inline-flex items-center gap-2.5 text-xs sm:text-sm font-sans font-medium text-[#F6F2EA] hover:text-[#C2A675] transition-colors border border-white/15 px-6 py-3.5 rounded-full hover:bg-white/5 shadow-sm"
            >
              <BookOpen size={16} className="text-[#6F7C63]" />
              <span>Conocé Las Voces del Faro</span>
            </Link>
          </div>
        </section>

        {/* ── PUENTE ASISTENCIAL / CONTACTO ── */}
        <section className="mt-20 sm:mt-24 lg:mt-32 text-center py-16 sm:py-20 px-8 lg:px-16 rounded-3xl bg-[#181E19] border border-white/10">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-[#141915] text-[#6F7C63] mb-5">
            <Compass size={24} />
          </div>
          <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#F6F2EA] font-normal mb-4 leading-snug">
            ¿Necesitás hablar con un profesional?
          </h3>
          <p className="text-base sm:text-lg text-[#C8C4BA] font-light max-w-2xl mx-auto mb-8 leading-relaxed">
            En El Faro recibimos consultas de personas que quieren revisar su forma de consumir y de familias que buscan orientación profesional en Mar del Plata.
          </p>
          <Link
            to="/contacto"
            className="inline-flex items-center gap-2.5 bg-[#6F7C63] text-[#F6F2EA] px-8 py-4 rounded-full text-xs sm:text-sm font-semibold tracking-wider uppercase hover:bg-[#5E6B53] transition-colors shadow-sm"
          >
            <span>Consultar con el equipo</span>
            <ArrowRight size={16} />
          </Link>
        </section>
      </main>
    </div>
  );
}
