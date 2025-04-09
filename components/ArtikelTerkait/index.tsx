"use client";
import React from "react";
import Image from "next/image";

const taxItems = [
  {
    title: "JAK GO",
    description:
      "Kehidupan perkotaan yang semarak dengan berbagai keragaman, dari warisan budaya, inovasi tanpa henti, hingga destinasi kelas dunia yang memikat",
    icon: "/icons/lightning.svg",
  },
  {
    title: "Jakarta Smart City",
    description:
      "Katalisator dalam menciptakan ekosistem kota cerdas 4.0 di Jakarta",
    icon: "/icons/building.svg",
  },
  {
    title: "Berita Jakarta",
    description:
      "Website Berita Resmi Pemerintah Provinsi Daerah Khusus Jakarta",
    icon: "/icons/hotel.svg",
  },
  {
    title: "Jakarta Open Data",
    description:
      "Data yang dapat diakses, digunakan, dan didistribusikan secara bebas oleh siapa saja.",
    icon: "/icons/excavator.svg",
  },
  {
    title: "PPID DKI Jakarta",
    description:
      "Pemerintahan Provinsi Daerah Khusus Jakarta memiliki kewenangan penyelenggaraan urusan pemerintahan yang menjadi kewenangan daerah provinsi dan daerah kabupaten/kota",
    icon: "/icons/water.svg",
  },
];

const ThumbnailPajak = () => {
  return (
    <section className="py-10 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-blue-900 mb-6">Aplikasi Terkait</h2>
        <div className="flex overflow-x-auto gap-4 px-4 lg:justify-center">
          {taxItems.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-xl p-5 w-64 flex-shrink-0"
            >
              <div className="flex justify-center mb-3">
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={50}
                  height={50}
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
              <p className="text-gray-600 text-sm mt-2">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ThumbnailPajak;
