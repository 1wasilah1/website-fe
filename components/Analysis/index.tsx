"use client";
import { useState, useEffect } from "react";

const YOUTUBE_API_KEY = "AIzaSyBi8Diunv1-jYps0onDG-no1lv8e409Lso"; // Ganti dengan API Key Anda
const VIDEO_ID = "1DvBALUFn6I"; // ID Video yang ingin diambil informasinya

export default function GoldAnalysis() {
  const [videoTitle, setVideoTitle] = useState("");
  const [videoDescription, setVideoDescription] = useState("");
  const [videoAuthor, setVideoAuthor] = useState("");
  const [publishDate, setPublishDate] = useState("");

  useEffect(() => {
    async function fetchVideoDetails() {
      try {
        const response = await fetch(
          `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${VIDEO_ID}&key=${YOUTUBE_API_KEY}`
        );
        const data = await response.json();

        if (data.items.length > 0) {
          const snippet = data.items[0].snippet;
          setVideoTitle(snippet.title);
          setVideoDescription(snippet.description);
          setVideoAuthor(snippet.channelTitle);
          setPublishDate(new Date(snippet.publishedAt).toLocaleDateString("id-ID", {
            year: "numeric",
            month: "long",
            day: "numeric",
          }));
        }
      } catch (error) {
        console.error("Error fetching video details:", error);
      }
    }

    fetchVideoDetails();
  }, []);

  return (
    <section className="px-6 py-10 bg-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6 items-center">
        <div>
          <h2 className="text-2xl font-bold">{videoTitle || "Memuat judul video..."}</h2>
          <h3 className="text-lg font-semibold mt-2">🎥 {videoAuthor || "Memuat author..."}</h3>
          <p className="text-gray-700 mt-2">{videoDescription || "Memuat deskripsi video..."}</p>
          
          {/* Author & Date */}
          <div className="mt-3 text-sm text-gray-600">
            📅 Dipublikasikan pada: <strong>{publishDate || "Memuat tanggal..."}</strong> <br />
      
          </div>

          <a href="#" className="text-blue-600 font-semibold mt-2 inline-block">Informasi selengkapnya</a>
        </div>
        
        <div className="relative w-full h-64 md:h-80">
          <iframe 
            width="560" 
            height="315" 
            src={`https://www.youtube.com/embed/${VIDEO_ID}`} 
            title={videoTitle} 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerPolicy="strict-origin-when-cross-origin" 
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
}
