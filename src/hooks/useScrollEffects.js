import { useCallback, useEffect, useRef, useState } from 'react';

/**
 * Reveals an element once it scrolls into view. Fires a single time —
 * re-entering the viewport does not replay the animation.
 */
export const useReveal = ({ threshold = 0.15, rootMargin = '0px 0px -8% 0px' } = {}) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (typeof IntersectionObserver === 'undefined') {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return [ref, visible];
};

/**
 * Writes the cursor position into --mx/--my so `.card--spotlight` can
 * render a radial highlight that follows the pointer.
 */
export const useSpotlight = () => {
  const ref = useRef(null);

  const onMouseMove = useCallback((event) => {
    const node = ref.current;
    if (!node) return;
    const rect = node.getBoundingClientRect();
    node.style.setProperty('--mx', `${event.clientX - rect.left}px`);
    node.style.setProperty('--my', `${event.clientY - rect.top}px`);
  }, []);

  return { ref, onMouseMove };
};

/** Fraction of the page scrolled, 0–1, for the nav progress bar. */
export const useScrollProgress = () => {
  const [progress, setProgress] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let frame = null;

    const measure = () => {
      frame = null;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(window.scrollY / max, 1) : 0);
      setScrolled(window.scrollY > 24);
    };

    const onScroll = () => {
      if (frame === null) frame = window.requestAnimationFrame(measure);
    };

    measure();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    return () => {
      if (frame !== null) window.cancelAnimationFrame(frame);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return { progress, scrolled };
};

/** Returns the id of the section currently occupying the viewport. */
export const useActiveSection = (ids) => {
  const [active, setActive] = useState(ids[0]);

  useEffect(() => {
    const nodes = ids.map((id) => document.getElementById(id)).filter(Boolean);
    if (!nodes.length || typeof IntersectionObserver === 'undefined') return;

    const observer = new IntersectionObserver(
      (entries) => {
        const inView = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (inView) setActive(inView.target.id);
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: [0, 0.25, 0.5, 1] }
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, [ids]);

  return active;
};
