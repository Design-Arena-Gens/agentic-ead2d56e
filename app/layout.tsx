import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap"
});

export const metadata: Metadata = {
  title: "PulseCode Studio — Atualizações Inteligentes para Produtos Digitais",
  description:
    "Refinamentos contínuos de produto, design elegante e automações orientadas por IA para acelerar o crescimento das suas experiências digitais."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} ${sora.variable} font-sans bg-neutral-950`}>
        {children}
      </body>
    </html>
  );
}
