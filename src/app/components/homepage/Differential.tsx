"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

const carouselItems = [
  { icon: "check.svg", text: "Variedade de produto" },
  { icon: "qualidade.svg", text: "Qualidade garantida" },
  { icon: "equipe.svg", text: "Equipe especializada" },
  { icon: "atendimento.svg", text: "Atendimento exepcional" },
  { icon: "check.svg", text: "Serviço de qualidade" },
  { icon: "qualidade.svg", text: "Preço justo" },
];

export function Differential() {
  const [currentCard, setCurrentCard] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentCard((prevImage) => (prevImage + 1) % carouselItems.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [carouselItems, 3000]);

  return (
    <section className="bg-terciary px-4 md:px-16 py-20 md:py-24 text-secondary flex flex-col gap-20">
      <h3 className="font-anton text-secondary text-4xl md:text-5xl text-center">
        Nosso diferencial
      </h3>

      <div className="w-full inline-flex flex-nowrap overflow-hidden">
        <ul className="flex items-center justify-center md:justify-start [&_li]:mx-16 md:[&_li]:mx-24 w-full animate-infinite-scroll">
          {carouselItems.map((item, index) => (
            <div
              key={item.text}
              className="flex flex-col items-center  gap-5 w-full"
            >
              <Image src={item.icon} width={40} height={110} alt={item.text} />
              <li className="text-secondary font-anton w-full text-center">
                {item.text}
              </li>
            </div>
          ))}
        </ul>
        <ul
          className="flex items-center justify-center md:justify-start [&_li]:mx-16 md:[&_li]:mx-24 w-full animate-infinite-scroll"
          aria-hidden="true"
        >
          {carouselItems.map((item, index) => (
            <div
              key={item.text}
              className="flex flex-col items-center  gap-5 w-full"
            >
              <Image src={item.icon} width={40} height={110} alt={item.text} />
              <li className="text-secondary font-anton w-full text-center">
                {item.text}
              </li>
            </div>
          ))}
        </ul>
      </div>
    </section>
  );
}
