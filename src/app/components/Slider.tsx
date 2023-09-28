"use client";
import { useEffect, useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import Header from "./Header";
import Image from "next/image";

const slides = [
  {
    url: "/background-hero.png",
    image: "/logo.svg",
  },
  {
    url: "/background-slider-1.png",
    content: ["Trevo", "autopeças"],
  },
  {
    url: "/background-slider-2.png",
    content: ["Oficina", "Mecânica"],
  },
  {
    url: "/background-slider-3.png",
    content: ["Melhor", "reparação de automóveis e serviço de manutenção"],
    description:
      "Precisa consertar seu carro? Aqui na Trevo reparamos todo o tipo de viaturas com equipamento de alta qualidade e a preço justo.",
  },
];

export default function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="h-screen w-full m-auto relative group">
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className="w-full h-full bg-center bg-cover duration-500 ease-in-out flex flex-col"
      >
        <Header />

        <div className="block md:group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <BsChevronCompactLeft onClick={prevSlide} size={16} />
        </div>
        <div className="block md:group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <BsChevronCompactRight onClick={nextSlide} size={16} />
        </div>

        <div className="w-full flex items-center h-full justify-center flex-col">
          <h1 className="text-3xl md:text-5xl max-w-sm md:max-w-2xl uppercase font-anton text-center">
            <span className="text-primary">
              {slides[currentIndex].content?.[0]}
            </span>{" "}
            {slides[currentIndex].content?.slice(1)}
          </h1>
          {slides[currentIndex].image ? (
            <Image
              src={slides[currentIndex].image!}
              width={460}
              height={312}
              priority
              alt=""
            />
          ) : null}
          {slides[currentIndex].description ? (
            <p className="font-anton mt-10 max-w-sm md:max-w-md text-center">
              {slides[currentIndex].description}
            </p>
          ) : null}
          <button className="rounded-5 border-2 rounded-3xl border-white py-2 px-5 uppercase mt-12 hover:shadow-lg hover:scale-110 transition-all font-bold">
            Entre em contato
          </button>
        </div>
      </div>
    </div>
  );
}
