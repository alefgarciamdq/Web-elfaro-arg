import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { fadeUp, viewportConfig } from '../../utils/animations';

export interface StepItem {
  number: number;
  title: string;
  description: string;
  accent?: 'olive' | 'terra';
}

interface AnimatedStepLoopProps {
  steps: StepItem[];
  loopLabel?: string;
  variant?: 'light' | 'dark';
}

const accentClasses = {
  olive: {
    circleBgActive: 'bg-olive/16',
    circleBorderActive: 'border-olive/40',
    textActive: 'text-olive',
    glow: 'shadow-[0_0_20px_rgba(90,90,64,0.45)]',
    circleBgInactive: 'bg-olive/[0.04]',
    circleBorderInactive: 'border-olive/[0.15]',
    textInactive: 'text-olive/30',
  },
  terra: {
    circleBgActive: 'bg-terra/16',
    circleBorderActive: 'border-terra/45',
    textActive: 'text-terra',
    glow: 'shadow-[0_0_20px_rgba(192,108,85,0.45)]',
    circleBgInactive: 'bg-terra/[0.04]',
    circleBorderInactive: 'border-terra/[0.15]',
    textInactive: 'text-terra/30',
  },
} as const;

function StepCircle({
  number,
  accent = 'olive',
  isLit = false,
  isDark = false,
}: {
  number: number;
  accent?: 'olive' | 'terra';
  isLit?: boolean;
  isDark?: boolean;
}) {
  const [pulsing, setPulsing] = useState(false);
  const c = accentClasses[accent];
  const active = pulsing || isLit;

  // Exact inline style values for dark theme olive to guarantee color contrast
  const activeStyle = active && accent === 'olive' && isDark
    ? {
        backgroundColor: 'rgba(194, 194, 155, 0.25)',
        borderColor: 'rgba(194, 194, 155, 0.85)',
        boxShadow: '0 0 20px rgba(194, 194, 155, 0.45)',
      }
    : undefined;

  const activeTextStyle = active && accent === 'olive' && isDark
    ? { color: '#C2C29B' }
    : undefined;

  return (
    <button
      type="button"
      aria-label={`Paso ${number}`}
      onClick={() => {
        pulsing ? null : setPulsing(true);
        setTimeout(() => setPulsing(false), 550);
      }}
      style={activeStyle}
      className={`w-16 h-16 rounded-full grid place-items-center border-[1.5px] mx-auto mb-4
        transition-all duration-300 ease-out active:scale-95
        ${active 
          ? (accent === 'olive' && isDark 
              ? 'scale-[1.18]' 
              : `${c.circleBgActive} ${c.circleBorderActive} scale-[1.18] ${c.glow}`)
          : `${c.circleBgInactive} ${c.circleBorderInactive} scale-100`}`}
    >
      <span 
        style={activeTextStyle}
        className={`font-sans font-extrabold text-2xl transition-colors duration-300 ${
          active 
            ? (accent === 'olive' && isDark ? '' : c.textActive) 
            : c.textInactive
        }`}
      >
        {number}
      </span>
    </button>
  );
}

export default function AnimatedStepLoop({
  steps,
  loopLabel,
  variant = 'light',
}: AnimatedStepLoopProps) {
  const isDark = variant === 'dark';
  const [litIndex, setLitIndex] = useState(-1);
  const [hasAnimated, setHasAnimated] = useState(false);

  const handleViewportEnter = () => {
    if (hasAnimated) return;
    setHasAnimated(true);

    // Play sequence setting litIndex step-by-step
    let index = 0;
    const playNext = () => {
      if (index < steps.length) {
        setLitIndex(index);
        index++;
        setTimeout(playNext, 1000); // 1 second between steps
      }
    };
    
    setTimeout(playNext, 400); // Faint initial delay
  };

  return (
    <motion.div
      onViewportEnter={handleViewportEnter}
      viewport={viewportConfig}
      className={`rounded-3xl px-9 py-11 transition-all duration-300 ${
        isDark
          ? 'bg-white/[0.01] border border-sand/10'
          : 'bg-offwhite border border-sand/30'
      }`}
    >
      <div className="flex items-stretch justify-center flex-wrap gap-y-8">
        {steps.map((step, i) => {
          const isLit = i <= litIndex;
          const isArrowActive = i < litIndex;

          return (
            <React.Fragment key={step.number}>
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={viewportConfig}
                transition={{ delay: i * 0.12 }}
                className="flex-1 min-w-[130px] max-w-[150px] text-center"
              >
                <StepCircle 
                  number={step.number} 
                  accent={step.accent} 
                  isLit={isLit}
                  isDark={isDark}
                />
                <p className={`font-medium text-sm mb-1 transition-colors duration-300 ${
                  isDark 
                    ? (isLit ? 'text-offwhite' : 'text-offwhite/30') 
                    : (isLit ? 'text-ink' : 'text-ink/30')
                }`}>
                  {step.title}
                </p>
                <p className={`text-[11.5px] leading-snug transition-colors duration-300 ${
                  isDark 
                    ? (isLit ? 'text-sand/70' : 'text-sand/20') 
                    : (isLit ? 'text-olive' : 'text-olive/30')
                }`}>
                  {step.description}
                </p>
              </motion.div>

              {i < steps.length - 1 && (
                <span
                  className={`self-center text-xl px-1.5 -mt-12 transition-all duration-300 ${
                    isArrowActive ? 'text-gold scale-110 font-bold' : 'text-sand/15 scale-100'
                  }`}
                  aria-hidden="true"
                >
                  →
                </span>
              )}
            </React.Fragment>
          );
        })}
      </div>

      {loopLabel && (
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          transition={{ delay: steps.length * 0.12 }}
          className="text-center mt-8 text-xs italic font-serif text-terra font-medium"
        >
          ↻ {loopLabel}
        </motion.p>
      )}
    </motion.div>
  );
}
