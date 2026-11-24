# Resume site — design

**Date:** 2026-11-24  
**Owner:** Rahat Sahriar Rafi (`rahatsahriarrafi`)  
**Status:** Approved (owner: continue building, defaults OK)

## Intent

A public personal resume / portfolio site that presents Rahat as a cybersecurity-focused software engineering student and practitioner (Team NullX founder, T Forensic / TFF, DIU CSC / SOC / research). Visitors should quickly understand who he is, what he has built and competed in, and how to contact him.

## Why now

Replace ad-hoc Google Sites / scattered profiles with one owned, version-controlled site on GitHub that can grow with career updates.

## Goals

- Single polished multi-section resume site
- Content accurate to public LinkedIn + local materials (no student ID)
- GitHub as source of truth (commits, history, PRs)
- Deployable via Vercel and/or GitHub Pages
- Mobile-readable; professional cybersecurity look without generic “AI purple” aesthetics

## Non-goals

- Blog / CMS
- Auth, dashboards, or app backend
- Full Team NullX org site (NullX / TFF appear as featured work, not a separate product marketing site)
- Publishing student ID or private DIU portal details

## Anti-goals

- Looks like a generic student template or unfinished OSOL checklist page
- Inflated claims or invented metrics
- Assistant / tool branding in README, LICENSE, or commits

## Constraints

- No student ID (`241-35-517`) anywhere in repo or published pages
- Git identity / GitHub owner: `rahatsahriarrafi` only
- Prefer static or edge-friendly Next.js so Pages + Vercel both stay possible
- Keep secrets out of the repo (no tokens, private bounty notes)

## Approaches considered

| | Approach | Tradeoff |
|---|----------|----------|
| A | Static HTML/CSS/JS + GitHub Pages | Fastest, least flexible |
| **B (chosen)** | **Next.js → GitHub Pages and/or Vercel** | Modern, componentized, slightly more setup; static export if Pages is required |
| C | Reuse DIU Google Sites embeds | Fast content dump; wrong brand for a career site |

**Chosen:** B — Next.js App Router, TypeScript, CSS modules or a single global CSS with design tokens. Default deploy target: **Vercel** (primary); keep **`output: 'export'`** optional/documented so GitHub Pages remains viable without a Node server.

## Information architecture

One scrollable landing page (optional light section anchors):

1. **Hero** — name as dominant brand signal; one line role (e.g. cybersecurity + software engineering); short supporting sentence; CTAs: Contact / GitHub / LinkedIn  
2. **About** — Dhaka / DIU SE; useful + secure tech  
3. **Experience** — Research Assistant; SOC Analyst (DIU CSC); former Student Associate; SEO Consultant (ATL Clean); Link3 only if confirmed still relevant  
4. **Leadership** — Team NullX founder/lead  
5. **Achievements** — BCS CTF 2026, BUP CSE Fest 2026, HiCON 2026, notable labs (e.g. CyberDefenders)  
6. **Projects** — T Forensic / TFF first; then local-first AI research, phishing detector, network scanner, endpoint monitor, Cisco labs  
7. **Skills** — cyber, languages, networking, tools  
8. **Certifications** — CBTP (+ others when links exist); CCNA only if verifiable  
9. **Contact** — email, location (city-level), LinkedIn, GitHub, HackerOne/HTB optional

## Content rules

- Source of truth priority: user confirmation > LinkedIn > local `diu-video-resume` materials  
- Canonical LinkedIn: `https://linkedin.com/in/rahat-sahriar-rafi` (unless user overrides)  
- GitHub: `https://github.com/rahatsahriarrafi`  
- Email: `rahatsahriarrafi@gmail.com`  
- No phone until user provides one  
- No student ID; no fabricated CGPA or dates

## Visual direction (builder may refine)

- Dark or deep-slate atmosphere with restrained accent (teal / cyan or steel blue — not purple-indigo cliché)  
- Expressive typography (not Inter/Roboto/Arial defaults)  
- First viewport: brand/name, one headline, one sentence, CTA group, one strong visual plane (atmosphere / abstract security texture — not card clutter)  
- Motion: 2–3 subtle intentional motions (e.g. hero fade/rise, section reveal)  
- No emoji decoration; no floating badge stickers on hero

## Tech (builder decisions allowed within this)

- Next.js (App Router) + TypeScript  
- Content in typed data files (`src/data/*.ts`) so copy updates don’t require hunting JSX  
- `next/font` for typography  
- ESLint; minimal deps  
- README: how to run locally, how to deploy (Vercel + optional Pages static export)  
- `.gitignore` for `.env*`, `.cursor/`, build artifacts  
- Repo name proposal: `resume` or `rahatsahriarrafi` (user picks at create time)

## Repo / version control

- Local path: `/home/nullx-a/Resume`  
- Init git → push to `rahatsahriarrafi/<repo>` on GitHub  
- Commits: owner-only identity; no Co-authored-by; no assistant brand in messages  
- Prefer small commits per feature slice after plan approval

## Left to the builder

- Exact component file split  
- Font pairing and final color tokens  
- Whether sections are one page or tiny route stubs (prefer one page)  
- CI for lint (optional, nice-to-have)  
- Exact Vercel project settings once repo exists

## Open items for owner (do not block design approval if defaults OK)

1. Primary deploy: **Vercel** (default) vs GitHub Pages only  
2. Keep **Link3** on experience or drop  
3. Preferred public repo name  
4. Photo / headshot to include or GitHub avatar only  
5. Audience lean: recruiters first (default) vs Team NullX-first
