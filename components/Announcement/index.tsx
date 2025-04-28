"use client";
import { FaRegNewspaper } from "react-icons/fa";
import { useState } from "react";

const beritaTerkini = {
  title: "Pasukan Oranye Bersihkan Lumpur Saluran Air",
  date: "Selasa, 22 April 2025 17:03",
  excerpt:
    "Sebanyak enam Pasukan Oranye dikerahkan untuk membersihkan saluran air...",
};

const beritaEkonomi = {
  title: "PD Pasar Jaya Luncurkan Aplikasi Belanja Online",
  date: "Selasa, 22 April 2025 10:15",
  excerpt:
    "Aplikasi ini bertujuan memudahkan masyarakat belanja kebutuhan sehari-hari dari pasar tradisional...",
};

const beritaDprkp = {
  title: "Penyuluhan Pertanian di Kecamatan Matraman",
  date: "Selasa, 22 April 2025 13:25",
  excerpt:
    "Penyuluhan pertanian berkelanjutan diadakan untuk meningkatkan hasil pertanian...",
};

export default function Announcement() {
  const [permohonanInformasi, setPermohonanInformasi] = useState(174);
  const [kunjunganTamu, setKunjunganTamu] = useState(184);
  const [pengunjungWebsite, setPengunjungWebsite] = useState(15988);

  const renderCard = (title, color, item) => {
    return (
      <>
        <div className="border rounded-lg p-4 bg-white shadow">
          <h2
            className={`text-md font-bold mb-2 flex items-center gap-2 ${color}`}
          >
            <FaRegNewspaper /> {title}
          </h2>
          <h3 className="text-lg font-semibold">{item.title}</h3>
          <p className="text-sm text-gray-500">{item.date}</p>
          <p className="text-sm mt-2 text-gray-700">{item.excerpt}</p>
          <a
            href="#"
            className="text-[#104c61] text-sm font-semibold mt-4 block"
          >
            Selengkapnya →
          </a>
        </div>
      </>
    );
  };
  

  return (
    <main className="p-4">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-7xl mx-auto font-[inherit]">
        {/* Left Section (Statistics) */}
        <div className="border rounded-lg p-4 bg-white shadow">
          <h2 className="text-md font-bold mb-2 text-[#f98025]">STATISTIK</h2>
          <div className="mb-2">
            <p className="text-lg font-bold">Jumlah Permohonan Informasi</p>
            <p className="text-2xl text-[#53b1b1] text-center font-bold">{permohonanInformasi}</p>
          </div>
          <div className="mb-2">
            <p className="text-lg font-bold">Jumlah Kunjungan Tamu</p>
            <p className="text-2xl text-[#53b1b1] text-center font-bold">{kunjunganTamu}</p>
          </div>
          <div className="mb-2">
            <p className="text-lg font-bold">Jumlah Pengunjung Website</p>
            <p className="text-2xl text-[#53b1b1] text-center font-bold">{pengunjungWebsite}</p>
          </div>
        </div>

        {/* Existing Grids */}
        {renderCard("Berita Terkini", "text-[#f98025]", beritaTerkini)}
        {renderCard("Berita Ekonomi", "text-[#f98025]", beritaEkonomi)}
        {renderCard("Berita DPRKP", "text-[#f98025]", beritaDprkp)}
      </div>
    </main>
  );
}
