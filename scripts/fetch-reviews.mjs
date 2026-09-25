import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PLACE_ID = 'ChIJJTcKJKbdhJUR7avL6H50Bmg'; // El Faro Mar del Plata
const OUTPUT_FILE = path.join(__dirname, '../src/data/reviews.json');

const FALLBACK_DATA = {
  rating: 4.2,
  reviews: []
};

// Privacy format helper (e.g. "Juan Carlos Pérez" -> "Juan P.")
function formatAuthorName(name) {
  if (!name) return 'Anónimo';
  const parts = name.trim().split(/\s+/);
  if (parts.length === 1) {
    return parts[0];
  }
  if (parts.length > 1) {
    const firstName = parts[0];
    const lastName = parts[parts.length - 1];
    if (lastName.length <= 2) {
      return `${firstName} ${lastName.endsWith('.') ? lastName : lastName + '.'}`;
    }
    return `${firstName} ${lastName.charAt(0).toUpperCase()}.`;
  }
  return name;
}

async function fetchReviews() {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  if (!apiKey) {
    console.warn('WARNING: GOOGLE_PLACES_API_KEY is not defined. Using fallback data.');
    writeOutputFile(FALLBACK_DATA);
    return;
  }

  const url = `https://places.googleapis.com/v1/places/${PLACE_ID}?languageCode=es`;
  
  try {
    console.log(`Fetching reviews for Place ID ${PLACE_ID} using Places API (New)...`);
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'X-Goog-Api-Key': apiKey,
        'X-Goog-FieldMask': 'reviews,rating'
      }
    });

    if (!response.ok) {
      const errText = await response.text();
      throw new Error(`API returned status ${response.status}: ${errText}`);
    }

    const data = await response.json();
    console.log('Successfully fetched Place details.');
    
    const output = {
      rating: data.rating || 4.2,
      reviews: (data.reviews || []).map(r => ({
        authorName: formatAuthorName(r.authorAttribution?.displayName),
        rating: r.rating || 5,
        text: r.text?.text || '',
        relativePublishTimeDescription: r.relativePublishTimeDescription || ''
      }))
    };

    writeOutputFile(output);
    console.log(`Saved ${output.reviews.length} reviews to ${OUTPUT_FILE} (Anonymized).`);
  } catch (error) {
    console.error('Error fetching reviews from Google Places API:', error.message);
    console.warn('Using fallback data to prevent build failure.');
    writeOutputFile(FALLBACK_DATA);
  }
}

function writeOutputFile(data) {
  const dir = path.dirname(OUTPUT_FILE);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(data, null, 2), 'utf-8');
}

fetchReviews();
