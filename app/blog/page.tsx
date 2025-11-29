'use client';

import Link from 'next/link';

export default function BlogPage() {
  const articles = [
    {
      id: 'greek-architecture',
      title: 'Greek Architecture and Sculpture',
      description: 'A historical exploration of Greek sculptural development and architectural evolution from the Geometric period through the Hellenistic age.',
      date: '2024',
      category: 'History & Culture',
      readTime: '5 min read',
    },
    {
      id: 'coming-soon-1',
      title: 'Japan Trip: Cherry Blossoms and Ancient Temples',
      description: 'Explore the magic of spring in Japan, visiting ancient temples, gardens, and experiencing traditional culture.',
      date: 'Coming soon',
      category: 'Travel Guides',
      readTime: '8 min read',
      disabled: true,
    },
    {
      id: 'coming-soon-2',
      title: 'Sydney 6-Day Itinerary',
      description: 'Discover the vibrant culture, beaches, and landmarks of Australia\'s most iconic city.',
      date: 'Coming soon',
      category: 'Itineraries',
      readTime: '6 min read',
      disabled: true,
    },
    {
      id: 'coming-soon-3',
      title: 'Europe Honeymoon Highlights',
      description: 'Romantic destinations, charming villages, and unforgettable moments across the European continent.',
      date: 'Coming soon',
      category: 'Travel Stories',
      readTime: '10 min read',
      disabled: true,
    },
  ];

  return (
    <main className="content-wrapper">
      <section style={{ marginBottom: '40px' }}>
        <h1 style={{ fontSize: '2.5em', fontWeight: 'bold', marginBottom: '10px' }}>Blog</h1>
        <p style={{ color: '#666', fontSize: '1.1em', lineHeight: '1.6' }}>
          Travel stories, itineraries, tips, and personal notes from my adventures around the world. Explore articles about the places I've visited and the cultures I've discovered.
        </p>
      </section>

      {/* Articles Grid */}
      <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '25px', marginBottom: '40px' }}>
        {articles.map((article) => (
          <div
            key={article.id}
            style={{
              padding: '25px',
              border: '1px solid #e4e4e4',
              borderRadius: '12px',
              background: article.disabled ? '#fafafa' : '#fff',
              transition: article.disabled ? 'none' : 'all 0.3s ease',
              opacity: article.disabled ? 0.7 : 1,
              cursor: article.disabled ? 'default' : 'pointer',
            }}
            onMouseEnter={(e) => {
              if (!article.disabled) {
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
                e.currentTarget.style.borderColor = '#3b82f6';
              }
            }}
            onMouseLeave={(e) => {
              if (!article.disabled) {
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.borderColor = '#e4e4e4';
              }
            }}
          >
            {/* Category Badge */}
            <div style={{ marginBottom: '10px' }}>
              <span
                style={{
                  display: 'inline-block',
                  background: '#e0f2fe',
                  color: '#0369a1',
                  padding: '4px 12px',
                  borderRadius: '20px',
                  fontSize: '0.85em',
                  fontWeight: '500',
                }}
              >
                {article.category}
              </span>
            </div>

            {/* Title */}
            <h2 style={{ fontSize: '1.3em', fontWeight: '600', marginBottom: '10px', color: '#1f2937' }}>
              {article.title}
            </h2>

            {/* Description */}
            <p style={{ color: '#666', lineHeight: '1.6', marginBottom: '15px', minHeight: '60px' }}>
              {article.description}
            </p>

            {/* Meta Info */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: '#999', fontSize: '0.9em', marginBottom: '15px' }}>
              <span>{article.date}</span>
              <span>{article.readTime}</span>
            </div>

            {/* Link / Button */}
            {article.disabled ? (
              <div
                style={{
                  padding: '10px 15px',
                  background: '#e4e4e4',
                  color: '#999',
                  borderRadius: '6px',
                  textAlign: 'center',
                  fontWeight: '500',
                }}
              >
                Coming Soon
              </div>
            ) : (
              <Link
                href={`/blog/${article.id}`}
                style={{
                  display: 'inline-block',
                  padding: '10px 15px',
                  background: '#3b82f6',
                  color: 'white',
                  borderRadius: '6px',
                  textDecoration: 'none',
                  fontWeight: '500',
                  transition: 'background 0.2s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = '#2563eb')}
                onMouseLeave={(e) => (e.currentTarget.style.background = '#3b82f6')}
              >
                Read Article →
              </Link>
            )}
          </div>
        ))}
      </section>

      {/* Call to Action */}
      <section style={{ textAlign: 'center', background: '#f0f9ff', padding: '40px', borderRadius: '12px' }}>
        <h2 style={{ fontSize: '1.5em', fontWeight: 'bold', marginBottom: '15px' }}>More Articles Coming Soon!</h2>
        <p style={{ color: '#666', marginBottom: '20px' }}>
          I'm constantly adding new articles about travel, culture, history, and personal experiences. Check back soon for more stories from my adventures.
        </p>
        <Link href="/history" style={{ color: '#3b82f6', fontWeight: '500' }}>
          Or explore the History section for in-depth country overviews →
        </Link>
      </section>
    </main>
  );
}
