import React from 'react';
import Reveal from './Reveal';

/**
 * Shared section header: mono eyebrow, display title, optional lede.
 * Keeps vertical rhythm identical across every section.
 */
const SectionHeading = ({ eyebrow, title, lede, align = 'center' }) => {
  const alignment = align === 'left' ? 'text-left' : 'text-center mx-auto';

  return (
    <header className={`max-w-2xl ${alignment}`}>
      <Reveal>
        <p className="eyebrow">{eyebrow}</p>
      </Reveal>

      <Reveal delay={80}>
        <h2 className="mt-4 font-display text-3xl font-bold tracking-tightest text-ink sm:text-4xl md:text-[2.75rem]">
          {title}
        </h2>
      </Reveal>

      {lede && (
        <Reveal delay={160}>
          <p className="mt-5 text-base leading-relaxed text-muted">{lede}</p>
        </Reveal>
      )}

      <Reveal delay={220}>
        <div className={`divider-glow mt-8 h-px w-24 ${align === 'left' ? '' : 'mx-auto'}`} />
      </Reveal>
    </header>
  );
};

export default SectionHeading;
