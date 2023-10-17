import Image from "next/image";
import { serviceData } from "./data";

export default function Services() {
  return (
    <section
      id="aboutus"
      className="w-full md:py-24 px-4 md:px-8 relative bg-scroll bg-secondary"
    >
      <div className="flex flex-col md:flex-row gap-12 mb-10 w-full relative h-full bg-scroll md:justify-center items-start">
        <div className="flex flex-col md:align-start justify-center py-20 gap-6 md:gap-15 md:items-start md:sticky static top-20 ">
          <h2 className="text-4xl md:text-5xl text-primary-100">
            Nossos Serviços
          </h2>
          <p className="max-w-md text-gray-200 ">
            A Trevo oferece serviços automotivos de qualidade, desde autopeças
            confiáveis até uma oficina mecânica experiente. Sua satisfação é
            nossa prioridade.
          </p>
        </div>

        <div className="flex flex-col max-w-5xl gap-20">
          {serviceData.map((item) => {
            return (
              <div
                key={item.title}
                className="flex flex-col md:flex-row bg-black bg-opacity-95 sticky top-20 md:top-[15%] bg-scroll md:rounded-3xl min-h-[350px] md:min-h-min shadow-2xl md:items-center"
              >
                <div className="hidden md:block pl-4">
                  <Image
                    src={item.icon}
                    width={50}
                    height={50}
                    alt={item.title}
                  />
                </div>

                <div className="block md:hidden h-10 opacity-40">
                  <Image src={item.image} fill alt={item.title} />
                </div>

                <div className="flex flex-col md:flex-row items-center md:border-0 rounded-lg">
                  <div className="px-5 py-8 flex flex-col gap-6">
                    <div>
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
