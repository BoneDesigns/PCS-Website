import { motion, useReducedMotion } from "framer-motion";

/**
 * Generic scroll-reveal wrapper. Keeps animation timing consistent
 * across the site instead of repeating motion props everywhere.
 * Respects prefers-reduced-motion: when set, content appears with no
 * movement (and effectively instantly via the global CSS backstop).
 */
export default function Reveal({
  children,
  delay = 0,
  y = 28,
  duration = 0.7,
  className = "",
  as = "div",
}) {
  const reduce = useReducedMotion();
  const Component = motion[as] || motion.div;

  return (
    <Component
      initial={{ opacity: 0, y: reduce ? 0 : y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: reduce ? 0 : duration,
        delay: reduce ? 0 : delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={className}
    >
      {children}
    </Component>
  );
}
