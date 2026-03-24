import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import { PostHogProvider } from "./providers";
import "./globals.css";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://healthyandfit.app"),
  title: "Healthy&Fit | Track calories with just a photo",
  description:
    "AI-powered calorie tracker. Snap a photo of your plate, scan a barcode, or read a nutrition label. Get instant calories, macros, and a personalized health score.",
  keywords: [
    "calorie tracker",
    "AI food scanner",
    "nutrition tracker",
    "macro tracker",
    "calorie counter app",
    "food photo scanner",
    "health score",
    "meal tracker",
    "barcode food scanner",
    "diet app",
  ],
  authors: [{ name: "Healthy&Fit" }],
  creator: "Healthy&Fit",
  publisher: "Healthy&Fit",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://healthyandfit.app",
    siteName: "Healthy&Fit",
    title: "Healthy&Fit | Track calories with just a photo",
    description:
      "AI-powered calorie tracker. Snap a photo, scan a barcode, or read a label. Instant calories, macros, and a personalized health score.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Healthy&Fit | Track calories with just a photo",
    description:
      "AI-powered calorie tracker. Snap a photo, scan a barcode, or read a label. Instant calories, macros, and a personalized health score.",
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
  other: {
    "theme-color": "#F97316",
    "apple-mobile-web-app-title": "Healthy&Fit",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${nunito.variable} antialiased`}>
        <PostHogProvider>{children}</PostHogProvider>
      </body>
    </html>
  );
}
