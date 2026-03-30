import type { Metadata } from "next";
import { Inter, Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/navbar";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "DrCode — AI Venture Studio",
    template: "%s | DrCode — AI Venture Studio",
  },
  description: "DrCode is an AI Venture Studio that builds scalable AI products from idea to production. We help startups and enterprises turn concepts into successful AI systems with expert development, strategic guidance, and cutting-edge technology.",
  keywords: [
    "AI development",
    "venture studio",
    "artificial intelligence",
    "AI products",
    "machine learning",
    "startup consulting",
    "AI strategy",
    "product development",
    "AI consulting",
    "DrCode",
    "AI venture capital",
    "AI solutions",
    "tech startup",
    "AI innovation"
  ],
  authors: [{ name: "DrCode", url: "https://drcode.ai" }],
  creator: "DrCode",
  publisher: "DrCode",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://drcode.ai"),
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://drcode.ai",
    title: "DrCode — AI Venture Studio",
    description: "DrCode is an AI Venture Studio that builds scalable AI products from idea to production. We help startups and enterprises turn concepts into successful AI systems.",
    siteName: "DrCode",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "DrCode — AI Venture Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DrCode — AI Venture Studio",
    description: "DrCode is an AI Venture Studio that builds scalable AI products from idea to production. We help startups and enterprises turn concepts into successful AI systems.",
    images: ["/og-image.png"],
    creator: "@drcode_ai",
    site: "@drcode_ai",
  },
  verification: {
    google: "your-google-site-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
  appleWebApp: {
    title: "DrCode",
    statusBarStyle: "default",
    capable: true,
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={cn("font-sans", geist.variable)}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#875BF8" />
        <meta name="msapplication-TileColor" content="#875BF8" />
        <meta name="application-name" content="DrCode" />
        <meta name="mobile-web-app-capable" content="yes" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
