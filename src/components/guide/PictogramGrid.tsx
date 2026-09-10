import React from 'react';
import { motion } from 'framer-motion';

interface PictogramGridProps {
  title: string;
  description: string;
  percentage: number;
  source: string;
  variant?: 'light' | 'dark';
}

export default function PictogramGrid({
  title,
  description,
  percentage,
  source,
  variant = 'light',
}: PictogramGridProps) {
  const isDark = variant === 'dark';
  const [count, setCount] = React.useState(0);
  const [hasAnimated, setHasAnimated] = React.useState(false);

  const handleViewportEnter = () => {
    if (hasAnimated) return;
    setHasAnimated(true);
    let start = 0;
    const end = percentage;
    const duration = 1200; // ms
    const startTime = performance.now();
    
    const updateCount = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeProgress = progress * (2 - progress); // easeOutQuad
      setCount(start + (end - start) * easeProgress);
      
      if (progress < 1) {
        requestAnimationFrame(updateCount);
      }
    };
    requestAnimationFrame(updateCount);
  };

  return (
    <motion.div
      className={`p-8 md:p-10 rounded-3xl border transition-colors duration-300 flex flex-col justify-between ${
        isDark
          ? 'bg-white/[0.01] border-sand/10 text-offwhite'
          : 'bg-offwhite border-sand text-ink'
      }`}
      whileInView={{}}
      onViewportEnter={handleViewportEnter}
      viewport={{ once: true }}
    >
      <div>
        <h3 className="text-xl md:text-2xl font-serif mb-4 text-center font-medium">
          {title}
        </h3>
        
        <p className={`text-xs font-light text-center leading-relaxed max-w-xs mx-auto mb-8 ${
          isDark ? 'text-sand/65' : 'text-ink-light/65'
        }`}>
          {description}
        </p>

        {/* Counter display */}
        <div className="text-center mb-8">
          <span className="text-5xl font-serif font-bold text-gold">
            {count.toFixed(1)}%
          </span>
        </div>

        {/* Pictogram Grid */}
        <div className="grid grid-cols-10 gap-3 md:gap-4 max-w-xs mx-auto justify-items-center mb-8">
          {Array.from({ length: 20 }).map((_, index) => {
            const isHighlighted = (index * 5) < percentage;
            const delay = index * 0.05;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0.3 }}
                whileInView={isHighlighted ? { opacity: 1 } : {}}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay }}
                className={`transition-colors duration-300 ${
                  isHighlighted
                    ? 'text-gold'
                    : isDark ? 'text-sand/15' : 'text-olive/20'
                }`}
              >
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                </svg>
              </motion.div>
            );
          })}
        </div>
      </div>

      <div className={`text-[10.5px] italic mt-6 text-center border-t pt-4 ${
        isDark ? 'text-sand/40 border-sand/5' : 'text-ink-light/50 border-sand/20'
      }`}>
        Fuente oficial: {source}
      </div>
    </motion.div>
  );
}
