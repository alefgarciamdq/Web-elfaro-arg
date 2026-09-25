import { motion } from 'framer-motion';
import { Head } from 'vite-react-ssg';

export default function Cookies() {
  return (
    <div className="pt-24 pb-24 px-4 sm:px-6 lg:px-8 max-w-[820px] mx-auto font-sans">
      <Head>
        <title>Política de Cookies | El Faro Argentina</title>
        <meta name="robots" content="noindex, nofollow" />
        <meta name="description" content="Política de cookies de El Faro Argentina. Información sobre el uso de cookies técnicas en el sitio web." />
      </Head>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#F6F2EA] mb-10 tracking-tight">Política de cookies</h1>
        
        <div className="space-y-12 sm:space-y-14 text-[17px] sm:text-[18px] text-[#C8C4BB] font-light leading-[1.8]">
          
          <section>
            <p className="text-lg sm:text-xl text-[#DDD8CD] leading-relaxed font-light">
              Este sitio web utiliza cookies y tecnologías similares para mejorar la experiencia del usuario y analizar el tráfico. A continuación, le explicamos qué son las cookies, cuáles utilizamos y cómo puede gestionarlas.
            </p>
          </section>

          <section className="pt-10 border-t border-white/10">
            <h2 className="text-lg sm:text-xl font-medium text-[#E7E0D3] mb-5 uppercase tracking-wider">1. ¿Qué son las cookies?</h2>
            <p>
              Las cookies son pequeños archivos de texto que los sitios web almacenan en su dispositivo (ordenador, tableta, teléfono móvil) cuando los visita. Permiten recordar sus preferencias, facilitar la navegación y recopilar información estadística sobre el uso del sitio.
            </p>
          </section>

          <section className="pt-10 border-t border-white/10">
            <h2 className="text-lg sm:text-xl font-medium text-[#E7E0D3] mb-5 uppercase tracking-wider">2. ¿Qué tecnologías utilizamos en este sitio?</h2>
            <p className="mb-4">
              En el sitio web de El Faro Argentina no se utilizan cookies publicitarias ni herramientas de rastreo comercial cruzado. Únicamente se emplean las siguientes tecnologías estrictamente vinculadas a la funcionalidad técnica y a la medición de uso:
            </p>
            <ul className="list-disc pl-6 space-y-4">
              <li>
                <strong className="font-medium text-[#F6F2EA]">Almacenamiento local técnico (localStorage):</strong> Empleamos el almacenamiento local del navegador para guardar el registro de confirmación del aviso de cookies (<code className="text-[#D4AF37] font-mono text-sm">cookie_consent</code>). Esta clave tiene como única finalidad recordar su preferencia para no reiterar el aviso en visitas sucesivas y no recopila datos personales ni información de navegación.
              </li>
              <li>
                <strong className="font-medium text-[#F6F2EA]">Medición técnica de interacción (Google Tag Manager):</strong> Contamos con una integración técnica para registrar eventos generales de uso (como clics en enlaces directos de WhatsApp o confirmación técnica de recepción de consultas por formulario). Esta medición opera de manera agregada para garantizar la estabilidad del servicio y no se vincula a perfiles individuales ni a fines comerciales.
              </li>
              <li>
                <strong className="font-medium text-[#F6F2EA]">Ausencia de cookies publicitarias o de terceros:</strong> Este sitio web no utiliza cookies de publicidad comportamental, no realiza remarketing ni comercializa espacios publicitarios o datos con terceros.
              </li>
            </ul>
          </section>

          <section className="pt-10 border-t border-white/10">
            <h2 className="text-lg sm:text-xl font-medium text-[#E7E0D3] mb-5 uppercase tracking-wider">3. Gestión y desactivación de cookies</h2>
            <p className="mb-4">
              Usted puede permitir, bloquear o eliminar las cookies instaladas en su equipo mediante la configuración de las opciones del navegador instalado en su ordenador. A continuación, le ofrecemos enlaces a la información sobre cómo gestionar las cookies en los navegadores más comunes:
            </p>
            <ul className="list-disc pl-6 space-y-2.5">
              <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-[#D4AF37] hover:text-[#F6F2EA] underline underline-offset-4 decoration-[#D4AF37]/50 hover:decoration-[#F6F2EA] transition-colors">Google Chrome</a></li>
              <li><a href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias" target="_blank" rel="noopener noreferrer" className="text-[#D4AF37] hover:text-[#F6F2EA] underline underline-offset-4 decoration-[#D4AF37]/50 hover:decoration-[#F6F2EA] transition-colors">Mozilla Firefox</a></li>
              <li><a href="https://support.apple.com/es-es/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-[#D4AF37] hover:text-[#F6F2EA] underline underline-offset-4 decoration-[#D4AF37]/50 hover:decoration-[#F6F2EA] transition-colors">Safari</a></li>
              <li><a href="https://support.microsoft.com/es-es/windows/eliminar-y-administrar-cookies-168dab11-0753-043d-7c16-ede5947fc64d" target="_blank" rel="noopener noreferrer" className="text-[#D4AF37] hover:text-[#F6F2EA] underline underline-offset-4 decoration-[#D4AF37]/50 hover:decoration-[#F6F2EA] transition-colors">Microsoft Edge</a></li>
            </ul>
            <p className="mt-4">
              Tenga en cuenta que, si desactiva las cookies, es posible que algunas funcionalidades del sitio web no funcionen correctamente.
            </p>
          </section>

          <section className="pt-10 border-t border-white/10">
            <h2 className="text-lg sm:text-xl font-medium text-[#E7E0D3] mb-5 uppercase tracking-wider">4. Actualización de la política de cookies</h2>
            <p>
              Es posible que actualicemos la Política de Cookies de nuestro sitio web, por ello le recomendamos revisar esta política cada vez que acceda a nuestro sitio web con el objetivo de estar adecuadamente informado sobre cómo y para qué usamos las cookies.
            </p>
          </section>

        </div>
      </motion.div>
    </div>
  );
}
