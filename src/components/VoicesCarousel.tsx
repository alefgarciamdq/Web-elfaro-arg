import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import { blogPostsMeta as blogPosts } from '../data/blogPostsMeta';
import { fadeUp, staggerContainer, viewportConfig } from '../utils/animations';
import { getBlogPostUrl } from '../utils/urls';
import { getCardImageUrl, getCardSrcSet } from '../utils/cloudinary';

interface VoicesCarouselProps {
  postIds?: string[];
  variant?: 'light' | 'dark';
}

interface ArgentineVoiceStory {
  id: string;
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  imageUrl: string;
  imageAlt: string;
  objectPosition?: string;
  readingTime?: string;
}

const ARGENTINA_VOICES: ArgentineVoiceStory[] = [
  {
    id: 'maria',
    slug: '/voces/maria-hijo-adicciones-mar-del-plata',
    category: 'LAS VOCES DEL FARO · MARÍA',
    title: 'Mi hijo consumía y yo ya no sabía cómo ayudarlo',
    excerpt: 'Una madre, un hijo y años intentando encontrar una salida.',
    imageUrl: '/voces/maria/maria-01-apertura-mar-del-plata.jpg',
    imageAlt: 'María contemplando el mar en Mar del Plata al atardecer',
    readingTime: '7 min de lectura',
    objectPosition: 'object-center'
  },
  {
    id: 'andres',
    slug: '/voces/andres-adicciones-mar-del-plata',
    category: 'LAS VOCES DEL FARO · ANDRÉS',
    title: 'Yo no me drogaba para escapar. Me drogaba para rendir.',
    excerpt: 'Andrés tenía empresa, familia y responsabilidades que cumplía con precisión casi obsesiva. Por fuera todo funcionaba. Por dentro, el consumo sostenía una vida que ya no sabía cómo llevar adelante solo.',
    imageUrl: '/voces/andres/andres-01-apertura-mar-del-plata.webp',
    imageAlt: 'Andrés contemplando el mar desde un ventanal en Mar del Plata',
    readingTime: '6 min de lectura',
    objectPosition: 'object-[left_center]'
  },
  {
    id: 'carlos',
    slug: '/voces/carlos-hija-adicciones-mar-del-plata',
    category: 'LAS VOCES DEL FARO · CARLOS',
    title: '«Lucía me ayudó tanto.»',
    excerpt: 'Durante años Carlos creyó que era él quien tenía que ayudar a su hija. Con el tiempo descubrió que acompañarla también lo estaba cambiando a él.',
    imageUrl: '/voces/carlos/carlos-01-apertura-mar-del-plata.webp',
    imageAlt: 'Carlos contemplando el mar desde una ventana en Mar del Plata al atardecer',
    readingTime: '7 min de lectura',
    objectPosition: 'object-[right_center]'
  }
];

export default function VoicesCarousel({ postIds, variant = 'light' }: VoicesCarouselProps) {
  const isDark = variant === 'dark';

  // Si postIds está explícitamente definido (páginas heredadas con posts puntuales), busca en blogPosts
  const legacyPosts = postIds
    ? (postIds.map(id => blogPosts.find(p => p.id === id)).filter(Boolean) as typeof blogPosts)
    : null;

  // Si no hay postIds (como en la Home argentina), muestra exclusivamente las 3 Voces argentinas
  const useArgentineVoices = !postIds;

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
              Escuchá a quienes ya transitaron el camino. Testimonios íntimos sobre vínculos, adicciones y reconstrucción.
            </p>
          </div>
          <div className="text-center md:text-right flex-shrink-0">
            <Link
              to="/voces"
              className={`inline-flex items-center gap-2 font-medium transition-colors border-b pb-1 text-sm tracking-wider uppercase font-sans group/btn ${
                isDark ? 'text-sand border-sand/30 hover:text-white' : 'text-olive border-olive/30 hover:text-olive-light'
              }`}
            >
              VER TODAS LAS VOCES
              <ArrowRight size={16} className="transition-transform group-hover/btn:translate-x-1" />
            </Link>
          </div>
        </div>

        {useArgentineVoices ? (
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            variants={staggerContainer}
            className="flex overflow-x-auto snap-x snap-mandatory no-scrollbar pb-6 gap-6 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-8 md:pb-0"
          >
            {ARGENTINA_VOICES.map((story) => (
              <motion.div 
                key={story.id} 
                variants={fadeUp}
                className="flex-shrink-0 w-[85%] sm:w-[60%] md:w-full snap-start"
              >
                <Link
                  to={story.slug}
                  className={`group flex flex-col h-full rounded-3xl overflow-hidden border transition-all duration-300 ${
                    isDark
                      ? 'bg-white/[0.02] border-sand/10 hover:border-sand/20 hover:shadow-md'
                      : 'bg-white border-sand/30 hover:shadow-md'
                  }`}
                >
                  <div className="aspect-[16/10] w-full overflow-hidden bg-sand/10">
                    <img
                      src={story.imageUrl}
                      alt={story.imageAlt}
                      className={`w-full h-full object-cover ${story.objectPosition || 'object-center'} transition-transform duration-500 group-hover:scale-105`}
                      loading="lazy"
                      decoding="async"
                      width={800}
                      height={500}
                    />
                  </div>
                  <div className="p-8 flex flex-col flex-grow space-y-4">
                    <div className="flex items-center justify-between gap-2">
                      <span className={`text-[10px] tracking-[0.2em] uppercase font-bold font-mono ${isDark ? 'text-olive-light' : 'text-olive'}`}>
                        {story.category}
                      </span>
                      {story.readingTime && (
                        <span className={`flex items-center gap-1 text-xs font-sans font-light ${isDark ? 'text-sand/60' : 'text-ink-light/70'}`}>
                          <Clock size={12} className={isDark ? 'text-sand/70' : 'text-olive'} />
                          {story.readingTime}
                        </span>
                      )}
                    </div>
                    <h3 className={`text-xl font-serif font-semibold leading-snug transition-colors line-clamp-2 ${
                      isDark ? 'text-offwhite group-hover:text-gold' : 'text-ink group-hover:text-olive'
                    }`}>
                      {story.title}
                    </h3>
                    <p className={`font-light text-sm leading-relaxed flex-grow line-clamp-3 ${isDark ? 'text-sand/70' : 'text-ink-light'}`}>
                      {story.excerpt}
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
        ) : legacyPosts && legacyPosts.length > 0 ? (
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            variants={staggerContainer}
            className="flex overflow-x-auto snap-x snap-mandatory no-scrollbar pb-6 gap-6 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-8 md:pb-0"
          >
            {legacyPosts.map((post) => (
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
        ) : null}
      </div>
    </section>
  );
}
