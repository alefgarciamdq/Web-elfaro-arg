import { MapPin, Phone, Mail, Send, CheckCircle2, AlertCircle, Loader2, MessageCircle, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { Head } from 'vite-react-ssg';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { fadeUp, viewportConfig } from '../utils/animations';
import { trackFormSubmitSuccess, trackWhatsAppClick, trackPhoneClick } from '../utils/telemetry';
import JsonLd from './JsonLd';

export default function Contacto() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    country: 'ar',
    name: '',
    email: '',
    message: '',
    consent: false
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.country) newErrors.country = 'Por favor, selecciona un país.';
    if (!formData.name.trim()) newErrors.name = 'Por favor, introduce tu nombre.';
    if (!formData.email.trim()) {
      newErrors.email = 'Por favor, introduce tu email.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'El formato del email no es válido.';
    }
    if (!formData.message.trim()) newErrors.message = 'Por favor, escribe un mensaje.';
    if (!formData.consent) newErrors.consent = 'Es necesario aceptar la política de privacidad.';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('sending');

    try {
      const response = await fetch('https://formspree.io/f/xzdklgpb', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus('success');
        trackFormSubmitSuccess('contact_form');
        setFormData({ country: 'ar', name: '', email: '', message: '', consent: false });
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Error enviando el formulario:', error);
      setStatus('error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { id, value, type } = e.target as HTMLInputElement;
    const val = type === 'checkbox' ? (e.target as HTMLInputElement).checked : value;
    
    setFormData(prev => ({ ...prev, [id]: val }));
    if (errors[id]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[id];
        return newErrors;
      });
    }
  };

  return (
    <div className="bg-faro-bg text-faro-ink min-h-screen">
      <Head>
        <title>Contacto · El Faro Argentina · Mar del Plata</title>
        <meta name="description" content="Escribinos o llamanos. Garay 2073, Mar del Plata, Argentina. Un primer encuentro sin compromiso para orientarte sobre qué tiene más sentido en tu situación." />
        <link rel="canonical" href="https://programaelfaro.com.ar/contacto" />
        <meta property="og:title" content="Contacto · El Faro Argentina · Mar del Plata" />
        <meta property="og:description" content="Escribinos o llamanos en Mar del Plata. Un primer encuentro sin compromiso." />
        <meta property="og:image" content="https://res.cloudinary.com/dwv5ehc6e/image/upload/f_auto,q_auto/v1779830063/mifaro/Adicciones_valencia_4yK1z7PX.jpg" />
        <meta property="og:url" content="https://programaelfaro.com.ar/contacto" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contacto · El Faro Argentina" />
        <meta name="twitter:description" content="Escribinos o llamanos en Mar del Plata. Un primer encuentro sin compromiso." />
        <meta name="twitter:image" content="https://res.cloudinary.com/dwv5ehc6e/image/upload/f_auto,q_auto/v1779830063/mifaro/Adicciones_valencia_4yK1z7PX.jpg" />
      </Head>

      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "ContactPage",
        "name": "Contacto · El Faro Argentina",
        "description": "Canales de contacto y primera consulta en Mar del Plata. Atención presencial en Garay 2073 y atención online.",
        "url": "https://programaelfaro.com.ar/contacto",
        "mainEntity": {
          "@type": "Organization",
          "name": "El Faro Argentina",
          "legalName": "Asociación Civil Arco Baleno",
          "taxID": "30-68558066-3",
          "telephone": "+54 223 4921953",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Garay 2073",
            "addressLocality": "Mar del Plata",
            "addressRegion": "Buenos Aires",
            "addressCountry": "AR"
          }
        }
      }} />

      {/* Hero */}
      <section className="relative pt-32 pb-16 lg:pt-48 lg:pb-24 overflow-hidden bg-faro-bg-alt/40 border-b border-faro-olive/30">
        <div className="absolute inset-0 z-0">
          <img
            src="https://res.cloudinary.com/dwv5ehc6e/image/upload/f_auto,q_auto/v1779830063/mifaro/Adicciones_valencia_4yK1z7PX.jpg"
            alt="Contacto El Faro Argentina"
            className="w-full h-full object-cover opacity-55 mix-blend-luminosity"
            referrerPolicy="no-referrer"
            fetchPriority="high"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-faro-bg/30 via-faro-bg/60 to-faro-bg" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-faro-ink mb-6 leading-tight">
              Hablemos
            </h1>
            <p className="text-xl text-faro-ink/80 font-light leading-relaxed">
              Estamos en Mar del Plata. Un primer encuentro sin compromiso para orientarte sobre qué tiene más sentido en tu situación.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-faro-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Bloque Humano */}
          <motion.div 
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="max-w-2xl mx-auto text-center mb-16"
          >
            <h2 className="text-3xl font-serif text-faro-ink mb-6">No hace falta saber cómo contarlo</h2>
            <div className="space-y-4">
              <p className="text-lg text-faro-ink/80 font-light italic">
                A veces basta con una frase simple como:
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4 text-faro-gold font-medium mb-8">
                <span className="px-6 py-2 bg-faro-bg-alt rounded-full border border-faro-olive/30">"No sé bien qué me pasa"</span>
                <span className="px-6 py-2 bg-faro-bg-alt rounded-full border border-faro-olive/30">"Me preocupa alguien cercano"</span>
              </div>
              <Link to="/como-pedir-ayuda-psicologia-mar-del-plata" className="inline-block text-faro-ink/80 hover:text-faro-gold transition-colors text-sm border-b border-faro-olive/40 hover:border-faro-gold pb-1">
                ¿Aún no sabes si pedir cita? Ver cuándo pedir ayuda →
              </Link>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            
            <div className="space-y-8">
              {/* WhatsApp Directo */}
              <div className="bg-faro-bg-alt p-10 rounded-[2.5rem] border border-faro-olive/30 shadow-sm transition-all hover:border-faro-gold/40">
                <div className="w-16 h-16 bg-faro-gold/10 rounded-2xl flex items-center justify-center mb-8">
                  <MessageCircle className="text-faro-gold" size={32} />
                </div>
                <h3 className="text-2xl font-serif text-faro-ink mb-4">La vía rápida por WhatsApp</h3>
                <p className="text-faro-ink/75 font-light leading-relaxed mb-8">
                  Escríbenos directamente por mensaje de WhatsApp para una orientación inicial o coordinar una entrevista.
                </p>
                <a 
                  href="https://wa.me/5492235923790?text=Hola,%20quisiera%20hacer%20una%20consulta%20en%20El%20Faro." 
                  target="_blank" 
                  rel="noopener noreferrer"
                  onClick={() => trackWhatsAppClick('contact_card', 'https://wa.me/5492235923790?text=Hola,%20quisiera%20hacer%20una%20consulta%20en%20El%20Faro.')}
                  className="inline-flex items-center justify-center gap-3 w-full sm:w-auto bg-faro-gold text-faro-bg px-10 py-5 rounded-2xl font-semibold tracking-wide text-lg hover:bg-faro-gold/90 transition-all shadow-md"
                >
                  <MessageCircle size={22} />
                  Enviar WhatsApp (+54 9 223 592 3790)
                </a>
              </div>

              <div className="grid grid-cols-1 gap-4">
                <div className="p-8 rounded-3xl bg-faro-bg-alt/60 border border-faro-olive/30 text-center">
                  <h4 className="font-serif text-faro-gold text-xl mb-3">Mar del Plata, Argentina</h4>
                  <p className="text-sm text-faro-ink/80 font-light leading-relaxed mb-4">Garay 2073 · Orientación y atención presencial.</p>
                  <a 
                    href="tel:+542234921953" 
                    onClick={() => trackPhoneClick('contact_card', '+542234921953')}
                    className="text-base font-medium text-faro-ink hover:text-faro-gold flex items-center justify-center gap-2"
                  >
                    <Phone size={16} className="text-faro-gold" /> Tel. Fijo: +54 223 4921953
                  </a>
                </div>
              </div>
            </div>

            {/* Formulario */}
            <div className="bg-faro-bg-alt p-10 rounded-[2.5rem] text-faro-ink border border-faro-olive/30 shadow-xl relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-2xl font-serif mb-2 text-faro-ink">Pedir consulta</h3>
                <p className="text-faro-ink/75 font-light text-sm mb-8">Si prefieres dejarnos tus datos y que te contactemos.</p>
                
                {status === 'success' ? (
                  <div className="bg-faro-bg/50 border border-faro-olive/30 p-8 rounded-2xl text-center">
                    <div className="w-16 h-16 bg-faro-gold/20 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 size={32} className="text-faro-gold" />
                    </div>
                    <h3 className="text-2xl font-serif text-faro-ink mb-4">¡Mensaje enviado!</h3>
                    <p className="text-faro-ink/80 font-light mb-8">
                      Tu mensaje se ha enviado correctamente. Nos pondremos en contacto contigo a la brevedad.
                    </p>
                    <button 
                      onClick={() => setStatus('idle')}
                      className="text-faro-gold font-medium hover:underline flex items-center gap-2 mx-auto"
                    >
                      Enviar otro mensaje <ArrowRight size={16} />
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="name" className="block text-xs font-medium text-faro-gold uppercase tracking-widest mb-2">Nombre</label>
                        <input 
                          type="text" 
                          id="name" 
                          value={formData.name}
                          onChange={handleChange}
                          className={`w-full bg-faro-bg border ${errors.name ? 'border-red-400' : 'border-faro-olive/40'} rounded-xl px-4 py-4 text-faro-ink focus:outline-none focus:border-faro-gold transition-colors placeholder:text-faro-ink/40`} 
                          placeholder="Tu nombre" 
                        />
                        {errors.name && <p className="text-red-400 text-[10px] mt-1">{errors.name}</p>}
                      </div>

                      <div>
                        <label htmlFor="country" className="block text-xs font-medium text-faro-gold uppercase tracking-widest mb-2">País</label>
                        <select 
                          id="country" 
                          value={formData.country}
                          onChange={handleChange}
                          className={`w-full bg-faro-bg border ${errors.country ? 'border-red-400' : 'border-faro-olive/40'} rounded-xl px-4 py-4 text-faro-ink focus:outline-none focus:border-faro-gold transition-colors appearance-none cursor-pointer`}
                        >
                          <option value="ar" className="bg-faro-bg text-faro-ink">Argentina</option>
                          <option value="es" className="bg-faro-bg text-faro-ink">España</option>
                          <option value="other" className="bg-faro-bg text-faro-ink">Otro</option>
                        </select>
                        {errors.country && <p className="text-red-400 text-[10px] mt-1">{errors.country}</p>}
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-xs font-medium text-faro-gold uppercase tracking-widest mb-2">Email</label>
                      <input 
                        type="email" 
                        id="email" 
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full bg-faro-bg border ${errors.email ? 'border-red-400' : 'border-faro-olive/40'} rounded-xl px-4 py-4 text-faro-ink focus:outline-none focus:border-faro-gold transition-colors placeholder:text-faro-ink/40`} 
                        placeholder="tu@email.com" 
                      />
                      {errors.email && <p className="text-red-400 text-[10px] mt-1">{errors.email}</p>}
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-xs font-medium text-faro-gold uppercase tracking-widest mb-2">Mensaje</label>
                      <p className="text-xs text-faro-ink/70 font-light leading-relaxed mb-2.5">
                        Para este primer contacto no necesitás incluir información clínica detallada ni otros datos sensibles. Podemos hablar de eso en un espacio adecuado.
                      </p>
                      <textarea 
                        id="message" 
                        rows={4} 
                        value={formData.message}
                        onChange={handleChange}
                        className={`w-full bg-faro-bg border ${errors.message ? 'border-red-400' : 'border-faro-olive/40'} rounded-xl px-4 py-4 text-faro-ink focus:outline-none focus:border-faro-gold transition-colors placeholder:text-faro-ink/40`} 
                        placeholder="¿En qué podemos ayudarte?"
                      ></textarea>
                      {errors.message && <p className="text-red-400 text-[10px] mt-1">{errors.message}</p>}
                    </div>

                    <div className="flex flex-col gap-2">
                      <div className="flex items-start gap-3 group cursor-pointer">
                        <div className="relative flex items-center pt-1">
                          <input
                            type="checkbox"
                            id="consent"
                            checked={formData.consent}
                            onChange={handleChange}
                            className="peer appearance-none w-5 h-5 border border-faro-olive/40 rounded bg-faro-bg checked:bg-faro-gold checked:border-faro-gold transition-all cursor-pointer"
                          />
                          <svg
                            className="absolute w-3.5 h-3.5 mt-1 hidden peer-checked:block text-faro-bg pointer-events-none left-[3px] top-[1px]"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="4"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <label htmlFor="consent" className="text-[11px] font-light text-faro-ink/75 leading-relaxed cursor-pointer select-none">
                          He leído y acepto la{' '}
                          <Link to="/privacidad" className="underline hover:text-faro-gold transition-colors">
                            Política de Privacidad
                          </Link>
                        </label>
                      </div>
                      {errors.consent && <p className="text-red-400 text-[10px]">{errors.consent}</p>}
                    </div>

                    {status === 'error' && (
                      <div className="flex items-center gap-2 text-red-400 bg-red-950/20 p-4 rounded-xl border border-red-800/30">
                        <AlertCircle size={18} />
                        <p className="text-sm">Ha ocurrido un error. Inténtalo de nuevo.</p>
                      </div>
                    )}

                    <button 
                      type="submit" 
                      disabled={status === 'sending'}
                      className="w-full bg-faro-gold text-faro-bg px-8 py-5 rounded-xl font-semibold tracking-widest uppercase text-sm hover:bg-faro-gold/90 transition-all flex items-center justify-center gap-3 mt-4 disabled:opacity-50 disabled:cursor-not-allowed shadow-md"
                    >
                      {status === 'sending' ? (
                        <>
                          Enviando...
                          <Loader2 size={18} className="animate-spin" />
                        </>
                      ) : (
                        <>
                          Enviar mensaje
                          <Send size={18} />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Sedes y Presencia */}
      <section className="py-24 bg-faro-bg-alt/40 border-t border-faro-olive/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-serif text-faro-ink mb-12 italic">Nuestras sedes y presencia</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto text-center">
            
            <div className="space-y-6 bg-faro-bg-alt p-10 rounded-[2.5rem] border border-faro-olive/30">
              <span className="text-[11px] uppercase tracking-widest text-faro-gold font-medium block">Sede Principal</span>
              <h4 className="text-2xl font-serif text-faro-ink">Mar del Plata · Argentina</h4>
              <div className="space-y-3 text-faro-ink/80 font-light text-sm">
                <p className="flex items-center justify-center gap-3"><MapPin size={18} className="text-faro-gold shrink-0" /> Garay 2073, Mar del Plata</p>
                <p className="flex items-center justify-center gap-3"><Phone size={18} className="text-faro-gold shrink-0" /> Fijo: +54 223 4921953</p>
                <p className="flex items-center justify-center gap-3"><MessageCircle size={18} className="text-faro-gold shrink-0" /> WhatsApp: +54 9 223 592 3790</p>
                <p className="flex items-center justify-center gap-3 text-xs opacity-75">Orientación y atención presencial</p>
              </div>
            </div>

            <div className="space-y-6 bg-faro-bg-alt p-10 rounded-[2.5rem] border border-faro-olive/30">
              <span className="text-[11px] uppercase tracking-widest text-faro-gold font-medium block">Presencia en España</span>
              <h4 className="text-2xl font-serif text-faro-ink">Valencia · España</h4>
              <div className="space-y-3 text-faro-ink/80 font-light text-sm">
                <p className="flex items-center justify-center gap-3"><Phone size={18} className="text-faro-gold shrink-0" /> Teléfono: +34 611 568 705</p>
                <p className="flex items-center justify-center gap-3 text-xs opacity-75">Red profesional y consultas internacionales</p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
