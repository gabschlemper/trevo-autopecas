"use client";
import Image from "next/image";

const carouselBrands = [
  { icon: "/brands/hyundai.svg" },
  { icon: "/brands/chery.svg" },
  { icon: "/brands/volkswagen.svg" },
  { icon: "/brands/renault.svg" },
  { icon: "/brands/honda.svg" },
  { icon: "/brands/peugeot.svg" },
  { icon: "/brands/toyota.svg" },
  { icon: "/brands/nissan.svg" },
  { icon: "/brands/fiat.svg" },
  { icon: "/brands/citroen.svg" },
  { icon: "/brands/ford.svg" },
  { icon: "/brands/chevrolet.svg" },
];

export function Brands() {
  return (
    <div className="w-full inline-flex px-4 md:px-8 shadow-lg">
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
