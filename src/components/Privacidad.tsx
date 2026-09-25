import { motion } from 'framer-motion';
import { Head } from 'vite-react-ssg';

export default function Privacidad() {
  return (
    <div className="pt-24 pb-24 px-4 sm:px-6 lg:px-8 max-w-[820px] mx-auto font-sans">
      <Head>
        <title>Política de Privacidad | El Faro Argentina</title>
        <meta name="robots" content="noindex, nofollow" />
        <meta name="description" content="Política de privacidad de El Faro Argentina. Información sobre el tratamiento de datos personales conforme a la Ley 25.326 y derechos del titular." />
      </Head>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#F6F2EA] mb-10 tracking-tight">Política de privacidad</h1>
        
        <div className="space-y-12 sm:space-y-14 text-[17px] sm:text-[18px] text-[#C8C4BB] font-light leading-[1.8]">
          
          <section>
            <p className="text-lg sm:text-xl text-[#DDD8CD] leading-relaxed font-light">
              En El Faro Argentina nos comprometemos a garantizar la confidencialidad y la protección de los datos personales de las personas que se contactan con nosotros, en estricto cumplimiento de la Ley N° 25.326 de Protección de los Datos Personales, su Decreto Reglamentario N° 1558/2001 y las normas complementarias dictadas por la Agencia de Acceso a la Información Pública (AAIP).
            </p>
          </section>

          <section className="pt-10 border-t border-white/10">
            <h2 className="text-lg sm:text-xl font-medium text-[#E7E0D3] mb-5 uppercase tracking-wider">1. Responsable del tratamiento</h2>
            <ul className="list-none pl-0 space-y-2.5">
              <li><strong className="font-medium text-[#F6F2EA]">Entidad responsable:</strong> Asociación Civil Arco Baleno</li>
              <li><strong className="font-medium text-[#F6F2EA]">CUIT:</strong> 30-68558066-3</li>
              <li><strong className="font-medium text-[#F6F2EA]">Domicilio legal:</strong> Alvarado 3001, Mar del Plata, Provincia de Buenos Aires, República Argentina</li>
              <li><strong className="font-medium text-[#F6F2EA]">Sede de atención:</strong> Garay 2073, Mar del Plata, Provincia de Buenos Aires</li>
              <li><strong className="font-medium text-[#F6F2EA]">Correo institucional para privacidad:</strong> <a href="mailto:info@mifaro.org" className="text-[#D4AF37] hover:text-[#F6F2EA] underline underline-offset-4 decoration-[#D4AF37]/50 hover:decoration-[#F6F2EA] transition-colors">info@mifaro.org</a></li>
              <li><strong className="font-medium text-[#F6F2EA]">Teléfono de contacto:</strong> +54 9 223 560 7009</li>
              <li><strong className="font-medium text-[#F6F2EA]">Sitio web:</strong> <a href="https://programaelfaro.com.ar" className="text-[#D4AF37] hover:text-[#F6F2EA] underline underline-offset-4 decoration-[#D4AF37]/50 hover:decoration-[#F6F2EA] transition-colors">programaelfaro.com.ar</a></li>
            </ul>
          </section>

          <section className="pt-10 border-t border-white/10">
            <h2 className="text-lg sm:text-xl font-medium text-[#E7E0D3] mb-5 uppercase tracking-wider">2. Datos que efectivamente se recaban</h2>
            <p className="mb-4">
              A través de este sitio web únicamente se recopilan los datos estrictamente necesarios para posibilitar el contacto inicial y responder a las inquietudes recibidas:
            </p>
            <ul className="list-disc pl-6 space-y-3">
              <li><strong className="font-medium text-[#F6F2EA]">Formulario de contacto:</strong> Nombre, país de procedencia, dirección de correo electrónico, mensaje y constancia de aceptación de esta política.</li>
              <li><strong className="font-medium text-[#F6F2EA]">Canales directos (WhatsApp y teléfono):</strong> Número telefónico de origen y la información que el usuario decida voluntariamente facilitar para coordinar una entrevista.</li>
              <li><strong className="font-medium text-[#F6F2EA]">Almacenamiento local (localStorage):</strong> Registro técnico de la preferencia del usuario sobre el aviso de cookies para no reiterarlo innecesariamente.</li>
              <li><strong className="font-medium text-[#F6F2EA]">Medición técnica (Google Tag Manager):</strong> Registro de eventos técnicos agregados de interacción (como clics a canales de contacto o confirmación de envío de formulario). No se realiza perfilado comercial, publicidad personalizada ni venta de datos.</li>
            </ul>
          </section>

          <section className="pt-10 border-t border-white/10">
            <h2 className="text-lg sm:text-xl font-medium text-[#E7E0D3] mb-5 uppercase tracking-wider">3. Finalidad del tratamiento</h2>
            <p className="mb-4">
              Los datos personales recolectados se utilizan exclusivamente con las siguientes finalidades:
            </p>
            <ul className="list-disc pl-6 space-y-3">
              <li>Atender, responder y dar seguimiento a las consultas orientativas recibidas vía formulario web, correo electrónico, teléfono o WhatsApp.</li>
              <li>Coordinar entrevistas de orientación institucional o de primera consulta en nuestra sede o de manera remota.</li>
              <li>Gestionar la comunicación estrictamente necesaria en el marco del vínculo institucional con las personas y familias interesadas.</li>
            </ul>
            <p className="mt-4">
              En ningún caso los datos serán utilizados para finalidades comerciales, envío de publicidad masiva no solicitada ni cesión a terceros con fines de lucro.
            </p>
          </section>

          <section className="pt-10 border-t border-white/10">
            <h2 className="text-lg sm:text-xl font-medium text-[#E7E0D3] mb-5 uppercase tracking-wider">4. Tratamiento de datos sensibles (salud mental y adicciones)</h2>
            <p className="mb-4">
              En los términos del artículo 2° de la Ley N° 25.326, los datos vinculados a la salud física o psíquica son catalogados como datos sensibles y gozan de una tutela jurídica reforzada.
            </p>
            <div className="border-l-2 border-[#D4AF37] pl-6 py-4 my-6 space-y-3 bg-[#253229]/80 rounded-r-xl border-y border-r border-white/5">
              <p>
                <strong className="font-medium text-[#F6F2EA]">Aviso importante:</strong> El sitio web y su formulario de contacto están concebidos exclusivamente como un canal de primer acercamiento y enlace institucional. <strong className="font-medium text-[#F6F2EA]">No constituyen una historia clínica electrónica ni un medio para remitir diagnósticos, antecedentes médicos o detalles íntimos de salud.</strong>
              </p>
              <p>
                Cualquier abordaje relativo a la situación personal o familiar se realiza de manera presencial o mediante los canales profesionales directos, bajo estricto secreto profesional, consentimiento informado y reserva absoluta de acuerdo con las normas de confidencialidad médica y de salud mental vigentes en la República Argentina.
              </p>
            </div>
          </section>

          <section className="pt-10 border-t border-white/10">
            <h2 className="text-lg sm:text-xl font-medium text-[#E7E0D3] mb-5 uppercase tracking-wider">5. Base jurídica del tratamiento</h2>
            <p>
              La base legal para el tratamiento de los datos es el consentimiento libre, expreso e informado otorgado por el titular al enviar su consulta (conforme al artículo 5° de la Ley N° 25.326), así como el interés legítimo de la entidad civil en brindar respuesta a las solicitudes de asistencia e información recibidas.
            </p>
          </section>

          <section className="pt-10 border-t border-white/10">
            <h2 className="text-lg sm:text-xl font-medium text-[#E7E0D3] mb-5 uppercase tracking-wider">6. Conservación de los datos</h2>
            <p>
              Los datos personales se conservarán únicamente durante el tiempo indispensable para atender y resolver la solicitud que motivó su contacto, o hasta que el titular solicite su supresión, manteniéndose posteriormente sólo aquellos datos exigidos para el cumplimiento de deberes legales o responsabilidades profesionales.
            </p>
          </section>

          <section className="pt-10 border-t border-white/10">
            <h2 className="text-lg sm:text-xl font-medium text-[#E7E0D3] mb-5 uppercase tracking-wider">7. Destinatarios y encargados técnicos</h2>
            <p className="mb-4">
              Asociación Civil Arco Baleno no vende, alquila ni cede datos personales a terceros.
            </p>
            <p>
              Para el envío y recepción técnica del formulario web se utiliza la plataforma Formspree como procesador técnico de correo. Los datos procesados por este medio se transfieren de manera segura mediante protocolos cifrados (HTTPS) con la única finalidad de retransmitir el mensaje a la casilla de correo institucional de El Faro.
            </p>
          </section>

          <section className="pt-10 border-t border-white/10">
            <h2 className="text-lg sm:text-xl font-medium text-[#E7E0D3] mb-5 uppercase tracking-wider">8. Derechos del titular de los datos</h2>
            <p className="mb-4">
              De conformidad con los artículos 14, 15 y 16 de la Ley N° 25.326, el titular de los datos personales tiene derecho a:
            </p>
            <ul className="list-disc pl-6 space-y-3">
              <li><strong className="font-medium text-[#F6F2EA]">Acceso:</strong> Solicitar y obtener información sobre los datos personales propios asentados en los registros. El responsable responderá dentro de los <strong className="font-medium text-[#F6F2EA]">10 días corridos</strong> de haber sido intimado fehacientemente (art. 14 inc. 2 Ley 25.326). El derecho de acceso se ejerce en forma gratuita a intervalos no inferiores a seis meses, salvo interés legítimo acreditado.</li>
              <li><strong className="font-medium text-[#F6F2EA]">Rectificación, actualización y supresión:</strong> Solicitar que se corrijan, actualicen o supriman datos inexactos, incompletos o inadecuados. El responsable procederá a efectuar la modificación dentro de los <strong className="font-medium text-[#F6F2EA]">5 días hábiles</strong> de recibido el reclamo (art. 16 inc. 2 Ley 25.326).</li>
            </ul>
            <p className="mt-4">
              Para ejercer cualquiera de estos derechos, el titular puede enviar un correo electrónico a <a href="mailto:info@mifaro.org" className="text-[#D4AF37] hover:text-[#F6F2EA] underline underline-offset-4 decoration-[#D4AF37]/50 hover:decoration-[#F6F2EA] transition-colors">info@mifaro.org</a> con la referencia «Protección de Datos Personales», acreditando debidamente su identidad. El trámite es completamente gratuito.
            </p>
          </section>

          <section className="pt-10 border-t border-white/10">
            <h2 className="text-lg sm:text-xl font-medium text-[#E7E0D3] mb-5 uppercase tracking-wider">9. Órgano de Control</h2>
            <div className="border border-[#4F5D49]/60 bg-[#253229]/80 p-6 sm:p-8 rounded-2xl space-y-4">
              <p className="font-medium text-[#F6F2EA] leading-relaxed">
                «La AGENCIA DE ACCESO A LA INFORMACIÓN PÚBLICA, en su carácter de Órgano de Control de la Ley N° 25.326, tiene la atribución de atender las denuncias y reclamos que interpongan quienes resulten afectados en sus derechos por incumplimiento de las normas vigentes en materia de protección de datos personales.»
              </p>
              <p className="text-xs sm:text-sm text-[#A8A49A] leading-relaxed">
                Agencia de Acceso a la Información Pública (AAIP) · Av. Presidente Julio A. Roca 710, piso 3°, CABA · Sitio web: <a href="https://www.argentina.gob.ar/aaip" target="_blank" rel="noopener noreferrer" className="text-[#D4AF37] hover:text-[#F6F2EA] underline underline-offset-4 decoration-[#D4AF37]/50 hover:decoration-[#F6F2EA] transition-colors">www.argentina.gob.ar/aaip</a>
              </p>
            </div>
          </section>

        </div>
      </motion.div>
    </div>
  );
}
