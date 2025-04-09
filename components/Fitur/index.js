"use client";
import { FaShieldAlt, FaMapMarkerAlt, FaCalculator, FaLaptop } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const features = [
  {
    icon: <FaShieldAlt className="text-xl text-black" />, 
    title: "Hunian Terjangkau Milik",
    description: "Hunian Terjangkau Milik",
    linkText: "Selengkapnya",
    linkHref: "#",
    bgColor: "bg-gray-400"
  },
  {
    icon: <FaMapMarkerAlt className="text-xl text-black" />, 
    title: "SIRUKIM",
    description: "SIRUKIM",
    linkText: "Selengkapnya",
    linkHref: "#",
    bgColor: "bg-gray-400"
  },
  {
    icon: <FaCalculator className="text-xl text-black" />, 
    title: "SIDAKON",
    description: "SIDAKON",
    linkText: "Selengkapnya",
    linkHref: "#",
    bgColor: "bg-gray-400"
  },
  {
    icon: <FaLaptop className="text-xl text-black" />, 
    title: "Aplikasi Booking Rusunawa",
    description: "Aplikasi Booking Rusunawa.",
    linkText: "Selengkapnya",
    linkHref: "#",
    bgColor: "bg-gray-400"
  },
  {
    icon: <FaMapMarkerAlt className="text-xl text-black" />, 
    title: "PERBAIKAN RUMAH",
    description: "PERBAIKAN RUMAH",
    linkText: "Selengkapnya",
    linkHref: "#",
    bgColor: "bg-gray-400"
  },
  {
    icon: <FaCalculator className="text-xl text-black" />, 
    title: "SIMONTER-CAPCIP",
    description: "SIMONTER-CAPCIP",
    linkText: "Selengkapnya",
    linkHref: "#",
    bgColor: "bg-gray-400"
  },
  {
    icon: <FaLaptop className="text-xl text-black" />, 
    title: "KMPRO",
    description: "KMPRO",
    linkText: "Selengkapnya",
    linkHref: "#",
    bgColor: "bg-gray-400"
  },
  {
    icon: <FaMapMarkerAlt className="text-xl text-black" />, 
    title: "PENINGKATAN",
    description: "PENINGKATAN KUALITAS PERUMAHAN KUMUH",
    linkText: "Selengkapnya",
    linkHref: "#",
    bgColor: "bg-gray-400"
  },
  {
    icon: <FaCalculator className="text-xl text-black" />, 
    title: "Digitalisasi",
    description: "Digitalisasi Infrastuktur RW Kumuh Jakarta Barat",
    linkText: "Selengkapnya",
    linkHref: "#",
    bgColor: "bg-gray-400"
  },
  {
    icon: <FaLaptop className="text-xl text-black" />, 
    title: "Mitra Perumahan",
    description: "Mitra Perumahan",
    linkText: "Selengkapnya",
    linkHref: "#",
    bgColor: "bg-gray-400"
  }
];

export default function ThumbnailGrid() {
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
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="max-w-6xl mx-auto py-12">
      <h2 className="text-center text-lg font-semibold mb-6 text-black">
      Program Unggulan
      </h2>
      <Slider {...settings}>
        {features.map((feature, index) => (
          <div key={index} className="p-6 border rounded-lg shadow-md flex flex-col items-start mx-2">
            <div className={`p-2 rounded-full ${feature.bgColor} w-12 h-12 flex items-center justify-center`}>{feature.icon}</div>
            <h3 className="mt-4 text-lg font-bold text-black">{feature.title}</h3>
            <p className="text-sm text-black mt-2">{feature.description}</p>
            <a href={feature.linkHref} className="mt-3 text-black font-semibold">{feature.linkText}</a>
          </div>
        ))}
      </Slider>
    </div>
  );
}
