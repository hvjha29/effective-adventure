'use client';

import Link from 'next/link';

export default function GreeceHistory() {
  return (
    <main className="content-wrapper">
      <Link href="/history" style={{ color: '#3b82f6', marginBottom: '20px', display: 'inline-block' }}>
        ← Back to History
      </Link>

      <h1 style={{ marginBottom: '10px', fontSize: '2.5em', fontWeight: 'bold' }}>Greece — Cradle of Western Civilization</h1>
      <p style={{ color: '#666', fontSize: '1.1em', marginBottom: '30px' }}>
        From ancient philosophy to Byzantine empires and modern independence
      </p>

      {/* Ancient Greece */}
      <section style={{ marginBottom: '40px' }}>
        <h2 style={{ fontSize: '1.8em', fontWeight: 'bold', marginBottom: '15px', borderBottom: '2px solid #3b82f6', paddingBottom: '10px' }}>
          Ancient Greece (800–146 BCE)
        </h2>
        <p style={{ lineHeight: '1.8', color: '#333', marginBottom: '15px' }}>
          Ancient Greece gave the world philosophy (Socrates, Plato, Aristotle), democracy (Athens), and epic literature (Homer). The Classical Period (5th–4th centuries BCE) saw the construction of the Parthenon, the height of democracy under Pericles, and the philosophical schools that shaped Western thought.
        </p>
        <p style={{ lineHeight: '1.8', color: '#333', marginBottom: '15px' }}>
          The Greek city-states engaged in legendary conflicts — from the Persian Wars to the Peloponnesian War. Alexander the Great expanded Greek culture across Asia and Egypt, creating a Hellenistic world that lasted centuries.
        </p>
      </section>

      {/* Roman & Byzantine Era */}
      <section style={{ marginBottom: '40px' }}>
        <h2 style={{ fontSize: '1.8em', fontWeight: 'bold', marginBottom: '15px', borderBottom: '2px solid #3b82f6', paddingBottom: '10px' }}>
          Roman Conquest & Byzantine Era (146 BCE–1453 CE)
        </h2>
        <p style={{ lineHeight: '1.8', color: '#333', marginBottom: '15px' }}>
          Rome conquered Greece in 146 BCE, but Greek culture dominated Roman intellectual life. Greece remained a center of learning and religion. When the Roman Empire split, Greece became part of the Byzantine Empire — a continuation of Rome focused on Christianity and Orthodox theology.
        </p>
        <p style={{ lineHeight: '1.8', color: '#333', marginBottom: '15px' }}>
          Byzantine Greece flourished for over a thousand years, producing stunning churches, mosaics, and theological works. The city of Constantinople (modern Istanbul) was its capital.
        </p>
      </section>

      {/* Ottoman & Modern Era */}
      <section style={{ marginBottom: '40px' }}>
        <h2 style={{ fontSize: '1.8em', fontWeight: 'bold', marginBottom: '15px', borderBottom: '2px solid #3b82f6', paddingBottom: '10px' }}>
          Ottoman Rule & Independence (1453–1830)
        </h2>
        <p style={{ lineHeight: '1.8', color: '#333', marginBottom: '15px' }}>
          The Ottoman conquest of Constantinople in 1453 ended the Byzantine Empire. Greece remained under Ottoman rule for nearly 400 years, during which Greek Orthodox Christianity preserved cultural identity.
        </p>
        <p style={{ lineHeight: '1.8', color: '#333', marginBottom: '15px' }}>
          The Greek War of Independence (1821–1829) inspired by Enlightenment ideals and supported by European powers, led to freedom. Greece became a nation-state in 1829, beginning its journey as a modern European country.
        </p>
      </section>

      {/* Modern Era */}
      <section style={{ marginBottom: '40px' }}>
        <h2 style={{ fontSize: '1.8em', fontWeight: 'bold', marginBottom: '15px', borderBottom: '2px solid #3b82f6', paddingBottom: '10px' }}>
          Modern Greece (1830–Present)
        </h2>
        <p style={{ lineHeight: '1.8', color: '#333', marginBottom: '15px' }}>
          Greece expanded its territory through the Balkan Wars and wars with Turkey. It joined the European Union in 1981 and adopted the Euro in 2001, becoming a modern Western nation while preserving ancient traditions and Orthodox heritage.
        </p>
        <p style={{ lineHeight: '1.8', color: '#333', marginBottom: '15px' }}>
          Today, Greece celebrates its role in Western civilization — from the ancient philosophers of Athens to the Orthodox monasteries of the Meteora to the island cultures of Santorini and Crete.
        </p>
      </section>

      {/* Key Historical Sites */}
      <section style={{ marginBottom: '40px', background: '#fafafa', padding: '20px', borderRadius: '12px', border: '1px solid #e4e4e4' }}>
        <h2 style={{ fontSize: '1.8em', fontWeight: 'bold', marginBottom: '15px' }}>Key Historical Sites to Visit</h2>
        <ul style={{ lineHeight: '1.8', color: '#333', marginLeft: '20px' }}>
          <li><strong>The Parthenon (Athens)</strong> — Ancient Greek temple dedicated to Athena, symbol of Classical Athens</li>
          <li><strong>The Acropolis Museum (Athens)</strong> — Houses treasures from the Acropolis and ancient Greek civilization</li>
          <li><strong>Delphi</strong> — Ancient sanctuary and oracle, center of the ancient Greek world</li>
          <li><strong>Knossos (Crete)</strong> — Minoan palace, one of the oldest civilizations in Europe</li>
          <li><strong>Meteora Monasteries</strong> — Byzantine monasteries perched atop towering rock formations</li>
        </ul>
      </section>
    </main>
  );
}
