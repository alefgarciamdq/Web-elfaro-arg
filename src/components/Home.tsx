import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import JsonLd from './JsonLd';
import { dispositivosBase } from '../data/dispositivos';
import { CONTACT } from '../data/contact';

export default function Home() {
  return (
    <div style={{ background: 'var(--crema)', color: 'var(--texto)' }}>
      <Helmet>
        <title>El Faro | Salud Mental y Adicciones · Mar del Plata</title>
        <meta name="description" content="Más de 30 años acompañando procesos de salud mental y adicciones en Mar del Plata. Centro de Día, ambulatorio, talleres de expresión emotiva, psicodrama y mucho más." />
        <meta property="og:title" content="El Faro | Salud Mental y Adicciones · Mar del Plata" />
        <meta property="og:description" content="Más de 30 años acompañando a personas y familias en Mar del Plata. Un lugar donde el tratamiento se cruza con el arte, el movimiento y la expresión emotiva." />
        <meta property="og:image" content="https://i.postimg.cc/W4VCwCT3/563018699020179.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="El Faro | Salud Mental y Adicciones · Mar del Plata" />
        <meta name="twitter:description" content="Más de 30 años acompañando a personas y familias en salud mental y adicciones en Mar del Plata." />
        <meta name="twitter:image" content="https://i.postimg.cc/W4VCwCT3/563018699020179.jpg" />
        <link rel="canonical" href="https://programaelfaro.com.ar/" />
      </Helmet>
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "El Faro",
        "url": "https://programaelfaro.com.ar"
      }} />
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "El Faro",
        "url": "https://programaelfaro.com.ar",
        "telephone": "+54922359237890",
        "areaServed": { "@type": "City", "name": "Mar del Plata" },
        "logo": "https://i.postimg.cc/mgVHpGR8/IMG-0990.jpg",
        "image": "https://i.postimg.cc/W4VCwCT3/563018699020179.jpg",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Mar del Plata",
          "addressCountry": "AR"
        },
        "sameAs": [
          "https://www.instagram.com/elfaromdq/",
          "https://www.facebook.com/ProgramaElFaro",
          "https://www.instagram.com/alemdq/"
        ]
      }} />

      {/* HERO (sección 1) */}
      <section id="section-hero" className="grid grid-cols-1 lg:grid-cols-[1fr_420px]" style={{ minHeight: '420px' }}>
        {/* Panel izquierdo - azul noche */}
        <div className="flex flex-col justify-center relative overflow-hidden" style={{
          background: 'var(--azul-noche)',
          padding: '72px 52px 64px',
        }}>
          <div style={{ fontSize: '11px', letterSpacing: '3.5px', textTransform: 'uppercase', color: 'var(--arena)', fontWeight: 500, marginBottom: '24px' }}>
            Mar del Plata · Argentina · Desde 1993
          </div>
          <h1 style={{
            fontFamily: 'var(--serif)',
            fontSize: '44px',
            lineHeight: 1.26,
            color: 'var(--blanco)',
            fontWeight: 400,
            marginBottom: '22px',
          }}>
            Salud mental y adicciones<br />
            <span style={{ fontStyle: 'italic', color: 'var(--arena)' }}>en Mar del Plata</span>
          </h1>
          <p style={{
            fontSize: '15px', lineHeight: 1.74,
            color: 'rgba(255,255,255,0.62)',
            fontWeight: 300, maxWidth: '480px', marginBottom: '38px',
          }}>
            Desde 1993, acompañamos a personas y familias en procesos vinculados a las adicciones y el malestar emocional. Un lugar en continuo movimiento.
          </p>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <Link to="/contacto" style={{
              background: 'var(--arena)', color: 'var(--azul-noche)',
              padding: '13px 26px', borderRadius: '6px',
              fontSize: '13.5px', fontWeight: 600, textDecoration: 'none',
            }}>
              Consultá por tu situación
            </Link>
            <Link to="/quienes-lo-hacemos" style={{
              border: '1px solid rgba(255,255,255,0.22)',
              color: 'rgba(255,255,255,0.78)',
              padding: '13px 26px', borderRadius: '6px',
              fontSize: '13.5px', fontWeight: 400, textDecoration: 'none',
            }}>
              Cómo trabajamos
            </Link>
          </div>
        </div>

        {/* Panel derecho - foto placeholder hasta tener imagen */}
        <div style={{
          background: 'linear-gradient(135deg, var(--azul-noche) 0%, var(--azul-medio) 100%)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          padding: '24px',
          gap: '14px',
          position: 'relative',
          overflow: 'hidden',
        }}>
          {/* Card familias */}
          <div style={{
            background: 'rgba(255,255,255,0.07)',
            border: '1px solid rgba(201,184,154,0.22)',
            borderRadius: 'var(--radio)', padding: '20px 22px',
          }}>
            <div style={{ fontSize: '9px', letterSpacing: '3px', textTransform: 'uppercase', color: 'var(--arena)', fontWeight: 500, marginBottom: '8px' }}>
              Para familias
            </div>
            <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.72)', lineHeight: 1.62, fontWeight: 300 }}>
              Si alguien cercano está en una situación compleja, también podés acercarte. Acompañamos a quienes acompañan.
            </p>
          </div>

          {/* Card contacto */}
          <div style={{
            background: 'rgba(255,255,255,0.07)',
            border: '1px solid rgba(201,184,154,0.22)',
            borderRadius: 'var(--radio)', padding: '20px 22px',
          }}>
            <div style={{ fontSize: '9px', letterSpacing: '3px', textTransform: 'uppercase', color: 'var(--arena)', fontWeight: 500, marginBottom: '8px' }}>
              Primera consulta
            </div>
            <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.72)', lineHeight: 1.62, fontWeight: 300 }}>
              Un espacio inicial sin compromiso para entender qué está pasando y ver los próximos pasos.
            </p>
            <a href={CONTACT.whatsappAR} target="_blank" rel="noopener noreferrer" style={{
              display: 'inline-flex', alignItems: 'center', gap: '7px',
              marginTop: '14px', background: '#25d366', color: 'var(--blanco)',
              padding: '8px 16px', borderRadius: '20px',
              fontSize: '12px', fontWeight: 500, textDecoration: 'none',
            }}>
              📱 Escribinos por WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* BANDA RED (sección 2) */}
      <div style={{
        background: 'var(--arena-claro)',
        borderTop: '1px solid var(--borde)',
        borderBottom: '1px solid var(--borde)',
        padding: '13px 48px',
        display: 'flex', alignItems: 'center', gap: '10px',
        flexWrap: 'wrap',
      }}>
        <span style={{ fontSize: '11.5px', color: 'var(--tierra)' }}>Parte de la red</span>
        <span style={{ color: 'var(--arena)', opacity: 0.5 }}>·</span>
        <span style={{ fontSize: '11.5px', color: 'var(--tierra)' }}>
          <strong style={{ color: 'var(--azul-noche)', fontWeight: 500 }}>
            Mi Faro Valencia <span style={{ color: 'var(--arena)', opacity: 0.5 }}>·</span> España
          </strong>
          {' '}- misma historia, misma mirada, desde 1993
        </span>
        <a href="https://mifaro.es" target="_blank" rel="noopener noreferrer" style={{
          marginLeft: 'auto', fontSize: '11.5px',
          color: 'var(--azul-cielo)', fontWeight: 500, textDecoration: 'none',
        }}>
          Ver Mi Faro España <span style={{ opacity: 0.6, marginLeft: '2px' }}>→</span>
        </a>
      </div>

      {/* INTRO (sección 3) */}
      <section id="section-intro" className="grid grid-cols-1 lg:grid-cols-2" style={{
        padding: '64px 52px',
        gap: '72px',
        alignItems: 'start',
        borderBottom: '1px solid var(--borde)',
        background: 'var(--crema)',
      }}>
        {/* Columna izquierda - texto principal */}
        <div>
          <h2 style={{
            fontFamily: 'var(--serif)', fontSize: '34px',
            lineHeight: 1.36, color: 'var(--azul-noche)',
            fontWeight: 400, marginBottom: '20px',
          }}>
            «El Faro lo hacemos vos, yo, él, nosotros.»
          </h2>
          <p style={{ fontSize: '16px', lineHeight: 1.76, color: 'var(--texto-suave)', fontWeight: 400, marginBottom: '16px' }}>
            Lo hacemos en la cotidianidad del acompañarnos, sin juicio, desde una terapéutica profundamente humana, plena de empatía y esperanza.
          </p>
          <p style={{ fontSize: '14.5px', lineHeight: '1.76', color: 'var(--texto-suave)', fontWeight: 300, marginBottom: '16px', fontStyle: 'italic' }}>
            Alejandro García · Fundador · 1993
          </p>
          <Link to="/historia" style={{
            display: 'inline-flex', alignItems: 'center', gap: '6px',
            fontSize: '13.5px', color: 'var(--azul-cielo)', fontWeight: 500,
            marginTop: '8px', textDecoration: 'none',
            borderBottom: '1px solid var(--azul-palido)', paddingBottom: '2px',
          }}>
            Conocer nuestra historia →
          </Link>
        </div>

        {/* Columna derecha - 3 puntos numerados */}
        <div style={{ paddingTop: '6px' }}>
          {[
            { n: '01', t: 'Primera consulta sin compromiso', p: 'Un espacio inicial para entender qué está ocurriendo y valorar los próximos pasos, sin presión.' },
            { n: '02', t: 'Más de 30 años de trayectoria', p: 'Una institución con historia real, equipo estable y mirada clínica consolidada en Mar del Plata.' },
            { n: '03', t: 'Acompañamiento familiar', p: 'Para quienes quieren ayudar sin quedar atrapados en el desgaste, la culpa o el miedo.' },
          ].map((item, i) => (
            <div key={i} style={{
              display: 'flex', gap: '18px',
              padding: '20px 0',
              borderBottom: i < 2 ? '1px solid var(--borde-suave)' : 'none',
            }}>
              <div style={{
                fontFamily: 'var(--serif)', fontSize: '28px',
                color: 'var(--azul-cielo)', opacity: 0.5, minWidth: '24px',
                lineHeight: 1, fontWeight: 500, paddingTop: '2px',
              }}>{item.n}</div>
              <div>
                <h3 style={{ fontSize: '15px', color: 'var(--azul-noche)', fontWeight: 600, marginBottom: '5px' }}>{item.t}</h3>
                <p style={{ fontSize: '14px', color: 'var(--texto-suave)', lineHeight: 1.62, fontWeight: 300 }}>{item.p}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICIOS (sección 4) */}
      <div id="section-servicios" style={{ background: 'var(--blanco)', borderBottom: '1px solid var(--borde)' }}>
        {/* Header */}
        <div style={{
          padding: '48px 52px 28px',
          display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end',
          flexWrap: 'wrap',
          gap: '16px',
        }}>
          <div>
            <div style={{ fontSize: '11px', letterSpacing: '3px', textTransform: 'uppercase', color: 'var(--tierra)', fontWeight: 500, marginBottom: '10px' }}>
              Cómo podemos ayudarte
            </div>
            <h2 style={{ fontFamily: 'var(--serif)', fontSize: '30px', color: 'var(--azul-noche)', fontWeight: 400 }}>
              Áreas de trabajo
            </h2>
          </div>
        </div>

        {/* Grid de servicios - 3 columnas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3" style={{
          borderTop: '1px solid var(--borde)',
        }}>
          {dispositivosBase.map((item, i) => {
            const isFeatured = item.title === dispositivosBase[0].title;
            return (
              <div key={item.title} style={{
                padding: '28px 32px 32px',
                borderRight: '1px solid var(--borde)',
                borderBottom: '1px solid var(--borde)',
                background: isFeatured ? 'var(--azul-suave)' : 'transparent',
                borderTop: isFeatured ? '3px solid var(--azul-cielo)' : 'none',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                  <div style={{ color: 'var(--tierra)' }}>{item.icon}</div>
                  <h3 style={{ fontSize: '15px', color: 'var(--azul-noche)', fontWeight: 600 }}>{item.title}</h3>
                </div>
                <p style={{ fontSize: '13.5px', color: 'var(--texto-suave)', lineHeight: 1.65, fontWeight: 300 }}>{item.desc}</p>
                <Link to="/estructuras-de-tratamiento" style={{ display: 'inline-block', marginTop: '14px', fontSize: '13px', color: 'var(--azul-cielo)', fontWeight: 500, textDecoration: 'none' }}>Ver más →</Link>
              </div>
            );
          })}
        </div>
      </div>

      {/* TESTIMONIAL + STATS (sección 5) */}
      <div className="grid grid-cols-1 lg:grid-cols-2" style={{
        background: 'var(--azul-noche)',
        padding: '72px 52px',
        gap: '64px',
        alignItems: 'center',
      }}>
        {/* Quote */}
        <div>
          <div style={{
            fontFamily: 'var(--serif)', fontSize: '100px',
            color: 'var(--arena)', lineHeight: 0.6,
            display: 'block', marginBottom: '16px', opacity: 0.8,
          }}>"</div>
          <blockquote style={{
            fontFamily: 'var(--serif)', fontSize: '26px',
            lineHeight: 1.5, color: 'var(--blanco)',
            fontWeight: 400, fontStyle: 'italic',
          }}>
            Lo que más miedo me daba no era dejar de consumir... era quedarme solo.
          </blockquote>
          <div style={{
            marginTop: '24px', fontSize: '11px',
            letterSpacing: '1.5px', textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.38)',
          }}>
            Experiencia compartida por un consultante de El Faro
          </div>
        </div>

        {/* Stats */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {[
            { n: '+30', d: 'años acompañando personas y familias en Mar del Plata' },
            { n: '1993', d: 'fundación - una de las instituciones más antiguas del sector en la ciudad' },
            { n: '5 ★', d: 'valoración promedio en reseñas de consultantes y familias' },
          ].map((s, i) => (
            <div key={i} style={{
              background: 'rgba(255,255,255,0.055)',
              border: '1px solid rgba(201,184,154,0.14)',
              borderRadius: 'var(--radio)', padding: '20px 24px',
              display: 'flex', alignItems: 'center', gap: '20px',
            }}>
              <div style={{ fontFamily: 'var(--serif)', fontSize: '32px', color: 'var(--arena)', fontWeight: 500, minWidth: '70px', lineHeight: 1 }}>{s.n}</div>
              <div style={{ fontSize: '13.5px', color: 'rgba(255,255,255,0.56)', lineHeight: 1.55, fontWeight: 300 }}>{s.d}</div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA FINAL (sección 6) */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto]" style={{
        background: 'var(--blanco)',
        padding: '72px 52px',
        gap: '48px',
        alignItems: 'center',
        borderTop: '1px solid var(--borde)',
      }}>
        <div>
          <h2 style={{
            fontFamily: 'var(--serif)', fontSize: '28px',
            lineHeight: 1.32, color: 'var(--azul-noche)',
            fontWeight: 400, marginBottom: '10px',
          }}>
            No hace falta tenerlo todo claro<br/>para dar el primer paso.
          </h2>
          <p style={{ fontSize: '15px', color: 'var(--texto-suave)', lineHeight: 1.72, fontWeight: 300, maxWidth: '480px' }}>
            Podés escribirnos hoy. Te respondemos y coordinamos un primer encuentro sin compromiso. Atendemos con mutual OAM y diversas obras sociales.
          </p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', minWidth: '210px' }}>
          <Link to="/contacto" style={{
            background: 'var(--azul-noche)', color: 'var(--blanco)',
            padding: '15px 28px', borderRadius: '6px',
            fontSize: '14px', fontWeight: 500, textAlign: 'center', textDecoration: 'none',
          }}>
            Reservar una consulta
          </Link>
          <a href={CONTACT.whatsappAR} target="_blank" rel="noopener noreferrer" style={{
            background: '#25d366', color: 'var(--blanco)',
            padding: '15px 28px', borderRadius: '6px',
            fontSize: '14px', fontWeight: 500, textAlign: 'center', textDecoration: 'none',
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
          }}>
            📱 Escribinos por WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
