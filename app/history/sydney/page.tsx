'use client';

import Link from 'next/link';

export default function SydneyHistory() {
  return (
    <main className="content-wrapper">
      <Link href="/history" style={{ color: '#3b82f6', marginBottom: '20px', display: 'inline-block' }}>
        ← Back to History
      </Link>

      <h1 style={{ marginBottom: '10px', fontSize: '2.5em', fontWeight: 'bold' }}>Sydney — From Aboriginal Lands to Global Icon</h1>
      <p style={{ color: '#666', fontSize: '1.1em', marginBottom: '30px' }}>
        60,000 years of Indigenous culture and 250 years of European settlement
      </p>

      {/* Indigenous Era */}
      <section style={{ marginBottom: '40px' }}>
        <h2 style={{ fontSize: '1.8em', fontWeight: 'bold', marginBottom: '15px', borderBottom: '2px solid #3b82f6', paddingBottom: '10px' }}>
          Indigenous Sydney (60,000+ years BCE)
        </h2>
        <p style={{ lineHeight: '1.8', color: '#333', marginBottom: '15px' }}>
          The area around Sydney was home to the Eora people and related Aboriginal nations for at least 60,000 years before European contact. They developed deep spiritual and cultural connections to the land, the harbor (Port Jackson), and the surrounding landscape. Aboriginal culture included sophisticated trade networks, artistic traditions, and intimate knowledge of the environment.
        </p>
        <p style={{ lineHeight: '1.8', color: '#333', marginBottom: '15px' }}>
          The arrival of Europeans in 1788 marked a traumatic turning point. Disease, violence, and dispossession decimated Aboriginal populations. For centuries, Indigenous contributions were marginalized, though cultural revival and recognition efforts are now underway.
        </p>
      </section>

      {/* Colonial Era */}
      <section style={{ marginBottom: '40px' }}>
        <h2 style={{ fontSize: '1.8em', fontWeight: 'bold', marginBottom: '15px', borderBottom: '2px solid #3b82f6', paddingBottom: '10px' }}>
          Colonial Settlement & Growth (1788–1900)
        </h2>
        <p style={{ lineHeight: '1.8', color: '#333', marginBottom: '15px' }}>
          Captain James Cook explored the east coast in 1770, and in 1788, the First Fleet arrived with convicts, soldiers, and officials. Port Jackson became a penal colony under Governor Arthur Phillip. Sydney served as the administrative center of British colonial Australia and rapidly expanded as a port and trading hub.
        </p>
        <p style={{ lineHeight: '1.8', color: '#333', marginBottom: '15px' }}>
          The transition from penal colony to free settlement occurred gradually. Gold discoveries inland (1851) sparked immigration and development. By the late 1800s, Sydney was a thriving city with architecture, commerce, and culture rivaling European cities. The construction of the Sydney Harbour Bridge and Opera House later symbolized the city's modernity.
        </p>
      </section>

      {/* Federation & 20th Century */}
      <section style={{ marginBottom: '40px' }}>
        <h2 style={{ fontSize: '1.8em', fontWeight: 'bold', marginBottom: '15px', borderBottom: '2px solid #3b82f6', paddingBottom: '10px' }}>
          Federation & Modern Era (1901–Present)
        </h2>
        <p style={{ lineHeight: '1.8', color: '#333', marginBottom: '15px' }}>
          Australia federated in 1901, and Sydney became the capital of New South Wales. The city participated in both World Wars and experienced immigration waves that diversified its population, especially after WWII with migrants from southern Europe and Asia.
        </p>
        <p style={{ lineHeight: '1.8', color: '#333', marginBottom: '15px' }}>
          The Harbour Bridge (opened 1932) and Opera House (opened 1973) transformed Sydney's skyline and identity. The 2000 Olympics cemented Sydney's status as a global city. Today, Sydney is Australia's largest city, a major financial and cultural center, and home to one of the world's most recognizable harbors.
        </p>
      </section>

      {/* Key Historical Sites */}
      <section style={{ marginBottom: '40px', background: '#fafafa', padding: '20px', borderRadius: '12px', border: '1px solid #e4e4e4' }}>
        <h2 style={{ fontSize: '1.8em', fontWeight: 'bold', marginBottom: '15px' }}>Key Historical Sites to Visit</h2>
        <ul style={{ lineHeight: '1.8', color: '#333', marginLeft: '20px' }}>
          <li><strong>Sydney Opera House</strong> — Iconic building and UNESCO World Heritage site, symbol of modern Australia</li>
          <li><strong>Sydney Harbour Bridge</strong> — Engineering marvel (1932), connecting Sydney's north and south</li>
          <li><strong>The Rocks</strong> — Historic neighborhood with cobblestone streets and colonial architecture</li>
          <li><strong>Fort Denison</strong> — Historic fortification in the harbor, convict site turned cultural venue</li>
          <li><strong>Australian National Maritime Museum</strong> — Chronicles Australia's maritime history and Aboriginal sea voyages</li>
        </ul>
      </section>
    </main>
  );
}
