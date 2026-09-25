import React from 'react';
import { Star, ArrowRight, MessageSquare, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeUp, staggerContainer, viewportConfig } from '../utils/animations';
import { GOOGLE_PROFILE_ARGENTINA } from '../data/googleReviewsArgentina';
import { getSelectedReviews } from '../data/selectedReviews';

interface ReviewsBlockProps {
  dark?: boolean;
}

export default function ReviewsBlock({ dark = true }: ReviewsBlockProps) {
  const reviews = getSelectedReviews();
  const profile = GOOGLE_PROFILE_ARGENTINA;

  return (
    <section id="rutas-del-faro" className="py-24 bg-[#24231F] text-white border-y border-sand/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Encabezado Editorial y Badge de Ficha Global */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8 pb-8 border-b border-sand/10">
          <div className="max-w-3xl">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-faro-gold font-semibold mb-3 block">
              Experiencias y testimonios
            </span>
            <h2 className="text-3xl md:text-5xl font-serif text-white mb-4 leading-tight">
              Las Rutas del <span className="italic text-sand">Faro</span>
            </h2>
            <p className="text-sand/85 font-light text-base md:text-lg leading-relaxed">
              Desde 1993, personas y familias han pasado por El Faro. Algunas decidieron compartir públicamente una parte de su experiencia.
            </p>
          </div>

          {/* Bloque de valoración global de la ficha en Google */}
          <div className="bg-white/[0.04] p-6 rounded-2xl border border-sand/20 shadow-sm flex flex-col items-start lg:items-end justify-center min-w-[240px] shrink-0">
            <div className="flex items-center gap-3 mb-1">
              <span className="text-3xl font-serif text-white font-semibold tracking-tight">
                {profile.rating.toFixed(1).replace('.', ',')}
              </span>
              <div className="flex items-center gap-0.5" aria-label={`Puntuación global: ${profile.rating} de 5 estrellas`}>
                {[...Array(5)].map((_, i) => {
                  const fillAmount = Math.max(0, Math.min(1, profile.rating - i));
                  return (
                    <div key={i} className="relative inline-block w-[18px] h-[18px]">
                      <Star size={18} className="text-sand/25 absolute inset-0" />
                      {fillAmount > 0 && (
                        <div 
                          className="overflow-hidden absolute inset-0" 
                          style={{ width: `${fillAmount * 100}%` }}
                        >
                          <Star size={18} className="fill-gold text-gold" />
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="text-xs text-sand/80 font-light tracking-wide mt-1">
              <span className="font-medium text-white">{profile.rating.toFixed(1).replace('.', ',')}</span> · {profile.totalReviews} opiniones en Google
            </div>
            <span className="text-[10px] text-sand/50 font-mono tracking-wider uppercase mt-1">
              Ficha oficial · Garay 2073, Mar del Plata
            </span>
          </div>
        </div>

        {/* Aclaración visual de selección */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-2 text-xs text-sand/60 font-light">
          <div className="flex items-center gap-2">
            <ShieldCheck size={14} className="text-faro-gold shrink-0" />
            <span>Selección editorial de 4 opiniones públicas verificadas</span>
          </div>
          <span className="text-[11px] font-mono uppercase text-sand/40">
            Valoración global en Google: {profile.rating.toFixed(1).replace('.', ',')} ({profile.totalReviews} opiniones)
          </span>
        </div>

        {/* Grilla elegante de 4 reseñas (2x2) */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-16"
        >
          {reviews.map((review) => (
            <motion.blockquote
              key={review.id}
              variants={fadeUp}
              className="bg-white/[0.03] hover:bg-white/[0.05] p-8 sm:p-9 rounded-2xl border border-sand/15 hover:border-sand/30 shadow-sm transition-all flex flex-col justify-between group"
            >
              <div className="space-y-5">
                {/* Estrellas de la reseña y antigüedad */}
                <div className="flex items-center justify-between">
                  <div className="flex gap-1 text-gold">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={15}
                        className={i < review.rating ? 'fill-gold text-gold' : 'text-sand/30'}
                      />
                    ))}
                  </div>
                  <span className="text-xs text-sand/60 font-light">
                    {review.relativeTime}
                  </span>
                </div>

                {/* Texto íntegro y literal */}
                <p className="text-sand/90 font-serif italic text-base sm:text-lg leading-relaxed font-light">
                  «{review.text}»
                </p>
              </div>

              {/* Pie de tarjeta con autor anonimizado y badge verificado */}
              <div className="mt-8 pt-5 border-t border-sand/10 flex items-center justify-between">
                <div>
                  <span className="text-sm font-serif text-white tracking-wide block">
                    {review.authorAnonymized}
                  </span>
                  {review.authorMeta && (
                    <span className="text-[11px] text-sand/50 font-light block">
                      {review.authorMeta.split('·')[0].trim()}
                    </span>
                  )}
                </div>
                <span className="text-[10px] text-faro-gold uppercase font-mono tracking-widest bg-white/[0.06] border border-faro-gold/30 px-2.5 py-1 rounded">
                  Google verificada
                </span>
              </div>
            </motion.blockquote>
          ))}
        </motion.div>

        {/* Acciones finales a la ficha argentina */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4">
          <a
            href={profile.viewReviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-sand/10 hover:bg-sand/20 text-white border border-sand/30 hover:border-sand/50 px-8 py-4 rounded-full text-xs font-semibold tracking-widest uppercase transition-all shadow-sm group"
          >
            <span>Ver opiniones en Google</span>
            <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform text-faro-gold" />
          </a>

          <a
            href={profile.writeReviewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-sans tracking-wider uppercase text-sand/70 hover:text-white transition-colors py-2 px-3 underline-offset-4 hover:underline"
          >
            <MessageSquare size={13} className="text-faro-gold" />
            <span>Dejar una opinión</span>
          </a>
        </div>

      </div>
    </section>
  );
}
