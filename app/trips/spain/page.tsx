'use client';

import TripTemplate from '@/app/components/TripTemplate';

export default function SpainTrip() {
  const tips = [
    'Best Time to Visit: April-May or September-October for pleasant weather and fewer crowds',
    'Language: While English is spoken in tourist areas, learning basic Spanish phrases will enhance your experience',
    'Transportation: Book high-speed trains (AVE) in advance for better rates between major cities',
    'Accommodation: Stay in central neighborhoods (Eixample in Barcelona, Malasaña in Madrid, Albaicín in Granada)',
    'Dining: Eat like locals - have a light breakfast, larger lunch, and dinner after 8 PM',
    'Beaches: Pack sunscreen and arrive early to secure beach spots during peak season',
    'Budget: Set aside extra for authentic tapas crawls and flamenco shows - they\'re worth it',
    'Museums: Many museums offer free entry during certain hours - check ahead for discounts',
  ];

  const itinerary = [
    {
      day: 'Day 1: Barcelona - Arrival & Gothic Quarter',
      description:
        'Arrive at Barcelona-El Prat Airport and check into accommodation in Eixample or Gothic Quarter. Explore the narrow medieval streets of Barri Gòtic, visit Barcelona Cathedral (La Catedral), and walk along Las Ramblas towards the waterfront. End your day with dinner at a traditional tapas bar.',
      mapRef: 0,
    },
    {
      day: 'Day 2: Barcelona - Gaudí\'s Masterpieces',
      description:
        'Start early with a visit to Sagrada Família (book tickets in advance). Explore Park Güell with its stunning mosaic installations, have lunch at a beachfront chiringuito, walk through Barceloneta Beach, and visit Casa Batlló or Casa Vicens. Enjoy an evening paseo (stroll) through the city.',
      mapRef: 0,
    },
    {
      day: 'Day 3: Barcelona - Art & Beach Day',
      description:
        'Visit the Picasso Museum and explore more of the Gothic Quarter. Relax at Bogatell Beach and witness the magical Magic Fountain (Fonts de Montjuïc) light show in the evening. Optional: Visit Montjuïc Castle for panoramic city views.',
      mapRef: 0,
    },
    {
      day: 'Day 4: Madrid - Journey to Spain\'s Capital',
      description:
        'Take the AVE high-speed train to Madrid (3 hours). Check in and visit the Prado Museum, one of Europe\'s finest art museums. Explore Retiro Park where you can row on the lake and visit the Crystal Palace. Stroll through Sol neighborhood and enjoy dinner at a traditional Spanish restaurant.',
      mapRef: 1,
    },
    {
      day: 'Day 5: Madrid - Royal Madrid & Culture',
      description:
        'Visit the Royal Palace of Madrid (Palacio Real) and explore the adjoining Plaza Mayor and historic center. Tour the Reina Sofía Museum, home to Picasso\'s Guernica. Enjoy an afternoon tapas crawl in the La Latina neighborhood, and optionally experience an authentic flamenco show in the evening.',
      mapRef: 1,
    },
    {
      day: 'Day 6: Granada - The Jewel of Andalusia',
      description:
        'Travel to Granada by flight or train (1.5-2 hours). Check into the Albaicín neighborhood and visit Alhambra Palace, a UNESCO World Heritage site (book ahead). Explore the Generalife Gardens with stunning mountain views, have tea in a traditional Moroccan-style teashop, and watch the sunset from Mirador de San Nicolás.',
      mapRef: 2,
    },
    {
      day: 'Day 7: Granada & Costa del Sol - Mountain Villages & Beach Bound',
      description:
        'Spend the morning exploring Albaicín\'s narrow winding streets and viewpoints. Visit the Cathedral and Royal Chapel. In the afternoon, drive to Costa del Sol and check into a beach resort town (Nerja, Marbella, or Torremolinos). Relax on the beach and enjoy the Mediterranean sunset.',
      mapRef: 4,
    },
    {
      day: 'Day 8: Costa del Sol - Beach Relaxation & Seaside Exploration',
      description:
        'Enjoy a full day at the beach - swim, sunbathe, or try water sports. Optionally visit the Nerja Caves with their dramatic limestone formations. Have lunch at a beachfront restaurant with fresh seafood, visit charming white-washed villages (Frigiliana, Mijas), and enjoy beach bar drinks along the promenade in the evening.',
      mapRef: 4,
    },
    {
      day: 'Day 9: Seville - Andalusian Soul',
      description:
        'Travel to Seville (2.5-3 hours by drive or train). Visit the Cathedral and climb the Giralda Bell Tower for city views. Explore the stunning Alcázar Palace and walk through the historic Santa Cruz neighborhood. Marvel at Plaza de España\'s architecture and tiling, then experience an authentic flamenco performance.',
      mapRef: 3,
    },
    {
      day: 'Day 10: Seville & Departure - Final Spanish Moments',
      description:
        'Start with churros con chocolate at a local café. Visit beautiful parks like Maria Luisa or Metropol Parasol. Do some last-minute shopping for Spanish souvenirs, enjoy lunch at a traditional bodega (wine bar), and head to the airport (approximately 1 hour transfer). Reflect on 10 unforgettable days of Spanish adventures.',
      mapRef: 3,
    },
  ];

  const mapCenter: [number, number] = [40.4168, -3.7038]; // Madrid
  const mapMarkers = [
    { pos: [41.3851, 2.1734] as [number, number], label: "Barcelona" },
    { pos: [40.4168, -3.7038] as [number, number], label: "Madrid" },
    { pos: [37.1773, -3.5986] as [number, number], label: "Granada" },
    { pos: [37.3891, -5.9845] as [number, number], label: "Seville" },
    { pos: [36.7213, -4.4214] as [number, number], label: "Costa del Sol" },
  ];

  return (
    <TripTemplate
      title="Spain"
      location="Barcelona, Madrid, Granada, Costa del Sol, Seville"
      days="10 Days"
      bestTime="April-May or September-October"
      bannerImage="https://images.unsplash.com/photo-1562883676-8c6fbf064050?w=1200&h=400&fit=crop"
      summary="Experience the best of Spain across 10 unforgettable days. From the artistic wonders of Barcelona and the passionate energy of Madrid to the Moorish architecture of Granada and the sun-soaked beaches of the Costa del Sol, this journey captures the essence of Spanish culture, history, and cuisine."
      itinerary={itinerary}
      tips={tips}
      mapCenter={mapCenter}
      mapMarkers={mapMarkers}
      mapZoom={5}
    />
  );
}
