'use client';

import TripTemplate from '@/app/components/TripTemplate';

export default function EuropeTrip() {
  const tips = [
    'Starting Points: You can begin from Interlaken West, Interlaken Ost, Brienz, Spiez, or Thun - or stay in Lauterbrunnen valley',
    'Best Trains: Take the Interlaken–Luzern Express from Brienz for stunning glass-window views; from Interlaken Ost to Lauterbrunnen use the comfortable blue train',
    'Timing: Start early to avoid crowds, especially at Mürren and Gimmelwald. Trümmelbach Falls is more enjoyable when less crowded',
    'Packing: Bring comfortable walking shoes, snacks from the well-stocked Coop in Mürren, and layers - it gets cooler as you ascend',
    'Gimmelwald Highlights: Don\'t miss the Honesty Shop, local beer, famous Swiss milk, and ice cream. Respect the "Don\'t step on the grass - it\'s our food" signs',
    'Weather: Check forecasts before your trip - perfect weather dramatically enhances the alpine experience',
    'Transport Infrastructure: Swiss trains and gondolas are highly reliable and well-maintained; buy a Swiss Travel Pass for unlimited travel',
    'Photography: The views are postcard-perfect - especially the walk to Gimmelwald and the three peaks views from Mürren',
  ];

  const itinerary = [
    {
      day: 'Day 1: Arrival & Interlaken to Lauterbrunnen',
      description:
        'Arrive at your starting point (Interlaken West, Interlaken Ost, Brienz, Spiez, or Thun). If starting from Brienz, take the scenic Interlaken–Luzern Express with its spectacular glass windows. Make your way to Interlaken Ost, then board the comfortable blue train to Lauterbrunnen (quick, scenic ride with reasonably large windows). Arrive in Lauterbrunnen valley and settle into your accommodation. Take an evening stroll through Lauterbrunnen town and soak in the alpine atmosphere with views of Staubbach Falls and nearby waterfalls.',
      mapRef: 1,
    },
    {
      day: 'Day 2: Lauterbrunnen to Mürren via Gimmelwald',
      description:
        'Early start: Take the gondola from Lauterbrunnen (arrives at regular intervals, large enough for cattle - beautiful views). Board the modern train to Mürren (get off at the second stop). Explore the picture-perfect alpine village of Mürren. Grab coffee or snacks from the well-stocked Coop. Hike down to Gimmelwald through insanely beautiful alpine scenery - watch for the sudden stairs dropping left to the village. Spend time in charming Gimmelwald: visit the Honesty Shop, try local beer and famous Swiss ice cream, and admire the pastoral landscape. Return to Lauterbrunnen via gondola from Gimmelwald.',
      mapRef: 2,
    },
    {
      day: 'Day 3: Lauterbrunnen Valley & Trümmelbach Falls',
      description:
        'Travel to the Stechelberg stop in Lauterbrunnen valley (4-minute bus ride from main valley). Visit the spectacular Trümmelbach Falls - the only glacier waterfall accessible from inside. Spend 1-2 hours exploring the dramatic limestone formations and roaring waterfalls. Enjoy the unbelievably green grass surroundings and the charming flower-covered restaurant near the entrance. Return to Lauterbrunnen town by bus or pleasant walk. See the visible Staubbach Falls and explore climbing behind one of the nearby waterfalls for a unique experience. Evening: Relax and reflect on the valley\'s serene beauty.',
      mapRef: 1,
    },
    {
      day: 'Day 4: Schilthorn & Alpine Heights',
      description:
        'From Mürren, head up to Schilthorn via two gondolas, taking in activities and views at each stop. Enjoy spectacular 360-degree alpine views and photograph the majestic three peaks. Spend 1-2 hours at the summit (it\'s incredible but you won\'t need much longer). Return to Mürren for dinner with mountain views. Optional: Stop at mid-stations on the way down to explore further or watch sunset over the peaks. Evening: Rest and enjoy the quiet mountain atmosphere.',
      mapRef: 4,
    },
    {
      day: 'Day 5: Interlaken & Optional Excursions',
      description:
        'Return to Interlaken Ost from Lauterbrunnen. Choose from multiple options: (1) Take a ferry to St. Beatus Caves - stays open late with excellent views and a nice restaurant for dinner, perfect way to end the day. (2) Take a ferry to Giessbach Falls for scenic beauty and exploration. (3) Explore Interlaken town: visit the parks, enjoy local shops, and prepare for departure. Spend time reflecting on the breathtaking alpine journey.',
      mapRef: 0,
    },
    {
      day: 'Day 6: Departure or Extended Exploration',
      description:
        'Final morning in the Swiss Alps. Option 1: Depart for your next destination (airport or onward travel). Option 2: Take a morning ferry to whichever site you didn\'t visit on Day 5 - St. Beatus Caves or Giessbach Falls. Option 3: Revisit your favorite location from the itinerary. Enjoy a final Swiss breakfast or lunch before departing. Reflect on the rare balance of comfort, beauty, and serenity that made this journey unforgettable.',
    },
  ];

  const mapCenter: [number, number] = [46.6841, 7.8596]; // Interlaken
  const mapMarkers = [
    { pos: [46.6841, 7.8596] as [number, number], label: "Interlaken" },
    { pos: [46.5961, 7.9079] as [number, number], label: "Lauterbrunnen" },
    { pos: [46.5594, 7.8927] as [number, number], label: "Mürren" },
    { pos: [46.5458, 7.8822] as [number, number], label: "Gimmelwald" },
    { pos: [46.5574, 7.8350] as [number, number], label: "Schilthorn" },
  ];

  return (
    <TripTemplate
      title="Europe - Swiss Alps Adventure"
      location="Interlaken, Lauterbrunnen, Mürren, Gimmelwald, Schilthorn"
      days="6 Days"
      bestTime="May-September for best weather and accessibility"
      bannerImage="/images/europe/switzerland/gimmelwald_walk.jpg"
      summary="Experience the soothing majesty of the Swiss Alps across 6 unforgettable days. This carefully curated itinerary balances comfort, adventure, and breathtaking natural beauty. Journey through Lauterbrunnen valley, hike to the charming village of Gimmelwald, witness the dramatic Trümmelbach Falls, and ascend to the heights of Schilthorn. Every stop offers multiple options tailored to your mood and energy level, while the world-class Swiss transport infrastructure keeps you safe and on schedule. Discover why this route offers a rare blend of serenity, majesty, and stunning alpine scenery."
      itinerary={itinerary}
      tips={tips}
      mapCenter={mapCenter}
      mapMarkers={mapMarkers}
    />
  );
}
