import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { CONTACT } from '../data/contact';

export default function AvisoLegal() {
  return (
    <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto font-sans">
      <Helmet>
        <title>Aviso Legal | El Faro</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-ink mb-8">Aviso legal</h1>
        
        <div className="prose prose-lg prose-ink max-w-none font-light leading-relaxed space-y-12">
          
          <section>
            <p className="text-lg text-ink-light">
              El presente Aviso Legal regula el acceso, navegación y uso del sitio web de El Faro, así como las responsabilidades derivadas de la utilización de sus contenidos.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-medium text-ink mb-4 uppercase tracking-wide">1. TITULARIDAD DEL SITIO</h2>
            <p className="text-ink-light mb-4">
              En cumplimiento de lo dispuesto en la normativa vigente, se informa de que el presente sitio web es titularidad de:
            </p>
            <ul className="list-none pl-0 space-y-2 text-ink-light">
              <li><strong className="font-medium text-ink text-base uppercase tracking-wider block mb-1">MI FARO, salud mental y desarrollo humano</strong></li>
              <li>Asociación sin ánimo de lucro</li>
              <li>NIF: G98957525</li>
              <li>Domicilio social: Plaza Sainetero Arniches 2, piso 4, puerta 7, CP 46014, Valencia, España</li>
              <li>Correo electrónico: <a href="mailto:info@mifaro.org" className="text-olive hover:underline">info@mifaro.org</a></li>
              <li>Correo de contacto adicional: <a href="mailto:alefgarcia@gmail.com" className="text-olive hover:underline">alefgarcia@gmail.com</a></li>
              <li>Teléfono / WhatsApp: {CONTACT.phoneES}</li>
            </ul>
            <div className="mt-6 space-y-4 text-ink-light italic border-l-2 border-sand pl-6 py-2">
              <p>
                La asociación actúa en este sitio web a través de su presidente y representante legal, Alejandro García.
              </p>
              <p>
                Asimismo, se hace constar que la implantación y desarrollo de esta presencia digital fue impulsada por su representante legal en apoyo a la actividad, proyección y comunicación institucional de la asociación.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-medium text-ink mb-4 uppercase tracking-wide">2. NATURALEZA Y FINES</h2>
            <p className="text-ink-light mb-4">
              El Faro es una asociación sin ánimo de lucro cuyo ámbito principal de actuación se orienta al acompañamiento, la orientación y el apoyo en procesos vinculados a la salud emocional, las adicciones y el desarrollo humano.
            </p>
            <p className="text-ink-light">
              De acuerdo con sus fines, la asociación promueve, entre otros, espacios de apoyo, orientación, sensibilización y acompañamiento dirigidos a personas, familias y comunidad.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-medium text-ink mb-4 uppercase tracking-wide">3. CONDICIONES DE USO DEL SITIO</h2>
            <div className="space-y-4 text-ink-light">
              <p>
                El acceso a este sitio web atribuye la condición de usuario e implica la aceptación del presente Aviso Legal.
              </p>
              <p>
                El usuario se compromete a utilizar este sitio web, sus contenidos y sus servicios de forma lícita, correcta y de buena fe, de conformidad con la legislación vigente.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-medium text-ink mb-4 uppercase tracking-wide">4. PROPIEDAD INTELECTUAL E INDUSTRIAL</h2>
            <p className="text-ink-light">
              Todos los contenidos del sitio web, incluyendo, a título enunciativo y no limitativo, textos, imágenes, diseños, logotipos, estructura, código y demás elementos, son titularidad de El Faro o de terceros que han autorizado su uso, y quedan protegidos por la normativa aplicable.
            </p>
            <p className="text-ink-light mt-4">
              Queda prohibida su reproducción, distribución, transformación, comunicación pública o cualquier otro uso no autorizado expresamente.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-medium text-ink mb-4 uppercase tracking-wide">5. RESPONSABILIDAD</h2>
            <div className="space-y-4 text-ink-light">
              <p>
                El Faro no garantiza la inexistencia de errores en el acceso al sitio web o en sus contenidos, aunque adoptará, en su caso, las medidas razonables para corregirlos.
              </p>
              <p>
                El Faro no se hace responsable de los daños o perjuicios que pudieran derivarse del uso de la información contenida en este sitio web ni de actuaciones realizadas sobre la base de la misma.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-medium text-ink mb-4 uppercase tracking-wide">6. ENLACES</h2>
            <p className="text-ink-light">
              En caso de que este sitio web incluye enlaces a páginas de terceros, El Faro no asume responsabilidad sobre los contenidos, políticas o prácticas de dichos sitios externos.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-medium text-ink mb-4 uppercase tracking-wide">7. LEGISLACIÓN APLICABLE</h2>
            <p className="text-ink-light">
              La relación entre el usuario y el titular del sitio web se regirá por la normativa española vigente.
            </p>
          </section>

        </div>
      </motion.div>
    </div>
  );
}
