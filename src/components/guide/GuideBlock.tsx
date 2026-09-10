import React from 'react';
import { motion } from 'framer-motion';
import { BarChart3 } from 'lucide-react';
import TambienPuedeAyudarte, { AyudaItem } from './TambienPuedeAyudarte';
import { fadeUp, viewportConfig } from '../../utils/animations';

interface GuideBlockProps {
  num: string;
  title: string;
  paragraphs: string[];
  statChip?: {
    value: string;
    label: string;
  };
  ayudaItems?: AyudaItem[];
  id?: string;
}

export default function GuideBlock({
  num,
  title,
  paragraphs,
  statChip,
  ayudaItems = [],
  id
}: GuideBlockProps) {
  return (
    <motion.div
      id={id}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportConfig}
      className="p-8 md:p-12 rounded-[2rem] bg-white/[0.03] border border-sand/10 hover:border-sand/25 transition-all duration-300 flex flex-col justify-between"
    >
      <div>
        {/* Encabezado con número de situación y stat-chip */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <span className="text-xs font-bold tracking-[0.25em] text-olive font-mono">
            SITUACIÓN {num}
          </span>
          {statChip && (
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.04] text-sand border border-sand/10 text-xs font-mono">
              <BarChart3 size={12} className="text-gold shrink-0" />
              <span className="font-bold text-gold">{statChip.value}</span>
              <span className="opacity-70 text-[9px] font-sans tracking-wide">{statChip.label}</span>
            </div>
          )}
        </div>

        {/* Título en Cormorant Garamond */}
        <h3 className="text-2xl md:text-3xl font-serif text-offwhite mb-6 leading-snug font-semibold">
          {title}
        </h3>

        {/* Párrafos en Inter */}
        <div className="space-y-4 text-sand/80 font-light text-base leading-relaxed">
          {paragraphs.map((para, idx) => (
            <p key={idx}>{para}</p>
          ))}
        </div>
      </div>

      {/* Links adicionales */}
      {ayudaItems.length > 0 && <TambienPuedeAyudarte items={ayudaItems} />}
    </motion.div>
  );
}
