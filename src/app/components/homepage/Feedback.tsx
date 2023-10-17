import Image from "next/image";
import { feedbackData } from "./data";

export function Feedback() {
  return (
    <section className="bg-gradient-to-t from-black to-secondary flex flex-col items-center gap-24 py-20 md:py-24 px-4 md:px-8">
      <div className="flex flex-col gap-3 text-center">
        <h2 className="text-4xl md:text-5xl">
          Feedback dos <span className="text-primary-100">clientes</span>
        </h2>
        <p>Veja o que nossos clientes tem a dizer sobre a TREVO autopeças.</p>
      </div>

      <div className="sm:grid grid-cols-2 lg:grid-cols-4 gap-6">
        {feedbackData.map((item: any, indexParent: number) => {
          return (
            <div className="text-sm" key={indexParent}>
              {item.map((child: any, indexChild: number) => {
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
