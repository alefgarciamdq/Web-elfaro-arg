import React from 'react';
import { motion } from 'framer-motion';

interface PotencyCompareProps {
  title: string;
  description: string;
  thenLabel: string;
  nowValue: string;
  nowLabel: string;
  source: string;
  variant?: 'light' | 'dark';
}

export default function PotencyCompare({
  title,
  description,
  thenLabel,
  nowValue,
  nowLabel,
  source,
  variant = 'light',
}: PotencyCompareProps) {
  const isDark = variant === 'dark';

  return (
    <div className={`p-8 md:p-10 rounded-3xl border transition-colors duration-300 flex flex-col justify-between ${
      isDark
        ? 'bg-white/[0.01] border-sand/10 text-offwhite'
        : 'bg-offwhite border-sand text-ink'
    }`}>
      <div>
        <h3 className="text-xl md:text-2xl font-serif mb-6 text-center font-medium">
          {title}
        </h3>
        
        <p className={`text-sm font-light text-center leading-relaxed max-w-md mx-auto mb-12 ${
          isDark ? 'text-sand/70' : 'text-ink-light/80'
        }`}>
          {description}
        </p>

        {/* Circles Comparison */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-12 sm:gap-20 my-8">
          {/* Then Circle */}
          <div className="flex flex-col items-center text-center max-w-[160px]">
            <motion.div
              className={`w-20 h-20 rounded-full flex items-center justify-center border ${
                isDark ? 'bg-olive/10 border-olive/30' : 'bg-olive/5 border-olive/20'
              }`}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              style={{ transformOrigin: 'center' }}
            >
              <div className={`w-3.5 h-3.5 rounded-full ${isDark ? 'bg-olive-light/40' : 'bg-olive/30'}`} />
            </motion.div>
            <span className={`text-xs mt-4 leading-relaxed font-mono ${
              isDark ? 'text-sand/65' : 'text-ink-light/60'
            }`}>
              {thenLabel}
            </span>
          </div>

          {/* Now Circle */}
          <div className="flex flex-col items-center text-center max-w-[180px]">
            <motion.div
              className="w-36 h-36 rounded-full flex flex-col items-center justify-center bg-terra text-white shadow-[0_0_30px_rgba(192,108,85,0.5)] border border-terra/30"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
              style={{ transformOrigin: 'center' }}
            >
              <span className="text-3xl font-serif font-bold">
                {nowValue}
              </span>
              <span className="text-[9px] uppercase tracking-widest text-white/80 mt-1">
                Concentración
              </span>
            </motion.div>
            <span className={`text-xs mt-4 leading-relaxed font-mono font-semibold ${
              isDark ? 'text-gold' : 'text-olive'
            }`}>
              {nowLabel}
            </span>
          </div>
        </div>
      </div>

      <div className={`text-[10.5px] italic mt-12 text-center border-t pt-4 ${
        isDark ? 'text-sand/40 border-sand/5' : 'text-ink-light/50 border-sand/20'
      }`}>
        Fuente oficial: {source}
      </div>
    </div>
  );
}
