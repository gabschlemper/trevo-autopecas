"use client";
import Image from "next/image";

const carouselItems = [
  { icon: "check.svg", text: "Variedade de produto" },
  { icon: "qualidade.svg", text: "Qualidade garantida" },
  { icon: "equipe.svg", text: "Equipe especializada" },
  { icon: "atendimento.svg", text: "Atendimento exepcional" },
  { icon: "price.svg", text: "Preço justo" },
];

export function Differential() {
  return (
    <section className="bg-terciary px-4 md:px-16 py-20 md:py-40 text-secondary flex flex-col gap-16">
      <h3 className="font-anton text-secondary text-4xl md:text-5xl text-center">
        Nosso diferencial
      </h3>

      <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)">
        <ul className="flex items-center justify-center md:justify-start [&_li]:mx-16 md:[&_li]:mx-24 w-full [&_img]:max-w-none animate-infinite-scroll">
          {carouselItems.map((item, index) => (
            <div
              key={item.text}
              className="flex flex-col items-center gap-5 w-full p-12"
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
