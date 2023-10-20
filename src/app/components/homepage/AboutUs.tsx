"use client";
import {
  BsChevronCompactLeft,
  BsChevronCompactRight,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import Button from "../Button";
import { useContext, useState } from "react";
import { ModalContext } from "../../../../public/contexts/ModalContext";

const slides = [
  {
    url: "/aboutus/trevo4.png",
  },
  {
    url: "/aboutus/trevo3.png",
  },
  {
    url: "/aboutus/trevo2.png",
  },
  {
    url: "/aboutus/trevo.png",
  },
  {
    url: "/aboutus/trevo1.png",
  },
];

export default function AboutUs() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { setShowModal } = useContext(ModalContext);

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
    <section id="aboutus" className="py-10 md:py-24 px-4 md:px-8">
      <div className="flex flex-col items-center lg:flex-row justify-between gap-10 md:gap-16 shadow-2xl bg-opacity-20 rounded-lg md:p-8 w-full">
        <div
          style={{
            backgroundImage: `url(${slides[currentIndex].url})`,
            borderRadius: "8px",
          }}
          className="relative bg-cover bg-center h-[450px] w-full md:flex-1"
        >
          <div className="block md:group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
            <BsChevronCompactLeft onClick={prevSlide} size={16} />
          </div>
          <div className="block md:group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
            <BsChevronCompactRight onClick={nextSlide} size={16} />
          </div>
        </div>

        <div className="md:flex-1">
          <h2 className="text-grey mb-2 text-4xl md:text-5xl">Sobre nós</h2>
          <span className="flex w-14 h-1 bg-primary-100 mb-8" />
          <p>
            Somos a TREVO centro automotivo, uma empresa especializada no
            fornecimento de peças automotivas de alta qualidade e soluções
            confiáveis para atender todas as necessidades dos proprietários de
            veículos. Com uma história sólida e um compromisso inabalável com a
            excelência, estamos aqui para oferecer o melhor em produtos e
            serviços para o setor automobilístico. Nossa missão é simplificar a
            vida dos motoristas, proporcionando acesso fácil a peças automotivas
            de alta qualidade a preços competitivos.
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
      </div>
    </section>
  );
}
