import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: "#173b25",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://proyecto-vida-cuba.vercel.app"),
  title: "Proyecto Comunitario Familiar «Vida» | Arroyo Naranjo, La Habana",
  description:
    "Iniciativa comunitaria independiente en La Habana, Cuba. Permacultura, educación artística para la infancia, medicina botánica y resiliencia con energía solar.",
  keywords: [
    "Proyecto Vida Cuba",
    "Arroyo Naranjo",
    "Natalia Quintana",
    "Permacultura Cuba",
    "Belly of the Beast Cuba",
    "La Habana comunidad",
    "Paneles solidarios",
  ],
  authors: [{ name: "Proyecto Comunitario Familiar Vida" }],
  openGraph: {
    title: "Proyecto Comunitario Familiar «Vida» | Arroyo Naranjo, Cuba",
    description:
      "Frente a la escasez y los apagones, las familias de Arroyo Naranjo cultivan un santuario de arte, permacultura y energía solar para sus niños.",
    url: "https://proyecto-vida-cuba.vercel.app",
    siteName: "Proyecto Familiar Vida",
    images: [
      {
        url: "/images/documentary-thumb.jpg",
        width: 1280,
        height: 720,
        alt: "Natalia Quintana y los niños del Proyecto Vida en Arroyo Naranjo, La Habana",
      },
    ],
    locale: "es_CU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Proyecto Comunitario Familiar «Vida»",
    description:
      "Arte infantil, permacultura y energía solar frente a la crisis en Arroyo Naranjo, La Habana.",
    images: ["/images/documentary-thumb.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}>
      <body className="min-h-screen bg-[#faf8f5] text-[#121c15] font-sans antialiased selection:bg-amber-200 selection:text-amber-950">
        {children}
      </body>
    </html>
  );
}
