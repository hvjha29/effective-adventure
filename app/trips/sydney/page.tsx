'use client';

import TripTemplate from '@/app/components/TripTemplate';

export default function SydneyTrip() {
  const tips = [
    'Transportation: Get an Opal Card for easy access to ferries, trains, and buses.',
    'Footwear: Wear comfortable walking shoes — Sydney involves a lot of walking, especially along the coast.',
    'Sun Protection: Sunscreen, hats, and sunglasses are mandatory year-round, even in winter.',
    'Booking: Reserve popular dining spots like Coogee Pavilion or Taronga Zoo experiences in advance.',
    'Early Starts: Begin the Bondi to Coogee walk early to catch the best light and avoid the midday heat.',
    'Ocean Safety: Always swim between the red and yellow flags at the beaches.',
  ];

  const itinerary = [
    {
      day: 'Day 1: Circular Quay & Sydney Opera House',
      description:
        "Begin your adventure at Circular Quay. Take a guided tour of the iconic Sydney Opera House, then stroll through the Royal Botanic Gardens. End your day with a sunset walk across the Sydney Harbour Bridge for unmatched views of the city skyline.",
      mapRef: 0,
    },
    {
      day: 'Day 2: Bondi to Coogee Coastal Walk',
      description:
        "Start with a morning coffee at Bondi Beach. Embark on the world-famous coastal walk to Coogee, passing through Tamarama and Bronte. Enjoy a well-deserved lunch at the Coogee Pavilion after completing the scenic 6km trek.",
      mapRef: 1,
    },
    {
      day: 'Day 3: Taronga Zoo & Harbour Ferries',
      description:
        "Take a scenic ferry from Circular Quay to Taronga Zoo. Spend the day meeting kangaroos and koalas with the Sydney skyline as your backdrop. Don't miss the Sky Safari cable car for a bird's-eye view of the exhibits.",
      mapRef: 0,
    },
    {
      day: 'Day 4: Blue Mountains Day Trip',
      description:
        "Head west to the Blue Mountains. Visit the Three Sisters viewpoint at Echo Point, hike down to Wentworth Falls, and experience the steep incline of the Scenic World railway and cable cars. Breathe in the crisp mountain air and enjoy the stunning blue-tinged vistas.",
      mapRef: 2,
    },
    {
      day: 'Day 5: Manly Beach & Shelly Beach',
      description:
        "Board the iconic Manly Ferry for a 30-minute cruise across the harbour. Explore the Corso, relax on Manly Beach, and take the short walk to the sheltered Shelly Beach for some snorkeling or a quiet swim. Enjoy dinner by the wharf before heading back.",
      mapRef: 3,
    },
    {
      day: 'Day 6: Darling Harbour & Farewell',
      description:
        "Spend your final day at Darling Harbour. Visit SEA LIFE Sydney Aquarium to see dugongs and sharks, then explore the nearby wildlife park. End your trip with an evening harbour cruise or a farewell dinner at one of the many waterfront restaurants.",
      mapRef: 4,
    },
  ];

  const mapCenter: [number, number] = [-33.8688, 151.2093]; // Sydney
  const mapMarkers = [
    { pos: [-33.8568, 151.2153] as [number, number], label: "Sydney Opera House" },
    { pos: [-33.8915, 151.2767] as [number, number], label: "Bondi Beach" },
    { pos: [-33.7126, 150.3119] as [number, number], label: "Blue Mountains" },
    { pos: [-33.7997, 151.2848] as [number, number], label: "Manly Beach" },
    { pos: [-33.8732, 151.1983] as [number, number], label: "Darling Harbour" },
  ];

  return (
    <TripTemplate
      title="Sydney — 6-Day Coastal Wonders"
      location="Circular Quay, Bondi, Blue Mountains, Manly, Darling Harbour"
      days="6 Days"
      bestTime="Sept–Nov or March–May for the most pleasant weather"
      bannerImage="https://images.unsplash.com/photo-1506973035872-a4ec16b8e86a?w=1200&h=400&fit=crop"
      summary="Discover the vibrant energy and natural beauty of Australia's most iconic city. From the architectural marvel of the Opera House to the stunning coastal trails of Bondi and the misty peaks of the Blue Mountains, this itinerary offers a perfect blend of urban exploration and scenic adventure over six unforgettable days."
      itinerary={itinerary}
      tips={tips}
      mapCenter={mapCenter}
      mapMarkers={mapMarkers}
    />
  );
}
