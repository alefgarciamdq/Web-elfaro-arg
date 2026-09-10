import type { BlogPostMeta } from '../data/blogPostsMeta';
import type { BlogPost } from '../data/blogPosts';

type MinimallyCompatiblePost = {
  id: string;
  category: string;
};

/**
 * Returns the correct URL for a blog post based on its category.
 * Single source of truth for all post link routing.
 */
export function getBlogPostUrl(post: BlogPost | BlogPostMeta | MinimallyCompatiblePost): string {
  if (post.id === 'pantallas-ninos-cuando-preocuparse') {
    return `/pantallas-ninos-cuando-preocuparse`;
  }
  return post.category === 'Las Voces del Faro'
    ? `/recursos/voces/${post.id}`
    : `/recursos/${post.id}`;
}
