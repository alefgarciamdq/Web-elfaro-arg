import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { blogPostsMeta as blogPosts } from '../data/blogPostsMeta';
import { fadeUp, staggerContainer, viewportConfig } from '../utils/animations';
import { getBlogPostUrl } from '../utils/urls';
import { getCardImageUrl, getCardSrcSet } from '../utils/cloudinary';

interface RelatedArticlesProps {
  currentPostId?: string;
  category?: string | string[];
  limit?: number;
  title?: string;
  subtitle?: string;
  showMoreLink?: boolean;
  postIds?: string[];
  variant?: 'light' | 'dark';
  featureLast?: boolean;
}

export default function RelatedArticles({ 
  currentPostId, 
  category, 
  limit = 3,
  title = "Lecturas del Faro relacionadas",
  subtitle,
  showMoreLink = false,
  postIds,
  variant = 'light',
  featureLast = false
}: RelatedArticlesProps) {
  let visiblePosts: typeof blogPosts = [];

  if (postIds && postIds.length > 0) {
    visiblePosts = postIds
      .map(id => blogPosts.find(post => post.id === id))
      .filter((post): post is typeof blogPosts[number] => !!post);
  } else {
    const categories = category ? (Array.isArray(category) ? category : [category]) : [];
    const isViewingVoces = categories.includes('Las Voces del Faro');

    const filteredPosts = [...blogPosts]
      .filter(post => post.id !== currentPostId)
      .filter(post => isViewingVoces ? post.category === 'Las Voces del Faro' : post.category !== 'Las Voces del Faro')
      .filter(post => categories.length === 0 || categories.includes(post.category))
      .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));

    const finalPosts = filteredPosts.slice(0, limit);

    if (finalPosts.length < limit) {
      const additionalPosts = [...blogPosts]
        .filter(post => post.id !== currentPostId && !finalPosts.some(p => p.id === post.id))
        .filter(post => isViewingVoces ? post.category === 'Las Voces del Faro' : post.category !== 'Las Voces del Faro')
        .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt))
        .slice(0, limit - finalPosts.length);

      finalPosts.push(...additionalPosts);
    }

    visiblePosts = finalPosts;
  }

  if (visiblePosts.length === 0) return null;

  const isDark = variant === 'dark';
  const standardPosts = featureLast && visiblePosts.length > 1 ? visiblePosts.slice(0, -1) : visiblePosts;
  const featuredPost = featureLast && visiblePosts.length > 1 ? visiblePosts[visiblePosts.length - 1] : null;

  return (
    <section className={`border-t py-20 ${isDark ? 'border-sand/10 bg-[#24231f] text-offwhite' : 'border-sand/20 bg-sand/10'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center md:text-left mb-12 space-y-3">
          <motion.h2 
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            variants={fadeUp}
            className={`font-serif text-3xl md:text-4xl ${isDark ? 'text-offwhite' : 'text-ink'}`}
          >
            {title}
          </motion.h2>
          {subtitle && (
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              variants={fadeUp}
              className={`max-w-2xl text-sm font-light ${isDark ? 'text-sand/75' : 'text-ink-light'}`}
            >
              {subtitle}
            </motion.p>
          )}
        </div>
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {standardPosts.map((post) => (
            <motion.div key={post.id} variants={fadeUp}>
              <Link 
                to={getBlogPostUrl(post)} 
                className={`group flex h-full flex-col overflow-hidden rounded-[2rem] border transition-all hover:-translate-y-1 ${isDark ? 'border-sand/10 bg-white/[.035] hover:border-olive-light/35 hover:bg-white/[.055]' : 'border-sand/30 bg-white hover:shadow-md'}`}
              >
                <div className="aspect-video w-full overflow-hidden">
                  <img 
                    src={getCardImageUrl(post, 480)} 
                    srcSet={getCardSrcSet(post)}
                    sizes="(min-width: 1280px) 380px, (min-width: 768px) 50vw, 100vw"
                    alt={post.imageAlt || post.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    decoding="async"
                    width={800}
                    height={450}
                  />
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <div className={`mb-3 text-[10px] font-bold uppercase tracking-[0.2em] ${isDark ? 'text-gold' : 'text-olive'}`}>{post.category}</div>
                  <h3 className={`mb-4 font-serif text-xl leading-snug transition-colors group-hover:text-olive-light ${isDark ? 'text-offwhite' : 'text-ink'}`}>{post.title}</h3>
                  <p className={`mb-6 line-clamp-3 flex-grow text-sm font-light leading-relaxed ${isDark ? 'text-sand/75' : 'text-ink-light'}`}>
                    {post.excerpt}
                  </p>
                  <div className={`mt-auto inline-flex items-center gap-2 text-xs font-medium uppercase tracking-widest ${isDark ? 'text-olive-light' : 'text-olive'}`}>
                    Leer artículo <ArrowRight size={14} />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {featuredPost && (
          <motion.div initial="hidden" whileInView="visible" viewport={viewportConfig} variants={fadeUp} className="mt-8">
            <Link to={getBlogPostUrl(featuredPost)} className={`group block overflow-hidden rounded-[2.5rem] border transition ${isDark ? 'border-sand/10 bg-white/[.035] hover:border-olive-light/35' : 'border-sand/30 bg-white hover:shadow-md'}`}>
              <div className="aspect-video w-full overflow-hidden">
                <img src={getCardImageUrl(featuredPost, 1200)} srcSet={getCardSrcSet(featuredPost)} sizes="(min-width: 1280px) 1200px, 100vw" alt={featuredPost.imageAlt || featuredPost.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]" referrerPolicy="no-referrer" loading="lazy" decoding="async" width={1280} height={720} />
              </div>
              <div className="grid gap-5 border-t border-sand/10 p-8 sm:p-10 lg:grid-cols-[.7fr_1.3fr] lg:items-end">
                <div><div className={`text-[10px] font-bold uppercase tracking-[.2em] ${isDark ? 'text-gold' : 'text-olive'}`}>{featuredPost.category}</div><h3 className={`mt-3 font-serif text-3xl leading-tight ${isDark ? 'text-offwhite' : 'text-ink'}`}>{featuredPost.title}</h3></div>
                <div><p className={`line-clamp-3 text-sm font-light leading-relaxed ${isDark ? 'text-sand/75' : 'text-ink-light'}`}>{featuredPost.excerpt}</p><span className={`mt-5 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-widest ${isDark ? 'text-olive-light' : 'text-olive'}`}>Leer artículo <ArrowRight size={14} /></span></div>
              </div>
            </Link>
          </motion.div>
        )}

        {showMoreLink && (
          <div className={`mt-12 text-center ${isDark ? 'text-offwhite' : 'text-ink'}`}>
            <Link 
              to={category === 'Las Voces del Faro' || (Array.isArray(category) && category.includes('Las Voces del Faro')) ? "/recursos/voces" : "/recursos"} 
              className="inline-flex items-center gap-2 text-ink font-medium hover:text-olive transition-colors border-b border-olive/30 pb-1 text-ink"
            >
              Ver todas las {category === 'Las Voces del Faro' || (Array.isArray(category) && category.includes('Las Voces del Faro')) ? "Voces del Faro" : "Lecturas del Faro"} <ArrowRight size={16} />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
