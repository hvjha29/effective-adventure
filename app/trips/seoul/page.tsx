'use client';

import TripTemplate from '@/app/components/TripTemplate';

export default function SeoulTrip() {
  const tips = [
    'T-money card: get one for seamless travel on subways, buses, and some taxis',
    'Best Time to Visit: Spring (April–May) for cherry blossoms or Autumn (Sept–Oct) for fall colors',
    'Connectivity: Rent a pocket Wi‑Fi or local SIM for maps and translation',
    'Cash vs Card: Cards are widely accepted, but small markets and some temples prefer cash',
    'Footwear: Comfortable walking shoes—many streets and palace grounds involve long walking',
    'Etiquette: Bow lightly for greetings; remove shoes when entering some traditional sites',
    'Food: Try local specialties—bibimbap, Korean BBQ, tteokbokki, and street food at markets',
    'Timing: Start early for popular palaces and Bulguksa in Gyeongju to avoid crowds',
  ];

  const itinerary = [
    {
      day: 'Day 1: Seoul — Historic Core & Insadong',
      description:
        'Arrive in Seoul and check into your accommodation. Begin at Gyeongbokgung Palace for the changing of the guard (arrive early). Walk through the palace grounds and visit the National Folk Museum. Stroll to Bukchon Hanok Village for traditional hanok houses and great photo spots. Head to Insadong for tea houses, artisan shops, and antique stores. Evening: explore nearby Jongno or try a Korean BBQ dinner in the area.',
    },
    {
      day: 'Day 2: Modern Seoul — Gangnam, K-pop & Night Views',
      description:
        'Spend the morning in the trendy Gangnam district: COEX Mall and Starfield Library are highlights. Visit Bongeunsa Temple across the street for a calm contrast. Afternoon: explore Garosugil in Sinsa for boutiques and cafés, or visit the Samsung d’light experience. Evening: head to N Seoul Tower on Namsan for panoramic city views and the sunset. Optional: catch a K-pop / musical performance or immerse in Hongdae nightlife.',
    },
    {
      day: 'Day 3: Day trip to Gyeongju — Silla Capital Highlights',
      description:
        'Take an early KTX or express train to Gyeongju (approx 2–2.5 hours). Start at Bulguksa Temple (UNESCO World Heritage) and walk the serene grounds. Visit Seokguram Grotto for its famous Buddha statue (check access/timing). Explore Tumuli Park (Daereungwon) to see ancient royal tombs, then walk through Anapji Pond (Donggung Palace site) at sunset for beautiful reflections. Evening: return to Seoul by train or stay overnight in Gyeongju if you prefer a slower pace.',
    },
    {
      day: 'Day 4: Markets, Museums & Departure',
      description:
        'Morning options: Visit the War Memorial of Korea or the National Museum of Korea for deep cultural context. Alternatively, wander through Namdaemun or Dongdaemun markets for souvenirs and street food. If time permits, explore Ihwa Mural Village or the Cheonggyecheon Stream for a relaxed stroll. Final lunch at Gwangjang Market to savor bindaetteok (mung bean pancake) and other classics. Head to the airport or next destination with plenty of memories and local flavors.',
    },
  ];

  return (
    <TripTemplate
      title="Seoul & Gyeongju — 4-Day Essentials"
      location="Seoul & Gyeongju"
      days="4 Days"
      bestTime="April–May (cherry blossoms) or Sept–Oct (autumn colors)"
      bannerImage="https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=1200&h=400&fit=crop"
      summary="Experience South Korea’s dynamic capital and the ancient Silla capital over four days. Blend Seoul’s palaces, modern neighborhoods, and vibrant markets with a focused day trip to Gyeongju’s UNESCO sites. This itinerary balances cultural depth, scenic history, and approachable modern comforts for first-time and repeat visitors alike."
      itinerary={itinerary}
      tips={tips}
    />
  );
}
