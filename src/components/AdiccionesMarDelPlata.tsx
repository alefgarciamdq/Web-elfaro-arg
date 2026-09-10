import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { Head } from 'vite-react-ssg';
import JsonLd from './JsonLd';
import { trackWhatsAppClick } from '../utils/telemetry';

export default function AdiccionesMarDelPlata() {
  return (
    <div className="bg-offwhite min-h-screen flex flex-col justify-center py-20 px-4 sm:px-6 lg:px-8">
      <Head>
        <title>Adicciones y Acompañamiento en Mar del Plata · El Faro Argentina</title>
        <meta name="description" content="Orientación y acompañamiento humanista no-residencial ante consumos problemáticos y adicciones en Mar del Plata. El Faro Argentina." />
        <link rel="canonical" href="https://programaelfaro.com.ar/adicciones-mar-del-plata" />
        <meta property="og:title" content="Adicciones y Acompañamiento en Mar del Plata · El Faro Argentina" />
        <meta property="og:description" content="Orientación y acompañamiento humanista no-residencial ante consumos problemáticos y adicciones en Mar del Plata." />
        <meta property="og:url" content="https://programaelfaro.com.ar/adicciones-mar-del-plata" />
        <meta property="og:type" content="website" />
      </Head>

      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Adicciones y Acompañamiento en Mar del Plata",
        "url": "https://programaelfaro.com.ar/adicciones-mar-del-plata",
        "description": "Orientación y acompañamiento humanista no-residencial ante consumos problemáticos y adicciones en Mar del Plata."
      }} />

      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-sand-light/30 border border-sand p-10 sm:p-14 rounded-[2.5rem] shadow-sm"
        >
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 text-olive shadow-sm">
            <MessageCircle size={32} />
          </div>
          <span className="text-xs uppercase tracking-widest text-olive font-semibold block mb-3">
            El Faro Argentina · Mar del Plata
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif text-ink mb-6">
            Adicciones y Consumos Problemáticos
          </h1>
          <p className="text-lg text-ink-light font-light leading-relaxed mb-8 max-w-xl mx-auto">
            Estamos preparando esta página. Mientras tanto, escribinos por WhatsApp y te orientamos.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="https://wa.me/5492235607009"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsAppClick('placeholder_adicciones', 'https://wa.me/5492235607009')}
              className="inline-flex items-center justify-center gap-3 bg-ink text-white px-8 py-4 rounded-full text-sm font-semibold tracking-widest uppercase hover:bg-ink-light transition-all shadow-md"
            >
              Escribinos por WhatsApp (+54 9 2235 60-7009)
              <ArrowRight size={18} />
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
