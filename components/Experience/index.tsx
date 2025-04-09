"use client";

import { useState } from 'react';
import Image from 'next/image';

const images = {
  "transaksi": "/transaksi.png",
  "keuangan": "/keuangan.png",
  "aset": "/aset.png",
};

export default function SecureTransaction() {
  const [activeTab, setActiveTab] = useState("transaksi");

  return (
    <section className="py-12 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        {/* Left Side - Image */}
        <div className="relative w-full h-[500px]">
          <Image src={images[activeTab]} layout="fill" objectFit="contain" alt="Wondr App" className="rounded-lg shadow-md" />
        </div>
        
        {/* Right Side - Text */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900">
            Pengalaman baru bertransaksi aman dan mudah di 
            <span className="text-orange-500"> wondr</span>
          </h2>
          <p className="text-gray-600 mt-2">
            Nikmati kemudahan transaksi, atur keuangan, dan nabung dari satu aplikasi.
          </p>
          <button className="mt-4 px-6 py-2 bg-teal-500 text-white rounded-lg font-semibold shadow-md hover:bg-teal-600">
            Pelajari wondr
          </button>
          
          {/* Feature Tabs */}
          <div className="mt-6 space-y-4">
            <div onClick={() => setActiveTab("transaksi")} className={`p-4 bg-white rounded-lg shadow-md border cursor-pointer ${activeTab === "transaksi" ? "border-blue-500" : ""}`}>
              <h3 className="font-semibold">Berbagai transaksi dalam satu aplikasi</h3>
              <p className="text-gray-600">Transfer, bayar tagihan, beli pulsa, top up e-wallet, bisa dilakukan di mana saja dengan mudah!</p>
            </div>
            <div onClick={() => setActiveTab("keuangan")} className={`p-4 bg-white rounded-lg shadow-md border cursor-pointer ${activeTab === "keuangan" ? "border-blue-500" : ""}`}>
              <h3 className="font-semibold">Pantau keuangan jadi lebih mudah</h3>
              <p className="text-gray-600">Selagi bertransaksi dan menerima dana, dapatkan laporan keuangan yang lengkap dan juga real-time.</p>
            </div>
            <div onClick={() => setActiveTab("aset")} className={`p-4 bg-white rounded-lg shadow-md border cursor-pointer ${activeTab === "aset" ? "border-yellow-400" : ""}`}>
              <h3 className="font-semibold text-green-600">Makin senang karena aset berkembang</h3>
              <p className="text-gray-600">Rencanakan masa depan dengan tabungan berjangka, Tapenas dan deposito—semuanya di satu tempat.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}