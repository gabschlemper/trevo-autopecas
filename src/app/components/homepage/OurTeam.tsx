import Image from "next/image";
import { teamData } from "./data";

export function OurTeam() {
  return (
    <section className="px-4 md:px-8 py-20">
      <h3 className="text-4xl md:text-5xl font-anton text-center mb-20">
        Conheça nossa <span className="text-primary-100">equipe</span>
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 w-full m-auto">
        {teamData.map((item) => (
          <div
            key={item.name}
            className="group relative transition-all rounded-lg shadow-xl"
          >
            <Image
              src={item.img}
              width={400}
              height={300}
              alt="Foto equipe"
              className="group-hover:opacity-10 transition-all rounded-sm"
            />
            <div className="hidden group-hover:flex transition-all absolute inset-0 items-center justify-center flex-col">
              <p className="font-bold text-md text-terciary font-anton">
                {item.name}
              </p>
              <p className="font-bold text-sm text-gray-100">{item.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
