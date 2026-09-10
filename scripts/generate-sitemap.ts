import fs from 'fs';
import path from 'path';
import { blogPosts } from '../src/data/blogPosts';

const BASE_URL = 'https://mifaro.es';

const staticPages = [
  { url: '/', priority: '1.0', changefreq: 'weekly' },
  { url: '/valencia', priority: '0.9', changefreq: 'weekly' },
  { url: '/argentina', priority: '0.8', changefreq: 'weekly' },
  { url: '/psicologo-valencia', priority: '0.8', changefreq: 'monthly' },
  { url: '/adicciones-valencia', priority: '0.8', changefreq: 'monthly' },
  { url: '/terapia-pareja-valencia', priority: '0.8', changefreq: 'monthly' },
  { url: '/terapia-familiar-valencia', priority: '0.8', changefreq: 'monthly' },
  { url: '/psicologo-online-valencia', priority: '0.8', changefreq: 'monthly' },
  { url: '/ansiedad-valencia', priority: '0.8', changefreq: 'monthly' },
  { url: '/orientacion-familias-adicciones-valencia', priority: '0.8', changefreq: 'monthly' },
  { url: '/psicologo-adolescentes-valencia', priority: '0.8', changefreq: 'monthly' },
  { url: '/cuando-pedir-ayuda-psicologica-valencia', priority: '0.8', changefreq: 'monthly' },
  { url: '/como-saber-si-es-una-adiccion-valencia', priority: '0.8', changefreq: 'monthly' },
  { url: '/pantallas-ninos-cuando-preocuparse', priority: '0.8', changefreq: 'monthly' },
  { url: '/recursos/alcohol-familia-como-ayudar-valencia', priority: '0.8', changefreq: 'monthly' },
  { url: '/recursos/juego-apuestas-como-ayudar-valencia', priority: '0.8', changefreq: 'monthly' },
  { url: '/recursos/cannabis-como-ayudar-valencia', priority: '0.8', changefreq: 'monthly' },
  { url: '/recursos/ansioliticos-como-ayudar-valencia', priority: '0.8', changefreq: 'monthly' },
  { url: '/historia', priority: '0.7', changefreq: 'monthly' },
  { url: '/quienes-lo-hacemos', priority: '0.7', changefreq: 'monthly' },
  { url: '/contacto', priority: '0.7', changefreq: 'monthly' },
  { url: '/asociacion', priority: '0.7', changefreq: 'monthly' },
  { url: '/recursos', priority: '0.8', changefreq: 'weekly' },
  { url: '/recursos/voces', priority: '0.8', changefreq: 'weekly' },
];

const generateSitemap = () => {
  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

  // Add static pages
  staticPages.forEach(page => {
    xml += `
  <url>
    <loc>${BASE_URL}${page.url}</loc>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`;
  });

  // Add blog posts
  blogPosts.forEach(post => {
    if (post.id === 'pantallas-ninos-cuando-preocuparse') return;
    if (post.id === 'alcohol-familia-como-ayudar-valencia') return;
    if (post.id === 'juego-apuestas-como-ayudar-valencia') return;
    if (post.id === 'cannabis-como-ayudar-valencia') return;
    if (post.id === 'ansioliticos-como-ayudar-valencia') return;
    const isVoice = post.category === 'Las Voces del Faro';
    const pathPrefix = isVoice ? '/recursos/voces' : '/recursos';
    xml += `
  <url>
    <loc>${BASE_URL}${pathPrefix}/${post.id}</loc>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>`;
  });

  xml += `
</urlset>`;

  const outputPath = path.resolve(process.cwd(), 'public/sitemap.xml');
  fs.writeFileSync(outputPath, xml);
  console.log(`Sitemap generated successfully at ${outputPath}`);
};

generateSitemap();
