"use client";

import { useEffect, useRef } from "react";

type TrailPoint = { x: number; y: number; t: number };
type SoftOrb = {
  x: number;
  y: number;
  size: number;
  life: number;
  maxLife: number;
  drift: number;
};
type Ripple = { x: number; y: number; life: number; maxLife: number };

const TRAIL_DURATION_MS = 720;
const TRAIL_INTERVAL_MS = 24;
const MAX_TRAIL = 28;
const MAX_ORBS = 12;

export function CursorParticles({ enabled }: { enabled: boolean }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const trailRef = useRef<TrailPoint[]>([]);
  const orbsRef = useRef<SoftOrb[]>([]);
  const ripplesRef = useRef<Ripple[]>([]);
  const mouseRef = useRef({ x: -200, y: -200, active: false });
  const displayRef = useRef({ x: -200, y: -200 });
  const lastTrailRef = useRef(0);
  const rafRef = useRef(0);

  useEffect(() => {
    if (!enabled) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(window.innerWidth * dpr);
      canvas.height = Math.floor(window.innerHeight * dpr);
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const addOrb = (x: number, y: number) => {
      if (orbsRef.current.length >= MAX_ORBS) {
        orbsRef.current.shift();
      }
      orbsRef.current.push({
        x: x + (Math.random() - 0.5) * 10,
        y: y + (Math.random() - 0.5) * 10,
        size: 10 + Math.random() * 14,
        life: 900 + Math.random() * 400,
        maxLife: 900 + Math.random() * 400,
        drift: (Math.random() - 0.5) * 0.35,
      });
    };

    const onMove = (e: MouseEvent) => {
      const now = performance.now();
      mouseRef.current = { x: e.clientX, y: e.clientY, active: true };

      if (now - lastTrailRef.current >= TRAIL_INTERVAL_MS) {
        lastTrailRef.current = now;
        trailRef.current.push({ x: e.clientX, y: e.clientY, t: now });
        if (trailRef.current.length > MAX_TRAIL) {
          trailRef.current.shift();
        }
        if (Math.random() < 0.28) addOrb(e.clientX, e.clientY);
      }
    };

    const onLeave = () => {
      mouseRef.current.active = false;
    };

    const onDown = (e: MouseEvent) => {
      ripplesRef.current.push({ x: e.clientX, y: e.clientY, life: 0, maxLife: 880 });
      if (ripplesRef.current.length > 4) ripplesRef.current.shift();
    };

    const drawAura = (x: number, y: number, time: number) => {
      const breath = 1 + Math.sin(time / 900) * 0.06;
      const r = 44 * breath;

      const outer = ctx.createRadialGradient(x, y, 0, x, y, r);
      outer.addColorStop(0, "rgba(224, 242, 254, 0.42)");
      outer.addColorStop(0.45, "rgba(186, 230, 253, 0.18)");
      outer.addColorStop(1, "rgba(186, 230, 253, 0)");
      ctx.fillStyle = outer;
      ctx.beginPath();
      ctx.arc(x, y, r, 0, Math.PI * 2);
      ctx.fill();

      const inner = ctx.createRadialGradient(x, y, 0, x, y, 10);
      inner.addColorStop(0, "rgba(255, 255, 255, 0.35)");
      inner.addColorStop(1, "rgba(125, 211, 252, 0)");
      ctx.fillStyle = inner;
      ctx.beginPath();
      ctx.arc(x, y, 10, 0, Math.PI * 2);
      ctx.fill();
    };

    const drawTrail = (now: number) => {
      const points = trailRef.current;
      for (let i = 0; i < points.length; i++) {
        const p = points[i];
        const age = (now - p.t) / TRAIL_DURATION_MS;
        if (age >= 1) continue;

        const fade = (1 - age) ** 1.6;
        const radius = 6 + fade * 22;
        const alpha = fade * 0.14;

        const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, radius);
        grad.addColorStop(0, `rgba(224, 242, 254, ${alpha})`);
        grad.addColorStop(0.55, `rgba(186, 230, 253, ${alpha * 0.55})`);
        grad.addColorStop(1, "rgba(186, 230, 253, 0)");
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(p.x, p.y, radius, 0, Math.PI * 2);
        ctx.fill();
      }

      trailRef.current = points.filter((p) => now - p.t < TRAIL_DURATION_MS);
    };

    const drawOrbs = () => {
      const next: SoftOrb[] = [];
      for (const orb of orbsRef.current) {
        orb.life -= 16;
        if (orb.life <= 0) continue;

        const t = orb.life / orb.maxLife;
        const alpha = Math.sin(t * Math.PI) * 0.22;
        const size = orb.size * (1 + (1 - t) * 0.35);

        orb.y -= 0.28;
        orb.x += orb.drift;

        const grad = ctx.createRadialGradient(orb.x, orb.y, 0, orb.x, orb.y, size);
        grad.addColorStop(0, `rgba(255, 255, 255, ${alpha * 0.7})`);
        grad.addColorStop(0.35, `rgba(186, 230, 253, ${alpha})`);
        grad.addColorStop(1, "rgba(125, 211, 252, 0)");
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(orb.x, orb.y, size, 0, Math.PI * 2);
        ctx.fill();

        next.push(orb);
      }
      orbsRef.current = next;
    };

    const drawRipples = () => {
      const next: Ripple[] = [];
      for (const ripple of ripplesRef.current) {
        ripple.life += 16;
        if (ripple.life >= ripple.maxLife) continue;

        const t = ripple.life / ripple.maxLife;
        const radius = 8 + t * 52;
        const alpha = (1 - t) ** 2 * 0.28;

        ctx.strokeStyle = `rgba(125, 211, 252, ${alpha})`;
        ctx.lineWidth = 1.5 * (1 - t * 0.5);
        ctx.beginPath();
        ctx.arc(ripple.x, ripple.y, radius, 0, Math.PI * 2);
        ctx.stroke();

        const fill = ctx.createRadialGradient(
          ripple.x,
          ripple.y,
          radius * 0.7,
          ripple.x,
          ripple.y,
          radius
        );
        fill.addColorStop(0, "rgba(224, 242, 254, 0)");
        fill.addColorStop(1, `rgba(186, 230, 253, ${alpha * 0.35})`);
        ctx.fillStyle = fill;
        ctx.beginPath();
        ctx.arc(ripple.x, ripple.y, radius, 0, Math.PI * 2);
        ctx.fill();

        next.push(ripple);
      }
      ripplesRef.current = next;
    };

    const loop = (now: number) => {
      const { x, y, active } = mouseRef.current;
      const display = displayRef.current;

      if (active) {
        display.x += (x - display.x) * 0.14;
        display.y += (y - display.y) * 0.14;
      }

      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

      drawTrail(now);
      drawOrbs();
      drawRipples();

      if (active) drawAura(display.x, display.y, now);

      rafRef.current = requestAnimationFrame(loop);
    };

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mousedown", onDown, { passive: true });
    document.documentElement.addEventListener("mouseleave", onLeave);
    rafRef.current = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onDown);
      document.documentElement.removeEventListener("mouseleave", onLeave);
      trailRef.current = [];
      orbsRef.current = [];
      ripplesRef.current = [];
    };
  }, [enabled]);

  if (!enabled) return null;

  return <canvas ref={canvasRef} className="league-cursor-canvas" aria-hidden />;
}
