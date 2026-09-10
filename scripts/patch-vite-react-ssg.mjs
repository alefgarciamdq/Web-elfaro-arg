import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

const filePath = join(process.cwd(), 'node_modules/vite-react-ssg/dist/index.mjs');

try {
  let content = readFileSync(filePath, 'utf-8');
  
  const target = `window.__VITE_REACT_SSG_STATIC_LOADER_MANIFEST__ = await (await fetch(withLeadingSlash(manifestUrl))).json();`;
  
  const replacement = `try {
            const response = await fetch(withLeadingSlash(manifestUrl));
            const text = await response.text();
            window.__VITE_REACT_SSG_STATIC_LOADER_MANIFEST__ = JSON.parse(text);
          } catch (e) {
            window.location.reload(true);
            return;
          }`;
          
  if (content.includes(target)) {
    content = content.replace(target, replacement);
    writeFileSync(filePath, content, 'utf-8');
    console.log('Successfully patched vite-react-ssg index.mjs!');
  } else if (content.includes('JSON.parse(text)') && content.includes('window.location.reload')) {
    console.log('vite-react-ssg index.mjs is already patched.');
  } else {
    console.warn('Could not find target SSG manifest loading statement in vite-react-ssg index.mjs!');
  }
} catch (error) {
  console.error('Error patching vite-react-ssg:', error.message);
}
