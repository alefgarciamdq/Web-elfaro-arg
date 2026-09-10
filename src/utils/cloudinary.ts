import type { BlogImage } from '../data/blogPosts';

const CLOUD_NAME = 'dwv5ehc6e';
const CLOUDINARY_BASE = `https://res.cloudinary.com/${CLOUD_NAME}/image/upload`;
const WEBSITE_ORIGIN = 'https://mifaro.es';

// Interfaz mínima compatible con BlogPost y BlogPostMeta
export interface BlogPostCompatibleImage {
  imageUrl: string;
  image?: BlogImage;
}

interface TransformationOptions {
  width?: number;
  height?: number;
  aspectRatio?: string;
  crop?: string;
  gravity?: string;
  format?: string;
  quality?: string;
}

/**
 * Helper base que genera la URL de Cloudinary con transformaciones y optimizaciones.
 */
function buildUrl(publicId: string, options: TransformationOptions = {}): string {
  const params: string[] = [];

  // Optimización de formato y compresión
  params.push(options.format || 'f_auto');
  params.push(options.quality || 'q_auto');

  // Relación de aspecto
  if (options.aspectRatio) {
    params.push(`ar_${options.aspectRatio}`);
  }
  // Dimensiones
  if (options.width) {
    params.push(`w_${options.width}`);
  }
  if (options.height) {
    params.push(`h_${options.height}`);
  }
  // Recorte y gravedad inteligente (g_auto)
  if (options.width || options.height || options.aspectRatio) {
    params.push(options.crop || 'c_fill');
    if (options.crop === 'c_fill' || !options.crop) {
      params.push(options.gravity || 'g_auto');
    }
  }

  return `${CLOUDINARY_BASE}/${params.join(',')}/${publicId}`;
}

/**
 * Resuelve la imagen del post retornando la URL de Cloudinary o el fallback local.
 */
function resolvePostImage(
  post: BlogPostCompatibleImage,
  options: TransformationOptions,
  fallbackLocalUrl: string
): string {
  if (post.image && post.image.provider === 'cloudinary' && post.image.publicId) {
    return buildUrl(post.image.publicId, options);
  }
  return post.imageUrl || fallbackLocalUrl;
}

/**
 * 1. Hero Image (Desktop y Móvil) - Sin Recortes Forzados en Cloudinary
 * Utiliza c_limit para redimensionar sin recortar, delegando el encuadre en el contenedor CSS.
 */
export function getHeroImageUrl(post: BlogPostCompatibleImage, width: number): string {
  return resolvePostImage(
    post,
    { crop: 'c_limit', width },
    post.imageUrl
  );
}

/**
 * Genera el atributo srcSet para la cabecera (Hero) utilizando anchos específicos:
 * 480, 640, 960, 1200 y 1440.
 */
export function getHeroSrcSet(post: BlogPostCompatibleImage): string {
  const widths = [480, 640, 960, 1200, 1440];
  return widths
    .map(w => `${getHeroImageUrl(post, w)} ${w}w`)
    .join(', ');
}

/**
 * 2. Card Image - Carruseles y listados de Recursos
 * Genera una miniatura a partir de la imagen maestra con aspect-ratio 16:10 y gravedad inteligente.
 */
export function getCardImageUrl(post: BlogPostCompatibleImage, width: number): string {
  return resolvePostImage(
    post,
    { aspectRatio: '16:10', width, crop: 'c_fill', gravity: 'g_auto' },
    post.imageUrl
  );
}

/**
 * Genera el atributo srcSet para las tarjetas (Cards) utilizando anchos específicos:
 * 320, 480 y 800.
 */
export function getCardSrcSet(post: BlogPostCompatibleImage): string {
  const widths = [320, 480, 800];
  return widths
    .map(w => `${getCardImageUrl(post, w)} ${w}w`)
    .join(', ');
}

/**
 * 3. Open Graph Image - Metadatos de Redes Sociales (Facebook, LinkedIn, Twitter)
 * Genera una URL absoluta con el formato estable de Facebook: 1200x630 (aspect-ratio 1.91:1),
 * forzando formato JPG para máxima compatibilidad con bots, y aplicando g_auto.
 */
export function getOgImageUrl(post: BlogPostCompatibleImage): string {
  if (post.image && post.image.provider === 'cloudinary' && post.image.publicId) {
    return buildUrl(post.image.publicId, {
      aspectRatio: '1.91:1',
      width: 1200,
      height: 630,
      crop: 'c_fill',
      gravity: 'g_auto',
      format: 'f_jpg'
    });
  }

  // Si es local, convertimos la URL relativa (/imagen.jpg) en una URL absoluta estable
  const localPath = post.imageUrl;
  if (localPath.startsWith('http')) {
    return localPath;
  }
  return `${WEBSITE_ORIGIN}${localPath.startsWith('/') ? '' : '/'}${localPath}`;
}
