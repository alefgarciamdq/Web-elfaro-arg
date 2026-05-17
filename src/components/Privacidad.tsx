import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { CONTACT } from '../data/contact';

export default function Privacidad() {
  return (
    <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto font-sans">
      <Helmet>
        <title>Política de Privacidad | El Faro</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-ink mb-8">Política de privacidad</h1>
        
        <div className="prose prose-lg prose-ink max-w-none font-light leading-relaxed space-y-12">
          
          <section>
            <p className="text-lg text-ink-light">
              En El Faro nos tomamos muy en serio la privacidad y la protección de los datos personales de nuestros usuarios. Esta política explica cómo recopilamos, utilizamos y protegemos su información.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-medium text-ink mb-4 uppercase tracking-wide">1. Responsable del tratamiento</h2>
            <ul className="list-none pl-0 space-y-2 text-ink-light">
              <li><strong className="font-medium text-ink">Entidad:</strong> MI FARO, salud mental y desarrollo humano</li>
              <li><strong className="font-medium text-ink">NIF:</strong> G98957525</li>
              <li><strong className="font-medium text-ink">Domicilio:</strong> Plaza Sainetero Arniches 2, piso 4, puerta 7, CP 46014, València / Valencia</li>
              <li><strong className="font-medium text-ink">Correos electrónicos:</strong> <a href="mailto:info@mifaro.org" className="text-olive hover:underline">info@mifaro.org</a>, <a href="mailto:alefgarcia@gmail.com" className="text-olive hover:underline">alefgarcia@gmail.com</a></li>
              <li><strong className="font-medium text-ink">Teléfono / WhatsApp:</strong> {CONTACT.phoneES}</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-medium text-ink mb-4 uppercase tracking-wide">2. Finalidad del tratamiento</h2>
            <p className="text-ink-light mb-4">
              Los datos personales que recopilamos a través de este sitio web se utilizan exclusivamente para:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-ink-light">
              <li>Atender y responder a las consultas enviadas por formulario o correo electrónico.</li>
              <li>Gestionar el contacto y las solicitudes de información a través de WhatsApp.</li>
              <li>Mantener la relación con las personas interesadas en la actividad de la asociación.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-medium text-ink mb-4 uppercase tracking-wide">3. Base jurídica</h2>
            <p className="text-ink-light">
              La base legal para el tratamiento de sus datos es el consentimiento expreso que nos otorga al contactarnos o al participar en nuestras actividades, así como el interés legítimo de la asociación en atender sus solicitudes.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-medium text-ink mb-4 uppercase tracking-wide">4. Conservación de los datos</h2>
            <p className="text-ink-light">
              Sus datos personales se conservarán durante el tiempo estrictamente necesario para cumplir con las finalidades para las que fueron recabados, o hasta que usted solicite su supresión, respetando en todo caso los plazos legales de conservación aplicables.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-medium text-ink mb-4 uppercase tracking-wide">5. Destinatarios</h2>
            <p className="text-ink-light">
              El Faro no cederá sus datos personales a terceros, salvo obligación legal. No obstante, es posible que terceros proveedores de servicios técnicos (como servicios de alojamiento web o plataformas de comunicación) puedan tener acceso a los datos de forma estrictamente necesaria para la prestación de sus servicios, siempre bajo las correspondientes garantías de confidencialidad.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-medium text-ink mb-4 uppercase tracking-wide">6. Derechos de las personas</h2>
            <p className="text-ink-light mb-4">
              Usted puede ejercer en cualquier momento los siguientes derechos sobre sus datos personales:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-ink-light">
              <li><strong className="font-medium text-ink">Acceso:</strong> Conocer qué datos suyos estamos tratando.</li>
              <li><strong className="font-medium text-ink">Rectificación:</strong> Solicitar la corrección de datos inexactos.</li>
              <li><strong className="font-medium text-ink">Supresión:</strong> Solicitar la eliminación de sus datos cuando ya no sean necesarios.</li>
              <li><strong className="font-medium text-ink">Oposición:</strong> Oponerse al tratamiento de sus datos por motivos personales.</li>
              <li><strong className="font-medium text-ink">Limitación:</strong> Solicitar la limitación del tratamiento en determinados casos.</li>
              <li><strong className="font-medium text-ink">Portabilidad:</strong> Recibir sus datos en un formato estructurado.</li>
            </ul>
            <p className="text-ink-light mt-4">
              Asimismo, tiene derecho a presentar una reclamación ante la autoridad de control competente (Agencia Española de Protección de Datos) si considera que el tratamiento no se ajusta a la normativa vigente.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-medium text-ink mb-4 uppercase tracking-wide">7. Contacto para ejercer derechos</h2>
            <p className="text-ink-light mb-4">
              Para ejercer cualquiera de los derechos mencionados, puede enviar una solicitud por escrito a través de los siguientes correos electrónicos:
            </p>
            <ul className="list-none pl-0 space-y-2 text-ink-light">
              <li><a href="mailto:info@mifaro.org" className="text-olive hover:underline">info@mifaro.org</a></li>
              <li><a href="mailto:alefgarcia@gmail.com" className="text-olive hover:underline">alefgarcia@gmail.com</a></li>
            </ul>
          </section>

        </div>
      </motion.div>
    </div>
  );
}
