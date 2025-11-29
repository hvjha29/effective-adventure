'use client';

import Link from 'next/link';

export default function ScotlandHistory() {
  return (
    <main className="content-wrapper">
      <Link href="/history" style={{ color: '#3b82f6', marginBottom: '20px', display: 'inline-block' }}>
        ← Back to History
      </Link>

      <h1 style={{ marginBottom: '10px', fontSize: '2.5em', fontWeight: 'bold' }}>Scotland — Land of Clans and Castles</h1>
      <p style={{ color: '#666', fontSize: '1.1em', marginBottom: '30px' }}>
        From Celtic kingdoms to the Jacobite rebellions and industrial innovation
      </p>

      {/* Early History */}
      <section style={{ marginBottom: '40px' }}>
        <h2 style={{ fontSize: '1.8em', fontWeight: 'bold', marginBottom: '15px', borderBottom: '2px solid #3b82f6', paddingBottom: '10px' }}>
          Early Kingdom & Medieval Era (843–1603)
        </h2>
        <p style={{ lineHeight: '1.8', color: '#333', marginBottom: '15px' }}>
          Scotland emerged as a distinct kingdom in the 9th century under Kenneth MacAlpin. Medieval Scotland was defined by powerful clans, feudal structures, and the building of great castles like Edinburgh and Stirling. The Kingdom maintained independence while battling for sovereignty.
        </p>
        <p style={{ lineHeight: '1.8', color: '#333', marginBottom: '15px' }}>
          Scottish heroes like William Wallace and Robert the Bruce resisted English domination, most famously at the Battle of Bannockburn (1314). Scottish culture developed unique characteristics — Gaelic traditions, Lowland systems, and strong regional identities.
        </p>
      </section>

      {/* Union with England */}
      <section style={{ marginBottom: '40px' }}>
        <h2 style={{ fontSize: '1.8em', fontWeight: 'bold', marginBottom: '15px', borderBottom: '2px solid #3b82f6', paddingBottom: '10px' }}>
          Union with England & Jacobite Era (1603–1746)
        </h2>
        <p style={{ lineHeight: '1.8', color: '#333', marginBottom: '15px' }}>
          In 1603, King James VI of Scotland became James I of England, uniting the crowns. The formal Acts of Union in 1707 created the Kingdom of Great Britain. This triggered Scottish Jacobite uprisings (1715, 1745) attempting to restore the Stuart line and Scottish independence.
        </p>
        <p style={{ lineHeight: '1.8', color: '#333', marginBottom: '15px' }}>
          The defeat at Culloden (1746) ended clan power and marked the end of Gaelic Highland culture as it had existed. The aftermath saw the Highland Clearances, where landlords evicted tenant farmers to make way for sheep farming — a traumatic period that led to mass emigration.
        </p>
      </section>

      {/* Industrial Age & Enlightenment */}
      <section style={{ marginBottom: '40px' }}>
        <h2 style={{ fontSize: '1.8em', fontWeight: 'bold', marginBottom: '15px', borderBottom: '2px solid #3b82f6', paddingBottom: '10px' }}>
          Scottish Enlightenment & Industrial Revolution (18th–19th Century)
        </h2>
        <p style={{ lineHeight: '1.8', color: '#333', marginBottom: '15px' }}>
          Despite political union, Scotland experienced a remarkable intellectual flowering. The Scottish Enlightenment (1730s–1840s) produced philosophers like David Hume and Adam Smith, scientists like James Watt (steam engine), and innovations that powered the Industrial Revolution.
        </p>
        <p style={{ lineHeight: '1.8', color: '#333', marginBottom: '15px' }}>
          Glasgow and Edinburgh became centers of manufacturing, shipbuilding, and banking. Scotland's contributions to science, medicine, engineering, and literature were disproportionate to its population — the "Scottish mind" became synonymous with innovation.
        </p>
      </section>

      {/* Modern Scotland */}
      <section style={{ marginBottom: '40px' }}>
        <h2 style={{ fontSize: '1.8em', fontWeight: 'bold', marginBottom: '15px', borderBottom: '2px solid #3b82f6', paddingBottom: '10px' }}>
          Modern Scotland & Devolution (20th Century–Present)
        </h2>
        <p style={{ lineHeight: '1.8', color: '#333', marginBottom: '15px' }}>
          The 20th century saw Scotland's industrial base decline, but cultural identity strengthened. The Scottish National Party emerged, advocating for independence. Devolution in 1999 established the Scottish Parliament, restoring local governance for the first time since 1707.
        </p>
        <p style={{ lineHeight: '1.8', color: '#333', marginBottom: '15px' }}>
          Today, Scotland is known for its wild landscapes, preserved castles, vibrant cities, and strong cultural identity. The debate over independence continues, but Scotland's contributions to global culture — from whisky to literature (Robert Burns, Sir Walter Scott) — remain celebrated worldwide.
        </p>
      </section>

      {/* Key Historical Sites */}
      <section style={{ marginBottom: '40px', background: '#fafafa', padding: '20px', borderRadius: '12px', border: '1px solid #e4e4e4' }}>
        <h2 style={{ fontSize: '1.8em', fontWeight: 'bold', marginBottom: '15px' }}>Key Historical Sites to Visit</h2>
        <ul style={{ lineHeight: '1.8', color: '#333', marginLeft: '20px' }}>
          <li><strong>Edinburgh Castle</strong> — Royal residence and fortress, symbol of Scotland</li>
          <li><strong>Stirling Castle</strong> — Strategic stronghold where Robert the Bruce defeated the English</li>
          <li><strong>Culloden Battlefield</strong> — Site of the final Jacobite rising (1746)</li>
          <li><strong>Dunvegan Castle (Skye)</strong> — Seat of Clan MacLeod, oldest continuously inhabited castle in Scotland</li>
          <li><strong>Hadrian's Wall</strong> — Roman frontier marking Scotland's southern border</li>
        </ul>
      </section>
    </main>
  );
}
