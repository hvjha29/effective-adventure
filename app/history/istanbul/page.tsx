'use client';

import Link from 'next/link';

export default function IstanbulHistory() {
  return (
    <main className="content-wrapper">
      <Link href="/history" style={{ color: '#3b82f6', marginBottom: '20px', display: 'inline-block' }}>
        ← Back to History
      </Link>

      <h1 style={{ marginBottom: '10px', fontSize: '2.5em', fontWeight: 'bold' }}>Istanbul — Where Three Empires Met</h1>
      <p style={{ color: '#666', fontSize: '1.1em', marginBottom: '30px' }}>
        Byzantium, Constantinople, Istanbul — 2,600 years spanning Greek, Roman, Byzantine, and Ottoman civilizations
      </p>

      {/* Ancient & Roman Period */}
      <section style={{ marginBottom: '40px' }}>
        <h2 style={{ fontSize: '1.8em', fontWeight: 'bold', marginBottom: '15px', borderBottom: '2px solid #3b82f6', paddingBottom: '10px' }}>
          Ancient Byzantium & Roman Era (660 BCE–330 CE)
        </h2>
        <p style={{ lineHeight: '1.8', color: '#333', marginBottom: '15px' }}>
          Greek colonists from Megara founded Byzantium in 660 BCE on the Golden Horn, recognizing its strategic importance at the nexus of Europe and Asia. The city controlled trade between the Black Sea and Mediterranean. After Rome conquered it, Byzantium remained a significant port city until Constantine I, the first Christian Roman Emperor, reorganized the empire.
        </p>
        <p style={{ lineHeight: '1.8', color: '#333', marginBottom: '15px' }}>
          In 330 CE, Constantine refounded the city as Constantinople — New Rome — moving the capital from Rome itself. This marked a turning point in world history, establishing Constantinople as the center of the Eastern Roman (Byzantine) Empire.
        </p>
      </section>

      {/* Byzantine Golden Age */}
      <section style={{ marginBottom: '40px' }}>
        <h2 style={{ fontSize: '1.8em', fontWeight: 'bold', marginBottom: '15px', borderBottom: '2px solid #3b82f6', paddingBottom: '10px' }}>
          Byzantine Empire — Golden Age (330–1453)
        </h2>
        <p style={{ lineHeight: '1.8', color: '#333', marginBottom: '15px' }}>
          For over 1,100 years, Constantinople was the largest and most cultured city in Europe. Emperor Justinian I (527–565) rebuilt the Hagia Sophia (still standing today), a masterpiece of Byzantine architecture. The city became a center of Orthodox Christianity, scholarship, art, and trade. Its walls (Theodosian Walls) made it nearly impregnable.
        </p>
        <p style={{ lineHeight: '1.8', color: '#333', marginBottom: '15px' }}>
          Constantinople resisted multiple sieges, plague outbreaks, and religious conflicts. It remained a beacon of learning while Western Europe endured the Medieval period. The Crusades (1204) temporarily fractured Byzantine control, but the city recovered. Nevertheless, weakening empire and rising Ottoman power eventually threatened its independence.
        </p>
      </section>

      {/* Ottoman Conquest & Empire */}
      <section style={{ marginBottom: '40px' }}>
        <h2 style={{ fontSize: '1.8em', fontWeight: 'bold', marginBottom: '15px', borderBottom: '2px solid #3b82f6', paddingBottom: '10px' }}>
          Ottoman Era — Istanbul (1453–1923)
        </h2>
        <p style={{ lineHeight: '1.8', color: '#333', marginBottom: '15px' }}>
          On May 29, 1453, Ottoman forces under Mehmed II captured Constantinople after a 53-day siege, ending the Byzantine Empire. The victorious Ottomans renamed it Istanbul and made it the capital of their expanding empire. The conquest marked the end of the Middle Ages in Western historiography.
        </p>
        <p style={{ lineHeight: '1.8', color: '#333', marginBottom: '15px' }}>
          Under Ottoman rule, Istanbul flourished as the seat of the Sultan and the Caliphate. Magnificent mosques (the Blue Mosque, Süleymaniye Mosque), bazaars (the Grand Bazaar), and palaces (Topkapi Palace) were constructed. Istanbul became a cosmopolitan city, blending Islamic and Byzantine traditions, and remained one of the world's largest cities for centuries.
        </p>
        <p style={{ lineHeight: '1.8', color: '#333', marginBottom: '15px' }}>
          As Ottoman power declined in the 19th and early 20th centuries, Istanbul's influence waned. World War I saw the Ottoman Empire's collapse. In 1923, Turkey's new leader Atatürk moved the capital to Ankara, ending Istanbul's role as the empire's heart but not its cultural significance.
        </p>
      </section>

      {/* Modern Istanbul */}
      <section style={{ marginBottom: '40px' }}>
        <h2 style={{ fontSize: '1.8em', fontWeight: 'bold', marginBottom: '15px', borderBottom: '2px solid #3b82f6', paddingBottom: '10px' }}>
          Modern Istanbul & Global Significance (1923–Present)
        </h2>
        <p style={{ lineHeight: '1.8', color: '#333', marginBottom: '15px' }}>
          As the capital was moved to Ankara, Istanbul transformed into a modern metropolis and cultural heart of Turkey. The city recovered from decline and became a major economic and tourism hub. By the late 20th and 21st centuries, Istanbul experienced rapid growth and urban development, becoming one of the world's largest metropolitan areas.
        </p>
        <p style={{ lineHeight: '1.8', color: '#333', marginBottom: '15px' }}>
          Today, Istanbul straddles two continents (Europe and Asia), two major religions (Islam and Christianity, though Islamic now dominates), and remains a bridge between East and West. The city's historic areas, UNESCO World Heritage sites (Hagia Sophia, Blue Mosque, Topkapi Palace), and vibrant culture make it one of the world's most visited cities.
        </p>
      </section>

      {/* Key Historical Sites */}
      <section style={{ marginBottom: '40px', background: '#fafafa', padding: '20px', borderRadius: '12px', border: '1px solid #e4e4e4' }}>
        <h2 style={{ fontSize: '1.8em', fontWeight: 'bold', marginBottom: '15px' }}>Key Historical Sites to Visit</h2>
        <ul style={{ lineHeight: '1.8', color: '#333', marginLeft: '20px' }}>
          <li><strong>Hagia Sophia</strong> — Byzantine masterpiece (537 CE), a church, mosque, and now museum showcasing architectural brilliance</li>
          <li><strong>Blue Mosque</strong> — Ottoman mosque (1609) famous for its intricate tilework and blue interior</li>
          <li><strong>Topkapi Palace</strong> — Former residence of Ottoman Sultans, now a museum with imperial treasures</li>
          <li><strong>Grand Bazaar</strong> — Historic marketplace dating back to the 15th century, one of the world's largest covered markets</li>
          <li><strong>Theodosian Walls</strong> — Roman-era defensive walls still partially standing, testament to Byzantine engineering</li>
        </ul>
      </section>
    </main>
  );
}
