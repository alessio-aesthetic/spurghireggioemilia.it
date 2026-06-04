"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export function CustomCursor() {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!dot.current || !ring.current) return;

    const move = (event: MouseEvent) => {
      gsap.to(dot.current, { x: event.clientX, y: event.clientY, duration: 0.12 });
      gsap.to(ring.current, { x: event.clientX, y: event.clientY, duration: 0.32 });
    };

    const enter = () => {
      gsap.to(ring.current, { opacity: 1, scale: 1, duration: 0.25 });
      gsap.to(dot.current, { scale: 0.4, duration: 0.25 });
    };

    const leave = () => {
      gsap.to(ring.current, { opacity: 0, scale: 0.65, duration: 0.25 });
      gsap.to(dot.current, { scale: 1, duration: 0.25 });
    };

    window.addEventListener("mousemove", move);
    const interactive = document.querySelectorAll("a, button, summary, input, textarea");
    interactive.forEach((item) => {
      item.addEventListener("mouseenter", enter);
      item.addEventListener("mouseleave", leave);
    });

    return () => {
      window.removeEventListener("mousemove", move);
      interactive.forEach((item) => {
        item.removeEventListener("mouseenter", enter);
        item.removeEventListener("mouseleave", leave);
      });
    };
  }, []);

  return (
    <>
      <div ref={dot} className="custom-cursor" />
      <div ref={ring} className="custom-cursor-ring" />
    </>
  );
}
