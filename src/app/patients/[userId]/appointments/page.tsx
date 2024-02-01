"use client";

import Navbar from "@/components/Navbar";
import ScheduleList from "@/components/ScheduleList";
import SideBar from "@/components/SideBar";
import { getScheduleByUserId } from "@/services/schedule";
import { useRouter } from "next/navigation";

export default function Appointments({ params, } : { params: { userId: string }; }) {
  const router = useRouter();
  const image = require("@/assets/perfilSpame.jpg");
  const user = { name: "Esdrinhas", imgSrc: image };
  const menuOpt = [
    {
      name: "Dados Pessoais",
      handler: () => router.push(`/patients/${params.userId}`),
    },
    {
      name: "Atendimentos",
      handler: () => router.push(`/patients/${params.userId}/appointments`),
    },
    {
      name: "Agendar Atendimento",
      handler: () => router.push(`/patients/${params.userId}/schedule`),
    },
  ];

  const schedules = getScheduleByUserId(Number(params.userId));

  return (
    <>
      <Navbar/>

      <section className="flex items-center gap-8 mt-[152px]">
        <SideBar userInfo={user} menuOpt={menuOpt} />

        <div className="h-[80vh] w-[70vw] flex flex-col">
          <h1 className="font-normal text-primary text-[45px] leading-[45px] mb-14"> Atendimentos Realizados </h1>

          <div className="flex flex-col">
            <div className="flex items-center relative h-[30px] mb-8">
              <span className="font-normal text-primary text-[30px] leading-[45px] absolute left-0">Especialidade</span>
              <span className="font-normal text-primary text-[30px] leading-[45px] absolute left-1/4">Médico</span>
              <span className="font-normal text-primary text-[30px] leading-[45px] absolute left-2/4">Agendado em:</span>
              <span className="font-normal text-primary text-[30px] leading-[45px] absolute left-3/4">Data da consulta</span>
            </div>

            <ScheduleList dataSchedules={schedules}/>
          </div>
        </div>
      </section>
    </>
  );
}
