import type { Metadata } from "next";
import { JetBrains_Mono, Manrope, Space_Grotesk } from "next/font/google";
import { Providers } from "@/components/site/providers";
import { getBaseUrl } from "@/lib/utils.server";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = getBaseUrl();

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Manish Kumar Shah | Full-Stack Engineer + Aspiring Data Scientist",
    template: "%s | Manish Kumar Shah",
  },
  description:
    "Premium developer portfolio for AI/ML, full-stack, and research engineering. Projects, publications, and experiments built for real-world impact.",
  applicationName: "Manish Kumar Shah Portfolio",
  keywords: [
    "AI/ML Engineer",
    "Full Stack Developer",
    "Research Engineer",
    "Next.js",
    "TypeScript",
    "Portfolio",
  ],
  authors: [{ name: "Manish Kumar Shah" }],
  creator: "Manish Kumar Shah",
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Manish Kumar Shah | Full-Stack Engineer + Aspiring Data Scientist",
    description:
      "Premium developer portfolio for AI/ML, full-stack, and research engineering.",
    images: [
      {
        url: "/opengraph.svg",
        width: 1200,
        height: 630,
        alt: "Manish Kumar Shah Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Manish Kumar Shah | Full-Stack Engineer + Aspiring Data Scientist",
    description:
      "Premium developer portfolio for AI/ML, full-stack, and research engineering.",
    images: ["/opengraph.svg"],
  },
  alternates: {
    canonical: siteUrl,
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} dark h-full scroll-smooth antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full bg-background text-foreground">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
