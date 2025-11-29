'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function GreekArchitecturePage() {
  return (
    <main className="content-wrapper">
      <Link href="/blog" style={{ color: '#3b82f6', marginBottom: '20px', display: 'inline-block' }}>
        ← Back to Blog
      </Link>

      <article style={{ maxWidth: '900px', margin: '0 auto' }}>
        <header style={{ marginBottom: '40px' }}>
          <h1 style={{ fontSize: '2.5em', fontWeight: 'bold', marginBottom: '10px' }}>
            Greek Architecture and Sculpture
          </h1>
          <p style={{ color: '#666', fontSize: '1.1em' }}>
            A historical exploration of Greek sculptural development and architectural evolution
          </p>
          <p style={{ color: '#999', fontSize: '0.95em', marginTop: '10px' }}>
            Published on 19-10-2025
          </p>
        </header>

        {/* Introduction */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontSize: '1.8em', fontWeight: 'bold', marginBottom: '15px', borderBottom: '2px solid #3b82f6', paddingBottom: '10px' }}>
            Introduction
          </h2>
          <p style={{ lineHeight: '1.8', color: '#333', marginBottom: '15px' }}>
            Greek sculpture represents one of humanity's greatest artistic achievements, evolving over centuries to establish ideals of beauty, proportion, and human form that continue to influence art today.
          </p>
        </section>

        {/* Historical Timeline */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontSize: '1.8em', fontWeight: 'bold', marginBottom: '15px', borderBottom: '2px solid #3b82f6', paddingBottom: '10px' }}>
            Historical Timeline
          </h2>

          {/* Geometric Amphora */}
          <div style={{ marginBottom: '50px' }}>
            <h3 style={{ fontSize: '1.4em', fontWeight: '600', marginBottom: '10px', color: '#1f2937' }}>
              Geometric Amphora (750–700 BCE)
            </h3>
            <p style={{ fontSize: '0.95em', color: '#666', marginBottom: '15px' }}>
              <strong>Period:</strong> Geometric Period (900–700 BC) | <strong>Material:</strong> Terracotta (painted with slip)
            </p>
            
            <div style={{ background: '#f0f9ff', padding: '15px', borderRadius: '8px', marginBottom: '15px', textAlign: 'center' }}>
              <div style={{ maxWidth: 1000, margin: '0 auto', borderRadius: 8, overflow: 'hidden' }}>
                <Image
                  src="/images/geometricamphora.jpg"
                  alt="Geometric Amphora - funerary vessel with geometric patterns and mourning scene"
                  width={1000}
                  height={600}
                  style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
                  priority
                />
              </div>

              <p style={{ color: '#999', fontSize: '0.9em', marginTop: 10 }}>Image: /images/geometric-amphora.jpg</p>
            </div>


            <p style={{ lineHeight: '1.8', color: '#b63232ff', marginBottom: '10px' }}>
              <strong>Use:</strong> Likely a funerary amphora, serving as a grave marker.
            </p>

            <ul style={{ marginLeft: '20px', marginBottom: '15px', color: '#333', lineHeight: '1.8' }}>
              <li><strong>Strictly geometric decoration:</strong> meanders (Greek key), triangles, zigzags, concentric patterns</li>
              <li><strong>Human figures:</strong> Stick-like silhouettes with thin torsos, triangular torsos, simple limbs</li>
              <li><strong>Central scene:</strong> A funeral prothesis (laying out of the body) with mourners and raised hands — stylized gestures of lamentation</li>
            </ul>

            <div style={{ background: '#fff7d1', padding: '15px', borderRadius: '8px', marginBottom: '15px', borderLeft: '4px solid #f59e0b' }}>
              <p style={{ color: '#92400e', lineHeight: '1.6' }}>
                <strong>💭 Meaning:</strong> This is art in its symbolic stage — narrative has appeared (humans, ritual), but abstraction dominates. It reflects early Greek social structure: the rise of the polis (city-state), heroes, and rituals that would define later art.
              </p>
            </div>
          </div>

          {/* Early Archaic Female Figure */}
          <div style={{ marginBottom: '50px' }}>
            <h3 style={{ fontSize: '1.4em', fontWeight: '600', marginBottom: '10px', color: '#1f2937' }}>
              Early Archaic Female Figure (c. 650–600 BC)
            </h3>
            <p style={{ fontSize: '0.95em', color: '#666', marginBottom: '15px' }}>
              <strong>Period:</strong> Early Archaic | <strong>Material:</strong> Limestone or marble
            </p>

            <div style={{ background: '#f0f9ff', padding: '15px', borderRadius: '8px', marginBottom: '15px', textAlign: 'center' }}>
              <p style={{ color: '#666', fontStyle: 'italic', marginBottom: '10px' }}>
                [Image: Early Archaic Kore - rigid female figure with triangular hair and long peplos garment]
              </p>
              <p style={{ color: '#999', fontSize: '0.9em' }}>Image: /images/archaic-kore.jpg</p>
            </div>

            <p style={{ lineHeight: '1.8', color: '#333', marginBottom: '10px' }}>
              This is a <strong>Daedalic-style Kore</strong> (female figure) — named after the mythical inventor Daedalus.
            </p>

            <ul style={{ marginLeft: '20px', marginBottom: '15px', color: '#333', lineHeight: '1.8' }}>
              <li>Rigid posture and front-facing stance</li>
              <li>Belted long garment (peplos)</li>
              <li>Stylized hair forming a triangular "wig-like" pattern</li>
            </ul>

            <div style={{ background: '#fff7d1', padding: '15px', borderRadius: '8px', marginBottom: '15px', borderLeft: '4px solid #f59e0b' }}>
              <p style={{ color: '#92400e', lineHeight: '1.6' }}>
                <strong>💭 Meaning:</strong> Early Greek sculptors were influenced by Egyptian art (frontal poses, left foot forward, rigid symmetry). Figures like this mark the first experiments with carving in life-size marble — a new material and freedom from wood or clay.
              </p>
            </div>
          </div>

          {/* Archaic Kouros */}
          <div style={{ marginBottom: '50px' }}>
            <h3 style={{ fontSize: '1.4em', fontWeight: '600', marginBottom: '10px', color: '#1f2937' }}>
              Archaic Kouros (c. 600–570 BC)
            </h3>
            <p style={{ fontSize: '0.95em', color: '#666', marginBottom: '15px' }}>
              <strong>Period:</strong> Archaic Period | <strong>Material:</strong> Marble
            </p>

            <div style={{ background: '#f0f9ff', padding: '15px', borderRadius: '8px', marginBottom: '15px', textAlign: 'center' }}>
              <p style={{ color: '#666', fontStyle: 'italic', marginBottom: '10px' }}>
                [Image: Archaic Kouros - nude male youth with Egyptian-influenced frontal pose and archaic smile]
              </p>
              <p style={{ color: '#999', fontSize: '0.9em' }}>Image: /images/archaic-kouros.jpg</p>
            </div>

            <p style={{ lineHeight: '1.8', color: '#333', marginBottom: '10px' }}>
              The <strong>Kouros</strong> (youth) was a grave marker or votive offering to the gods.
            </p>

            <ul style={{ marginLeft: '20px', marginBottom: '15px', color: '#333', lineHeight: '1.8' }}>
              <li>Still influenced by Egypt — frontal pose, clenched fists, one leg forward</li>
              <li>Now fully nude — representing the Greek ideal of beauty (arete) and heroism</li>
              <li>Focus on anatomy — muscles, bone structure — though still stylized and formulaic</li>
              <li>The face shows the "Archaic smile" — not emotion, but a symbol of life and vitality</li>
            </ul>

            <div style={{ background: '#fff7d1', padding: '15px', borderRadius: '8px', marginBottom: '15px', borderLeft: '4px solid #f59e0b' }}>
              <p style={{ color: '#92400e', lineHeight: '1.6' }}>
                <strong>💭 Evolutionary Step:</strong> Sculptors begin to focus on the human form in a new way, with nudity as the ultimate expression of Greek beauty and athletic idealism.
              </p>
            </div>
          </div>

          {/* Late Archaic Kore */}
          <div style={{ marginBottom: '50px' }}>
            <h3 style={{ fontSize: '1.4em', fontWeight: '600', marginBottom: '10px', color: '#1f2937' }}>
              Archaic Kore (c. 530–520 BC)
            </h3>
            <p style={{ fontSize: '0.95em', color: '#666', marginBottom: '15px' }}>
              <strong>Period:</strong> Late Archaic
            </p>

            <div style={{ background: '#f0f9ff', padding: '15px', borderRadius: '8px', marginBottom: '15px', textAlign: 'center' }}>
              <p style={{ color: '#666', fontStyle: 'italic', marginBottom: '10px' }}>
                [Image: Late Archaic Kore - draped female figure with intricate drapery patterns and archaic smile]
              </p>
              <p style={{ color: '#999', fontSize: '0.9em' }}>Image: /images/archaic-core2.jpg</p>
            </div>

            <p style={{ lineHeight: '1.8', color: '#333', marginBottom: '10px' }}>
              A <strong>Kore</strong> (maiden) — female counterpart of the kouros.
            </p>

            <ul style={{ marginLeft: '20px', marginBottom: '15px', color: '#333', lineHeight: '1.8' }}>
              <li>Once painted in vivid colors (some pigment still visible)</li>
              <li>Holds an offering (fruit or flower), dedicated to a goddess like Athena or Artemis</li>
              <li>Clothing now shows intricate drapery patterns</li>
              <li>New softness and individuality in the face, though the archaic smile remains serene</li>
            </ul>

            <div style={{ background: '#fff7d1', padding: '15px', borderRadius: '8px', marginBottom: '15px', borderLeft: '4px solid #f59e0b' }}>
              <p style={{ color: '#92400e', lineHeight: '1.6' }}>
                <strong>💭 Significance:</strong> We're moving toward naturalism — understanding how fabric and anatomy interact. The artist's attention to drapery shows growing technical mastery.
              </p>
            </div>
          </div>

          {/* Transitional Kouros */}
          <div style={{ marginBottom: '50px' }}>
            <h3 style={{ fontSize: '1.4em', fontWeight: '600', marginBottom: '10px', color: '#1f2937' }}>
              Transitional Kouros (c. 500–480 BC)
            </h3>
            <p style={{ fontSize: '0.95em', color: '#666', marginBottom: '15px' }}>
              <strong>Period:</strong> Late Archaic / Early Classical ("Severe Style")
            </p>

            <div style={{ background: '#f0f9ff', padding: '15px', borderRadius: '8px', marginBottom: '15px', textAlign: 'center' }}>
              <p style={{ color: '#666', fontStyle: 'italic', marginBottom: '10px' }}>
                [Image: Transitional Kouros - body becoming heavier and more naturalistic, serious calm expression]
              </p>
              <p style={{ color: '#999', fontSize: '0.9em' }}>Image: /images/transitional-kouros.jpg</p>
            </div>

            <ul style={{ marginLeft: '20px', marginBottom: '15px', color: '#333', lineHeight: '1.8' }}>
              <li>The body becomes heavier, more naturalistic</li>
              <li>The rigid stance begins to relax, and muscles are modeled with attention to realism</li>
              <li>The archaic smile fades — replaced by serious calm</li>
            </ul>

            <div style={{ background: '#fff7d1', padding: '15px', borderRadius: '8px', marginBottom: '15px', borderLeft: '4px solid #f59e0b' }}>
              <p style={{ color: '#92400e', lineHeight: '1.6' }}>
                <strong>💭 Meaning:</strong> This "transitional" style coincides with Greece's victory over Persia (480 BC) — a shift from the stylized optimism of the archaic world to the heroic realism of the classical. A new era is dawning.
              </p>
            </div>
          </div>

          {/* Bronze Statue of Zeus or Poseidon */}
          <div style={{ marginBottom: '50px' }}>
            <h3 style={{ fontSize: '1.4em', fontWeight: '600', marginBottom: '10px', color: '#1f2937' }}>
              Bronze Statue of Zeus or Poseidon (c. 460 BC)
            </h3>
            <p style={{ fontSize: '0.95em', color: '#666', marginBottom: '15px' }}>
              <strong>Period:</strong> Early Classical ("Severe Style") | <strong>Material:</strong> Bronze, from the sea off Cape Artemision
            </p>

            <div style={{ background: '#f0f9ff', padding: '15px', borderRadius: '8px', marginBottom: '15px', textAlign: 'center' }}>
              <p style={{ color: '#666', fontStyle: 'italic', marginBottom: '10px' }}>
                [Image: Bronze statue showing god in dynamic pose, about to hurl thunderbolt or trident]
              </p>
              <p style={{ color: '#999', fontSize: '0.9em' }}>Images: /images/zeus_bronze.jpg and /images/zeus_bronze2.jpg</p>
            </div>

            <p style={{ lineHeight: '1.8', color: '#333', marginBottom: '10px' }}>
              One of the few surviving original Greek bronzes (most others were melted down for reuse).
            </p>

            <ul style={{ marginLeft: '20px', marginBottom: '15px', color: '#333', lineHeight: '1.8' }}>
              <li>The god is shown mid-action — hurling a thunderbolt (if Zeus) or trident (if Poseidon)</li>
              <li>Perfect balance of motion and stillness: weight distributed dynamically across the body</li>
              <li>Musculature rendered in motion with perfect anatomical understanding</li>
              <li>Energy captured at its peak</li>
            </ul>

            <div style={{ background: '#fff7d1', padding: '15px', borderRadius: '8px', marginBottom: '15px', borderLeft: '4px solid #f59e0b' }}>
              <p style={{ color: '#92400e', lineHeight: '1.6' }}>
                <strong>💭 Importance:</strong> This is the breakthrough of true naturalism. It marks the Greek ideal of the heroic, divine human form — rational, measured, and powerful.
              </p>
            </div>
          </div>

          {/* Classical Grave Stele */}
          <div style={{ marginBottom: '50px' }}>
            <h3 style={{ fontSize: '1.4em', fontWeight: '600', marginBottom: '10px', color: '#1f2937' }}>
              Classical Grave Stele (c. 420–400 BC)
            </h3>
            <p style={{ fontSize: '0.95em', color: '#666', marginBottom: '15px' }}>
              <strong>Period:</strong> High Classical | <strong>Material:</strong> Marble
            </p>

            <div style={{ background: '#f0f9ff', padding: '15px', borderRadius: '8px', marginBottom: '15px', textAlign: 'center' }}>
              <p style={{ color: '#666', fontStyle: 'italic', marginBottom: '10px' }}>
                [Image: Funerary relief showing farewell between family members with noble, restrained poses]
              </p>
              <p style={{ color: '#999', fontSize: '0.9em' }}>Image: /images/classical_grave_stele.jpg</p>
            </div>

            <p style={{ lineHeight: '1.8', color: '#333', marginBottom: '10px' }}>
              A funerary relief showing farewell between family members — deeply human, yet restrained with figures that are noble, calm, and idealized.
            </p>

            <div style={{ background: '#fff7d1', padding: '15px', borderRadius: '8px', marginBottom: '15px', borderLeft: '4px solid #f59e0b' }}>
              <p style={{ color: '#92400e', lineHeight: '1.6' }}>
                <strong>💭 Meaning:</strong> Greek art now conveys emotion through form, not expression. Drapery is fluid, anatomy subtle — you can feel weight, grace, and humanity. This is the art of Periclean Athens — the same era as the Parthenon sculptures.
              </p>
            </div>
          </div>

          {/* Athena Parthenos */}
          <div style={{ marginBottom: '50px' }}>
            <h3 style={{ fontSize: '1.4em', fontWeight: '600', marginBottom: '10px', color: '#1f2937' }}>
              Athena Parthenos (Roman copy of Phidias' original, 5th c. BC)
            </h3>
            <p style={{ fontSize: '0.95em', color: '#666', marginBottom: '15px' }}>
              <strong>Period:</strong> Classical (original c. 440 BC) | <strong>Material:</strong> Marble copy of Phidias' gold-and-ivory original
            </p>

            <div style={{ background: '#f0f9ff', padding: '15px', borderRadius: '8px', marginBottom: '15px', textAlign: 'center' }}>
              <p style={{ color: '#666', fontStyle: 'italic', marginBottom: '10px' }}>
                [Image: Athena Parthenos - goddess figure with helmet, holding Nike, serene and idealized]
              </p>
              <p style={{ color: '#999', fontSize: '0.9em' }}>Image: /images/athena_parthenos.jpg</p>
            </div>

            <ul style={{ marginLeft: '20px', marginBottom: '15px', color: '#333', lineHeight: '1.8' }}>
              <li>The goddess Athena, patron of Athens</li>
              <li>Original by Phidias, stood inside the Parthenon</li>
              <li>Holds Nike (Victory) in her hand, serpent (Erichthonios) at her side, helmet crowned with sphinxes</li>
            </ul>

            <div style={{ background: '#fff7d1', padding: '15px', borderRadius: '8px', marginBottom: '15px', borderLeft: '4px solid #f59e0b' }}>
              <p style={{ color: '#92400e', lineHeight: '1.6' }}>
                <strong>💭 Importance:</strong> Represents the pinnacle of classical idealism: serene, balanced, divine beauty. Human perfection is equated with moral and civic excellence.
              </p>
            </div>
          </div>

          {/* Bronze Horse and Jockey */}
          <div style={{ marginBottom: '50px' }}>
            <h3 style={{ fontSize: '1.4em', fontWeight: '600', marginBottom: '10px', color: '#1f2937' }}>
              Bronze Horse and Jockey of Artemision (c. 140 BC)
            </h3>
            <p style={{ fontSize: '0.95em', color: '#666', marginBottom: '15px' }}>
              <strong>Period:</strong> Hellenistic Period | <strong>Material:</strong> Bronze (found in a shipwreck off Cape Artemision)
            </p>

            <div style={{ background: '#f0f9ff', padding: '15px', borderRadius: '8px', marginBottom: '15px', textAlign: 'center' }}>
              <p style={{ color: '#666', fontStyle: 'italic', marginBottom: '10px' }}>
                [Image: Bronze horse rearing with boy jockey leaning forward in dramatic, high-energy composition]
              </p>
              <p style={{ color: '#999', fontSize: '0.9em' }}>Image: /images/bronze_jockey_artemision.jpg</p>
            </div>

            <ul style={{ marginLeft: '20px', marginBottom: '15px', color: '#333', lineHeight: '1.8' }}>
              <li>A dramatic, high-energy composition: horse rearing, boy straining forward</li>
              <li>Captures movement, emotion, and tension like never before</li>
              <li>The boy's face — fear, focus, intensity — vividly human</li>
            </ul>

            <div style={{ background: '#fff7d1', padding: '15px', borderRadius: '8px', marginBottom: '15px', borderLeft: '4px solid #f59e0b' }}>
              <p style={{ color: '#92400e', lineHeight: '1.6' }}>
                <strong>💭 Meaning:</strong> This is the Hellenistic revolution — art becomes emotional, theatrical, and dynamic. It celebrates individuality, not ideal abstraction.
              </p>
            </div>
          </div>

          {/* Bronze Athlete */}
          <div style={{ marginBottom: '50px' }}>
            <h3 style={{ fontSize: '1.4em', fontWeight: '600', marginBottom: '10px', color: '#1f2937' }}>
              Bronze Statue of an Athlete (c. 340 BC)
            </h3>
            <p style={{ fontSize: '0.95em', color: '#666', marginBottom: '15px' }}>
              <strong>Period:</strong> Late Classical | <strong>Material:</strong> Bronze (found in shipwreck off Antikythera island)
            </p>

            <div style={{ background: '#f0f9ff', padding: '15px', borderRadius: '8px', marginBottom: '15px', textAlign: 'center' }}>
              <p style={{ color: '#666', fontStyle: 'italic', marginBottom: '10px' }}>
                [Image: Bronze athlete with graceful contrapposto, poised arm gesture, realistic anatomy]
              </p>
              <p style={{ color: '#999', fontSize: '0.9em' }}>Image: /images/bronze_athlete.jpg</p>
            </div>

            <p style={{ lineHeight: '1.8', color: '#333', marginBottom: '10px' }}>
              Likely represents a hero or athlete (possibly Perseus holding Medusa's head, or Paris with the apple).
            </p>

            <ul style={{ marginLeft: '20px', marginBottom: '15px', color: '#333', lineHeight: '1.8' }}>
              <li>Graceful contrapposto (weight shift) and poised arm gesture</li>
              <li>Realistic anatomy and psychological depth</li>
              <li>Embodies Praxiteles' and Lysippos' innovations — slender proportions, natural poses</li>
            </ul>

            <div style={{ background: '#fff7d1', padding: '15px', borderRadius: '8px', marginBottom: '15px', borderLeft: '4px solid #f59e0b' }}>
              <p style={{ color: '#92400e', lineHeight: '1.6' }}>
                <strong>💭 Importance:</strong> The body is no longer divine and static — it breathes, moves, and thinks. This represents the pinnacle of late classical and early Hellenistic artistry.
              </p>
            </div>
          </div>
        </section>

        {/* Legacy */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontSize: '1.8em', fontWeight: 'bold', marginBottom: '15px', borderBottom: '2px solid #3b82f6', paddingBottom: '10px' }}>
            Legacy
          </h2>
          <p style={{ lineHeight: '1.8', color: '#333', marginBottom: '15px' }}>
            Greek sculptural principles of harmony, proportion, and idealized beauty fundamentally shaped Western art traditions. From the Renaissance masters who studied ancient Greek works to contemporary artists, the influence persists. Museums worldwide house Greek sculptures, and their principles continue to be taught in art schools.
          </p>
          <p style={{ lineHeight: '1.8', color: '#333', marginBottom: '15px' }}>
            The evolution from rigid geometric forms to naturalistic, emotionally expressive sculptures demonstrates how artists pushed boundaries and refined techniques over centuries. This journey reflects humanity's changing understanding of beauty, the human form, and artistic expression.
          </p>
          <p style={{ lineHeight: '1.8', color: '#333', marginBottom: '15px' }}>
            Whether viewing a simple geometric amphora, the austere beauty of a kouros, or the dynamic energy of a Hellenistic bronze, we see the story of how Greek artists systematically learned to capture human experience in stone and bronze — a legacy that continues to inspire and move us today.
          </p>
        </section>

        {/* Footer */}
        <section style={{ marginTop: '60px', paddingTop: '30px', borderTop: '1px solid #e4e4e4', textAlign: 'center', color: '#999' }}>
          <p>All sculpture examples in this article are from museum collections and archaeological finds that chronicle Greece's artistic evolution.</p>
        </section>
      </article>
    </main>
  );
}
