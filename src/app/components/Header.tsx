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
      <header className="flex justify-between items-center py-4 px-8 font-bold shadow-md z-50 absolute top-0 w-full backdrop-blur-md">
        <Image
          src="/logo.svg"
          width={60}
          height={52}
          priority
          alt="Trevo Autopeças logo"
        />

        <nav className="hidden md:flex gap-4 pt-0 flex-row uppercase">
          <Link href="#aboutus">Sobre nós</Link>
          <Link href="/">Serviços</Link>
          <Link href="/">Nossa equipe</Link>
          <Link href="/">Contato</Link>
        </nav>

        <div className="flex items-center gap-6">
          <div className="flex gap-3 cursor-pointer">
            <Link href="/">
              <FaWhatsapp size={26} />
            </Link>
            <Link
              href="https://www.instagram.com/trevocentroautomotivo"
              target="_blank"
            >
              <FaInstagram size={26} />
            </Link>
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
        className={`md:hidden font-bold absolute left-0 h-full w-full ${
          isMenuOpen ? "flex z-10 opacity-100" : "hidden"
        }`}
      >
        <ul className="flex flex-col pt-12 px-9 gap-6 w-full h-full bg-secondary uppercase">
          <Link href="#aboutus">Sobre nós</Link>
          <Link href="/">Serviços</Link>
          <Link href="/">Nossa equipe</Link>
          <Link href="/">Contato</Link>
        </ul>
      </nav>
    </>
  );
}
