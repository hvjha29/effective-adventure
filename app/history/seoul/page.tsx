'use client';

import Link from 'next/link';

export default function SeoulHistory() {
  return (
    <main className="content-wrapper">
      <Link href="/history" style={{ color: '#3b82f6', marginBottom: '20px', display: 'inline-block' }}>
        ← Back to History
      </Link>

      <h1 style={{ marginBottom: '10px', fontSize: '2.5em', fontWeight: 'bold' }}>Seoul & Korea — Ancient Kingdoms to K-pop</h1>
      <p style={{ color: '#666', fontSize: '1.1em', marginBottom: '30px' }}>
        From Three Kingdoms and Dynasties to rapid modern transformation
      </p>

      {/* Ancient & Medieval Period */}
      <section style={{ marginBottom: '40px' }}>
        <h2 style={{ fontSize: '1.8em', fontWeight: 'bold', marginBottom: '15px', borderBottom: '2px solid #3b82f6', paddingBottom: '10px' }}>
          Three Kingdoms & Dynasties (57 BCE–1910)
        </h2>
        <p style={{ lineHeight: '1.8', color: '#333', marginBottom: '15px' }}>
          Korea's history spans three ancient kingdoms — Goguryeo, Baekje, and Silla — each developing distinct cultures and systems. The Unified Silla period (668–935) established Buddhist culture that shaped Korea for centuries. Temples and stone temples like Bulguksa still stand as testament to this era.
        </p>
        <p style={{ lineHeight: '1.8', color: '#333', marginBottom: '15px' }}>
          The Goryeo Dynasty (918–1392) gave Korea its name and saw a golden age of arts and technologies. The Joseon Dynasty (1392–1910) lasted 518 years, making it one of history's longest dynasties. It established Confucian governance, developed Hangul (the Korean alphabet in 1443), and saw the rise of Seoul as the capital.
        </p>
      </section>

      {/* Japanese Occupation & Division */}
      <section style={{ marginBottom: '40px' }}>
        <h2 style={{ fontSize: '1.8em', fontWeight: 'bold', marginBottom: '15px', borderBottom: '2px solid #3b82f6', paddingBottom: '10px' }}>
          Japanese Occupation & Partition (1910–1945)
        </h2>
        <p style={{ lineHeight: '1.8', color: '#333', marginBottom: '15px' }}>
          Japan annexed Korea in 1910, ending the Joseon Dynasty. The 35-year occupation suppressed Korean culture, language, and independence movements. Resistance continued throughout, inspiring nationalist movements. World War II's end in 1945 freed Korea but began a division that would shape the modern era.
        </p>
      </section>

      {/* Cold War & Rapid Development */}
      <section style={{ marginBottom: '40px' }}>
        <h2 style={{ fontSize: '1.8em', fontWeight: 'bold', marginBottom: '15px', borderBottom: '2px solid #3b82f6', paddingBottom: '10px' }}>
          Division, War & Modernization (1945–Present)
        </h2>
        <p style={{ lineHeight: '1.8', color: '#333', marginBottom: '15px' }}>
          The Korean War (1950–1953) devastated the peninsula and cemented the division into North and South Korea. Seoul was largely destroyed but rebuilt. South Korea, under Park Chung-hee (1961–1979), underwent rapid industrialization — transforming from agricultural economy to manufacturing powerhouse in just decades.
        </p>
        <p style={{ lineHeight: '1.8', color: '#333', marginBottom: '15px' }}>
          The transition to democracy (1987) followed decades of authoritarian rule. Seoul hosted the 1988 Olympics, marking its arrival as a global city. Today, South Korea is a technological leader (Samsung, LG, Hyundai), cultural exporter (K-pop, K-dramas), and modern democracy. Seoul is one of the world's most developed and connected cities.
        </p>
      </section>

      {/* Key Historical Sites */}
      <section style={{ marginBottom: '40px', background: '#fafafa', padding: '20px', borderRadius: '12px', border: '1px solid #e4e4e4' }}>
        <h2 style={{ fontSize: '1.8em', fontWeight: 'bold', marginBottom: '15px' }}>Key Historical Sites to Visit</h2>
        <ul style={{ lineHeight: '1.8', color: '#333', marginLeft: '20px' }}>
          <li><strong>Gyeongbokgung Palace (Seoul)</strong> — Principal royal palace of Joseon Dynasty</li>
          <li><strong>Bulguksa Temple (Gyeongju)</strong> — 8th-century Buddhist temple, Silla capital's masterpiece</li>
          <li><strong>Seokguram Grotto (Gyeongju)</strong> — Artificial grotto with famous Buddha statue from Silla era</li>
          <li><strong>Korean War Memorial (Seoul)</strong> — Comprehensive museum documenting the partition and war</li>
          <li><strong>Demilitarized Zone (DMZ)</strong> — Border between North and South Korea, remnant of Cold War</li>
        </ul>
      </section>
    </main>
  );
}
