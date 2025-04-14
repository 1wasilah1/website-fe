"use client";
import React from "react";

export default function TanggungJawab() {

  return (
    <section className="py-10 bg-green-50 my-4">
      <div className="max-w-6xl mx-auto">
        <div>
          <h2 className="text-center text-2xl font-bold mb-6 text-green-700">
            Tanggung Jawab, Tugas, dan Wewenang
          </h2>
          <div className="p-4 m-2">
            <p className="text-gray-600 font-sans">
              Tanggung jawab, tugas, dan wewenang PPID DPRKP sesuai dengan
              Peraturan Gubernur No. 175 Tahun 2016 tentang Layanan Informasi
              Publik dan Keputusan Kepala Dinas Perumahan Rakyat dan Kawasan
              Permukiman Provinsi DKI Jakarta No. 29 Tahun 2021 tentang Pejabat
              Pengelola Informasi dan Dokumentasi.
            </p>
          </div>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 sm:grid-cols-1 gap-6">
          <div className="bg-white p-4 m-2 h-full">
            <div className="text-center mb-4">
              <h2 className="text-2xl font-semibold text-green-700">
                Tanggung Jawab
              </h2>
            </div>
            <div>
              <p className="text-gray-600 font-sans">
                1. PPID pada Perangkat Daerah bertanggung jawab di bidang
                layanan informasi publik yang meliputi proses penyimpanan,
                pendokumentasian, penyediaan pelayanan dan pengumuman informasi
                yang dapat diakses oleh publik sesuai dengan ketentuan peraturan
                perundang-undangan.
              </p>
              <p className="text-gray-600">
                2. Informasi publik sebagaimana dimaksud pada angka 1 (satu)
                dikumpulkan dengan cara pendataan informasi publik yang ada pada
                Perangkat Daerah untuk dilakukan pembuatan dan pemutakhiran
                daftar informasi publik paling sedikit 1 (satu) kali dalam 1
                (satu) bulan
              </p>
            </div>
          </div>
          <div className="bg-white p-4 m-2 h-full">
            <div className="text-center mb-4">
              <h2 className="text-2xl font-semibold text-green-700">Tugas</h2>
            </div>
            <div>
              <p className="text-gray-600">
                1. Meningkatkan pengelolaan dan pelayanan informasi yang
                berkualitas, benar dan bertanggung jawab.
              </p>
              <p className="text-gray-600">
                2. Membangun dan mengembangkan sistem penyediaan dan layanan
                informasi.
              </p>
              <p className="text-gray-600">
                3. Meningkatkan dan mengembangkan kompetensi dan kualitas SDM
                dalam bidang pelayanan informasi.
              </p>
              <p className="text-gray-600">
                4. Mewujudkan keterbukaan informasi Dinas Perumahan Rakyat dan
                Kawasan Permukiman Provinsi DKI Jakarta dengan proses yang
                cepat, tepat, mudah dan sederhana.
              </p>
            </div>
          </div>
          <div className="bg-white p-4 m-2 h-full">
            <div className="text-center mb-4">
              <h2 className="text-2xl font-semibold text-green-700">
                Wewenang
              </h2>
            </div>
            <div>
              <p className="text-gray-600">
                1. Mengoordinasikan pelayanan informasi publik pada Perangkat
                Daerah dan/atau pejabat fungsional yang menjadi cakupan
                kerjanya.
              </p>
              <p className="text-gray-600">
                2. Menetapkan/menentukan suatu informasi publik dapat diakses
                publik atau tidak berdasarkan pengujian tentang konsekuensi.
              </p>
              <p className="text-gray-600">
                3. Meningkatkan dan mengembangkan kompetensi dan kualitas SDM
                dalam bidang pelayanan informasi.
              </p>
              <p className="text-gray-600">
                4. Mewujudkan keterbukaan informasi Dinas Perumahan Rakyat dan
                Kawasan Permukiman Provinsi DKI Jakarta dengan proses yang
                cepat, tepat, mudah dan sederhana.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
