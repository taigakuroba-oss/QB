import type { Metadata } from "next";
import { Shippori_Mincho_B1, Noto_Sans_JP, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const shippori = Shippori_Mincho_B1({
  weight: ["400", "600", "800"],
  subsets: ["latin"],
  variable: "--font-shippori",
  display: "swap",
});

const noto = Noto_Sans_JP({
  weight: ["300", "400", "500"],
  subsets: ["latin"],
  variable: "--font-noto",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  weight: ["300", "400"],
  style: ["italic"],
  subsets: ["latin"],
  variable: "--font-cormorant",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://utakano.com"),
  title: "うたかの | セルフコーチングでサラッと軽やかに叶える",
  description:
    "セルフコーチングでサラッと軽やかに夢を叶える。うたかのの公式サイト。単発セッション・オンラインサロン・Udemy講座など、あなたのペースで理想の自分に近づくサポートをご提供します。",
  openGraph: {
    title: "うたかの | セルフコーチングでサラッと軽やかに叶える",
    description:
      "セルフコーチングでサラッと軽やかに夢を叶える。うたかのの公式サイト。",
    type: "website",
    locale: "ja_JP",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "うたかの | セルフコーチングでサラッと軽やかに叶える",
    description: "セルフコーチングでサラッと軽やかに夢を叶える。うたかのの公式サイト。",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${shippori.variable} ${noto.variable} ${cormorant.variable} font-sans antialiased bg-warm-white text-charcoal`}
      >
        {children}
      </body>
    </html>
  );
}
