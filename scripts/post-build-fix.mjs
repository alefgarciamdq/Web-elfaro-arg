import { readFileSync, writeFileSync, readdirSync, statSync } from 'fs';
import { join } from 'path';

const distDir = './dist';

function walkAndFix(dir) {
  const files = readdirSync(dir);
  for (const file of files) {
    const filePath = join(dir, file);
    if (statSync(filePath).isDirectory()) {
      if (file !== 'assets' && file !== 'static-loader-data') {
        walkAndFix(filePath);
      }
    } else if (file.endsWith('.html')) {
      let html = readFileSync(filePath, 'utf-8');
      
      // Find the hash script: <script>window.__VITE_REACT_SSG_HASH__ = '...'</script>
      const hashRegex = /<script>window\.__VITE_REACT_SSG_HASH__ = '[a-z0-9]+'<\/script>/;
      const hashMatch = html.match(hashRegex);
      
      if (hashMatch) {
        const hashScript = hashMatch[0];
        // Remove it from its current position (usually bottom of body)
        html = html.replace(hashRegex, '');
        // Move it to the <head>, just before the app script or after GTM
        // We insert it at the beginning of <head> to be sure
        html = html.replace('<head>', `<head>\n    ${hashScript}`);
        
        writeFileSync(filePath, html, 'utf-8');
        console.log(`Fixed hash placement in: ${filePath}`);
      } else {
        console.warn(`Hash script not found in: ${filePath}`);
      }
    }
  }
}

console.log('Starting post-build fix to move SSG hash to <head>...');
walkAndFix(distDir);
console.log('Post-build fix complete.');
