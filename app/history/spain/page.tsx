'use client';

import Link from 'next/link';

export default function SpainHistory() {
  return (
    <main className="content-wrapper">
      <Link href="/history" style={{ color: '#3b82f6', marginBottom: '20px', display: 'inline-block' }}>
        ← Back to History
      </Link>

      <h1 style={{ marginBottom: '10px', fontSize: '2.5em', fontWeight: 'bold' }}>Spain — A Tapestry of Empires</h1>
      <p style={{ color: '#666', fontSize: '1.1em', marginBottom: '30px' }}>
        From Iberian tribes to Moorish Al-Andalus, from Catholic kingdoms to a modern republic
      </p>

      {/* Pre-Islamic Era */}
      <section style={{ marginBottom: '40px' }}>
        <h2 style={{ fontSize: '1.8em', fontWeight: 'bold', marginBottom: '15px', borderBottom: '2px solid #3b82f6', paddingBottom: '10px' }}>
          Pre-Islamic Era (1000 BCE – 711 CE)
        </h2>
        <p style={{ lineHeight: '1.8', color: '#333', marginBottom: '15px' }}>
          The Iberian Peninsula was inhabited by Lusitanians, Celtiberians, and Turdetani tribes. The Phoenicians and Greeks established coastal settlements, while the Carthaginians expanded their influence. Eventually, Rome conquered the peninsula in the 2nd century BCE, introducing Latin and transforming the region into Hispania — one of Rome's wealthiest provinces.
        </p>
      </section>

      {/* Al-Andalus Period */}
      <section style={{ marginBottom: '40px' }}>
        <h2 style={{ fontSize: '1.8em', fontWeight: 'bold', marginBottom: '15px', borderBottom: '2px solid #3b82f6', paddingBottom: '10px' }}>
          The Moorish Period: Al-Andalus (711–1492)
        </h2>
        <p style={{ lineHeight: '1.8', color: '#333', marginBottom: '15px' }}>
          In 711 CE, Umayyad Caliphate forces crossed from North Africa and rapidly conquered most of the peninsula. Al-Andalus became a center of learning, art, and architecture. The Great Mosque of Córdoba, the Alhambra in Granada, and advances in mathematics and astronomy flourished during this period.
        </p>
        <p style={{ lineHeight: '1.8', color: '#333', marginBottom: '15px' }}>
          The Reconquista — the Christian reconquest — lasted nearly 800 years, with Christian kingdoms gradually pushing southward. This cultural fusion created Spain's unique identity, blending Islamic, Christian, and Jewish traditions.
        </p>
      </section>

      {/* Catholic Monarchy */}
      <section style={{ marginBottom: '40px' }}>
        <h2 style={{ fontSize: '1.8em', fontWeight: 'bold', marginBottom: '15px', borderBottom: '2px solid #3b82f6', paddingBottom: '10px' }}>
          The Catholic Monarchy & Empire (1492–1700)
        </h2>
        <p style={{ lineHeight: '1.8', color: '#333', marginBottom: '15px' }}>
          In 1492, the Granada fell to Catholic monarchs Ferdinand and Isabella, completing the Reconquista. That same year, Columbus sailed west under Spanish patronage, beginning Spain's global empire. Spain became the dominant European power, controlling vast territories in the Americas, Asia, and beyond.
        </p>
        <p style={{ lineHeight: '1.8', color: '#333', marginBottom: '15px' }}>
          The Spanish Inquisition (1478–1834), while brutal, was instrumental in creating religious uniformity. Spain's wealth from colonial gold funded magnificent art, literature, and architecture during the Golden Age — the era of Cervantes, Velázquez, and El Greco.
        </p>
      </section>

      {/* Decline & Modernity */}
      <section style={{ marginBottom: '40px' }}>
        <h2 style={{ fontSize: '1.8em', fontWeight: 'bold', marginBottom: '15px', borderBottom: '2px solid #3b82f6', paddingBottom: '10px' }}>
          Decline, Conflict & Modern Era (1700–Present)
        </h2>
        <p style={{ lineHeight: '1.8', color: '#333', marginBottom: '15px' }}>
          Spain's power waned in the 18th and 19th centuries, losing colonies and facing internal strife. The Spanish Civil War (1936–1939) was devastating, ending in Franco's dictatorship. The transition to democracy in the 1970s marked a turning point, leading to modernization and European integration.
        </p>
        <p style={{ lineHeight: '1.8', color: '#333', marginBottom: '15px' }}>
          Today, Spain is a vibrant European nation, celebrating its Moorish heritage, Catholic traditions, and innovative modern culture — all visible in its architecture, cuisine, and festivals.
        </p>
      </section>

      {/* Key Historical Sites */}
      <section style={{ marginBottom: '40px', background: '#fafafa', padding: '20px', borderRadius: '12px', border: '1px solid #e4e4e4' }}>
        <h2 style={{ fontSize: '1.8em', fontWeight: 'bold', marginBottom: '15px' }}>Key Historical Sites to Visit</h2>
        <ul style={{ lineHeight: '1.8', color: '#333', marginLeft: '20px' }}>
          <li><strong>Alhambra (Granada)</strong> — Moorish fortress-palace, a masterpiece of Islamic architecture</li>
          <li><strong>Sagrada Família (Barcelona)</strong> — Gaudí's ongoing modernist cathedral, begun in 1883</li>
          <li><strong>Royal Palace (Madrid)</strong> — One of Europe's largest palaces, seat of Spanish royalty</li>
          <li><strong>Cathedral of Seville</strong> — Built on the site of a former mosque, blending Islamic and Christian heritage</li>
          <li><strong>Alcázar (Seville)</strong> — Royal palace showcasing Mudéjar architecture</li>
        </ul>
      </section>
    </main>
  );
}
