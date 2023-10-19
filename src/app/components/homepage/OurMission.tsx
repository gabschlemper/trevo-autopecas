"use client";
import Image from "next/image";
import { useState } from "react";
import Button from "../Button";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import { missionData } from "./data";

export default function OurMission() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevCard = () => {
    const isFirstCard = currentIndex === 0;
    const newIndex = isFirstCard ? missionData.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextCard = () => {
    const isLastCard = currentIndex === missionData.length - 1;
    const newIndex = isLastCard ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <section
      id="aboutus"
      className="py-10 md:py-24 px-4 md:px-8 flex flex-col lg:flex-row justify-center items-center gap-20"
    >
      <div className="max-w-3xl shadow-2xl bg-secondary flex flex-col gap-6 px-2 py-6 md:p-16 rounded-md md:h-[400px] h-[480px]">
        <h1 className="text-grey text-4xl md:text-5xl text-primary-100">
          {missionData[currentIndex].title}
        </h1>
        <p className="text-terciary">{missionData[currentIndex].description}</p>
        <div className="flex gap-2 mt-auto">
          <Button
            className="py-0 px-0 hover:bg-primary-100 hover:opacity-90 transition-all duration-300"
            onClick={prevCard}
          >
            <BsFillArrowLeftCircleFill size={30} />
          </Button>
          <Button
            className="py-0 px-0 hover:bg-primary-100  hover:opacity-90 transition-all duration-300"
            onClick={nextCard}
          >
            <BsFillArrowRightCircleFill size={30} />
          </Button>
        </div>
      </div>

      <Image
        src="/wheel.svg"
        width={400}
        height={100}
        alt="pneu"
        className="animate-spin hidden md:block"
      />
    </section>
  );
}
