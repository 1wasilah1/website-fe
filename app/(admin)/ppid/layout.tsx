"use client";
import "../../../styles/globals.css";
import { ThemeProvider } from "next-themes";
import { ReactNode } from "react";

import Navbar from "../../../components/Navbar";
import FloatMenu from "../../../components/FloatMenu";
import ScrollToTop from "../../../components/ScrollToTop";
import Lines from "../../../components/Lines";
import Footer from "../../../components/Footer";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider
          enableSystem={false}
          attribute="class"
          defaultTheme="light"
        >
          <Lines />
          <Navbar />
          <FloatMenu />
          {children}
          <Footer />
          <ScrollToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
