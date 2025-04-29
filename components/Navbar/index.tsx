"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Menu, X, ChevronDown, Lock, Search } from "lucide-react";
import Image from "next/image";
import logoJayaRaya from "../../public/images/logo-jaya-raya.png";
import logoDprkp from "../../public/images/logo-dprkp-back-putih.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState<number | null>(null);

  // Daftar menu berdasarkan situs DPRKP Jakarta
  const navItems = [
    { name: "Beranda", path: "/" },
    {
      name: "Profil",
      path: "/profil",
      subMenu: ["Visi & Misi", "Struktur Organisasi", "Tugas & Fungsi"],
    },
    {
      name: "Informasi Publik",
      path: "/informasi-publik",
      subMenu: [
        "Berita",
        "Agenda",
        "Pengumuman",
        "Regulasi",
        "Laporan Kinerja",
      ],
    },
    {
      name: "Layanan",
      path: "/layanan",
      subMenu: [
        "Rusunawa",
        "Pendaftaran Rumah DP 0 Rupiah",
        "Bantuan Renovasi Rumah",
      ],
    },
    {
      name: "Program",
      path: "/program",
      subMenu: ["Rumah DP 0 Rupiah", "Peningkatan Kualitas Permukiman"],
    },
    { name: "PPID", path: "/ppid" },
    { name: "Spasial Perumahan", path: "/spasialperumahan" },
    { name: "Kontak", path: "/kontak" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md dark:bg-gray-900 z-[10000] font-[inherit]">
      <div className="mx-auto px-6 py-3 flex justify-between items-center w-full">
        <Link href="/" className="flex items-center">
          <Image
            src={logoJayaRaya}
            alt="Logo Jaya Raya DKI Jakarta"
            width={50}
            height={50}
          />
          <Image
            src={logoDprkp}
            alt="Logo DPRKP DKI Jakarta"
            width={50}
            height={50}
          />
          <div className="flex flex-col">
            <span className="ml-2 text-lg font-bold text-gray-800">DPRKP </span>
            <span className="ml-2 text-xs font-bold text-gray-800">
              DKI Jakarta
            </span>
          </div>
        </Link>
        {/* Menu Desktop */}
        <div className="hidden md:flex space-x-6">
          {navItems.map((item, index) => (
            <div
              key={index}
              className="relative"
              onMouseEnter={() => setDropdownOpen(index)}
              onMouseLeave={() => setDropdownOpen(null)}
            >
              <motion.div
                whileHover={{ scale: 1.05, color: "#F59E0B" }}
                transition={{ duration: 0.2 }}
              >
                <Link
                  href={item.path}
                  className="text-sm text-gray-800 dark:text-white flex items-center gap-1"
                >
                  {item.name}
                  {item.subMenu && <ChevronDown size={14} />}
                </Link>
              </motion.div>

              {/* Dropdown Menu */}
              {item.subMenu && dropdownOpen === index && (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 15 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="absolute left-0 mt-2 w-56 bg-white dark:bg-gray-800 shadow-lg rounded-md"
                >
                  <div className="absolute -top-6 left-10 right-0 h-6 bg-transparent" />
                  <div className="absolute left-0 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2" />
                  {item.subMenu.map((sub, subIndex) => (
                    <div key={subIndex}>
                      <Link
                        key={subIndex}
                        href={`/${sub.toLowerCase().replace(/ /g, "-")}`}
                        className="block px-4 py-2 text-xs text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md"
                      >
                        {sub}
                      </Link>
                    </div>
                  ))}
                </motion.div>
              )}
            </div>
          ))}
        </div>

        <div className="flex">
          {/* Login & Search */}
          <div className="flex items-center gap-4">
            {/* Login Button */}
            <Link
              href="/login"
              className="flex items-center bg-[#f98025] text-white px-4 py-2 rounded-md text-xs"
            >
              <Lock size={14} className="mr-1" /> Login
            </Link>

            {/* Search Icon */}
            <button className="text-gray-600 dark:text-white">
              <Search size={18} />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-white dark:bg-gray-900"
        >
          {navItems.map((item, index) => (
            <div key={index} className="relative">
              <button
                onClick={() =>
                  setDropdownOpen(dropdownOpen === index ? null : index)
                }
                className="w-full text-left px-6 py-3 text-sm text-gray-800 dark:text-white flex justify-between items-center"
              >
                {item.name}
                {item.subMenu && <ChevronDown size={14} />}
              </button>

              {item.subMenu && dropdownOpen === index && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="bg-gray-100 dark:bg-gray-800"
                >
                  {item.subMenu.map((sub, subIndex) => (
                    <Link
                      key={subIndex}
                      href={`/${sub.toLowerCase().replace(/ /g, "-")}`}
                      className="block px-6 py-2 text-xs text-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700"
                      onClick={() => setIsOpen(false)}
                    >
                      {sub}
                    </Link>
                  ))}
                </motion.div>
              )}
            </div>
          ))}
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
