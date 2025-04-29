"use client";
import dynamic from "next/dynamic";

const MapComponent = dynamic(
  () => { return import("../../components/Maps"); },
  { ssr: false }
);

const Footer = () => {
  return (
    <footer className="bg-[#104c61] text-white py-10 font-poppins">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 font-[inherit]">
          {/* Informasi Perusahaan */}
          <div>
            <div>
              <MapComponent />
            </div>
            <h2 className="text-lg font-semibold mt-2">Alamat Utama</h2>
            <p className="mt-2 text-sm">
              Jl. Taman Jatibaru No.1, RT.17/RW.1, Kelurahan Cideng, Kecamatan
              Gambir, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10150
            </p>
            <h2 className="text-lg font-semibold mt-4">Jam Pelayanan</h2>
            <p className="mt-2 text-sm">
              Senin - Jumat <br /> 08:00 - 15:00 WIB
            </p>
          </div>

          {/* Formulir Kontak */}
          <div>
            <h2 className="text-lg font-semibold">Punya pertanyaan?</h2>
            <p className="mt-2 text-sm">
              Jangan ragu untuk mengirimkan kami pesan. Kami akan dengan senang
              hati membantu Anda.
            </p>
            <form className="mt-4">
              <input
                type="text"
                placeholder="Nama Lengkap"
                className="w-full px-3 py-2 rounded-md bg-gray-100 mb-3"
              />
              <input
                type="email"
                placeholder="E-mail"
                className="w-full px-3 py-2 rounded-md bg-gray-100 mb-3"
              />
              <textarea
                placeholder="Pesan"
                className="w-full px-3 py-2 rounded-md bg-gray-100 h-24 mb-3"
              ></textarea>
              <button
                type="submit"
                className="bg-[#f98025] text-white px-4 py-2 rounded-md"
              >
                Kirim Pesan
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-400 mt-6 pt-4 text-center text-sm">
          <p>
            Copyright @2025 Dinas Perumahan Rakyat dan Kawasan Permukiman
            Provinsi DKI Jakarta All rights reserved. .
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
