import React from 'react';
import { motion } from 'framer-motion';
import { Situacion } from '../types';
import { fadeUp, viewportConfig } from '../utils/animations';

interface SituacionesFrecuentesProps {
  situaciones: Situacion[];
  title?: string;
}
export default function SituacionesFrecuentes({ 
  situaciones, 
  title = "Cuándo puede tener sentido pedir ayuda" 
}: SituacionesFrecuentesProps) {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="bg-sand/10 border border-sand/30 rounded-[2.5rem] p-8 md:p-14"
        >
          <h2 className="text-3xl font-serif text-ink mb-12 text-center md:text-left">{title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
            {situaciones.map((situacion, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="mt-2 w-1.5 h-1.5 rounded-full bg-olive shrink-0" />
                <div>
                  <h3 className="text-lg font-serif text-ink mb-2">{situacion.title}</h3>
                  <p className="text-ink-light font-light text-sm leading-relaxed">
                    {situacion.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
