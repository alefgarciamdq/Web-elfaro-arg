import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, MessageCircle } from 'lucide-react';
import { fadeUp } from '../../utils/animations';

interface GuideHeroProps {
  breadcrumbText: string;
  breadcrumbLink: string;
  tag: string;
  date: string;
  title: string;
  lead: string;
  imageUrl: string;
  imageAlt: string;
  ctaPrimaryText: string;
  ctaPrimaryHref: string;
  ctaSecondaryText: string;
  ctaSecondaryHref: string;
  trustLine: string;
}

export default function GuideHero({
  breadcrumbText,
  breadcrumbLink,
  tag,
  date,
  title,
  lead,
  imageUrl,
  imageAlt,
  ctaPrimaryText,
  ctaPrimaryHref,
  ctaSecondaryText,
  ctaSecondaryHref,
  trustLine
}: GuideHeroProps) {
  const isCtaSecondaryExternal = ctaSecondaryHref.startsWith('http') || ctaSecondaryHref.startsWith('tel') || ctaSecondaryHref.startsWith('mailto');

  return (
    <section className="relative min-h-[85vh] lg:min-h-[90vh] flex items-end pb-16 pt-32 bg-ink text-white">
      {/* Imagen de fondo documental a color real */}
      <div className="absolute inset-0 z-0">
        <img
          src={imageUrl}
          alt={imageAlt}
          className="w-full h-full object-cover object-center"
          referrerPolicy="no-referrer"
          fetchPriority="high"
          decoding="async"
        />
        {/* Degradado oscuro (scrim) superpuesto para garantizar la máxima legibilidad */}
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/80 to-ink/35 pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-left">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="max-w-4xl space-y-6"
        >
          {/* Breadcrumb a la izquierda */}
          <Link
            to={breadcrumbLink}
            className="inline-flex items-center gap-2 text-sand/70 hover:text-white transition-colors text-xs font-mono tracking-wider uppercase group"
          >
            <ArrowLeft size={14} className="transition-transform group-hover:-translate-x-1" />
            {breadcrumbText}
          </Link>

          {/* Metadatos (Tag y Fecha) */}
          <div className="flex flex-wrap items-center gap-3 text-[10px] md:text-xs font-mono tracking-[0.2em] text-olive-light uppercase font-bold">
            <span>{tag}</span>
            <span className="text-sand/30 font-light">•</span>
            <span className="text-sand/70 font-light">{date}</span>
          </div>

          {/* H1 en Cormorant Garamond */}
          <h1 className="text-4xl md:text-5xl lg:text-6.5xl font-serif text-offwhite leading-[1.1] font-light tracking-tight max-w-3xl">
            {title}
          </h1>

          {/* Lead en Inter */}
          <p className="text-base md:text-lg lg:text-xl text-sand-light/95 font-light leading-relaxed max-w-2xl font-sans">
            {lead}
          </p>

          {/* Barra de CTAs alineada a la izquierda */}
          <div className="pt-4 space-y-4">
            <div className="flex flex-col sm:flex-row justify-start items-stretch sm:items-center gap-4">
              {/* Botón primario de ancla */}
              <a
                href={ctaPrimaryHref}
                className="inline-flex items-center justify-center gap-2.5 bg-olive text-white px-8 py-4 rounded-full text-xs font-bold tracking-widest uppercase hover:bg-olive-light transition-all shadow-md shadow-black/25"
              >
                {ctaPrimaryText}
                <ArrowRight size={14} />
              </a>

              {/* Botón secundario */}
              {isCtaSecondaryExternal ? (
                <a
                  href={ctaSecondaryHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 bg-white/10 text-offwhite border border-white/20 px-8 py-4 rounded-full text-xs font-bold tracking-widest uppercase hover:bg-white/20 transition-all"
                >
                  <MessageCircle size={14} className="text-olive-light shrink-0" />
                  {ctaSecondaryText}
                </a>
              ) : (
                <Link
                  to={ctaSecondaryHref}
                  className="inline-flex items-center justify-center gap-2.5 bg-white/10 text-offwhite border border-white/20 px-8 py-4 rounded-full text-xs font-bold tracking-widest uppercase hover:bg-white/20 transition-all"
                >
                  <MessageCircle size={14} className="text-olive-light shrink-0" />
                  {ctaSecondaryText}
                </Link>
              )}
            </div>

            {/* Línea de confianza */}
            <p className="text-xs text-sand/45 font-light tracking-wide max-w-md italic font-sans">
              {trustLine}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
