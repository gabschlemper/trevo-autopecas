import Image from "next/image";
import { serviceData } from "./data";

export default function Services() {
  return (
    <section
      id="aboutus"
      className="w-full md:py-24 px-8 relative bg-scroll bg-gradient-to-b from-black to-secondary"
    >
      <div className="flex flex-col gap-6 mb-10 w-full relative h-full bg-scroll md:justify-center items-center">
        <div className="flex flex-col md:align-start justify-center py-20 gap-6 md:gap-10 md:items-start sticky top-10 ">
          <h2 className="text-5xl md:text-5xl text-secondary text-opacity-0 bg-clip-text bg-gradient-to-r from-primary-100 to-primary-200 ">
            Nossos Serviços
          </h2>
          <p className="max-w-md text-gray-200 ">
            A Trevo oferece serviços automotivos de qualidade, desde autopeças
            confiáveis até uma oficina mecânica experiente. Sua satisfação é
            nossa prioridade.
          </p>
        </div>

        <div className="flex flex-col max-w-5xl gap-10">
          {serviceData.map((item) => {
            return (
              <div
                key={item.title}
                className="flex flex-col md:flex-row bg-black bg-opacity-95 sticky top-80 md:top-[35%] bg-scroll rounded-3xl min-h-[300px] shadow-2xl"
              >
                <div className="hidden md:flex overflow-hidden rounded-3xl">
                  <Image
                    src={item.image}
                    height={100}
                    width={250}
                    alt={item.title}
                  />
                </div>
                <div className="block md:hidden overflow-hidden rounded-3xl w-full h-10 object-contain opacity-30">
                  <Image src={item.image} fill alt={item.title} />
                </div>

                <div className="flex flex-col md:flex-row items-center flex-1 md:border-0 rounded-lg min-h-[350px] md:min-h-fit ">
                  <div className="px-5 py-8 flex flex-col gap-6 text-center">
                    <h1 className="text-gray-200">{item.title}</h1>
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
