"use client";
import { useEffect, useState } from "react";

type Announcement = {
  title: string;
  link: string;
  pubDate: string;
  image: string;
};

export default function Announcements() {
  const [announcements, setAnnouncements] = useState<Announcement[]>([]);

  const mediaItem = [
    {
      id: 1,
      title: "Lowongan Pekerjaan Senior Assistant Profesional",
      link: "https://dprkp.jakarta.go.id/uploaded/repoimage/62defa8643d3c279c3bf382062c1e50190f79653.png",
      pubDate: "2025-03-25",
      image: "https://dprkp.jakarta.go.id/uploaded/repoimage/62defa8643d3c279c3bf382062c1e50190f79653.png",
    },
    {
      id: 2,
      title: "Laporan Progres Verifikasi",
      link: "https://dprkp.jakarta.go.id/uploaded/repoimage/ae768c4286064d2cf766396a0fb74a4872de7d1e.png",
      pubDate: "2025-03-25",
      image: "https://dprkp.jakarta.go.id/uploaded/repoimage/ae768c4286064d2cf766396a0fb74a4872de7d1e.png",
    },
    {
      id: 3,
      title: "Fasilitas Pembiayaan untuk Menara Kanaya Cilangkap",
      link: "https://dprkp.jakarta.go.id/uploaded/repoimage/231f1cb7d12dc9f671ffad0b78c9e40f5c810b9d.png",
      pubDate: "2024-02-28",
      image: "https://dprkp.jakarta.go.id/uploaded/repoimage/231f1cb7d12dc9f671ffad0b78c9e40f5c810b9d.png",
    },
    {
      id: 4,
      title: "https://dprkp.jakarta.go.id/uploaded/repoimage/5e389e72ce800f4750eae86b170de42b0e397c29.png",
      link: "https://dprkp.jakarta.go.id/uploaded/webcontent/r56y5rBI2dDfDEiMAS8BHC1wqEYpXtx9.png",
      pubDate: "2023-06-09",
      image: "https://dprkp.jakarta.go.id/uploaded/repoimage/5e389e72ce800f4750eae86b170de42b0e397c29.png",
    },
    {
      id: 5,
      title: "Penandatanganan Nota Kesepahaman (MoU), DPRKP dengan Universitas Gunadarma Terkait Pengembangan Perumahan dan Wilayah Perkotaan",
      link: "https://dprkp.jakarta.go.id/uploaded/repoimage/e1403d4fb21954b30829dab58e1ff6ac021364dc.png",
      pubDate: "2023-01-11",
      image: "https://dprkp.jakarta.go.id/uploaded/repoimage/e1403d4fb21954b30829dab58e1ff6ac021364dc.png",
    },
    {
      id: 6,
      title: "Peresmian Rumah Susun Asrama Polri Menteng Polres Metro Jakarta Pusat",
      link: "https://dprkp.jakarta.go.id/uploaded/repoimage/5e2404edcaaaf5e7063be0b26910c9e7f6e3590e.png",
      pubDate: "2022-10-06",
      image: "https://dprkp.jakarta.go.id/uploaded/repoimage/5e2404edcaaaf5e7063be0b26910c9e7f6e3590e.png",
    },
  ];

  useEffect(() => {
    setAnnouncements(mediaItem);
    // fetch("/api/rss")
    //   .then((res) => res.json())
    //   .then((data) => setAnnouncements(data.announcements))
    //   .catch((err) => console.error("Error fetching announcements:", err));
  }, []);

  return (
    <div className="p-4 bg-white shadow-lg rounded-lg">
      <div className="max-w-6xl mx-auto mb-4">
        <h2 className="text-center text-2xl font-semibold mb-6 text-black">
          Media Galeri
        </h2>
        <div className="flex gap-4 overflow-x-auto scrollbar-hide">
          {announcements.map((news, index) => (
            <a
              key={index}
              href={news.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-none w-64 bg-gray-100 p-4 rounded-lg shadow-md hover:bg-gray-200 transition"
            >
              <img
                src={news.image}
                alt={news.title}
                className="w-full h-40 object-cover rounded-md"
              />
              <h3 className="mt-2 text-md font-semibold">{news.title}</h3>
              <p className="text-gray-500 text-sm">
                {new Date(news.pubDate).toLocaleString("id-ID", { dateStyle: 'long' })}
              </p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
