'use client';

import Link from 'next/link';

export default function LondonHistory() {
  return (
    <main className="content-wrapper">
      <Link href="/history" style={{ color: '#3b82f6', marginBottom: '20px', display: 'inline-block' }}>
        ← Back to History
      </Link>

      <h1 style={{ marginBottom: '10px', fontSize: '2.5em', fontWeight: 'bold' }}>London — From Roman Settlement to Global Metropolis</h1>
      <p style={{ color: '#666', fontSize: '1.1em', marginBottom: '30px' }}>
        Two millennia of empire, monarchy, and industrial revolution
      </p>

      {/* Roman & Medieval London */}
      <section style={{ marginBottom: '40px' }}>
        <h2 style={{ fontSize: '1.8em', fontWeight: 'bold', marginBottom: '15px', borderBottom: '2px solid #3b82f6', paddingBottom: '10px' }}>
          Roman & Medieval Londinium (43–1066 CE)
        </h2>
        <p style={{ lineHeight: '1.8', color: '#333', marginBottom: '15px' }}>
          The Romans founded Londinium around 50 CE on the Thames' north bank. It became a major trading port, and Roman walls (still visible today) protected the settlement. After Rome's withdrawal in 410 CE, London declined but remained significant during the Anglo-Saxon period.
        </p>
        <p style={{ lineHeight: '1.8', color: '#333', marginBottom: '15px' }}>
          The Norman Conquest in 1066 marked a turning point. William the Conqueror built the Tower of London, establishing it as a fortress and royal residence. Medieval London grew as a walled city with markets, guilds, and the emerging Westminster Abbey.
        </p>
      </section>

      {/* Tudor & Stuart Era */}
      <section style={{ marginBottom: '40px' }}>
        <h2 style={{ fontSize: '1.8em', fontWeight: 'bold', marginBottom: '15px', borderBottom: '2px solid #3b82f6', paddingBottom: '10px' }}>
          Tudor & Stuart Dynasties (1485–1714)
        </h2>
        <p style={{ lineHeight: '1.8', color: '#333', marginBottom: '15px' }}>
          Under Henry VIII, London became a center of religious reformation. Henry broke with Rome, established the Church of England, and made London the capital of a new English identity. The Elizabethan age (1558–1603) saw London flourish as the home of Shakespeare, exploration, and trade.
        </p>
        <p style={{ lineHeight: '1.8', color: '#333', marginBottom: '15px' }}>
          The Great Fire of 1666 destroyed much of medieval London, but architect Christopher Wren rebuilt it with grand designs. St. Paul's Cathedral and countless churches reflect this renaissance of urban planning and ambition.
        </p>
      </section>

      {/* British Empire & Industrial Era */}
      <section style={{ marginBottom: '40px' }}>
        <h2 style={{ fontSize: '1.8em', fontWeight: 'bold', marginBottom: '15px', borderBottom: '2px solid #3b82f6', paddingBottom: '10px' }}>
          British Empire & Industrial Power (1714–1900)
        </h2>
        <p style={{ lineHeight: '1.8', color: '#333', marginBottom: '15px' }}>
          London became the capital of the world's greatest empire. As Britain industrialized and expanded globally, London became a global financial and cultural hub. The Thames saw unprecedented shipping traffic, Westminster became the seat of world's most powerful parliament, and London's influence shaped colonial and international affairs.
        </p>
        <p style={{ lineHeight: '1.8', color: '#333', marginBottom: '15px' }}>
          The Victorian era (1837–1901) transformed London into a modern metropolis — railways, the Underground (first subway in the world, 1863), and grand public buildings. The Great Exhibition of 1851 showcased British industrial dominance and technological advancement.
        </p>
      </section>

      {/* 20th Century & Modern Era */}
      <section style={{ marginBottom: '40px' }}>
        <h2 style={{ fontSize: '1.8em', fontWeight: 'bold', marginBottom: '15px', borderBottom: '2px solid #3b82f6', paddingBottom: '10px' }}>
          20th Century & Modern London (1900–Present)
        </h2>
        <p style={{ lineHeight: '1.8', color: '#333', marginBottom: '15px' }}>
          London endured the Blitz during World War II (1940–1941), when German bombers devastated large sections. It rebuilt and remained a cultural and financial powerhouse. The post-war period saw immigration that transformed London into a multicultural city, especially from the Commonwealth.
        </p>
        <p style={{ lineHeight: '1.8', color: '#333', marginBottom: '15px' }}>
          Today, London is a global city of nearly 9 million people — a center of finance, art, science, and culture. It hosts the world's oldest parliament, iconic landmarks (Big Ben, Tower Bridge), and influences global politics and culture.
        </p>
      </section>

      {/* Key Historical Sites */}
      <section style={{ marginBottom: '40px', background: '#fafafa', padding: '20px', borderRadius: '12px', border: '1px solid #e4e4e4' }}>
        <h2 style={{ fontSize: '1.8em', fontWeight: 'bold', marginBottom: '15px' }}>Key Historical Sites to Visit</h2>
        <ul style={{ lineHeight: '1.8', color: '#333', marginLeft: '20px' }}>
          <li><strong>Tower of London</strong> — Royal fortress, Crown Jewels, and 1000 years of history</li>
          <li><strong>Westminster Abbey</strong> — Royal church, coronation site, and burial place of monarchs and notable figures</li>
          <li><strong>Houses of Parliament</strong> — Home of world's oldest continuous parliament since 1265</li>
          <li><strong>St. Paul's Cathedral</strong> — Christopher Wren's masterpiece, symbol of London resilience</li>
          <li><strong>British Museum</strong> — Vast collection of world artifacts and human history</li>
        </ul>
      </section>
    </main>
  );
}
