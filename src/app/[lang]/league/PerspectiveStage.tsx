"use client";

import { useEffect, useRef, type ReactNode } from "react";

export function PerspectiveStage({
  children,
  enabled,
}: {
  children: ReactNode;
  enabled: boolean;
}) {
  const innerRef = useRef<HTMLDivElement>(null);
  const targetRef = useRef({ rotateX: 0, rotateY: 0 });
  const currentRef = useRef({ rotateX: 0, rotateY: 0 });
  const rafRef = useRef(0);

  useEffect(() => {
    if (!enabled) return;

    const onMove = (e: MouseEvent) => {
      const nx = (e.clientX / window.innerWidth - 0.5) * 2;
      const ny = (e.clientY / window.innerHeight - 0.5) * 2;
      targetRef.current = {
        rotateX: ny * 2.2,
        rotateY: -nx * 3,
      };
      if (!rafRef.current) {
        rafRef.current = requestAnimationFrame(tick);
      }
    };

    const tick = () => {
      const el = innerRef.current;
      if (!el) {
        rafRef.current = 0;
        return;
      }

      const ease = 0.08;
      currentRef.current.rotateX +=
        (targetRef.current.rotateX - currentRef.current.rotateX) * ease;
      currentRef.current.rotateY +=
        (targetRef.current.rotateY - currentRef.current.rotateY) * ease;

      const { rotateX, rotateY } = currentRef.current;
      el.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

      const settled =
        Math.abs(targetRef.current.rotateX - rotateX) < 0.02 &&
        Math.abs(targetRef.current.rotateY - rotateY) < 0.02;

      rafRef.current = settled ? 0 : requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(rafRef.current);
    };
  }, [enabled]);

  return (
    <div className="league-stage">
      <div ref={innerRef} className="league-stage-inner">
        {children}
      </div>
    </div>
  );
}
