"use client";
import React, { useState } from "react";

import BannerPage from "./Banner";

export default function Homepage() {
  const [selectedTab, setSelectedTab] = useState("banner");

  return (
    <>
      <div className="w-full sm:m-4">
        <div className="sm:hidden">
          <label className="sr-only">Pilih Fitur</label>
          <select
            id="homepage-select-fitur"
            onChange={(e) => setSelectedTab(e?.target?.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option id="banner" value="banner">
              Banner
            </option>
            <option id="totalInformasi" value="totalInformasi">
              Total Informasi
            </option>
            <option id="programUnggulan" value="programUnggulan">
              Program Unggulan
            </option>
            <option id="aplikasiTerkait" value="aplikasiTerkait">
              Aplikasi Terkait
            </option>
          </select>
        </div>
        <ul
          id="homepage-tabs-fitur"
          className="hidden text-sm font-medium text-center text-gray-500 rounded-lg shadow-sm sm:flex dark:divide-gray-700 dark:text-gray-400"
        >
          <li className="w-full focus-within:z-10 cursor-pointer">
            <a
              className={`inline-block w-full p-4 text-gray-900  border-r border-gray-200 dark:border-gray-700 rounded-s-lg focus:ring-4 focus:ring-blue-300 active focus:outline-none dark:bg-gray-700 dark:text-white ${
                selectedTab === "banner" ? "bg-gray-100" : "bg-white"
              }`}
              aria-current="page"
              onClick={() => setSelectedTab("banner")}
              id="homepage-tabs-fitur-banner"
            >
              Banner
            </a>
          </li>
          <li
            className="w-full focus-within:z-10 cursor-pointer"
            value={"totalInformasi"}
          >
            <a
              onClick={() => setSelectedTab("totalInformasi")}
              id="homepage-tabs-fitur-total-informasi"
              className={`inline-block w-full p-4 ${
                selectedTab === "totalInformasi" ? "bg-gray-100" : "bg-white"
              } border-r border-gray-200 dark:border-gray-700 hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700`}
            >
              Total Informasi
            </a>
          </li>
          <li
            className="w-full focus-within:z-10 cursor-pointer"
            value={"programUnggulan"}
          >
            <a
              onClick={() => setSelectedTab("programUnggulan")}
              id="homepage-tabs-fitur-program-unggulan"
              className={`inline-block w-full p-4 ${
                selectedTab === "programUnggulan" ? "bg-gray-100" : "bg-white"
              } border-r border-gray-200 dark:border-gray-700 hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700`}
            >
              Program Unggulan
            </a>
          </li>
          <li
            className="w-full focus-within:z-10 cursor-pointer"
            value={"aplikasiTerkait"}
          >
            <a
              onClick={() => setSelectedTab("aplikasiTerkait")}
              id="homepage-tabs-fitur-aplikasi-terkait"
              className={`inline-block w-full p-4 ${
                selectedTab === "aplikasiTerkait" ? "bg-gray-100" : "bg-white"
              } border-s-0 border-gray-200 dark:border-gray-700 rounded-e-lg hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700`}
            >
              Aplikasi Terkait
            </a>
          </li>
        </ul>
      </div>

      {selectedTab === "banner" ? (
        <>
          <BannerPage />
        </>
      ) : (
        <></>
      )}
    </>
  );
}
