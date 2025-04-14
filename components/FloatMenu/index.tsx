"use client";
import { useState } from "react";
import { FaFacebook, FaInstagram, FaShareAlt } from "react-icons/fa";
import { FaXTwitter, FaYoutube } from "react-icons/fa6";

const FloatingMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed right-4 bottom-32 flex flex-col items-end z-50">
      {/* Tombol utama */}
      <div
        className="bg-blue-500 text-white px-4 py-2 rounded-l-full flex items-center gap-2 cursor-pointer shadow-lg transition-all"
        onClick={() => setIsOpen(!isOpen)}
      >
        <FaShareAlt size={20} />
        <span>Ikuti Kami</span>
      </div>

      {/* Submenu */}
      <div
        className={`absolute bottom-full right-0 mb-2 bg-blue-500 text-white p-3 rounded-lg shadow-lg transition-all ${
          isOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
        }`}
      >
        <a
          href="https://www.instagram.com/dinasperumahan.jakarta"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:bg-blue-600 px-3 py-2 rounded w-full"
        >
          <FaInstagram size={18} />
        </a>
        <a
          href="https://x.com/perumahandki"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:bg-blue-600 px-3 py-2 rounded w-full"
        >
          <FaXTwitter size={18} />
        </a>
        <a
          href="https://web.facebook.com/dinasperumahan.dki/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:bg-blue-600 px-3 py-2 rounded w-full"
        >
          <FaFacebook size={18} />
        </a>
        <a
          href="https://www.youtube.com/@dinasperumahan.jakarta"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:bg-blue-600 px-3 py-2 rounded w-full"
        >
          <FaYoutube size={18} />
        </a>
      </div>
    </div>
  );
};

export default FloatingMenu;
