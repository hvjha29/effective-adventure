'use client';

import TripTemplate from '@/app/components/TripTemplate';

export default function GreeceTrip() {
  const tips = [
    'Best Time to Visit: Late spring (May–June) or early autumn (Sept–Oct) for mild weather and fewer crowds',
    'Ferries: Book Blue Star Ferries or Seajets in advance during high season; Athinios is Santorini’s main ferry port',
    'Timing at Athinios: Bus connections to Fira are coordinated but not on a fixed schedule — check times on arrival',
    'Ports: Don’t confuse Athinios Port (ferry) with Fira town (inland) — plan transfers accordingly',
    'Local Transport: Taxis can be expensive on islands; consider bus or pre-booked transfers for Oia',
    'Comfort: Pack comfortable shoes for cobbled streets, stairs, and volcanic sand beaches',
    'Tickets: Book major sites and popular museums in Athens ahead to avoid queues',
    'Respect: Dress modestly for temple visits and be prepared for lots of walking at archaeological sites',
  ];

  const itinerary = [
    {
      day: 'Day 1: Arrival — Chania (Crete)',
      description:
        'Arrive in Crete and settle in Chania (Xania). Explore the Old Venetian Harbor, wander the narrow alleys, and enjoy fresh seafood at a seaside taverna. Evening stroll along the harbor and gelato to finish the day.',
    },
    {
      day: 'Day 2: Chania — Food & Local Culture',
      description:
        'Spend the day on a culinary exploration: visit local markets, sample olive oil and cheeses, and take a cooking class or food tour. Option to visit nearby beaches or take a short hike into the White Mountains.',
    },
    {
      day: 'Day 3: Ferry to Santorini',
      description:
        'Board the Blue Star Ferry to Santorini. Arrive at Athinios Port, then take the bus or transfer to Fira. Explore the caldera edge, enjoy sunset viewpoints, and settle in for a Santorini evening.',
    },
    {
      day: 'Day 4: Santorini — Oia & Caldera',
      description:
        'Morning stroll around Fira, then head to Oia for iconic white-washed buildings and cliffside views. Wine tasting in the afternoon and catch the famous Oia sunset. Option: visit Red Beach or the archaeological site of Akrotiri.',
    },
    {
      day: 'Day 5: Santorini — Relaxation & Sailing',
      description:
        'Optional catamaran or sailing trip around the caldera, including hot springs and volcanic islets. Relax on volcanic beaches or explore Santorini’s wineries. Evening ferry or flight to Athens.',
    },
    {
      day: 'Day 6: Athens — Ancient Highlights',
      description:
        'Arrive in Athens and head straight to the Acropolis and Parthenon. Visit the Acropolis Museum and walk through the historic Plaka neighborhood with its cafés and shops.',
    },
    {
      day: 'Day 7: Athens — Day Trip to Nafplio',
      description:
        'Take a day trip to Nafplio to visit Palamidi Fortress, wander the Old Town, and enjoy seaside views. Return to Athens in the evening.',
    },
    {
      day: 'Day 8: Athens — Delphi and Arachova',
      description:
        'Choose between a day trip to Delphi to explore the ancient oracle and museum, or a shorter trip to Cape Sounion to see the Temple of Poseidon at sunset.',
    },
    {
      day: 'Day 9: Athens — Museums & Markets',
      description:
        'Visit the National Archaeological Museum or the Byzantine Museum. Explore Monastiraki and the flea market, enjoy street food at local stalls, and savor a leisurely evening in Psiri.',
    },
    {
      day: 'Day 10: Departure — Plaka & Farewells',
      description:
        'Final morning in Plaka for last-minute shopping and a farewell coffee. Transfer to the airport for departure, taking with you memories of culinary delights, island sunsets, and classical wonders.',
    },
  ];

  return (
    <TripTemplate
      title="Greece — 10-Day Classic: Crete, Santorini & Athens"
      location="Chania (Crete), Santorini, Athens"
      days="10 Days"
      bestTime="May–September for warm sea weather and island ferries"
      bannerImage="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&h=400&fit=crop"
      summary="Explore Greece across ten days: start with the culinary and natural charms of Crete, sail to Santorini for epic sunsets and caldera views, and finish in Athens with deep dives into ancient history and accessible day trips. This itinerary balances relaxed island time with immersive cultural and archaeological experiences."
      itinerary={itinerary}
      tips={tips}
    />
  );
}