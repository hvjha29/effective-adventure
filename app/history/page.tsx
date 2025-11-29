'use client';

import Link from 'next/link';

export default function HistoryPage() {
  const destinations = [
    {
      name: 'Spain',
      slug: 'spain',
      description: 'From Roman Hispania to flamenco and tapas culture — discover Spain\'s rich medieval, Moorish, and modern heritage.',
    },
    {
      name: 'Greece',
      slug: 'greece',
      description: 'Ancient civilizations, legendary myths, and the cradle of Western philosophy — explore Greece\'s timeless history.',
    },
    {
      name: 'Scotland',
      slug: 'scotland',
      description: 'Clans, castles, and Highland legends — uncover Scotland\'s turbulent and captivating past.',
    },
    {
      name: 'London',
      slug: 'london',
      description: 'From Roman settlement to global empire — London\'s history shaped the modern world.',
    },
    {
      name: 'Seoul',
      slug: 'seoul',
      description: 'Ancient kingdoms to modern metropolis — witness Korea\'s transformation across centuries.',
    },
    {
      name: 'Sydney',
      slug: 'sydney',
      description: 'Indigenous roots to colonial frontier — Sydney\'s story is one of discovery and reinvention.',
    },
    {
      name: 'Europe (Swiss Alps)',
      slug: 'europe',
      description: 'Alpine kingdoms and centuries of Alpine culture — explore the history of Europe\'s mountain heartland.',
    },
    {
      name: 'Istanbul',
      slug: 'istanbul',
      description: 'Three empires, two continents — Istanbul\'s unique position shaped Eastern and Western history.',
    },
  ];

  return (
    <main className="content-wrapper">
      {/* Header Section */}
      <section style={{ marginBottom: '40px' }}>
        <h1 style={{ marginBottom: '10px', fontSize: '2.5em', fontWeight: 'bold' }}>History</h1>
        <p style={{ color: '#666', fontSize: '1.1em', lineHeight: '1.6' }}>
          Explore the fascinating histories of the places we've visited. Each destination has its own unique story spanning centuries of culture, civilization, and transformation. Click on any destination below to discover the historical facts and events that shaped these remarkable regions.
        </p>
      </section>

      {/* Destinations Grid */}
      <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px', marginBottom: '40px' }}>
        {destinations.map((dest) => (
          <Link
            key={dest.slug}
            href={`/history/${dest.slug}`}
            style={{
              textDecoration: 'none',
              color: 'inherit',
            }}
          >
            <div
              style={{
                padding: '20px',
                border: '1px solid #e4e4e4',
                borderRadius: '12px',
                background: '#fafafa',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                height: '100%',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
                e.currentTarget.style.borderColor = '#3b82f6';
                e.currentTarget.style.background = '#f0f9ff';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.borderColor = '#e4e4e4';
                e.currentTarget.style.background = '#fafafa';
              }}
            >
              <h2 style={{ marginBottom: '10px', fontSize: '1.5em', color: '#1f2937' }}>{dest.name}</h2>
              <p style={{ color: '#666', lineHeight: '1.6' }}>{dest.description}</p>
              <p style={{ marginTop: '15px', color: '#3b82f6', fontWeight: '500' }}>Learn more →</p>
            </div>
          </Link>
        ))}
      </section>

      {/* Footer Note */}
      <section style={{ textAlign: 'center', color: '#999', marginTop: '40px' }}>
        <p>Each destination tells a unique story. Explore the history and culture that made these places remarkable.</p>
      </section>
    </main>
  );
}
