"use client";
import Image from "next/image";
import React from "react";
import bannerKartini from "../../../../public/images/banner/banner-kartini.jpg";

const dataBanners = [
  {
    image: "/images/banner/banner-kartini.jpg",
  },
  {
    image: "/images/banner/banner-rusunawa.jpg",
  },
  {
    image: "/images/banner/banner-hunianvertikal.jpg",
  },
];

export default function ProgramUnggulanPage() {
  return (
    <>
      <div className="text-center m-4">
        <h2 className="text-2xl font-bold text-gray-600 mb-2">Program Unggulan</h2>
      </div>

      <div className="flex m-4">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Edit
        </button>
      </div>
      {/* for preview */}
      <div className="grid md:grid-cols-3 gap-2 sm:grid-cols-1 sm:m-4">
        <div className="border border-black h-[25vh] w-full rounded-sm"></div>
        <div className="border border-black h-[25vh] w-full rounded-sm"></div>
        <div className="border border-black h-[25vh] w-full rounded-sm"></div>
        <div className="border border-black h-[25vh] w-full rounded-sm"></div>
        <div className="border border-black h-[25vh] w-full rounded-sm"></div>
      </div>
    </>
  );
}
