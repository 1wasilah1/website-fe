"use client";
import React from "react";

import LaporanPpid from "./LaporanPpid";
import MediaGaleri from "./MediaGaleri";
import StrukturOrganisasi from "./StrukturOrganisasi";
import TanggungJawab from "./TanggungJawab";
import VisiMisi from "./VisiMisi";

export default function PpidContent() {
  return (
    <>
      <section className="py-10 bg-gray-100 my-4">
        <div className="text-center m-4">
          <h2 className="text-2xl font-bold text-green-700 mb-2">
            Profil Pejabat Pengelola Informasi dan Dokumentasi (PPID)
          </h2>
          <p className="text-gray-600">
            Pejabat Pengelola Informasi dan Dokumentasi (PPID) Dinas Perumahan
            Rakyat dan Kawasan Permukiman Provinsi DKI Jakarta (DPRKP) merupakan
            ujung tombak pelayanan informasi pada DPRKP yang tugasnya mengelola
            dan memberikan pelayanan informasi kepada masyarakat.
          </p>
        </div>
      </section>

      <VisiMisi />
      <StrukturOrganisasi />
      <TanggungJawab />
      <MediaGaleri />
      <LaporanPpid />

      <section className="py-10 bg-gray-100 my-4">
        <div className="text-center m-4">
          <h2 className="text-2xl font-bold text-green-700 mb-2">
            Biaya Pelayanan Informasi Publik
          </h2>
          <p className="text-gray-600">
            Dalam hal pemohon ingin mendapatkan salinan informasi melalui
            pengiriman jasa pos dan jasa kurir dikenakan biaya pos dan biaya
            kurir sesuai dengan ketentuan biaya pada kantor jasa pos dan kantor
            jasa kurir (pasal 53 ayat 5).
          </p>
        </div>
      </section>
    </>
  );
}
