import { useEffect, useRef, useCallback } from "react";

/**
 * Pure CSS + minimal JS light effects for solar theme.
 * All animations use CSS transforms/opacity (GPU-composited) for 95+ performance.
 */

/* Animated sun rays radiating from a point — pure CSS */
export const SunRays = ({ className = "" }: { className?: string }) => (
  <div className={`pointer-events-none absolute ${className}`} aria-hidden="true">
    <div className="sun-rays-container">
      {[...Array(12)].map((_, i) => (
        <div
          key={i}
          className="sun-ray"
          style={{
            transform: `rotate(${i * 30}deg)`,
            animationDelay: `${i * 0.15}s`,
          }}
        />
      ))}
    </div>
  </div>
);

/* Floating light particles — pure CSS animated */
export const LightParticles = ({ count = 20, className = "" }: { count?: number; className?: string }) => (
  <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden="true">
    {[...Array(count)].map((_, i) => (
      <div
        key={i}
        className="light-particle"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          width: `${2 + Math.random() * 4}px`,
          height: `${2 + Math.random() * 4}px`,
          animationDelay: `${Math.random() * 8}s`,
          animationDuration: `${6 + Math.random() * 8}s`,
        }}
      />
    ))}
  </div>
);

/* Diagonal light beams sweeping across */
export const LightBeams = ({ className = "" }: { className?: string }) => (
  <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden="true">
    <div className="light-beam light-beam-1" />
    <div className="light-beam light-beam-2" />
    <div className="light-beam light-beam-3" />
  </div>
);

/* Interactive mouse-follow glow — uses requestAnimationFrame for smooth 60fps */
export const MouseGlow = ({ className = "" }: { className?: string }) => {
  const glowRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>(0);
  const targetRef = useRef({ x: 0, y: 0 });
  const currentRef = useRef({ x: 0, y: 0 });

  const animate = useCallback(() => {
    currentRef.current.x += (targetRef.current.x - currentRef.current.x) * 0.08;
    currentRef.current.y += (targetRef.current.y - currentRef.current.y) * 0.08;
    if (glowRef.current) {
      glowRef.current.style.transform = `translate(${currentRef.current.x}px, ${currentRef.current.y}px) translate(-50%, -50%)`;
    }
    rafRef.current = requestAnimationFrame(animate);
  }, []);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      const rect = glowRef.current?.parentElement?.getBoundingClientRect();
      if (rect) {
        targetRef.current.x = e.clientX - rect.left;
        targetRef.current.y = e.clientY - rect.top;
      }
    };

    window.addEventListener("mousemove", handleMove, { passive: true });
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      cancelAnimationFrame(rafRef.current);
    };
  }, [animate]);

  return (
    <div
      ref={glowRef}
      className={`pointer-events-none absolute w-[500px] h-[500px] rounded-full opacity-20 blur-[120px] will-change-transform ${className}`}
      style={{ background: "radial-gradient(circle, hsl(38 92% 50% / 0.4), transparent 70%)" }}
      aria-hidden="true"
    />
  );
};

/* Horizontal light streak — CSS only */
export const LightStreak = ({ className = "" }: { className?: string }) => (
  <div className={`pointer-events-none absolute overflow-hidden ${className}`} aria-hidden="true">
    <div className="light-streak" />
  </div>
);
