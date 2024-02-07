"use client";

import Navbar from "@/components/Navbar";
import ScheduleList from "@/components/ScheduleList";
import { getScheduleByUserId } from "@/services/schedule";

export default function Appointments({
  params,
}: {
  params: { userId: string };
}) {
  const schedules = getScheduleByUserId(Number(params.userId));

  return (
    <main className="w-full">
      <Navbar />

      <section>
        <div className="h-[80vh] w-[70vw] flex flex-col">
          <h1 className="font-normal text-primary text-[45px] leading-[45px] mb-14">
            {" "}
            Atendimentos Realizados{" "}
          </h1>

          <div className="flex flex-col">
            <div className="flex items-center relative h-[30px] mb-8">
              <span className="font-normal text-primary text-[30px] leading-[45px] absolute left-0">
                Especialidade
              </span>
              <span className="font-normal text-primary text-[30px] leading-[45px] absolute left-1/4">
                Médico
              </span>
              <span className="font-normal text-primary text-[30px] leading-[45px] absolute left-2/4">
                Agendado em:
              </span>
              <span className="font-normal text-primary text-[30px] leading-[45px] absolute left-3/4">
                Data da consulta
              </span>
            </div>

            <ScheduleList dataSchedules={schedules} />
          </div>
        </div>
      </section>
    </main>
  );
}
