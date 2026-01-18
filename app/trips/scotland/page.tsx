'use client';

import TripTemplate from '@/app/components/TripTemplate';

export default function ScotlandTrip() {
  const tips = [
    'Weather: Pack layers and waterproof gear — conditions change quickly in the Highlands',
    'Transport: Renting a car gives you flexibility for remote spots; allow extra time for narrow single-track roads',
    'Best Time: May–September for milder weather, longer daylight, and more accessible trails',
    'Booking: Reserve accommodations and popular distillery tours in advance during peak season',
    'Footwear: Bring sturdy walking shoes for cobbled streets, rocky trails, and uneven paths',
    'Connectivity: Mobile reception can be patchy in remote areas like Skye — download offline maps',
    'Driving: Drive on the left and be cautious on rural roads; watch for sheep',
    'Local Culture: Try local whisky, seafood, and regional dishes; be respectful around private estates',
  ];

  const itinerary = [
    {
      day: 'Day 1: Edinburgh — Arrival & Royal Mile',
      description:
        "Arrive in Edinburgh, settle in, and explore the Royal Mile. Visit St Giles' Cathedral and wander through Grassmarket. Evening dinner in the city center and a relaxed stroll to take in the castle views.",
      mapRef: 0,
    },
    {
      day: 'Day 2: Edinburgh — Castle & Museums',
      description:
        "Tour Edinburgh Castle in the morning, visit the National Museum of Scotland, and explore hidden closes and courtyards. Optionally hike Arthur's Seat for panoramic city views.",
      mapRef: 0,
    },
    {
      day: 'Day 3: Highlands — Glencoe & Scenic Hikes',
      description:
        "Drive into the Highlands toward Glencoe. Hike the Three Sisters area, visit scenic viewpoints along Loch Leven, and soak in dramatic glens before heading north toward Skye the next day.",
      mapRef: 1,
    },
    {
      day: 'Day 4: Isle of Skye — Portree & Old Man of Storr',
      description:
        "Travel to the Isle of Skye, check into accommodation in Portree, and explore nearby highlights like the Old Man of Storr and coastal viewpoints. Enjoy a relaxed evening in Portree's harbor.",
      mapRef: 3,
    },
    {
      day: 'Day 5: Isle of Skye — Fairy Pools & Kilt Rock',
      description:
        "Hike to the Fairy Pools, visit Kilt Rock and Mealt Falls, and explore Dunvegan Castle or local coastal walks. Consider a distillery visit or local boat trip.",
      mapRef: 2,
    },
    {
      day: 'Day 6: Skye — Talisker Distillery & Scenic Drives',
      description:
        "Visit Talisker Distillery for a tour and tasting. Spend the day on scenic drives, stop at viewpoints and beaches, and sample local seafood in the evening.",
      mapRef: 2,
    },
    {
      day: 'Day 7: Return to Edinburgh & Farewell',
      description:
        "Drive back to Edinburgh, stop for photos and short walks en route, enjoy last-minute shopping on Princes Street, and finish with sunset views and a farewell dinner.",
      mapRef: 0,
    },
  ];

  const mapCenter: [number, number] = [56.4907, -4.2026]; // Central Highlands
  const mapMarkers = [
    { pos: [55.9533, -3.1883] as [number, number], label: "Edinburgh" },
    { pos: [56.6815, -5.1023] as [number, number], label: "Glencoe" },
    { pos: [57.4124, -6.1963] as [number, number], label: "Isle of Skye" },
    { pos: [57.4890, -6.1916] as [number, number], label: "Portree" },
  ];

  return (
    <TripTemplate
      title="Scotland — 7-Day Highlands & Isle of Skye"
      location="Edinburgh, Scottish Highlands, Isle of Skye"
      days="7 Days"
      bestTime="May–September"
      bannerImage="https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1200&h=400&fit=crop"
      summary="A seven-day Scotland itinerary that balances Edinburgh’s history with the raw beauty of the Highlands and the Isle of Skye. Expect castles, dramatic glens, island cliffs, whisky tastings, and unforgettable scenic drives."
      itinerary={itinerary}
      tips={tips}
      mapCenter={mapCenter}
      mapMarkers={mapMarkers}
    />
  );
}