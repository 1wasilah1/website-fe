"use client";
import React from "react";

export default function TotalInformasiPage() {
  return (
    <>
      <div className="text-center m-4">
        <h2 className="text-2xl font-bold text-gray-600 mb-2">Total Informasi</h2>
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
