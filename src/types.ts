export interface FAQ {
  question: string;
  answer: string;
}

export interface Situacion {
  title: string;
  description: string;
}

export interface RelatedArticle {
  id: string;
  title: string;
  category?: string;
  imageUrl?: string;
  excerpt?: string;
}
