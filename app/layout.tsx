import type { Metadata } from "next";
import { Fraunces, Manrope } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-head",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Beauty Skin Studio — Estetică avansată în București",
  description:
    "Studio premium de estetică facială și remodelare corporală în București. Protocol sigur. Experiență calmă. Rezervare rapidă.",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "Beauty Skin Studio",
    description:
      "Estetică avansată. Rezultate vizibile. Programează-te rapid.",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ro" className={`${fraunces.variable} ${manrope.variable}`}>
      <head>
        <link 
          rel="stylesheet" 
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" 
          integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" 
          crossOrigin="anonymous" 
          referrerPolicy="no-referrer" 
        />
      </head>
      <body className="font-body antialiased bg-ivory text-charcoal selection:bg-gold/25 selection:text-noir">
        {children}
      </body>
    </html>
  );
}
