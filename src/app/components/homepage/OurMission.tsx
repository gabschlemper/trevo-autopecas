"use client";
import Image from "next/image";
import { useState } from "react";
import Button from "../Button";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";

const data = [
  {
    title: "Missão",
    description:
      "A visão do Centro Automotivo Trevo é ser líder no setor automotivo, oferecendo serviços inovadores e de alta qualidade. Projetamos um futuro onde nossa marca seja sinônimo de excelência, destacando-se em tecnologia, sustentabilidade e satisfação do cliente. Comprometemo-nos a manter nossa posição de vanguarda, adaptando-nos às mudanças do setor e superando as expectativas dos clientes, tornando-nos a escolha número um para todas as necessidades automotivas.",
  },
  {
    title: "Visão",
    description:
      "A visão do Centro Automotivo Trevo é ser líder no setor automotivo, oferecendo serviços inovadores e de alta qualidade. Projetamos um futuro onde nossa marca seja sinônimo de excelência, destacando-se em tecnologia, sustentabilidade e satisfação do cliente. Comprometemo-nos a manter nossa posição de vanguarda, adaptando-nos às mudanças do setor e superando as expectativas dos clientes, tornando-nos a escolha número um para todas as necessidades automotivas",
  },
  {
    title: "Valores",
    description:
      "Nossos valores fundamentais são Integridade, Qualidade e Satisfação do Cliente. A Integridade guia nossas ações, priorizando a honestidade e a ética. A Qualidade é nossa marca registrada, garantindo serviços de alto padrão. A Satisfação do Cliente é nossa prioridade máxima, buscando superar expectativas e construir relacionamentos duradouros.",
  },
];

export default function OurMission() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevCard = () => {
    const isFirstCard = currentIndex === 0;
    const newIndex = isFirstCard ? data.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextCard = () => {
    const isLastCard = currentIndex === data.length - 1;
    const newIndex = isLastCard ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <section
      id="aboutus"
      className="py-24 px-8 flex flex-col md:flex-row justify-center items-center gap-20"
    >
      <div className="max-w-3xl shadow-2xl bg-secondary flex flex-col gap-6 px-2 py-6 md:p-16 rounded-md md:h-[400px] h-[480px]">
        <h1 className="text-grey text-4xl md:text-5xl text-primary-100">
          {data[currentIndex].title}
        </h1>
        <p className="text-terciary">{data[currentIndex].description}</p>
        <div className="flex gap-2 mt-auto">
          <Button className="py-0 px-0" onClick={prevCard}>
            <BsFillArrowLeftCircleFill size={30} />
          </Button>
          <Button className="py-0 px-0" onClick={nextCard}>
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
