/** Prefix public paths for GitHub Pages basePath; no-op on Vercel/localhost. */
export function asset(path: string): string {
  const base = process.env.NEXT_PUBLIC_BASE_PATH || "";
  if (!path.startsWith("/")) return `${base}/${path}`;
  return `${base}${path}`;
}
