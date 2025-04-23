"use client";
import Image from "next/image";
import React from "react";
import mediagaleri1 from "../../../public/images/mediagaleri/mediagaleri1.png";
import mediagaleri2 from "../../../public/images/mediagaleri/mediagaleri2.png";
import mediagaleri3 from "../../../public/images/mediagaleri/mediagaleri3.png";

const mediaItem = [
  {
    id: 1,
    title: "Mekanisme Pelayanan Informasi Publik",
    link: mediagaleri1,
    description:
      "Seluruh informasi publik yang berada di lingkungan Pemerintah Daerah selain informasi yang dikecualikan dapat diakses oleh publik melalui prosedur permohonan informasi publik.",
  },
  {
    id: 2,
    title: "Mekanisme Pengajuan Keberatan",
    link: mediagaleri2,
    description:
      "Pemohon informasi publik berhak mengajukan keberatan dengan alasan sebagai berikut : a. terdapat penolakan atas permohonan informasi publik; b. tidak disediakannya informasi berkala; c. tidak ditanggapinya permohonan informasi publik; d. permohonan informasi publik ditanggapi tidak sesuai dengan yang diminta; e. tidak dipenuhinya permohonan informasi publik; f. pengenaan biaya yang tidak wajar; dan/ atau g. penyampaian informasi publik melebihi waktu 10 (sepuluh) hari kerja sejak permohonan diterima apabila PPID telah menguasai atau mendokumentasikan informasi publik yang dimohon.",
  },
  {
    id: 3,
    title: "Mekanisme Permohonan Penyelesaian Sengketa Informasi",
    link: mediagaleri3,
    description:
      "Penyelesaian Sengketa Informasi Publik melalui Komisi Informasi dapat ditempuh apabila: a. Pemohon tidak puas terhadap tanggapan atas keberatan yang diberikan oleh atasan PPID; atau b. Pemohon tidak mendapatkan tanggapan atas keberatan yang telah diajukan kepada atasan PPID dalam jangka waktu 30 (tiga puluh) hari kerja sejak keberatan diterima oleh atasan PPID.",
  },
];

export default function MediaGaleri() {
  const downloadLaporan = (url) => {
    window.open(url, "_blank");
  };

  return (
    <section className="py-10 bg-gray-100 my-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center text-2xl font-semibold mb-6 text-[#f98025]">
          Media Galeri
        </h2>
        <div className="overflow-auto grid md:grid-cols-3 sm:grid-cols-1 gap-4">
          {mediaItem.map((feature, index) => (
            <div
              key={index}
              className="cursor-pointer bg-white p-4 m-2 h-full rounded-lg"
              onClick={() => downloadLaporan(feature.link)}
            >
              <div className="items-center">
                <Image
                  src={feature.link}
                  alt="Item Media Galeri"
                  width={100}
                  height={100}
                  className="h-48 w-full object-cover"
                />
              </div>

              <h3 className="mt-2 text-md font-bold text-black">
                {feature.title}
              </h3>
              <p className="text-sm text-black mt-2">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
