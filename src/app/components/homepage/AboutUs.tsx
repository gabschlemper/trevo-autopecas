"use client";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Button from "../Button";

const userSchema = z.object({
  name: z
    .string()
    .min(1, { message: "É necessário inserir um nome válido." })
    .max(100),
  email: z.string().email({ message: "Por favor, inserir um email." }),
  phone: z
    .string()
    .min(1, { message: "O número de celular é obrigatório" })
    .max(15, {
      message: "O número de telefone deve ter no máximo 15 caracteres.",
    }),
  message: z
    .string()
    .min(5, { message: "Mínimo 5 caracteres." })
    .max(100, { message: "Sua mensagem deve ter no máximo 100 caracteres" }),
});

type Inputs = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

export default function AboutUs() {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
    watch,
  } = useForm<Inputs>({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
    resolver: zodResolver(userSchema),
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  const inputBase =
    "bg-black rounded-xl h-10 bg-opacity-40 px-4 focus:outline-none focus:ring-1 focus:ring-gray";
  const errorMessageBase =
    "text-xs text-primary-100 opacity-60 pl-3 absolute right-10 top-3";

  return (
    <section
      id="aboutus"
      className="w-full py-24 px-8 bg-gradient-to-t from-black to-secondary"
    >
      <div className="flex flex-col md:flex-row justify-between gap-10 bg-black bg-opacity-20	rounded-lg items-center ">
        <div className="w-full p-8">
          <h1 className="text-grey mb-8">
            Faça seu <span className="text-grey">orçamento</span>
          </h1>

          <form
            action=""
            className="flex flex-col gap-2"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="flex flex-col gap-1 relative">
              <Controller
                name="name"
                control={control}
                render={() => (
                  <>
                    <input
                      type="text"
                      className={inputBase}
                      placeholder="Nome"
                      disabled={isSubmitting}
                      {...register("name")}
                    />
                    {errors.name && (
                      <p className={errorMessageBase}>{errors.name.message}</p>
                    )}
                  </>
                )}
              />
            </div>

            <div className="flex flex-col gap-1 relative">
              <Controller
                name="name"
                control={control}
                render={() => (
                  <>
                    <input
                      type="number"
                      className={inputBase}
                      placeholder="Telefone"
                      disabled={isSubmitting}
                      {...register("phone")}
                    />
                    {errors.phone && (
                      <p className={errorMessageBase}>{errors.phone.message}</p>
                    )}
                  </>
                )}
              />
            </div>

            <div className="flex flex-col gap-1 relative">
              <Controller
                name="name"
                control={control}
                render={() => (
                  <>
                    <input
                      type="text"
                      className={inputBase}
                      placeholder="Email"
                      disabled={isSubmitting}
                      {...register("email")}
                    />
                    {errors.email && (
                      <p className={errorMessageBase}>{errors.email.message}</p>
                    )}
                  </>
                )}
              />
            </div>

            <div className="flex flex-col gap-1 relative">
              <Controller
                name="name"
                control={control}
                render={() => (
                  <>
                    <textarea
                      className={`${inputBase} resize-y pt-4 h-24`}
                      placeholder="Deixe sua mensagem"
                      disabled={isSubmitting}
                      {...register("message")}
                    />
                    {errors.message && (
                      <p className={errorMessageBase}>
                        {errors.message.message}
                      </p>
                    )}
                  </>
                )}
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="text-primary-100 border-2 border-primary-100 rounded-3xl py-2 px-5 uppercase hover:shadow-lg hover:scale-105 transition-all font-bold"
            >
              Entre em contato
            </button>
          </form>
        </div>

        <div className="p-8">
          <h1 className="text-grey mb-8">Quem somos nós?</h1>
          <p>
            Na TREVO Autopeças, estamos aqui para atender às suas necessidades
            automotivas. Somos a sua fonte confiável para autopeças de alta
            qualidade e acessórios para veículos. Nossa equipe experiente e
            preços competitivos tornam a manutenção e a personalização do seu
            veículo simples e acessíveis. Venha nos visitar hoje e descubra como
            podemos ajudar a manter o seu carro em ótimo estado.
          </p>
          <Button className="bg-primary-100 mt-8">
            <MdOutlineArrowForwardIos />
          </Button>
        </div>
      </div>

      {/* <pre>{JSON.stringify(watch(), null, 2)}</pre> */}
    </section>
  );
}
