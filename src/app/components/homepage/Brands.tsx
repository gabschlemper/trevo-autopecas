"use client";
import Image from "next/image";
import { carouselBrands } from "./data";

export function Brands() {
  return (
    <ul className="px-4 py-4 lg:px-60 shadow-2xl bg-secondary flex items-center justify-center flex-wrap">
      {carouselBrands.map((item) => (
        <li key={item.icon} className="px-6 py-3">
          <Image src={item.icon} width={40} height={110} alt="" />
        </li>
      ))}
    </ul>
  );
}
