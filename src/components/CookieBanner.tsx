import { useState, useEffect } from 'react';

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie_consent');
    if (!consent) setVisible(true);
  }, []);

  const accept = () => {
    localStorage.setItem('cookie_consent', 'accepted');
    setVisible(false);
  };

  const reject = () => {
    localStorage.setItem('cookie_consent', 'rejected');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] bg-ink text-white px-6 py-5 shadow-2xl">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-start sm:items-center gap-4 justify-between">
        <p className="text-sm font-light text-sand leading-relaxed">
          Utilizamos cookies técnicas necesarias para el funcionamiento del sitio.{' '}
          <a href="/cookies" className="underline hover:text-olive transition-colors">
            Más información
          </a>
        </p>
        <div className="flex gap-3 shrink-0">
          <button
            onClick={reject}
            className="px-5 py-2 rounded-full border border-sand/30 text-sand text-xs tracking-wide uppercase hover:border-sand/60 transition-colors"
          >
            Rechazar
          </button>
          <button
            onClick={accept}
            className="px-5 py-2 rounded-full bg-olive text-white text-xs tracking-wide uppercase hover:bg-olive-light transition-colors"
          >
            Aceptar
          </button>
        </div>
      </div>
    </div>
  );
}
