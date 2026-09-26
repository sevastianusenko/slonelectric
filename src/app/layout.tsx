import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import Schema from "@/components/Schema";

/** Оригинал набран HOK Sans Pro (коммерческий). Manrope — ближайший свободный аналог. */
const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://slonelectric.com"),
  title: "Agricultural & Industrial Electrician | Myerstown PA",
  description:
    "Slon Electric wires poultry houses, dairy barns, grain systems, plants and commercial buildings across Lebanon, Lancaster and Berks counties. Rated 5.0 on Google. Phone answered 24 hours.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: "Slon Electric",
    title: "Agricultural & Industrial Electrician | Myerstown PA",
    description:
      "Poultry houses, dairy barns, grain systems, plants and commercial buildings. Based in Myerstown, Pennsylvania.",
    images: ["/photos/hero-dairy-barn.webp"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={manrope.variable} suppressHydrationWarning>
      <head>
        {/* Ставим класс до первой отрисовки: секции прячутся только там, где
            JS реально работает, иначе краулер не увидит половину страницы. */}
        <script
          dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }}
        />
        <Schema />
      </head>
      <body className="antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
