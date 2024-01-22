import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Mandali } from "next/font/google";
import "./globals.css";

//const inter = Inter({ subsets: ["latin"] });
const mandali = Mandali({ subsets: ["latin"], weight: ["400"] });

export const metadata: Metadata = {
  title: "Spame",
  description: "Sistema de Prontuários e Atendimento Médico Eletrônico",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={mandali.className}>{children}</body>
    </html>
  );
}
