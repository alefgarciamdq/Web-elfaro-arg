import { ALL_GOOGLE_REVIEWS_ARGENTINA, GoogleReviewItem } from './googleReviewsArgentina';

/**
 * Configuración editorial desacoplada:
 * IDs de las reseñas seleccionadas para mostrar en la Home de El Faro Argentina.
 */
export const SELECTED_REVIEW_IDS: string[] = [
  'tony-munoz',
  'veronica-bosco',
  'maria-belen-debortoli',
  'maria-alcorta',
];

export const getSelectedReviews = (): GoogleReviewItem[] => {
  return SELECTED_REVIEW_IDS
    .map((id) => ALL_GOOGLE_REVIEWS_ARGENTINA.find((r) => r.id === id))
    .filter((r): r is GoogleReviewItem => Boolean(r));
};
