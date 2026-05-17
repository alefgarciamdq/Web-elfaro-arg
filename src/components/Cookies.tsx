import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

export default function Cookies() {
  return (
    <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto font-sans">
      <Helmet>
        <title>Política de Cookies | El Faro</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-ink mb-8">Política de cookies</h1>
        
        <div className="prose prose-lg prose-ink max-w-none font-light leading-relaxed space-y-12">
          
          <section>
            <p className="text-lg text-ink-light">
              Este sitio web utiliza cookies y tecnologías similares para mejorar la experiencia del usuario y analizar el tráfico. A continuación, le explicamos qué son las cookies, cuáles utilizamos y cómo puede gestionarlas.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-medium text-ink mb-4 uppercase tracking-wide">1. ¿Qué son las cookies?</h2>
            <p className="text-ink-light">
              Las cookies son pequeños archivos de texto que los sitios web almacenan en su dispositivo (ordenador, tableta, teléfono móvil) cuando los visita. Permiten recordar sus preferencias, facilitar la navegación y recopilar información estadística sobre el uso del sitio.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-medium text-ink mb-4 uppercase tracking-wide">2. ¿Qué tipos de cookies utilizamos?</h2>
            <p className="text-ink-light mb-4">
              En el sitio web de El Faro utilizamos las siguientes categorías de cookies:
            </p>
            <ul className="list-disc pl-6 space-y-4 text-ink-light">
              <li>
                <strong className="font-medium text-ink">Cookies técnicas (necesarias):</strong> Son esenciales para el correcto funcionamiento del sitio web. Permiten la navegación y el uso de las diferentes opciones o servicios que en él existen.
              </li>
              <li>
                <strong className="font-medium text-ink">Cookies de análisis:</strong> Permiten cuantificar el número de usuarios y realizar la medición y análisis estadístico de la utilización que hacen los usuarios del servicio ofertado.
              </li>
              <li>
                <strong className="font-medium text-ink">Cookies de personalización:</strong> Permiten recordar información para que el usuario acceda al servicio con determinadas características que pueden diferenciar su experiencia de la de otros usuarios.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-medium text-ink mb-4 uppercase tracking-wide">3. Gestión y desactivación de cookies</h2>
            <p className="text-ink-light mb-4">
              Usted puede permitir, bloquear o eliminar las cookies instaladas en su equipo mediante la configuración de las opciones del navegador instalado en su ordenador. A continuación, le ofrecemos enlaces a la información sobre cómo gestionar las cookies en los navegadores más comunes:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-ink-light">
              <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-olive hover:underline">Google Chrome</a></li>
              <li><a href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias" target="_blank" rel="noopener noreferrer" className="text-olive hover:underline">Mozilla Firefox</a></li>
              <li><a href="https://support.apple.com/es-es/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-olive hover:underline">Safari</a></li>
              <li><a href="https://support.microsoft.com/es-es/windows/eliminar-y-administrar-cookies-168dab11-0753-043d-7c16-ede5947fc64d" target="_blank" rel="noopener noreferrer" className="text-olive hover:underline">Microsoft Edge</a></li>
            </ul>
            <p className="text-ink-light mt-4">
              Tenga en cuenta que, si desactiva las cookies, es posible que algunas funcionalidades del sitio web no funcionen correctamente.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-medium text-ink mb-4 uppercase tracking-wide">4. Actualización de la política de cookies</h2>
            <p className="text-ink-light">
              Es posible que actualicemos la Política de Cookies de nuestro sitio web, por ello le recomendamos revisar esta política cada vez que acceda a nuestro sitio web con el objetivo de estar adecuadamente informado sobre cómo y para qué usamos las cookies.
            </p>
          </section>

        </div>
      </motion.div>
    </div>
  );
}
