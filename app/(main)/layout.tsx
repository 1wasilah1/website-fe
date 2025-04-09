"use client";
import "../../styles/globals.css";
import { Inter } from "next/font/google";
import { ReactNode } from "react";
import { ThemeProvider } from "next-themes";
import Navbar from "../../components/Navbar";
import FloatMenu from "../../components/FloatMenu";
import ScrollToTop from "../../components/ScrollToTop";
import Lines from "../../components/Lines";
import Footer from "../../components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`dark:bg-black ${inter.className}`}>
        <ThemeProvider enableSystem={false} attribute="class" defaultTheme="light">
          {/* Global Layout */}
          <Lines />
          <Navbar />
          <FloatMenu />
          {/* <Header /> */}
          {children}
          <Footer />
          <ScrollToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}