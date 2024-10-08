import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import React from 'react'
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio Adrien Rodrigues - Développeur web",
  description: "Bienvenue sur le portfolio d\'Adrien Rodrigues, développeur web. Découvrez ses compétences.",
  keywords: "développeur, full-stack, portfolio, Adrien Rodrigues"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <html lang="fr">
      <body className={inter.className}>
        {children}
        </body>
    </html>
  );
}
