import type { Metadata, Viewport } from "next";
import { DM_Sans, Instrument_Serif } from "next/font/google";
import { MotionProvider } from "@/components/MotionProvider";
import { profile } from "@/data/content";
import "./globals.css";
import "@/components/hero.css";

const sans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const display = Instrument_Serif({
  variable: "--font-display",
  subsets: ["latin"],
  weight: "400",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  "https://rahatsahriarrafi.github.io/Rahat-Sahriar-Rafi-Protfolio";
const pageTitle = `${profile.name} | Cybersecurity Researcher & Team NullX Founder`;
const pageDescription =
  "Rahat Sahriar Rafi is a cybersecurity researcher, software engineering student, digital forensics builder, and founder of Team NullX in Bangladesh.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  alternates: { canonical: "/" },
  title: pageTitle,
  description: pageDescription,
  applicationName: "Rahat Sahriar Rafi Portfolio",
  icons: {
    icon: [{ url: "/icon.png", type: "image/png" }],
    apple: [{ url: "/apple-icon.png", type: "image/png" }],
  },
  keywords: [
    "Rahat Sahriar Rafi",
    "cybersecurity researcher Bangladesh",
    "digital forensics",
    "software engineering",
    "Team NullX",
    "CTF player",
  ],
  authors: [{ name: profile.name }],
  creator: profile.name,
  publisher: "Team NullX",
  category: "technology",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: "website",
    locale: "en_BD",
    siteName: "Rahat Sahriar Rafi Portfolio",
    images: [
      {
        url: "/rahat-portrait.jpg",
        width: 819,
        height: 1024,
        alt: `Portrait of ${profile.name}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/rahat-portrait.jpg"],
  },
};

const profileStructuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: ["Cybersecurity Researcher", "Founder and Team Lead"],
  description: pageDescription,
  affiliation: {
    "@type": "CollegeOrUniversity",
    name: profile.education.school,
  },
  worksFor: {
    "@type": "Organization",
    name: "Team NullX",
  },
  sameAs: [profile.github, profile.linkedin, profile.hackerone],
};

export const viewport: Viewport = {
  themeColor: "#080B0A",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${sans.variable} ${display.variable}`}>
      <body>
        <MotionProvider>{children}</MotionProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(profileStructuredData) }}
        />
      </body>
    </html>
  );
}
