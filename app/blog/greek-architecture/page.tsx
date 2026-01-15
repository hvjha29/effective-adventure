'use client';

import Link from 'next/link';

export default function GreekArchitecturePage() {
  return (
    <main className="content-wrapper py-24 px-6 md:px-12 bg-background-light dark:bg-background-dark min-h-screen">
      <div className="max-w-3xl mx-auto">
        {/* Back Link */}
        <div className="mb-12">
          <Link
            href="/#journals"
            className="inline-flex items-center text-primary font-medium hover:opacity-80 transition-opacity"
          >
            <span className="material-icons-outlined text-lg mr-2">arrow_back</span>
            Back to Journals
          </Link>
        </div>

        <article>
          {/* Header */}
          <header className="mb-16 text-center">
            <span className="inline-block text-primary font-medium tracking-[0.2em] uppercase mb-4 text-xs md:text-sm">
              History & Culture
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 text-stone-900 dark:text-stone-100 leading-tight">
              Greek Architecture and Sculpture
            </h1>
            <p className="text-xl text-stone-600 dark:text-stone-400 font-sans leading-relaxed max-w-2xl mx-auto">
              A historical exploration of Greek sculptural development and architectural evolution.
            </p>
            <div className="mt-8 flex items-center justify-center space-x-4 text-stone-500 text-sm">
              <span className="flex items-center">
                <span className="material-icons-outlined text-lg mr-2">calendar_today</span>
                October 19, 2025
              </span>
              <span>•</span>
              <span className="flex items-center">
                <span className="material-icons-outlined text-lg mr-2">schedule</span>
                8 min read
              </span>
            </div>
          </header>

          <hr className="border-stone-200 dark:border-stone-800 mb-16" />

          {/* Introduction */}
          <section className="mb-16">
            <h2 className="text-3xl font-display font-bold mb-6 text-stone-900 dark:text-stone-100">
              Introduction
            </h2>
            <p className="text-lg text-stone-700 dark:text-stone-300 leading-8">
              Greek sculpture represents one of humanity's greatest artistic achievements, evolving over centuries to establish ideals of beauty, proportion, and human form that continue to influence art today.
            </p>
          </section>

          {/* Historical Timeline */}
          <section className="space-y-20">
            <h2 className="text-3xl font-display font-bold mb-10 text-stone-900 dark:text-stone-100 border-l-4 border-primary pl-6">
              Historical Timeline
            </h2>

            {/* Geometric Amphora */}
            <div className="group">
              <div className="flex items-baseline justify-between mb-4">
                <h3 className="text-2xl font-display font-semibold text-stone-900 dark:text-stone-100">
                  Geometric Amphora (750–700 BCE)
                </h3>
              </div>

              <div className="bg-stone-100 dark:bg-stone-900 rounded-2xl p-2 mb-8">
                <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl">
                  <img
                    src="/images/europe/greece/geometric_amphora.jpg"
                    alt="Geometric Amphora"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <p className="text-center text-xs text-stone-500 mt-3 font-medium uppercase tracking-wider">
                  Geometric Period • Terracotta
                </p>
              </div>

              <div className="prose prose-stone dark:prose-invert max-w-none text-stone-700 dark:text-stone-300 leading-8">
                <p className="mb-6"><strong className="text-primary">Use:</strong> Likely a funerary amphora, serving as a grave marker.</p>
                <ul className="list-disc pl-6 space-y-2 mb-8 marker:text-primary">
                  <li><strong>Strictly geometric decoration:</strong> meanders (Greek key), triangles, zigzags, concentric patterns</li>
                  <li><strong>Human figures:</strong> Stick-like silhouettes with thin torsos, triangular torsos, simple limbs</li>
                  <li><strong>Central scene:</strong> A funeral prothesis (laying out of the body) with mourners and raised hands — stylized gestures of lamentation</li>
                </ul>

                <div className="bg-primary/5 dark:bg-primary/10 border-l-4 border-primary p-6 rounded-r-xl">
                  <p className="text-stone-800 dark:text-stone-200 italic">
                    <strong className="block text-primary non-italic text-sm uppercase tracking-widest mb-2">Meaning</strong>
                    This is art in its symbolic stage — narrative has appeared (humans, ritual), but abstraction dominates. It reflects early Greek social structure: the rise of the polis (city-state), heroes, and rituals that would define later art.
                  </p>
                </div>
              </div>
            </div>

            {/* Early Archaic Female Figure */}
            <div className="group">
              <h3 className="text-2xl font-display font-semibold text-stone-900 dark:text-stone-100 mb-4">
                Early Archaic Female Figure (c. 650–600 BC)
              </h3>

              <div className="bg-stone-100 dark:bg-stone-900 rounded-2xl p-2 mb-8">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl">
                  <img
                    src="/images/europe/greece/archaic-kore.jpg"
                    alt="Early Archaic Kore"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <p className="text-center text-xs text-stone-500 mt-3 font-medium uppercase tracking-wider">
                  Early Archaic • Limestone
                </p>
              </div>

              <div className="prose prose-stone dark:prose-invert max-w-none text-stone-700 dark:text-stone-300 leading-8">
                <p className="mb-6">This is a <strong>Daedalic-style Kore</strong> (female figure) — named after the mythical inventor Daedalus.</p>
                <ul className="list-disc pl-6 space-y-2 mb-8 marker:text-primary">
                  <li>Rigid posture and front-facing stance</li>
                  <li>Belted long garment (peplos)</li>
                  <li>Stylized hair forming a triangular "wig-like" pattern</li>
                </ul>

                <div className="bg-primary/5 dark:bg-primary/10 border-l-4 border-primary p-6 rounded-r-xl">
                  <p className="text-stone-800 dark:text-stone-200 italic">
                    <strong className="block text-primary non-italic text-sm uppercase tracking-widest mb-2">Meaning</strong>
                    Early Greek sculptors were influenced by Egyptian art (frontal poses, left foot forward, rigid symmetry). Figures like this mark the first experiments with carving in life-size marble — a new material and freedom from wood or clay.
                  </p>
                </div>
              </div>
            </div>

            {/* Archaic Kouros */}
            <div className="group">
              <h3 className="text-2xl font-display font-semibold text-stone-900 dark:text-stone-100 mb-4">
                Archaic Kouros (c. 600–570 BC)
              </h3>

              <div className="bg-stone-100 dark:bg-stone-900 rounded-2xl p-2 mb-8">
                <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl">
                  <img
                    src="/images/europe/greece/archaic-kouros.jpg"
                    alt="Archaic Kouros"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <p className="text-center text-xs text-stone-500 mt-3 font-medium uppercase tracking-wider">
                  Archaic Period • Marble
                </p>
              </div>

              <div className="prose prose-stone dark:prose-invert max-w-none text-stone-700 dark:text-stone-300 leading-8">
                <p className="mb-6">The <strong>Kouros</strong> (youth) was a grave marker or votive offering to the gods.</p>
                <ul className="list-disc pl-6 space-y-2 mb-8 marker:text-primary">
                  <li>Still influenced by Egypt — frontal pose, clenched fists, one leg forward</li>
                  <li>Now fully nude — representing the Greek ideal of beauty (arete) and heroism</li>
                  <li>Focus on anatomy — muscles, bone structure — though still stylized and formulaic</li>
                  <li>The face shows the "Archaic smile" — not emotion, but a symbol of life and vitality</li>
                </ul>

                <div className="bg-primary/5 dark:bg-primary/10 border-l-4 border-primary p-6 rounded-r-xl">
                  <p className="text-stone-800 dark:text-stone-200 italic">
                    <strong className="block text-primary non-italic text-sm uppercase tracking-widest mb-2">Evolutionary Step</strong>
                    Sculptors begin to focus on the human form in a new way, with nudity as the ultimate expression of Greek beauty and athletic idealism.
                  </p>
                </div>
              </div>
            </div>

            {/* Late Archaic Kore */}
            <div className="group">
              <h3 className="text-2xl font-display font-semibold text-stone-900 dark:text-stone-100 mb-4">
                Archaic Kore (c. 530–520 BC)
              </h3>

              <div className="bg-stone-100 dark:bg-stone-900 rounded-2xl p-2 mb-8">
                <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl">
                  <img
                    src="/images/europe/greece/archaic-core2.jpg"
                    alt="Late Archaic Kore"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <p className="text-center text-xs text-stone-500 mt-3 font-medium uppercase tracking-wider">
                  Late Archaic
                </p>
              </div>

              <div className="prose prose-stone dark:prose-invert max-w-none text-stone-700 dark:text-stone-300 leading-8">
                <p className="mb-6">A <strong>Kore</strong> (maiden) — female counterpart of the kouros.</p>
                <ul className="list-disc pl-6 space-y-2 mb-8 marker:text-primary">
                  <li>Once painted in vivid colors (some pigment still visible)</li>
                  <li>Holds an offering (fruit or flower), dedicated to a goddess like Athena or Artemis</li>
                  <li>Clothing now shows intricate drapery patterns</li>
                  <li>New softness and individuality in the face, though the archaic smile remains serene</li>
                </ul>

                <div className="bg-primary/5 dark:bg-primary/10 border-l-4 border-primary p-6 rounded-r-xl">
                  <p className="text-stone-800 dark:text-stone-200 italic">
                    <strong className="block text-primary non-italic text-sm uppercase tracking-widest mb-2">Significance</strong>
                    We're moving toward naturalism — understanding how fabric and anatomy interact. The artist's attention to drapery shows growing technical mastery.
                  </p>
                </div>
              </div>
            </div>

            {/* Transitional Kouros */}
            <div className="group">
              <h3 className="text-2xl font-display font-semibold text-stone-900 dark:text-stone-100 mb-4">
                Transitional Kouros (c. 500–480 BC)
              </h3>

              <div className="bg-stone-100 dark:bg-stone-900 rounded-2xl p-2 mb-8">
                <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl">
                  <img
                    src="/images/europe/greece/transitional-kouros.jpg"
                    alt="Transitional Kouros"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <p className="text-center text-xs text-stone-500 mt-3 font-medium uppercase tracking-wider">
                  Late Archaic / Early Classical
                </p>
              </div>

              <div className="prose prose-stone dark:prose-invert max-w-none text-stone-700 dark:text-stone-300 leading-8">
                <ul className="list-disc pl-6 space-y-2 mb-8 marker:text-primary">
                  <li>The body becomes heavier, more naturalistic</li>
                  <li>The rigid stance begins to relax, and muscles are modeled with attention to realism</li>
                  <li>The archaic smile fades — replaced by serious calm</li>
                </ul>

                <div className="bg-primary/5 dark:bg-primary/10 border-l-4 border-primary p-6 rounded-r-xl">
                  <p className="text-stone-800 dark:text-stone-200 italic">
                    <strong className="block text-primary non-italic text-sm uppercase tracking-widest mb-2">Meaning</strong>
                    This "transitional" style coincides with Greece's victory over Persia (480 BC) — a shift from the stylized optimism of the archaic world to the heroic realism of the classical. A new era is dawning.
                  </p>
                </div>
              </div>
            </div>

            {/* Bronze Statue of Zeus or Poseidon */}
            <div className="group">
              <h3 className="text-2xl font-display font-semibold text-stone-900 dark:text-stone-100 mb-4">
                Bronze Statue of Zeus or Poseidon (c. 460 BC)
              </h3>

              <div className="bg-stone-100 dark:bg-stone-900 rounded-2xl p-2 mb-8 grid grid-cols-2 gap-2">
                <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl">
                  <img
                    src="/images/europe/greece/zeus_bronze.jpg"
                    alt="Bronze Statue Detail 1"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl">
                  <img
                    src="/images/europe/greece/zeus_bronze2.jpg"
                    alt="Bronze Statue Detail 2"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </div>
              <p className="text-center text-xs text-stone-500 mb-8 font-medium uppercase tracking-wider">
                Early Classical • Bronze
              </p>

              <div className="prose prose-stone dark:prose-invert max-w-none text-stone-700 dark:text-stone-300 leading-8">
                <p className="mb-6">One of the few surviving original Greek bronzes (most others were melted down for reuse).</p>
                <ul className="list-disc pl-6 space-y-2 mb-8 marker:text-primary">
                  <li>The god is shown mid-action — hurling a thunderbolt (if Zeus) or trident (if Poseidon)</li>
                  <li>Perfect balance of motion and stillness: weight distributed dynamically across the body</li>
                  <li>Musculature rendered in motion with perfect anatomical understanding</li>
                  <li>Energy captured at its peak</li>
                </ul>

                <div className="bg-primary/5 dark:bg-primary/10 border-l-4 border-primary p-6 rounded-r-xl">
                  <p className="text-stone-800 dark:text-stone-200 italic">
                    <strong className="block text-primary non-italic text-sm uppercase tracking-widest mb-2">Importance</strong>
                    This is the breakthrough of true naturalism. It marks the Greek ideal of the heroic, divine human form — rational, measured, and powerful.
                  </p>
                </div>
              </div>
            </div>

            {/* Classical Grave Stele */}
            <div className="group">
              <h3 className="text-2xl font-display font-semibold text-stone-900 dark:text-stone-100 mb-4">
                Classical Grave Stele (c. 420–400 BC)
              </h3>

              <div className="bg-stone-100 dark:bg-stone-900 rounded-2xl p-2 mb-8">
                <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl">
                  <img
                    src="/images/europe/greece/classical_grave_stele.jpg"
                    alt="Classical Grave Stele"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <p className="text-center text-xs text-stone-500 mt-3 font-medium uppercase tracking-wider">
                  High Classical • Marble
                </p>
              </div>

              <div className="prose prose-stone dark:prose-invert max-w-none text-stone-700 dark:text-stone-300 leading-8">
                <p className="mb-6">A funerary relief showing farewell between family members — deeply human, yet restrained with figures that are noble, calm, and idealized.</p>

                <div className="bg-primary/5 dark:bg-primary/10 border-l-4 border-primary p-6 rounded-r-xl">
                  <p className="text-stone-800 dark:text-stone-200 italic">
                    <strong className="block text-primary non-italic text-sm uppercase tracking-widest mb-2">Meaning</strong>
                    Greek art now conveys emotion through form, not expression. Drapery is fluid, anatomy subtle — you can feel weight, grace, and humanity. This is the art of Periclean Athens.
                  </p>
                </div>
              </div>
            </div>

            {/* Athena Parthenos */}
            <div className="group">
              <h3 className="text-2xl font-display font-semibold text-stone-900 dark:text-stone-100 mb-4">
                Athena Parthenos (Roman copy, orig. 5th c. BC)
              </h3>

              <div className="bg-stone-100 dark:bg-stone-900 rounded-2xl p-2 mb-8">
                <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl">
                  <img
                    src="/images/europe/greece/athena_parthenos.jpg"
                    alt="Athena Parthenos"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <p className="text-center text-xs text-stone-500 mt-3 font-medium uppercase tracking-wider">
                  Classical • Marble Copy
                </p>
              </div>

              <div className="prose prose-stone dark:prose-invert max-w-none text-stone-700 dark:text-stone-300 leading-8">
                <ul className="list-disc pl-6 space-y-2 mb-8 marker:text-primary">
                  <li>The goddess Athena, patron of Athens</li>
                  <li>Original by Phidias, stood inside the Parthenon</li>
                  <li>Holds Nike (Victory) in her hand, serpent (Erichthonios) at her side</li>
                </ul>

                <div className="bg-primary/5 dark:bg-primary/10 border-l-4 border-primary p-6 rounded-r-xl">
                  <p className="text-stone-800 dark:text-stone-200 italic">
                    <strong className="block text-primary non-italic text-sm uppercase tracking-widest mb-2">Importance</strong>
                    Represents the pinnacle of classical idealism: serene, balanced, divine beauty. Human perfection is equated with moral and civic excellence.
                  </p>
                </div>
              </div>
            </div>

            {/* Bronze Horse and Jockey */}
            <div className="group">
              <h3 className="text-2xl font-display font-semibold text-stone-900 dark:text-stone-100 mb-4">
                Bronze Horse and Jockey (c. 140 BC)
              </h3>

              <div className="bg-stone-100 dark:bg-stone-900 rounded-2xl p-2 mb-8">
                <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl">
                  <img
                    src="/images/europe/greece/bronze_jockey_artemision.jpg"
                    alt="Bronze Horse and Jockey"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <p className="text-center text-xs text-stone-500 mt-3 font-medium uppercase tracking-wider">
                  Hellenistic • Bronze
                </p>
              </div>

              <div className="prose prose-stone dark:prose-invert max-w-none text-stone-700 dark:text-stone-300 leading-8">
                <ul className="list-disc pl-6 space-y-2 mb-8 marker:text-primary">
                  <li>A dramatic, high-energy composition: horse rearing, boy straining forward</li>
                  <li>Captures movement, emotion, and tension like never before</li>
                  <li>The boy's face — fear, focus, intensity — vividly human</li>
                </ul>

                <div className="bg-primary/5 dark:bg-primary/10 border-l-4 border-primary p-6 rounded-r-xl">
                  <p className="text-stone-800 dark:text-stone-200 italic">
                    <strong className="block text-primary non-italic text-sm uppercase tracking-widest mb-2">Meaning</strong>
                    This is the Hellenistic revolution — art becomes emotional, theatrical, and dynamic. It celebrates individuality, not ideal abstraction.
                  </p>
                </div>
              </div>
            </div>

            {/* Bronze Athlete */}
            <div className="group">
              <h3 className="text-2xl font-display font-semibold text-stone-900 dark:text-stone-100 mb-4">
                Bronze Statue of an Athlete (c. 340 BC)
              </h3>

              <div className="bg-stone-100 dark:bg-stone-900 rounded-2xl p-2 mb-8">
                <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl">
                  <img
                    src="/images/europe/greece/bronze_athlete.jpg"
                    alt="Bronze Athlete"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <p className="text-center text-xs text-stone-500 mt-3 font-medium uppercase tracking-wider">
                  Late Classical • Bronze
                </p>
              </div>

              <div className="prose prose-stone dark:prose-invert max-w-none text-stone-700 dark:text-stone-300 leading-8">
                <p className="mb-6">Likely represents a hero or athlete, showing graceful contrapposto and poised gesture.</p>
                <div className="bg-primary/5 dark:bg-primary/10 border-l-4 border-primary p-6 rounded-r-xl">
                  <p className="text-stone-800 dark:text-stone-200 italic">
                    <strong className="block text-primary non-italic text-sm uppercase tracking-widest mb-2">Importance</strong>
                    The body is no longer divine and static — it breathes, moves, and thinks. This represents the pinnacle of late classical and early Hellenistic artistry.
                  </p>
                </div>
              </div>
            </div>

          </section>

          <hr className="border-stone-200 dark:border-stone-800 my-16" />

          {/* Legacy */}
          <section className="bg-stone-100 dark:bg-stone-800/50 p-8 md:p-12 rounded-2xl">
            <h2 className="text-2xl font-display font-bold mb-6 text-stone-900 dark:text-stone-100">
              Legacy
            </h2>
            <div className="text-stone-700 dark:text-stone-300 leading-relaxed space-y-6">
              <p>
                Greek sculptural principles of harmony, proportion, and idealized beauty fundamentally shaped Western art traditions. From the Renaissance masters who studied ancient Greek works to contemporary artists, the influence persists. Museums worldwide house Greek sculptures, and their principles continue to be taught in art schools.
              </p>
              <p>
                The evolution from rigid geometric forms to naturalistic, emotionally expressive sculptures demonstrates how artists pushed boundaries and refined techniques over centuries. This journey reflects humanity's changing understanding of beauty, the human form, and artistic expression.
              </p>
              <p>
                Whether viewing a simple geometric amphora, the austere beauty of a kouros, or the dynamic energy of a Hellenistic bronze, we see the story of how Greek artists systematically learned to capture human experience in stone and bronze — a legacy that continues to inspire and move us today.
              </p>
            </div>
          </section>

          {/* Footer Note */}
          <footer className="mt-16 text-center text-stone-500 text-sm italic">
            <p>All sculpture examples in this article are from museum collections and archaeological finds that chronicle Greece's artistic evolution.</p>
          </footer>
        </article>
      </div>
    </main>
  );
}
