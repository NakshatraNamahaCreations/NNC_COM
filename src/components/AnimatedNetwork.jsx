"use client";

import { useEffect, useRef } from "react";

/**
 * AnimatedNetwork
 * - Lightweight canvas particle network with mouse interaction
 * - Props:
 *   color: line/dot color (default rgba(255,255,255,.9))
 *   bg: fallback background (CSS color or transparent)
 *   density: number of points per 10,000 px^2 (default 0.06)
 *   maxLineDist: px distance to draw lines (default 140)
 *   dotSize: base dot radius (default 2)
 *   className: wrapper class for positioning
 */
export default function AnimatedNetwork({
  color = "rgba(255,255,255,.9)",
  bg = "transparent",
  density = 0.06,
  maxLineDist = 140,
  dotSize = 2,
  className = "",
}) {
  const canvasRef = useRef(null);
  const ctxRef = useRef(null);
  const pointsRef = useRef([]);
  const mouseRef = useRef({ x: null, y: null, active: false });
  const rafRef = useRef(null);
  const dprRef = useRef(1);

  const setup = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    ctxRef.current = ctx;

    // device pixel ratio for crispness
    const dpr = Math.max(1, Math.min(2, window.devicePixelRatio || 1));
    dprRef.current = dpr;

    const rect = canvas.parentElement.getBoundingClientRect();
    canvas.style.width = rect.width + "px";
    canvas.style.height = rect.height + "px";
    canvas.width = Math.floor(rect.width * dpr);
    canvas.height = Math.floor(rect.height * dpr);

    ctx.scale(dpr, dpr);
    ctx.fillStyle = bg;
    ctx.fillRect(0, 0, rect.width, rect.height);

    // build points based on area
    const area = rect.width * rect.height;
    const count = Math.max(20, Math.floor((area / 10000) * density));
    pointsRef.current = new Array(count).fill(0).map(() => ({
      x: Math.random() * rect.width,
      y: Math.random() * rect.height,
      vx: (Math.random() - 0.5) * 0.6, // gentle drift
      vy: (Math.random() - 0.5) * 0.6,
    }));
  };

  const draw = () => {
    const canvas = canvasRef.current;
    const ctx = ctxRef.current;
    if (!canvas || !ctx) return;

    const rect = canvas.getBoundingClientRect();
    const w = rect.width;
    const h = rect.height;
    const pts = pointsRef.current;
    const { x: mx, y: my, active } = mouseRef.current;

    ctx.clearRect(0, 0, w, h);

    // move points (with a little mouse attraction)
    for (let p of pts) {
      if (active && mx != null) {
        const dx = mx - p.x;
        const dy = my - p.y;
        const dist2 = dx * dx + dy * dy;
        if (dist2 < 20000) {
          const f = 20000 / Math.max(6000, dist2); // soften
          p.vx += (dx / 20000) * f;
          p.vy += (dy / 20000) * f;
        }
      }

      p.x += p.vx;
      p.y += p.vy;

      // subtle damping
      p.vx *= 0.98;
      p.vy *= 0.98;

      // bounce at edges
      if (p.x <= 0 || p.x >= w) p.vx *= -1;
      if (p.y <= 0 || p.y >= h) p.vy *= -1;
      if (p.x < 0) p.x = 0;
      if (p.x > w) p.x = w;
      if (p.y < 0) p.y = 0;
      if (p.y > h) p.y = h;
    }

    // lines
    ctx.lineWidth = 1;
    for (let i = 0; i < pts.length; i++) {
      for (let j = i + 1; j < pts.length; j++) {
        const dx = pts[i].x - pts[j].x;
        const dy = pts[i].y - pts[j].y;
        const d = Math.hypot(dx, dy);
        if (d < maxLineDist) {
          const alpha = 1 - d / maxLineDist;
          ctx.strokeStyle = color.replace(/rgba?\(([^)]+)\)/, (m, inner) => {
            // if rgba is given, keep; if rgb, add alpha; if plain hex/name, fallback
            if (color.startsWith("rgba")) return `rgba(${inner.split(",").slice(0,3).join(",")},${alpha.toFixed(3)})`;
            if (color.startsWith("rgb"))  return `rgba(${inner},${alpha.toFixed(3)})`;
            return `rgba(255,255,255,${alpha.toFixed(3)})`;
          });
          ctx.beginPath();
          ctx.moveTo(pts[i].x, pts[i].y);
          ctx.lineTo(pts[j].x, pts[j].y);
          ctx.stroke();
        }
      }
    }

    // dots
    ctx.fillStyle = color;
    for (let p of pts) {
      ctx.beginPath();
      ctx.arc(p.x, p.y, dotSize, 0, Math.PI * 2);
      ctx.fill();
    }

    rafRef.current = requestAnimationFrame(draw);
  };

  useEffect(() => {
    setup();
    draw();

    const onResize = () => {
      cancelAnimationFrame(rafRef.current);
      setup();
      draw();
    };
    const onMove = (e) => {
      const rect = canvasRef.current.parentElement.getBoundingClientRect();
      mouseRef.current.x = e.clientX - rect.left;
      mouseRef.current.y = e.clientY - rect.top;
      mouseRef.current.active = true;
    };
    const onLeave = () => {
      mouseRef.current.active = false;
    };

    window.addEventListener("resize", onResize);
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseleave", onLeave);

    return () => {
      window.removeEventListener("resize", onResize);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
      cancelAnimationFrame(rafRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={className} style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
      <canvas ref={canvasRef} style={{ width: "100%", height: "100%", display: "block" }} />
    </div>
  );
}
