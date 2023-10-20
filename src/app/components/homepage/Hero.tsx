"use client";
import { useContext } from "react";
import { ModalContext } from "../../../../public/contexts/ModalContext";
import Button from "../Button";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
export default function Hero() {
  const { setShowModal } = useContext(ModalContext);
  return (
    <section className="h-screen m-auto group md:mx-8">
      <div
        style={{ backgroundImage: "url(/bg-home.png)", borderRadius: "20px" }}
        className="w-full h-full bg-center bg-cover duration-500 ease-in-out flex flex-col"
      >
        <div className="w-full flex items-center h-full justify-center flex-col px-4 md:px-8">
          <h1 className="text-4xl md:text-7xl font-anton text-center">
            <span className="text-primary-100">Trevo</span> centro automotivo
          </h1>
          <p className="font-anton mt-8 text-center text-2xl">
            A melhor reparação de automóveis e serviço de manutenção.
          </p>
          <Button
            className="bg-primary-100 text-white mt-20 flex items-center gap-2 py-2 px-5"
            onClick={() => setShowModal(true)}
          >
            contato
            <BsFillArrowRightCircleFill size={24} />
          </Button>
        </div>
      </div>
    </section>
  );
}
