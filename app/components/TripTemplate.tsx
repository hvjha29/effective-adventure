'use client';

import Link from 'next/link';

export default function TripTemplate({
  title,
  location,
  days,
  bestTime,
  bannerImage,
  summary,
  itinerary,
  tips,
}: {
  title: string;
  location: string;
  days: string;
  bestTime: string;
  bannerImage: string;
  summary: string;
  itinerary: { day: string; description: string }[];
  tips: string[];
}) {
  return (
    <main className="min-h-screen bg-background-light dark:bg-background-dark py-24 px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        {/* Navigation */}
        <div className="mb-12">
          <Link
            href="/#itineraries"
            className="inline-flex items-center text-primary font-medium hover:opacity-80 transition-opacity"
          >
            <span className="material-icons-outlined text-lg mr-2">arrow_back</span>
            Back to Itineraries
          </Link>
        </div>

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

        <hr className="border-stone-200 dark:border-stone-800 mb-16" />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Itinerary Column */}
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-display font-bold mb-8 text-stone-900 dark:text-stone-100 flex items-center">
              <span className="material-icons-outlined text-primary mr-3 text-3xl">map</span>
              Itinerary
            </h2>

            <div className="space-y-12 relative before:absolute before:inset-0 before:ml-6 before:w-0.5 before:-z-10 before:bg-stone-200 dark:before:bg-stone-800 before:h-full">
              {itinerary.map((item, index) => (
                <div key={index} className="relative pl-12">
                  <div className="absolute left-0 top-1 w-12 h-12 flex items-center justify-center">
                    <div className="w-4 h-4 rounded-full bg-primary border-4 border-white dark:border-stone-900 shadow-sm"></div>
                  </div>

                  <div className="bg-white dark:bg-stone-800/50 p-6 rounded-2xl border border-stone-100 dark:border-stone-800 shadow-sm hover:shadow-md transition-shadow">
                    <h3 className="text-xl font-display font-semibold mb-3 text-stone-900 dark:text-stone-100">{item.day}</h3>
                    <p className="text-stone-600 dark:text-stone-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar: Tips & Essentials */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-8">

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

              {/* CTA Widget (Placeholder) */}
              <div className="bg-stone-900 dark:bg-stone-800 text-white p-8 rounded-3xl text-center">
                <h3 className="font-display font-bold text-xl mb-3">Ready to go?</h3>
                <p className="text-stone-400 text-sm mb-6">Save this itinerary for your future travels.</p>
                <button className="w-full py-3 bg-white text-stone-900 font-bold rounded-full hover:bg-stone-100 transition-colors">
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
