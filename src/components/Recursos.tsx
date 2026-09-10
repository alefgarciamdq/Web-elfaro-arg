import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, User, PhoneCall } from 'lucide-react';
import { Head } from 'vite-react-ssg';
import { motion } from 'framer-motion';
import { blogPostsMeta as blogPosts } from '../data/blogPostsMeta';
import JsonLd from './JsonLd';
import { getBlogPostUrl } from '../utils/urls';
import { getCardImageUrl, getCardSrcSet } from '../utils/cloudinary';

export default function Recursos() {

  return (
    <div className="bg-offwhite min-h-screen">
      <Head>
        <title>Recursos y Blog de Psicología en Valencia | Mi Faro</title>
        <meta name="description" content="Artículos y recursos sobre psicología, adicciones, relaciones de pareja y salud mental en Valencia. Reflexiones y guía profesional de Mi Faro." />
        <meta property="og:title" content="Recursos y Blog de Psicología en Valencia | Mi Faro" />
        <meta property="og:description" content="Artículos y recursos sobre psicología, adicciones, relaciones de pareja y salud mental en Valencia. Reflexiones y guía profesional de Mi Faro." />
        <meta property="og:image" content="https://res.cloudinary.com/dwv5ehc6e/image/upload/f_auto,q_auto/v1779830146/mifaro/CB4EA85B-5039-4954-A3CB-B9E85D8DD4D3_kXCfckpZ.png" />
        <meta property="og:url" content="https://mifaro.es/recursos" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Recursos y Blog de Psicología en Valencia | Mi Faro" />
        <meta name="twitter:description" content="Artículos y recursos sobre psicología, adicciones, relaciones de pareja y salud mental en Valencia." />
        <meta name="twitter:image" content="https://res.cloudinary.com/dwv5ehc6e/image/upload/f_auto,q_auto/v1779830146/mifaro/CB4EA85B-5039-4954-A3CB-B9E85D8DD4D3_kXCfckpZ.png" />
        <link rel="canonical" href="https://mifaro.es/recursos" />
      </Head>
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
            "item": "https://mifaro.es/recursos"
          }
        ]
      }} />
      {/* Hero */}
      <section className="relative min-h-[48vh] flex items-center justify-center overflow-hidden pt-28 pb-12">
        <div className="absolute inset-0 z-0">
          <img
            src="https://res.cloudinary.com/dwv5ehc6e/image/upload/f_auto,q_auto/v1779830146/mifaro/CB4EA85B-5039-4954-A3CB-B9E85D8DD4D3_kXCfckpZ.png"
            alt="Mar adentro - Blog de psicología y recursos - Mi Faro"
            className="w-full h-full object-cover object-[20%_60%] opacity-70 blur-[1px]"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-sand-light/30 via-sand-light/60 to-offwhite" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-ink mb-4 leading-tight">
            Mar <span className="italic text-olive">adentro </span>
          </h1>
          <p className="text-xl text-ink-light font-light leading-relaxed max-w-2xl mx-auto mb-4">
            Textos y reflexiones sobre psicología en Valencia, salud mental, adicciones, terapia de pareja y orientación familiar. 
          </p>
          <p className="text-sm text-ink-light/80 font-light leading-relaxed max-w-2xl mx-auto mb-8">
            Un espacio editorial de Mi Faro donde exploramos los procesos de cambio, los vínculos y el malestar emocional desde una mirada profesional y cercana. Información y recursos útiles para quien busca entender lo que le pasa.
          </p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <a 
              href="tel:+34611568705" 
              className="inline-flex items-center gap-3 text-ink hover:text-olive transition-colors group"
            >
              <PhoneCall size={20} className="text-olive group-hover:scale-110 transition-transform" />
              <span className="text-lg md:text-xl font-medium tracking-wider">+34 611 56 87 05</span>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="pt-12 pb-24 bg-offwhite">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-serif text-ink">Últimos Artículos</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...blogPosts]
              .filter(post => post.category !== 'Las Voces del Faro')
              .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt))
              .map((post) => (
              <article key={post.id} className="flex flex-col bg-offwhite rounded-[2rem] overflow-hidden border border-sand hover:shadow-lg transition-all duration-300 group">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={getCardImageUrl(post, 480)} 
                    srcSet={getCardSrcSet(post)}
                    sizes="(min-width: 1280px) 380px, (min-width: 768px) 50vw, 100vw"
                    alt={post.title}
                    className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 ${post.image?.position || post.imagePosition || 'object-center'}`}
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute top-4 left-4 bg-offwhite/90 backdrop-blur-sm px-4 py-1.5 rounded-full text-xs font-medium tracking-wide uppercase text-olive">
                    {post.category}
                  </div>
                </div>
                
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex items-center gap-4 text-xs text-ink-light mb-4 font-light">
                    <span className="flex items-center gap-1.5">
                      <Calendar size={14} />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <User size={14} />
                      {post.author}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-serif text-ink mb-4 group-hover:text-olive transition-colors leading-snug">
                    <Link to={getBlogPostUrl(post)}>
                      {post.title}
                    </Link>
                  </h3>
                  
                  <p className="text-ink-light font-light leading-relaxed text-sm mb-8 flex-grow">
                    {post.excerpt}
                  </p>
                  
                  <Link 
                    to={getBlogPostUrl(post)}
                    className="inline-flex items-center gap-2 text-olive font-medium hover:text-olive-light transition-colors mt-auto group/btn"
                  >
                    Leer: {post.title}
                    <ArrowRight size={16} className="transition-transform group-hover/btn:translate-x-1" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
