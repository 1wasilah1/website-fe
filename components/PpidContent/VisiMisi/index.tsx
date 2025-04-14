"use client";
import React from "react";

export default function VisiMisi() {
  return (
    <section className="bg-green-50 py-10 px-6 my-4">
      
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-6">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-green-700">Visi</h2>
          <p className="text-gray-600">
            Terwujudnya pelayanan informasi yanng transparan dan akuntabel untuk
            memenuhi hak pemohon informasi sesuai dengan ketentuan peraturan
            perundang-undangan yang berlaku.
          </p>
        </div>
        <div>
          <div className="text-center">
            <h2 className="text-2xl font-bold text-green-700">Misi</h2>
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
              Kawasan Permukiman Provinsi DKI Jakarta dengan proses yang cepat,
              tepat, mudah dan sederhana.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
