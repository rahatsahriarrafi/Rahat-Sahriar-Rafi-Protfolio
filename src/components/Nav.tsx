"use client";

import { Menu, X, ArrowUpRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { nav, profile } from "@/data/content";
import { useMotion } from "./MotionProvider";

export function Nav() {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const activeSectionRef = useRef("");
  const progressRef = useRef<HTMLDivElement>(null);
  const progressFillRef = useRef<HTMLSpanElement>(null);
  const { enabled, toggle } = useMotion();

  useEffect(() => {
    let frame = 0;
    const updatePagePosition = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        frame = 0;
        const root = document.documentElement;
        const scrollableHeight = root.scrollHeight - window.innerHeight;
        const progress = scrollableHeight <= 0
          ? 0
          : Math.min(100, Math.max(0, (window.scrollY / scrollableHeight) * 100));
        if (progressFillRef.current) {
          progressFillRef.current.style.transform = `scaleX(${progress / 100})`;
        }
        progressRef.current?.setAttribute("aria-valuenow", String(Math.round(progress)));

        const atPageEnd = window.scrollY + window.innerHeight >= root.scrollHeight - 2;
        let current = atPageEnd ? nav[nav.length - 1].href.slice(1) : nav[0]?.href.slice(1) ?? "";

        if (!atPageEnd) {
          const navBottom = document.querySelector(".site-nav")?.getBoundingClientRect().bottom ?? 0;
          const marker = navBottom + 24;
          for (const item of nav) {
            const section = document.getElementById(item.href.slice(1));
            if (section && section.getBoundingClientRect().top <= marker) {
              current = section.id;
            }
          }
        }

        if (current !== activeSectionRef.current) {
          activeSectionRef.current = current;
          setActiveSection(current);
        }
      });
    };

    updatePagePosition();
    window.addEventListener("scroll", updatePagePosition, { passive: true });
    window.addEventListener("resize", updatePagePosition);
    return () => {
      window.removeEventListener("scroll", updatePagePosition);
      window.removeEventListener("resize", updatePagePosition);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <>
      <div
        ref={progressRef}
        className="scroll-progress"
        role="progressbar"
        aria-label="Page scroll progress"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={0}
      >
        <span ref={progressFillRef} />
      </div>

      <button
        type="button"
        className="motion-toggle"
        onClick={toggle}
        aria-pressed={enabled}
        aria-label={enabled ? "Motion on: pause animations" : "Motion off: enable animations"}
      >
        Motion {enabled ? "On" : "Off"}
      </button>

      <header className="site-nav">
        <a className="wordmark" href="#top" aria-label={profile.name}>
          {profile.name}
        </a>

        <nav className={`nav-links ${open ? "is-open" : ""}`} aria-label="Main navigation" id="main-nav">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={activeSection === item.href.slice(1) ? "is-active" : undefined}
              aria-current={activeSection === item.href.slice(1) ? "location" : undefined}
              onClick={() => {
                setOpen(false);
              }}
            >
              {item.label}
            </a>
          ))}
          <a
            className={`nav-contact ${activeSection === "contact" ? "is-active" : ""}`}
            href="#contact"
            aria-current={activeSection === "contact" ? "location" : undefined}
            onClick={() => {
              setOpen(false);
            }}
          >
            Let&apos;s talk <ArrowUpRight size={14} />
          </a>
        </nav>

        <button
          type="button"
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="main-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span>Menu</span>
          {open ? <X size={16} /> : <Menu size={16} />}
        </button>
      </header>
    </>
  );
}
