import React from 'react';
import { motion } from 'framer-motion';

interface Segment {
  label: string;
  value: number;
  accent: 'terra' | 'olive';
}

interface SupportStat {
  value: string;
  label: string;
}

interface StatDonutProps {
  variant?: 'light' | 'dark';
  title: string;
  segments: Segment[];
  supportStats: SupportStat[];
  source?: string;
}

const colorClasses = {
  terra: {
    stroke: '#C06C55',
    text: 'text-terra',
    bg: 'bg-terra',
  },
  olive: {
    stroke: '#5A5A40',
    text: 'text-olive',
    bg: 'bg-olive',
  },
} as const;

export default function StatDonut({
  variant = 'dark',
  title,
  segments,
  supportStats,
  source,
}: StatDonutProps) {
  const total = segments.reduce((sum, s) => sum + s.value, 0);
  const radius = 50;
  const circumference = 2 * Math.PI * radius;

  let accumulatedPercentage = 0;

  return (
    <div className={`p-8 md:p-10 rounded-3xl border transition-colors duration-300 ${
      variant === 'dark'
        ? 'bg-white/[0.01] border-sand/10 text-offwhite'
        : 'bg-offwhite border-sand text-ink'
    }`}>
      <h3 className="text-xl md:text-2xl font-serif mb-8 text-center font-medium">
        {title}
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Donut Chart (SVG) */}
        <div className="flex flex-col items-center">
          <div className="relative w-48 h-48">
            <svg className="w-full h-full transform -rotate-90" viewBox="0 0 120 120">
              {/* Background Track */}
              <circle
                cx="60"
                cy="60"
                r={radius}
                fill="transparent"
                stroke={variant === 'dark' ? '#333333' : '#E6DFD3'}
                strokeWidth="12"
              />
              {/* Segments */}
              {segments.map((segment, index) => {
                const percentage = (segment.value / total) * 100;
                const strokeLength = (percentage / 100) * circumference;
                const strokeOffset = circumference - (accumulatedPercentage / 100) * circumference;
                accumulatedPercentage += percentage;

                const strokeColor = colorClasses[segment.accent]?.stroke || '#5A5A40';

                return (
                  <motion.circle
                    key={index}
                    cx="60"
                    cy="60"
                    r={radius}
                    fill="transparent"
                    stroke={strokeColor}
                    strokeWidth="12"
                    strokeDasharray={`${strokeLength} ${circumference - strokeLength}`}
                    strokeDashoffset={strokeOffset}
                    strokeLinecap="round"
                    initial={{ strokeDasharray: `0 ${circumference}` }}
                    whileInView={{ strokeDasharray: `${strokeLength} ${circumference - strokeLength}` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: 'easeOut', delay: index * 0.2 }}
                  />
                );
              })}
            </svg>

            {/* Central Labels */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
              <span className="text-4xl font-serif font-bold text-offwhite">
                {segments[0]?.value}%
              </span>
              <span className="text-[10px] uppercase tracking-wider text-sand/65 max-w-[100px] leading-tight">
                {segments[0]?.label}
              </span>
            </div>
          </div>

          {/* Legend */}
          <div className="flex gap-6 mt-6 justify-center flex-wrap">
            {segments.map((segment, index) => (
              <div key={index} className="flex items-center gap-2">
                <span className={`w-3.5 h-3.5 rounded-full ${colorClasses[segment.accent]?.bg}`} />
                <span className="text-xs text-sand/75 font-light">
                  {segment.label} ({segment.value}%)
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Support Stats Grid */}
        <div className="grid grid-cols-2 gap-6">
          {supportStats.map((stat, index) => (
            <div
              key={index}
              className={`p-4 rounded-2xl ${
                variant === 'dark' ? 'bg-white/[0.02] border border-sand/5' : 'bg-white border border-sand/20'
              }`}
            >
              <div className="text-2xl font-serif text-gold font-semibold mb-1">
                {stat.value}
              </div>
              <div className="text-[11.5px] text-sand/70 leading-snug">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {source && (
        <div className="text-[10.5px] text-sand/40 italic mt-8 text-center border-t border-sand/5 pt-4">
          Fuente: {source}
        </div>
      )}
    </div>
  );
}
