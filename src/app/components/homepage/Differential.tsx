"use client";
import Image from "next/image";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import Button from "../Button";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import { FreeMode, Pagination } from "swiper/modules";
import { differencialData } from "./data";

export function Differential() {
  return (
    <section className="bg-terciary px-4 md:px-8 py-20 md:py-40 text-secondary flex flex-col gap-16">
      <div className="m-auto">
        <h3 className="font-anton text-secondary text-4xl md:text-5xl">
          Nosso diferencial
        </h3>
        <span className="flex w-20 h-1 bg-primary-100 mb-8 mt-2" />
      </div>

      {/* <div className="w-full">
        <ul className="flex flex-col md:flex-row">
          {items.map((item) => (
            <div
              key={item.text}
              className="flex flex-col items-center gap-6 md:gap-12 w-full p-10 md:p-20 border border-gray-100"
            >
              <Image src={item.icon} width={40} height={110} alt={item.text} />
              <li className="text-secondary font-anton w-full text-center text-md md:text-xl">
                {item.text}
              </li>
            </div>
          ))}
        </ul>
      </div> */}

      <div className="flex flex-col md:flex-row gap-20">
        <div className="max-w-2xl py-10 p-6 rounded-xl">
          <h3 className="font-anton text-secondary text-2xl md:text-4xl mb-4">
            Para sua <span className="text-primary-100">empresa!</span>
            <br />
            Atendemos atacado e varejo!
          </h3>
          <p>
            Para nossos clientes empresariais, oferecemos vantagens exclusivas
            quando você compra em grande quantidade. Temos preços especiais,
            condições de pagamento flexíveis e uma equipe dedicada a atender às
            suas necessidades específicas. Se você é um revendedor, mecânico,
            oficina ou empresa do setor automotivo, estamos aqui para fornecer
            as peças e acessórios de que você precisa.
          </p>
          <span>
            <Button className="bg-primary-100 text-terciary flex items-center gap-2 mt-10 py-2 px-5">
              Contato <BsFillArrowRightCircleFill size={26} />
            </Button>
          </span>
        </div>

        <div className="flex items-center justify-center flex-col">
          <Swiper
            breakpoints={{
              340: {
                slidesPerView: 2,
              },
              700: {
                slidesPerView: 3,
              },
            }}
            freeMode={true}
            pagination={{
              clickable: true,
            }}
            modules={[FreeMode, Pagination]}
            className="lg:max-w-[900px] h-full"
            style={
              { "--swiper-pagination-color": "#F05022" } as React.CSSProperties
            }
          >
            {differencialData.map((item) => (
              <SwiperSlide key={item.title}>
                <div className="flex flex-col items-center justify-center text-center gap-6 group relative text-secondary rounded-xl p-10 h-[90%] shadow-lg uppercase font-bold m-auto ml-4">
                  <Image
                    src={item.icon}
                    width={30}
                    height={30}
                    alt={item.title}
                  />
                  {item.title}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
