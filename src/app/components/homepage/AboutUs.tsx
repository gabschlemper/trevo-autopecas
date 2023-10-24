import Button from "../Button";
import { useContext, useState } from "react";
import { ModalContext } from "../../../../public/contexts/ModalContext";
import Image from "next/image";
import { missionData } from "./data";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";

export default function AboutUs({ feed }: any) {
  const { setShowModal } = useContext(ModalContext);
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
      className="md:pt-20 px-4 md:px-8 flex flex-col justify-between py-20"
    >
      <div className="flex flex-col md:flex-row">
        <div className="m-auto mb-8 lg:mb-0">
          <Image src="/car-about-us.png" width={500} height={300} alt="" />
        </div>
        <div className="flex flex-col justify-center items-start bg-opacity-20 max-w-3xl">
          <div>
            <h1 className="text-terciary text-3xl md:text-5xl">Sobre nós</h1>
            <span className="flex w-14 h-1 bg-primary-100 mb-3 mt-1" />
          </div>
          <p className="text-gray-100 leading-6">
            Somos a TREVO centro automotivo, uma empresa especializada no
            fornecimento de peças automotivas de alta qualidade e soluções
            confiáveis para atender todas as necessidades dos proprietários de
            veículos. Com uma história sólida e um compromisso inabalável com a
            excelência, estamos aqui para oferecer o melhor em produtos e
            serviços para o setor automobilístico.
          </p>
          <Button
            className="bg-primary-100 text-terciary flex items-center gap-2 mt-10 py-2 px-5"
            onClick={() => setShowModal(true)}
          >
            Solicite um orçamento!
          </Button>
        </div>
      </div>
    </section>
  );
}
