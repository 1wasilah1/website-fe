"use client";
import React, { useEffect, useState } from "react";

let ppidItem = [
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
    year: null,
    description: "Formulir Keberatan Informasi PPID",
  },
  {
    id: 11,
    title: "Formulir Permohonan Informasi",
    link: "https://dprkp.jakarta.go.id/uploaded/webcontent/6SVUKvoFUstFvqVQtciOV4H9PPePhnHj.pdf",
    year: null,
    description: "Formulir Permohonan Informasi PPID",
  },
];

export default function LaporanPpid() {
  const [value, setValue] = useState("");
  const [dataLaporan, setDataLaporan] = useState([]);

  useEffect(() => {
    setDataLaporan(ppidItem);
  }, []);

  const downloadLaporan = (url) => {
    window.open(url, "_blank");
  };

  const searchValue = (keyword) => {
    if (keyword !== "") {
      let search;
      search = dataLaporan.filter((data) =>
        data["title"].toLowerCase().includes(keyword)
      );
      setDataLaporan(search);
    } else {
      setDataLaporan(ppidItem);
    }
  };

  return (
    <section className="py-10 bg-[#104c61] my-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center text-2xl font-semibold mb-6 text-[#f98025]">
          Laporan PPID
        </h2>
        <div className="mx-2">
          <div className="border-s-green-700 my-2">
            <input
              className="input sm:w-64 w-36 bg-white rounded-sm"
              placeholder="Cari laporan"
              type="text"
              onChange={(e) => {
                setValue(e.currentTarget.value);
              }}
              onKeyUp={() => {
                searchValue(value);
              }}
            />
          </div>
        </div>

        <div className="overflow-x-auto space-y-4 w-full mx-2">
          <table className="table table-compact min-w-max overflow-x-scroll w-full">
            <thead className="rounded-md bg-[#f98025] text-white">
              <tr className="h-[44px]">
                <th className="w-14 p-2">No</th>
                <th className="w-auto">Nama Laporan</th>
                <th className="w-auto p-2">Tahun</th>
                <th className="w-auto p-2">Download</th>
              </tr>
            </thead>
            <tbody className="overflow-y-auto bg-white">
              {dataLaporan && dataLaporan.length > 0 ? (
                <>
                  {dataLaporan.map((row, index) => (
                    <tr className="h-[44px]" key={index}>
                      <td className="text-sm text-center z-10 bg-white font-sans">
                        {index + 1}
                      </td>
                      <td className="text-sm text-left font-sans">
                        {row.title ?? ""}
                      </td>
                      <td className="text-sm text-center font-sans">
                        {row.year ?? "-"}
                      </td>
                      <td className="w-10 right-0 z-5 text-white text-xs font-sans text-center">
                        <button
                          className="bg-[#f98025] p-2 rounded-sm"
                          onClick={() => downloadLaporan(row.link)}
                        >
                          Lihat Data
                        </button>
                      </td>
                    </tr>
                  ))}
                </>
              ) : (
                <tr className="h-[44px]">
                  <td className="w-auto text-center text-black">
                    Data Tidak Ditemukan
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
