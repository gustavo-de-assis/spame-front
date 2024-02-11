"use client";

import { getUserById } from "@/services/patients";
import SideBar from "../../components/SideBar";
import { useRouter } from "next/navigation";
import Stopwatch from "../../components/Chronometer";

export default function DocAppointment({
  params,
}: {
  params: { patientId: string };
}) {
  const router = useRouter();
  const user = getUserById(Number(params.patientId));
  const userInfo = {
    name: user?.name,
    image: user?.image,
  };

  const menuList = [
    {
      name: "Em atendimento",
      handler: () => {},
    },
    {
      name: "Prontuário",
      handler: () => window.open(`/reports/mdRecord/${params.patientId}`),
    },
    {
      name: "Agendar Retorno",
      handler: () => window.open(`/patients/${params.patientId}/schedule`),
    },
  ];

  return (
    <main className="flex gap-12">
      <SideBar menuOpt={menuList} userInfo={userInfo} />

      <section className="flex flex-col h-[80vh] w-full bg-container rounded-lg p-5 gap-10 overflow-y-scroll">
        <div className="h-[500px] flex flex-col gap-5">
          <h1 className="text-primary text-5xl mb-5">Diagnóstico</h1>
          <textarea className="min-h-[100px] h-full w-full p-3"></textarea>
        </div>

        <div className="h-[500px] flex flex-col gap-5">
          <h1 className="text-primary text-5xl mb-5">Receituário</h1>
          <textarea className="min-h-[100px] h-full w-full p-3"></textarea>
        </div>

        <div className="h-[500px] flex flex-col gap-5">
          <h1 className="text-primary text-5xl">Exames</h1>
          <textarea className="min-h-[100px] h-full w-full p-3"></textarea>
        </div>
      </section>
    </main>
  );
}
