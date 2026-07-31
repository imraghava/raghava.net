import React from 'react';
import { useReveal } from '../hooks/useScrollEffects';

/**
 * Wraps children in a scroll-triggered fade-and-rise.
 * `delay` (ms) staggers siblings within a group.
 */
const Reveal = ({ children, delay = 0, className = '', as: Tag = 'div', ...rest }) => {
  const [ref, visible] = useReveal();

  return (
    <Tag
      ref={ref}
      className={`reveal ${visible ? 'is-visible' : ''} ${className}`}
      style={{ '--reveal-delay': `${delay}ms` }}
      {...rest}
    >
      {children}
    </Tag>
  );
};

export default Reveal;
