import { motion } from 'framer-motion';
import { Head } from 'vite-react-ssg';

export default function AvisoLegal() {
  return (
    <div className="pt-24 pb-24 px-4 sm:px-6 lg:px-8 max-w-[820px] mx-auto font-sans">
      <Head>
        <title>Aviso Legal | El Faro Argentina</title>
        <meta name="robots" content="noindex, nofollow" />
        <meta name="description" content="Aviso legal de El Faro Argentina. Información institucional, condiciones de uso y propiedad intelectual del sitio web programaelfaro.com.ar." />
      </Head>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#F6F2EA] mb-10 tracking-tight">Aviso legal</h1>
        
        <div className="space-y-12 sm:space-y-14 text-[17px] sm:text-[18px] text-[#C8C4BB] font-light leading-[1.8]">
          
          <section>
            <p className="text-lg sm:text-xl text-[#DDD8CD] leading-relaxed font-light">
              El presente Aviso Legal regula el acceso, navegación y uso del sitio web oficial de El Faro (<a href="https://programaelfaro.com.ar" className="text-[#D4AF37] hover:text-[#F6F2EA] underline underline-offset-4 decoration-[#D4AF37]/50 hover:decoration-[#F6F2EA] transition-colors">programaelfaro.com.ar</a>), así como las responsabilidades derivadas de la utilización de sus contenidos.
            </p>
          </section>

          <section className="pt-10 border-t border-white/10">
            <h2 className="text-lg sm:text-xl font-medium text-[#E7E0D3] mb-5 uppercase tracking-wider">1. TITULARIDAD DEL SITIO</h2>
            <p className="mb-4">
              En cumplimiento de las normas de transparencia e información vigentes en la República Argentina, se informa que el presente sitio web es titularidad de:
            </p>
            <ul className="list-none pl-0 space-y-2.5">
              <li><strong className="font-medium text-[#F6F2EA] text-base sm:text-lg uppercase tracking-wider block mb-1">Asociación Civil Arco Baleno</strong></li>
              <li>Entidad civil sin fines de lucro</li>
              <li>CUIT: 30-68558066-3</li>
              <li>Domicilio legal: Alvarado 3001, Mar del Plata, Provincia de Buenos Aires, República Argentina</li>
              <li>Sede de atención y actividades: Garay 2073, Mar del Plata, Provincia de Buenos Aires, República Argentina</li>
              <li>Correo institucional: <a href="mailto:info@mifaro.org" className="text-[#D4AF37] hover:text-[#F6F2EA] underline underline-offset-4 decoration-[#D4AF37]/50 hover:decoration-[#F6F2EA] transition-colors">info@mifaro.org</a></li>
              <li>Teléfono fijo institucional: +54 223 492 1953</li>
              <li>WhatsApp de consultas y orientación: +54 9 223 592 3790</li>
              <li>Contacto específico de privacidad y ejercicio de derechos: +54 9 223 560 7009</li>
              <li>Sitio web: <a href="https://programaelfaro.com.ar" className="text-[#D4AF37] hover:text-[#F6F2EA] underline underline-offset-4 decoration-[#D4AF37]/50 hover:decoration-[#F6F2EA] transition-colors">programaelfaro.com.ar</a></li>
            </ul>

            <div className="mt-6 pt-5 border-t border-white/5 text-sm text-[#A8A49A]">
              <p className="font-medium text-[#DDD8CD] mb-1.5 uppercase tracking-wider text-xs">Presencia y red de trabajo en España:</p>
              <p>Valencia · España: +34 611 568 705</p>
            </div>
          </section>

          <section className="pt-10 border-t border-white/10">
            <h2 className="text-lg sm:text-xl font-medium text-[#E7E0D3] mb-5 uppercase tracking-wider">2. NATURALEZA Y FINES INSTITUCIONALES</h2>
            <div className="space-y-4">
              <p>
                Asociación Civil Arco Baleno promueve y gestiona El Faro, un espacio institucional dedicado al acompañamiento, orientación, psicoterapia y abordaje interdisciplinario de problemáticas de salud mental, adicciones y consumos problemáticos en Mar del Plata.
              </p>
              <p>
                De acuerdo con sus fines fundacionales, la entidad ofrece espacios de orientación individual, familiar y grupal, orientados a la contención de las personas y su entorno comunitario.
              </p>
            </div>
          </section>

          <section className="pt-10 border-t border-white/10">
            <h2 className="text-lg sm:text-xl font-medium text-[#E7E0D3] mb-5 uppercase tracking-wider">3. CONDICIONES DE USO</h2>
            <div className="space-y-4">
              <p>
                El acceso y la navegación por este sitio web atribuyen la condición de usuario e implican la aceptación plena de las presentes condiciones.
              </p>
              <p>
                El usuario se compromete a utilizar el sitio web, sus contenidos y servicios de conformidad con la ley, la moral, las buenas costumbres y el orden público, absteniéndose de cualquier uso ilícito, lesivo o que pudiera dañar o sobrecargar las instalaciones o servicios de la entidad.
              </p>
            </div>
          </section>

          <section className="pt-10 border-t border-white/10">
            <h2 className="text-lg sm:text-xl font-medium text-[#E7E0D3] mb-5 uppercase tracking-wider">4. PROPIEDAD INTELECTUAL</h2>
            <div className="space-y-4">
              <p>
                Todos los contenidos del sitio web, incluyendo textos, artículos editoriales, testimonios, imágenes, logotipos, diseño gráfico, código fuente y estructura de navegación, son propiedad de Asociación Civil Arco Baleno o de terceros que han autorizado expresamente su uso o reproducción, encontrándose protegidos por la Ley N° 11.723 de Propiedad Intelectual de la República Argentina y convenios internacionales.
              </p>
              <p>
                Queda expresamente prohibida su reproducción total o parcial, distribución, comunicación pública o transformación sin autorización previa por escrito de la entidad titular.
              </p>
            </div>
          </section>

          <section className="pt-10 border-t border-white/10">
            <h2 className="text-lg sm:text-xl font-medium text-[#E7E0D3] mb-5 uppercase tracking-wider">5. EXENCIÓN DE RESPONSABILIDAD MÉDICA O CLÍNICA</h2>
            <div className="space-y-4">
              <p>
                Los contenidos informativos, artículos y testimonios publicados en este sitio web tienen fines de orientación, divulgación y sensibilización comunitaria. En ningún caso constituyen ni pretenden sustituir una consulta clínica, evaluación diagnóstica, indicación terapéutica ni tratamiento médico o psicológico formal.
              </p>
              <p>
                Asociación Civil Arco Baleno no se responsabiliza por decisiones o acciones tomadas por los usuarios sobre la base de la información publicada en el sitio web sin la debida intervención y asesoramiento de profesionales de la salud mental.
              </p>
            </div>
          </section>

          <section className="pt-10 border-t border-white/10">
            <h2 className="text-lg sm:text-xl font-medium text-[#E7E0D3] mb-5 uppercase tracking-wider">6. ENLACES A TERCEROS</h2>
            <p>
              Este sitio web puede contener enlaces a plataformas o sitios externos. Asociación Civil Arco Baleno no ejerce control sobre dichos sitios externos ni asume responsabilidad alguna sobre sus contenidos, políticas de privacidad o prácticas de tratamiento de datos.
            </p>
          </section>

          <section className="pt-10 border-t border-white/10">
            <h2 className="text-lg sm:text-xl font-medium text-[#E7E0D3] mb-5 uppercase tracking-wider">7. LEGISLACIÓN APLICABLE Y JURISDICCIÓN</h2>
            <p>
              El presente Aviso Legal se rige en todos sus aspectos por la legislación vigente en la República Argentina. Para la resolución de cualquier controversia derivada del acceso o uso de este sitio web, las partes se someten a la jurisdicción de los Tribunales Ordinarios competentes del Departamento Judicial de Mar del Plata, Provincia de Buenos Aires, con renuncia a cualquier otro fuero que pudiera corresponder.
            </p>
          </section>

        </div>
      </motion.div>
    </div>
  );
}
