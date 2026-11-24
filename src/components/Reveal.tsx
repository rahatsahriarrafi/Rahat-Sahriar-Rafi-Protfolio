"use client";

import { useEffect, useRef, useState } from "react";
import { useMotion } from "./MotionProvider";

export function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const elementRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const { enabled } = useMotion();

  useEffect(() => {
    if (!enabled) {
      setVisible(true);
      return;
    }

    const element = elementRef.current;
    if (!element || !("IntersectionObserver" in window)) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: "-10% 0px" },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [enabled]);

  return (
    <div
      ref={elementRef}
      className={`${className ?? ""} reveal${visible || !enabled ? " is-visible" : ""}`}
      style={{ transitionDelay: `${delay}s` }}
    >
      {children}
    </div>
  );
}
