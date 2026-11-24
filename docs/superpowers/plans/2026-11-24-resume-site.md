# Resume site Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Ship a one-page Next.js resume/portfolio for Rahat Sahriar Rafi in `/home/nullx-a/Protfolio`.

**Architecture:** Next.js App Router + TypeScript; content in `src/data/*.ts`; single landing page composed of section components; global CSS design tokens (deep slate + teal accent); optional static export later.

**Tech Stack:** Next.js (App Router), TypeScript, CSS modules / global CSS, `next/font` (expressive pairing), ESLint.

**Spec:** `docs/superpowers/specs/2026-11-24-resume-site-design.md`

## Global Constraints

- No student ID (`241-35-517`) anywhere
- Git owner identity: `rahatsahriarrafi` only; no assistant branding in README/commits
- No secrets in repo; `.cursor/` gitignored
- Defaults locked: Vercel primary, drop “current” Link3 claim (list as past if included), GitHub avatar only, recruiters-first
- Content priority: design + local diu materials (no fabricated metrics)

## Review Focus

- Student ID must never appear in built output
- Hero must read as brand-first (name dominant), not generic template
- External links (GitHub/LinkedIn/email) must match design canonicals
- Mobile layout: single column, no horizontal overflow
- Build must succeed with `npm run build`

## File map

- `package.json`, `next.config.ts`, `tsconfig.json`, `.gitignore`, `README.md`
- `src/app/layout.tsx`, `src/app/page.tsx`, `src/app/globals.css`
- `src/data/profile.ts`, `experience.ts`, `projects.ts`, `skills.ts`, `achievements.ts`, `certs.ts`
- `src/components/{Header,Hero,About,Experience,Leadership,Achievements,Projects,Skills,Certs,Contact,Footer}.tsx`
- `scripts/check-content.mjs` — assert required fields + no student ID

### Task 1: Scaffold + content data + guard

**Files:** Create app scaffold, `src/data/*`, `scripts/check-content.mjs`, README, gitignore

- [x] Scaffold Next.js TypeScript App Router in workspace root (keep `docs/`)
- [x] Write typed content modules from design + diu materials (no student ID)
- [x] Add `scripts/check-content.mjs` that fails if `241-35-517` appears or required keys missing
- [x] Run: `node scripts/check-content.mjs` → pass
- [ ] Commit when user asks (do not commit unprompted)

### Task 2: Layout, tokens, page shell

**Files:** `layout.tsx`, `globals.css`, `page.tsx`, Header/Footer

- [x] Fonts via `next/font` (display + body, not Inter/Roboto/Arial)
- [x] CSS variables: deep slate bg, teal/cyan accent, readable text
- [x] Assemble page section order per spec
- [x] `npm run build` succeeds

### Task 3: Sections + motion

**Files:** section components

- [x] Implement all IA sections; hero budget only brand/headline/sentence/CTAs/visual plane
- [x] 2–3 CSS motions (hero rise, section fade-in)
- [x] Re-run content check + build

### Task 4: Verify + status

- [x] `npm run build` clean
- [x] Confirm no student ID in `src/`
- [x] Report update to owner (how to run, what’s left: deploy, photo, cert links)
