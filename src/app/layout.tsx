import type { Metadata } from "next";
import { Archivo, Lora, IBM_Plex_Mono } from "next/font/google";
import "./ui/reset.css";
import "./ui/globals.css";
import "./ui/utils.css";

import Header from "./components/Header";
import Footer from "./components/Footer";

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
});

const ibm_plex_mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-ibm-plex-mono",
});

export const metadata: Metadata = {
  title: "Aubrey Garcia's Portfolio",
  description: "Body of work by Aubrey Garcia, a Product and Design Engineer.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${archivo.variable} ${lora.variable} ${ibm_plex_mono.variable}`}
    >
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
