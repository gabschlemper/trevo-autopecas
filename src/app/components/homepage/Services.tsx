import Image from "next/image";
import { serviceData } from "./data";
import Button from "../Button";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { useContext } from "react";
import { ModalContext } from "../../../../public/contexts/ModalContext";

export default function Services() {
  const { setShowModal } = useContext(ModalContext);
  return (
    <section
      id="services"
      className="w-full md:pb-24 px-4 md:px-8 relative bg-scroll bg-secondary"
    >
      <div className="flex flex-col md:flex-row gap-12 mb-10 w-full relative h-full bg-scroll md:justify-between items-start">
        <div className="flex flex-col md:align-start justify-center py-20 md:gap-15 md:items-start md:sticky static top-20 ">
          <div>
            <h2 className="text-4xl md:text-5xl text-terciary">
              Nossos Serviços
            </h2>
            <span className="flex w-14 h-1 bg-primary-100 mb-3 mt-1" />
          </div>
          <p className="max-w-md text-gray-200 ">
            A Trevo oferece serviços automotivos de qualidade, desde autopeças
            confiáveis até uma oficina mecânica experiente. Sua satisfação é
            nossa prioridade.
          </p>
          <Button
            className="bg-primary-100 text-terciary flex items-center gap-2 mt-10 py-2 px-5"
            onClick={() => setShowModal(true)}
          >
            Entre em Contato <BsFillArrowRightCircleFill size={26} />
          </Button>
        </div>

        <div className="flex flex-col max-w-5xl gap-20">
          {serviceData.map((item) => {
            return (
              <div
                key={item.title}
                className="flex flex-col md:flex-row bg-[#111111] md:bg-secondary sticky top-20 md:top-[15%] bg-scroll rounded-md md:rounded-3xl min-h-[280px] md:min-h-min shadow-2xl md:items-center"
              >
                <div className="hidden md:block pl-4">
                  <Image
                    src={item.icon}
                    width={50}
                    height={50}
                    alt={item.title}
                  />
                </div>

                <div className="flex flex-col md:flex-row items-center md:border-0 rounded-lg">
                  <div className="px-5 py-8 flex flex-col gap-6">
                    <div className="flex items-center gap-4">
                      <div className="block md:hidden">
                        <Image
                          src={item.icon}
                          width={20}
                          height={50}
                          alt={item.title}
                        />
                      </div>
                      <h3 className="font-anton font-bold text-xl">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-gray-100">{item.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
