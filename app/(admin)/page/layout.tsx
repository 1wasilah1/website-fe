"use client";
import "../../../styles/globals.css";
// import { Inter } from "next/font/google";
import { ReactNode } from "react";

// const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`dark:bg-black`}>
          {children}
      </body>
    </html>
  );
}