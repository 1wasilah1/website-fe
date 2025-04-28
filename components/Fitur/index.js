"use client";
import Image from "next/image";

import { FaCalculator, FaHome, FaLaptop } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import logoDprkp from "../../public/images/logo-dprkp-back-putih.png";
// import logoMitrum from "../../public/images/logo/mitrum.png";
// import logoPsu from "../../public/images/logo/psu.png";
import logoSidakon from "../../public/images/logo/sidakon-small.png";
import logoSirukim from "../../public/images/logo/sirukim.png";

const features = [
  {
      icon: <Image
      src={logoDprkp}
      alt="Logo Rusunawa"
      width={100}
      height={100}
    />,
      title: "Rumah Susun Sederhana Sewa (Rusunawa)",
      description: "Rusunawa",
      linkText: "Selengkapnya",
      linkHref: "#",
      bgColor: "bg-gray-100",
  },
  {
    icon: <FaHome className="text-7xl text-black" />,
    title: "Hunian Terjangkau Milik",
    description: "Hunian Terjangkau Milik",
    linkText: "Selengkapnya",
    linkHref: "#",
    bgColor: "bg-gray-100",
  },
  {
    icon: <FaHome className="text-7xl text-black" />,
    title: "Peningkatan Kualitas Perumahan Kumuh",
    description: "",
    linkText: "Selengkapnya",
    linkHref: "https://dprkp.jakarta.go.id/penataan_kumuh/",
    bgColor: "bg-gray-100",
  },
  {
    icon: <FaHome className="text-7xl text-black" />,
    title: "Konsolidasi Tanah Vertikal",
    description: "",
    linkText: "Selengkapnya",
    linkHref: "#",
    bgColor: "bg-gray-100",
  },
  {
    icon: (
      <Image
        src={logoDprkp}
        alt="Logo Perbaikan Rumah"
        width={80}
        height={80}
      />
    ),
    title: "Perbaikan Rumah",
    description: "PERBAIKAN RUMAH",
    linkText: "Selengkapnya",
    linkHref: "https://dprkp.jakarta.go.id/perbaikanrumah/",
    bgColor: "bg-gray-100",
  },
  {
    icon: <Image src={logoSirukim} alt="Logo Sirukim" width={80} height={80} />,
    title: "SIRUKIM",
    description: "SIRUKIM",
    linkText: "Selengkapnya",
    linkHref: "#",
    bgColor: "bg-gray-100",
  },
  {
    icon: <Image src={logoSidakon} alt="Logo Sirukim" width={80} height={80} />,
    title: "SIDAKON",
    description: "SIDAKON",
    linkText: "Selengkapnya",
    linkHref: "#",
    bgColor: "bg-gray-100",
  }
];

export default function ThumbnailGrid() {

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    // height: "220px",
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
    <section className="py-10 bg-gray-100">
      <div className="max-w-6xl mx-auto pb-12">
        <h2 className="text-center text-2xl font-semibold mb-6 text-black font-[inherit]">
          Program Unggulan
        </h2>
        <div className="px-4">
          <Slider {...settings}>
            {features.map((feature, index) => (
              <div
                key={index}
                className="font-[inherit] p-6 border rounded-lg shadow-md flex flex-col items-start mx-2 md:h-[230px] sm:h-[230px] bg-white text-center"
              >
                <div className="w-full justify-items-center">
                  <div
                    className={`p-2 rounded-full ${feature.bgColor} w-24 h-24 flex items-center justify-center`}
                  >
                    {feature.icon}
                  </div>
                </div>

                <h3 className="mt-4 text-lg font-bold text-black">
                  {feature.title}
                </h3>
                {/* <p className="text-sm text-black mt-2">{feature.description}</p> */}
                {/* <a
                  href={feature.linkHref}
                  className="mt-3 text-[#376F04] font-semibold text-sm"
                >
                  {feature.linkText}
                </a> */}
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}