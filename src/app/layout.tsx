import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTopButton from "@/../utils/ScrollToTopButton";
import { LanguageProvider } from "@/context/language-context";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Thanush Arugonda | Master's Student In Germany.",
  description:
    "Explore the portfolio of Thanush Arugonda, pursuing masters in Artificial Intelligence for Smart Sensors and Actuators",
  keywords: [
    "Thanush Arugonda",
    "Full Stack Developer",
    "Next.js Portfolio",
    "AI Automation",
    "Master's Student",
    "React Developer",
  ],
  authors: [{ name: "Thanush Arugonda" }],
  openGraph: {
    title: "Thanush Arugonda | Personal Portfolio",
    description:
      "Full Stack Developer & AI Automation Expert — Building the future of the web.",
    url: "https://abdulbasit-005.vercel.app",
    siteName: "Thanush Arugonda Portfolio",
    images: [
      {
        url: "/Website-overview.png",
        width: 1200,
        height: 630,
        alt: "Thanush Arugonda Portfolio Overview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Thanush Arugonda | Full Stack Developer",
    description: "Building modern web applications and AI automations.",
    images: ["/Website-overview.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LanguageProvider>
          <Navbar />
          <main className="text-white">
            <div className="container">{children}</div>
          </main>
          <ScrollToTopButton />
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
