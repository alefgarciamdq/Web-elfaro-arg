import React from 'react';
import { motion } from 'framer-motion';

interface BarItem {
  year: string;
  value: string;
  heightPct: number;
  isFinal?: boolean;
}

interface TrendBarsProps {
  title: string;
  badge?: string;
  bars: BarItem[];
  note?: string;
  source: string;
  variant?: 'light' | 'dark';
}

export default function TrendBars({
  title,
  badge,
  bars,
  note,
  source,
  variant = 'light',
}: TrendBarsProps) {
  const isDark = variant === 'dark';

  return (
    <div className={`p-8 md:p-10 rounded-3xl border transition-colors duration-300 flex flex-col justify-between ${
      isDark
        ? 'bg-white/[0.01] border-sand/10 text-offwhite'
        : 'bg-offwhite border-sand text-ink'
    }`}>
      <div>
        {badge && (
          <span className={`text-[10px] uppercase font-bold tracking-[0.2em] font-mono block mb-3 text-center ${
            isDark ? 'text-olive-light' : 'text-olive'
          }`}>
            {badge}
          </span>
        )}
        
        <h3 className="text-xl md:text-2xl font-serif mb-12 text-center font-medium">
          {title}
        </h3>

        {/* Chart container */}
        <div className={`flex items-end justify-center gap-6 md:gap-10 h-48 md:h-64 max-w-sm mx-auto px-4 pb-4 border-b ${
          isDark ? 'border-sand/10' : 'border-sand/30'
        }`}>
          {bars.map((bar, index) => {
            const barColor = bar.isFinal
              ? 'bg-gold'
              : isDark ? 'bg-olive-light/70 hover:bg-olive-light/90' : 'bg-olive/75 hover:bg-olive/90';

            return (
              <div key={index} className="flex flex-col items-center flex-1 h-full justify-end">
                {/* Value label */}
                <span className={`text-sm font-semibold mb-2 font-mono ${
                  bar.isFinal ? 'text-gold' : isDark ? 'text-sand/80' : 'text-ink-light/80'
                }`}>
                  {bar.value}
                </span>
                
                {/* Bar element */}
                <motion.div
                  className={`w-full max-w-[48px] rounded-t-xl transition-colors duration-300 ${barColor}`}
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.0, ease: 'easeOut', delay: index * 0.15 }}
                  style={{ height: `${bar.heightPct}%`, transformOrigin: 'bottom' }}
                />
              </div>
            );
          })}
        </div>
        
        {/* Year labels row */}
        <div className="flex justify-center gap-6 md:gap-10 max-w-sm mx-auto px-4 mt-2 mb-8">
          {bars.map((bar, index) => (
            <span key={index} className={`text-xs font-mono text-center flex-1 ${
              isDark ? 'text-sand/65' : 'text-ink-light/60'
            }`}>
              {bar.year}
            </span>
          ))}
        </div>

        {note && (
          <p className={`text-xs font-light text-center leading-relaxed max-w-md mx-auto mb-6 ${
            isDark ? 'text-sand/70' : 'text-ink-light/80'
          }`}>
            {note}
          </p>
        )}
      </div>

      <div className={`text-[10.5px] italic mt-6 text-center border-t pt-4 ${
        isDark ? 'text-sand/40 border-sand/5' : 'text-ink-light/50 border-sand/20'
      }`}>
        Fuente oficial: {source}
      </div>
    </div>
  );
}
