/**
 * Utilidad de Telemetría para GTM y GA4
 * 
 * Este archivo centraliza la inicialización y el envío de eventos
 * a la capa de datos (window.dataLayer), garantizando seguridad en
 * entornos de renderizado estático y del lado del servidor (SSG/SSR).
 */

declare global {
  interface Window {
    dataLayer?: any[];
  }
}

/**
 * Empuja de forma segura un objeto de datos al dataLayer de GTM.
 */
export function pushToDataLayer(eventData: Record<string, any>) {
  if (typeof window !== 'undefined') {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push(eventData);
  }
}

/**
 * Detecta el mercado (ES/AR) basándose en la ruta actual.
 */
function detectMarket(): string {
  if (typeof window === 'undefined') return 'unknown';
  const path = window.location.pathname;
  if (path.includes('/argentina') || path.includes('/ar/')) return 'AR';
  return 'ES';
}

/**
 * Registra el éxito real en el envío del formulario de contacto.
 * Se dispara exclusivamente cuando el servidor (Formspree) responde con éxito (response.ok).
 */
export function trackFormSubmitSuccess(formName: string = 'contact_form') {
  pushToDataLayer({
    event: 'form_submit_success',
    form_name: formName,
    page_path: typeof window !== 'undefined' ? window.location.pathname : '',
    market: detectMarket()
  });
}

/**
 * Registra el clic en un enlace o botón hacia WhatsApp.
 */
export function trackWhatsAppClick(location: string, linkUrl: string) {
  let market = detectMarket();
  
  // Detección de mercado basándose en el prefijo internacional del número (+54 para AR, +34 para ES)
  if (linkUrl.includes('wa.me/54') || linkUrl.includes('phone=54') || linkUrl.includes('2235212571')) {
    market = 'AR';
  } else if (linkUrl.includes('wa.me/34') || linkUrl.includes('phone=34') || linkUrl.includes('611568705')) {
    market = 'ES';
  }

  pushToDataLayer({
    event: 'click_whatsapp',
    location: location,
    page_path: typeof window !== 'undefined' ? window.location.pathname : '',
    link_url: linkUrl,
    market: market
  });
}

/**
 * Registra el clic en un CTA interno, como pedir una primera cita.
 */
export function trackCtaClick(
  location: string,
  ctaText: string,
  destination: string
) {
  pushToDataLayer({
    event: 'click_cta',
    location,
    cta_text: ctaText,
    destination,
    page_path: typeof window !== 'undefined' ? window.location.pathname : '',
    market: detectMarket()
  });
}

/**
 * Registra el clic en un enlace telefónico (tel:).
 */
export function trackPhoneClick(location: string, phoneNumber: string) {
  pushToDataLayer({
    event: 'click_phone',
    location: location,
    page_path: typeof window !== 'undefined' ? window.location.pathname : '',
    phone_number: phoneNumber,
    market: detectMarket()
  });
}

/**
 * Registra el clic en un enlace de correo electrónico (mailto:).
 */
export function trackEmailClick(location: string, emailAddress: string) {
  pushToDataLayer({
    event: 'click_email',
    location: location,
    page_path: typeof window !== 'undefined' ? window.location.pathname : '',
    email_address: emailAddress,
    market: detectMarket()
  });
}
