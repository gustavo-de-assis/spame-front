"use client";
import SideBar from "@/components/SideBar";
import { PatientContext } from "@/context/PatientContext";
import { useRouter } from "next/navigation";
import { useContext } from "react";

export default function PatientLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();
  const { patient } = useContext(PatientContext);
  const img = require("@/assets/jao.jpeg");

  const userInfo = {
    name: patient?.name,
    imgSrc: img,
  };

  const menuOpt = [
    {
      name: "Dados Pessoais",
      handler: () => router.push(`/patients/${patient?.id}`),
    },
    {
      name: "Atendimentos",
      handler: () => router.push(`/patients/${patient?.id}/appointments`),
    },
    {
      name: "Agendar Atendimento",
      handler: () => router.push(`/patients/${patient?.id}/schedule`),
    },
  ];

  return (
    <main className="mt-32 flex flex-row gap-8">
      <SideBar userInfo={userInfo} menuOpt={menuOpt} />
      <aside className="flex w-full">{children}</aside>
    </main>
  );
}
