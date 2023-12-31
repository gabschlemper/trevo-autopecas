"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import { RiMenuFill } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function handleisMenuOpen() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <>
      <header className="flex fixed justify-between items-center py-4 px-4 md:px-8 font-bold shadow-md z-50 top-0 w-full bg-secondary">
        <Image
          src="/logo.svg"
          width={60}
          height={52}
          priority
          alt="Trevo Autopeças logo"
        />

        <nav>
          <ul className="hidden md:flex gap-12 pt-0 flex-row uppercase">
            <Link href="#aboutus">Sobre nós</Link>
            <Link href="#services">Serviços</Link>
            <Link href="#feedback">Feedback</Link>
            <Link href="#contact">Contato</Link>
          </ul>
        </nav>

        <div className="flex items-center gap-6">
          <div className="flex gap-3 cursor-pointer">
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

          <button onClick={handleisMenuOpen} className="md:hidden z-20">
            {isMenuOpen ? (
              <AiOutlineClose size={22} />
            ) : (
              <RiMenuFill size={22} />
            )}
          </button>
        </div>
      </header>

      <nav
        className={`md:hidden font-bold h-screen w-full fixed ${
          isMenuOpen ? "z-10 opacity-100" : "hidden"
        }`}
      >
        <ul className="flex flex-col pt-32 px-9 gap-6 w-full h-full bg-secondary uppercase">
          <Link
            href="#aboutus"
            onClick={() => {
              setIsMenuOpen(false);
            }}
          >
            Sobre nós
          </Link>
          <Link
            href="#services"
            onClick={() => {
              setIsMenuOpen(false);
            }}
          >
            Serviços
          </Link>
          <Link
            href="#feedback"
            onClick={() => {
              setIsMenuOpen(false);
            }}
          >
            Feedback
          </Link>
          <Link
            href="#contact"
            onClick={() => {
              setIsMenuOpen(false);
            }}
          >
            Contato
          </Link>
        </ul>
      </nav>
    </>
  );
}
