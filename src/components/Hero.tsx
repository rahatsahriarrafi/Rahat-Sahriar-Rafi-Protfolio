import Image from "next/image";
import { ArrowDown } from "lucide-react";
import { profile } from "@/data/content";
import { AchievementTicker } from "./AchievementTicker";

const socialLinks = [
  { label: "LinkedIn", href: profile.linkedin, icon: "linkedin" },
  { label: "GitHub", href: profile.github, icon: "github" },
  { label: "Facebook", href: "https://www.facebook.com/teamnullx", icon: "facebook" },
  { label: "YouTube", href: "https://www.youtube.com/@rahatsahriarrafi", icon: "youtube" },
  { label: "Email", href: `mailto:${profile.email}`, icon: "email" },
] as const;

function SocialIcon({ name }: { name: (typeof socialLinks)[number]["icon"] }) {
  if (name === "linkedin") {
    return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.35V9h3.414v1.561h.049c.476-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 .001-4.124 2.062 2.062 0 0 1-.001 4.124zM6.99 20.452H3.683V9H6.99v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>;
  }
  if (name === "github") {
    return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 .8a11.2 11.2 0 0 0-3.54 21.83c.56.1.76-.24.76-.54v-2.1c-3.1.67-3.76-1.32-3.76-1.32-.5-1.3-1.24-1.65-1.24-1.65-1.01-.69.08-.68.08-.68 1.12.08 1.7 1.15 1.7 1.15.99 1.69 2.6 1.2 3.23.92.1-.72.39-1.2.7-1.48-2.48-.28-5.09-1.24-5.09-5.52 0-1.22.44-2.22 1.15-3-.12-.28-.5-1.42.11-2.95 0 0 .94-.3 3.08 1.15a10.7 10.7 0 0 1 5.6 0c2.13-1.45 3.07-1.15 3.07-1.15.62 1.53.23 2.67.12 2.95.72.78 1.15 1.78 1.15 3 0 4.29-2.61 5.23-5.1 5.51.4.34.75 1 .75 2.03v3.14c0 .3.2.65.77.54A11.2 11.2 0 0 0 12 .8Z" /></svg>;
  }
  if (name === "facebook") {
    return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.05V9.4c0-3.03 1.79-4.7 4.54-4.7 1.31 0 2.68.24 2.68.24v2.97h-1.51c-1.49 0-1.95.93-1.95 1.88v2.27h3.32l-.53 3.49h-2.79V24C19.61 23.1 24 18.1 24 12.07Z" /></svg>;
  }
  if (name === "email") {
    return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ fill: "none" }} aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></svg>;
  }
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.55 3.6 12 3.6 12 3.6s-7.55 0-9.4.5A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.85.5 9.4.5 9.4.5s7.55 0 9.4-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8ZM9.6 15.7V8.3l6.3 3.7-6.3 3.7Z" /></svg>;
}

export function Hero() {
  const toolLogos: Record<string, string> = {
    "Nmap": "/tool-logos/nmap.png",
    "Metasploit": "/tool-logos/metasploit.svg",
    "Burp Suite": "/tool-logos/burpsuite.svg",
    "Wireshark": "/tool-logos/wireshark.svg",
    "SQLmap": "/tool-logos/sqlmap.svg",
    "Nuclei": "/tool-logos/nuclei.svg",
    "ZAP": "/tool-logos/zap.svg",
    "Netcat": "/tool-logos/netcat.svg",
    "Aircrack-ng": "/tool-logos/aircrack.svg",
    "Hydra": "/tool-logos/hydra.svg",
    "Hashcat": "/tool-logos/hashcat.svg",
    "John": "/tool-logos/john.svg",
    "Gobuster": "/tool-logos/gobuster.svg",
    "FFUF": "/tool-logos/ffuf.svg",
    "Nikto": "/tool-logos/nikto.svg",
    "Responder": "/tool-logos/responder.svg",
    "Kali Linux": "/tool-logos/kalilinux.svg",
    "Ghidra": "/tool-logos/ghidra.svg",
    "Autopsy": "/tool-logos/autopsy.svg",
    "Volatility": "/tool-logos/volatility.svg",
    "Binwalk": "/tool-logos/binwalk.svg",
    "Mimikatz": "/tool-logos/mimikatz.svg",
    "Impacket": "/tool-logos/impacket.svg",
    "Enum4linux": "/tool-logos/enum4linux.svg",
    "SearchSploit": "/tool-logos/searchsploit.svg",
  };

  const toolColumns = [
    {
      direction: "down",
      tools: [
        ["Nmap", "NM"], ["Metasploit", "MSF"], ["Burp Suite", "BURP"], ["Wireshark", "WS"],
        ["SQLmap", "SQL"], ["Nuclei", "NUC"], ["ZAP", "ZAP"], ["Netcat", "NC"],
      ],
    },
    {
      direction: "up",
      tools: [
        ["Aircrack-ng", "AIR"], ["Hydra", "HYD"], ["Hashcat", "HC"], ["John", "JTR"],
        ["Gobuster", "GB"], ["FFUF", "FF"], ["Nikto", "NK"], ["Responder", "RSP"],
      ],
    },
    {
      direction: "down",
      tools: [
        ["Kali Linux", "KALI"], ["Ghidra", "GH"], ["Autopsy", "AUT"], ["Volatility", "VOL"], ["Binwalk", "BW"],
        ["Mimikatz", "MK"], ["Impacket", "IMP"], ["Enum4linux", "E4L"], ["SearchSploit", "SS"],
      ],
    },
  ];

  return (
    <>
      <section className="hero" id="top">
        <div className="hero-grid" aria-hidden="true" />

        <div className="hero-main">
          <div className="hero-photo" aria-hidden="true">
            <Image
              src="/rahat-portrait.jpg"
              alt=""
              width={819}
              height={1024}
              priority
              sizes="(max-width: 800px) 90vw, 58vw"
              className="hero-photo-img"
            />
          </div>
          <div className="hero-topline">
            <span>
              <i className="live-dot" /> Security. Research. Engineering.
            </span>
            <span>Based in {profile.location.split(",")[0]} · Thinking beyond</span>
          </div>
          <div className="hero-content">
            <h1>
              <span className="name-line">{profile.name}</span>
            </h1>
            <p className="hero-role">Founder of Team NullX</p>
            <p className="hero-credential">| CBTP</p>
            <div className="hero-description">
              <p>
                I explore systems, practice cybersecurity,<br className="desktop-break" /> and lead Team NullX as a CBTP-certified professional.
              </p>
              <div className="hero-socials" aria-label="Social media links">
                {socialLinks.map((link) => (
                  <a key={link.label} href={link.href} target={link.href.startsWith("mailto:") ? undefined : "_blank"} rel="noopener noreferrer" aria-label={link.label} title={link.label}>
                    <SocialIcon name={link.icon} />
                  </a>
                ))}
              </div>
              <div className="hero-actions">
                <a className="pill-link" href="#work">
                  Explore my work <ArrowDown size={16} />
                </a>
              </div>
            </div>
          </div>

          <aside className="hero-tool-list" aria-label="Tools and technologies">
            <span className="hero-tool-heading">Tool Expertise</span>
            <div className="hero-tool-columns">
              {toolColumns.map(({ direction, tools }, columnIndex) => (
                <div className={`hero-tool-column hero-tool-column--${direction}`} key={columnIndex}>
                  <div className="hero-tool-track">
                    {[0, 1].map((copy) => (
                      <div className="hero-tool-group" aria-hidden={copy === 1} key={copy}>
                        {tools.map(([name, mark]) => (
                          <div className="hero-tool" key={name}>
                            {toolLogos[name] ? (
                              <Image
                                src={toolLogos[name]}
                                alt=""
                                width={44}
                                height={44}
                                unoptimized
                                className="hero-tool-logo"
                              />
                            ) : (
                              <span className="hero-tool-mark">{mark}</span>
                            )}
                            <span>{name}</span>
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </aside>

        </div>

        <div className="hero-bottom">
          <a href="#about">
            <span className="scroll-line" /> Scroll to discover{" "}
            <ArrowDown size={13} />
          </a>
          <span>Building &amp; competing with Team NullX</span>
          <span className="hero-edition">An ongoing exploration ↗</span>
        </div>
      </section>
      <AchievementTicker />
    </>
  );
}
