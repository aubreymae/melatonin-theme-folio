import type { Metadata } from "next";
import { Archivo, Lora } from "next/font/google";
import "./ui/globals.css";

import Header from "./components/Header";
import Footer from "./components/Footer";

const archivo = Archivo({
  subsets: ["latin"],
});

const lora = Lora({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aubrey Garcia's Portfolio",
  description: "Body of work by Aubrey Garcia, a Product and Design Engineer.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${archivo.className} ${lora.className}`}>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
