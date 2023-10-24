import Image from "next/image";
import Link from "next/link";
import { AiOutlineMail } from "react-icons/ai";
import { FaWhatsapp } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { openingTimeData, paymentData } from "./homepage/data";
export default function Footer() {
  const listStyle = "flex items-center justify-between";

  return (
    <footer className="">
      <div className="px-4 md:px-8 py-10 md:py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-20 text-gray-100">
        <div className="flex flex-col items-center">
          <Image src="/logo.svg" width={180} height={90} alt="Logo" />

          <nav className="hidden md:flex gap-8 flex-row uppercase font-anton">
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
          <a
            className="flex gap-3 items-center"
            href="https://api.whatsapp.com/send?phone=553398018479"
            target="_blank"
          >
            <FaWhatsapp size={20} />
            <span>(31) 97570-0098</span>
          </a>
          <a
            className="flex gap-3 items-center"
            target="_blank"
            href="mailto:trevoautopecas22@gmail.com"
          >
            <AiOutlineMail size={20} />
            <span>trevoautopecas22@gmail.com</span>
          </a>
          <a
            className="flex gap-3 items-start"
            href="https://maps.app.goo.gl/2TYYVeyYzdtuR5ja6"
            target="_blank"
          >
            <IoLocationOutline size={20} />
            <span>
              BR-381, KM 200 - Centro,
              <br /> Naque - MG, 35117-000
            </span>
          </a>
        </div>
        <div className="p-3 justify flex gap-4 flex-col">
          <h4 className="text-lg font-anton uppercase">
            Horário de funcionamento
          </h4>
          <ul>
            {openingTimeData.map((item) => (
              <li key={item.day} className={listStyle}>
                <span>{item.day}</span>
                <span>{item.time}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="bg-primary-100 w-full flex justify-center gap-6 py-2 px-4">
        {paymentData.map((item, i) => (
          <Image key={i} src={item.icon} width={30} height={20} alt="" />
        ))}
      </div>
      <div className="bg-black flex items-center justify-center py-3 text-gray-100 text-xs">
        <span>
          Copyright © {new Date().getFullYear()}.{" "}
          <Link href="https://gabschlemper.dev/">gabschlemper.</Link> All rights
          reserved.
        </span>
      </div>
    </footer>
  );
}
