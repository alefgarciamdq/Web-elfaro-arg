import React from 'react';
import { motion } from 'framer-motion';

export interface ComparisonItem {
  label: string;
  value: number;
  displayValue: string;
  maxWidth: number;
  highlight?: boolean;
}

interface CountryComparisonProps {
  badge?: string;
  title: string;
  description: string;
  items: ComparisonItem[];
  source: string;
  variant?: 'light' | 'dark';
}

export default function CountryComparison({
  badge,
  title,
  description,
  items,
  source,
  variant = 'light',
}: CountryComparisonProps) {
  const isDark = variant === 'dark';

  return (
    <div className={`p-8 md:p-10 rounded-3xl border transition-colors duration-300 ${
      isDark
        ? 'bg-white/[0.01] border-sand/10 text-offwhite'
        : 'bg-offwhite border-sand text-ink'
    }`}>
      {badge && (
        <span className={`text-[10px] uppercase font-bold tracking-[0.2em] font-mono block mb-3 text-center ${
          isDark ? 'text-olive-light' : 'text-olive'
        }`}>
          {badge}
        </span>
      )}

      <h3 className="text-xl md:text-2xl font-serif mb-4 text-center font-medium max-w-2xl mx-auto">
        {title}
      </h3>

      <p className={`text-sm font-light text-center leading-relaxed max-w-md mx-auto mb-10 ${
        isDark ? 'text-sand/70' : 'text-ink-light/80'
      }`}>
        {description}
      </p>

      <div className="space-y-5 max-w-xl mx-auto">
        {items.map((item, index) => {
          const isHighlight = !!item.highlight;

          return (
            <div key={index} className="flex items-center gap-3 md:gap-4">
              <span className={`w-20 sm:w-24 md:w-28 shrink-0 text-right text-xs md:text-sm font-medium truncate ${
                isHighlight
                  ? 'text-gold font-semibold'
                  : isDark ? 'text-sand/70' : 'text-ink-light/75'
              }`}>
                {item.label}
              </span>

              <div className={`flex-1 h-3 md:h-3.5 rounded-full overflow-hidden ${
                isDark ? 'bg-white/[0.06]' : 'bg-sand/40'
              }`}>
                <motion.div
                  className={`h-full rounded-full ${isHighlight ? 'bg-terra' : isDark ? 'bg-olive-light/60' : 'bg-olive/50'}`}
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.0, ease: 'easeOut', delay: index * 0.15 }}
                  style={{ width: `${item.maxWidth}%`, transformOrigin: 'left' }}
                />
              </div>

              <span className={`w-14 shrink-0 text-left text-xs md:text-sm font-mono font-semibold ${
                isHighlight ? 'text-gold' : isDark ? 'text-sand/80' : 'text-ink-light/80'
              }`}>
                {item.displayValue}
              </span>
            </div>
          );
        })}
      </div>

      <div className={`text-[10.5px] italic mt-10 text-center border-t pt-4 ${
        isDark ? 'text-sand/40 border-sand/5' : 'text-ink-light/50 border-sand/20'
      }`}>
        Fuente oficial: {source}
      </div>
    </div>
  );
}
