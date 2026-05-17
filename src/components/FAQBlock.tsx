import React from 'react';
import { motion } from 'framer-motion';
import { HelpCircle } from 'lucide-react';
import { FAQ } from '../types';
import { fadeUp, viewportConfig } from '../utils/animations';

interface FAQBlockProps {
  faqs: FAQ[];
  title?: string;
}
export default function FAQBlock({ faqs, title = "Preguntas frecuentes" }: FAQBlockProps) {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-serif text-ink mb-12 text-center">{title}</h2>
        <div className="space-y-8">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              transition={{ delay: index * 0.1 }}
              className="border-b border-sand pb-8 last:border-0"
            >
              <h3 className="text-lg font-medium text-ink mb-3 flex gap-3 items-start">
                <HelpCircle size={20} className="text-olive mt-1 shrink-0" />
                {faq.question}
              </h3>
              <p className="text-ink-light font-light leading-relaxed pl-8">{faq.answer}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
