import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { StructuredData } from "./structured-data";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: {
    default: "Daylan Hoff - DevOps Engineer & Privacy Advocate",
    template: "%s | Daylan Hoff"
  },
  description: "DevOps Engineer specializing in C#/.NET, AWS, and privacy-first application development. Building secure, scalable solutions with modern DevOps practices and automation.",
  keywords: [
    "Daylan Hoff",
    "DevOps Engineer",
    "C# Developer",
    ".NET Developer",
    "AWS Solutions",
    "Privacy Advocate",
    "Software Engineer",
    "Cloud Infrastructure",
    "DevOps Automation",
    "Privacy-First Development",
    "Technology Leader",
    "Full Stack Developer",
    "CI/CD Pipeline",
    "Infrastructure as Code"
  ],
  authors: [{ name: "Daylan Hoff", url: "https://daylanhoff.com" }],
  creator: "Daylan Hoff",
  publisher: "Daylan Hoff",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://daylanhoff.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://daylanhoff.com",
    siteName: "Daylan Hoff Portfolio",
    title: "Daylan Hoff - DevOps Engineer & Privacy Advocate",
    description: "DevOps Engineer specializing in C#/.NET, AWS, and privacy-first application development. Building secure, scalable solutions with modern DevOps practices.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Daylan Hoff - DevOps Engineer & Privacy Advocate",
      },
    ],
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
  verification: {
    google: "your-google-verification-code",
    // Add other verification codes as needed
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <StructuredData />
      </head>
      <body className={inter.className}>
        <ThemeProvider defaultTheme="system" storageKey="portfolio-theme">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
