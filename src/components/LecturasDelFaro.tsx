import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { fadeUp, staggerContainer, viewportConfig } from '../utils/animations';

export interface LecturaEditorial {
  id: string;
  origin: 'EL FARO · MAR DEL PLATA' | 'MI FARO · VALENCIA';
  originBadgeType: 'mar-del-plata' | 'valencia';
  title: string;
  excerpt: string;
  imageUrl: string;
  imageAlt: string;
  statusLabel: string;
  statusNote: string;
  href?: string;
}

const LECTURAS_DATA: LecturaEditorial[] = [
  {
    id: 'como-saber-cuando-un-consumo-se-volvio-problematico',
    origin: 'EL FARO · MAR DEL PLATA',
    originBadgeType: 'mar-del-plata',
    title: '¿Cómo saber cuándo un consumo se volvió problemático?',
    excerpt: 'Consumos problemáticos, adicciones y señales cotidianas. Consecuencias en los vínculos, la capacidad de decisión y pautas clínicas para identificar cuándo es momento de consultar.',
    imageUrl: '/lecturas/consumo-problematico-mar-del-plata-eleccion.webp',
    imageAlt: 'Hombre caminando por la costa de Mar del Plata, imagen editorial sobre consumos problemáticos',
    statusLabel: 'Lectura disponible',
    statusNote: '6 min de lectura',
    href: '/lecturas/como-saber-cuando-un-consumo-se-volvio-problematico'
  },
  {
    id: 'cuando-las-adicciones-organizan-la-vida-familiar',
    origin: 'EL FARO · MAR DEL PLATA',
    originBadgeType: 'mar-del-plata',
    title: 'Cuando las adicciones terminan organizando la vida de toda una familia',
    excerpt: 'Cómo una adicción puede modificar vínculos, decisiones y rutinas de toda una familia, y por qué la familia también puede pedir ayuda.',
    imageUrl: '/lecturas/adicciones-familia/adicciones-familia-silla-vacia-mar-del-plata.webp',
    imageAlt: 'Familia reunida alrededor de una mesa con una silla vacía, imagen editorial sobre adicciones y dinámicas familiares',
    statusLabel: 'Lectura disponible',
    statusNote: '8 min de lectura',
    href: '/lecturas/cuando-las-adicciones-organizan-la-vida-familiar'
  },
  {
    id: 'como-empieza-tratamiento-adicciones',
    origin: 'EL FARO · MAR DEL PLATA',
    originBadgeType: 'mar-del-plata',
    title: '¿Cómo empieza un tratamiento por consumos problemáticos?',
    excerpt: 'La primera entrevista, la evaluación clínica sin juzgar y la articulación entre psicoterapia individual, trabajo familiar, grupos y diferentes dispositivos terapéuticos según cada situación.',
    imageUrl: '/adicciones/adicciones-encuentro-terapeutico-el-faro.webp',
    imageAlt: 'Primera entrevista y propuesta terapéutica en El Faro Mar del Plata',
    statusLabel: 'Próximamente',
    statusNote: 'en preparación editorial'
  },
  {
    id: 'ansiedad-seguir-funcionando',
    origin: 'EL FARO · MAR DEL PLATA',
    originBadgeType: 'mar-del-plata',
    title: 'Ansiedad: cuando seguir funcionando no significa estar bien',
    excerpt: 'Exigencia, sobrecarga emocional y síntomas que se normalizan para sostener el día a día. El lugar de la psicoterapia y la salud mental cuando el costo cotidiano es demasiado alto.',
    imageUrl: 'https://res.cloudinary.com/dwv5ehc6e/image/upload/f_auto,q_auto,w_800/v1779830125/mifaro/ansiedad_dtNVhL79.jpg',
    imageAlt: 'Psicoterapia y abordaje de la ansiedad en El Faro Mar del Plata',
    statusLabel: 'Próximamente',
    statusNote: 'en preparación editorial'
  },
  {
    id: 'hijo-adolescente-se-aleja',
    origin: 'MI FARO · VALENCIA',
    originBadgeType: 'valencia',
    title: 'Cuando tu hijo adolescente se aleja y no sabés qué hacer',
    excerpt: 'El silencio, los cambios de conducta y el desconcierto en la convivencia. Claves para sostener el vínculo y la presencia familiar sin invadir ni desentenderse de lo que pasa.',
    imageUrl: 'https://res.cloudinary.com/dwv5ehc6e/image/upload/f_auto,q_auto,w_800/v1779830070/mifaro/Familias-y-adolescentes_9fCxKPMW.jpg',
    imageAlt: 'Adolescentes y familia, orientación terapéutica Mi Faro Valencia',
    statusLabel: 'Próximamente',
    statusNote: 'adaptación editorial'
  },
  {
    id: 'salir-relacion-que-hace-dano',
    origin: 'MI FARO · VALENCIA',
    originBadgeType: 'valencia',
    title: '¿Por qué cuesta tanto salir de una relación que hace daño?',
    excerpt: 'El ciclo del desgaste, la esperanza de que algo cambie y la dependencia emocional. Comprender por qué no alcanza con darse cuenta para poder dar un paso y pedir ayuda.',
    imageUrl: '/por-que-cuesta-salir-relacion-toxica.webp',
    imageAlt: 'Relaciones de pareja y desgaste emocional, Mi Faro Valencia',
    statusLabel: 'Próximamente',
    statusNote: 'adaptación editorial'
  }
];

interface LecturasDelFaroProps {
  variant?: 'light' | 'dark';
}

export default function LecturasDelFaro({ variant = 'dark' }: LecturasDelFaroProps) {
  const isDark = variant === 'dark';
  const publishedLecturas = LECTURAS_DATA.filter((item) => Boolean(item.href));

  return (
    <section id="lecturas" className={`border-t py-24 ${isDark ? 'border-sand/15 bg-[#24231F] text-offwhite' : 'border-sand/20 bg-sand/10 text-ink'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabecera Editorial */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-4">
            <h2 className={`font-serif text-3xl md:text-5xl ${isDark ? 'text-offwhite font-light' : 'text-ink'}`}>
              Lecturas del Faro
            </h2>
            <p className={`max-w-3xl text-sm sm:text-base font-light leading-relaxed ${isDark ? 'text-sand/75' : 'text-ink-light'}`}>
              Ideas, experiencias y herramientas para entender mejor lo que nos pasa y lo que les pasa a quienes queremos.
            </p>
          </div>
          <div className="shrink-0">
            <Link
              to="/lecturas"
              className={`inline-flex items-center gap-2 text-xs sm:text-sm font-sans uppercase tracking-wider font-semibold transition-colors ${
                isDark ? 'text-faro-gold hover:text-offwhite' : 'text-olive hover:text-olive-light'
              }`}
            >
              <span>Ir a Lecturas del Faro</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        {/* Grilla de contenidos editoriales */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto"
        >
          {publishedLecturas.map((item) => {
            const isMdp = item.originBadgeType === 'mar-del-plata';
            const isInteractive = Boolean(item.href);

            const CardContent = (
              <>
                {/* Fotografía del artículo */}
                <div className="aspect-[16/10] w-full overflow-hidden bg-sand/10 relative">
                  <img
                    src={item.imageUrl}
                    alt={item.imageAlt}
                    className={`w-full h-full object-cover ${
                      isInteractive
                        ? 'transition-transform duration-700 group-hover:scale-105'
                        : 'opacity-75 grayscale-[0.2]'
                    }`}
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    decoding="async"
                    width={800}
                    height={500}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 pointer-events-none" />
                </div>

                {/* Contenido */}
                <div className="p-8 flex flex-col flex-grow space-y-4">
                  {/* Procedencia Editorial discreta */}
                  <div className="flex items-center justify-between gap-2">
                    <span
                      className={`text-[10px] font-mono tracking-[0.2em] uppercase font-semibold ${
                        isInteractive
                          ? (isMdp ? 'text-faro-gold' : 'text-sand/70')
                          : 'text-sand/40'
                      }`}
                    >
                      {item.origin}
                    </span>
                    <span className="text-[10px] uppercase tracking-widest text-sand/40 font-sans">
                      {isMdp ? 'Mar del Plata' : 'Valencia'}
                    </span>
                  </div>

                  {/* Título */}
                  <h3
                    className={`font-serif text-xl sm:text-2xl leading-snug font-normal transition-colors ${
                      isInteractive
                        ? (isDark ? 'text-offwhite group-hover:text-faro-gold' : 'text-ink group-hover:text-olive')
                        : (isDark ? 'text-offwhite/70' : 'text-ink/70')
                    }`}
                  >
                    {item.title}
                  </h3>

                  {/* Bajada / Eje temático */}
                  <p
                    className={`font-light text-sm leading-relaxed flex-grow line-clamp-3 ${
                      isInteractive
                        ? (isDark ? 'text-sand/75' : 'text-ink-light')
                        : (isDark ? 'text-sand/50' : 'text-ink-light/60')
                    }`}
                  >
                    {item.excerpt}
                  </p>

                  {/* Pie de tarjeta con estado */}
                  <div
                    className={`mt-auto pt-4 border-t flex items-center justify-between text-xs font-sans tracking-wider uppercase ${
                      isDark ? 'border-sand/10' : 'border-sand/20'
                    }`}
                  >
                    <span
                      className={`font-medium flex items-center gap-1.5 ${
                        isInteractive
                          ? (isMdp ? 'text-faro-gold' : 'text-sand/70')
                          : 'text-sand/50'
                      }`}
                    >
                      <span>{item.statusLabel}</span>
                      {item.href && (
                        <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
                      )}
                    </span>
                    <span className="text-[11px] text-sand/50 lowercase tracking-normal font-light">
                      {item.statusNote}
                    </span>
                  </div>
                </div>
              </>
            );

            return (
              <motion.article
                key={item.id}
                variants={fadeUp}
                className={`flex flex-col h-full overflow-hidden rounded-[2rem] border transition-all duration-300 ${
                  isInteractive
                    ? (isDark
                        ? 'group border-sand/15 bg-white/[0.035] hover:border-sand/30 hover:bg-white/[0.055] cursor-pointer'
                        : 'group border-sand/30 bg-white hover:shadow-md cursor-pointer')
                    : (isDark
                        ? 'border-sand/10 bg-white/[0.015] opacity-60 cursor-default select-none'
                        : 'border-sand/20 bg-sand/5 opacity-60 cursor-default select-none')
                }`}
              >
                {item.href ? (
                  <Link to={item.href} className="flex flex-col h-full">
                    {CardContent}
                  </Link>
                ) : (
                  <div className="flex flex-col h-full">
                    {CardContent}
                  </div>
                )}
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
