import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  ArrowRight, 
  Clock, 
  MessageSquare
} from 'lucide-react';
import { Head } from 'vite-react-ssg';
import { motion, useReducedMotion } from 'framer-motion';
import '@fontsource/cormorant-garamond/latin-300.css';
import '@fontsource/cormorant-garamond/latin-700.css';
import JsonLd from './JsonLd';
import { fadeUp, viewportConfig } from '../utils/animations';
import { trackWhatsAppClick, trackCtaClick } from '../utils/telemetry';

const WHATSAPP_URL = 'https://wa.me/5492235923790?text=Hola,%20quisiera%20hacer%20una%20consulta%20en%20El%20Faro.';

// ── EXPERIENCIA 1: "EL ESPACIO QUE OCUPA" (SECUENCIA NARRATIVA AUTOMÁTICA) ──
function EspacioQueOcupaSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [stage, setStage] = useState(0); // 0: invisible, 1: intro, 2: vida, 3: consumo aparece, 4: expansión/reorganización, 5: conclusión
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    if (prefersReduced) {
      setStage(5);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && stage === 0) {
          setStage(1); // 0s: "Una vida está hecha de muchas cosas"
          
          const t1 = setTimeout(() => setStage(2), 1000); // 1.0s: Aparecen las partes de la vida
          const t2 = setTimeout(() => setStage(3), 2600); // 2.6s: Aparece "el consumo" discretamente
          const t3 = setTimeout(() => setStage(4), 3600); // 3.6s: El consumo empieza a ganar espacio y reorganiza todo
          const t4 = setTimeout(() => setStage(5), 5800); // 5.8s: Aparece la conclusión

          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [stage, prefersReduced]);

  // Estados visuales claros y comprensibles por etapa
  const isVidaVisible = stage >= 2;
  const isConsumoPresent = stage >= 3;
  const isExpanded = stage >= 4;
  const isConclusionVisible = stage >= 5;

  return (
    <section 
      ref={sectionRef} 
      className="relative py-20 sm:py-28 bg-[#141513] text-[#C8C4BB] border-y border-white/10 overflow-hidden"
    >
      <div className="max-w-5xl mx-auto px-6 sm:px-10 flex flex-col items-center">
        
        {/* ESCENA 1: TÍTULO INTRODUCTORIO */}
        <div 
          className={`text-center mb-8 sm:mb-12 transition-all duration-1000 ease-out ${
            stage >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
          }`}
        >
          <span className="font-mono text-xs sm:text-sm uppercase tracking-[0.25em] text-[#A98B5A] font-semibold block mb-2">
            DINÁMICA VITAL
          </span>
          <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl text-[#F3EFE6] font-normal leading-tight">
            Una vida está hecha de muchas cosas.
          </h2>
        </div>

        {/* ── ESCENARIO EDITORIAL (DESKTOP / TABLET) ── */}
        <div className="hidden sm:block relative w-full h-[460px] md:h-[500px] select-none my-4">
          
          {/* TRABAJO */}
          <span 
            style={{
              transitionDuration: isExpanded ? '2200ms' : '1000ms'
            }}
            className={`absolute top-[10%] left-[10%] font-serif text-3xl md:text-4xl transition-all ease-out ${
              isVidaVisible ? 'opacity-90' : 'opacity-0 translate-y-4'
            } ${
              isExpanded 
                ? 'text-[#C8C4BB]/30 -translate-x-12 translate-y-6 scale-90' 
                : 'text-[#E7E0D3]'
            }`}
          >
            Trabajo
          </span>

          {/* DORMIR */}
          <span 
            style={{
              transitionDuration: isExpanded ? '2200ms' : '1000ms'
            }}
            className={`absolute top-[12%] right-[14%] font-serif text-3xl md:text-4xl transition-all ease-out ${
              isVidaVisible ? 'opacity-90' : 'opacity-0 translate-y-4'
            } ${
              isExpanded 
                ? 'text-[#C8C4BB]/20 translate-x-12 -translate-y-6 scale-85' 
                : 'text-[#E7E0D3]'
            }`}
          >
            Dormir
          </span>

          {/* PAREJA */}
          <span 
            style={{
              transitionDuration: isExpanded ? '2200ms' : '1000ms'
            }}
            className={`absolute top-[42%] right-[8%] font-serif text-3xl md:text-4xl transition-all ease-out ${
              isVidaVisible ? 'opacity-90' : 'opacity-0 translate-y-4'
            } ${
              isExpanded 
                ? 'text-[#C8C4BB]/25 translate-x-16 translate-y-4 scale-90' 
                : 'text-[#E7E0D3]'
            }`}
          >
            Pareja
          </span>

          {/* AMIGOS */}
          <span 
            style={{
              transitionDuration: isExpanded ? '2200ms' : '1000ms'
            }}
            className={`absolute bottom-[22%] right-[12%] font-serif text-2xl md:text-3xl transition-all ease-out ${
              isVidaVisible ? 'opacity-85' : 'opacity-0 translate-y-4'
            } ${
              isExpanded 
                ? 'text-[#9E9A90]/20 translate-x-20 scale-85' 
                : 'text-[#9E9A90]'
            }`}
          >
            Amigos
          </span>

          {/* PROYECTOS */}
          <span 
            style={{
              transitionDuration: isExpanded ? '2200ms' : '1000ms'
            }}
            className={`absolute bottom-[10%] right-[28%] font-serif text-2xl md:text-3xl transition-all ease-out ${
              isVidaVisible ? 'opacity-85' : 'opacity-0 translate-y-4'
            } ${
              isExpanded 
                ? 'text-[#9E9A90]/15 translate-y-12 scale-80' 
                : 'text-[#9E9A90]'
            }`}
          >
            Proyectos
          </span>

          {/* DINERO */}
          <span 
            style={{
              transitionDuration: isExpanded ? '2200ms' : '1000ms'
            }}
            className={`absolute bottom-[18%] left-[10%] font-serif text-2xl md:text-3xl transition-all ease-out ${
              isVidaVisible ? 'opacity-85' : 'opacity-0 translate-y-4'
            } ${
              isExpanded 
                ? 'text-[#C8C4BB]/30 translate-x-12 -translate-y-8 scale-90' 
                : 'text-[#C8C4BB]'
            }`}
          >
            Dinero
          </span>

          {/* HERMANOS */}
          <span 
            style={{
              transitionDuration: isExpanded ? '2200ms' : '1000ms'
            }}
            className={`absolute bottom-[10%] left-[28%] font-serif text-2xl md:text-3xl transition-all ease-out ${
              isVidaVisible ? 'opacity-85' : 'opacity-0 translate-y-4'
            } ${
              isExpanded 
                ? 'text-[#C8C4BB]/20 -translate-x-12 translate-y-8 scale-85' 
                : 'text-[#C8C4BB]'
            }`}
          >
            Hermanos
          </span>

          {/* UNO MISMO */}
          <span 
            style={{
              transitionDuration: isExpanded ? '2200ms' : '1000ms'
            }}
            className={`absolute top-[38%] left-[6%] font-serif text-3xl md:text-4xl transition-all ease-out ${
              isVidaVisible ? 'opacity-90' : 'opacity-0 translate-y-4'
            } ${
              isExpanded 
                ? 'text-[#E7E0D3]/10 -translate-x-16 scale-75 blur-[0.5px]' 
                : 'text-[#E7E0D3]'
            }`}
          >
            Uno mismo
          </span>

          {/* EL CONSUMO: CENTRO DINÁMICO */}
          <div 
            style={{
              transitionDuration: isExpanded ? '2200ms' : '800ms'
            }}
            className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all ease-out ${
              isConsumoPresent ? 'opacity-100' : 'opacity-0 scale-50'
            } ${
              isExpanded 
                ? 'scale-150 sm:scale-[2.2] font-serif font-bold text-[#A98B5A] tracking-tight z-20' 
                : 'scale-100 font-mono text-sm text-[#7A7A5C] lowercase tracking-widest z-10'
            }`}
          >
            {isExpanded ? 'EL CONSUMO' : 'el consumo'}
          </div>

        </div>

        {/* ── ESCENARIO EDITORIAL EXCLUSIVO MOBILE (390px) ── */}
        <div className="sm:hidden relative w-full min-h-[380px] select-none py-6">
          
          <div className="grid grid-cols-2 gap-y-10 gap-x-6 text-center">
            
            {/* Columna Izquierda */}
            <div className="space-y-8 text-left pl-4">
              <p 
                style={{ transitionDuration: isExpanded ? '2000ms' : '800ms' }}
                className={`font-serif text-2xl transition-all ease-out ${
                  isVidaVisible ? 'opacity-90' : 'opacity-0'
                } ${isExpanded ? 'opacity-25 -translate-x-2' : 'text-[#E7E0D3]'}`}
              >
                Trabajo
              </p>
              
              <p 
                style={{ transitionDuration: isExpanded ? '2000ms' : '800ms' }}
                className={`font-serif text-2xl transition-all ease-out ${
                  isVidaVisible ? 'opacity-90' : 'opacity-0'
                } ${isExpanded ? 'opacity-10 -translate-x-3' : 'text-[#E7E0D3]'}`}
              >
                Uno mismo
              </p>

              <p 
                style={{ transitionDuration: isExpanded ? '2000ms' : '800ms' }}
                className={`font-serif text-xl transition-all ease-out ${
                  isVidaVisible ? 'opacity-85' : 'opacity-0'
                } ${isExpanded ? 'opacity-25 -translate-x-2' : 'text-[#C8C4BB]'}`}
              >
                Dinero
              </p>

              <p 
                style={{ transitionDuration: isExpanded ? '2000ms' : '800ms' }}
                className={`font-serif text-xl transition-all ease-out ${
                  isVidaVisible ? 'opacity-85' : 'opacity-0'
                } ${isExpanded ? 'opacity-20 -translate-x-2' : 'text-[#C8C4BB]'}`}
              >
                Hermanos
              </p>
            </div>

            {/* Columna Derecha */}
            <div className="space-y-8 text-right pr-4">
              <p 
                style={{ transitionDuration: isExpanded ? '2000ms' : '800ms' }}
                className={`font-serif text-2xl transition-all ease-out ${
                  isVidaVisible ? 'opacity-90' : 'opacity-0'
                } ${isExpanded ? 'opacity-20 translate-x-2' : 'text-[#C8C4BB]'}`}
              >
                Dormir
              </p>

              <p 
                style={{ transitionDuration: isExpanded ? '2000ms' : '800ms' }}
                className={`font-serif text-2xl transition-all ease-out ${
                  isVidaVisible ? 'opacity-90' : 'opacity-0'
                } ${isExpanded ? 'opacity-25 translate-x-2' : 'text-[#E7E0D3]'}`}
              >
                Pareja
              </p>

              <p 
                style={{ transitionDuration: isExpanded ? '2000ms' : '800ms' }}
                className={`font-serif text-xl transition-all ease-out ${
                  isVidaVisible ? 'opacity-85' : 'opacity-0'
                } ${isExpanded ? 'opacity-20 translate-x-2' : 'text-[#9E9A90]'}`}
              >
                Amigos
              </p>

              <p 
                style={{ transitionDuration: isExpanded ? '2000ms' : '800ms' }}
                className={`font-serif text-xl transition-all ease-out ${
                  isVidaVisible ? 'opacity-85' : 'opacity-0'
                } ${isExpanded ? 'opacity-15 translate-x-2' : 'text-[#9E9A90]'}`}
              >
                Proyectos
              </p>
            </div>

          </div>

          {/* EL CONSUMO (Mobile Center) */}
          <div 
            style={{ transitionDuration: isExpanded ? '2000ms' : '800ms' }}
            className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all ease-out text-center ${
              isConsumoPresent ? 'opacity-100' : 'opacity-0 scale-75'
            } ${
              isExpanded 
                ? 'scale-125 font-serif font-bold text-[#A98B5A] tracking-tight' 
                : 'scale-100 font-mono text-xs text-[#7A7A5C] lowercase tracking-widest'
            }`}
          >
            {isExpanded ? 'EL CONSUMO' : 'el consumo'}
          </div>

        </div>

        {/* ESCENA 4: CONCLUSIÓN Y SIGNIFICADO */}
        <div 
          className={`text-center mt-8 sm:mt-12 max-w-2xl px-4 transition-all duration-1000 ease-out space-y-3 ${
            isConclusionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <p className="font-mono text-xs sm:text-sm uppercase tracking-[0.2em] text-[#A98B5A] font-semibold">
            NO TODO DESAPARECE. PERO TODO EMPIEZA A ORGANIZARSE ALREDEDOR.
          </p>
          <p className="font-serif italic text-2xl sm:text-3xl md:text-4xl text-[#F3EFE6] font-normal leading-snug">
            «Un problema que parecía ocupar un lugar empezó a organizar muchos otros.»
          </p>
        </div>

      </div>
    </section>
  );
}

// ── EXPERIENCIA 2: "UNA PERSONA NO ES SU SÍNTOMA" (SECUENCIA NARRATIVA AUTOMÁTICA) ──
function PersonaNoEsSintomaSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [stage, setStage] = useState(0); // 0: unobserved, 1: síntoma solo, 2: persona emerge, 3: dimensiones de vida, 4: síntesis
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    if (prefersReduced) {
      setStage(4);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && stage === 0) {
          setStage(1); // 0s: SÍNTOMA ocupa el centro
          const t1 = setTimeout(() => setStage(2), 1600); // 1.6s: PERSONA emerge inmensa detrás
          const t2 = setTimeout(() => setStage(3), 3200); // 3.2s: Dimensiones de vida aparecen alrededor
          const t3 = setTimeout(() => setStage(4), 4800); // 4.8s: Conclusión y síntesis
          observer.disconnect();
        }
      },
      { threshold: 0.35 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [stage, prefersReduced]);

  const isPersonaVisible = stage >= 2;
  const isDimensionsVisible = stage >= 3;
  const isConclusionVisible = stage >= 4;

  return (
    <section 
      ref={sectionRef} 
      className="relative py-20 sm:py-28 bg-[#10110F] text-[#C8C4BB] border-y border-white/10 overflow-hidden"
    >
      <div className="max-w-5xl mx-auto px-6 sm:px-10 flex flex-col items-center">
        
        {/* ESCENA: TÍTULO INTRODUCTORIO */}
        <div 
          className={`text-center mb-8 sm:mb-12 transition-all duration-1000 ease-out ${
            stage >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
          }`}
        >
          <span className="font-mono text-xs sm:text-sm uppercase tracking-[0.25em] text-[#A98B5A] font-semibold block mb-2">
            MIRADA CLÍNICA
          </span>
          <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl text-[#F3EFE6] font-normal leading-tight">
            Una persona no es su síntoma.
          </h2>
        </div>

        {/* ── ESCENARIO EDITORIAL DESKTOP / TABLET ── */}
        <div className="hidden sm:flex relative w-full h-[460px] md:h-[500px] items-center justify-center select-none my-4">
          
          {/* PERSONA (Emerge detrás, inmensa) */}
          <div 
            style={{ transitionDuration: isPersonaVisible ? '1800ms' : '800ms' }}
            className={`absolute z-10 font-serif font-bold text-center leading-none tracking-tighter transition-all ease-out ${
              isPersonaVisible 
                ? 'opacity-90 scale-100 text-[#F3EFE6] text-7xl sm:text-9xl md:text-[11rem] lg:text-[13rem]' 
                : 'opacity-0 scale-75 text-[#F3EFE6]/0 text-7xl'
            }`}
          >
            PERSONA
          </div>

          {/* SÍNTOMA (Empieza dominante en el centro y luego se reduce a un costado) */}
          <div 
            style={{ transitionDuration: isPersonaVisible ? '1800ms' : '1000ms' }}
            className={`absolute z-30 font-serif font-bold transition-all ease-out ${
              stage === 1 
                ? 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-6xl sm:text-8xl md:text-9xl text-[#A98B5A] scale-100 opacity-100' 
                : isPersonaVisible 
                  ? 'top-[12%] left-[8%] text-2xl sm:text-3xl md:text-4xl text-[#A98B5A] scale-90 opacity-90' 
                  : 'opacity-0 scale-50'
            }`}
          >
            SÍNTOMA
          </div>

          {/* Dimensiones de la persona flotando orgánicamente */}
          <div 
            style={{ transitionDuration: '1400ms' }}
            className={`absolute inset-0 z-20 pointer-events-none transition-all ease-out ${
              isDimensionsVisible ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <span className="absolute top-[10%] right-[12%] font-serif italic text-2xl md:text-3xl text-[#E7E0D3]/80">
              Historia
            </span>
            <span className="absolute top-[28%] right-[6%] font-sans text-xs md:text-sm uppercase tracking-[0.25em] text-[#A98B5A]">
              AFECTOS
            </span>
            <span className="absolute top-[48%] right-[8%] font-serif italic text-2xl md:text-3xl text-[#C8C4BB]/70">
              Vínculos
            </span>
            <span className="absolute bottom-[18%] right-[14%] font-sans text-xs md:text-sm uppercase tracking-[0.25em] text-[#9E9A90]">
              PROYECTOS
            </span>
            <span className="absolute bottom-[8%] right-[32%] font-serif italic text-xl md:text-2xl text-[#9E9A90]/60">
              Deseos
            </span>

            <span className="absolute top-[32%] left-[6%] font-serif italic text-2xl md:text-3xl text-[#C8C4BB]/70">
              Pérdidas
            </span>
            <span className="absolute bottom-[36%] left-[8%] font-sans text-xs md:text-sm uppercase tracking-[0.25em] text-[#7A7A5C]">
              TRABAJO
            </span>
            <span className="absolute bottom-[16%] left-[12%] font-serif italic text-2xl md:text-3xl text-[#E7E0D3]/80">
              Familia
            </span>
            <span className="absolute bottom-[8%] left-[30%] font-serif italic text-xl md:text-2xl text-[#9E9A90]/60">
              Miedos
            </span>
            <span className="absolute top-[16%] left-[32%] font-sans text-xs uppercase tracking-[0.3em] text-[#7A7A5C]/80">
              CONTEXTO
            </span>
          </div>

        </div>

        {/* ── ESCENARIO EDITORIAL MOBILE (390px) ── */}
        <div className="sm:hidden relative w-full min-h-[360px] flex flex-col items-center justify-center select-none py-6">
          <div 
            style={{ transitionDuration: isPersonaVisible ? '1600ms' : '800ms' }}
            className={`font-serif font-bold transition-all ease-out ${
              stage === 1 
                ? 'text-5xl text-[#A98B5A] scale-100 opacity-100 my-8' 
                : isPersonaVisible 
                  ? 'text-xl text-[#A98B5A] mb-4 opacity-90' 
                  : 'opacity-0 scale-50'
            }`}
          >
            SÍNTOMA
          </div>

          <div 
            style={{ transitionDuration: isPersonaVisible ? '1600ms' : '800ms' }}
            className={`font-serif font-bold tracking-tight transition-all ease-out ${
              isPersonaVisible 
                ? 'opacity-90 scale-100 text-[#F3EFE6] text-6xl my-4' 
                : 'opacity-0 scale-75'
            }`}
          >
            PERSONA
          </div>

          <div 
            style={{ transitionDuration: '1200ms' }}
            className={`flex flex-wrap justify-center gap-3 px-4 pt-4 transition-all ease-out ${
              isDimensionsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <span className="font-serif italic text-base text-[#E7E0D3]/80">Historia</span>
            <span className="text-white/20">·</span>
            <span className="font-serif italic text-base text-[#C8C4BB]/80">Familia</span>
            <span className="text-white/20">·</span>
            <span className="font-serif italic text-base text-[#A98B5A]">Afectos</span>
            <span className="text-white/20">·</span>
            <span className="font-serif italic text-base text-[#C8C4BB]/80">Vínculos</span>
            <span className="text-white/20">·</span>
            <span className="font-serif italic text-base text-[#9E9A90]">Pérdidas</span>
            <span className="text-white/20">·</span>
            <span className="font-serif italic text-base text-[#7A7A5C]">Trabajo</span>
            <span className="text-white/20">·</span>
            <span className="font-serif italic text-base text-[#9E9A90]/70">Deseos</span>
          </div>
        </div>

        {/* CONCLUSIÓN Y SIGNIFICADO */}
        <div 
          className={`text-center mt-8 sm:mt-12 max-w-2xl px-4 transition-all duration-1000 ease-out space-y-3 ${
            isConclusionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <p className="font-mono text-xs sm:text-sm uppercase tracking-[0.2em] text-[#A98B5A] font-semibold">
            UNA PERSONA NO ES SOLAMENTE SU SÍNTOMA
          </p>
          <p className="font-serif italic text-2xl sm:text-3xl md:text-4xl text-[#F3EFE6] font-normal leading-snug">
            «El síntoma era solo una parte.<br className="hidden sm:inline" /> La persona era muchísimo más grande.»
          </p>
        </div>

      </div>
    </section>
  );
}

// ── EXPERIENCIA 3: LA NOCHE (CRONOLOGÍA DE LA VIGILIA) ──
function NocheCinematograficaSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeHour, setActiveHour] = useState(0); // 0: invisible, 1: 23:17, 2: 00:42, 3: 01:26, 4: 07:40, 5: 09:15, 6: conclusión
  const prefersReduced = useReducedMotion();

  const hoursData = [
    {
      hour: '23:17',
      question: '«¿Dónde estará?»',
      desc: 'El inicio del insomnio. La pantalla del teléfono que se apaga y se vuelve a encender en silencio.'
    },
    {
      hour: '00:42',
      question: '«¿Le escribo?»',
      desc: 'Un mensaje escrito y borrado tres veces. Si pregunto se enoja; si no pregunto no duermo.'
    },
    {
      hour: '01:26',
      question: '«¿Voy a buscarlo?»',
      desc: 'El sonido de una llave en la cerradura. El cuerpo se tensa en la oscuridad antes de saber.'
    },
    {
      hour: '07:40',
      question: '«¿Llamo al trabajo?»',
      desc: 'Disimular frente a los demás. Que el desayuno parezca normal mientras el agotamiento ya no entra en el cuerpo.'
    },
    {
      hour: '09:15',
      question: '«¿Le presto otra vez?»',
      desc: 'La mentira que ya no engaña a nadie: «Tuvo un problema de salud». La responsabilidad ajena convertida en propia.'
    }
  ];

  useEffect(() => {
    if (prefersReduced) {
      setActiveHour(6);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && activeHour === 0) {
          setActiveHour(1); // 0s: 23:17
          const t1 = setTimeout(() => setActiveHour(2), 1400); // 1.4s: 00:42
          const t2 = setTimeout(() => setActiveHour(3), 2800); // 2.8s: 01:26
          const t3 = setTimeout(() => setActiveHour(4), 4200); // 4.2s: 07:40
          const t4 = setTimeout(() => setActiveHour(5), 5600); // 5.6s: 09:15
          const t5 = setTimeout(() => setActiveHour(6), 7000); // 7.0s: Conclusión
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [activeHour, prefersReduced]);

  return (
    <section 
      ref={sectionRef} 
      className="relative py-24 sm:py-36 bg-[#0C0D0B] text-[#C8C4BB] border-y border-white/10 overflow-hidden"
    >
      <div className="max-w-4xl mx-auto px-6 sm:px-10">
        
        {/* ENCABEZADO */}
        <div className="text-center mb-16 sm:mb-20">
          <span className="font-mono text-xs sm:text-sm uppercase tracking-[0.25em] text-[#A98B5A] font-semibold block mb-2">
            CRONOLOGÍA DE LA VIGILIA
          </span>
          <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl text-[#F3EFE6] font-normal leading-tight">
            La noche en que todo se detiene.
          </h2>
        </div>

        {/* LISTA ESTRATIFICADA DE HORAS */}
        <div className="space-y-12 sm:space-y-16">
          {hoursData.map((item, index) => {
            const itemStage = index + 1;
            const isCurrent = activeHour === itemStage;
            const isPast = activeHour > itemStage;
            const isReached = activeHour >= itemStage;

            return (
              <div 
                key={item.hour}
                style={{ transitionDuration: '900ms' }}
                className={`transition-all ease-out flex flex-col sm:flex-row items-start sm:items-baseline gap-4 sm:gap-8 pb-10 border-b border-white/5 ${
                  !isReached 
                    ? 'opacity-0 translate-y-6' 
                    : isCurrent 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-40 translate-y-0'
                }`}
              >
                <span 
                  className={`font-serif text-5xl sm:text-7xl md:text-8xl font-light tracking-tighter leading-none shrink-0 transition-colors duration-700 ${
                    isCurrent ? 'text-[#A98B5A]' : isPast ? 'text-[#7A7A5C]' : 'text-[#7A7A5C]/30'
                  }`}
                >
                  {item.hour}
                </span>

                <div className="space-y-2">
                  <p 
                    className={`font-serif italic text-2xl sm:text-3xl md:text-4xl transition-colors duration-700 ${
                      isCurrent ? 'text-[#F3EFE6]' : 'text-[#C8C4BB]'
                    }`}
                  >
                    {item.question}
                  </p>
                  <p className="text-sm sm:text-base text-[#9E9A90] font-light leading-relaxed max-w-xl">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* CONCLUSIÓN DE LA NOCHE */}
        <div 
          style={{ transitionDuration: '1000ms' }}
          className={`pt-16 text-center max-w-2xl mx-auto space-y-4 transition-all ease-out ${
            activeHour >= 6 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <p className="font-mono text-xs sm:text-sm uppercase tracking-[0.2em] text-[#A98B5A] font-semibold">
            VIVIR PENDIENTE TAMBIÉN ORGANIZA UNA VIDA
          </p>
          <p className="font-serif italic text-2xl sm:text-3xl md:text-4xl text-[#E7E0D3] leading-snug">
            «Y mientras tanto, la vida de los demás también siguió pasando.»
          </p>
          <p className="font-serif text-lg sm:text-xl text-[#A98B5A] font-light pt-2">
            ¿Cuándo ayudar empieza a convertirse en vivir alrededor del problema?
          </p>
        </div>

      </div>
    </section>
  );
}

// ── EXPERIENCIA 4: AYUDAR / PROTEGER / RESOLVER (TERRITORIOS QUE SE INVADEN) ──
function AyudarProtegerResolverSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [stage, setStage] = useState(0); // 0: invisible, 1: separados, 2: aproximación, 3: superposición/invasión, 4: conclusión
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    if (prefersReduced) {
      setStage(4);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && stage === 0) {
          setStage(1); // 0s: Los 3 conceptos separados con distancia
          const t1 = setTimeout(() => setStage(2), 1600); // 1.6s: Empiezan a aproximarse
          const t2 = setTimeout(() => setStage(3), 3200); // 3.2s: Se invaden y superponen
          const t3 = setTimeout(() => setStage(4), 4800); // 4.8s: Conclusión clínica
          observer.disconnect();
        }
      },
      { threshold: 0.35 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [stage, prefersReduced]);

  const isApproaching = stage >= 2;
  const isOverlapping = stage >= 3;
  const isConclusionVisible = stage >= 4;

  return (
    <section 
      ref={sectionRef} 
      className="relative py-20 sm:py-28 bg-[#131412] text-[#C8C4BB] border-y border-white/10 overflow-hidden"
    >
      <div className="max-w-5xl mx-auto px-6 sm:px-10 flex flex-col items-center">
        
        {/* ENCABEZADO */}
        <div 
          className={`text-center mb-8 sm:mb-12 transition-all duration-1000 ease-out ${
            stage >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
          }`}
        >
          <span className="font-mono text-xs sm:text-sm uppercase tracking-[0.25em] text-[#A98B5A] font-semibold block mb-2">
            TERRITORIOS QUE SE DESDIBUJAN
          </span>
          <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl text-[#F3EFE6] font-normal leading-tight">
            Ayudar, proteger, resolver por el otro.
          </h2>
        </div>

        {/* ── ESCENARIO EDITORIAL DESKTOP / TABLET ── */}
        <div className="hidden sm:flex relative w-full h-[360px] md:h-[400px] items-center justify-center select-none my-4">
          
          {/* AYUDAR */}
          <div 
            style={{ transitionDuration: '1800ms' }}
            className={`absolute font-serif font-bold text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-[#A98B5A] tracking-tight transition-all ease-out ${
              stage >= 1 ? 'opacity-90' : 'opacity-0'
            } ${
              isOverlapping 
                ? 'translate-x-0 scale-95 opacity-70 z-10' 
                : isApproaching 
                  ? '-translate-x-32 sm:-translate-x-44 scale-100 z-10' 
                  : '-translate-x-56 sm:-translate-x-72 scale-100 z-10'
            }`}
          >
            AYUDAR
          </div>

          {/* PROTEGER */}
          <div 
            style={{ transitionDuration: '1800ms' }}
            className={`absolute font-serif font-bold text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-[#7A7A5C] tracking-tight transition-all ease-out ${
              stage >= 1 ? 'opacity-90' : 'opacity-0'
            } ${
              isOverlapping 
                ? 'scale-105 opacity-80 z-20' 
                : 'scale-100 z-20'
            }`}
          >
            PROTEGER
          </div>

          {/* RESOLVER */}
          <div 
            style={{ transitionDuration: '1800ms' }}
            className={`absolute font-serif font-bold text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-[#E7E0D3] tracking-tight transition-all ease-out ${
              stage >= 1 ? 'opacity-90' : 'opacity-0'
            } ${
              isOverlapping 
                ? 'translate-x-0 scale-95 opacity-70 z-30' 
                : isApproaching 
                  ? 'translate-x-32 sm:translate-x-44 scale-100 z-30' 
                  : 'translate-x-56 sm:translate-x-72 scale-100 z-30'
            }`}
          >
            RESOLVER
          </div>

        </div>

        {/* ── ESCENARIO EDITORIAL MOBILE (390px) ── */}
        <div className="sm:hidden relative w-full min-h-[280px] flex flex-col items-center justify-center select-none py-6 space-y-4">
          <span 
            style={{ transitionDuration: '1200ms' }}
            className={`font-serif font-bold text-4xl text-[#A98B5A] transition-all ease-out ${
              stage >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
            } ${isOverlapping ? 'opacity-70 scale-90' : ''}`}
          >
            AYUDAR
          </span>
          <span 
            style={{ transitionDuration: '1200ms' }}
            className={`font-serif font-bold text-4xl text-[#7A7A5C] transition-all ease-out ${
              stage >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'
            } ${isOverlapping ? 'opacity-90 scale-105' : ''}`}
          >
            PROTEGER
          </span>
          <span 
            style={{ transitionDuration: '1200ms' }}
            className={`font-serif font-bold text-4xl text-[#E7E0D3] transition-all ease-out ${
              stage >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
            } ${isOverlapping ? 'opacity-70 scale-90' : ''}`}
          >
            RESOLVER
          </span>
        </div>

        {/* CONCLUSIÓN Y SIGNIFICADO */}
        <div 
          className={`text-center mt-8 sm:mt-12 max-w-2xl px-4 transition-all duration-1000 ease-out space-y-4 ${
            isConclusionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <p className="font-mono text-xs sm:text-sm uppercase tracking-[0.2em] text-[#A98B5A] font-semibold">
            LA FRONTERA SE VUELVE DIFUSA
          </p>
          <p className="font-serif italic text-2xl sm:text-3xl md:text-4xl text-[#F3EFE6] font-normal leading-snug">
            «NO SIEMPRE ES FÁCIL SABER DÓNDE ESTAMOS.»
          </p>
          <p className="text-base sm:text-lg text-[#9E9A90] font-light leading-relaxed max-w-xl mx-auto pt-2">
            Pagar una deuda urgente puede ser un acto de protección indispensable un día, pero convertirse en un mecanismo que perpetúa el consumo si se repite de manera automática durante meses.
          </p>
        </div>

      </div>
    </section>
  );
}

// ── EXPERIENCIA 5: EL FINAL — LA VIDA RECUPERA ESPACIO (SECUENCIA NARRATIVA AUTOMÁTICA) ──
function VidaRecuperaEspacioSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [stage, setStage] = useState(0); // 0: unobserved, 1: problema dominante, 2: la vida recupera terreno, 3: el problema se acota, 4: conclusión
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    if (prefersReduced) {
      setStage(4);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && stage === 0) {
          setStage(1); // 0s: El problema en el centro
          const t1 = setTimeout(() => setStage(2), 1600); // 1.6s: La vida reaparece
          const t2 = setTimeout(() => setStage(3), 3200); // 3.2s: El problema se empequeñece y se contiene
          const t3 = setTimeout(() => setStage(4), 4800); // 4.8s: Conclusión
          observer.disconnect();
        }
      },
      { threshold: 0.35 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [stage, prefersReduced]);

  const isVidaVisible = stage >= 2;
  const isProblemaAcotado = stage >= 3;
  const isConclusionVisible = stage >= 4;

  return (
    <section 
      ref={sectionRef} 
      className="relative py-20 sm:py-28 bg-[#141513] text-[#C8C4BB] border-y border-white/10 overflow-hidden"
    >
      <div className="max-w-5xl mx-auto px-6 sm:px-10 flex flex-col items-center">
        
        {/* TÍTULO INTRODUCTORIO */}
        <div 
          className={`text-center mb-8 sm:mb-12 transition-all duration-1000 ease-out ${
            stage >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
          }`}
        >
          <span className="font-mono text-xs sm:text-sm uppercase tracking-[0.25em] text-[#A98B5A] font-semibold block mb-2">
            RECUPERAR TERRITORIO
          </span>
          <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl text-[#F3EFE6] font-normal leading-tight">
            La vida vuelve a ocupar su lugar.
          </h2>
        </div>

        {/* ── ESCENARIO EDITORIAL DESKTOP / TABLET ── */}
        <div className="hidden sm:flex relative w-full h-[460px] md:h-[500px] items-center justify-center select-none my-4">
          
          {/* DORMIR */}
          <span 
            style={{ transitionDuration: '1800ms' }}
            className={`absolute top-[10%] left-[12%] font-serif text-3xl md:text-5xl text-[#E7E0D3] font-bold tracking-tight transition-all ease-out ${
              isVidaVisible ? 'opacity-95 scale-100 translate-y-0' : 'opacity-0 scale-75 translate-y-6'
            }`}
          >
            Dormir
          </span>

          {/* HACER PLANES */}
          <span 
            style={{ transitionDuration: '1800ms' }}
            className={`absolute top-[12%] right-[14%] font-serif text-3xl md:text-5xl text-[#E7E0D3] font-bold tracking-tight transition-all ease-out ${
              isVidaVisible ? 'opacity-95 scale-100 translate-y-0' : 'opacity-0 scale-75 translate-y-6'
            }`}
          >
            Hacer planes
          </span>

          {/* PAREJA */}
          <span 
            style={{ transitionDuration: '1800ms' }}
            className={`absolute top-[42%] right-[8%] font-serif text-3xl md:text-5xl text-[#E7E0D3] font-bold tracking-tight transition-all ease-out ${
              isVidaVisible ? 'opacity-95 scale-100 translate-x-0' : 'opacity-0 scale-75 translate-x-6'
            }`}
          >
            Pareja
          </span>

          {/* HERMANOS */}
          <span 
            style={{ transitionDuration: '1800ms' }}
            className={`absolute bottom-[18%] right-[12%] font-serif text-3xl md:text-5xl text-[#E7E0D3] font-bold tracking-tight transition-all ease-out ${
              isVidaVisible ? 'opacity-95 scale-100 translate-y-0' : 'opacity-0 scale-75 translate-y-6'
            }`}
          >
            Hermanos
          </span>

          {/* AMIGOS */}
          <span 
            style={{ transitionDuration: '1800ms' }}
            className={`absolute bottom-[10%] left-[32%] font-serif text-2xl md:text-4xl text-[#C8C4BB] font-normal tracking-tight transition-all ease-out ${
              isVidaVisible ? 'opacity-90 scale-100 translate-y-0' : 'opacity-0 scale-75 translate-y-6'
            }`}
          >
            Amigos
          </span>

          {/* CUIDARSE */}
          <span 
            style={{ transitionDuration: '1800ms' }}
            className={`absolute bottom-[20%] left-[10%] font-serif text-3xl md:text-5xl text-[#E7E0D3] font-bold tracking-tight transition-all ease-out ${
              isVidaVisible ? 'opacity-95 scale-100 translate-y-0' : 'opacity-0 scale-75 translate-y-6'
            }`}
          >
            Cuidarse
          </span>

          {/* UNO MISMO */}
          <span 
            style={{ transitionDuration: '1800ms' }}
            className={`absolute top-[38%] left-[8%] font-serif text-3xl md:text-5xl text-[#E7E0D3] font-bold tracking-tight transition-all ease-out ${
              isVidaVisible ? 'opacity-95 scale-100 translate-x-0' : 'opacity-0 scale-75 -translate-x-6'
            }`}
          >
            Uno mismo
          </span>

          {/* HABLAR DE OTRAS COSAS */}
          <span 
            style={{ transitionDuration: '1800ms' }}
            className={`absolute top-[6%] left-[36%] font-serif italic text-2xl md:text-4xl text-[#A98B5A] transition-all ease-out ${
              isVidaVisible ? 'opacity-90 scale-100' : 'opacity-0 scale-75'
            }`}
          >
            Hablar de otras cosas
          </span>

          {/* EL PROBLEMA: Comienza dominante en el centro y se transforma en una etiqueta contenida */}
          <div 
            style={{ transitionDuration: '1800ms' }}
            className={`absolute transition-all ease-out z-20 ${
              !isProblemaAcotado 
                ? 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-serif font-bold text-4xl sm:text-6xl text-[#A98B5A] scale-125' 
                : 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-mono text-xs sm:text-sm uppercase tracking-[0.25em] text-[#7A7A5C] border border-white/10 px-5 py-2.5 rounded-full bg-[#181917] scale-100'
            }`}
          >
            {isProblemaAcotado ? 'EL PROBLEMA' : 'el problema'}
          </div>

        </div>

        {/* ── ESCENARIO EDITORIAL MOBILE (390px) ── */}
        <div className="sm:hidden relative w-full min-h-[360px] flex flex-col items-center justify-center select-none py-6">
          <div 
            style={{ transitionDuration: '1600ms' }}
            className={`transition-all ease-out mb-6 ${
              !isProblemaAcotado 
                ? 'font-serif font-bold text-4xl text-[#A98B5A] scale-110' 
                : 'font-mono text-xs uppercase tracking-[0.25em] text-[#7A7A5C] border border-white/10 px-4 py-2 rounded-full bg-[#181917]'
            }`}
          >
            {isProblemaAcotado ? 'EL PROBLEMA' : 'el problema'}
          </div>

          <div 
            style={{ transitionDuration: '1400ms' }}
            className={`grid grid-cols-2 gap-4 text-center w-full px-4 transition-all ease-out ${
              isVidaVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <span className="font-serif text-xl text-[#E7E0D3]">Dormir</span>
            <span className="font-serif text-xl text-[#E7E0D3]">Hacer planes</span>
            <span className="font-serif text-xl text-[#E7E0D3]">Pareja</span>
            <span className="font-serif text-xl text-[#E7E0D3]">Hermanos</span>
            <span className="font-serif text-xl text-[#E7E0D3]">Cuidarse</span>
            <span className="font-serif text-xl text-[#E7E0D3]">Uno mismo</span>
            <span className="font-serif italic text-lg text-[#A98B5A] col-span-2 pt-2">
              Hablar de otras cosas
            </span>
          </div>
        </div>

        {/* CONCLUSIÓN Y SIGNIFICADO */}
        <div 
          className={`text-center mt-8 sm:mt-12 max-w-2xl px-4 transition-all duration-1000 ease-out space-y-3 ${
            isConclusionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <p className="font-mono text-xs sm:text-sm uppercase tracking-[0.2em] text-[#A98B5A] font-semibold">
            EL PROBLEMA SIGUE AHÍ. PERO YA NO ORGANIZA TODA LA VIDA.
          </p>
          <p className="font-serif italic text-2xl sm:text-3xl md:text-4xl text-[#F3EFE6] font-normal leading-snug">
            «La adicción puede seguir siendo un problema importante.<br className="hidden sm:inline" /> Pero ya no tiene por qué organizar cada aspecto de la vida familiar.»
          </p>
        </div>

      </div>
    </section>
  );
}

// ── EXPERIENCIA 5: PONER UN LÍMITE NO ES ABANDONAR (SECUENCIA NARRATIVA AUTOMÁTICA) ──
function PonerUnLimiteSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [stage, setStage] = useState(0); // 0: invisible, 1: el temor, 2: monumental afirmación, 3: las 4 frases, 4: significado
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    if (prefersReduced) {
      setStage(4);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && stage === 0) {
          setStage(1); // 0s: El temor («Pero si dejo de ayudar...»)
          const t1 = setTimeout(() => setStage(2), 1600); // 1.6s: PONER UN LÍMITE NO ES ABANDONAR
          const t2 = setTimeout(() => setStage(3), 3200); // 3.2s: Las 4 frases de delimitación
          const t3 = setTimeout(() => setStage(4), 5000); // 5.0s: Definición terapéutica
          observer.disconnect();
        }
      },
      { threshold: 0.35 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [stage, prefersReduced]);

  return (
    <section ref={sectionRef} className="py-24 sm:py-36 bg-[#10110F] border-t border-white/10 overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 sm:px-10 text-center">
        
        {/* PRIMERA PAUSA: EL TEMOR */}
        <p 
          style={{ transitionDuration: '1000ms' }}
          className={`font-serif italic text-2xl sm:text-3xl md:text-4xl text-[#9E9A90] font-light mb-12 sm:mb-16 transition-all ease-out ${
            stage >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
          }`}
        >
          «Pero si dejo de ayudar,<br className="sm:hidden" /> siento que lo abandono.»
        </p>

        {/* MONUMENTALIDAD TIPOGRÁFICA */}
        <h2 
          style={{ transitionDuration: '1200ms' }}
          className={`font-serif text-5xl sm:text-7xl md:text-8xl lg:text-[7.5rem] text-[#F3EFE6] font-bold leading-[0.98] tracking-tight mb-16 sm:mb-24 transition-all ease-out ${
            stage >= 2 ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          PONER UN LÍMITE<br />
          <span className="text-[#A98B5A]">NO ES ABANDONAR.</span>
        </h2>

        {/* LAS 4 FRASES EN CADENCIA SOLEMNE */}
        <div 
          style={{ transitionDuration: '1200ms' }}
          className={`max-w-2xl mx-auto space-y-10 sm:space-y-12 text-left border-y border-white/10 py-12 sm:py-16 mb-12 transition-all ease-out ${
            stage >= 3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <div className="space-y-1">
            <p className="font-serif italic text-2xl sm:text-3xl md:text-4xl text-[#E7E0D3]">
              «Esto puedo hacerlo.»
            </p>
            <p className="text-xs sm:text-sm font-mono text-[#A98B5A] uppercase tracking-wider">
              Lo que nace del cuidado genuino
            </p>
          </div>

          <div className="space-y-1">
            <p className="font-serif italic text-2xl sm:text-3xl md:text-4xl text-[#E7E0D3]">
              «Esto ya no puedo seguir haciéndolo.»
            </p>
            <p className="text-xs sm:text-sm font-mono text-[#A98B5A] uppercase tracking-wider">
              El reconocimiento sincero del propio límite
            </p>
          </div>

          <div className="space-y-1">
            <p className="font-serif italic text-2xl sm:text-3xl md:text-4xl text-[#E7E0D3]">
              «Esto necesito cuidar.»
            </p>
            <p className="text-xs sm:text-sm font-mono text-[#A98B5A] uppercase tracking-wider">
              El resguardo indispensable de la propia vida
            </p>
          </div>

          <div className="space-y-1">
            <p className="font-serif italic text-2xl sm:text-3xl md:text-4xl text-[#E7E0D3]">
              «Hasta acá puedo llegar yo.»
            </p>
            <p className="text-xs sm:text-sm font-mono text-[#A98B5A] uppercase tracking-wider">
              La distancia necesaria para que la ayuda no sea rescate permanente
            </p>
          </div>
        </div>

        {/* DEFINICIÓN TERAPÉUTICA */}
        <p 
          style={{ transitionDuration: '1000ms' }}
          className={`max-w-2xl mx-auto text-base sm:text-lg text-[#9E9A90] font-light leading-relaxed transition-all ease-out ${
            stage >= 4 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          Un límite terapéutico no se plantea como un castigo ni como una amenaza para obligar al otro a cambiar. Es la definición sincera de lo que una persona puede sostener y de lo que necesita resguardar para no derrumbarse también.
        </p>

      </div>
    </section>
  );
}

// ── EXPERIENCIA 8: SEDRONAR (ARQUITECTURA TIPOGRÁFICA MONUMENTAL) ──
function SedronarSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [stage, setStage] = useState(0); // 0: invisible, 1: intro, 2: cifras monumentales (40% vs 15%), 3: fuentes y notas
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    if (prefersReduced) {
      setStage(3);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && stage === 0) {
          setStage(1); // 0s: Encabezado
          const t1 = setTimeout(() => setStage(2), 1400); // 1.4s: 40% vs 15%
          const t2 = setTimeout(() => setStage(3), 3000); // 3.0s: Detalles y fuentes
          observer.disconnect();
        }
      },
      { threshold: 0.35 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [stage, prefersReduced]);

  return (
    <section ref={sectionRef} className="py-24 sm:py-36 border-t border-white/10 bg-[#121311] overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 sm:px-10">
        
        {/* INTRODUCCIÓN */}
        <div 
          style={{ transitionDuration: '1000ms' }}
          className={`transition-all ease-out ${
            stage >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
          }`}
        >
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#A98B5A] font-semibold block mb-4">
            DATOS OFICIALES DE SALUD PÚBLICA · ARGENTINA
          </span>
          <h3 className="font-serif text-3xl sm:text-5xl text-[#E7E0D3] font-bold leading-tight tracking-tight mb-6">
            Muchas veces, quien primero pide ayuda no es quien consume
          </h3>
          <p className="text-base sm:text-lg text-[#9E9A90] font-normal leading-relaxed max-w-2xl mb-16">
            El registro oficial de la Línea 141 refleja con nitidez que el entorno afectivo suele registrar el sufrimiento y movilizar la búsqueda de orientación mucho antes que el propio consumidor.
          </p>
        </div>

        {/* CIFRAS COMO ARQUITECTURA TIPOGRÁFICA MONUMENTAL */}
        <div 
          style={{ transitionDuration: '1200ms' }}
          className={`grid grid-cols-1 md:grid-cols-2 gap-12 sm:gap-16 py-12 border-y border-white/10 mb-8 transition-all ease-out ${
            stage >= 2 ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          {/* 40% FAMILIARES Y AMIGOS */}
          <div className="space-y-4">
            <span className="font-serif text-8xl sm:text-9xl md:text-[11rem] font-bold text-[#E7E0D3] leading-none tracking-tight block">
              40%
            </span>
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#A98B5A] font-bold block">
              FAMILIARES Y AMIGOS
            </span>
            <p className="text-base text-[#9E9A90] leading-relaxed">
              Consultas indirectas realizadas por personas cercanas que buscan contención y herramientas de acompañamiento.
            </p>
          </div>

          {/* 15% PERSONAS CONSUMIDORAS */}
          <div className="space-y-4">
            <span className="font-serif text-7xl sm:text-8xl md:text-[9rem] font-bold text-[#7A7A5C] leading-none tracking-tight block">
              15%
            </span>
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#7A7A5C] font-bold block">
              PERSONAS CONSUMIDORAS
            </span>
            <p className="text-base text-[#9E9A90] leading-relaxed">
              Llamadas directas iniciadas por quienes consumen solicitando orientación para sí mismos.
            </p>
          </div>
        </div>

        {/* FUENTES Y REFERENCIAS */}
        <div 
          style={{ transitionDuration: '1000ms' }}
          className={`flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs font-mono text-[#9E9A90]/80 transition-all ease-out ${
            stage >= 3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <span>Fuente: SEDRONAR · Línea 141 · enero-julio 2026 (más de 23.000 llamados en todo el país)</span>
          <span className="text-[11px] text-[#7A7A5C]">* 40% + 15% ≠ 100% debido a llamadas no efectivas (22%) y otras consultas (23%).</span>
        </div>

      </div>
    </section>
  );
}

// ── COMPONENTE PRINCIPAL ──
export default function ArticuloAdiccionesFamilia() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Cuando las adicciones terminan organizando la vida de toda una familia",
    "description": "Cómo una adicción puede modificar vínculos, decisiones y rutinas de toda una familia, y por qué la familia también puede pedir ayuda.",
    "image": "https://programaelfaro.com.ar/lecturas/adicciones-familia/adicciones-familia-silla-vacia-mar-del-plata.jpg",
    "author": {
      "@type": "Organization",
      "name": "Equipo Terapéutico El Faro Mar del Plata",
      "url": "https://programaelfaro.com.ar"
    },
    "publisher": {
      "@type": "Organization",
      "name": "El Faro Argentina",
      "logo": {
        "@type": "ImageObject",
        "url": "https://res.cloudinary.com/dwv5ehc6e/image/upload/f_auto,q_auto/v1779830147/mifaro/IMG-0990_mgVHpGR8.jpg"
      }
    },
    "datePublished": "2026-09-19",
    "dateModified": "2026-09-20",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://programaelfaro.com.ar/lecturas/cuando-las-adicciones-organizan-la-vida-familiar"
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Inicio",
        "item": "https://programaelfaro.com.ar"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Lecturas del Faro",
        "item": "https://programaelfaro.com.ar/lecturas"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Cuando las adicciones terminan organizando la vida de toda una familia",
        "item": "https://programaelfaro.com.ar/lecturas/cuando-las-adicciones-organizan-la-vida-familiar"
      }
    ]
  };

  return (
    <article className="min-h-screen bg-[#191A18] text-[#C8C4BB] selection:bg-[#A98B5A]/30 selection:text-white font-sans antialiased">
      <Head>
        <title>Adicciones y familia: cuando todo empieza a girar alrededor | El Faro</title>
        <meta 
          name="description" 
          content="Cómo una adicción puede modificar vínculos, decisiones y rutinas de toda una familia, y por qué la familia también puede pedir ayuda." 
        />
        <link rel="canonical" href="https://programaelfaro.com.ar/lecturas/cuando-las-adicciones-organizan-la-vida-familiar" />
        
        <style>{`
          @media (prefers-reduced-motion: reduce) {
            article *, article *::before, article *::after {
              animation-duration: 0.001ms !important;
              animation-iteration-count: 1 !important;
              transition-duration: 0.001ms !important;
            }
          }
        `}</style>
        
        {/* Open Graph */}
        <meta property="og:title" content="Adicciones y familia: cuando todo empieza a girar alrededor | El Faro" />
        <meta 
          property="og:description" 
          content="Cómo una adicción puede modificar vínculos, decisiones y rutinas de toda una familia, y por qué la familia también puede pedir ayuda." 
        />
        <meta property="og:url" content="https://programaelfaro.com.ar/lecturas/cuando-las-adicciones-organizan-la-vida-familiar" />
        <meta property="og:type" content="article" />
        <meta property="og:image" content="https://programaelfaro.com.ar/lecturas/adicciones-familia/adicciones-familia-silla-vacia-mar-del-plata.jpg" />
        <meta property="og:image:alt" content="Familia reunida alrededor de una mesa con una silla vacía, imagen editorial sobre adicciones y dinámicas familiares" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Adicciones y familia: cuando todo empieza a girar alrededor | El Faro" />
        <meta 
          name="twitter:description" 
          content="Cómo una adicción puede modificar vínculos, decisiones y rutinas de toda una familia, y por qué la familia también puede pedir ayuda." 
        />
        <meta name="twitter:image" content="https://programaelfaro.com.ar/lecturas/adicciones-familia/adicciones-familia-silla-vacia-mar-del-plata.jpg" />
        <link rel="preload" as="image" href="/lecturas/adicciones-familia/adicciones-familia-silla-vacia-mar-del-plata.webp" type="image/webp" fetchPriority="high" />
      </Head>

      <JsonLd data={articleSchema} />
      <JsonLd data={breadcrumbSchema} />

      {/* ── BARRA SUPERIOR DE RETORNO EDITORIAL ── */}
      <nav aria-label="Navegación editorial" className="border-b border-white/10 bg-[#191A18]/90 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 h-14 flex items-center justify-between">
          <Link 
            to="/lecturas" 
            className="inline-flex items-center gap-2.5 text-xs sm:text-sm font-sans tracking-wide text-[#9E9A90] hover:text-[#E7E0D3] transition-colors"
          >
            <ArrowLeft size={16} />
            <span>Volver a Lecturas del Faro</span>
          </Link>
          <span className="text-[11px] sm:text-xs font-mono uppercase tracking-[0.2em] text-[#7A7A5C] font-semibold">
            EL FARO · MAR DEL PLATA
          </span>
        </div>
      </nav>

      {/* ── HERO DOCUMENTAL CON LA SILLA VACÍA ── */}
      <header className="relative w-full overflow-hidden bg-[#191A18]">
        <div className="relative w-full min-h-[540px] sm:min-h-[640px] lg:min-h-[760px] flex flex-col justify-start sm:justify-center items-stretch sm:items-center">
          <picture className="absolute inset-0 w-full h-full">
            <source type="image/webp" srcSet="/lecturas/adicciones-familia/adicciones-familia-silla-vacia-mar-del-plata.webp" />
            <img 
              src="/lecturas/adicciones-familia/adicciones-familia-silla-vacia-mar-del-plata.jpg" 
              alt="Familia reunida alrededor de una mesa cotidiana donde permanece una silla vacía, imagen editorial sobre el impacto familiar del consumo"
              className="w-full h-full object-cover object-[55%_center]"
              loading="eager"
              decoding="async"
              fetchPriority="high"
              width="1672"
              height="941"
            />
          </picture>

          <div 
            className="absolute inset-0 pointer-events-none 
                       bg-[linear-gradient(180deg,rgba(25,26,24,0.92)_0%,rgba(25,26,24,0.55)_35%,rgba(25,26,24,0.25)_60%,rgba(25,26,24,0.85)_88%,#191A18_100%)]
                       sm:bg-[linear-gradient(90deg,rgba(25,26,24,0.96)_0%,rgba(25,26,24,0.88)_30%,rgba(25,26,24,0.50)_55%,rgba(25,26,24,0.15)_75%,transparent_90%)]" 
          />

          <div 
            className="absolute inset-x-0 bottom-0 h-32 sm:h-48 pointer-events-none 
                       bg-[linear-gradient(180deg,transparent_0%,rgba(25,26,24,0.7)_40%,#191A18_100%)]" 
          />

          <div className="relative z-10 max-w-7xl mx-auto w-full px-5 sm:px-8 md:px-12 lg:px-16 pt-20 pb-16 sm:py-24">
            <div className="max-w-xl lg:max-w-2xl">
              <span className="inline-block font-mono text-xs uppercase tracking-[0.25em] text-[#A98B5A] mb-4 font-semibold">
                LECTURAS DEL FARO · DINÁMICAS FAMILIARES
              </span>
              
              <p className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] leading-[1.12] text-[#F3EFE6] font-bold tracking-tight">
                Primero todos intentan ayudar a uno.<br className="hidden sm:inline" />
                {' '}Hasta que, casi sin darse cuenta,<br className="hidden sm:inline" />
                {' '}todos empiezan a vivir alrededor de lo que le pasa.
              </p>

              <p className="mt-6 font-serif italic text-lg sm:text-xl md:text-2xl text-[#D8D3C8] font-normal leading-relaxed">
                Una adicción puede empezar en una persona y terminar modificando los vínculos, las decisiones y la vida cotidiana de toda una familia.
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* ── CUERPO PRINCIPAL ── */}
      <main className="relative">
        
        {/* CABECERA EDITORIAL */}
        <section className="pt-16 sm:pt-24 pb-12 sm:pb-16 max-w-4xl mx-auto px-5 sm:px-8">
          <div className="flex flex-wrap items-center gap-3 text-xs font-mono uppercase tracking-[0.2em] mb-6">
            <span className="text-[#7A7A5C] font-semibold">EL FARO · MAR DEL PLATA</span>
            <span className="text-white/20">/</span>
            <span className="text-[#9E9A90] inline-flex items-center gap-1.5">
              <Clock size={13} className="text-[#A98B5A]" /> 8 min de lectura
            </span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] text-[#E7E0D3] font-bold leading-[1.08] tracking-tight">
            Cuando las adicciones terminan organizando la vida de toda una familia
          </h1>

          <div className="mt-10 pl-6 sm:pl-8 border-l-2 border-[#A98B5A]">
            <p className="font-serif italic text-xl sm:text-2xl md:text-[1.65rem] text-[#E7E0D3] font-normal leading-relaxed">
              La atención absorbida, el miedo silencioso y los límites que se corren. Cómo un problema que comienza en uno puede transformar el funcionamiento de todos, y por qué la familia también necesita un espacio terapéutico propio.
            </p>
          </div>
        </section>

        {/* ── APERTURA NARRATIVA ── */}
        <section className="py-12 sm:py-16 max-w-3xl mx-auto px-5 sm:px-8 text-[#C8C4BB] font-sans text-lg sm:text-xl font-normal leading-[1.85]">
          <p className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#E7E0D3] font-semibold leading-snug mb-10">
            Al principio puede parecer que el problema es de uno.
          </p>

          <div className="my-12 py-8 border-y border-white/10">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#A98B5A] font-semibold block mb-6">
              EL RECORRIDO DE QUIEN CONSUME
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-3 font-sans text-base sm:text-lg text-[#E7E0D3]/90">
              <p className="flex items-baseline gap-3"><span className="text-[#A98B5A] text-sm">―</span> Uno consume.</p>
              <p className="flex items-baseline gap-3"><span className="text-[#A98B5A] text-sm">―</span> Uno falta.</p>
              <p className="flex items-baseline gap-3"><span className="text-[#A98B5A] text-sm">―</span> Uno miente.</p>
              <p className="flex items-baseline gap-3"><span className="text-[#A98B5A] text-sm">―</span> Uno promete.</p>
              <p className="flex items-baseline gap-3"><span className="text-[#A98B5A] text-sm">―</span> Uno vuelve a consumir.</p>
              <p className="flex items-baseline gap-3"><span className="text-[#A98B5A] text-sm">―</span> Uno tiene una deuda.</p>
              <p className="flex items-baseline gap-3"><span className="text-[#A98B5A] text-sm">―</span> Uno llega tarde.</p>
              <p className="flex items-baseline gap-3"><span className="text-[#A98B5A] text-sm">―</span> Uno no llega.</p>
              <p className="flex items-baseline gap-3"><span className="text-[#A98B5A] text-sm">―</span> Uno dice que puede manejarlo.</p>
              <p className="flex items-baseline gap-3"><span className="text-[#A98B5A] text-sm">―</span> Uno se enoja cuando alguien pregunta.</p>
            </div>
          </div>

          <p className="mb-10">
            Pero alrededor de esa persona empiezan a pasar otras cosas.
          </p>

          <div className="my-12 py-8 border-b border-white/10">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#7A7A5C] font-semibold block mb-6">
              LO QUE EMPIEZA A PASAR ALREDEDOR
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-3 font-sans text-base sm:text-lg text-[#E7E0D3]/90">
              <p className="flex items-baseline gap-3"><span className="text-[#7A7A5C] text-sm">―</span> Alguien duerme con el teléfono cerca por si llama.</p>
              <p className="flex items-baseline gap-3"><span className="text-[#7A7A5C] text-sm">―</span> Alguien aprende a reconocer por la voz cómo viene.</p>
              <p className="flex items-baseline gap-3"><span className="text-[#7A7A5C] text-sm">―</span> Alguien esconde dinero.</p>
              <p className="flex items-baseline gap-3"><span className="text-[#7A7A5C] text-sm">―</span> Otro presta.</p>
              <p className="flex items-baseline gap-3"><span className="text-[#7A7A5C] text-sm">―</span> Uno pregunta demasiado.</p>
              <p className="flex items-baseline gap-3"><span className="text-[#7A7A5C] text-sm">―</span> Otro decide no preguntar más.</p>
              <p className="flex items-baseline gap-3"><span className="text-[#7A7A5C] text-sm">―</span> Alguien cubre una ausencia.</p>
              <p className="flex items-baseline gap-3"><span className="text-[#7A7A5C] text-sm">―</span> Alguien inventa una explicación.</p>
              <p className="flex items-baseline gap-3"><span className="text-[#7A7A5C] text-sm">―</span> Alguien amenaza con irse.</p>
              <p className="flex items-baseline gap-3"><span className="text-[#7A7A5C] text-sm">―</span> Después se queda.</p>
            </div>
          </div>

          <p className="mb-12">
            Y, casi sin darse cuenta, una familia que tenía sus propios horarios, preocupaciones, proyectos y conflictos empieza a organizar una parte cada vez mayor de su vida alrededor de lo mismo.
          </p>

          <div className="my-16 py-10 border-y border-white/10">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#A98B5A] font-semibold block mb-8">
              LA INCERTIDUMBRE CONSTANTE
            </span>
            <div className="flex flex-wrap items-baseline gap-x-6 gap-y-4 font-serif italic text-xl sm:text-2xl md:text-3xl text-[#E7E0D3]/90 leading-relaxed">
              <span>¿Consumió?</span>
              <span className="text-[#9E9A90]/60">·</span>
              <span>¿Dónde está?</span>
              <span className="text-[#9E9A90]/60">·</span>
              <span>¿Con quién?</span>
              <span className="text-[#9E9A90]/60">·</span>
              <span>¿Cuánto?</span>
              <span className="text-[#9E9A90]/60">·</span>
              <span>¿Va a volver?</span>
              <span className="text-[#9E9A90]/60">·</span>
              <span>¿Le damos plata?</span>
              <span className="text-[#9E9A90]/60">·</span>
              <span>¿Se la sacamos?</span>
              <span className="text-[#9E9A90]/60">·</span>
              <span>¿Hablamos?</span>
              <span className="text-[#9E9A90]/60">·</span>
              <span>¿Esperamos?</span>
              <span className="text-[#9E9A90]/60">·</span>
              <span>¿Lo enfrentamos?</span>
              <span className="text-[#9E9A90]/60">·</span>
              <span className="text-[#A98B5A] font-medium">¿Vamos a buscarlo?</span>
            </div>
          </div>

          <div className="pt-4 pl-6 sm:pl-8 border-l-2 border-[#A98B5A]">
            <p className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#E7E0D3] font-semibold leading-snug">
              La adicción sigue siendo de una persona.<br />
              <span className="font-normal italic text-[#C8C4BB]">Pero hace tiempo que ya no le está pasando solamente a ella.</span>
            </p>
          </div>
        </section>

        {/* ── 1. PRIMERA EXPERIENCIA: "TODO TENÍA SU LUGAR" (EL ESPACIO QUE OCUPA) ── */}
        <EspacioQueOcupaSection />

        {/* ── SECCIÓN: MIRADA SISTÉMICA ── */}
        <section className="py-20 sm:py-28 max-w-3xl mx-auto px-5 sm:px-8 text-[#C8C4BB] font-sans text-lg sm:text-xl font-normal leading-[1.85]">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#E7E0D3] font-bold leading-tight tracking-tight mb-8">
            Cuando lo que le pasa a uno empieza a pasar entre todos
          </h2>

          <div className="pl-6 sm:pl-8 border-l-2 border-[#7A7A5C] space-y-6 text-[#E7E0D3]/90">
            <p>
              Eso no significa que la familia sea responsable de la adicción, ni que toda la explicación esté en quien consume. Tampoco existe una única manera ‘correcta’ de comprender lo que está pasando antes de decidir cómo actuar.
            </p>
            <p>
              A veces, un problema que aparentemente pertenece a uno empieza a modificar el funcionamiento de todos.
            </p>
            <p>
              Y otras veces, algo que atraviesa a todos encuentra en uno de sus miembros el lugar donde hacerse más visible.
            </p>
          </div>

          <p className="mt-10 font-serif italic text-2xl sm:text-3xl text-[#E7E0D3] leading-snug">
            No para buscar culpables.<br />
            <span className="text-[#A98B5A]">Para poder mirar una escena más completa.</span>
          </p>
        </section>

        {/* ── 2. SEGUNDA EXPERIENCIA: "UNA PERSONA NO ES SU SÍNTOMA" ── */}
        <PersonaNoEsSintomaSection />

        {/* ── 3. TERCERA EXPERIENCIA: LA NOCHE (CINEMATOGRÁFICA) ── */}
        <NocheCinematograficaSection />

        {/* ── 4. CUARTA EXPERIENCIA: AYUDAR / PROTEGER / RESOLVER ── */}
        <AyudarProtegerResolverSection />

        {/* ── 5. QUINTA EXPERIENCIA: PONER UN LÍMITE NO ES ABANDONAR ── */}
        <PonerUnLimiteSection />

        {/* ── 6. SEXTA EXPERIENCIA: FOTOGRAFÍA FULL-BLEED (CUANDO LOS DEMÁS DESAPARECEN) ── */}
        <section className="py-24 sm:py-36 bg-[#121311]">
          <div className="max-w-6xl mx-auto px-5 sm:px-8 mb-12">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#7A7A5C] font-semibold block mb-3">
              DINÁMICAS FAMILIARES
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#E7E0D3] font-bold leading-tight tracking-tight">
              Cuando todos miran a uno, los demás pueden empezar a desaparecer
            </h2>
          </div>

          {/* Fotografía full-bleed con palabras que pierden presencia */}
          <div className="relative w-full max-w-[92vw] lg:max-w-[88vw] mx-auto aspect-[16/10] sm:aspect-[21/10] rounded-2xl overflow-hidden shadow-2xl">
            <picture className="w-full h-full">
              <source type="image/webp" srcSet="/lecturas/adicciones-familia/adicciones-familia-los-demas-desaparecen.webp" />
              <img 
                src="/lecturas/adicciones-familia/adicciones-familia-los-demas-desaparecen.jpg" 
                alt="Escena cotidiana en el hogar donde la atención y el desgaste familiar se concentran en el conflicto"
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </picture>

            <div className="absolute inset-0 bg-gradient-to-t from-[#141513]/95 via-[#141513]/40 to-transparent p-6 sm:p-12 flex flex-col justify-end">
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#A98B5A] font-semibold mb-4">
                DIMENSIONES QUE SUELEN QUEDAR POSTERGADAS
              </span>
              <div className="flex flex-wrap items-baseline gap-x-8 gap-y-3 font-serif text-lg sm:text-2xl md:text-3xl text-[#E7E0D3]">
                <span className="opacity-70">LA PAREJA</span>
                <span className="opacity-50">LOS HERMANOS</span>
                <span className="opacity-40">EL DESCANSO</span>
                <span className="opacity-30">LOS PROYECTOS</span>
                <span className="opacity-25">LOS AMIGOS</span>
                <span className="opacity-20 text-[#A98B5A]">UNO MISMO</span>
              </div>
            </div>
          </div>

          <div className="max-w-3xl mx-auto px-6 pt-12">
            <p className="font-serif italic text-2xl sm:text-3xl text-[#E7E0D3] leading-relaxed border-l-2 border-[#A98B5A] pl-6">
              «Cuidar a quien atraviesa una adicción no debería exigir que todos los demás dejen de cuidarse.»
            </p>
          </div>
        </section>

        {/* ── 7. LAS VOCES DEL FARO (CARLOS Y MARÍA CON GRAN ESPACIO) ── */}
        <section className="py-24 sm:py-36 border-t border-white/10 bg-[#161715]">
          
          {/* Carlos y Lucía */}
          <div className="mb-24 sm:mb-36">
            <div className="max-w-6xl mx-auto px-5 sm:px-8 mb-12">
              <div className="flex flex-wrap items-center justify-between gap-4 text-xs sm:text-sm font-mono uppercase tracking-[0.25em] pb-6 border-b border-white/10 mb-8 sm:mb-10">
                <span className="text-[#A98B5A] font-semibold">LAS VOCES DEL FARO · MAR DEL PLATA</span>
                <span className="text-[#9E9A90]">TESTIMONIO FAMILIAR</span>
              </div>

              <h3 className="font-serif italic text-3xl sm:text-4xl md:text-5xl lg:text-6xl 2xl:text-[3.75rem] text-[#F3EFE6] font-normal leading-tight tracking-tight">
                «Lucía me ayudó a trabajar sobre mí, a sanar mis heridas, a ver mi propia historia. Lucía me ayudó tanto.»
              </h3>
            </div>

            {/* Fotografía full-bleed de Carlos con el mismo tratamiento visual de la mujer */}
            <div className="relative w-full max-w-[92vw] lg:max-w-[88vw] mx-auto aspect-[16/10] sm:aspect-[21/10] rounded-2xl overflow-hidden shadow-2xl">
              <picture className="w-full h-full">
                <source type="image/webp" srcSet="/voces/carlos/carlos-05-mirarse-identidad.webp" />
                <img 
                  src="/voces/carlos/carlos-05-mirarse-identidad.jpg" 
                  alt="Carlos en Mar del Plata, testimonio sobre el acompañamiento terapéutico familiar"
                  className="w-full h-full object-cover object-[center_35%]"
                  loading="lazy"
                  decoding="async"
                />
              </picture>

              <div className="absolute inset-0 bg-gradient-to-t from-[#161715]/95 via-[#161715]/40 to-transparent pointer-events-none" />
            </div>

            {/* Texto narrativo y enlace */}
            <div className="max-w-3xl mx-auto px-6 pt-12 space-y-6">
              <p className="text-base sm:text-lg text-[#C8C4BB] font-light leading-relaxed">
                Carlos comenzó acercándose a El Faro con una única pregunta: qué podía hacer para salvar a su hija Lucía. En el proceso terapéutico descubrió que acompañar no consistía en fiscalizar cada movimiento, sino en mirarse con honestidad, revisar sus propias heridas y construir un vínculo donde el afecto no estuviera condicionado por el control.
              </p>

              <div className="pt-2">
                <Link 
                  to="/voces/carlos-hija-adicciones-mar-del-plata" 
                  className="inline-flex items-center gap-2 text-sm sm:text-base font-sans font-semibold text-[#A98B5A] hover:text-[#E7E0D3] transition-colors group"
                >
                  <span>Leer la historia completa de Carlos y Lucía</span>
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>

          {/* María y Lucas */}
          <div className="w-full max-w-[92vw] lg:max-w-[88vw] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="pt-24 sm:pt-32 border-t border-white/10 space-y-10">
              <div className="flex flex-wrap items-center justify-between gap-4 text-xs sm:text-sm font-mono uppercase tracking-[0.25em] pb-6 border-b border-white/10">
                <span className="text-[#9E9A90] font-semibold">VOCES DEL FARO · PERSPECTIVA MATERNA</span>
                <span className="text-[#A98B5A]">LA FAMILIA PUEDE EMPEZAR ANTES</span>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 xl:gap-20 items-start pt-4">
                <div className="lg:col-span-7 xl:col-span-7">
                  <h3 className="font-serif italic text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-[#F3EFE6] font-normal leading-[1.15] tracking-tight">
                    «Lo que antes funcionaba ya no alcanzaba.»
                  </h3>
                </div>

                <div className="lg:col-span-5 xl:col-span-5 flex flex-col justify-between space-y-8 py-2">
                  <p className="text-lg sm:text-xl lg:text-xl xl:text-2xl font-light text-[#D1CCC2] leading-[1.8]">
                    María llegó a consulta antes de que su hijo Lucas estuviera dispuesto a dar el paso. Entendió que la familia no tiene por qué quedarse paralizada esperando el acuerdo mutuo: empezar a conversar y recibir orientación permitió desarmar la soledad y establecer nuevas pautas de convivencia.
                  </p>

                  <div className="pt-6 border-t border-white/10">
                    <Link 
                      to="/voces/maria-hijo-adicciones-mar-del-plata" 
                      className="inline-flex items-center gap-3 text-base sm:text-lg lg:text-xl font-sans font-semibold text-[#A98B5A] hover:text-[#F3EFE6] transition-colors group"
                    >
                      <span>Conocer el testimonio de María</span>
                      <ArrowRight size={20} className="transition-transform group-hover:translate-x-1.5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* ── ¿Y SI QUIEN CONSUME NO QUIERE PEDIR AYUDA? ── */}
        <section className="py-20 sm:py-28 max-w-3xl mx-auto px-5 sm:px-8 text-[#C8C4BB] font-sans text-lg sm:text-xl font-normal leading-[1.85]">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#E7E0D3] font-bold leading-tight tracking-tight mb-8">
            ¿Y si quien consume no quiere pedir ayuda?
          </h2>

          <p className="mb-6">
            Una de las dudas más paralizantes en padres, parejas o hermanos es suponer que, si quien atraviesa la adicción no reconoce el problema, nada puede hacerse.
          </p>
          <p className="mb-8">
            La familia no necesariamente tiene que esperar a que el otro acepte iniciar un tratamiento. Puede consultar por lo que está viviendo ella misma:
          </p>

          <div className="space-y-4 border-l-2 border-[#A98B5A] pl-6 sm:pl-8 mb-10 text-[#E7E0D3]/90">
            <p>― Comprender mejor la naturaleza y los tiempos de los consumos problemáticos.</p>
            <p>― Revisar las respuestas automáticas que generan mayor desgaste o confrontación.</p>
            <p>― Pensar y sostener límites claros sin culpa ni desborde emocional.</p>
            <p>― Recuperar espacios propios de descanso, trabajo y vínculos personales.</p>
            <p>― Encontrar otras maneras de relacionarse con lo que ocurre sin quedar atrapados en la impotencia.</p>
          </div>

          <p className="text-sm sm:text-base text-[#9E9A90] italic">
            Este espacio no se concibe como una estrategia encubierta para forzar al otro a tratarse, sino como un dispositivo legítimo de cuidado y salud mental para quienes conviven con el problema.
          </p>
        </section>

        {/* ── 8. SEDRONAR: ARQUITECTURA TIPOGRÁFICA MONUMENTAL ── */}
        <SedronarSection />

        {/* ── RESPALDO ARGENTINO Y LEY 26.934 ── */}
        <section className="py-16 sm:py-24 max-w-3xl mx-auto px-5 sm:px-8 text-[#C8C4BB] font-sans text-lg sm:text-xl font-normal leading-[1.85]">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#E7E0D3] font-bold leading-tight tracking-tight mb-8">
            El marco legal y comunitario en Argentina
          </h2>
          <p className="mb-6">
            En la República Argentina, el marco legislativo reconoce explícitamente esta mirada integral. La <strong className="text-[#E7E0D3] font-semibold">Ley 26.934</strong> (Plan Integral para el Abordaje de los Consumos Problemáticos - IACOP) concibe los consumos no como una falta individual o penalizable, sino como una problemática de salud integral que debe ser atendida contemplando a la persona, su familia y su entorno comunitario.
          </p>
          <p>
            Este enfoque promueve el respeto a la autonomía, la singularidad de cada proceso y la erradicación de toda forma de estigmatización, principios que fundamentan el trabajo cotidiano en nuestra institución.
          </p>
        </section>

        {/* ── 9. EL FINAL: LA VIDA RECUPERA ESPACIO (PAYOFF VISUAL) ── */}
        <VidaRecuperaEspacioSection />

        {/* ── CIERRE EDITORIAL ── */}
        <section className="py-20 sm:py-28 max-w-3xl mx-auto px-5 sm:px-8 text-[#C8C4BB] font-sans text-lg sm:text-xl font-normal leading-[1.85]">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#E7E0D3] font-bold leading-tight tracking-tight mb-8">
            No hace falta esperar a que todos estén de acuerdo
          </h2>

          <p className="mb-4">
            Quizás la persona que te preocupa todavía no reconoce lo que está pasando.
          </p>
          <p className="mb-4">
            Quizás lo reconoce pero no quiere pedir ayuda.
          </p>
          <p className="mb-6">
            Quizás ni siquiera ustedes, como familia, coinciden en qué está ocurriendo.
          </p>
          <p className="mb-6">
            No es necesario resolver todo eso antes de una <Link to="/contacto" className="text-[#A98B5A] hover:text-[#E7E0D3] underline underline-offset-4 decoration-[#A98B5A]/40 transition-colors">primera entrevista</Link>.
          </p>
          <p className="mb-10">
            Se puede empezar por algo mucho más sencillo: <strong className="text-[#E7E0D3] font-semibold">entender qué está pasando hoy</strong>.
          </p>

          <div className="my-10 py-8 border-y border-white/10 space-y-3 font-mono text-sm sm:text-base text-[#D1CCC2]">
            <p>· Qué está haciendo cada uno.</p>
            <p>· Qué está funcionando.</p>
            <p>· Qué dejó de funcionar.</p>
            <p>· Qué se volvió insoportable.</p>
            <p>· Qué se puede modificar.</p>
            <p>· Y qué necesita tiempo.</p>
          </div>

          <div className="space-y-6 pt-4 border-l-2 border-[#A98B5A] pl-6 sm:pl-8">
            <p>
              Pedir ayuda para vos o para tu familia no significa abandonar a quien consume.
            </p>
            <p>
              Tampoco significa aceptar lo que está ocurriendo.
            </p>
            <p>
              Puede ser el primer lugar desde el cual dejar de reaccionar únicamente a la próxima crisis y empezar a recuperar decisiones propias.
            </p>
            <p className="font-serif italic text-2xl sm:text-3xl text-[#E7E0D3] leading-snug">
              Porque cuando las adicciones terminan organizando la vida de toda una familia, la familia también necesita un lugar donde volver a mirarse.
            </p>
          </div>
        </section>

        {/* ── CTA EDITORIAL INTEGRADO ── */}
        <section className="py-16 sm:py-24 border-t border-white/10 bg-[#171816]">
          <div className="max-w-4xl mx-auto px-5 sm:px-8">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              variants={fadeUp}
              className="p-8 sm:p-12 rounded-3xl bg-[#1F201C] text-[#E7E0D3] border border-white/15 space-y-8 shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-80 h-80 bg-[radial-gradient(circle_at_top_right,rgba(169,139,90,0.08),transparent_70%)] pointer-events-none" />

              <div className="relative z-10 space-y-3">
                <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#A98B5A] font-semibold block">
                  EL FARO · PRIMERA ENTREVISTA
                </span>
                <h3 className="font-serif text-3xl sm:text-4xl text-[#E7E0D3] font-bold leading-tight">
                  Podemos empezar por entender qué está pasando.
                </h3>
                <p className="text-[#9E9A90] text-base sm:text-lg font-light leading-relaxed">
                  Podés escribirnos o llamarnos para coordinar una primera entrevista en nuestra sede de Mar del Plata (Garay 2073). Si querés hablar de lo que te está pasando, podés escribirnos. Brindamos un espacio de escucha sereno para que la familia pueda poner en palabras la situación y pensar alternativas posibles.
                </p>
              </div>

              <div className="relative z-10 pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <Link
                  to="/contacto"
                  onClick={() => trackCtaClick('articulo_adicciones_familia', 'Pedir una primera entrevista', '/contacto')}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#A98B5A] hover:bg-[#967B4E] text-[#191A18] font-bold text-sm transition-colors shadow-sm"
                >
                  <span>Pedir una primera entrevista</span>
                  <ArrowRight size={16} />
                </Link>

                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackWhatsAppClick('articulo_adicciones_familia', WHATSAPP_URL)}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-white/20 hover:border-white/40 text-[#E7E0D3] hover:text-white font-medium text-sm transition-colors"
                >
                  <MessageSquare size={16} />
                  <span>Escribir por WhatsApp</span>
                </a>
              </div>

              <div className="relative z-10 pt-6 border-t border-white/10 text-xs font-mono text-[#9E9A90]/80 flex flex-wrap items-center justify-between gap-3">
                <span>El Faro · Garay 2073, Mar del Plata</span>
                <span>Tel: (0223) 492-1953</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── FUENTES Y REFERENCIAS ── */}
        <section className="py-12 border-t border-white/10 max-w-4xl mx-auto px-5 sm:px-8 text-xs text-[#9E9A90]">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#7A7A5C] block mb-4 font-semibold">
            FUENTES Y REFERENCIAS
          </span>
          <ul className="space-y-2 font-light">
            <li>
              · <strong className="font-normal text-[#C8C4BB]">Ley 26.934</strong>: Plan Integral para el Abordaje de los Consumos Problemáticos (IACOP), República Argentina.
            </li>
            <li>
              · <strong className="font-normal text-[#C8C4BB]">SEDRONAR · Línea 141</strong>: Registro estadístico nacional de atención telefónica sobre consumos problemáticos (período enero–julio 2026).
            </li>
            <li>
              · <strong className="font-normal text-[#C8C4BB]">Las Voces del Faro</strong>: Testimonios de pacientes y familiares atendidos en la sede Mar del Plata de El Faro.
            </li>
          </ul>
        </section>

        {/* ── ENLACES DE RETORNO Y NAVEGACIÓN EDITORIAL ── */}
        <footer className="py-12 border-t border-white/10 max-w-4xl mx-auto px-5 sm:px-8 space-y-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs font-sans text-[#9E9A90]">
            <span className="uppercase tracking-[0.25em] text-[#7A7A5C] font-mono text-xs font-semibold">
              VOCES VINCULADAS
            </span>
            <div className="flex flex-wrap items-center gap-5">
              <Link 
                to="/voces/carlos-hija-adicciones-mar-del-plata" 
                className="text-[#C8C4BB] hover:text-[#A98B5A] transition-colors inline-flex items-center gap-1.5"
              >
                <span>Carlos y Lucía</span>
                <ArrowRight size={12} />
              </Link>
              <span className="text-white/20">/</span>
              <Link 
                to="/voces/maria-hijo-adicciones-mar-del-plata" 
                className="text-[#C8C4BB] hover:text-[#A98B5A] transition-colors inline-flex items-center gap-1.5"
              >
                <span>María y Lucas</span>
                <ArrowRight size={12} />
              </Link>
            </div>
          </div>

          <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <Link 
              to="/lecturas" 
              className="inline-flex items-center gap-2 text-sm font-sans text-[#E7E0D3] hover:text-[#A98B5A] transition-colors font-semibold"
            >
              <ArrowLeft size={16} />
              <span>Ver todas las Lecturas del Faro</span>
            </Link>

            <div className="flex flex-wrap items-center gap-4 text-sm font-sans">
              <Link 
                to="/lecturas/como-saber-cuando-un-consumo-se-volvio-problematico" 
                className="text-[#9E9A90] hover:text-[#E7E0D3] transition-colors"
              >
                Lectura 01: ¿Cuándo es problemático?
              </Link>
              <span className="text-white/20 hidden sm:inline">·</span>
              <Link 
                to="/adicciones-mar-del-plata" 
                className="text-[#7A7A5C] hover:text-[#E7E0D3] transition-colors inline-flex items-center gap-1"
              >
                <span>Tratamiento en Mar del Plata</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </footer>
      </main>
    </article>
  );
}
