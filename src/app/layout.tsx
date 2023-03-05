"use client"
import "./globals.css";
import { domAnimation, LazyMotion } from "framer-motion";
import { Playfair_Display } from "next/font/google"
const playfair = Playfair_Display({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-playfair"
})
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`w-screen overflow-x-hidden ${playfair.variable}`}>
        <LazyMotion features={domAnimation} strict>
          {children}
        </LazyMotion>
      </body>
    </html>
  );
}
