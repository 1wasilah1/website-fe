"use client";
import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./artikelTerkait.css";

import logoBeritaJkt from "../../public/images/logo/berita-jakarta.png";
import logoJakgo from "../../public/images/logo/jakgo.png";
import logoJktOpenData from "../../public/images/logo/jakarta-open-data.png";
import logoJktSmartCity from "../../public/images/logo/jakarta-smart-city-2.png";
import logoKip from "../../public/images/logo/kip-dki-jakarta2.png";
import logoOpenGoverment from "../../public/images/logo/jakarta-open-data2.png";
import logoPpid from "../../public/images/logo/ppid.png";
import logoSatuData from "../../public/images/logo/satu-data-indonesia.png";
import logoStatistik from "../../public/images/logo/statistik-dki-jakarta2.png";

const taxItems = [
  {
    title: "JAK GO",
    description:
      "Kehidupan perkotaan yang semarak dengan berbagai keragaman, dari warisan budaya, inovasi tanpa henti, hingga destinasi kelas dunia yang memikat",
    icon: <Image src={logoJakgo} alt="Logo Jakgo" width={0} height={50} />,
    link: "https://jakarta.go.id/",
  },
  {
    title: "Jakarta Smart City",
    description:
      "Katalisator dalam menciptakan ekosistem kota cerdas 4.0 di Jakarta",
    icon: (
      <Image
        src={logoJktSmartCity}
        alt="Logo Jakarta Smart City"
        width={0}
        height={50}
      />
    ),
    link: "https://smartcity.jakarta.go.id/id/",
  },
  {
    title: "Berita Jakarta",
    description:
      "Website Berita Resmi Pemerintah Provinsi Daerah Khusus Jakarta",
    icon: (
      <Image
        src={logoBeritaJkt}
        alt="Logo Berita Jakarta"
        width={0}
        height={50}
      />
    ),
    link: "https://www.beritajakarta.id/",
  },
  {
    title: "Jakarta Open Data",
    description:
      "Data yang dapat diakses, digunakan, dan didistribusikan secara bebas oleh siapa saja.",
    icon: (
      <Image
        src={logoJktOpenData}
        alt="Logo Jakarta Open Data"
        width={0}
        height={50}
      />
    ),
    link: "https://satudata.jakarta.go.id/",
  },
  {
    title: "PPID DKI Jakarta",
    description:
      "Pemerintahan Provinsi Daerah Khusus Jakarta memiliki kewenangan penyelenggaraan urusan pemerintahan yang menjadi kewenangan daerah provinsi dan daerah kabupaten/kota",
    icon: <Image src={logoPpid} alt="Logo PPID" width={0} height={50} />,
    link: "https://ppid.jakarta.go.id/",
  },
  {
    title: "KIP",
    description: "",
    icon: <Image src={logoKip} alt="Logo Kip" width={0} height={50} />,
    link: "https://kip.jakarta.go.id/",
  },
  {
    title: "Satu Data",
    description: "",
    icon: (
      <Image src={logoSatuData} alt="Logo Satu Data" width={0} height={50} />
    ),
    link: "https://data.go.id/",
  },
  {
    title: "Open Data",
    description: "",
    icon: (
      <Image
        src={logoOpenGoverment}
        alt="Logo Satu Data"
        width={0}
        height={50}
      />
    ),
    link: "https://ogi.bappenas.go.id/",
  },
  {
    title: "Portal Statistik",
    description: "",
    icon: (
      <Image
        src={logoStatistik}
        alt="Logo Portal Statistik"
        width={0}
        height={50}
      />
    ),
    link: "https://satudata.jakarta.go.id/statistik-sektoral",
  },
];

export default function AplikasiTerkait() {
  const openNewTab = (url) => {
    window.open(url, "_blank");
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="py-4 bg-[#104c61]">
      <div className="container mx-auto text-center mb-5">
        <h2 className="text-2xl font-bold text-white mb-6">
          Aplikasi Terkait
        </h2>
        <Slider {...settings}>
          {taxItems.map((item, index) => (
            <div className="m-2 w-full p-2" key={index}>
              <div
                id={`aplikasi-terkait-item-${index}`}
                className="bg-white shadow-md rounded-xl p-5 flex-shrink-0 h-[90px]"
                onClick={() => openNewTab(item.link)}
              >
                <div className="flex justify-center">{item.icon}</div>
                {/* <h3 className="text-lg font-semibold text-gray-900">
                {item.title}
              </h3> */}
                {/* <p className="text-gray-600 text-sm mt-2">{item.description}</p> */}
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
