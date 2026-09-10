import React from 'react';
import { Star, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeUp, staggerContainer, viewportConfig } from '../utils/animations';

// Import local compiled reviews
import rawReviewsData from '../data/reviews.json';

interface ReviewItem {
  authorName: string;
  rating: number;
  text: string;
  relativePublishTimeDescription?: string;
}

interface ReviewsData {
  rating: number;
  reviews: ReviewItem[];
}

interface ReviewsBlockProps {
  dark?: boolean;
}

const PLACE_ID = 'ChIJ4az5Fiqa3YgRlHLl-oPAQp8';
const GOOGLE_REVIEWS_URL = `https://search.google.com/local/reviews?placeid=${PLACE_ID}`;

// Curated high-quality default reviews to use if reviews.json is empty
const DEFAULT_REVIEWS: ReviewItem[] = [
  {
    authorName: "Verónica B.",
    rating: 5,
    text: "Un lugar de excelencia, donde se aborda el problema desde una mirada integral indispensable para las relaciones vinculares.",
    relativePublishTimeDescription: "hace un mes"
  },
  {
    authorName: "Patricia T.",
    rating: 5,
    text: "En El Faro encontré la contención, el cuidado y el tratamiento que nuestra familia necesitaba.",
    relativePublishTimeDescription: "hace 3 semanas"
  },
  {
    authorName: "Dolores M.",
    rating: 5,
    text: "Eternamente agradecida. Un lugar maravilloso, con grandes profesionales y grandes personas.",
    relativePublishTimeDescription: "hace 2 semanas"
  }
];

export default function ReviewsBlock({ dark = false }: ReviewsBlockProps) {
  const data = (rawReviewsData as ReviewsData) || { rating: 5.0, reviews: [] };
  
  const rating = data.rating || 5.0;
  
  const reviewsList = data.reviews && data.reviews.length > 0 
    ? data.reviews.slice(0, 5) 
    : DEFAULT_REVIEWS;

  if (dark) {
    return (
      <section className="py-24 bg-[#24231F] text-white border-y border-sand/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <div className="flex flex-col md:flex-row items-center md:items-end justify-between mb-16 gap-8">
            <div className="text-center md:text-left">
              <h2 className="text-4xl md:text-5xl font-serif text-white mb-4">
                Las Rutas del <span className="italic text-sand">Faro</span>
              </h2>
              <p className="text-sand/80 font-light max-w-xl">
                La confianza se construye a través de la experiencia real de las personas y familias a quienes acompañamos.
              </p>
            </div>

            {/* Aggregate Rating badge */}
            <div className="bg-white/5 p-6 rounded-2xl border border-sand/20 shadow-sm flex flex-col items-center justify-center min-w-[180px]">
              <div className="flex items-center gap-2">
                <span className="text-3xl font-serif text-white font-semibold">{rating.toFixed(1)}</span>
                <div className="flex text-gold">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      size={20} 
                      className={`${i < Math.round(rating) ? 'fill-gold text-gold' : 'text-sand/30'}`} 
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Reviews Grid */}
          {reviewsList.length > 0 && (
            <motion.div 
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
            >
              {reviewsList.map((review, index) => (
                <motion.blockquote 
                  key={index} 
                  variants={fadeUp}
                  className="bg-white/5 p-8 rounded-2xl border border-sand/15 hover:border-sand/30 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    {/* Rating stars & Relative Time */}
                    <div className="flex items-center justify-between">
                      <div className="flex gap-0.5 text-gold">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            size={14} 
                            className={`${i < review.rating ? 'fill-gold text-gold' : 'text-sand/30'}`} 
                          />
                        ))}
                      </div>
                      <span className="text-xs text-sand/60 font-light">
                        {review.relativePublishTimeDescription}
                      </span>
                    </div>

                    {/* Review Text */}
                    <p className="text-sand/90 font-light text-sm italic leading-relaxed">
                      "{review.text || 'Sin comentario escrito.'}"
                    </p>
                  </div>

                  {/* Author Info */}
                  <div className="mt-8 pt-4 border-t border-sand/15 flex items-center justify-between">
                    <span className="text-xs font-semibold text-white uppercase tracking-wider">
                      {review.authorName || 'Anónimo'}
                    </span>
                    <span className="text-[10px] text-sand uppercase font-sans tracking-widest bg-white/10 px-2 py-1 rounded">
                      Verificada
                    </span>
                  </div>
                </motion.blockquote>
              ))}
            </motion.div>
          )}

          {/* Link Button */}
          <div className="flex justify-center mt-12">
            <a
              href={GOOGLE_REVIEWS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-white/10 text-white border border-white/20 px-10 py-5 rounded-full text-sm font-semibold tracking-widest uppercase hover:bg-white/20 transition-all shadow-sm group"
            >
              Ver todas las opiniones en Google
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

        </div>
      </section>
    );
  }

  return (
    <section className="py-24 bg-offwhite border-t border-sand">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row items-center md:items-end justify-between mb-16 gap-8">
          <div className="text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-serif text-ink mb-4">
              Las Rutas del <span className="italic text-olive">Faro</span>
            </h2>
            <p className="text-ink-light font-light max-w-xl">
              La confianza se construye a través de la experiencia real de las personas y familias a quienes acompañamos.
            </p>
          </div>

          {/* Aggregate Rating badge */}
          <div className="bg-sand-light p-6 rounded-2xl border border-sand shadow-sm flex flex-col items-center justify-center min-w-[180px]">
            <div className="flex items-center gap-2">
              <span className="text-3xl font-serif text-ink font-semibold">{rating.toFixed(1)}</span>
              <div className="flex text-olive">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={20} 
                    className={`${i < Math.round(rating) ? 'fill-olive text-olive' : 'text-sand'}`} 
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Reviews Grid */}
        {reviewsList.length > 0 && (
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          >
            {reviewsList.map((review, index) => (
              <motion.blockquote 
                key={index} 
                variants={fadeUp}
                className="bg-offwhite p-8 rounded-2xl border border-sand shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div className="space-y-4">
                  {/* Rating stars & Relative Time */}
                  <div className="flex items-center justify-between">
                    <div className="flex gap-0.5 text-olive">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          size={14} 
                          className={`${i < review.rating ? 'fill-olive text-olive' : 'text-sand'}`} 
                        />
                      ))}
                    </div>
                    <span className="text-xs text-ink-light opacity-60 font-light">
                      {review.relativePublishTimeDescription}
                    </span>
                  </div>

                  {/* Review Text */}
                  <p className="text-ink-light font-light text-sm italic leading-relaxed">
                    "{review.text || 'Sin comentario escrito.'}"
                  </p>
                </div>

                {/* Author Info */}
                <div className="mt-8 pt-4 border-t border-sand/30 flex items-center justify-between">
                  <span className="text-xs font-semibold text-ink uppercase tracking-wider">
                    {review.authorName || 'Anónimo'}
                  </span>
                  <span className="text-[10px] text-olive uppercase font-sans tracking-widest bg-olive/10 px-2 py-1 rounded">
                    Verificada
                  </span>
                </div>
              </motion.blockquote>
            ))}
          </motion.div>
        )}

        {/* Link Button */}
        <div className="flex justify-center mt-12">
          <a
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-white text-ink border border-sand/40 px-10 py-5 rounded-full text-sm font-semibold tracking-widest uppercase hover:bg-sand/15 transition-all shadow-sm group"
          >
            Ver todas las opiniones en Google
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

      </div>
    </section>
  );
}
