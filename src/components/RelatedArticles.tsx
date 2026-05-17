import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { blogPosts } from '../data/blogPosts';
import { fadeUp, staggerContainer, viewportConfig } from '../utils/animations';

interface RelatedArticlesProps {
  currentPostId?: string;
  category?: string | string[];
  limit?: number;
}
export default function RelatedArticles({ currentPostId, category, limit = 3 }: RelatedArticlesProps) {
  const categories = category ? (Array.isArray(category) ? category : [category]) : [];

  const filteredPosts = blogPosts
    .filter(post => post.id !== currentPostId)
    .filter(post => categories.length === 0 || categories.includes(post.category));

  const finalPosts = [...filteredPosts];
  if (finalPosts.length < limit) {
    const additionalPosts = blogPosts
      .filter(post => post.id !== currentPostId && !finalPosts.find(p => p.id === post.id))
      .slice(0, limit - finalPosts.length);
    finalPosts.push(...additionalPosts);
  }

  if (finalPosts.length === 0) return null;
  const visiblePosts = finalPosts.slice(0, limit);

  return (
    <section className="py-24 bg-sand/5 border-t border-sand/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={fadeUp}
          className="text-3xl font-serif text-ink mb-12 text-center md:text-left"
        >
          Lecturas del Faro relacionadas
        </motion.h2>
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {visiblePosts.map((post) => (
            <motion.div key={post.id} variants={fadeUp}>
              <Link 
                to={`/recursos/${post.id}`} 
                className="group flex flex-col h-full bg-white rounded-3xl overflow-hidden border border-sand/30 hover:shadow-md transition-all"
              >
                <div className="aspect-video w-full overflow-hidden">
                  <img 
                    src={post.imageUrl} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <div className="text-olive text-[10px] tracking-[0.2em] uppercase font-bold mb-3">{post.category}</div>
                  <h3 className="text-xl font-serif text-ink mb-4 leading-snug group-hover:text-olive transition-colors">{post.title}</h3>
                  <p className="text-ink-light font-light text-sm leading-relaxed mb-6 flex-grow line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="inline-flex items-center gap-2 text-olive font-medium text-xs uppercase tracking-widest mt-auto">
                    Leer artículo <ArrowRight size={14} />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
