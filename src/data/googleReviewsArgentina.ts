export interface GoogleReviewItem {
  id: string;
  authorOriginal: string;
  authorAnonymized: string;
  authorMeta?: string;
  rating: number;
  relativeTime: string;
  text: string;
  ownerResponse?: {
    text: string;
    relativeTime?: string;
  };
}

export interface GoogleBusinessProfileData {
  placeId: string;
  cid: string;
  name: string;
  address: string;
  rating: number;
  totalReviews: number;
  viewReviewsUrl: string;
  writeReviewUrl: string;
}

export const GOOGLE_PROFILE_ARGENTINA: GoogleBusinessProfileData = {
  placeId: 'ChIJJTcKJKbdhJUR7avL6H50Bmg',
  cid: '7495806718225132525',
  name: 'El Faro — Acompañamiento en Adicciones y Salud Mental',
  address: 'Garay 2073, B7600 Mar del Plata, Provincia de Buenos Aires, Argentina',
  rating: 4.2,
  totalReviews: 21,
  viewReviewsUrl: 'https://www.google.com/maps/place/?q=place_id:ChIJJTcKJKbdhJUR7avL6H50Bmg',
  writeReviewUrl: 'https://g.page/r/Ce2ry-h-dAZoEBM/review',
};

export const ALL_GOOGLE_REVIEWS_ARGENTINA: GoogleReviewItem[] = [
  {
    id: 'tony-munoz',
    authorOriginal: 'Tony Muñoz',
    authorAnonymized: 'Tony M.',
    authorMeta: 'Local Guide · 161 reseñas · 133 fotos',
    rating: 5,
    relativeTime: 'Hace un año',
    text: 'El faro es un lugar q nos enseñó muchísimo de amor pero de amor responsable , nos enseñó q la inconsionalidad no es buena , nos enseñó q los secretos familiares son dañinos nos enseñó a comunicarnos para salir del lugar q estábamos y a pedir ayuda cuando la necesitamos',
    ownerResponse: {
      text: 'Gracias Tony!! Ese es nuestro objetivo, acompañar desde un lugar profesional, empaticoo y sano',
      relativeTime: 'Hace un año',
    },
  },
  {
    id: 'calderon-dis',
    authorOriginal: 'Calderón Dis',
    authorAnonymized: 'Nacho C.',
    authorMeta: 'Local Guide · 49 reseñas · 7 fotos',
    rating: 5,
    relativeTime: 'Hace 3 años',
    text: 'El Faro es un lugar de amor, de salud, de vida y de abrazos. Una gran familia. Siempre agradecido ❤️',
    ownerResponse: {
      text: 'Gracias Nacho !! Te dejo un abz inmenso',
      relativeTime: 'Hace 3 años',
    },
  },
  {
    id: 'maria-belen-debortoli',
    authorOriginal: 'Maria Belen Debortoli',
    authorAnonymized: 'María Belén D.',
    authorMeta: '2 reseñas',
    rating: 5,
    relativeTime: 'Hace 3 años',
    text: 'Literalmente un faro, una luz en el camino de todos y cada uno de los que directa o indirectamente, caímos en ese lugar;un rayo de luz en medio de tanta oscuridad!! Gracias gracias gracias, SIEMPRE!',
    ownerResponse: {
      text: 'Gracias, gracias por un comentario tan bonito, un abrazo gigante!!!',
      relativeTime: 'Hace 3 años',
    },
  },
  {
    id: 'maria-alcorta',
    authorOriginal: 'maria alcorta',
    authorAnonymized: 'María A.',
    authorMeta: '4 reseñas · 4 fotos',
    rating: 5,
    relativeTime: 'Hace 2 años',
    text: 'Con mucho amor contención y compromiso abordan un estilo de vida que a muchos nos cuesta cambiar pero no es imposible de llegar a realizar en proceso de cambios como familia lo vamos a lograr',
    ownerResponse: {
      text: 'Gracias Maria',
      relativeTime: 'Hace 2 años',
    },
  },
  {
    id: 'veronica-bosco',
    authorOriginal: 'Veronica Bosco',
    authorAnonymized: 'Verónica B.',
    authorMeta: '8 reseñas · 4 fotos',
    rating: 5,
    relativeTime: 'Hace 3 años',
    text: 'Es un lugar de exelencia en el tratamiento de consumos problemáticos, dónde se aborda el problema desde el amor y resaltando valores indispensables para las relaciones vinculares',
    ownerResponse: {
      text: 'Gracias por tu lindo mensaje, te enviamos un fuerte abrazo',
      relativeTime: 'Hace 3 años',
    },
  },
  {
    id: 'laura-dalla-valle',
    authorOriginal: 'Laura Dalla Valle',
    authorAnonymized: 'Laura D.',
    authorMeta: 'Local Guide · 29 reseñas · 316 fotos',
    rating: 5,
    relativeTime: 'Fecha de edición: Hace 2 años',
    text: 'El Faro es el lugar dónde aprendimos a comunicarnos con amor. Gracias Faro!!!',
    ownerResponse: {
      text: 'Gracias infinitas Laura querida!!',
      relativeTime: 'Hace 3 años',
    },
  },
  {
    id: 'farantky',
    authorOriginal: 'Farantky',
    authorAnonymized: 'Farantky',
    authorMeta: 'Local Guide · 60 reseñas · 69 fotos',
    rating: 4,
    relativeTime: 'Hace un año',
    text: 'Hermoso a la vista. No tengo experiencias adentro o cerca del lugar.',
    ownerResponse: {
      text: '🙏🏻…',
      relativeTime: 'Hace un mes',
    },
  },
  {
    id: 'alicia-monica-suriani',
    authorOriginal: 'Alicia Monica Suriani',
    authorAnonymized: 'Alicia S.',
    authorMeta: '5 reseñas',
    rating: 1,
    relativeTime: 'Hace 2 años',
    text: 'Alguien me puede dar referencias de este lugar urgente? Mi hijo tiene esquizofrenia,  dejo medicación y su psiquiatra ordenó internacion,  es muy dócil y bueno.  Necesito saber si ahí o donde me recomiendan internacion en Mardel, tengo que definir donde lo llevamo, no soy de ahí,  lo tengo que dejar soy paciente oncologica en tratamiento yquiero un lugar de afecto, médicos, enfermeros,  contención, que no le hagan daño , el llora porque tiene miedo, respuesta urgente, gracias bendiciones 🙏',
    ownerResponse: {
      text: 'Hola Alicia,  ya te hemos respondido por otro medio, gracias',
      relativeTime: 'Hace 2 años',
    },
  },
];
