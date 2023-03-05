"use client"
import "./globals.css";
import { domAnimation, LazyMotion } from "framer-motion";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="w-screen overflow-x-hidden">
        <LazyMotion features={domAnimation} strict>
          {children}
        </LazyMotion>
      </body>
    </html>
  );
}
