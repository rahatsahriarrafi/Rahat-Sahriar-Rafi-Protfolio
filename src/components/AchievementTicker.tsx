"use client";

import { useRef } from "react";

const achievementHighlights = [
  { value: "2nd", label: "Bangladesh · HI Cyber Con 2026", document: "/achieve-hicybercon-2026.jpg" },
  { value: "14th", label: "Global · 1,119 teams", document: "/hicybercon-certificate.png" },
  { value: "#8", label: "Personal BCS CTF rank", document: "/bcs-ctf-2026-certificate.png" },
  { value: "16th", label: "Student category · BCS CTF 2026", document: "/achieve-bcs-ctf.jpg" },
  { value: "11th / 226", label: "BUP CSE Fest CTF · 14 solves · Onsite finalist", document: "/bup-cse-fest-2026-certificate.png" },
  { value: "62nd / 545", label: "BDSec CTF 2026 · 1,640 points", document: "/bdsec-ctf-2026-result.png" },
  { value: "100% · Merit", label: "CBTP exam · 60/60", document: "/cbtp-certificate.png" },
  { value: "Organizer", label: "Cyber Security Awareness Day 2026", document: "/csad-2026-certificate.png" },
];

export function AchievementTicker() {
  const trackRef = useRef<HTMLDivElement>(null);

  const setPlaybackRate = (rate: number) => {
    const animation = trackRef.current?.getAnimations()[0];
    if (!animation) return;

    const smoothAnimation = animation as Animation & {
      updatePlaybackRate?: (playbackRate: number) => void;
    };
    if (smoothAnimation.updatePlaybackRate) {
      smoothAnimation.updatePlaybackRate(rate);
    } else {
      animation.playbackRate = rate;
    }
  };

  return (
    <section
      className="proof-strip"
      aria-label="Achievement highlights"
      onPointerEnter={() => setPlaybackRate(0.7)}
      onPointerLeave={() => setPlaybackRate(1)}
    >
      <div className="achievement-marquee">
        <div className="achievement-marquee__track" ref={trackRef}>
          {[0, 1].map((copy) => (
            <div className="achievement-marquee__group" key={copy} aria-hidden={copy === 1}>
              {achievementHighlights.map((item) => (
                <a
                  className="achievement-marquee__item"
                  href={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/document?file=${encodeURIComponent(item.document.slice(1))}&title=${encodeURIComponent(item.label)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open supporting document for ${item.label}`}
                  tabIndex={copy === 1 ? -1 : 0}
                  key={`${copy}-${item.value}`}
                >
                  <strong>{item.value}</strong>
                  <p>{item.label}</p>
                </a>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
