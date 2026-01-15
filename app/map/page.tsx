'use client';

import dynamic from 'next/dynamic';

const Map = dynamic(() => import('@/app/components/Map'), {
  ssr: false,
  loading: () => <div className="h-[500px] w-full bg-stone-100 animate-pulse rounded-12 mt-20" />
});

export default function MapPage() {
  return (
    <main className="content-wrapper">
      <h1>Trip Map</h1>
      <p>All the important (and chaotic) spots from our adventures.</p>
      <Map />
    </main>
  );
}
