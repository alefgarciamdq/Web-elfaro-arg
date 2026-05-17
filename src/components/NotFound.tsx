import { Link } from 'react-router-dom';
import { ArrowRight, Home, MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';

export default function NotFound() {
  return (
    <div className="bg-offwhite min-h-screen flex items-center justify-center pt-20">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center justify-center w-20 h-20 bg-sand-light rounded-full mb-8 text-terra">
            <span className="text-4xl font-serif">404</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-serif text-ink mb-6">
            Página no encontrada
          </h1>
          
          <p className="text-xl text-ink-light font-light leading-relaxed mb-12">
            La página que buscas no existe o ha cambiado de lugar. Puedes volver al inicio o escribirnos si necesitas orientación.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link
              to="/"
              className="inline-flex items-center gap-2 bg-ink text-white px-8 py-4 rounded-full text-sm font-medium tracking-wide uppercase hover:bg-ink-light transition-colors w-full sm:w-auto justify-center"
            >
              <Home size={18} />
              Volver al inicio
            </Link>
            
            <Link
              to="/contacto"
              className="inline-flex items-center gap-2 bg-offwhite border border-sand text-ink px-8 py-4 rounded-full text-sm font-medium tracking-wide uppercase hover:bg-sand-light transition-colors w-full sm:w-auto justify-center"
            >
              <MessageSquare size={18} />
              Hablar con El Faro
              <ArrowRight size={16} />
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
