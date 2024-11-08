import type { Metadata } from "next";
import "./globals.css";
import React from "react";
import { ThemeProvider } from 'next-themes'
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Portfolio - Swann Gillé",
  description: "Portfolio de Swann Gillé, développeur web",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class">
            <Header/>
            {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
