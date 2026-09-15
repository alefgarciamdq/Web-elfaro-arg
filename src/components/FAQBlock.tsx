import React from 'react';
import { motion } from 'framer-motion';
import { HelpCircle } from 'lucide-react';
import { FAQ } from '../types';
import { fadeUp, viewportConfig } from '../utils/animations';
import JsonLd from './JsonLd';

interface FAQBlockProps {
  faqs: FAQ[];
  title?: string;
  variant?: 'light' | 'dark';
  bgClass?: string;
}
export default function FAQBlock({ faqs, title = "Preguntas frecuentes", variant = 'light', bgClass }: FAQBlockProps) {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  const isDark = variant === 'dark';

  return (
    <section className={`py-24 ${bgClass || (isDark ? 'bg-ink border-t border-sand/5 text-white' : 'bg-white')}`}>
      <JsonLd data={faqSchema} />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className={`text-3xl font-serif mb-12 text-center ${isDark ? 'text-offwhite font-light' : 'text-ink'}`}>{title}</h2>
        <div className="space-y-8">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              transition={{ delay: index * 0.1 }}
              className={`border-b pb-8 last:border-0 ${isDark ? 'border-sand/10' : 'border-sand'}`}
            >
              <h3 className={`text-lg font-medium mb-3 flex gap-3 items-start ${isDark ? 'text-offwhite' : 'text-ink'}`}>
                <HelpCircle size={20} className={`${isDark ? 'text-olive-light' : 'text-olive'} mt-1 shrink-0`} />
                {faq.question}
              </h3>
              <p className={`font-light leading-relaxed pl-8 ${isDark ? 'text-sand/70' : 'text-ink-light'}`}>{faq.answer}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
