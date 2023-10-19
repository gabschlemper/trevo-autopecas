import Image from "next/image";
import Link from "next/link";
import { AiOutlineMail } from "react-icons/ai";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";

export default function Footer() {
  const listStyle = "flex items-center justify-between";

  return (
    <footer className="">
      <div className="px-4 md:px-8 py-10 md:py-20 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-20 text-gray-100">
        <div className="flex flex-col items-center">
          <Image src="/logo.svg" width={180} height={90} alt="Logo" />

          <nav className="hidden md:flex gap-4 flex-row uppercase font-anton">
            <Link href="#aboutus">Sobre nós</Link>
            <Link href="#services">Serviços</Link>
            <Link href="#feedback">Feedback</Link>
            <Link href="#location">Contato</Link>
          </nav>
        </div>

        <div className="p-3 justify flex flex-col gap-4">
          <h4 className="text-lg font-anton uppercase ">Sobre a empresa</h4>
          <p>
            A TREVO autopeças oferece uma ampla variedade de componentes
            automotivos essenciais para manter veículos em ótimo estado. Com
            peças de qualidade e expertise, garantimos a segurança e o
            desempenho dos automóveis de nossos clientes.
          </p>
        </div>

        <div className="p-3 justify flex gap-4 flex-col">
          <h4 className="text-lg font-anton uppercase">Contato</h4>
          <div className="flex gap-3 items-center">
            <FaWhatsapp size={20} />
            <span>(31) 97570-0098</span>
          </div>
          <div className="flex gap-3 items-center">
            <AiOutlineMail size={20} />
            <span>trevoautopecas22@gmail.com</span>
          </div>
          <div className="flex gap-3 items-center">
            <IoLocationOutline size={20} />
            <span>
              BR-381, KM 200 - Centro,
              <br /> Naque - MG, 35117-000
            </span>
          </div>
        </div>
        <div className="p-3 justify flex gap-4 flex-col">
          <h4 className="text-lg font-anton uppercase">
            Horário de funcionamento
          </h4>
          <ul>
            <li className={listStyle}>
              <span>Segunda-feira</span>
              <span>08:00 - 18:00</span>
            </li>
            <li className={listStyle}>
              <span>Terça-feira</span>
              <span>08:00 - 18:00</span>
            </li>
            <li className={listStyle}>
              <span>Quarta-feira</span>
              <span>08:00 - 18:00</span>
            </li>
            <li className={listStyle}>
              <span>Quinta-feira</span>
              <span>08:00 - 18:00</span>
            </li>
            <li className={listStyle}>
              <span>Sexta-feira</span>
              <span>08:00 - 18:00</span>
            </li>
            <li className={listStyle}>
              <span>Sábado</span>
              <span>08:00 - 12:00</span>
            </li>
            <li className={listStyle}>
              <span>Domingo</span>
              <span>Fechado</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="bg-black flex items-center justify-center py-3 text-gray-100 text-sm">
        <span>
          Copyright © {new Date().getFullYear()}.{" "}
          <Link href="https://gabschlemper.dev/">gabschlemper.</Link> All rights
          reserved.
        </span>
      </div>
    </footer>
  );
}
