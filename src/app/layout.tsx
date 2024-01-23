import type { Metadata } from "next";
import { Mandali } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/context/AuthContext";

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
    <html lang="pt-br" className={mandali.className}>
      <body>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
