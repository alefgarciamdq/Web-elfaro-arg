import { useLoaderData, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, User, Tag, Eye, HeartHandshake, Link2, VolumeX } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { Head } from 'vite-react-ssg';
import JsonLd from './JsonLd';
import { motion } from 'framer-motion';
import { fadeUp, viewportConfig } from '../utils/animations';
import RelatedArticles from './RelatedArticles';
import { trackWhatsAppClick } from '../utils/telemetry';
import ReviewsBlock from './ReviewsBlock';
import { useState, useEffect } from 'react';
import VoicesStoryBlocks from './VoicesStoryBlocks';
import AnaStoryContent from './AnaStoryContent';
import type { BlogPost } from '../data/blogPosts';
import ComparisonBlock from './ComparisonBlock';
import { getHeroImageUrl, getHeroSrcSet, getOgImageUrl } from '../utils/cloudinary';

type BlogPostPageData = BlogPost;

export async function loader({ params }: { params: { id?: string } }) {
  if (!import.meta.env.SSR && !import.meta.env.DEV) {
    return null;
  }

  const { blogPosts } = await import('../data/blogPosts');
  const post = blogPosts.find((entry) => entry.id === params.id) || null;
  return post;
}

function PatternsInfography() {
  const [activePattern, setActivePattern] = useState<number | null>(null);

  const patterns = [
    {
      title: "Hipervigilancia",
      desc: "Estado de alerta permanente, leyendo micro-señales para anticipar recaídas.",
      icon: Eye,
      detail: "Cómo se ve: Revisar la casa al entrar, controlar obsesivamente el móvil, o sentir que caminas sobre cristales en tu propio hogar.",
      impact: "Consecuencia: Agotamiento del sistema nervioso, insomnio y ansiedad crónica."
    },
    {
      title: "Enabling o facilitación",
      desc: "Amortiguar las consecuencias del consumo para proteger al otro o evitar conflictos.",
      icon: HeartHandshake,
      detail: "Cómo se ve: Pagar deudas de juego/consumo, mentir al trabajo para justificar sus ausencias o asumir sus responsabilidades.",
      impact: "Consecuencia: Se elimina el incentivo natural para el cambio al sostener su estilo de vida."
    },
    {
      title: "Codependencia",
      desc: "Organizar toda tu vida alrededor de la adicción de la otra persona, perdiendo tu propia identidad.",
      icon: Link2,
      detail: "Cómo se ve: Tu estado de ánimo depende al 100% de si el otro consumió o no, descuidando tu salud, trabajo y aficiones.",
      impact: "Consecuencia: Pérdida del control de la propia vida y desarrollo de síntomas depresivos."
    },
    {
      title: "Aislamiento",
      desc: "Ocultar el problema hacia el exterior por vergüenza, cortando la comunicación profunda.",
      icon: VolumeX,
      detail: "Cómo se ve: Dejar de invitar gente a casa, inventar excusas para no salir, y fingir que todo va bien mientras la procesión va por dentro.",
      impact: "Consecuencia: Soledad extrema y falta de red de apoyo en el momento que más se necesita."
    }
  ];

  return (
    <div className="my-12 p-6 md:p-8 rounded-3xl bg-sand-light/30 border border-sand/40 font-sans">
      <h4 className="font-serif text-xl md:text-2xl text-ink font-semibold mb-2">
        Los 4 patrones en el sistema familiar
      </h4>
      <p className="text-ink-light font-light text-sm md:text-base mb-6 leading-relaxed">
        Haz clic en cada tarjeta para ver cómo se manifiesta en el día a día y su impacto clínico.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {patterns.map((p, idx) => {
          const Icon = p.icon;
          const isActive = activePattern === idx;
          return (
            <motion.div
              key={p.title}
              onClick={() => setActivePattern(isActive ? null : idx)}
              className={`cursor-pointer p-6 rounded-2xl border transition-all duration-300 ${
                isActive 
                  ? "bg-white border-olive/30 shadow-md animate-pulse-subtle" 
                  : "bg-sand/5 border-sand/20 hover:bg-sand/10 hover:border-sand/40"
              }`}
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className={`p-2 rounded-xl ${isActive ? "bg-olive text-white" : "bg-sand/20 text-olive"}`}>
                  <Icon size={20} />
                </div>
                <h5 className="font-serif text-lg text-ink font-semibold">{p.title}</h5>
              </div>
              <p className="text-ink-light text-sm font-light leading-relaxed mb-2">
                {p.desc}
              </p>
              
              {isActive && (
                <motion.div 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  className="mt-4 pt-4 border-t border-sand/30 text-xs md:text-sm text-ink-light space-y-2"
                >
                  <p><strong className="font-medium text-ink">En el día a día:</strong> {p.detail}</p>
                  <p className="text-olive"><strong className="font-semibold text-olive">Impacto:</strong> {p.impact}</p>
                </motion.div>
              )}
            </motion.div>
          );
        })}
      </div>
      <p className="mt-6 text-xs text-ink-light/60 text-right italic font-light">
        Basado en el modelo sistémico familiar de Murray Bowen y la investigación de Tipsword et al. (2022)
      </p>
    </div>
  );
}

function MetricsInfography() {
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);

  const metrics = [
    {
      value: "76,4%",
      label: "consumo de alcohol anual",
      desc: "de españoles de entre 15 y 64 años consumió alcohol en el último año.",
      source: "OEDA / EDADES 2022",
      context: "El alcohol es la sustancia de mayor consumo y aceptación social, lo que dificulta que la persona reconozca el abuso temprano."
    },
    {
      value: "39.432",
      label: "pacientes atendidos",
      desc: "en las 39 Unidades de Conductas Adictivas (UCAs) de la Comunitat Valenciana en 2023.",
      source: "Conselleria de Sanitat Universal",
      context: "Esta cifra representa solo los pacientes que ingresaron al sistema clínico. Las familias que sufren el desgaste en silencio quedan fuera de estas estadísticas."
    },
    {
      value: "15,9 años",
      label: "edad de inicio",
      desc: "media de inicio en el consumo de alcohol en Valencia.",
      source: "Plan Municipal de Adicciones 2025-2029",
      context: "Valencia comparte con Navarra la edad de inicio más baja del país. En muchas familias valencianas, la preocupación por el consumo se instala en plena adolescencia."
    },
    {
      value: "40–60%",
      label: "vulnerabilidad genética",
      desc: "del riesgo de desarrollar una adicción está ligada a factores genéticos y epigenéticos.",
      source: "NIH National Institute on Drug Abuse (2023)",
      context: "La evidencia neurobiológica demuestra que la adicción tiene una base biológica compleja. Ayuda a liberar a los padres de la culpa parental paralizante."
    }
  ];

  return (
    <div className="my-12 p-6 md:p-8 rounded-3xl bg-sand-light/30 border border-sand/40 font-sans">
      <h4 className="font-serif text-xl md:text-2xl text-ink font-semibold mb-2">
        Datos oficiales y alcance del problema
      </h4>
      <p className="text-ink-light font-light text-sm md:text-base mb-6 leading-relaxed">
        Haz clic en cada tarjeta para ver la fuente oficial y su contexto clínico.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {metrics.map((m, idx) => {
          const isSelected = selectedIdx === idx;
          return (
            <motion.div
              key={idx}
              onClick={() => setSelectedIdx(isSelected ? null : idx)}
              className={`p-5 rounded-2xl border flex flex-col justify-between transition-all duration-300 cursor-pointer h-full min-h-[140px] ${
                isSelected 
                  ? "bg-white border-olive/40 shadow-md" 
                  : "bg-sand/5 border-sand/20 hover:bg-sand/10 hover:border-sand/40"
              }`}
              whileHover={{ y: -2 }}
            >
              <div>
                <span className="block font-serif text-2xl md:text-3xl text-olive font-bold tracking-tight mb-1">
                  {m.value}
                </span>
                <span className="block text-ink text-xs font-semibold uppercase tracking-wider mb-1">
                  {m.label}
                </span>
                <span className="block text-ink-light text-xs font-light leading-snug">
                  {m.desc}
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>

      {selectedIdx !== null && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-6 p-5 rounded-2xl bg-white border border-sand/30 shadow-sm animate-pulse-subtle"
        >
          <div className="flex justify-between items-center mb-2">
            <span className="text-xs font-semibold text-olive uppercase tracking-widest">
              Contexto Clínico
            </span>
            <span className="text-[10px] text-ink-light/50 font-light">
              Fuente: {metrics[selectedIdx].source}
            </span>
          </div>
          <p className="text-ink-light text-sm font-light leading-relaxed">
            {metrics[selectedIdx].context}
          </p>
        </motion.div>
      )}
    </div>
  );
}

function ChecklistInfography() {
  const [checkedItems, setCheckedItems] = useState<boolean[]>(new Array(6).fill(false));

  const items = [
    "Estás durmiendo mal de forma crónica por la preocupación.",
    "Las conversaciones en casa terminan siempre en lo mismo.",
    "Sientes que toda tu energía gira alrededor del estado de otra persona.",
    "Has dejado de hacer cosas que antes hacías porque la situación lo ocupa todo.",
    "Tienes miedo pero no sabes con quién hablarlo.",
    "Llevas meses o años gestionando sin pedir ayuda porque pensabas que podías."
  ];

  const handleToggle = (idx: number) => {
    const updated = [...checkedItems];
    updated[idx] = !updated[idx];
    setCheckedItems(updated);
  };

  const markedCount = checkedItems.filter(Boolean).length;

  let message = "";
  let messageBg = "";
  let messageBorder = "";
  let messageTextColor = "";

  if (markedCount === 1) {
    message = "Una señal ya es suficiente para hablar con alguien.";
    messageBg = "bg-sand-light/40";
    messageBorder = "border-sand";
    messageTextColor = "text-ink";
  } else if (markedCount >= 2 && markedCount <= 3) {
    message = "La situación ya está afectando tu bienestar de forma clara.";
    messageBg = "bg-sand/30";
    messageBorder = "border-olive/20";
    messageTextColor = "text-ink";
  } else if (markedCount >= 4) {
    message = "Llevas demasiado tiempo sosteniéndolo solo. Mereces un espacio de apoyo.";
    messageBg = "bg-[#F7F2EA]";
    messageBorder = "border-olive/30";
    messageTextColor = "text-ink";
  }

  return (
    <div className="my-12 p-6 md:p-8 rounded-3xl bg-sand-light/30 border border-sand/40 font-sans">
      <h4 className="font-serif text-xl md:text-2xl text-ink font-semibold mb-2">
        Autoevaluación familiar
      </h4>
      <p className="text-ink-light font-light text-sm md:text-base mb-6 leading-relaxed">
        Marca las situaciones que estás viviendo en este momento en casa.
      </p>

      <div className="space-y-3 mb-6">
        {items.map((item, idx) => (
          <label 
            key={idx}
            className="flex items-start gap-3 p-3 rounded-xl hover:bg-sand/10 transition-colors cursor-pointer"
          >
            <input 
              type="checkbox"
              checked={checkedItems[idx]}
              onChange={() => handleToggle(idx)}
              className="mt-1 w-4.5 h-4.5 accent-olive rounded border-sand cursor-pointer"
            />
            <span className="text-ink-light text-sm md:text-base font-light leading-relaxed select-none">
              {item}
            </span>
          </label>
        ))}
      </div>

      {markedCount > 0 && (
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          className={`p-4 md:p-5 rounded-2xl border text-center font-serif text-base md:text-lg mb-8 shadow-sm ${messageBg} ${messageBorder} ${messageTextColor}`}
        >
          {message}
        </motion.div>
      )}

      <div className="text-center">
        <Link 
          to="/orientacion-familias-adicciones-valencia"
          className="inline-flex items-center justify-center bg-olive text-offwhite px-10 py-4 rounded-full text-sm font-medium tracking-wide uppercase hover:bg-olive-light transition-colors"
        >
          Hablar con Mi Faro
        </Link>
      </div>
    </div>
  );
}

function renderStyledTitle(id: string, title: string): React.ReactNode {
  if (id === 'ana-el-cauce-y-el-primer-paso') {
    return (
      <>
        Ana. El <span className="italic">cauce</span> y el primer paso.
      </>
    );
  }
  if (id === 'al-principio-pense-que-era-amor') {
    return (
      <>
        Al principio pensé que era <span className="italic">amor</span>: cuando un vínculo te va borrando.
      </>
    );
  }
  if (id === 'yo-no-consumia-para-escapar') {
    return (
      <>
        No consumía para escapar. Consumía para <span className="italic">rendir</span>.
      </>
    );
  }
  if (id === 'paula-y-marcos-el-silencio') {
    return (
      <>
        Paula y Marcos: lo que veían en el otro, lo tenían <span className="italic">ellos</span>.
      </>
    );
  }
  if (id === 'sergio-las-3-15') {
    return (
      <>
        Sergio y las <span className="italic">3:15</span>.
      </>
    );
  }
  if (id === 'maria-perdi-a-mi-nino') {
    return (
      <>
        María no vino a hablar de su hijo. Vino a hacer el duelo de su <span className="italic">niño</span>.
      </>
    );
  }
  if (id === 'laura-cuando-ya-no-puedo-mas') {
    return (
      <>
        Cuando ya no puedo más: la familia que sostuvo <span className="italic">demasiado</span>.
      </>
    );
  }
  return title;
}

export default function BlogPost() {
  const loadedPost = useLoaderData() as BlogPostPageData | null;
  const post = loadedPost;
  const navigate = useNavigate();

  useEffect(() => {
    if (post && post.id === 'pantallas-ninos-cuando-preocuparse') {
      navigate('/pantallas-ninos-cuando-preocuparse', { replace: true });
    }
  }, [post, navigate]);

  if (!post) {
    return (
      <article className="bg-offwhite min-h-screen">
        <Head key="article-not-found">
          <title>Artículo no encontrado | Mi Faro</title>
          <meta name="robots" content="noindex, nofollow" />
        </Head>
        <div className="min-h-screen bg-offwhite flex flex-col items-center justify-center px-4">
          <h1 className="text-4xl font-serif text-ink mb-4">Artículo no encontrado</h1>
          <p className="text-ink-light mb-8">Lo sentimos, el artículo que buscas no existe o ha sido movido.</p>
          <Link 
            to="/recursos"
            className="bg-olive text-white px-8 py-3 rounded-full text-sm font-medium tracking-wide uppercase hover:bg-olive-light transition-colors"
          >
            Volver a Recursos
          </Link>
        </div>
      </article>
    );
  }

  const markdownComponents = {
    h2: ({node, ...props}: any) => <h2 className="text-2xl md:text-3xl font-serif text-ink mt-12 mb-6" {...props} />,
    h3: ({node, ...props}: any) => <h3 className="text-xl md:text-2xl font-serif text-ink mt-10 mb-4" {...props} />,
    p: ({node, ...props}: any) => <p className="mb-6 text-lg text-ink-light font-light leading-relaxed" {...props} />,
    ul: ({node, ...props}: any) => <ul className="list-disc marker:text-olive/50 pl-6 mb-8 space-y-3 text-lg text-ink-light font-light" {...props} />,
    ol: ({node, ...props}: any) => <ol className="list-decimal marker:text-olive/50 pl-6 mb-8 space-y-3 text-lg text-ink-light font-light" {...props} />,
    li: ({node, ...props}: any) => <li className="pl-2" {...props} />,
    strong: ({node, ...props}: any) => <strong className="font-medium text-ink" {...props} />,
    blockquote: ({node, ...props}: any) => {
      const getPlainText = (childNode: any): string => {
        if (!childNode) return '';
        if (typeof childNode === 'string') return childNode;
        if (Array.isArray(childNode)) return childNode.map(getPlainText).join('');
        if (childNode.props && childNode.props.children) return getPlainText(childNode.props.children);
        return '';
      };

      const plainText = getPlainText(props.children);
      const isKeyData = plainText.includes('📌') || plainText.includes('Datos clave');
      const isQA = plainText.includes('Pregunta frecuente') || plainText.includes('Una señal importante');

      if (isQA) {
        return (
          <div className="my-10 rounded-3xl bg-[#F7F2EA] border border-[#E5D8C8] p-6 md:p-8 shadow-sm font-sans text-base sm:text-lg text-ink-light font-light leading-relaxed [&_strong:nth-of-type(1)]:block [&_strong:nth-of-type(1)]:font-sans [&_strong:nth-of-type(1)]:text-xs [&_strong:nth-of-type(1)]:uppercase [&_strong:nth-of-type(1)]:tracking-widest [&_strong:nth-of-type(1)]:text-olive [&_strong:nth-of-type(1)]:font-semibold [&_strong:nth-of-type(1)]:mb-1 [&_strong:nth-of-type(2)]:block [&_strong:nth-of-type(2)]:font-serif [&_strong:nth-of-type(2)]:text-xl sm:[&_strong:nth-of-type(2)]:text-2xl [&_strong:nth-of-type(2)]:text-ink [&_strong:nth-of-type(2)]:font-semibold [&_strong:nth-of-type(2)]:leading-tight [&_strong:nth-of-type(2)]:mb-4">
            {props.children}
          </div>
        );
      }

      if (isKeyData) {
        return (
          <div className="bg-sand/20 border-l-4 border-olive rounded-xl p-6 my-8 font-sans text-base sm:text-lg text-ink-light font-light leading-relaxed [&>p:first-child]:font-serif [&>p:first-child]:text-ink [&>p:first-child]:font-semibold [&>p:first-child]:text-xl [&>p:first-child]:mb-4">
            {props.children}
          </div>
        );
      }

      return (
        <blockquote className="border-l-2 border-olive/30 pl-6 md:pl-8 my-10 py-2 italic text-lg md:text-xl text-ink font-serif leading-relaxed bg-gradient-to-r from-sand-light/30 to-transparent" {...props} />
      );
    },
    hr: ({node, ...props}: any) => <hr className="my-12 border-t border-sand" {...props} />,
    a: ({node, ...props}: any) => {
      const href = props.href || '#';
      const text = props.children?.toString() || '';
      const isCTA = text.includes('Contactar') || text.includes('Solicitar');
      const isInternal = href.startsWith('/');
      const isWhatsApp = href.includes('wa.me') || href.includes('api.whatsapp.com');
      const isMailto = href.startsWith('mailto:');
      const isTel = href.startsWith('tel:');

      const linkClass = "text-olive hover:text-olive-light underline decoration-olive/30 underline-offset-4 transition-colors font-normal";

      if (isCTA) {
        return (
          <div className="mt-16 mb-16 text-center">
            {isInternal ? (
              <Link 
                to={href} 
                className="inline-flex items-center justify-center bg-olive text-offwhite px-10 py-4 rounded-full text-sm font-medium tracking-wide uppercase hover:bg-olive-light transition-colors"
              >
                {props.children}
              </Link>
            ) : (
              <a 
                href={href} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-olive text-offwhite px-10 py-4 rounded-full text-sm font-medium tracking-wide uppercase hover:bg-olive-light transition-colors"
              >
                {props.children}
              </a>
            )}
          </div>
        );
      }

      if (isInternal) {
        return (
          <Link to={href} className={linkClass}>
            {props.children}
          </Link>
        );
      }

      if (isWhatsApp) {
        return (
          <a 
            href={href} 
            target="_blank" 
            rel="noopener noreferrer" 
            onClick={() => trackWhatsAppClick('blog_post_markdown', href)}
            className={linkClass}
          >
            {props.children}
          </a>
        );
      }

      if (isMailto || isTel) {
        return (
          <a href={href} className={linkClass}>
            {props.children}
          </a>
        );
      }

      return (
        <a 
          href={href} 
          target="_blank" 
          rel="noopener noreferrer" 
          className={linkClass}
        >
          {props.children}
        </a>
      );
    },
    img: ({node, ...props}: any) => (
      <img 
        loading="lazy" 
        decoding="async" 
        className="w-full rounded-2xl my-8 object-cover max-h-[450px] shadow-sm" 
        {...props} 
      />
    ),
  };

  const cleanContent = post.content.replace(/\r\n/g, '\n');
  const markerA = `> 📌 **Datos clave**\n> 39.432 pacientes atendidos en las UCAs de la Comunitat Valenciana en 2023 · 465.000 consultas generadas · Edad media de inicio en el alcohol: 15,9 años, la más baja del país · 76,4% de españoles consumió alcohol en el último año (EDADES 2022, OEDA/Ministerio de Sanidad)`;
  const markerB = `## Qué le pasa al sistema familiar cuando hay una adicción`;
  const markerC = `## Cuándo pedir ayuda como familia`;

  const idxA = cleanContent.indexOf(markerA);
  const idxB = cleanContent.indexOf(markerB);
  const idxC = cleanContent.indexOf(markerC);

  let contentParts: string[] = [];
  const markerComparison = '[COMPARISON_BLOCK]';
  const idxComparison = cleanContent.indexOf(markerComparison);

  if (post.id === 'familias-adicciones-valencia-como-acompanar-sin-destruirse' && idxA !== -1 && idxB !== -1 && idxC !== -1) {
    contentParts = [
      cleanContent.substring(0, idxA + markerA.length),
      cleanContent.substring(idxA + markerA.length, idxB),
      cleanContent.substring(idxB, idxC),
      cleanContent.substring(idxC)
    ];
  } else if (post.comparisonBlock && idxComparison !== -1) {
    contentParts = [
      cleanContent.substring(0, idxComparison),
      cleanContent.substring(idxComparison + markerComparison.length)
    ];
  }

  const canonicalUrl = post.id === 'pantallas-ninos-cuando-preocuparse'
    ? `https://mifaro.es/pantallas-ninos-cuando-preocuparse`
    : post.category === 'Las Voces del Faro'
      ? `https://mifaro.es/recursos/voces/${post.id}`
      : `https://mifaro.es/recursos/${post.id}`;

  return (
    <article className={`bg-offwhite min-h-screen pb-24 ${(post.category === 'Las Voces del Faro' || post.heroFullWidth) ? '' : 'pt-24 md:pt-32'}`}>
      <Head key={post.id}>
        <title>{post.metaTitle || `${post.title} | Mi Faro`}</title>
        <meta name="description" content={post.metaDescription || post.excerpt} />
        <meta property="og:title" content={post.metaTitle || `${post.title} | Mi Faro`} />
        <meta property="og:description" content={post.metaDescription || post.excerpt} />
        <meta property="og:image" content={getOgImageUrl(post)} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.metaTitle || `${post.title} | Mi Faro`} />
        <meta name="twitter:description" content={post.metaDescription || post.excerpt} />
        <meta name="twitter:image" content={getOgImageUrl(post)} />
        <link rel="canonical" href={canonicalUrl} />
        {post.category === 'Las Voces del Faro' && (
          <link 
            rel="preload" 
            as="image" 
            href={getHeroImageUrl(post, 1200)} 
            imageSrcSet={getHeroSrcSet(post)}
            imageSizes="100vw"
            fetchPriority="high" 
          />
        )}
      </Head>
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Inicio",
            "item": "https://mifaro.es"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": post.category === 'Las Voces del Faro' ? "Las Voces del Faro" : "Recursos",
            "item": post.category === 'Las Voces del Faro' ? "https://mifaro.es/recursos/voces" : "https://mifaro.es/recursos"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": post.title,
            "item": post.category === 'Las Voces del Faro' ? `https://mifaro.es/recursos/voces/${post.id}` : `https://mifaro.es/recursos/${post.id}`
          }
        ]
      }} />
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": post.title,
        "description": post.excerpt,
        "image": getOgImageUrl(post),
        "author": {
          "@type": "Organization",
          "name": "Equipo Mi Faro"
        },
        "publisher": {
          "@type": "Organization",
          "name": "Mi Faro",
          "logo": {
            "@type": "ImageObject",
            "url": "https://res.cloudinary.com/dwv5ehc6e/image/upload/f_auto,q_auto/v1779830147/mifaro/IMG-0990_mgVHpGR8.jpg"
          }
        },
        "datePublished": (() => {
          const months: { [key: string]: string } = {
            'Enero': '01', 'Febrero': '02', 'Marzo': '03', 'Abril': '04',
            'Mayo': '05', 'Junio': '06', 'Julio': '07', 'Agosto': '08',
            'Septiembre': '09', 'Octubre': '10', 'Noviembre': '11', 'Diciembre': '12'
          };
          try {
            // Expected format: "23 de Abril, 2026"
            const parts = post.date.replace(' de ', ' ').replace(',', '').split(' ');
            if (parts.length === 3) {
              const day = parts[0].padStart(2, '0');
              const month = months[parts[1]] || '01';
              const year = parts[2];
              return `${year}-${month}-${day}`;
            }
          } catch (e) {
            console.error('Error parsing date:', e);
          }
          return "2026-04-10"; // Fallback
        })(),
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": post.category === 'Las Voces del Faro' ? `https://mifaro.es/recursos/voces/${post.id}` : `https://mifaro.es/recursos/${post.id}`
        }
      }} />
      {post.category === 'Las Voces del Faro' ? (
        <section className="relative pt-24 pb-20 lg:pt-36 lg:pb-28 overflow-hidden flex items-center min-h-[55vh] lg:min-h-[70vh] mb-16 bg-ink">
          <div className="absolute inset-0 z-0">
            <img 
              src={getHeroImageUrl(post, 1200)} 
              srcSet={getHeroSrcSet(post)}
              sizes="100vw"
              alt={post.title}
              className={`w-full h-full object-cover ${post.image?.position || post.imagePosition || 'object-[15%_50%]'} lg:object-center opacity-50 grayscale-[0.15] brightness-100`}
              referrerPolicy="no-referrer"
              fetchPriority="high"
              decoding="async"
            />
            {post.heroTextSide === 'right' ? (
              <div className="absolute inset-0 bg-gradient-to-l from-ink/28 via-ink/8 to-transparent lg:from-ink/10 lg:via-ink/3 lg:to-transparent" />
            ) : (
              <div className="absolute inset-0 bg-gradient-to-r from-ink/28 via-ink/8 to-transparent lg:from-ink/10 lg:via-ink/3 lg:to-transparent" />
            )}
            <div className="absolute inset-x-0 bottom-0 h-32 lg:h-48 bg-gradient-to-b from-transparent to-offwhite" />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
            <div className={`max-w-3xl ${post.heroTextSide === 'right' ? 'ml-auto text-right flex flex-col items-end' : ''}`}>
              <Link 
                to="/recursos/voces"
                className={`inline-flex items-center gap-2 text-olive-light font-medium hover:text-white transition-colors group ${
                  post.id === 'lucia-creia-que-sin-el-no-iba-a-poder-seguir'
                    ? '-ml-2 mb-4 md:ml-0 md:mb-8'
                    : 'mb-8'
                }`}
              >
                <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
                Volver a las Voces del Faro
              </Link>

              <div 
                className={`flex text-sm text-white/80 font-light ${
                  post.heroTextSide === 'right' ? 'justify-end' : ''
                } ${
                  post.id === 'lucia-creia-que-sin-el-no-iba-a-poder-seguir'
                    ? 'flex-col items-start gap-2 -ml-2 mb-6 md:flex-row md:items-center md:gap-4 md:ml-0 md:mb-6'
                    : 'flex-wrap items-center gap-4 mb-6'
                }`}
              >
                <span className="flex items-center gap-1.5 text-olive-light font-medium">
                  <Tag size={14} />
                  {post.category}
                </span>
                <span className="flex items-center gap-1.5">
                  <Calendar size={14} />
                  {post.date}
                </span>
              </div>

              <h1 
                className="font-serif text-offwhite mb-6 tracking-tight text-4xl md:text-5xl lg:text-6xl leading-[1.15]"
              >
                {renderStyledTitle(post.id, post.title)}
              </h1>

              <p 
                className={`text-lg md:text-xl text-white/90 font-light leading-relaxed max-w-2xl ${post.heroTextSide === 'right' ? 'text-right' : ''}`}
              >
                {post.excerpt}
              </p>
            </div>
          </div>
        </section>
      ) : post.heroFullWidth ? (
        <section className="relative pt-24 pb-20 lg:pt-36 lg:pb-28 overflow-hidden flex items-center min-h-[50vh] md:min-h-[60vh] lg:min-h-[70vh] mb-16">
          <div className="absolute inset-0 z-0">
            <img
              src={getHeroImageUrl(post, 1200)}
              srcSet={getHeroSrcSet(post)}
              sizes="100vw"
              alt={post.title}
              className={`w-full h-full object-cover ${post.image?.position || post.imagePosition || 'object-center'} opacity-55 mix-blend-multiply grayscale-[0.05]`}
              referrerPolicy="no-referrer"
              fetchPriority="high"
              decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-offwhite via-offwhite/85 to-transparent lg:from-offwhite/95 lg:via-offwhite/75 lg:to-transparent" />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
            <div className="max-w-3xl text-left">
              <Link
                to="/recursos"
                className="inline-flex items-center gap-2 text-olive font-medium hover:text-olive-light transition-colors mb-8 group"
              >
                <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
                Volver a todos los artículos
              </Link>

              <div className="flex flex-wrap items-center gap-4 text-sm text-ink-light mb-6 font-light">
                <span className="flex items-center gap-1.5 text-olive font-medium">
                  <Tag size={14} />
                  {post.category}
                </span>
                <span className="flex items-center gap-1.5">
                  <Calendar size={14} />
                  {post.date}
                </span>
                <span className="flex items-center gap-1.5">
                  <User size={14} />
                  {post.author}
                </span>
              </div>

              <h1 className="font-serif text-ink mb-6 tracking-tight text-4xl md:text-5xl lg:text-6xl leading-[1.15]">
                {renderStyledTitle(post.id, post.title)}
              </h1>

              <p className="text-lg md:text-xl text-ink-light font-light leading-relaxed">
                {post.excerpt}
              </p>
            </div>
          </div>
        </section>
      ) : (
        <>
          {/* Content Container */}
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <motion.div 
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              className="mb-12"
            >
              <Link 
                to="/recursos"
                className="inline-flex items-center gap-2 text-olive font-medium hover:text-olive-light transition-colors mb-8 group"
              >
                <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
                Volver a todos los artículos
              </Link>

              <div className="flex flex-wrap items-center gap-4 text-sm text-ink-light mb-6 font-light">
                <span className="flex items-center gap-1.5 text-olive font-medium">
                  <Tag size={14} />
                  {post.category}
                </span>
                <span className="flex items-center gap-1.5">
                  <Calendar size={14} />
                  {post.date}
                </span>
                <span className="flex items-center gap-1.5">
                  <User size={14} />
                  {post.author}
                </span>
              </div>

              <h1 className={`font-serif text-ink mb-6 tracking-tight ${
                post.title.length > 60 
                  ? "text-3xl md:text-4xl lg:text-[2.75rem] leading-[1.2]" 
                  : "text-4xl md:text-5xl lg:text-6xl leading-[1.15]"
              }`}>
                {renderStyledTitle(post.id, post.title)}
              </h1>

              <p className="text-lg md:text-xl text-ink-light font-light leading-relaxed">
                {post.excerpt}
              </p>
            </motion.div>
          </div>

          {/* Hero Image */}
          <motion.div 
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mb-16"
          >
            <div className="aspect-[16/9] md:aspect-[21/9] rounded-2xl overflow-hidden shadow-sm">
              <img 
                src={getHeroImageUrl(post, 1200)} 
                srcSet={getHeroSrcSet(post)}
                sizes="(min-width: 1024px) 1024px, 100vw"
                alt={post.title}
                className={`w-full h-full object-cover ${post.image?.position || post.imagePosition || 'object-center'}`}
                referrerPolicy="no-referrer"
                fetchPriority="high"
                decoding="async"
              />
            </div>
          </motion.div>
        </>
      )}

      {post.category === 'Las Voces del Faro' && (
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 -mt-6">
          <p className="text-[13px] text-ink-light/70 italic font-light leading-relaxed">
            *Estas historias están basadas en experiencias reales y se publican con la autorización de sus protagonistas. Para proteger su intimidad, los nombres, las imágenes y algunos detalles identificativos han sido modificados, preservando siempre la esencia de cada proceso.
          </p>
        </div>
      )}

      {post.category === 'Las Voces del Faro' && post.authorName && (
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 font-sans">
          <span className="block text-[11px] tracking-wider text-ink-light/60 font-normal mb-0.5">
            {post.authorRole || 'Historia adaptada y escrita por'}
          </span>
          <span className="block text-[15px] font-serif text-olive font-medium">
            {post.authorName}
          </span>
        </div>
      )}

      {/* Markdown Content */}
      {post.id === 'ana-el-cauce-y-el-primer-paso' ? (
        <AnaStoryContent />
      ) : (
        <div>
          {contentParts.length > 0 ? (
            post.id === 'familias-adicciones-valencia-como-acompanar-sin-destruirse' ? (
              <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 markdown-body">
                <ReactMarkdown components={markdownComponents}>{contentParts[0]}</ReactMarkdown>
                <MetricsInfography />
                <ReactMarkdown components={markdownComponents}>{contentParts[1]}</ReactMarkdown>
                <PatternsInfography />
                <ReactMarkdown components={markdownComponents}>{contentParts[2]}</ReactMarkdown>
                <ChecklistInfography />
                <ReactMarkdown components={markdownComponents}>{contentParts[3]}</ReactMarkdown>
              </div>
            ) : (
              <>
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 markdown-body">
                  <ReactMarkdown components={markdownComponents}>{contentParts[0]}</ReactMarkdown>
                </div>
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                  <ComparisonBlock {...post.comparisonBlock!} />
                </div>
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 markdown-body">
                  <ReactMarkdown components={markdownComponents}>{contentParts[1]}</ReactMarkdown>
                </div>
              </>
            )
          ) : (
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 markdown-body">
              <ReactMarkdown components={markdownComponents}>{post.content}</ReactMarkdown>
              {post.comparisonBlock && (
                <div className="max-w-5xl mx-auto mt-8">
                  <ComparisonBlock {...post.comparisonBlock} />
                </div>
              )}
            </div>
          )}

          {post.category === 'Las Voces del Faro' && (
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
              <VoicesStoryBlocks
                situations={post.storySituations}
                faqs={post.storyFaqs}
                whereToStart={post.storyWhereToStart}
                ctaLanding={post.storyCtaLanding}
              />
            </div>
          )}
        </div>
      )}

      {/* CTA WhatsApp */}
      {post.category !== 'Las Voces del Faro' && (
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mb-12"
        >
          <div className="border-t border-sand pt-12 text-center">
            <p className="text-lg text-ink font-light mb-8">
              Si algo de lo que leíste te resuena, puedes escribirnos. Sin compromiso. Solo para ver si tiene sentido seguir hablando.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://wa.me/34611568705"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsAppClick('blog_cta', 'https://wa.me/34611568705')}
                className="inline-flex items-center justify-center gap-3 bg-white text-ink border border-sand/30 px-8 py-4 rounded-full text-sm font-medium tracking-widest uppercase hover:bg-sand/10 transition-all font-sans shadow-sm"
              >
                WhatsApp
              </a>
              <a
                href="/contacto"
                className="inline-flex items-center justify-center bg-olive text-offwhite px-8 py-4 rounded-full text-sm font-medium tracking-widest uppercase hover:bg-olive-light transition-all font-sans"
              >
                Contacto
              </a>
            </div>
          </div>
        </motion.div>
      )}

      <ReviewsBlock />

      <RelatedArticles currentPostId={post.id} category={post.category} limit={3} />

      {/* Share / Footer */}
      <motion.div 
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
        className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mb-24"
      >
        <div className="mt-16 flex items-center justify-between border-t border-sand pt-8">
          <p className="text-sm text-ink-light font-light">
            ¿Te resultó útil este artículo? Compártelo con quien pueda necesitarlo.
          </p>
          <button 
            onClick={() => navigator.clipboard.writeText(window.location.href)}
            className="text-olive hover:text-olive-light font-medium text-sm transition-colors"
          >
            Copiar enlace
          </button>
        </div>
      </motion.div>
    </article>
  );
}
