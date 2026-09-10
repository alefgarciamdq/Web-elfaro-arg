import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

export interface AyudaItem {
  label: string;
  href?: string;
  estado: 'activo' | 'Próximamente';
}

interface TambienPuedeAyudarteProps {
  items: AyudaItem[];
}

export default function TambienPuedeAyudarte({ items }: TambienPuedeAyudarteProps) {
  if (!items || items.length === 0) return null;

  return (
    <div className="mt-6 pt-6 border-t border-sand/20">
      <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-ink-light/60 font-mono block mb-3">
        También puede ayudarte
      </span>
      <div className="flex flex-wrap gap-2.5">
        {items.map((item, idx) => {
          if (item.estado === 'activo' && item.href) {
            return (
              <Link
                key={idx}
                to={item.href}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-medium bg-olive/10 text-olive hover:bg-olive hover:text-white transition-all shadow-sm duration-300 font-sans"
              >
                {item.label}
                <ArrowUpRight size={12} className="shrink-0" />
              </Link>
            );
          } else {
            return (
              <span
                key={idx}
                aria-disabled="true"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-medium bg-sand/20 text-ink-light/50 cursor-not-allowed select-none font-sans border border-sand/30"
              >
                {item.label}
                <span className="text-[8px] uppercase tracking-wider bg-sand-light/50 px-1.5 py-0.5 rounded text-ink-light/40 font-mono font-bold">
                  Próximamente
                </span>
              </span>
            );
          }
        })}
      </div>
    </div>
  );
}
