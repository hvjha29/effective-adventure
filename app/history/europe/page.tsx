'use client';

import Link from 'next/link';

export default function EuropeHistory() {
  return (
    <main className="content-wrapper">
      <Link href="/history" style={{ color: '#3b82f6', marginBottom: '20px', display: 'inline-block' }}>
        ← Back to History
      </Link>

      <h1 style={{ marginBottom: '10px', fontSize: '2.5em', fontWeight: 'bold' }}>The Alps — Ancient Crossroads & Modern Alpine Culture</h1>
      <p style={{ color: '#666', fontSize: '1.1em', marginBottom: '30px' }}>
        From Paleolithic hunters to modern Swiss democracy and Alpine traditions
      </p>

      {/* Prehistoric & Roman Era */}
      <section style={{ marginBottom: '40px' }}>
        <h2 style={{ fontSize: '1.8em', fontWeight: 'bold', marginBottom: '15px', borderBottom: '2px solid #3b82f6', paddingBottom: '10px' }}>
          Prehistoric & Roman Periods (50,000 BCE–500 CE)
        </h2>
        <p style={{ lineHeight: '1.8', color: '#333', marginBottom: '15px' }}>
          The Alpine region has been inhabited since Paleolithic times. Archaeological evidence shows hunter-gatherers, then Neolithic farmers. The Alps became a crucial trade route and natural boundary. The Romans recognized the strategic importance, building roads and forts across Alpine passes (the famous Via Claudia Augusta connected Italy to Bavaria).
        </p>
        <p style={{ lineHeight: '1.8', color: '#333', marginBottom: '15px' }}>
          Hannibal famously crossed the Alps with elephants in 218 BCE during his campaign against Rome. The mountain passes were militarily critical throughout history, connecting Mediterranean civilizations with Northern Europe.
        </p>
      </section>

      {/* Medieval & Renaissance Era */}
      <section style={{ marginBottom: '40px' }}>
        <h2 style={{ fontSize: '1.8em', fontWeight: 'bold', marginBottom: '15px', borderBottom: '2px solid #3b82f6', paddingBottom: '10px' }}>
          Medieval & Alpine Communities (500–1500)
        </h2>
        <p style={{ lineHeight: '1.8', color: '#333', marginBottom: '15px' }}>
          Alpine communities developed distinct cultures shaped by isolation and the harsh mountain environment. Pastoral agriculture (herding, dairy farming) became central to Alpine life. The Helvetii tribes inhabited what is now Switzerland. During the Middle Ages, Alpine valleys developed feudal systems, abbeys (like St. Gallen), and distinct regional identities.
        </p>
        <p style={{ lineHeight: '1.8', color: '#333', marginBottom: '15px' }}>
          Interlaken, in the Bernese Oberland, emerged as a monastery settlement (founded 1133). The region's natural beauty and strategic location gradually attracted travelers and eventually tourists.
        </p>
      </section>

      {/* Swiss Formation & Modern Era */}
      <section style={{ marginBottom: '40px' }}>
        <h2 style={{ fontSize: '1.8em', fontWeight: 'bold', marginBottom: '15px', borderBottom: '2px solid #3b82f6', paddingBottom: '10px' }}>
          Swiss Confederation & Alpine Tourism (1291–Present)
        </h2>
        <p style={{ lineHeight: '1.8', color: '#333', marginBottom: '15px' }}>
          Switzerland formed as a confederation in 1291 when the cantons of Uri, Schwyz, and Unterwalden united. Over centuries, more cantons joined, creating a unique federal system based on consensus and democracy. Switzerland's neutrality was established, and its political system influenced democracies globally.
        </p>
        <p style={{ lineHeight: '1.8', color: '#333', marginBottom: '15px' }}>
          The 19th and 20th centuries saw the Alps transform from isolated regions to tourist destinations. Improved mountain railways (the Jungfrau Railway, 1912), hotels, and hiking culture emerged. The development of winter sports (skiing, mountaineering) made the Bernese Oberland (Interlaken, Lauterbrunnen) world-renowned.
        </p>
        <p style={{ lineHeight: '1.8', color: '#333', marginBottom: '15px' }}>
          Today, the Alps represent a unique blend of preserved Alpine traditions (cheese-making, Alpine horns, traditional costumes), cutting-edge Swiss engineering and precision, and environmentally conscious tourism. The region attracts millions annually and exemplifies sustainable mountain living.
        </p>
      </section>

      {/* Key Historical Sites */}
      <section style={{ marginBottom: '40px', background: '#fafafa', padding: '20px', borderRadius: '12px', border: '1px solid #e4e4e4' }}>
        <h2 style={{ fontSize: '1.8em', fontWeight: 'bold', marginBottom: '15px' }}>Key Historical Sites to Visit</h2>
        <ul style={{ lineHeight: '1.8', color: '#333', marginLeft: '20px' }}>
          <li><strong>Interlaken</strong> — Medieval monastery town and modern Alpine tourism hub</li>
          <li><strong>Lauterbrunnen Valley</strong> — Glacier-carved valley with traditional Swiss villages and dramatic waterfalls</li>
          <li><strong>Jungfraujoch ("Top of Europe")</strong> — Highest station in Europe, accessible by railway since 1912</li>
          <li><strong>Mürren & Gimmelwald</strong> — Car-free Alpine villages preserving traditional mountain culture</li>
          <li><strong>Swiss National Museum (Zurich)</strong> — Comprehensive history of Swiss culture and Alpine traditions</li>
        </ul>
      </section>
    </main>
  );
}
