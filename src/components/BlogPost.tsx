import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, User, Tag } from 'lucide-react';
import { blogPosts } from '../data/blogPosts';
import ReactMarkdown from 'react-markdown';
import { Helmet } from 'react-helmet-async';
import JsonLd from './JsonLd';
import { motion } from 'framer-motion';
import { fadeUp, viewportConfig } from '../utils/animations';

export default function BlogPost() {
  const { id } = useParams<{ id: string }>();
  const post = blogPosts.find(p => p.id === id);

  if (!post) {
    return (
      <div className="min-h-screen bg-offwhite flex flex-col items-center justify-center px-4">
        <h1 className="text-4xl font-serif text-ink mb-4">Artículo no encontrado</h1>
        <p className="text-ink-light mb-8">Lo sentimos, el artículo que buscas no existe o ha sido movido.</p>
        <Link 
          to="/recursos"
          className="bg-olive text-white px-8 py-3 rounded-full text-sm font-medium tracking-wide uppercase hover:bg-olive-light transition-colors"
        >
          Volver a Recursos
        </Link>
      </div>
    );
  }

  return (
    <article className="bg-offwhite min-h-screen pb-24 pt-24 md:pt-32">
      <Helmet>
        <title>{post.metaTitle || `${post.title} | Mi Faro`}</title>
        <meta name="description" content={post.metaDescription || post.excerpt} />
        <meta property="og:title" content={post.metaTitle || `${post.title} | Mi Faro`} />
        <meta property="og:description" content={post.metaDescription || post.excerpt} />
        <meta property="og:image" content={post.imageUrl} />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.metaTitle || `${post.title} | Mi Faro`} />
        <meta name="twitter:description" content={post.metaDescription || post.excerpt} />
        <meta name="twitter:image" content={post.imageUrl} />
        <link rel="canonical" href={"https://programaelfaro.com.ar/recursos/" + post.id} />
      </Helmet>
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Inicio",
            "item": "https://mifaro.es"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Recursos",
            "item": "https://programaelfaro.com.ar/recursos"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": post.title,
            "item": `https://programaelfaro.com.ar/recursos/${post.id}`
          }
        ]
      }} />
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": post.title,
        "description": post.excerpt,
        "image": post.imageUrl,
        "author": {
          "@type": "Organization",
          "name": "Equipo Mi Faro"
        },
        "publisher": {
          "@type": "Organization",
          "name": "Mi Faro",
          "logo": {
            "@type": "ImageObject",
            "url": "https://i.postimg.cc/wvHsGngJ/Mi_faro.png"
          }
        },
        "datePublished": (() => {
          const months: { [key: string]: string } = {
            'Enero': '01', 'Febrero': '02', 'Marzo': '03', 'Abril': '04',
            'Mayo': '05', 'Junio': '06', 'Julio': '07', 'Agosto': '08',
            'Septiembre': '09', 'Octubre': '10', 'Noviembre': '11', 'Diciembre': '12'
          };
          try {
            // Expected format: "23 de Abril, 2026"
            const parts = post.date.replace(' de ', ' ').replace(',', '').split(' ');
            if (parts.length === 3) {
              const day = parts[0].padStart(2, '0');
              const month = months[parts[1]] || '01';
              const year = parts[2];
              return `${year}-${month}-${day}`;
            }
          } catch (e) {
            console.error('Error parsing date:', e);
          }
          return "2026-04-10"; // Fallback
        })(),
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": `https://programaelfaro.com.ar/recursos/${post.id}`
        }
      }} />
      {/* Content Container */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="mb-12"
        >
          <Link 
            to="/recursos"
            className="inline-flex items-center gap-2 text-olive font-medium hover:text-olive-light transition-colors mb-8 group"
          >
            <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
            Volver a todos los artículos
          </Link>

          <div className="flex flex-wrap items-center gap-4 text-sm text-ink-light mb-6 font-light">
            <span className="flex items-center gap-1.5 text-olive font-medium">
              <Tag size={14} />
              {post.category}
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar size={14} />
              {post.date}
            </span>
            <span className="flex items-center gap-1.5">
              <User size={14} />
              {post.author}
            </span>
          </div>

          <h1 className={`font-serif text-ink mb-6 tracking-tight ${
            post.title.length > 60 
              ? "text-3xl md:text-4xl lg:text-[2.75rem] leading-[1.2]" 
              : "text-4xl md:text-5xl lg:text-[3.25rem] leading-[1.15]"
          }`}>
            {post.title}
          </h1>

          <p className="text-lg md:text-xl text-ink-light font-light leading-relaxed">
            {post.excerpt}
          </p>
        </motion.div>
      </div>

      {/* Hero Image */}
      <motion.div 
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
        className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mb-16"
      >
        <div className="aspect-[16/9] md:aspect-[21/9] rounded-2xl overflow-hidden shadow-sm">
          <img 
            src={post.imageUrl} 
            alt={post.title}
            className={`w-full h-full object-cover ${post.imagePosition || 'object-center'}`}
            referrerPolicy="no-referrer"
          />
        </div>
      </motion.div>

      {/* Markdown Content */}
      <motion.div 
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
        className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="markdown-body">
          <ReactMarkdown
            components={{
              h2: ({node, ...props}) => <h2 className="text-2xl md:text-3xl font-serif text-ink mt-12 mb-6" {...props} />,
              h3: ({node, ...props}) => <h3 className="text-xl md:text-2xl font-serif text-ink mt-10 mb-4" {...props} />,
              p: ({node, ...props}) => <p className="mb-6 text-lg text-ink-light font-light leading-relaxed" {...props} />,
              ul: ({node, ...props}) => <ul className="list-disc marker:text-olive/50 pl-6 mb-8 space-y-3 text-lg text-ink-light font-light" {...props} />,
              ol: ({node, ...props}) => <ol className="list-decimal marker:text-olive/50 pl-6 mb-8 space-y-3 text-lg text-ink-light font-light" {...props} />,
              li: ({node, ...props}) => <li className="pl-2" {...props} />,
              strong: ({node, ...props}) => <strong className="font-medium text-ink" {...props} />,
              blockquote: ({node, ...props}) => (
                <blockquote className="border-l-2 border-olive/30 pl-6 md:pl-8 my-10 py-2 italic text-lg md:text-xl text-ink font-serif leading-relaxed bg-gradient-to-r from-sand-light/30 to-transparent" {...props} />
              ),
              hr: ({node, ...props}) => <hr className="my-12 border-t border-sand" {...props} />,
              a: ({node, ...props}) => {
                const text = props.children?.toString() || '';
                const isCTA = text.includes('Contactar') || text.includes('Solicitar');
                
                if (isCTA) {
                  return (
                    <div className="mt-16 mb-16 text-center">
                      <Link 
                        to={props.href || '#'} 
                        className="inline-flex items-center justify-center bg-olive text-offwhite px-10 py-4 rounded-full text-sm font-medium tracking-wide uppercase hover:bg-olive-light transition-colors"
                      >
                        {props.children}
                      </Link>
                    </div>
                  );
                }
                
                return (
                  <Link 
                    to={props.href || '#'} 
                    className="text-olive hover:text-olive-light underline decoration-olive/30 underline-offset-4 transition-colors font-normal"
                  >
                    {props.children}
                  </Link>
                );
              },
            }}
          >
            {post.content}
          </ReactMarkdown>
        </div>
      </motion.div>

      {/* Share / Footer */}
      <motion.div 
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
        className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mb-24"
      >
        <div className="mt-16 flex items-center justify-between border-t border-sand pt-8">
          <p className="text-sm text-ink-light font-light">
            ¿Te resultó útil este artículo? Compártelo con quien pueda necesitarlo.
          </p>
          <button 
            onClick={() => navigator.clipboard.writeText(window.location.href)}
            className="text-olive hover:text-olive-light font-medium text-sm transition-colors"
          >
            Copiar enlace
          </button>
        </div>
      </motion.div>
    </article>
  );
}
