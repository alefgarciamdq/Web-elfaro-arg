import fs from 'fs';
import path from 'path';

const BASE_URL = 'https://programaelfaro.com.ar';

const staticPages = [
  { url: '/', priority: '1.0', changefreq: 'weekly' },
  { url: '/adicciones-mar-del-plata', priority: '0.9', changefreq: 'monthly' },
  { url: '/psicologo-mar-del-plata', priority: '0.9', changefreq: 'monthly' },
  { url: '/como-pedir-ayuda-psicologia-mar-del-plata', priority: '0.8', changefreq: 'monthly' },
  { url: '/terapia-mar-del-plata', priority: '0.8', changefreq: 'monthly' },
  { url: '/asociacion', priority: '0.7', changefreq: 'monthly' },
  { url: '/historia', priority: '0.7', changefreq: 'monthly' },
  { url: '/quienes-lo-hacemos', priority: '0.8', changefreq: 'monthly' },
  { url: '/contacto', priority: '0.7', changefreq: 'monthly' },
  { url: '/aviso-legal', priority: '0.5', changefreq: 'monthly' },
  { url: '/privacidad', priority: '0.5', changefreq: 'monthly' },
  { url: '/cookies', priority: '0.5', changefreq: 'monthly' },
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

  xml += `
</urlset>`;

  const outputPath = path.resolve(process.cwd(), 'public/sitemap.xml');
  fs.writeFileSync(outputPath, xml);
  console.log(`Sitemap generated successfully at ${outputPath}`);
};

generateSitemap();

