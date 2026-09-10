import React from 'react';
import { motion } from 'framer-motion';
import { fadeUp, viewportConfig } from '../../utils/animations';

interface ManifestoProps {
  smallText: string;
  mainText: string;
}

export default function Manifesto({ smallText, mainText }: ManifestoProps) {
  return (
    <section className="py-24 bg-ink text-center border-y border-sand/10 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="space-y-6"
        >
          {/* Negación chica arriba */}
          <span className="text-xs md:text-sm uppercase font-bold tracking-[0.25em] text-sand/80 font-mono block">
            {smallText}
          </span>
          
          {/* Línea de separación sutil */}
          <div className="w-12 h-px bg-gold/30 mx-auto" />
          
          {/* Frase central en itálica grande abajo */}
          <p className="text-2xl md:text-4xl lg:text-5xl font-serif italic text-offwhite leading-relaxed max-w-3xl mx-auto font-light">
            “{mainText}”
          </p>
        </motion.div>
      </div>
      {/* Sutil brillo radial de fondo */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(90,90,64,0.03)_0%,transparent_75%)] pointer-events-none" />
    </section>
  );
}
