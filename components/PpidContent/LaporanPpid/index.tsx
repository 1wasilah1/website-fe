"use client";
import React from "react";
import { FaRegFilePdf } from "react-icons/fa";

const ppidItem = [
  {
    id: 1,
    title: "SOP PPID DPRKP",
    link: "https://dprkp.jakarta.go.id/uploaded/webcontent/543lqdBIaUcKAaMpn7RPb7ynKJsmAiJU.pdf",
    year: 2024,
    description:
      "Standar Operasional Prosedur Pelayanan dan Pengelolaan Informasi dan Dokumentasi Dinas Perumahan Rakyat dan Kawasan Permukiman Provinsi DKI Jakarta",
  },
  {
    id: 2,
    title: "SK PPID DPRKP",
    link: "https://dprkp.jakarta.go.id/uploaded/webcontent/DrOgxeknwsA3SKJnS6cuwjK3DPygjwou.pdf",
    year: 2023,
    description:
      "Keputusan Kepala Dinas Perumahan Rakyat dan Kawasan Permukiman Provinsi Daerah Khusus Ibukota Jakarta Nomor 583 Tahun 2023 tentang Pejabat Pengelola Informasi dan Dokumentasi",
  },
  {
    id: 3,
    title: "Laporan PPID Tahun 2022",
    link: "https://dprkp.jakarta.go.id/uploaded/webcontent/5JNEv7AFdKZgahHmwP7FKplvf6l5xHLx.pdf",
    year: 2022,
    description:
      "Laporan Layanan Informasi Publik Dinas Perumahan Rakyat dan Kawasan Permukiman Provinsi DKI Jakarta Tahun 2022",
  },
  {
    id: 4,
    title: "Peraturan Gubernur Nomor 40 Tahun 2024",
    link: "https://dprkp.jakarta.go.id/uploaded/webcontent/NPaSVFtZX0KR7pJizc7lwoGXLIv9zQjp.pdf",
    year: 2024,
    description:
      "Peraturan Gubernur Nomor 40 Tahun 2024 tentang Pedoman Pengelolaan Pelayanan Informasi Publik dan Dokumentasi",
  },
  {
    id: 5,
    title: "Daftar Informasi Publik",
    link: "https://dprkp.jakarta.go.id/uploaded/webcontent/w7rATBK3JdcHy2saFwZ5uAxPDKJu7GK7.pdf",
    year: 2023,
    description:
      "Daftar Informasi Publik Pemerintah Provinsi Daerah Khusus Ibukota Jakarta Tahun 2023",
  },
  {
    id: 6,
    title: "Daftar Informasi yang Dikecualikan",
    link: "https://dprkp.jakarta.go.id/uploaded/webcontent/xls0KNoU9KIZVnxoajSChqmLPLF7OetG.pdf",
    year: 2023,
    description:
      "Keputusan Pejabat Pengelola Informasi dan Dokumentasi Dinas Perumahan Rakyat dan Kawasan Permukiman Provinsi Daerah Khusus Ibukota Jakarta Nomor 846 Tahun 2023 tentang Klasifikasi Informasi Yang Dikecualikan",
  },
  {
    id: 7,
    title: "Laporan Layanan Informasi Publik Tahun 2023",
    link: "https://dprkp.jakarta.go.id/uploaded/webcontent/RZH1TiU7X0sekSA57PuuCh6ekeGUZWTl.pdf",
    year: 2023,
    description:
      "Laporan Layanan Informasi Publik Dinas Perumahan Rakyat dan Kawasan Permukiman Provinsi DKI Jakarta Tahun 2023",
  },
  {
    id: 8,
    title: "Laporan Layanan Informasi Publik Tahun 2024",
    link: "https://dprkp.jakarta.go.id/uploaded/webcontent/7PLTcZKfNt5UQwaMw1h2MURrxu1qUfKZ.pdf",
    year: 2024,
    description:
      "Laporan Layanan Informasi Publik Dinas Perumahan Rakyat dan Kawasan Permukiman Provinsi DKI Jakarta Tahun 2024",
  },
  {
    id: 9,
    title:
      "Peraturan Komisi Informasi RI Nomor 1 Tahun 2021 Tentang Standar Layanan Informasi Publik",
    link: "https://dprkp.jakarta.go.id/uploaded/webcontent/ibapYUPyIMoDVUnO0UuiWEjWH5XSihbk.pdf",
    year: 2021,
    description:
      "Peraturan Komisi Informasi RI Nomor 1 Tahun 2021 Tentang Standar Layanan Informasi Publik",
  },
  {
    id: 10,
    title: "Formulir Keberatan",
    link: "https://dprkp.jakarta.go.id/uploaded/webcontent/W0iJ0FIYoM2E65CHcf2P6OswdXHnhsAL.pdf",
    year: 2023,
    description: "Formulir Keberatan Informasi PPID",
  },
  {
    id: 11,
    title: "Formulir Permohonan Informasi",
    link: "https://dprkp.jakarta.go.id/uploaded/webcontent/6SVUKvoFUstFvqVQtciOV4H9PPePhnHj.pdf",
    year: 2023,
    description: "Formulir Permohonan Informasi PPID",
  },
];

export default function LaporanPpid() {
  const downloadLaporan = (url) => {
    window.open(url, "_blank");
  };

  return (
    <section className="py-10 bg-green-50 my-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center text-2xl font-semibold mb-6 text-green-700">
          Laporan PPID
        </h2>
        <div className="overflow-auto grid md:grid-cols-3 sm:grid-cols-1 gap-4">
          {ppidItem.map((feature, index) => (
            <div
              key={index}
              className="cursor-pointer bg-white p-4 m-2 h-full flex"
              onClick={() => downloadLaporan(feature.link)}
            >
              <div
                className={`p-2 rounded-full w-12 h-12 flex items-center justify-center`}
              >
                <FaRegFilePdf className="text-xl text-black" />
              </div>
              <div>
                <h3 className="mt-2 text-md font-bold text-black">
                  {feature.title}
                </h3>
                <p className="text-sm text-black mt-2">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
