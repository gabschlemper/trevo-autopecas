"use client";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import Button from "../Button";
import Image from "next/image";

export default function AboutUs() {
  return (
    <section className="py-24 px-8 flex flex-col items-center gap-20">
      <div id="aboutus" className="max-w-7xl">
        <div className="flex flex-col items-center md:flex-row justify-between gap-10 md:gap-16 bg-black bg-opacity-20 rounded-lg p-8">
          <div className="w-full">
            <h2 className="text-grey mb-2 text-4xl md:text-5xl">Sobre nós</h2>
            <span className="flex w-14 h-1 bg-primary-100 mb-8" />
            <p>A melhor reparação de automóveis e serviços de manutenção.</p>
            <Button className="bg-primary-100 text-terciary flex items-center gap-2 mt-3">
              Contato <BsFillArrowRightCircleFill size={26} />
            </Button>
          </div>

          <p className="text-md text-terciary">
            Somos a{" "}
            <strong className="uppercase">trevo centro automotivo</strong>, uma
            empresa especializada no fornecimento de peças automotivas de alta
            qualidade e soluções confiáveis para atender todas as necessidades
            dos proprietários de veículos. Com uma história sólida e um{" "}
            <strong className="uppercase">
              compromisso inabalável com a excelência
            </strong>
            , estamos aqui para oferecer o melhor em produtos e serviços para o
            setor automobilístico. Nossa missão é simplificar a vida dos
            motoristas, proporcionando acesso fácil a peças automotivas de alta
            qualidade a preços competitivos.
          </p>
        </div>
      </div>

      <div className="flex items-center gap-20">
        <div className="max-w-3xl shadow-2xl bg-secondary flex flex-col gap-6 justify-center p-16 rounded-md">
          <h1 className="text-grey text-4xl md:text-5xl text-primary-100 ">
            Nossa missão
          </h1>
          <p>
            Nosso propósito é ser a principal escolha de nossos clientes quando
            se trata de suas necessidades de autopeças e acessórios automotivos.
            Estamos comprometidos em fornecer produtos de alta qualidade e
            serviços excepcionais que ajudem a manter os veículos de nossos
            clientes seguros, confiáveis e em perfeitas condições de
            funcionamento. Trabalhamos incansavelmente para atender às
            expectativas de nossos clientes, construir relacionamentos
            duradouros e contribuir para a mobilidade segura e eficiente.
          </p>
        </div>
        <Image
          src="/wheel.svg"
          width={300}
          height={100}
          alt="pneu"
          className="animate-spin"
        />
      </div>
    </section>
  );
}
