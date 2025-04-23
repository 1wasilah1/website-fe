"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { motion } from "framer-motion";

const banners = [
  // {
  //   image: "/images/banner/promo1.jpg",
  //   title: "Dinas Perumahan Rakyat dan Kawasan Permukiman Provinsi DKI Jakarta.",
  //   description: "Mewujudkan Perumahan Rakyat dan Kawasan Permukiman Provinsi DKI Jakarta yang layak huni, terjangkau, aman, terpadu, dan berkelanjutan."
  // },
  // {
  //   image: "/images/banner/promo2.jpg",
  //   title: "Cari Rusunawa",
  //   description: "Jangan ragu untuk mengirimi kami pesan. Kami akan dengan senang hati membantu Anda."
  // },
  // {
  //   image: "/images/banner/promo3.jpeg",
  //   title: "Aplikasi Booking Rusunawa",
  //   description: "Mewujudkan Perumahan Rakyat dan Kawasan Permukiman Provinsi DKI Jakarta yang layak huni, terjangkau, aman, terpadu, dan berkelanjutan."
  // },
  {
    image: "/images/banner/banner-rusunawa.jpg",
    title: "",
    description: ""
  },
  {
    image: "/images/banner/banner-kartini.jpg",
    title: "",
    description: ""
  },
];

export default function BannerSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    fade: true // Efek crossfade
  };

  return (
    <div className="relative w-full py-6 mt-[50px]">
      <Slider {...settings}>
        {banners.map((banner, index) => (
          <div key={index} className="relative w-full">
            <motion.img
              src={banner.image}
              alt={banner.title}
              className="w-full h-auto"
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 2 }}
            />
            {/* <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white p-6"
            >
              <h2 className="text-2xl font-bold mb-2">{banner.title}</h2>
              <p className="text-lg">{banner.description}</p>
            </motion.div> */}
          </div>
        ))}
      </Slider>
    </div>
  );
}