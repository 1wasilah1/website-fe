"use client";
import "../../../styles/globals.css";
// import { Inter } from "next/font/google";
import { ReactNode } from "react";
import Sidebar from "../../../components/Sidebar/index";
// const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`dark:bg-black`}>
        <div className="flex">
          <Sidebar />
          <div className="w-full overflow-x-auto bg-slate-100">
            <div className="sm:h-[calc(99vh-60px)] overflow-auto ">
              <div className="w-full flex justify-center mx-auto overflow-auto h-[calc(100vh - 120px)] overflow-y-auto relative">
                <div className="w-full md:max-w-6xl sm:p-4">{children}</div>
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}