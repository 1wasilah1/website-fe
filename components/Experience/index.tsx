"use client";

import { useState } from "react";
import Image from "next/image";

import tahapHunianTerjangkau from "../../public/images/tahap/3-02.png";
import tahapMasuk from "../../public/images/tahap/2.png";
import tahapRusunawa from "../../public/images/tahap/3-03.png";

import appStore from "../../public/images/logo/appstore.png";
import playStore from "../../public/images/logo/playstore.png";
import customerWeb from "../../public/images/logo/customer-web.png";


const images = {
  tahapMasuk: tahapMasuk,
  tahapHunianTerjangkau: tahapHunianTerjangkau,
  tahapRusunawa: tahapRusunawa,
};

export default function SecureTransaction() {
  const [activeTab, setActiveTab] = useState("tahapMasuk");

  const openApps = (type) => {
    if (type === "android") {
      window.open(
        "https://play.google.com/store/apps/details?id=com.dprkp.rusun",
        "_blank"
      );
    } else if (type === "web") {
      window.open(
        "https://sirukim.jakarta.go.id/sirukim-web/",
        "_blank"
      );
    } else {
      window.open(
        "http://apps.apple.com/id/app/sirukim/id1643825692",
        "_blank"
      );
    }
  };

  return (
    <section className="py-12 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        {/* Left Side - Image */}
        <div className="relative w-full h-full">
          <Image
            src={images[activeTab]}
            layout="fill"
            objectFit="contain"
            alt="Tahap"
            className="rounded-lg shadow-md"
          />
        </div>

        {/* Right Side - Text */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900">
            Booking Rusunawa dan Hunian Terjangkau Milik di
            <span className="text-[#BDD918]">&nbsp;Sirukim</span>
          </h2>

          <p className="text-gray-600 mt-2">
            Solusi kemudahan bagi warga untuk memiliki hunian di DKI Jakarta
            dengan hunian yang terjangkau dengan satu aplikasi.
          </p>
          <div className="flex gap-2 mt-4">
            <Image
              src={playStore}
              alt="Logo App Store"
              width={100}
              height={50}
              onClick={() => openApps("android")}
              className="cursor-pointer"
            />
            <Image
              src={appStore}
              alt="Logo App Store"
              width={100}
              height={50}
              onClick={() => openApps("ios")}
              className="cursor-pointer"
            />
            <Image
              src={customerWeb}
              alt="Logo Sirukim Web"
              width={100}
              height={50}
              onClick={() => openApps("web")}
              className="cursor-pointer"
            />
          </div>

          {/* Feature Tabs */}
          <div className="mt-6 space-y-4">
            <div
              onClick={() => setActiveTab("tahapMasuk")}
              className={`p-4 bg-white rounded-lg shadow-md border cursor-pointer ${
                activeTab === "tahapMasuk" ? "border-[#1E5B00]" : ""
              }`}
            >
              <h3 className="font-semibold text-[#1E5B00]">
                Masuk ke dalam aplikasi
              </h3>
              <p className="text-gray-600">
                Masuk dan registrasi aplikasi lebih mudah.
              </p>
            </div>
            <div
              onClick={() => setActiveTab("tahapRusunawa")}
              className={`p-4 bg-white rounded-lg shadow-md border cursor-pointer ${
                activeTab === "tahapRusunawa" ? "border-[#1E5B00]" : ""
              }`}
            >
              <h3 className="font-semibold text-[#1E5B00]">
                Booking Rusunawa
              </h3>
              <p className="text-gray-600">
                Pesan Rusunawa sesuai dengan lokasi yang diinginkan menjadi lebih mudah dan cepat dengan satu aplikasi.
              </p>
            </div>
            <div
              onClick={() => setActiveTab("tahapHunianTerjangkau")}
              className={`p-4 bg-white rounded-lg shadow-md border cursor-pointer ${
                activeTab === "tahapHunianTerjangkau" ? "border-[#1E5B00]" : ""
              }`}
            >
              <h3 className="font-semibold text-[#1E5B00]">
                Pendaftaran Hunian Terjangkau Milik
              </h3>
              <p className="text-gray-600">
                Menjadi lebih mudah untuk miliki hunian yang terjangkau di DKI Jakarta dengan satu aplikasi.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}