import Image from "next/image";

const data = [
  [
    {
      name: "Tamires Santos",
      source: "Google",
      description: "Atendimento muito bom, e rapidez também muito prestativos.",
    },
    {
      name: "Dilcinho Luiz da Silva Luiz.",
      source: "Google",
      description:
        "Excelente Prestação de Serviço com garantia de qualidade! Todos os detalhes dos serviços realizados são esclarecidos pela equipe! Obrigado pelo bom atendimento!",
    },
  ],
  [
    {
      name: "Joel Nascimento",
      source: "Google",
      description:
        "Ótimo, pois estava em viagem, e tive minhas espectativas superadas, valeu todos estão de parabéns principalmente o atendimento perfeito...",
    },
    {
      name: "Ester Leigue",
      source: "Google",
      description:
        "Obrigado centro automotivo trevo por nós atenderem tão bem a loja e linda a educação perfeita. 😀",
    },
  ],
  [
    {
      name: "Josilene Diogo Almeida",
      source: "Google",
      description:
        "A empresa tem profissionais excelentes, a loja impecável e o atendimento supera as expectativas. Recomendo sempre.",
    },
    {
      name: "Stefany Kely",
      source: "Google",
      description:
        "Excelente atendimento, o cuidado que vocês tem com o carro é diferenciado a educação dos mecânicos amei recomendo",
    },
  ],
  [
    {
      name: "NR Contador",
      source: "Google",
      description:
        "Me salvaram na estrada!!! Amém, Recomendo eles, pra quem estiver na BR 381.",
    },
    {
      name: "Jair Martins",
      source: "Google",
      description:
        "Ótimo, satisfeito, ótimo atendimento, mecânico excelente, parabéns",
    },
  ],
];

export function Feedback() {
  const slicedArray = data.slice(0, 4);
  console.log("heyy", slicedArray);

  return (
    <section className="bg-gradient-to-t from-black to-secondary flex flex-col items-center gap-24 py-20 md:py-24 px-4 md:px-16">
      <div className="flex flex-col gap-3 text-center">
        <h2 className="text-4xl md:text-5xl">
          Feedback dos <span className="text-primary-100">clientes</span>
        </h2>
        <p>Veja o que nossos clientes tem a dizer sobre a TREVO autopeças.</p>
      </div>

      <div className="sm:grid grid-cols-2 lg:grid-cols-4 gap-6">
        {data.map((item: any, indexParent: number) => {
          console.log("indexParent", indexParent);
          return (
            <div className="text-sm" key={indexParent}>
              {item.map((child: any, indexChild: number) => {
                console.log("indexChild", indexChild);
                return (
                  <div
                    className="bg-secondary rounded-xl mb-6 p-6 hover:shadow-lg hover:scale-105 transition-all min-h-[220px]"
                    key={indexChild}
                  >
                    <div className="flex mb-4 items-center">
                      <div
                        className={`text-2xl rounded-full flex-grow-0 w-12 h-12 text-terciary text-transform mr-3 flex justify-center items-center bg-black`}
                      >
                        {child.name.charAt(0)}
                      </div>
                      <div className="flex-grow">
                        <strong>{child.name}</strong>s
                        <div className="text-gray-100">{child.source}</div>
                        <div className="flex align-center gap-2">
                          <div className="text-gray-100">5.0</div>
                        </div>
                      </div>
                    </div>
                    <Image
                      src="/5stars.svg"
                      alt="5 stars"
                      width={90}
                      height={15}
                    />
                    <div
                      className="text-gray-100 mt-3"
                      dangerouslySetInnerHTML={{ __html: child.description }}
                    />
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </section>
  );
}
const colors = {
  0: "primary",
  1: "secondary",
  2: "terciary",
  3: "primary",
  4: "secondary",
  5: "terciary",
};
