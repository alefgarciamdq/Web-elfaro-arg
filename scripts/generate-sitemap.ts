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
  { url: '/psicologo-online-valencia', priority: '0.8', changefreq: 'monthly' },
  { url: '/ansiedad-valencia', priority: '0.8', changefreq: 'monthly' },
  { url: '/orientacion-familias-adicciones-valencia', priority: '0.8', changefreq: 'monthly' },
  { url: '/psicologo-adolescentes-valencia', priority: '0.8', changefreq: 'monthly' },
  { url: '/historia', priority: '0.7', changefreq: 'monthly' },
  { url: '/quienes-lo-hacemos', priority: '0.7', changefreq: 'monthly' },
  { url: '/contacto', priority: '0.7', changefreq: 'monthly' },
  { url: '/recursos', priority: '0.8', changefreq: 'weekly' },
  { url: '/aviso-legal', priority: '0.3', changefreq: 'yearly' },
  { url: '/privacidad', priority: '0.3', changefreq: 'yearly' },
  { url: '/cookies', priority: '0.3', changefreq: 'yearly' },
  { url: '/colabora', priority: '0.5', changefreq: 'monthly' },
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
    xml += `
  <url>
    <loc>${BASE_URL}/recursos/${post.id}</loc>
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
