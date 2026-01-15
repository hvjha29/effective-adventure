'use client';

import Image from 'next/image';

export default function Figure({
  src,
  alt,
  caption,
  align = 'left',
}: {
  src: string;
  alt?: string;
  caption?: string;
  align?: 'left' | 'right' | 'center';
}) {
  const floatStyle: React.CSSProperties =
    align === 'right'
      ? { float: 'right' as const, margin: '0 0 1rem 1rem' }
      : align === 'left'
        ? { float: 'left' as const, margin: '0 1rem 1rem 0' }
        : { display: 'block', margin: '0 auto 1rem auto' };

  return (
    <figure style={{ margin: '0 0 1.25rem 0', overflow: 'auto' }}>
      <div style={floatStyle}>
        <Image src={src} alt={alt || ''} width={800} height={500} style={{ borderRadius: 8 }} />
      </div>
      {caption && <figcaption style={{ fontSize: '0.95rem', color: '#666' }}>{caption}</figcaption>}
    </figure>
  );
}
