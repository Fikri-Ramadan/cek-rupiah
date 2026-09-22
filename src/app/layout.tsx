import type { Metadata, Viewport } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toast";

const jetBrainMono = JetBrains_Mono({
  variable: '--font-jetbrains-mono',
  subsets: ["latin"],
})

export const viewport: Viewport = {
  themeColor: "#171719",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: "Cek Rupiah | Real-time Exchange Rates",
    template: "%s | Currency Tracker",
  },
  description: "Monitor real-time currency exchange rates, historical data charts, and convert currencies with precision.",
  keywords: ["currency converter", "exchange rates", "forex charts", "historical rates", "finance tools"],
  authors: [{ name: "Cek-Rupiah" }],
  creator: "Cek-Rupiah",
  
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://cekrupiah.vercel.app/",
    siteName: "Cek Rupiah",
    title: "Cek Rupiah | Real-time Exchange Rates",
    description: "Convert currencies and analyze historical trends with our interactive charts.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Currency Tracker Dashboard",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Currency Tracker | Exchange Rates",
    description: "Real-time currency conversion and historical data visualization.",
    images: ["/og-image.jpg"],
    creator: "@cekrupiah",
  },

  icons: {
    icon: "/favicon.svg",
    apple: "/apple-touch-icon.png",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${jetBrainMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col dark bg-neutral-900 text-neutral-100">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
