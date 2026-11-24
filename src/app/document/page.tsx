"use client";

import Image from "next/image";
import { Suspense, useMemo } from "react";
import { ArrowLeft } from "lucide-react";
import { useSearchParams } from "next/navigation";

const documents = new Set([
  "achieve-hicybercon-2026.jpg",
  "hicybercon-certificate.png",
  "bcs-ctf-2026-certificate.png",
  "achieve-bcs-ctf.jpg",
  "bup-cse-fest-2026-certificate.png",
  "bdsec-ctf-2026-result.png",
  "cbtp-certificate.png",
  "csad-2026-certificate.png",
]);

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

function DocumentView() {
  const searchParams = useSearchParams();
  const file = searchParams.get("file") || "";
  const title = searchParams.get("title") || "";

  const heading = useMemo(
    () => title || "Achievement document",
    [title],
  );

  if (!file || !documents.has(file)) {
    return (
      <main className="min-h-screen bg-[#090807] px-5 py-6 text-[#f5f1e9] sm:px-8 sm:py-8">
        <div className="mx-auto max-w-6xl">
          <a
            href={`${basePath}/#top`}
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm transition hover:border-[#dc987c] hover:bg-white/10"
          >
            <ArrowLeft size={16} aria-hidden="true" />
            Back to portfolio
          </a>
          <h1 className="mb-5 mt-6 font-display text-2xl sm:text-3xl">
            Document not found
          </h1>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#090807] px-5 py-6 text-[#f5f1e9] sm:px-8 sm:py-8">
      <div className="mx-auto max-w-6xl">
        <a
          href={`${basePath}/#top`}
          className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm transition hover:border-[#dc987c] hover:bg-white/10"
        >
          <ArrowLeft size={16} aria-hidden="true" />
          Back to portfolio
        </a>
        <h1 className="mb-5 mt-6 font-display text-2xl sm:text-3xl">{heading}</h1>
        <div className="flex min-h-[55vh] items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] p-3 sm:p-5">
          <Image
            src={`/${file}`}
            alt={`${heading} supporting document`}
            width={1800}
            height={1300}
            unoptimized
            className="h-auto max-h-[calc(100svh-12rem)] w-auto max-w-full object-contain"
          />
        </div>
      </div>
    </main>
  );
}

export default function DocumentPage() {
  return (
    <Suspense
      fallback={
        <main className="min-h-screen bg-[#090807] px-5 py-6 text-[#f5f1e9]">
          <p className="mx-auto max-w-6xl">Loading document…</p>
        </main>
      }
    >
      <DocumentView />
    </Suspense>
  );
}
