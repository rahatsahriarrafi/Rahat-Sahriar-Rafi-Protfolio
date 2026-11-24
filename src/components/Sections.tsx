import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import {
  articles,
  disciplines,
  experience,
  expertise,
  journey,
  profile,
  projects,
  research,
} from "@/data/content";
import { Reveal } from "./Reveal";

function SectionLabel({ index, label, tone = "dark" }: { index: string; label: string; tone?: "dark" | "light" }) {
  return (
    <p className={`mb-3 font-mono-label text-sm font-bold ${tone === "light" ? "text-ink/55" : "text-mute"}`}>
      {index} / {label}
    </p>
  );
}

export function Experience() {
  return (
    <section id="experience" className="border-t border-line bg-[#100e0d]">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <Reveal>
          <SectionLabel index="02" label="Experience" />
          <h2 className="font-display max-w-4xl text-[clamp(2.4rem,5.5vw,4rem)] font-bold leading-[1.08] tracking-[-0.02em]">
            Building teams. Exploring systems. Moving security forward.
          </h2>
          <p className="mt-5 max-w-2xl text-lg font-medium text-mute">
            The work and research shaping my path across cybersecurity and software.
          </p>
        </Reveal>

        <div className="experience-list relative mt-12">
          {experience.map((item, index) => (
            <Reveal key={item.role} delay={index * 0.12}>
              <article className="experience-card group relative grid gap-5 border-t border-line py-7 transition-colors duration-300 hover:border-signal/60 md:grid-cols-[minmax(12rem,0.85fr)_2fr] md:gap-10 md:py-9">
                <div className="flex items-start gap-4">
                  {item.mark ? (
                    <a
                      href="https://www.facebook.com/teamnullx"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Visit Team NullX on Facebook"
                      className="experience-mark flex size-14 shrink-0 items-center justify-center rounded-xl border border-line bg-black/30 p-2 transition hover:border-signal"
                    >
                      <Image src={item.mark} alt="Team NullX mark" width={48} height={48} />
                    </a>
                  ) : (
                    <span className="experience-index flex size-14 shrink-0 items-center justify-center rounded-xl border border-line font-mono-label text-xs text-signal transition-colors group-hover:bg-signal group-hover:text-ink">
                      0{index + 1}
                    </span>
                  )}
                  <div>
                    <p className="font-mono-label text-[0.65rem] font-bold text-signal">{item.focus}</p>
                    <h3 className="mt-1 font-display text-2xl font-bold md:text-3xl">{item.role}</h3>
                    <p className="mt-1 text-sm font-medium text-mute">
                      {item.organization}{item.employmentType ? ` · ${item.employmentType}` : ""}
                    </p>
                    {(item.period || item.location || item.workMode) && (
                      <p className="mt-0.5 text-xs font-medium text-mute/80">
                        {[item.period, item.location, item.workMode].filter(Boolean).join(" · ")}
                      </p>
                    )}
                  </div>
                </div>

                <div className="md:pl-4">
                  <p className="max-w-3xl text-base leading-relaxed text-mute md:text-lg">{item.description}</p>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <li key={tag} className="rounded-full border border-line px-3 py-1 font-mono-label text-[0.58rem] text-mute">{tag}</li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
          <div className="experience-end-line" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}

export function About() {
  return (
    <section id="about" className="border-t border-line bg-paper text-ink">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <Reveal>
          <SectionLabel index="01" label="About" tone="light" />
          <h2 className="font-display max-w-4xl text-[clamp(2.4rem,5.5vw,4rem)] font-bold leading-[1.08] tracking-[-0.02em]">
            Technology is my foundation. Security is my curiosity.
          </h2>
          <p className="mt-6 w-full text-xl font-semibold leading-relaxed text-ink/85">
            {profile.intro} Currently {profile.education.semester.toLowerCase()} in{" "}
            {profile.education.degree} at {profile.education.school} (CGPA{" "}
            {profile.education.cgpa}).
          </p>
        </Reveal>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {disciplines.map((d, i) => (
            <Reveal key={d.title} delay={i * 0.06}>
              <article className="h-full rounded-2xl border border-line-dark p-6 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-black/20 hover:shadow-lg hover:shadow-black/10">
                <p className="font-mono-label text-xs font-bold text-ink/60">
                  0{i + 1}
                </p>
                <h3 className="mt-3 font-display text-3xl font-bold">{d.title}</h3>
                <p className="mt-3 text-base font-medium leading-relaxed text-ink/80">
                  {d.body}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Projects() {
  return (
    <section id="work" className="border-t border-line bg-paper text-ink">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <Reveal>
          <SectionLabel index="03" label="Selected Work" tone="light" />
          <h2 className="font-display max-w-3xl text-[clamp(2.4rem,5.5vw,3.8rem)] font-bold leading-[1.08]">
            Ideas are a start. This is the work.
          </h2>
        </Reveal>
        <div className="mt-14 space-y-8">
          {projects.map((p, i) => (
            <Reveal key={p.id} delay={i * 0.04}>
              <article className="group rounded-2xl border border-line-dark bg-white/60 p-6 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-signal/60 hover:shadow-lg hover:shadow-black/10 md:p-10">
                <div className="flex flex-wrap items-baseline justify-between gap-3">
                  <p className="font-mono-label text-xs font-bold text-[#9f4d2d]">
                    {p.id} / {p.category}
                  </p>
                  {p.href ? (
                    <a
                      href={p.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-base font-semibold text-ink/65 hover:text-[#9f4d2d]"
                    >
                      View <ArrowUpRight size={16} />
                    </a>
                  ) : null}
                </div>
                <h3 className="mt-4 font-display text-4xl font-bold md:text-5xl">
                  {p.title}
                </h3>
                <p className="mt-4 max-w-3xl text-lg font-medium text-ink/75">
                  {p.description}
                </p>
                <ul className="mt-6 grid gap-2 text-base font-medium text-ink/75 sm:grid-cols-2">
                  {p.features.map((f) => (
                    <li key={f} className="border-l border-line-dark pl-3">
                      {f}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-line-dark px-3 py-1.5 font-mono-label text-xs font-bold text-ink/60"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Expertise() {
  return (
    <section id="expertise" className="border-t border-line bg-[#100e0d] text-paper">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <Reveal>
          <SectionLabel index="04" label="Technical Expertise" />
          <h2 className="font-display max-w-3xl text-[clamp(2.4rem,5.5vw,3.6rem)] font-bold leading-[1.08]">
            Depth over decoration.
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {expertise.map((group, i) => (
            <Reveal key={group.title} delay={i * 0.05}>
              <article className="rounded-2xl border border-line p-6 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-signal/60 hover:shadow-lg hover:shadow-black/20 md:p-8">
                <h3 className="font-display text-3xl font-bold">{group.title}</h3>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-line px-3.5 py-2 text-base font-semibold text-paper/85"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Research() {
  return (
    <section id="research" className="border-t border-line bg-paper text-ink">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <Reveal>
          <SectionLabel index="05" label="Research & Exploration" tone="light" />
          <h2 className="font-display max-w-3xl text-[clamp(2.4rem,5.5vw,3.8rem)] font-bold leading-[1.08]">
            Never stop questioning the system.
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {research.map((r, i) => (
            <Reveal key={r.title} delay={i * 0.05}>
              <article className="border-t border-line-dark pt-5">
                <h3 className="font-display text-2xl font-bold">{r.title}</h3>
                <p className="mt-3 text-base font-medium leading-relaxed text-ink/75">
                  {r.body}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Achievements() {
  return (
    <section id="achievements" className="border-t border-line bg-[#100e0d]">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="grid items-center gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:gap-12">
          <div>
            <Reveal>
              <SectionLabel index="06" label="Achievements" />
              <h2 className="max-w-2xl font-display text-[clamp(2.4rem,5vw,3.5rem)] font-bold leading-[1.08]">
                Hi Cyber Con 2026 International CTF
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-7 text-mute md:text-lg">
                Proud to share that <strong className="text-paper">Team NullX secured 14th place globally among 1,119 teams</strong> at Hi Cyber Con 2026, competing in the <strong className="text-paper">Agentic AI Division</strong>. As Founder and Team Lead, I’m grateful to have led our dedicated team through this international competition.
              </p>
              <p className="mt-3 max-w-2xl text-base leading-7 text-mute md:text-lg">
                This achievement reflects our collective dedication, teamwork, and passion for cybersecurity. My sincere appreciation to every team member who contributed to our success.
              </p>
            </Reveal>

            <div className="mt-8 grid grid-cols-2 gap-3 md:gap-4">
              {[
                { before: "", accent: "14th", after: "", label: "global rank · 1,119 teams" },
                { before: "", accent: "14th", after: "", label: "Agentic AI division · 396 teams" },
                { before: "67", accent: "/69", after: "", label: "challenges solved" },
                { before: "", accent: "4,359", after: "", label: "total score · points" },
              ].map((metric) => (
                <Reveal key={metric.label}>
                  <article className="h-full rounded-2xl border border-white/10 bg-white/[0.025] p-4 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-signal/50 hover:shadow-lg hover:shadow-black/20 md:p-5">
                    <p className="font-display text-3xl font-bold tracking-tight text-paper md:text-4xl">
                      {metric.before}<span className="text-[#ff6b16]">{metric.accent}</span>{metric.after}
                    </p>
                    <p className="mt-1 text-xs leading-5 text-mute md:text-sm">{metric.label}</p>
                  </article>
                </Reveal>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-between gap-x-5 gap-y-3 text-xs leading-5 text-mute">
              <span>Validation ID: HICC26-FR14-KEHR06HX-YTG2</span>
              <a
                className="inline-flex items-center gap-2 font-semibold text-paper underline decoration-[#ff6b16]/70 underline-offset-4 hover:text-[#ff6b16]"
                href="https://cert.hiddeninvestigations.net/verify"
                target="_blank"
                rel="noreferrer"
              >
                Verify certificate <ArrowUpRight size={14} />
              </a>
            </div>
          </div>

          <div className="grid gap-4">
            <Reveal>
              <Image
                src="/hicybercon-certificate.png"
                alt="Rahat Sahriar Rafi’s HI Cyber Con 2026 certificate of participation"
                width={1280}
                height={906}
                className="w-full rounded-2xl border border-white/10"
                sizes="(max-width: 1024px) 100vw, 55vw"
              />
            </Reveal>
            <Reveal delay={0.08}>
              <Image
                src="/achieve-hicybercon-2026.jpg"
                alt="Team NullX placing second in Bangladesh and fourteenth globally at HI Cyber Con 2026"
                width={1024}
                height={576}
                className="w-full rounded-2xl border border-white/10"
                sizes="(max-width: 1024px) 100vw, 55vw"
              />
            </Reveal>
          </div>
        </div>

        <div className="mt-20 grid items-center gap-10 border-t border-white/10 pt-12 lg:grid-cols-[1fr_1fr] lg:gap-12 md:mt-24 md:pt-16">
          <Reveal>
            <Image
              src="/bcs-ctf-2026-certificate.png"
              alt="Rahat Sahriar Rafi’s BCS CTF 2026 certificate, showing Team NullX at global rank 21"
              width={1280}
              height={905}
              className="w-full rounded-2xl border border-white/10"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </Reveal>

          <div>
            <Reveal>
              <p className="mb-3 font-mono-label text-sm font-bold text-[#ff6b16]">04 / BCS CTF 2026</p>
              <h3 className="font-display text-[clamp(2.2rem,4vw,3.25rem)] font-bold leading-[1.08]">BCS CTF 2026</h3>
              <p className="mt-5 text-base leading-7 text-mute md:text-lg">
                A <strong className="text-paper">48-hour cybersecurity competition</strong> held from <strong className="text-paper">25 to 27 September 2026</strong> as part of BCS ICT Fest 2026, organised by the <strong className="text-paper">Bangladesh Computer Society</strong>. Two straight days of solving challenges, and our team finished <strong className="text-paper">21st globally</strong>.
              </p>
            </Reveal>

            <div className="mt-8 grid grid-cols-2 gap-3 md:gap-4">
              {[
                { before: "", accent: "#", after: "21", label: "global rank (team)" },
                { before: "48", accent: "h", after: "", label: "non-stop competition" },
              ].map((metric) => (
                <Reveal key={metric.label}>
                  <article className="h-full rounded-2xl border border-white/10 bg-white/[0.025] p-4 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-signal/50 hover:shadow-lg hover:shadow-black/20 md:p-5">
                    <p className="font-display text-3xl font-bold tracking-tight text-paper md:text-4xl">
                      {metric.before}<span className="text-[#ff6b16]">{metric.accent}</span>{metric.after}
                    </p>
                    <p className="mt-1 text-xs leading-5 text-mute md:text-sm">{metric.label}</p>
                  </article>
                </Reveal>
              ))}
            </div>

            <p className="mt-6 text-xs leading-5 text-mute">
              Organised by Bangladesh Computer Society · BCS ICT Fest 2026 · ctf.bcsictfest.com
            </p>
          </div>
        </div>

        <div className="mt-20 grid items-center gap-10 border-t border-white/10 pt-12 lg:grid-cols-[1fr_1fr] lg:gap-12 md:mt-24 md:pt-16">
          <Reveal className="lg:order-2">
            <Image
              src="/bup-cse-fest-2026-certificate.png"
              alt="Rahat Sahriar Rafi’s Certificate of Participation for the BUP CSE Fest 2026 CTF preliminary round"
              width={1280}
              height={905}
              className="w-full rounded-2xl border border-white/10"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </Reveal>

          <div className="lg:order-1">
            <Reveal>
              <p className="mb-3 font-mono-label text-sm font-bold text-[#ff6b16]">05 / BUP CSE Fest 2026</p>
              <h3 className="font-display text-[clamp(2.2rem,4vw,3.25rem)] font-bold leading-[1.08]">
                BUP CSE Fest 2026 CTF Preliminary Round
              </h3>
              <p className="mt-5 text-base leading-7 text-mute md:text-lg">
                As Founder and Team Leader of <strong className="text-paper">Team NullX</strong>, I’m proud that we qualified for the <strong className="text-paper">onsite finals</strong>, securing <strong className="text-paper">11th place among 226 teams</strong> with <strong className="text-paper">14 solved challenges</strong> and full clears in the <strong className="text-paper">Forensics</strong> and <strong className="text-paper">Pwn</strong> categories.
              </p>
              <p className="mt-3 text-base leading-7 text-mute md:text-lg">
                This achievement reflects hours of learning, practice, teamwork, and perseverance. Now, it’s time for the onsite finals.
              </p>
            </Reveal>

            <div className="mt-8 grid grid-cols-2 gap-3 md:gap-4">
              {[
                { value: "11th", label: "among 226 teams" },
                { value: "14", label: "challenges solved" },
                { value: "Finalist", label: "qualified for onsite finals" },
                { value: "100%", label: "Forensics + Pwn cleared" },
              ].map((metric) => (
                <Reveal key={metric.value}>
                  <article className="h-full rounded-2xl border border-white/10 bg-white/[0.025] p-4 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-signal/50 hover:shadow-lg hover:shadow-black/20 md:p-5">
                    <p className="font-display text-2xl font-bold tracking-tight text-[#ff6b16] md:text-3xl">
                      {metric.value}
                    </p>
                    <p className="mt-1 text-xs leading-5 text-mute md:text-sm">{metric.label}</p>
                  </article>
                </Reveal>
              ))}
            </div>

            <a
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-paper underline decoration-[#ff6b16]/70 underline-offset-4 hover:text-[#ff6b16]"
              href="https://lnkd.in/ejgx_ySD"
              target="_blank"
              rel="noreferrer"
            >
              Verify certificate <ArrowUpRight size={16} />
            </a>
          </div>
        </div>

        <div className="mt-20 grid items-center gap-10 border-t border-white/10 pt-12 lg:grid-cols-[1fr_1fr] lg:gap-12 md:mt-24 md:pt-16">
          <Reveal>
            <Image
              src="/bdsec-ctf-2026-team.png"
              alt="Team NullX BDSec CTF 2026 result: 62nd place with 1,640 points"
              width={919}
              height={811}
              className="w-full rounded-2xl border border-white/10"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </Reveal>

          <div>
            <Reveal>
              <p className="mb-3 font-mono-label text-sm font-bold text-[#ff6b16]">06 / BDSec CTF 2026</p>
              <h3 className="font-display text-[clamp(2.2rem,4vw,3.25rem)] font-bold leading-[1.08]">BDSec CTF 2026</h3>
              <p className="mt-5 text-base leading-7 text-mute md:text-lg">
                Proud of <strong className="text-paper">Team NullX</strong> for earning <strong className="text-paper">62nd place out of 545 teams</strong> in BDSec CTF 2026 with <strong className="text-paper">1,640 points</strong>, placing us in the <strong className="text-paper">top 12%</strong> of all competing teams.
              </p>
            </Reveal>

            <div className="mt-8 grid grid-cols-2 gap-3 md:gap-4">
              {[
                { before: "", accent: "62nd", after: "", label: "place overall" },
                { before: "", accent: "545", after: "", label: "competing teams" },
                { before: "", accent: "1,640", after: "", label: "points earned" },
                { before: "", accent: "Top 12%", after: "", label: "of all teams" },
              ].map((metric) => (
                <Reveal key={metric.label}>
                  <article className="h-full rounded-2xl border border-white/10 bg-white/[0.025] p-4 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-signal/50 hover:shadow-lg hover:shadow-black/20 md:p-5">
                    <p className="font-display text-3xl font-bold tracking-tight text-paper md:text-4xl">
                      {metric.before}<span className="text-[#ff6b16]">{metric.accent}</span>{metric.after}
                    </p>
                    <p className="mt-1 text-xs leading-5 text-mute md:text-sm">{metric.label}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-20 grid items-center gap-10 border-t border-white/10 pt-12 lg:grid-cols-[1fr_1fr] lg:gap-12 md:mt-24 md:pt-16">
          <Reveal className="lg:order-2">
            <Image
              src="/csad-2026-certificate.png"
              alt="Certificate of Appreciation for organizing Cyber Security Awareness Day 2026 at Daffodil International University"
              width={1280}
              height={905}
              className="w-full rounded-2xl border border-white/10"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </Reveal>

          <div className="lg:order-1">
            <Reveal>
              <p className="mb-3 font-mono-label text-sm font-bold text-[#ff6b16]">07 / Cyber Security Awareness Day 2026</p>
              <h3 className="font-display text-[clamp(2.2rem,4vw,3.25rem)] font-bold leading-[1.08]">
                Certificate of Appreciation
              </h3>
              <p className="mt-5 text-base leading-7 text-mute md:text-lg">
                Honored to serve as an <strong className="text-paper">Organizer</strong> for Cyber Security Awareness Day 2026, organized by the <strong className="text-paper">Cyber Security Center, Daffodil International University</strong>. I contributed as a Student Associate, working with faculty members and volunteers to support the event.
              </p>
              <p className="mt-3 text-base leading-7 text-mute md:text-lg">
                The experience strengthened my coordination, leadership, and event management skills, and deepened my commitment to cybersecurity awareness.
              </p>
            </Reveal>

            <div className="mt-8 grid grid-cols-2 gap-3 md:gap-4">
              {[
                { value: "Organizer", label: "Cyber Security Awareness Day 2026" },
                { value: "Student Associate", label: "Cyber Security Center · DIU" },
              ].map((metric) => (
                <Reveal key={metric.value}>
                  <article className="h-full rounded-2xl border border-white/10 bg-white/[0.025] p-4 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-signal/50 hover:shadow-lg hover:shadow-black/20 md:p-5">
                    <p className="font-display text-xl font-bold tracking-tight text-[#ff6b16] md:text-2xl">
                      {metric.value}
                    </p>
                    <p className="mt-1 text-xs leading-5 text-mute md:text-sm">{metric.label}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Certifications() {
  return (
    <section id="certifications" className="border-t border-line bg-paper text-ink">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_1fr] lg:gap-12">
          <Reveal>
            <SectionLabel index="07" label="Certifications" tone="light" />
            <h2 className="max-w-2xl font-display text-[clamp(2.4rem,5vw,3.5rem)] font-bold leading-[1.08]">
              Certified Blue Team Practitioner (CBTP)
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-ink/75 md:text-lg">
              Earned the Certified Blue Team Practitioner certification from The SecOps Group with Merit, scoring 100% (60/60) on April 13, 2026.
            </p>
            <p className="mt-3 max-w-2xl text-base leading-7 text-ink/75 md:text-lg">
              The certification validates hands-on defensive cybersecurity skills in threat detection, incident response, and security monitoring, along with practical knowledge of Blue Team operations and resilient system defense.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-3 md:gap-4">
              {[
                { value: "100%", label: "60 of 60 points" },
                { value: "Merit", label: "exam distinction" },
                { value: "13 Apr 2026", label: "earned" },
                { value: "11285965", label: "certificate ID" },
              ].map((metric) => (
                <article key={metric.label} className="rounded-2xl border border-line-dark bg-white/60 p-4 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-black/20 hover:shadow-lg hover:shadow-black/10 md:p-5">
                  <p className="font-display text-xl font-bold tracking-tight text-[#ff6b16] md:text-2xl">
                    {metric.value}
                  </p>
                  <p className="mt-1 text-xs leading-5 text-ink/60 md:text-sm">{metric.label}</p>
                </article>
              ))}
            </div>
            <a
              className="mt-6 inline-flex items-center gap-2 font-semibold text-ink underline decoration-[#9f4d2d]/70 underline-offset-4 hover:text-[#9f4d2d]"
              href="https://pentestingexams.com/certificate-validation/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Validate certificate <ArrowUpRight size={14} />
            </a>
          </Reveal>
          <Reveal delay={0.08}>
            <Image
              src="/cbtp-certificate.png"
              alt="Certified Blue Team Practitioner certificate awarded to Rahat Sahriar Rafi with Merit and a perfect score of 60 out of 60"
              width={1280}
              height={906}
              className="w-full rounded-2xl border border-line-dark"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function Journey() {
  return (
    <section id="journey" className="border-t border-line bg-[#100e0d] text-paper">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <Reveal>
          <SectionLabel index="08" label="Professional Journey" />
          <h2 className="font-display max-w-3xl text-[clamp(2.4rem,5.5vw,3.6rem)] font-bold leading-[1.08]">
            Started with code. Kept asking why.
          </h2>
        </Reveal>
        <ol className="mt-12 space-y-0">
          {journey.map((step, i) => (
            <Reveal key={step.title} delay={i * 0.04}>
              <li className="grid gap-3 border-t border-line py-7 md:grid-cols-[7rem_1fr]">
                <p className="font-mono-label text-sm font-bold text-mute">
                  0{i + 1}
                </p>
                <div>
                  <h3 className="font-display text-3xl font-bold">{step.title}</h3>
                  <p className="mt-2 max-w-2xl text-lg font-medium text-mute">
                    {step.body}
                  </p>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function Writing() {
  return (
    <section id="writing" className="border-t border-line bg-paper text-ink">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <Reveal>
          <SectionLabel index="09" label="Writing & Knowledge" tone="light" />
          <h2 className="font-display max-w-3xl text-[clamp(2.4rem,5.5vw,3.6rem)] font-bold leading-[1.08]">
            Make complexity click.
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {articles.map((a, i) => (
            <Reveal key={a.title} delay={i * 0.05}>
              <a
                href={a.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-2xl border border-line-dark p-6 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-[#9f4d2d]/60 hover:shadow-lg hover:shadow-black/10"
              >
                <h3 className="font-display text-2xl font-bold">{a.title}</h3>
                <p className="mt-3 text-base font-medium text-ink/75">{a.body}</p>
                <span className="mt-5 inline-flex items-center gap-1 text-base font-semibold text-[#9f4d2d]">
                  Open <ArrowUpRight size={16} />
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Contact() {
  const links = [
    { label: "Email", href: `mailto:${profile.email}`, value: profile.email },
    { label: "LinkedIn", href: profile.linkedin, value: "Connect" },
    { label: "GitHub", href: profile.github, value: "rahatsahriarrafi" },
    { label: "HackerOne", href: profile.hackerone, value: "Profile" },
    { label: "Hack The Box", href: profile.hackthebox, value: "Profile" },
  ];

  return (
    <section id="contact" className="border-t border-line bg-[#100e0d]">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <Reveal>
          <SectionLabel index="10" label="Contact" />
          <h2 className="font-display max-w-4xl text-[clamp(2.5rem,6vw,4.2rem)] font-bold leading-[1.08]">
            Curiosity creates questions. Collaboration creates possibilities.
          </h2>
          <p className="mt-6 max-w-xl text-xl font-semibold text-mute">
            Have an interesting challenge? Let&apos;s talk.
          </p>
        </Reveal>
        <div className="mt-12 grid gap-3 sm:grid-cols-2">
          {links.map((l, i) => (
            <Reveal key={l.label} delay={i * 0.04}>
              <a
                href={l.href}
                target={l.href.startsWith("mailto:") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="flex items-center justify-between rounded-xl border border-line px-5 py-4 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-signal hover:text-signal hover:shadow-lg hover:shadow-black/20"
              >
                <span className="font-mono-label text-xs font-bold text-mute">
                  {l.label}
                </span>
                <span className="inline-flex items-center gap-1 text-base font-semibold">
                  {l.value} <ArrowUpRight size={16} />
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-8">
        <p className="font-display text-2xl font-bold text-paper">
          {profile.name}.
        </p>
        <p className="font-mono-label text-xs font-bold text-mute">
          © 2026 · {profile.location}
        </p>
      </div>
    </footer>
  );
}
