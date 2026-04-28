import type { Metadata } from "next";
import { DM_Sans, DM_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  style: ["normal", "italic"],
  variable: "--font-dm-sans",
  display: "swap",
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["300", "400"],
  variable: "--font-dm-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title:
    "Ankit Raj | Software Engineer Portfolio (Node.js, Microservices, Kafka)",
  description:
    "Software engineer specializing in scalable systems, microservices, Kafka, and ERP software. Explore projects and system design insights.",
  keywords: [
    "Software Engineer",
    "Backend Engineer",
    "Node.js",
    "Microservices",
    "Kafka",
    "System Design",
    "ankitraj5ar",
  ],
  openGraph: {
    title:
      "Ankit Raj | Software Engineer Portfolio (Node.js, Microservices, Kafka)",
    description:
      "Software engineer specializing in scalable systems, microservices, Kafka, and ERP software. Explore projects and system design insights.",
    url: "https://ankitraj5ar.online",
    siteName: "Ankit Raj Portfolio",
    images: [
      {
        url: "/icon.png",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Ankit Raj | Software Engineer Portfolio (Node.js, Microservices, Kafka)",
    description:
      "Software engineer specializing in scalable systems, microservices, Kafka, and ERP software. Explore projects and system design insights.",
    images: ["/icon.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://ankitraj5ar.online",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${dmMono.variable}`}>
      <body className="antialiased">
        {children}
        <SpeedInsights />
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
}
