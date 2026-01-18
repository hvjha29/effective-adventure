'use client';

import Link from 'next/link';
import dynamic from 'next/dynamic';
import { useState } from 'react';
import type { LatLngExpression } from "leaflet";

const Map = dynamic(() => import('@/app/components/Map'), {
  ssr: false,
  loading: () => <div className="h-[300px] w-full bg-stone-100 animate-pulse rounded-12" />
});

export default function TripTemplate({
  title,
  location,
  days,
  bestTime,
  bannerImage,
  summary,
  itinerary,
  tips,
  mapCenter,
  mapMarkers,
  mapZoom = 12,
}: {
  title: string;
  location: string;
  days: string;
  bestTime: string;
  bannerImage: string;
  summary: string;
  itinerary: { day: string; description: string; mapRef?: number }[];
  tips: string[];
  mapCenter?: LatLngExpression;
  mapMarkers?: { pos: LatLngExpression; label: string }[];
  mapZoom?: number;
}) {
  const [activeMarker, setActiveMarker] = useState<number | null>(null);

  const handleItineraryClick = (index?: number) => {
    if (index !== undefined) {
      setActiveMarker(index);
    }
  };

  return (
    <main className="min-h-screen bg-background-light dark:bg-background-dark py-24 px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        {/* Breadcrumbs */}
        <nav className="mb-12 flex items-center space-x-2 text-sm font-medium">
          <Link href="/" className="text-stone-500 hover:text-primary transition-colors">Home</Link>
          <span className="text-stone-400">/</span>
          <Link href="/#itineraries" className="text-stone-500 hover:text-primary transition-colors">Itineraries</Link>
          <span className="text-stone-400">/</span>
          <span className="text-primary">{title}</span>
        </nav>

        {/* Header Section */}
        <header className="mb-12">
          <span className="inline-block text-stone-500 font-medium tracking-widest uppercase text-sm mb-4">
            {location}
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-stone-900 dark:text-stone-50 mb-6 leading-tight">
            {title}
          </h1>

          <div className="flex flex-wrap gap-4 text-sm text-stone-600 dark:text-stone-300 font-medium">
            <div className="flex items-center bg-stone-100 dark:bg-stone-800 px-4 py-2 rounded-full">
              <span className="material-icons-outlined text-primary text-lg mr-2">calendar_today</span>
              {days}
            </div>
            <div className="flex items-center bg-stone-100 dark:bg-stone-800 px-4 py-2 rounded-full">
              <span className="material-icons-outlined text-primary text-lg mr-2">wb_sunny</span>
              Best Time: {bestTime}
            </div>
          </div>
        </header>

        {/* Banner Image */}
        <div className="relative aspect-[21/9] w-full overflow-hidden rounded-2xl mb-12 shadow-sm">
          <img
            src={bannerImage}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Summary */}
        <section className="mb-16">
          <h2 className="text-2xl font-display font-bold mb-4 text-stone-900 dark:text-stone-100">About this Trip</h2>
          <p className="text-xl text-stone-700 dark:text-stone-300 leading-relaxed font-serif">
            {summary}
          </p>
        </section>

        <hr className="border-stone-200 dark:border-stone-800 mb-8" />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Itinerary Column */}
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-display font-bold mb-8 text-stone-900 dark:text-stone-100 flex items-center">
              <span className="material-icons-outlined text-primary mr-3 text-3xl">map</span>
              Itinerary
            </h2>

            <div className="space-y-12 relative before:absolute before:inset-0 before:ml-6 before:w-0.5 before:-z-10 before:bg-stone-200 dark:before:bg-stone-800 before:h-full">
              {itinerary.map((item, index) => (
                <div
                  key={index}
                  className={`relative pl-12 transition-all ${item.mapRef !== undefined ? 'cursor-pointer group' : ''}`}
                  onClick={() => handleItineraryClick(item.mapRef)}
                >
                  <div className={`absolute left-0 top-1 w-12 h-12 flex items-center justify-center transition-transform ${item.mapRef !== undefined ? 'group-hover:scale-110' : ''}`}>
                    <div className={`w-4 h-4 rounded-full border-4 border-white dark:border-stone-900 shadow-sm transition-colors ${activeMarker === item.mapRef && item.mapRef !== undefined ? 'bg-primary scale-125' : 'bg-primary/60'}`}></div>
                  </div>

                  <div className={`bg-white dark:bg-stone-800/50 p-6 rounded-2xl border shadow-sm transition-all ${activeMarker === item.mapRef && item.mapRef !== undefined ? 'border-primary ring-1 ring-primary shadow-md' : 'border-stone-100 dark:border-stone-800 hover:shadow-md'}`}>
                    <h3 className="text-xl font-display font-semibold mb-3 text-stone-900 dark:text-stone-100 flex items-center justify-between">
                      {item.day}
                      {item.mapRef !== undefined && (
                        <span className="material-icons-outlined text-stone-400 text-sm opacity-0 group-hover:opacity-100 transition-opacity">place</span>
                      )}
                    </h3>
                    <p className="text-stone-600 dark:text-stone-400 leading-relaxed font-serif">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar: Map & Tips */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-8">

              {/* Map Widget */}
              {mapCenter && mapMarkers && (
                <div className="bg-white dark:bg-stone-800 p-4 rounded-3xl border border-stone-100 dark:border-stone-800 shadow-sm">
                  <h3 className="text-lg font-display font-bold mb-4 text-stone-900 dark:text-stone-100 flex items-center px-2">
                    <span className="material-icons-outlined text-primary mr-2">explore</span>
                    Interactive Map
                  </h3>
                  <Map center={mapCenter} markers={mapMarkers} zoom={mapZoom} selectedIndex={activeMarker} />
                </div>
              )}

              {/* Tips Widget */}
              <div className="bg-primary/5 dark:bg-primary/10 p-8 rounded-3xl border border-primary/10">
                <h3 className="text-xl font-display font-bold mb-6 text-stone-900 dark:text-stone-100 flex items-center">
                  <span className="material-icons-outlined text-primary mr-2">lightbulb</span>
                  Good to Know
                </h3>
                <ul className="space-y-4">
                  {tips.map((tip, index) => (
                    <li key={index} className="flex items-start">
                      <span className="material-icons-outlined text-primary text-sm mt-1 mr-3 flex-shrink-0">check_circle</span>
                      <span className="text-stone-700 dark:text-stone-300 text-sm leading-relaxed">{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA Widget */}
              <div className="bg-stone-900 dark:bg-stone-800 text-white p-8 rounded-3xl text-center">
                <h3 className="font-display font-bold text-xl mb-3">Ready to go?</h3>
                <p className="text-stone-400 text-sm mb-6">Save this itinerary for your future travels.</p>
                <button className="w-full py-3 bg-primary text-white font-bold rounded-full hover:bg-primary/90 transition-colors">
                  Save Itinerary
                </button>
              </div>

            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
