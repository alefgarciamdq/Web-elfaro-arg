import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  MessageCircle, 
  ChevronDown, 
  Heart, 
  Users, 
  Brain, 
  Sparkles, 
  ShieldCheck, 
  Compass
} from 'lucide-react';
import { Head } from 'vite-react-ssg';
import JsonLd from './JsonLd';
import { trackWhatsAppClick } from '../utils/telemetry';

const WHATSAPP_URL = 'https://wa.me/5492235923790?text=Hola,%20quisiera%20hacer%20una%20consulta%20en%20El%20Faro.';
const PHONE_DISPLAY = '+54 223 492 1953';
const WHATSAPP_DISPLAY = '+54 9 223 592 3790';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "¿Necesito tener un diagnóstico para consultar?",
    answer: "No. En El Faro no trabajamos a partir de etiquetas previas ni es necesario que llegues con un diagnóstico psiquiátrico o un rótulo clínico. La primera consulta sirve precisamente para poner palabras a lo que estás viviendo, entender el malestar en tu contexto de vida y pensar juntos qué tipo de acompañamiento necesitás."
  },
  {
    question: "¿Cómo es una primera entrevista?",
    answer: "Es una conversación tranquila y cuidada, sin apuros y sin juicios. Nos encontramos para escucharte, conocer qué te trae a consultar y ordenar qué está pasando. No es un examen ni implica un compromiso forzado; al finalizar la entrevista, pensamos qué dispositivo o espacio terapéutico tiene más sentido para tu situación."
  },
  {
    question: "¿El Faro trabaja solamente con adicciones?",
    answer: "No. Si bien contamos con más de 30 años de experiencia comunitaria en consumos problemáticos, El Faro es un centro interdisciplinario de salud mental y psicoterapia. Acompañamos a personas que atraviesan ansiedad, angustia, crisis vitales, duelos, dificultades vinculares o situaciones de sobreexigencia y agotamiento emocional."
  },
  {
    question: "¿Hay espacios de psicoterapia individual?",
    answer: "Sí. Brindamos procesos de psicoterapia individual orientados a revisar la propia historia, comprender el sufrimiento actual y construir herramientas personales duraderas. Cada proceso se acuerda con el terapeuta según el ritmo y las necesidades singulares de cada consultante."
  },
  {
    question: "¿Trabajan también con familias y parejas?",
    answer: "Sí. Muchas veces el malestar se manifiesta o repercute en la convivencia, en la pareja o en los vínculos con hijos y adolescentes. Ofrecemos espacios de terapia familiar y orientación vincular para destrabar circuitos de reproche, fijar límites sanos y restablecer la comunicación."
  },
  {
    question: "¿Puedo consultar aunque siga trabajando y haciendo mi vida normalmente?",
    answer: "Por supuesto. Gran parte de las personas que nos consultan continúan cumpliendo con sus responsabilidades laborales, académicas o familiares todos los días. Poder seguir adelante no significa que no te esté costando demasiado. La consulta temprana evita que el desgaste silencioso se vuelva más pesado."
  }
];

export default function PsicologoMarDelPlata() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
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
        "name": "Psicología en Mar del Plata",
        "item": "https://programaelfaro.com.ar/psicologo-mar-del-plata"
      }
    ]
  };

  const medicalWebPageSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    "name": "Psicólogo en Mar del Plata | Psicoterapia y salud mental | El Faro",
    "description": "Atención psicológica, psicoterapia individual, familiar y grupal en Mar del Plata. Un espacio profesional y humano cuando la vida sigue pero cuesta sostenerla solo.",
    "url": "https://programaelfaro.com.ar/psicologo-mar-del-plata",
    "publisher": {
      "@type": "Organization",
      "name": "El Faro Argentina",
      "url": "https://programaelfaro.com.ar",
      "logo": {
        "@type": "ImageObject",
        "url": "https://res.cloudinary.com/dwv5ehc6e/image/upload/f_auto,q_auto/v1779830147/mifaro/IMG-0990_mgVHpGR8.jpg"
      }
    }
  };

  const medicalBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "name": "El Faro Argentina · Espacio de Psicoterapia y Salud Mental",
    "legalName": "Asociación Civil Arco Baleno",
    "url": "https://programaelfaro.com.ar/psicologo-mar-del-plata",
    "telephone": "+54 223 4921953",
    "image": "https://res.cloudinary.com/dwv5ehc6e/image/upload/f_auto,q_auto/v1779830147/mifaro/IMG-0990_mgVHpGR8.jpg",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Garay 2073",
      "addressLocality": "Mar del Plata",
      "addressRegion": "Provincia de Buenos Aires",
      "addressCountry": "AR"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <div className="bg-[#141915] text-[#C8C4BA] font-sans selection:bg-[#C2A675]/30 selection:text-[#F6F2EA] min-h-screen">
      <Head>
        <title>Psicólogo en Mar del Plata | Psicoterapia y salud mental | El Faro</title>
        <meta 
          name="description" 
          content="Atención psicológica, psicoterapia individual, familiar y grupal en Mar del Plata. Un espacio profesional y humano cuando la vida sigue pero cuesta sostenerla solo." 
        />
        <link rel="canonical" href="https://programaelfaro.com.ar/psicologo-mar-del-plata" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Psicólogo en Mar del Plata | Psicoterapia y salud mental | El Faro" />
        <meta 
          property="og:description" 
          content="Atención psicológica, psicoterapia individual, familiar y grupal en Mar del Plata. Un espacio profesional y humano cuando la vida sigue pero cuesta sostenerla solo." 
        />
        <meta property="og:url" content="https://programaelfaro.com.ar/psicologo-mar-del-plata" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://res.cloudinary.com/dwv5ehc6e/image/upload/f_auto,q_auto/v1779830079/mifaro/Psicologo-valencia_Dz99zD14.jpg" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Psicólogo en Mar del Plata | Psicoterapia y salud mental | El Faro" />
        <meta 
          name="twitter:description" 
          content="Atención psicológica, psicoterapia individual, familiar y grupal en Mar del Plata. Un espacio profesional y humano cuando la vida sigue pero cuesta sostenerla solo." 
        />
        <meta name="twitter:image" content="https://res.cloudinary.com/dwv5ehc6e/image/upload/f_auto,q_auto/v1779830079/mifaro/Psicologo-valencia_Dz99zD14.jpg" />
      </Head>

      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={medicalWebPageSchema} />
      <JsonLd data={medicalBusinessSchema} />
      <JsonLd data={faqSchema} />

      {/* ── 1. HERO FOTOGRÁFICO COMPLETO ── */}
      <section className="relative min-h-[85vh] lg:min-h-[92vh] flex items-center overflow-hidden bg-[#141915]">
        {/* Fotografía de fondo a pantalla completa */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://res.cloudinary.com/dwv5ehc6e/image/upload/f_auto,q_auto/v1779830079/mifaro/Psicologo-valencia_Dz99zD14.jpg" 
            alt="Espacio de psicoterapia y atención psicológica en Mar del Plata" 
            width={1600}
            height={900}
            className="w-full h-full object-cover object-[center_35%] lg:object-[center_28%] opacity-55 lg:opacity-50 filter contrast-[1.02]"
            fetchPriority="high"
            decoding="async"
          />
          {/* Overlays de integración profunda: Fotografía → Oscuridad → Página */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#141915] via-[#141915]/90 to-[#141915]/40 lg:from-[#141915] lg:via-[#141915]/85 lg:to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#181E19] via-transparent to-[#141915]/60" />
          <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-[#181E19] via-[#181E19]/80 to-transparent" />
        </div>

        {/* Contenido sobre el degradado, alineado a izquierda/centro-izquierda */}
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10 w-full pt-32 pb-24 lg:pt-40 lg:pb-32">
          <div className="max-w-3xl lg:max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[#C2A675] text-xs font-semibold tracking-widest uppercase mb-8 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-[#6F7C63] animate-pulse" />
              El Faro · Mar del Plata · Salud Mental y Psicoterapia
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl xl:text-[5rem] font-serif text-[#F6F2EA] leading-[1.08] mb-8 tracking-tight">
              Psicoterapia y salud mental <span className="italic text-[#C2A675]">en Mar del Plata</span>
            </h1>

            <p className="text-lg sm:text-xl lg:text-2xl text-[#C8C4BA] font-light leading-relaxed mb-10 max-w-2xl">
              No hace falta que exista una adicción ni una crisis insostenible para consultar. Hay momentos en los que la vida sigue funcionando por fuera, pero por dentro se vuelve difícil seguir solo. En El Faro trabajamos desde la persona, no desde la etiqueta.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Link
                to="/contacto"
                className="inline-flex items-center justify-center gap-3 bg-[#C2A675] text-[#141915] px-9 py-4 rounded-full text-sm font-semibold tracking-wider uppercase hover:bg-[#D0B788] transition-all shadow-xl group"
              >
                Pedir una primera entrevista
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </Link>

              <a
                href="#como-trabajamos"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 text-[#F6F2EA] border border-white/20 px-8 py-4 rounded-full text-sm font-medium tracking-wide transition-all backdrop-blur-sm"
              >
                Cómo trabajamos
              </a>

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsAppClick('psicologo_hero', WHATSAPP_URL)}
                className="inline-flex items-center justify-center gap-2 text-sm text-[#C8C4BA] hover:text-[#C2A675] px-4 py-3 transition-colors"
              >
                <MessageCircle size={18} className="text-[#C2A675]" />
                <span>WhatsApp directo</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. NO HACE FALTA SABER EXACTAMENTE QUÉ TE PASA ── */}
      <section className="py-24 sm:py-32 border-b border-white/10 bg-[#181E19]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-semibold tracking-[0.2em] text-[#6F7C63] uppercase block mb-4">
              Punto de partida
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#F6F2EA] leading-tight mb-6">
              No hace falta saber exactamente qué te pasa para empezar
            </h2>
            <div className="w-12 h-px bg-[#6F7C63]/50 mx-auto mb-6" />
            <p className="text-base sm:text-lg text-[#C8C4BA] font-light leading-relaxed">
              Muchas personas no llegan a una consulta diciendo «tengo tal diagnóstico». Llegan con una sensación difusa, con cansancio acumulado o con la certeza íntima de que lo que están viviendo ya no se acomoda solo.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 mb-12 max-w-6xl mx-auto">
            {[
              "«No sé bien qué me pasa, pero sé que así no quiero seguir.»",
              "«Estoy cansado de estar en alerta todo el tiempo.»",
              "«No puedo parar la cabeza ni cuando me voy a dormir.»",
              "«Con mi familia ya no sabemos cómo hablarnos sin discutir.»",
              "«Hago todo lo que tengo que hacer y aun así siento un vacío enorme.»",
              "«Siento que si aflojo un segundo, todo se viene abajo.»"
            ].map((frase, i) => (
              <div 
                key={i} 
                className="p-7 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-white/15 transition-all flex items-start gap-4"
              >
                <span className="text-[#C2A675] font-serif text-3xl leading-none select-none">“</span>
                <p className="text-[#F6F2EA] font-serif italic text-lg leading-relaxed">
                  {frase.replace(/^[«“]|["»]$/g, '')}
                </p>
              </div>
            ))}
          </div>

          <p className="text-center text-[#C8C4BA] text-base sm:text-lg font-light max-w-2xl mx-auto leading-relaxed">
            La primera consulta psicológica está pensada precisamente para eso: no para evaluar si sabés explicarte bien, sino para darte un tiempo y un espacio donde empezar a ponerle palabras a lo que sentís.
          </p>
        </div>
      </section>

      {/* ── 3. MOMENTO VISUAL FUERTE: LA VIDA SIGUE FUNCIONANDO ── */}
      <section className="relative py-28 sm:py-36 bg-[#141915] overflow-hidden border-b border-white/10">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Fotografía de gran formato con degradados de borde fundidos en la oscuridad */}
            <div className="lg:col-span-7 relative order-2 lg:order-1">
              <div className="relative w-full h-[460px] sm:h-[560px] lg:h-[640px] rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://res.cloudinary.com/dwv5ehc6e/image/upload/f_auto,q_auto/v1779830111/mifaro/Portada_psicologo_valencia_W4pY5YXg.png" 
                  alt="Persona reflexiva junto a una ventana en Mar del Plata" 
                  width={1279}
                  height={720}
                  className="w-full h-full object-cover object-[center_35%] filter grayscale-[0.15] contrast-[1.02]"
                  loading="lazy"
                  decoding="async"
                />
                {/* Fades perimetrales: la imagen surge orgánicamente del fondo sin bordes duros */}
                <div className="absolute inset-y-0 right-0 w-32 sm:w-48 bg-gradient-to-l from-[#141915] via-[#141915]/70 to-transparent pointer-events-none" />
                <div className="absolute inset-y-0 left-0 w-24 sm:w-36 bg-gradient-to-r from-[#141915] to-transparent pointer-events-none" />
                <div className="absolute inset-x-0 bottom-0 h-36 sm:h-48 bg-gradient-to-t from-[#141915] via-[#141915]/80 to-transparent pointer-events-none" />
                <div className="absolute inset-x-0 top-0 h-24 sm:h-36 bg-gradient-to-b from-[#141915] to-transparent pointer-events-none" />
              </div>
            </div>

            {/* Columna editorial: textos y frases de funcionamiento */}
            <div className="lg:col-span-5 order-1 lg:order-2">
              <span className="text-xs font-semibold tracking-[0.2em] text-[#6F7C63] uppercase block mb-4">
                La trampa de la hiperfuncionalidad
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#F6F2EA] leading-tight mb-8">
                La vida sigue funcionando. Y aun así, algo no está bien.
              </h2>

              <p className="text-base sm:text-lg text-[#C8C4BA] font-light leading-relaxed mb-8">
                Existe la idea de que para consultar a un psicólogo hay que estar paralizado, haber perdido el trabajo o atravesar una crisis visible desde afuera. En la práctica clínica diaria en Mar del Plata vemos exactamente lo contrario: personas que siguen sosteniendo su rutina completa mientras por dentro el costo se vuelve insostenible.
              </p>

              {/* Frases de funcionamiento en mayúsculas sobrias */}
              <div className="space-y-3 mb-10 pl-3 border-l-2 border-[#6F7C63]/50">
                <p className="text-sm sm:text-base font-mono uppercase tracking-wider text-[#C2A675]">
                  — SIGO TRABAJANDO.
                </p>
                <p className="text-sm sm:text-base font-mono uppercase tracking-wider text-[#C2A675]">
                  — SIGO CUMPLIENDO CON TODO.
                </p>
                <p className="text-sm sm:text-base font-mono uppercase tracking-wider text-[#C2A675]">
                  — SIGO CUIDANDO A LOS DEMÁS.
                </p>
                <p className="text-sm sm:text-base font-mono uppercase tracking-wider text-[#C2A675]">
                  — SIGO LLEGANDO A HORARIO.
                </p>
              </div>

              <div className="p-8 rounded-2xl bg-white/[0.03] border border-white/10">
                <p className="text-2xl sm:text-3xl font-serif text-[#F6F2EA] leading-snug italic">
                  «Poder seguir no significa que no te esté costando demasiado.»
                </p>
                <p className="mt-4 text-sm text-[#9A968D] font-light leading-relaxed">
                  Reconocer el cansancio no es rendirse; es empezar a cuidarse antes de que el cuerpo o los vínculos pasen una factura más cara.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── 4. QUÉ PUEDE ESTAR PASANDO (SIN PATOLOGIZAR) ── */}
      <section className="py-24 sm:py-32 bg-[#181E19] border-b border-white/10">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="max-w-3xl mb-16">
            <span className="text-xs font-semibold tracking-[0.2em] text-[#6F7C63] uppercase block mb-4">
              Motivos de consulta
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#F6F2EA] leading-tight mb-6">
              Qué puede estar pasando
            </h2>
            <p className="text-base sm:text-lg text-[#C8C4BA] font-light leading-relaxed">
              No creemos en encasillar el sufrimiento en etiquetas cerradas. Las personas consultan por vivencias reales que comprometen su bienestar, su descanso y sus relaciones:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <Brain size={24} className="text-[#6F7C63]" />,
                title: "Ansiedad, angustia y agotamiento",
                desc: "Cuando la sensación de urgencia, la presión interna o la dificultad para relajarse se vuelven constantes y el cuerpo no logra descansar."
              },
              {
                icon: <Compass size={24} className="text-[#6F7C63]" />,
                title: "Duelos, pérdidas y momentos de cambio",
                desc: "Atravesar una separación, la muerte de un ser querido, una mudanza o el final de una etapa que exige rearmar la propia vida."
              },
              {
                icon: <Heart size={24} className="text-[#6F7C63]" />,
                title: "Conflictos familiares y de pareja",
                desc: "Discusiones reiteradas, silencios que distancian, desgaste de la convivencia o dudas sobre cómo continuar un proyecto compartido."
              },
              {
                icon: <Users size={24} className="text-[#6F7C63]" />,
                title: "Dificultades con hijos adolescentes",
                desc: "Aislamiento, cambios bruscos de conducta, desconexión afectiva o la dificultad de los adultos para sostener límites sin romper el vínculo."
              },
              {
                icon: <Sparkles size={24} className="text-[#6F7C63]" />,
                title: "Crisis personales y sensación de vacío",
                desc: "Preguntas sobre quién es uno hoy, pérdida de sentido o la sensación de que lo que antes funcionaba ya no alcanza para vivir bien."
              },
              {
                icon: <ShieldCheck size={24} className="text-[#6F7C63]" />,
                title: "Consumos o hábitos que ocupan demasiado",
                desc: "Cuando el alcohol, las sustancias, el juego o las pantallas empiezan a usarse para anestesiar el malestar o tapan otros problemas."
              }
            ].map((item, index) => (
              <div 
                key={index} 
                className="p-8 rounded-3xl bg-[#141915] border border-white/10 hover:border-[#6F7C63]/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="p-3 bg-[#6F7C63]/10 rounded-2xl w-fit mb-6 border border-[#6F7C63]/20">
                    {item.icon}
                  </div>
                  <h3 className="font-serif text-xl sm:text-2xl text-[#F6F2EA] mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm sm:text-base text-[#C8C4BA] font-light leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 p-6 rounded-2xl bg-white/[0.02] border border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <p className="text-sm text-[#C8C4BA] font-light">
              ¿Sentís dudas sobre si tu situación amerita una consulta? Podés leer nuestra guía clínica orientativa:
            </p>
            <Link 
              to="/como-pedir-ayuda-psicologia-mar-del-plata"
              className="inline-flex items-center gap-2 text-sm text-[#C2A675] hover:text-[#F6F2EA] transition-colors shrink-0 font-medium"
            >
              <span>Cuándo pedir ayuda psicológica en Mar del Plata</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── 5. CÓMO TRABAJAMOS (TRES GRANDES ÁREAS EDITORIALES) ── */}
      <section id="como-trabajamos" className="py-24 sm:py-32 bg-[#141915] border-b border-white/10 scroll-mt-20">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="max-w-3xl mb-16">
            <span className="text-xs font-semibold tracking-[0.2em] text-[#6F7C63] uppercase block mb-4">
              Dispositivos y abordaje clínico
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#F6F2EA] leading-tight mb-6">
              Cómo trabajamos en El Faro
            </h2>
            <p className="text-base sm:text-lg text-[#C8C4BA] font-light leading-relaxed">
              El Faro es un espacio terapéutico habilitado en Mar del Plata. No ofrecemos recetas genéricas ni obligamos a todo el mundo a pasar por los mismos pasos: la propuesta se define caso por caso según lo que cada persona y familia necesita.
            </p>
          </div>

          <div className="space-y-8">
            
            {/* Área 01: Psicoterapia Individual */}
            <div className="p-8 sm:p-12 rounded-3xl bg-[#181E19] border border-white/10 hover:border-[#6F7C63]/40 transition-all">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-3">
                  <span className="text-3xl sm:text-4xl font-mono text-[#C2A675] font-semibold block mb-2">01</span>
                  <span className="text-xs uppercase tracking-widest text-[#9A968D] font-mono">Espacio individual</span>
                </div>
                <div className="lg:col-span-9">
                  <h3 className="text-2xl sm:text-3xl font-serif text-[#F6F2EA] mb-4">
                    Psicoterapia Individual
                  </h3>
                  <p className="text-base sm:text-lg text-[#C8C4BA] font-light leading-relaxed mb-4 max-w-3xl">
                    Un espacio regular de encuentro con un terapeuta para poner palabras a lo que duele, entender de dónde viene y construir formas más sanas de habitar el presente. No se trata solo de aliviar el síntoma inmediato, sino de revisar la propia historia para recuperar la capacidad de elegir y desarmar repeticiones que hacen daño.
                  </p>
                  <p className="text-sm text-[#9A968D] font-light">
                    Modalidad presencial en nuestra sede de Mar del Plata y espacios online según la necesidad del proceso.
                  </p>
                </div>
              </div>
            </div>

            {/* Área 02: Vínculos y Familia */}
            <div className="p-8 sm:p-12 rounded-3xl bg-[#181E19] border border-white/10 hover:border-[#6F7C63]/40 transition-all">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-3">
                  <span className="text-3xl sm:text-4xl font-mono text-[#C2A675] font-semibold block mb-2">02</span>
                  <span className="text-xs uppercase tracking-widest text-[#9A968D] font-mono">Abordaje vincular</span>
                </div>
                <div className="lg:col-span-9">
                  <h3 className="text-2xl sm:text-3xl font-serif text-[#F6F2EA] mb-4">
                    Vínculos, Pareja y Familia
                  </h3>
                  <p className="text-base sm:text-lg text-[#C8C4BA] font-light leading-relaxed mb-4 max-w-3xl">
                    El sufrimiento rara vez ocurre de forma aislada; suele tejerse y repercutir en los vínculos más cercanos. Ofrecemos terapia familiar y de pareja para abrir canales de conversación donde hoy hay reproche o distancia, ayudar a los adultos a fijar acuerdos y pautas de convivencia, y acompañar a padres frente a momentos difíciles de sus hijos.
                  </p>
                  <div className="pt-2">
                    <Link 
                      to="/terapia-mar-del-plata"
                      className="inline-flex items-center gap-2 text-sm text-[#C2A675] hover:text-[#F6F2EA] transition-colors font-medium"
                    >
                      <span>Conocé más sobre nuestro trabajo con familias y parejas</span>
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Área 03: Grupos y Dispositivos Terapéuticos */}
            <div className="p-8 sm:p-12 rounded-3xl bg-[#181E19] border border-white/10 hover:border-[#6F7C63]/40 transition-all">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-3">
                  <span className="text-3xl sm:text-4xl font-mono text-[#C2A675] font-semibold block mb-2">03</span>
                  <span className="text-xs uppercase tracking-widest text-[#9A968D] font-mono">Comunidad e intensidad</span>
                </div>
                <div className="lg:col-span-9">
                  <h3 className="text-2xl sm:text-3xl font-serif text-[#F6F2EA] mb-4">
                    Grupos Terapéuticos y Dispositivos de Día
                  </h3>
                  <p className="text-base sm:text-lg text-[#C8C4BA] font-light leading-relaxed mb-4 max-w-3xl">
                    Cuando una sesión semanal resulta insuficiente o la persona necesita una estructura cotidiana más contenedora, El Faro dispone de espacios grupales terapéuticos, Centro de Día y Centro de Mediodía en Mar del Plata. Estos dispositivos permiten sostener tratamientos intensivos y cuidados sin desarraigar a la persona de su entorno familiar y social.
                  </p>
                  <div className="pt-2">
                    <Link 
                      to="/adicciones-mar-del-plata"
                      className="inline-flex items-center gap-2 text-sm text-[#C2A675] hover:text-[#F6F2EA] transition-colors font-medium"
                    >
                      <span>Ver abordaje ambulatorio intensivo y consumos problemáticos</span>
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── 6. EL PRIMER ENCUENTRO ── */}
      <section className="py-24 sm:py-32 bg-[#181E19] border-b border-white/10">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            <div className="lg:col-span-6">
              <span className="text-xs font-semibold tracking-[0.2em] text-[#6F7C63] uppercase block mb-4">
                Paso a paso
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#F6F2EA] leading-tight mb-8">
                Cómo es el primer encuentro
              </h2>

              <div className="space-y-6 text-[#C8C4BA] font-light leading-relaxed text-base sm:text-lg max-w-xl">
                <p>
                  El primer encuentro es una conversación tranquila. No es un examen, no tenés que rendir cuentas ni se te juzga por lo que sentís o por lo que hiciste.
                </p>
                <p>
                  Nos tomamos el tiempo para escuchar qué está pasando en tu vida hoy, qué intentaste hasta ahora y qué esperás de un espacio terapéutico. Al finalizar, pensamos juntos cuál es el próximo paso más adecuado para vos: si conviene iniciar una psicoterapia individual, convocar a alguien de tu familia, o si con esa orientación inicial es suficiente para ordenar la situación.
                </p>
                <p>
                  Consultar no te obliga a iniciar automáticamente un tratamiento. Es un espacio de cuidado y confidencialidad profesional para pensar con claridad.
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap gap-4 items-center">
                <Link
                  to="/contacto"
                  className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-[#C2A675] hover:text-[#F6F2EA] transition-colors"
                >
                  <span>Coordinar primer encuentro</span>
                  <ArrowRight size={16} />
                </Link>
                <span className="text-white/20">·</span>
                <span className="text-sm text-[#9A968D]">Sede Garay 2073, Mar del Plata</span>
              </div>
            </div>

            {/* Fotografía de gran escala: encuentro profesional en consulta con bordes difuminados */}
            <div className="lg:col-span-6 relative">
              <div className="relative w-full h-[440px] sm:h-[540px] lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://res.cloudinary.com/dwv5ehc6e/image/upload/f_auto,q_auto/v1779830158/mifaro/Interna_sesion_valencia_rpZzDkdQ.png" 
                  alt="Encuentro profesional de escucha y consulta clínica en El Faro" 
                  width={1200}
                  height={800}
                  className="w-full h-full object-cover object-[center_35%] filter contrast-[0.95]"
                  loading="lazy"
                  decoding="async"
                />
                {/* Degradados de integración perimetral */}
                <div className="absolute inset-y-0 left-0 w-24 sm:w-36 bg-gradient-to-r from-[#181E19] to-transparent pointer-events-none" />
                <div className="absolute inset-y-0 right-0 w-24 sm:w-36 bg-gradient-to-l from-[#181E19] to-transparent pointer-events-none" />
                <div className="absolute inset-x-0 bottom-0 h-32 sm:h-44 bg-gradient-to-t from-[#181E19] via-[#181E19]/80 to-transparent pointer-events-none" />
                <div className="absolute inset-x-0 top-0 h-24 sm:h-32 bg-gradient-to-b from-[#181E19] to-transparent pointer-events-none" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── 7. PERSONA / SÍNTOMA: IDENTIDAD EDITORIAL DE EL FARO ── */}
      <section className="py-24 sm:py-32 bg-[#141915] border-b border-white/10 text-center">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <span className="text-xs font-semibold tracking-[0.25em] text-[#6F7C63] uppercase block mb-6">
              Nuestra mirada clínica
            </span>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif text-[#F6F2EA] leading-tight mb-8">
              El síntoma importa. La persona importa más.
            </h2>
            <div className="w-16 h-px bg-[#6F7C63]/50 mx-auto mb-10" />
            
            <div className="space-y-6 text-base sm:text-xl text-[#C8C4BA] font-light leading-relaxed max-w-3xl mx-auto text-left sm:text-center">
              <p>
                La ansiedad, el insomnio, una discusión que se repite o un consumo que se salió de control son señales de alarma. Indican que algo en la vida necesita ser escuchado, pero no agotan la identidad de quien consulta.
              </p>
              <p>
                En El Faro no tratamos un rótulo ni aplicamos protocolos en serie. Cada persona llega con su propia historia, sus vínculos, sus recursos singulares y sus contradicciones. La tarea de la psicoterapia no es encajar a la persona en una teoría, sino ayudarla a recuperar su propia voz y su capacidad de decidir.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 8. EQUIPO PROFESIONAL (FOTOGRAFÍA DOCUMENTAL DE GRAN FORMATO) ── */}
      <section className="py-24 sm:py-36 bg-[#181E19] border-b border-white/10">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Fotografía documental de gran formato con bordes difuminados */}
            <div className="lg:col-span-7 relative">
              <div className="relative w-full h-[460px] sm:h-[560px] lg:h-[640px] rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://res.cloudinary.com/dwv5ehc6e/image/upload/f_auto,q_auto,w_1600/v1779830117/mifaro/Psicoterapia-valencia_ZKDPV1y3.png" 
                  alt="Equipo y espacio terapéutico de acompañamiento profesional en El Faro" 
                  width={1600}
                  height={1000}
                  className="w-full h-full object-cover object-[center_40%] filter contrast-[0.95]"
                  loading="lazy"
                  decoding="async"
                />
                {/* Fades perimetrales fundidos con el fondo oscuro */}
                <div className="absolute inset-y-0 right-0 w-32 sm:w-48 bg-gradient-to-l from-[#181E19] via-[#181E19]/70 to-transparent pointer-events-none" />
                <div className="absolute inset-y-0 left-0 w-24 sm:w-36 bg-gradient-to-r from-[#181E19] to-transparent pointer-events-none" />
                <div className="absolute inset-x-0 bottom-0 h-36 sm:h-48 bg-gradient-to-t from-[#181E19] via-[#181E19]/80 to-transparent pointer-events-none" />
                <div className="absolute inset-x-0 top-0 h-24 sm:h-36 bg-gradient-to-b from-[#181E19] to-transparent pointer-events-none" />
              </div>
            </div>

            {/* Texto editorial integrado */}
            <div className="lg:col-span-5">
              <span className="text-xs font-semibold tracking-[0.2em] text-[#6F7C63] uppercase block mb-4">
                Equipo interdisciplinario
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#F6F2EA] leading-tight mb-6">
                Profesionales cercanos, empáticos y con la experiencia que necesitás.
              </h2>
              <p className="text-base sm:text-lg text-[#C8C4BA] font-light leading-relaxed mb-6">
                En El Faro la cercanía humana y la solidez profesional van juntas. Nuestro equipo reúne psicólogos y terapeutas con amplia trayectoria en salud mental, psicoterapia individual, abordaje familiar, crisis vitales y consumos problemáticos en Mar del Plata.
              </p>
              <p className="text-base sm:text-lg text-[#C8C4BA] font-light leading-relaxed mb-8">
                Trabajamos de manera coordinada para que cada persona y cada familia cuenten con una mirada seria, atenta y comprometida, sin frialdad burocrática y con el respeto que merece cada proceso de cambio.
              </p>

              <div>
                <Link 
                  to="/quienes-lo-hacemos"
                  className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-[#C2A675] hover:text-[#F6F2EA] transition-colors"
                >
                  <span>Conocé a todo nuestro equipo</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── 9. CONEXIÓN EDITORIAL: VOCES Y LECTURAS ── */}
      <section className="py-24 sm:py-32 bg-[#141915] border-b border-white/10">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="text-xs font-semibold tracking-[0.2em] text-[#6F7C63] uppercase block mb-4">
                Espacio editorial y testimonios
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#F6F2EA] leading-tight">
                Voces y Lecturas del Faro
              </h2>
            </div>
            <div className="flex items-center gap-4">
              <Link 
                to="/lecturas" 
                className="text-xs sm:text-sm uppercase tracking-wider text-[#C2A675] hover:text-[#F6F2EA] transition-colors font-semibold"
              >
                Ver todas las Lecturas →
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Artículo 1 */}
            <Link 
              to="/lecturas/como-saber-cuando-un-consumo-se-volvio-problematico"
              className="group p-8 sm:p-10 rounded-3xl bg-[#181E19] border border-white/10 hover:border-[#6F7C63]/40 transition-all flex flex-col justify-between"
            >
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-[#6F7C63] block mb-3">
                  Lecturas · Criterios clínicos
                </span>
                <h3 className="text-xl sm:text-2xl font-serif text-[#F6F2EA] group-hover:text-[#C2A675] transition-colors mb-3 leading-snug">
                  ¿Cómo saber cuándo un consumo se volvió problemático?
                </h3>
                <p className="text-sm sm:text-base text-[#C8C4BA] font-light leading-relaxed">
                  Consecuencias en los vínculos, la capacidad de decisión y pautas clínicas para identificar cuándo es momento de consultar.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-[#9A968D]">
                <span>6 min de lectura</span>
                <span className="inline-flex items-center gap-1 text-[#C2A675] font-medium group-hover:translate-x-1 transition-transform">
                  Leer artículo <ArrowRight size={14} />
                </span>
              </div>
            </Link>

            {/* Artículo 2 */}
            <Link 
              to="/lecturas/cuando-las-adicciones-organizan-la-vida-familiar"
              className="group p-8 sm:p-10 rounded-3xl bg-[#181E19] border border-white/10 hover:border-[#6F7C63]/40 transition-all flex flex-col justify-between"
            >
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-[#6F7C63] block mb-3">
                  Lecturas · Dinámica familiar
                </span>
                <h3 className="text-xl sm:text-2xl font-serif text-[#F6F2EA] group-hover:text-[#C2A675] transition-colors mb-3 leading-snug">
                  Cuando las adicciones terminan organizando la vida de toda una familia
                </h3>
                <p className="text-sm sm:text-base text-[#C8C4BA] font-light leading-relaxed">
                  Cómo una problemática individual transforma las rutinas y los silencios del hogar, y por qué la familia también puede pedir ayuda.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-[#9A968D]">
                <span>8 min de lectura</span>
                <span className="inline-flex items-center gap-1 text-[#C2A675] font-medium group-hover:translate-x-1 transition-transform">
                  Leer artículo <ArrowRight size={14} />
                </span>
              </div>
            </Link>
          </div>

          <div className="mt-8 text-center">
            <Link 
              to="/voces"
              className="inline-flex items-center gap-2 text-sm text-[#C8C4BA] hover:text-[#C2A675] transition-colors font-light"
            >
              <span>También podés conocer los relatos en primera persona en <strong>Las Voces del Faro</strong></span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── 10. PREGUNTAS FRECUENTES (FAQS) ── */}
      <section className="py-24 sm:py-32 bg-[#181E19] border-b border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-xs font-semibold tracking-[0.2em] text-[#6F7C63] uppercase block mb-4">
              Dudas habituales
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#F6F2EA] leading-tight mb-6">
              Preguntas frecuentes
            </h2>
            <p className="text-base sm:text-lg text-[#C8C4BA] font-light max-w-2xl mx-auto leading-relaxed">
              Respuestas claras y directas a las preguntas que con más frecuencia nos hacen quienes se acercan por primera vez.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div 
                  key={index}
                  className="rounded-2xl border border-white/10 bg-white/[0.02] overflow-hidden transition-colors"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(index)}
                    aria-expanded={isOpen}
                    className="w-full px-6 py-5 sm:px-8 sm:py-6 text-left flex items-center justify-between gap-4 hover:bg-white/[0.03] transition-colors"
                  >
                    <span className="font-serif text-lg sm:text-xl text-[#F6F2EA] pr-4 leading-snug">
                      {faq.question}
                    </span>
                    <ChevronDown 
                      size={20} 
                      className={`text-[#6F7C63] shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
                    />
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6 sm:px-8 sm:pb-8 pt-2 text-[#C8C4BA] font-light text-base leading-relaxed border-t border-white/5">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 11. CIERRE INSTITUCIONAL Y CONTACTO ── */}
      <section className="py-28 sm:py-36 bg-[#0F1310] text-[#C8C4BA]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-semibold tracking-[0.25em] text-[#6F7C63] uppercase block mb-6">
            Comenzar hoy
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-[#F6F2EA] leading-tight mb-8">
            Dar el primer paso no tiene por qué ser difícil
          </h2>
          <p className="text-lg sm:text-xl text-[#C8C4BA] font-light leading-relaxed max-w-2xl mx-auto mb-12">
            Estamos en Mar del Plata para escucharte con atención, respeto y profesionalismo. Si querés hablar de lo que te está pasando, podés escribirnos.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Link
              to="/contacto"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#C2A675] text-[#141915] px-10 py-5 rounded-full text-sm font-semibold tracking-wider uppercase hover:bg-[#D0B788] transition-all shadow-xl"
            >
              Pedir entrevista
              <ArrowRight size={18} />
            </Link>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsAppClick('psicologo_footer_cta', WHATSAPP_URL)}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-white/5 hover:bg-white/10 text-[#F6F2EA] border border-white/20 px-8 py-5 rounded-full text-sm font-semibold tracking-wider uppercase transition-all"
            >
              <MessageCircle size={18} className="text-[#C2A675]" />
              Escribir por WhatsApp
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-12 border-t border-white/10 text-left text-sm font-light text-[#9A968D]">
            <div>
              <p className="font-serif text-[#F6F2EA] text-base mb-1">Sede de atención</p>
              <p>Garay 2073</p>
              <p>Mar del Plata, Argentina</p>
            </div>
            <div>
              <p className="font-serif text-[#F6F2EA] text-base mb-1">Teléfonos de contacto</p>
              <p>Fijo: {PHONE_DISPLAY}</p>
              <p>WhatsApp: {WHATSAPP_DISPLAY}</p>
            </div>
            <div>
              <p className="font-serif text-[#F6F2EA] text-base mb-1">Entidad titular</p>
              <p>Asociación Civil Arco Baleno</p>
              <p>CUIT: 30-68558066-3</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
