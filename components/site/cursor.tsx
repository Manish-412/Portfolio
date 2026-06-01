"use client";

import { useEffect, useRef } from "react";

export function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const outlineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dot = dotRef.current;
    const outline = outlineRef.current;
    if (!dot || !outline) return;

    let raf = 0;
    let x = 0;
    let y = 0;
    let outlineX = 0;
    let outlineY = 0;

    const move = (event: MouseEvent) => {
      x = event.clientX;
      y = event.clientY;
    };

    const animate = () => {
      outlineX += (x - outlineX) * 0.12;
      outlineY += (y - outlineY) * 0.12;
      dot.style.transform = `translate3d(${x - 3}px, ${y - 3}px, 0)`;
      outline.style.transform = `translate3d(${outlineX - 16}px, ${outlineY - 16}px, 0)`;
      raf = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", move);
    raf = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", move);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot" />
      <div ref={outlineRef} className="cursor-outline" />
    </>
  );
}
