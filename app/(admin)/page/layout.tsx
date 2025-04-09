"use client";
import "../../../styles/globals.css";
import { Inter } from "next/font/google";
import { ReactNode } from "react";
import Sidebar from "./page";


const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`dark:bg-black ${inter.className}`}>
  
          <Sidebar />
          {children}

      </body>
    </html>
  );
}