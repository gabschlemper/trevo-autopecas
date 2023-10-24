import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import Button from "./Button";
import { useContext, useEffect } from "react";
import { ModalContext } from "../../../public/contexts/ModalContext";
import { sendContactForm } from "../../../lib/api";

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

type FormProps = {
  modal?: boolean;
};
export default function Form({ modal }: FormProps) {
  const { setShowModal } = useContext(ModalContext);
  const {
    register,
    control,
    handleSubmit,
    formState: { errors, isSubmitting, isLoading, isSubmitSuccessful },
    watch,
    reset,
  } = useForm<Inputs>({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
    resolver: zodResolver(userSchema),
  });

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      // Validate the input data
      const result = userSchema.safeParse(data);

      if (result.success) {
        // Data is valid, proceed with the submission
        try {
          await sendContactForm(data);
          alert("Obrigada por entrar em contato!");
          setShowModal(false);
        } catch (error) {
          // Handle API request error here
          console.error("API request error:", error);
          alert("Sua mensagem não foi enviada, tente novamente!");
          setShowModal(false);
        }
      } else {
        // Data is not valid, handle validation errors
        console.log("Validation errors:", result.error);
        // Optionally, you can display validation errors to the user
      }
    } catch (error) {
      console.log("Validation error:", error);
    }
  };

  const inputBase = `${
    modal
      ? "bg-black bg-opacity-40"
      : "bg-transparent border-b border-primary-100"
  } rounded-xl h-10 px-4 focus:outline-none focus:ring-1 focus:ring-gray`;

  const errorMessageBase =
    "text-xs text-primary-100 opacity-60 pl-3 absolute right-10 top-3";
  return (
    <form
      action=""
      className="flex flex-col gap-2"
      onSubmit={handleSubmit(onSubmit)}
    >
      {/* {errors && <div>A mensagem falhou!</div>} */}

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
                <p className={errorMessageBase}>{errors.message.message}</p>
              )}
            </>
          )}
        />
      </div>
      <div className="flex items-center justify-end gap-4 pt-2">
        {/* {modal && (
          <Button
            className="py-2 px-10 border"
            type="button"
            onClick={() => setShowModal(false)}
          >
            Fechar
          </Button>
        )} */}

        <button
          type="submit"
          disabled={isSubmitting}
          className=" text-primary-100 border-2 border-primary-100 rounded-3xl py-2 px-5 uppercase hover:shadow-lg hover:scale-105 transition-all font-bold"
        >
          Enviar
        </button>
      </div>
    </form>
  );
}
