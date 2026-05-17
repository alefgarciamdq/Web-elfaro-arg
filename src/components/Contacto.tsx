import { MapPin, Phone, Mail, Send, CheckCircle2, AlertCircle, Loader2, PhoneCall, MessageCircle, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { fadeUp, staggerContainer, viewportConfig } from '../utils/animations';
import { CONTACT } from '../data/contact';

export default function Contacto() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    country: '',
    name: '',
    email: '',
    message: '',
    consent: false
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.country) newErrors.country = 'Por favor, seleccioná un país.';
    if (!formData.name.trim()) newErrors.name = 'Por favor, ingresá tu nombre.';
    if (!formData.email.trim()) {
      newErrors.email = 'Por favor, ingresá tu email.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'El formato del email no es válido.';
    }
    if (!formData.message.trim()) newErrors.message = 'Por favor, escribí un mensaje.';
    if (!formData.consent) newErrors.consent = 'Es necesario aceptar la política de privacidad.';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus('sending');
    try {
      const response = await fetch('https://formspree.io/f/ELFARO_FORM_ID', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        setStatus('success');
        setFormData({ country: '', name: '', email: '', message: '', consent: false });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { id, value, type } = e.target as HTMLInputElement;
    const val = type === 'checkbox' ? (e.target as HTMLInputElement).checked : value;
    setFormData(prev => ({ ...prev, [id]: val }));
    if (errors[id]) {
      setErrors(prev => { const n = { ...prev }; delete n[id]; return n; });
    }
  };

  return (
    <div className="bg-offwhite min-h-screen">
      <Helmet>
        <title>Contacto | El Faro · Mar del Plata</title>
        <meta name="description" content="Contactá con El Faro en Mar del Plata. Primera consulta sin compromiso, por teléfono, WhatsApp o formulario." />
        <link rel="canonical" href="https://programaelfaro.com.ar/contacto" />
      </Helmet>

      {/* Hero */}
      <section className="pt-32 pb-16 lg:pt-48 lg:pb-24 bg-sand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <h1 className="text-5xl md:text-6xl font-serif text-ink mb-6">
              <span className="italic text-olive">Hablemos</span>
            </h1>
            <p className="text-xl text-ink-light font-light leading-relaxed mb-8">
              No hace falta tenerlo todo claro para dar el primer paso. Una conversación inicial es suficiente para entender mejor la situación.
            </p>
            <div className="flex flex-col gap-4">
              <a href={CONTACT.phoneARHref} className="inline-flex items-center gap-3 text-ink hover:text-olive transition-colors group">
                <PhoneCall size={22} className="text-olive group-hover:scale-110 transition-transform" />
                <span className="text-xl font-medium tracking-wider">{CONTACT.phoneAR}</span>
              </a>
              <a
                href={CONTACT.whatsappAR}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-ink hover:text-olive transition-colors group"
              >
                <MessageCircle size={22} className="text-olive group-hover:scale-110 transition-transform" />
                <span className="text-lg font-medium">WhatsApp</span>
              </a>
              <a href={CONTACT.phoneESHref} className="inline-flex items-center gap-3 text-ink-light hover:text-olive transition-colors group ml-1">
                <PhoneCall size={16} className="text-olive/60" />
                <span className="text-sm opacity-70">{CONTACT.phoneES} (España)</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Form + Info */}
      <section className="py-24 bg-offwhite">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Form */}
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportConfig}>
              <h2 className="text-3xl font-serif text-ink mb-8">Formulario de contacto</h2>

              {status === 'success' ? (
                <div className="p-8 rounded-[2rem] bg-olive/10 border border-olive/20 text-center">
                  <CheckCircle2 size={48} className="text-olive mx-auto mb-4" />
                  <h3 className="text-2xl font-serif text-ink mb-2">Mensaje recibido</h3>
                  <p className="text-ink-light font-light">Te respondemos en menos de 24 horas.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="country" className="block text-sm font-medium text-ink mb-2">¿Desde dónde escribís?</label>
                    <select
                      id="country"
                      value={formData.country}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-sand bg-offwhite text-ink focus:outline-none focus:border-olive transition-colors"
                    >
                      <option value="">Seleccioná un país</option>
                      <option value="argentina">Argentina</option>
                      <option value="espana">España</option>
                      <option value="otro">Otro país</option>
                    </select>
                    {errors.country && <p className="text-terra text-sm mt-1">{errors.country}</p>}
                  </div>

                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-ink mb-2">Nombre</label>
                    <input
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Tu nombre"
                      className="w-full px-4 py-3 rounded-xl border border-sand bg-offwhite text-ink focus:outline-none focus:border-olive transition-colors"
                    />
                    {errors.name && <p className="text-terra text-sm mt-1">{errors.name}</p>}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-ink mb-2">Email</label>
                    <input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="tu@email.com"
                      className="w-full px-4 py-3 rounded-xl border border-sand bg-offwhite text-ink focus:outline-none focus:border-olive transition-colors"
                    />
                    {errors.email && <p className="text-terra text-sm mt-1">{errors.email}</p>}
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-ink mb-2">Mensaje</label>
                    <textarea
                      id="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Contanos brevemente la situación..."
                      className="w-full px-4 py-3 rounded-xl border border-sand bg-offwhite text-ink focus:outline-none focus:border-olive transition-colors resize-none"
                    />
                    {errors.message && <p className="text-terra text-sm mt-1">{errors.message}</p>}
                  </div>

                  <div className="flex items-start gap-3">
                    <input
                      id="consent"
                      type="checkbox"
                      checked={formData.consent}
                      onChange={handleChange}
                      className="mt-1"
                    />
                    <label htmlFor="consent" className="text-sm text-ink-light font-light">
                      Acepto la{' '}
                      <Link to="/privacidad" className="text-olive hover:underline">política de privacidad</Link>
                      {' '}y el tratamiento de mis datos.
                    </label>
                  </div>
                  {errors.consent && <p className="text-terra text-sm">{errors.consent}</p>}

                  {status === 'error' && (
                    <div className="flex items-center gap-2 text-terra text-sm">
                      <AlertCircle size={16} />
                      Hubo un error. Por favor, intentá de nuevo o escribinos por WhatsApp.
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="w-full bg-olive text-white px-8 py-4 rounded-full text-sm font-medium tracking-wide uppercase hover:bg-olive-light transition-colors disabled:opacity-50 inline-flex items-center justify-center gap-2"
                  >
                    {status === 'sending' ? (
                      <><Loader2 size={18} className="animate-spin" /> Enviando...</>
                    ) : (
                      <><Send size={18} /> Enviar mensaje</>
                    )}
                  </button>
                </form>
              )}
            </motion.div>

            {/* Info */}
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportConfig} className="space-y-8">
              <div>
                <h2 className="text-3xl font-serif text-ink mb-8">Dónde estamos</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4 p-6 rounded-2xl bg-sand-light border border-sand">
                    <MapPin size={24} className="text-olive mt-1 shrink-0" />
                    <div>
                      <h3 className="font-medium text-ink mb-1">El Faro · Mar del Plata</h3>
                      <p className="text-ink-light font-light text-sm">Mar del Plata, Buenos Aires, Argentina</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-6 rounded-2xl bg-sand-light border border-sand">
                    <Phone size={24} className="text-olive mt-1 shrink-0" />
                    <div>
                      <h3 className="font-medium text-ink mb-1">Teléfono Argentina</h3>
                      <a href={CONTACT.phoneARHref} className="text-ink-light font-light text-sm hover:text-olive transition-colors">{CONTACT.phoneAR}</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-6 rounded-2xl bg-sand-light border border-sand">
                    <Phone size={24} className="text-olive/60 mt-1 shrink-0" />
                    <div>
                      <h3 className="font-medium text-ink mb-1">Teléfono España</h3>
                      <a href={CONTACT.phoneESHref} className="text-ink-light font-light text-sm hover:text-olive transition-colors">{CONTACT.phoneES}</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-6 rounded-2xl bg-sand-light border border-sand">
                    <Mail size={24} className="text-olive mt-1 shrink-0" />
                    <div>
                      <h3 className="font-medium text-ink mb-1">Email</h3>
                      <a href="mailto:info@programaelfaro.com.ar" className="text-ink-light font-light text-sm hover:text-olive transition-colors">info@programaelfaro.com.ar</a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-olive/10 border border-olive/20">
                <p className="text-sm text-ink-light font-light leading-relaxed italic">
                  «No hace falta saber exactamente qué está pasando para escribirnos. Una primera conversación es suficiente para empezar a entenderlo juntos.»
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
