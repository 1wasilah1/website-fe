"use client";
import "../../styles/globals.css";
// import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { ReactNode, useState } from "react";
import FloatMenu from "../../components/FloatMenu";
import Footer from "../../components/Footer";
import Lines from "../../components/Lines";
import ModalContent from "../../components/Modal";
import Navbar from "../../components/Navbar";
import ScrollToTop from "../../components/ScrollToTop";

// const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: ReactNode }) {
  const [statusModal, setStatusModal] = useState(true);

  function handleClickEvent(data) {
    setStatusModal(data);
  }

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`dark:bg-black`} suppressHydrationWarning={true}>
        <ThemeProvider
          enableSystem={false}
          attribute="class"
          defaultTheme="light"
        >
          {/* Global Layout */}
          <Lines />
          <Navbar />
          {statusModal ? (
            <ModalContent emitClickEvent={handleClickEvent} />
          ) : (
            <></>
          )}
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