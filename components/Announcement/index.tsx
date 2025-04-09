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

  useEffect(() => {
    fetch("/api/rss")
      .then((res) => res.json())
      .then((data) => setAnnouncements(data.announcements))
      .catch((err) => console.error("Error fetching announcements:", err));
  }, []);

  return (
    <div className="p-4 bg-white shadow-lg rounded-lg">
      <h2 className="text-xl font-bold mb-4">Berita Terkini</h2>
      <div className="flex gap-4 overflow-x-auto scrollbar-hide">
        {announcements.map((news, index) => (
          <a
            key={index}
            href={news.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-none w-64 bg-gray-100 p-4 rounded-lg shadow-md hover:bg-gray-200 transition"
          >
            <img src={news.image} alt={news.title} className="w-full h-40 object-cover rounded-md" />
            <h3 className="mt-2 text-md font-semibold">{news.title}</h3>
            <p className="text-gray-500 text-sm">{new Date(news.pubDate).toLocaleString()}</p>
          </a>
        ))}
      </div>
    </div>
  );
}
