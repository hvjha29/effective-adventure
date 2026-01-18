'use client';

import TripTemplate from "@/app/components/TripTemplate";

export default function IstanbulTrip() {
  const summary = `
    V's bachelorette was the perfect mix of chaos, culture, carbs, caffeine 
    and questionable decisions that somehow always stayed on schedule. We explored 
    Istanbul like responsible party people — always on time, always hungry, always 
    vibing. This is the cleaned-up, website-friendly version of the madness.
  `;

  const itinerary = [
    {
      day: "Day 1 — Eastern Eats + Coffee Treats",
      description: `
        We landed on the Asian side and immediately set the tone — organised but fun.

        - IST Airport → Airbnb (₹1000)
        - Walk to Çiya Sofrası (Chef’s Table famous)
        - Lunch at Çiya Sofrası (₹1200)
        - Airbnb Games & Kahvehane Experience (₹4700)
        - Pub Hopping + Fahri Konsolos
        - Ended at Mecrada for drag shows at 11 PM & 2 AM

        Day 1 was foodie heaven + nightlife chaos. Perfect start.
      `,
      mapRef: 0
    },
    {
      day: "Day 2 — Eminönü Trail + Karaköy Heritage + Segway Night Ride",
      description: `
        A marathon of walking, eating, museums, baklava, a sunset cruise, and 
        night-time Segway chaos.

        Highlights:
        - Morning ferry to Eminönü (₹100)
        - Istanbul Railway Museum (Free)
        - Hafız Mustafa bakery
        - Spice Bazaar tour
        - Galata Bridge walk → Ottoman Bank Museum → Arap Camii
        - Galata Tower (we skipped the ₹3000 queues)
        - Pera Palace (Atatürk Room)
        - Lunch at Pera Antakya
        - Bosphorus Cruise (₹4750)
        - Night Segway Tour (₹3229)

        Peak productivity + peak fun.
      `,
      mapRef: 2
    },
    {
      day: "Day 3 — Old City Cultural Redemption",
      description: `
        The day where we pretended to be cultured adults.

        - Ferry to Eminönü (₹100)
        - Nakkaş Rugs (Free — and gorgeous!)
        - Topkapı Palace guided tour (₹7500)
        - Lunch at Caferağa Madrasa
        - Blue Mosque → Hagia Sophia (₹5482.5) → Basilica Cistern
        - Dinner at Garden 1897

        Lots of history. Lots of beauty. Lots of walking.
      `,
      mapRef: 4
    },
    {
      day: "Day 4 — Chill Asian-Side Day",
      description: `
        Our “soft life” day.

        - 31-stop bus ride to Anadoluhisarı (₹50)
        - Explore the fort (Free)
        - Küçüksu Pavilion (₹140)
        - Long break because we deserved it
        - Üsküdar + Moda Beach for sunset

        Perfect final day vibes.
      `,
      mapRef: 0
    }
  ];

  const tips = [
    "Morning ferries make you feel like your life is together.",
    "Carry cash — Istanbul loves cash.",
    "Queues at Hagia Sophia are real, prep accordingly.",
    "Wear walking shoes unless you're into pain.",
    "Have one responsible friend track money. Preferably someone who doesn’t lose receipts.",
    "Always hydrate between coffees and drinks (yes, this is important)."
  ];

  const mapCenter: [number, number] = [41.0082, 28.9784]; // Istanbul
  const mapMarkers = [
    { pos: [40.9902, 29.0281] as [number, number], label: "Çiya Sofrası" },
    { pos: [41.0164, 28.9709] as [number, number], label: "Spice Bazaar" },
    { pos: [41.0256, 28.9742] as [number, number], label: "Galata Tower" },
    { pos: [41.0310, 28.9766] as [number, number], label: "Pera Palace" },
    { pos: [41.0115, 28.9834] as [number, number], label: "Topkapı Palace" },
    { pos: [41.0054, 28.9768] as [number, number], label: "Blue Mosque" },
  ];

  return (
    <TripTemplate
      title="Istanbul — V's Bachelorette"
      location="Kadıköy, Eminönü, Karaköy, Old City, Üsküdar"
      days="4 Days"
      bestTime="April–June"
      bannerImage="https://images.unsplash.com/photo-1524231757912-21f7f2c951eb?w=1200&h=400&fit=crop"
      summary={summary}
      itinerary={itinerary}
      tips={tips}
      mapCenter={mapCenter}
      mapMarkers={mapMarkers}
    />
  );
}
