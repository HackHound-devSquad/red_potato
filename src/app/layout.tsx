"use client"
import "./globals.css";
import { domAnimation, LazyMotion } from "framer-motion";
import { Playfair_Display } from "next/font/google"
const playfair = Playfair_Display({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-playfair"
})
import { Orbitron } from "next/font/google"
const orbitron = Orbitron({
  weight: ["400", "500", "600", "700", "900"],
  subsets: ["latin"],
  variable: "--font-orbitron"
})
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`w-screen overflow-x-hidden ${orbitron.variable} ${playfair.variable}`}>
        <LazyMotion features={domAnimation} strict>
          {children}
        </LazyMotion>
      </body>
    </html>
  );
}
