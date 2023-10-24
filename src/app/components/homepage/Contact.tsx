"use client";
import { AiOutlineMail } from "react-icons/ai";
import { BsTelephoneFill } from "react-icons/bs";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import Form from "../Form";

export default function Contact() {
  return (
    <section id="contact" className="md:bg-secondary bg-terciary md:pt-20">
      <div className="bg-terciary text-secondary flex justify-between flex-col md:flex-row gap-20 mx-4 md:mx-8 py-16 md:py-20 md:px-60 rounded-xl">
        <div className="gap-4 flex-col">
          <div className="m-auto">
            <h4 className="text-3xl font-anton uppercase mb-2">Contato</h4>
            <p className="max-w-md mb-5">
              Queremos ouvir de você e garantir que sua experiência conosco seja
              a melhor possível. Independentemente do motivo pelo qual você
              deseja entrar em contato, estamos aqui para ajudar.
            </p>
            <a
              className="flex gap-3 items-center"
              href="https://api.whatsapp.com/send?phone=553398018479"
              target="_blank"
            >
              <BsTelephoneFill size={20} />
              <span>(33) 9801-8479</span>
            </a>
            <a
              className="flex gap-3 items-center"
              href="mailto:trevoautopecas22@gmail.com"
              target="_blank"
            >
              <AiOutlineMail size={20} />
              <span>trevoautopecas22@gmail.com</span>
            </a>
            <div className="flex gap-3 mt-4">
              <a
                href="https://api.whatsapp.com/send?phone=553398018479"
                target="_blank"
              >
                <FaWhatsapp size={26} />
              </a>
              <a
                href="https://www.instagram.com/trevocentroautomotivo"
                target="_blank"
              >
                <FaInstagram size={26} />
              </a>
            </div>
          </div>
        </div>
        <div className="flex-1 max-w-2xl">
          <Form />
        </div>
      </div>
    </section>
  );
}
