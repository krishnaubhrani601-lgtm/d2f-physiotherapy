import { useEffect, useRef } from "react";

/**
 * ScrollRevealWrapper — Component wrapper that applies scroll-reveal
 * animation to its children. Uses IntersectionObserver.
 *
 * Props:
 *  - className: additional CSS classes
 *  - direction: "up" | "left" | "right" | "scale" (animation direction)
 *  - delay: delay in ms before animation starts
 *  - threshold: visibility threshold (0-1) to trigger animation
 *  - children: elements to reveal
 */
function ScrollReveal({
  children,
  className = "",
  direction = "up",
  delay = 0,
  threshold = 0.15,
}) {
  const ref = useRef(null);

  // Map direction to CSS class
  const directionClass = {
    up: "reveal",
    left: "reveal-left",
    right: "reveal-right",
    scale: "reveal-scale",
  }[direction] || "reveal";

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const node = ref.current;
    if (!node) return;

    if (prefersReducedMotion) {
      node.classList.add("revealed");
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Apply delay if specified
            setTimeout(() => {
              entry.target.classList.add("revealed");
            }, delay);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [delay, threshold]);

  return (
    <div ref={ref} className={`${directionClass} ${className}`}>
      {children}
    </div>
  );
}

export default ScrollReveal;
