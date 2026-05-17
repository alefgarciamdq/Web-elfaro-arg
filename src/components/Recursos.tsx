import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { blogPosts } from '../data/blogPosts';
import { fadeUp, staggerContainer, viewportConfig } from '../utils/animations';

export default function Recursos() {
  return (
    <div className="bg-offwhite min-h-screen">
      <Helmet>
        <title>Lecturas del Faro · Recursos y artículos | El Faro Argentina</title>
        <meta name="description" content="Reflexiones y recursos sobre salud mental, adicciones y vínculos. Artículos del equipo de El Faro Mar del Plata." />
        <link rel="canonical" href="https://programaelfaro.com.ar/recursos" />
        <meta property="og:title" content="Lecturas del Faro · Recursos | El Faro Argentina" />
      </Helmet>

      {/* Hero */}
      <section className="pt-32 pb-16 lg:pt-48 lg:pb-24 bg-sand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <h1 className="text-5xl md:text-6xl font-serif text-ink mb-6 leading-tight">
              Lecturas del <span className="italic text-olive">Faro</span>
            </h1>
            <p className="text-xl text-ink-light font-light leading-relaxed">
              Reflexiones y recursos sobre salud mental, adicciones y vínculos.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Articles grid */}
      <section className="py-24 bg-offwhite">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {blogPosts.length === 0 ? (
            <div className="text-center py-24">
              <p className="text-ink-light font-light text-xl">Próximamente, nuevos artículos.</p>
            </div>
          ) : (
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {blogPosts.map((post) => (
                <motion.article key={post.id} variants={fadeUp}>
                  <Link
                    to={`/recursos/${post.id}`}
                    className="group block rounded-[2rem] overflow-hidden bg-sand-light border border-sand hover:shadow-lg transition-all"
                  >
                    <div className="aspect-[16/9] overflow-hidden">
                      <img
                        src={post.imageUrl}
                        alt={post.title}
                        className={`w-full h-full object-cover ${post.imagePosition || 'object-center'} group-hover:scale-105 transition-transform duration-700`}
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs font-medium text-olive bg-olive/10 px-3 py-1 rounded-full tracking-wide uppercase">
                          {post.category}
                        </span>
                        <span className="text-xs text-ink-light">{post.date}</span>
                      </div>
                      <h2 className="text-xl font-serif text-ink mb-3 leading-tight group-hover:text-olive transition-colors">
                        {post.title}
                      </h2>
                      <p className="text-ink-light font-light text-sm leading-relaxed line-clamp-3">
                        {post.excerpt}
                      </p>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
}
