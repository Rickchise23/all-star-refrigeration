import { useState, useEffect, useRef, useCallback } from "react";

/** Spring physics — k=290 b=30 = subtle professional bounce */
export function useSpring(target, config = { k: 290, b: 30 }) {
  const { k, b } = config;
  const ref = useRef({ pos: target, v: 0, dest: target });
  const [pos, setPos] = useState(target);
  const raf = useRef(0);

  useEffect(() => {
    ref.current.dest = target;
    const step = () => {
      const s = ref.current;
      const dt = 4 / 1000;
      const F = -k * (s.pos - s.dest);
      const D = -b * s.v;
      s.v += (F + D) * dt;
      s.pos += s.v * dt;
      if (Math.abs(s.pos - s.dest) < 0.01 && Math.abs(s.v) < 0.01) {
        s.pos = s.dest;
        s.v = 0;
        setPos(s.dest);
        return;
      }
      setPos(s.pos);
      raf.current = requestAnimationFrame(step);
    };
    raf.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf.current);
  }, [target, k, b]);

  return pos;
}

const MAG = { k: 320, b: 28 };
const SCALE = { k: 280, b: 26 };
const REVEAL_Y = { k: 180, b: 26 };
const REVEAL_OP = { k: 160, b: 28 };

/** Cursor-tracking wrapper — gentle tilt + hover scale */
export function MagneticCard({ children, className = "", style }) {
  const cardRef = useRef(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);

  const springX = useSpring(offset.x, MAG);
  const springY = useSpring(offset.y, MAG);
  const springScale = useSpring(hovering ? 1.018 : 1, SCALE);

  const handleMove = useCallback((e) => {
    if (!cardRef.current) return;
    const r = cardRef.current.getBoundingClientRect();
    setOffset({
      x: (e.clientX - r.left - r.width / 2) / 20,
      y: (e.clientY - r.top - r.height / 2) / 20,
    });
  }, []);

  return (
    <div
      ref={cardRef}
      className={className}
      onMouseMove={handleMove}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => {
        setHovering(false);
        setOffset({ x: 0, y: 0 });
      }}
      style={{
        ...style,
        transform: `translate(${springX}px, ${springY}px) scale(${springScale})`,
        willChange: "transform",
      }}
    >
      {children}
    </div>
  );
}

/** Scroll-triggered spring entrance; optional stagger via `delay` (ms) */
export function Reveal({ children, delay = 0, style: extraStyle, className }) {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setTimeout(() => setVisible(true), delay);
          obs.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [delay]);

  const y = useSpring(visible ? 0 : 24, REVEAL_Y);
  const opacity = useSpring(visible ? 1 : 0, REVEAL_OP);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        transform: `translateY(${y}px)`,
        opacity,
        willChange: "transform, opacity",
        ...extraStyle,
      }}
    >
      {children}
    </div>
  );
}
