import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { blogPostsMeta as blogPosts } from '../data/blogPostsMeta';
import { fadeUp, staggerContainer, viewportConfig } from '../utils/animations';
import { getBlogPostUrl } from '../utils/urls';
import { getCardImageUrl, getCardSrcSet } from '../utils/cloudinary';

interface VoicesCarouselProps {
  postIds?: string[];
  variant?: 'light' | 'dark';
}

export default function VoicesCarousel({ postIds, variant = 'light' }: VoicesCarouselProps) {
  // Grab up to 6 posts in the voices category or follow the explicit order provided
  const voicesPosts = postIds
    ? (postIds.map(id => blogPosts.find(p => p.id === id)).filter(Boolean) as typeof blogPosts)
    : [...blogPosts]
        .filter(post => post.category === 'Las Voces del Faro')
        .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt))
        .slice(0, 6);

  const isDark = variant === 'dark';

  if (voicesPosts.length === 0) return null;

  return (
    <section className={`py-20 border-t ${isDark ? 'bg-ink border-sand/5 text-white' : 'bg-sand/10 border-sand/20 text-ink'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 space-y-4 md:space-y-0">
          <div className="space-y-3 max-w-2xl text-center md:text-left">
            <span className={`text-[10px] uppercase font-bold tracking-[0.25em] font-mono ${isDark ? 'text-olive-light' : 'text-olive'}`}>
              Las Voces del Faro
            </span>
            <h2 className={`text-3xl md:text-4xl font-serif ${isDark ? 'text-offwhite font-light' : 'text-ink'}`}>
              Historias narradas en primera persona
            </h2>
            <p className={`font-light text-sm md:text-base leading-relaxed ${isDark ? 'text-sand/70' : 'text-ink-light'}`}>
              Escucha a quienes ya transitaron el camino. Testimonios íntimos sobre vínculos, adicciones y reconstrucción.
            </p>
          </div>
          <div className="text-center md:text-right flex-shrink-0">
            <Link
              to="/recursos/voces"
              className={`inline-flex items-center gap-2 font-medium transition-colors border-b pb-1 text-sm tracking-wider uppercase font-sans group/btn ${
                isDark ? 'text-sand border-sand/30 hover:text-white' : 'text-olive border-olive/30 hover:text-olive-light'
              }`}
            >
              Ver todas las voces
              <ArrowRight size={16} className="transition-transform group-hover/btn:translate-x-1" />
            </Link>
          </div>
        </div>

        {voicesPosts.length === 1 ? (
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            variants={fadeUp}
            className="w-full max-w-4xl mx-auto"
          >
            {voicesPosts.map((post) => (
              <Link
                key={post.id}
                to={getBlogPostUrl(post)}
                className={`group flex flex-col md:flex-row rounded-3xl overflow-hidden border transition-all duration-300 ${
                  isDark
                    ? 'bg-white/[0.02] border-sand/10 hover:border-sand/20 hover:shadow-md'
                    : 'bg-white border-sand/30 hover:shadow-md'
                }`}
              >
                <div className="md:w-[40%] shrink-0 aspect-[16/10] md:aspect-auto overflow-hidden">
                  <img
                    src={getCardImageUrl(post, 640)}
                    srcSet={getCardSrcSet(post)}
                    sizes="(min-width: 768px) 380px, 100vw"
                    alt={post.imageAlt || post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    decoding="async"
                    width={800}
                    height={500}
                  />
                </div>
                <div className="p-8 md:p-10 flex flex-col justify-center flex-grow space-y-4">
                  <span className={`text-[10px] tracking-[0.2em] uppercase font-bold font-mono ${isDark ? 'text-olive-light' : 'text-olive'}`}>
                    {post.category}
                  </span>
                  <h3 className={`text-2xl md:text-3xl font-serif font-semibold leading-snug transition-colors line-clamp-2 ${
                    isDark ? 'text-offwhite group-hover:text-gold' : 'text-ink group-hover:text-olive'
                  }`}>
                    {post.title}
                  </h3>
                  <p className={`font-light text-sm md:text-base leading-relaxed flex-grow line-clamp-3 ${isDark ? 'text-sand/70' : 'text-ink-light'}`}>
                    {post.excerpt}
                  </p>
                  <div className={`inline-flex items-center gap-2 font-medium text-xs uppercase tracking-widest pt-2 font-sans ${
                    isDark ? 'text-gold' : 'text-olive'
                  }`}>
                    Entrar a leer <ArrowRight size={14} />
                  </div>
                </div>
              </Link>
            ))}
          </motion.div>
        ) : (
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            variants={staggerContainer}
            className="flex overflow-x-auto snap-x snap-mandatory no-scrollbar pb-6 gap-6 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-8 md:pb-0"
          >
            {voicesPosts.map((post) => (
              <motion.div 
                key={post.id} 
                variants={fadeUp}
                className="flex-shrink-0 w-[85%] sm:w-[60%] md:w-full snap-start"
              >
                <Link
                  to={getBlogPostUrl(post)}
                  className={`group flex flex-col h-full rounded-3xl overflow-hidden border transition-all duration-300 ${
                    isDark
                      ? 'bg-white/[0.02] border-sand/10 hover:border-sand/20 hover:shadow-md'
                      : 'bg-white border-sand/30 hover:shadow-md'
                  }`}
                >
                  <div className="aspect-[16/10] w-full overflow-hidden">
                    <img
                      src={getCardImageUrl(post, 480)}
                      srcSet={getCardSrcSet(post)}
                      sizes="(min-width: 1280px) 380px, (min-width: 768px) 50vw, 100vw"
                      alt={post.imageAlt || post.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                      decoding="async"
                      width={800}
                      height={500}
                    />
                  </div>
                  <div className="p-8 flex flex-col flex-grow space-y-4">
                    <span className={`text-[10px] tracking-[0.2em] uppercase font-bold font-mono ${isDark ? 'text-olive-light' : 'text-olive'}`}>
                      {post.category}
                    </span>
                    <h3 className={`text-xl font-serif font-semibold leading-snug transition-colors line-clamp-2 ${
                      isDark ? 'text-offwhite group-hover:text-gold' : 'text-ink group-hover:text-olive'
                    }`}>
                      {post.title}
                    </h3>
                    <p className={`font-light text-sm leading-relaxed flex-grow line-clamp-3 ${isDark ? 'text-sand/70' : 'text-ink-light'}`}>
                      {post.excerpt}
                    </p>
                    <div className={`inline-flex items-center gap-2 font-medium text-xs uppercase tracking-widest mt-auto font-sans ${
                      isDark ? 'text-gold' : 'text-olive'
                    }`}>
                      Entrar a leer <ArrowRight size={14} />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
}
