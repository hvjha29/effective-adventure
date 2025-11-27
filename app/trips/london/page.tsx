'use client';

import TripTemplate from '@/app/components/TripTemplate';

export default function LondonTrip() {
  const tips = [
    'Oyster or contactless: use for buses, Tube and rail — cheaper than single tickets',
    'Best Time to Visit: Late spring (May-June) or early autumn (Sept) for milder weather and fewer crowds',
    'Travel light: many attractions require walking; wear comfortable shoes and layers',
    'Book ahead: West End shows, Westminster attractions, and Tower of London often sell out',
    'Timing: Arrive early at popular sites (British Museum, Westminster) to avoid long lines',
    'Security: Expect bag checks at major attractions and some train stations',
    'Markets & Food: Borough, Camden, and Maltby Street are great for sampling street food',
    'Transport windows: allow extra time for the Tube during rush hour and check London Overground links',
  ];

  const itinerary = [
    {
      day: 'Day 1: Arrival & Westminster + Southbank',
      description:
        'Arrive in London and settle into your accommodation. Start with a walk around Westminster: view the Houses of Parliament, Big Ben, and Westminster Abbey (consider a guided tour). Cross to the Southbank for riverside strolls, the London Eye (optional ride), and street performers. Visit Tate Modern or the National Theatre depending on your interests. Finish the evening with dinner on the Southbank or in Covent Garden and enjoy the lively West End atmosphere.',
    },
    {
      day: 'Day 2: Museums & Kensington',
      description:
        'Spend the morning in South Kensington visiting the Natural History Museum or the V&A (both offer free entry). Walk through Kensington Gardens and see the Kensington Palace exterior. Head to the British Museum in Bloomsbury in the afternoon if time permits, or explore the shops and cafés around Knightsbridge. Evening: catch a West End show (book in advance) or dine in Soho.',
    },
    {
      day: 'Day 3: Tower of London, Tower Bridge & Shoreditch',
      description:
        'Start early at the Tower of London to see the Crown Jewels and learn the site\'s history. Walk across Tower Bridge and explore the riverside near London Bridge. Have lunch at Borough Market for an excellent selection of street food. In the afternoon, head to Shoreditch to see street art, independent shops, and vibrant bars. Optional: visit the Sky Garden or The Shard for panoramic city views (prebook required).',
    },
    {
      day: 'Day 4: Markets, Greenwich or Windsor & Departure',
      description:
        'Choose between a relaxed final day in London or a short excursion: Option A — Explore Camden Market then stroll Regent\'s Canal toward Little Venice; Option B — Take the DLR to Greenwich to visit the Cutty Sark, Royal Observatory (Prime Meridian), and Greenwich Market; Option C — Day trip to Windsor to visit Windsor Castle (short train ride). Finish with final shopping or a leisurely pub lunch before departing.',
    },
  ];

  return (
    <TripTemplate
      title="London — 4-Day City Essentials"
      location="Westminster, Southbank, Kensington, City of London, Shoreditch"
      days="4 Days"
      bestTime="May-June or September"
      bannerImage="https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba?w=1200&h=400&fit=crop"
      summary="Experience London\'s best in four days: historic landmarks, world-class museums, bustling markets, and modern neighborhoods. This compact itinerary balances iconic sights with local flavors and leaves room for optional excursions to Greenwich or Windsor. Perfect for first-time visitors who want a curated, walkable taste of the city."
      itinerary={itinerary}
      tips={tips}
    />
  );
}
