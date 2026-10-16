import { useEffect, useRef } from "react";

/**
 * ScrollReveal — Custom hook that adds "revealed" class to elements
 * when they enter the viewport using the IntersectionObserver API.
 * 
 * Usage: Wrap any element with the ref from this hook and give it
 * a class like "reveal", "reveal-left", "reveal-right", or "reveal-scale".
 * The hook adds "revealed" when the element scrolls into view.
 *
 * Respects prefers-reduced-motion — skips animation if user prefers reduced motion.
 */
function useScrollReveal(threshold = 0.15) {
  const ref = useRef(null);

  useEffect(() => {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const node = ref.current;
    if (!node) return;

    // If reduced motion is preferred, reveal immediately
    if (prefersReducedMotion) {
      node.classList.add("revealed");
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            observer.unobserve(entry.target); // Only animate once
          }
        });
      },
      { threshold }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, [threshold]);

  return ref;
}

export default useScrollReveal;
