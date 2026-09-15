import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import { Head } from 'vite-react-ssg';
import JsonLd from './JsonLd';
import { fadeUp, viewportConfig } from '../utils/animations';
import { trackWhatsAppClick } from '../utils/telemetry';

export default function Asociacion() {
  return (
    <div className="bg-faro-bg text-faro-ink min-h-screen">
      <Head>
        <title>Historia y Origen Asociativo · El Faro Argentina (Mar del Plata)</title>
        <meta name="description" content="El origen comunitario de El Faro en Mar del Plata. Desde 1993, un modelo no-residencial centrado en la comunidad, la persona y el vínculo." />
        <link rel="canonical" href="https://programaelfaro.com.ar/asociacion" />
        <meta property="og:title" content="Historia y Origen Asociativo · El Faro Argentina (Mar del Plata)" />
        <meta property="og:description" content="El origen comunitario de El Faro en Mar del Plata. Desde 1993, un modelo no-residencial centrado en la comunidad, la persona y el vínculo." />
        <meta property="og:url" content="https://programaelfaro.com.ar/asociacion" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Historia y Origen Asociativo · El Faro Argentina" />
        <meta name="twitter:description" content="Un modelo comunitario no-residencial nacido en Mar del Plata para acompañar consumos y malestar emocional desde el vínculo." />
      </Head>

      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Programa El Faro - Mar del Plata",
        "description": "Modelo comunitario no-residencial de acompañamiento emocional y consumos problemáticos en Mar del Plata.",
        "url": "https://programaelfaro.com.ar/asociacion",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Garay 2073",
          "addressLocality": "Mar del Plata",
          "addressRegion": "Buenos Aires",
          "addressCountry": "AR"
        }
      }} />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-44 lg:pb-28 overflow-hidden border-b border-faro-olive/30 bg-faro-bg-alt/40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 text-faro-gold uppercase tracking-widest text-xs font-semibold mb-4">
              <ShieldCheck size={16} />
              Dimensión comunitaria e institucional
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-faro-ink leading-[1.15] mb-8">
              Una historia que empieza antes de El Faro
            </h1>
            <p className="text-lg md:text-xl text-faro-ink/80 font-light leading-relaxed mb-8 max-w-2xl mx-auto">
              El recorrido comunitario y vincular en Mar del Plata como alternativa al encierro y a los modelos punitivos.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contenido Real */}
      <section className="py-20 bg-faro-bg border-b border-faro-olive/20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="space-y-8 text-faro-ink/80 font-light leading-relaxed text-base sm:text-lg"
          >
            <p>
              Antes de que El Faro abriera sus puertas en 1993, el camino ya venía transitado en el trabajo comunitario y parroquial en Mar del Plata — en espacios de Pastoral de Drogadependencia, donde el abordaje del consumo problemático se pensaba y se sentía desde la comunidad y el vínculo, no desde el encierro ni los aspectos más punitivos de esa época.
            </p>

            <p>
              Esa experiencia dio forma al primer cuestionamiento de Ale García a los modelos existentes de esos años — médico-asistenciales, granjas educativas, internación como única respuesta. Desde la escalera de la parroquia del Hospital Materno Infantil de nuestra ciudad, empezó a tomar forma un modelo comunitario no-residencial, en un momento en que todo el campo del tratamiento exigía internación.
            </p>

            <p className="font-serif italic text-xl sm:text-2xl text-faro-ink border-l-2 border-faro-gold pl-6 py-2 my-8">
              La apuesta fue clara desde el principio: en la mayoría de los casos no hace falta aislar a la persona de su vida, su familia y su comunidad para poder sostenerse.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contacto / Orientación */}
      <section className="py-20 bg-faro-bg-alt/40 border-t border-faro-olive/30">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl sm:text-3xl font-serif text-faro-ink mb-6">
            ¿Querés conocer más sobre nuestra propuesta en Mar del Plata?
          </h3>
          <p className="text-faro-ink/80 font-light mb-8">
            Estamos a tu disposición para escucharte, orientarte y coordinar un primer encuentro.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/contacto"
              className="inline-flex items-center justify-center gap-3 bg-faro-gold text-faro-bg px-8 py-4 rounded-full text-sm font-semibold tracking-widest uppercase hover:bg-faro-gold/90 transition-all shadow-md"
            >
              Contactar
              <ArrowRight size={18} />
            </Link>
            <a
              href="https://wa.me/5492235923790"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsAppClick('asociacion_whatsapp', 'https://wa.me/5492235923790')}
              className="inline-flex items-center justify-center gap-3 bg-faro-bg-alt text-faro-ink border border-faro-olive/40 px-8 py-4 rounded-full text-sm font-semibold tracking-widest uppercase hover:bg-faro-olive/30 transition-all font-sans shadow-sm"
            >
              Escribinos por WhatsApp (+54 9 223 592 3790)
            </a>
          </div>
        </div>
      </section>

      {/* TODO: falta contenido sobre la estructura legal/asociativa actual — fundación vs asociación civil, quiénes la integran hoy además de Ale y Silvana. Pendiente de que Ale confirme el dato antes de publicar esta sección. */}
    </div>
  );
}
