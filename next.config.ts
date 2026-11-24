import type { NextConfig } from "next";

const isGhPages = process.env.GITHUB_PAGES === "true";
const basePath = isGhPages ? "/Rahat-Sahriar-Rafi-Protfolio" : "";

const nextConfig: NextConfig = {
  // Static export only for GitHub Pages; Vercel/local use full Next.js.
  ...(isGhPages ? { output: "export" as const } : {}),
  images: { unoptimized: true },
  ...(basePath
    ? {
        basePath,
        assetPrefix: `${basePath}/`,
      }
    : {}),
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  turbopack: {
    root: process.cwd(),
  },
};

export default nextConfig;
