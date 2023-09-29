import "./globals.css";
import type { Metadata } from "next";
import { Roboto, Anton } from "next/font/google";

const roboto = Roboto({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-roboto",
});

const anton = Anton({
  weight: "400",
  style: ["normal"],
  subsets: ["latin"],
  variable: "--font-anton",
});

export const metadata: Metadata = {
  title:
    "Trevo Autopeças - Qualidade e Variedade em Autopeças para o seu Veículo",
  description:
    "Bem-vindo à Trevo Autopeças, sua fonte confiável de autopeças de alta qualidade localizado no Naque em Minas Gerais. Explore nossa ampla seleção de peças e acessórios automotivos para manutenção e reparo. Conte com nossa experiência e atendimento excepcional para manter o seu veículo funcionando com desempenho máximo. Encontre as peças certas, sempre!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${roboto.variable} ${anton.variable} font-sans snap-y	`}
    >
      <body>{children}</body>
    </html>
  );
}
