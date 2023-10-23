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
import { ModalContext } from "../../../../public/contexts/ModalContext";
import { useContext } from "react";

export function Differential() {
  const { setShowModal } = useContext(ModalContext);
  return (
    <section className="md:bg-secondary bg-terciary">
      <div className="bg-terciary mx-4 md:mx-8 rounded-xl py-10 md:py-20 text-secondary flex flex-col gap-8 md:gap-16">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-20">
          <div className="md:min-w-[500px] max-w-2xl md:p-6 rounded-xl">
            <h3 className="font-anton text-secondary text-2xl md:text-4xl mb-4">
              Para sua <span className="text-primary-100">empresa!</span>
              <br />
              Atendemos atacado e varejo!
            </h3>
            <p>
              Para nossos clientes empresariais, oferecemos vantagens exclusivas
              quando você compra em grande quantidade. Temos preços especiais,
              condições de pagamento flexíveis e uma equipe dedicada a atender
              às suas necessidades específicas. Se você é um revendedor,
              mecânico, oficina ou empresa do setor automotivo, estamos aqui
              para fornecer as peças e acessórios de que você precisa.
            </p>
            <span>
              <Button
                className="bg-primary-100 text-terciary flex items-center gap-2 mt-10 py-2 px-5"
                onClick={() => setShowModal(true)}
              >
                Contato <BsFillArrowRightCircleFill size={26} />
              </Button>
            </span>
          </div>

          <div className="flex items-center justify-center flex-col">
            <Swiper
              breakpoints={{
                340: {
                  slidesPerView: 1,
                },
                500: {
                  slidesPerView: 2,
                },
                1000: {
                  slidesPerView: 3,
                },
              }}
              freeMode={true}
              pagination={{
                clickable: true,
              }}
              modules={[FreeMode, Pagination]}
              className="max-w-[300px] sm:max-w-[600px] md:max-w-[600px] lg:max-w-[850px] h-[350px] lg:h-full"
              style={
                {
                  "--swiper-pagination-color": "#F05022",
                } as React.CSSProperties
              }
            >
              {differencialData.map((item) => (
                <SwiperSlide key={item.title}>
                  <div className="flex flex-col items-center justify-center text-center gap-6 group relative text-secondary rounded-xl p-10 h-[90%] md:h-[90%] md:shadow-lg uppercase font-bold m-auto ml-2 md:ml-4 shadow-lg hover:cursor-pointer">
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
      </div>
    </section>
  );
}
