import Link from "next/link";

export default function TripsPage() {
  return (
    <main className="content-wrapper">
      <h1>Trips</h1>
      <p>Explore my travel adventures. Click on a trip to view details, itineraries, tips, and photos.</p>

      <ul>
        <li>
          <Link href="/trips/sydney">Sydney – 4 Day Itinerary</Link>
          <li><Link href="/trips/spain">Spain – 10 Days</Link></li>
          <li><Link href="/trips/europe">Europe Family Trip</Link></li>
          <li><Link href="/trips/london">London – 4 Day City Essentials</Link></li>
          <li><Link href="/trips/seoul">Seoul & Gyeongju – 4 Day Essentials</Link></li>
          <li><Link href="/trips/istanbul">Istanbul</Link></li>
        </li>
      </ul>
    </main>
  );
}
