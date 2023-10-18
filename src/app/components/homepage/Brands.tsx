"use client";
import Image from "next/image";
import { carouselBrands } from "./data";

export function Brands() {
  return (
    <div className="w-full inline-flex px-4 md:px-60 shadow-2xl bg-secondary">
      <ul className="flex items-center md:justify-between w-full [&_img]:max-w-none">
        {carouselBrands.map((item) => (
          <li key={item.icon} className="py-8">
            <Image src={item.icon} width={40} height={110} alt="" />
          </li>
        ))}
      </ul>
    </div>
  );
}
