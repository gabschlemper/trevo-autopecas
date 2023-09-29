"use client";
import { useEffect, useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import Header from "../Header";
import Image from "next/image";
import Button from "../Button";

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
    <section className="h-screen w-screen m-auto relative group snap-start shrink-0">
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className="w-full h-full bg-center bg-cover duration-500 ease-in-out flex flex-col"
      >
        <div className="block md:group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <BsChevronCompactLeft onClick={prevSlide} size={16} />
        </div>
        <div className="block md:group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <BsChevronCompactRight onClick={nextSlide} size={16} />
        </div>

        <div className="w-full flex items-center h-full justify-center flex-col px-8">
          <h1 className="text-3xl md:text-5xl max-w-sm md:max-w-2xl font-anton text-center">
            <span className="text-primary-100">
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
            <p className="font-anton mt-6 text-gray-100 max-w-sm md:max-w-md text-center">
              {slides[currentIndex].description}
            </p>
          ) : null}
          <Button className="border-2 border-white text-white mt-12">
            Entre em contato
          </Button>
        </div>
      </div>
    </section>
  );
}
