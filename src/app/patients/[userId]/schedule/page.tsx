"use client";
import Navbar from "@/components/Navbar";
import SelectOptions from "@/components/SelectOptions";
import SideBar from "@/components/SideBar";
import { useRouter } from "next/navigation";

export default function Appointment({
  params,
}: {
  params: { userId: string };
}) {
  /* const router = useRouter();
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
  ]; */
  const optionsArray = ["Cirurgião", "Psicólogo", "Pediatra"];
  const dataOptions = ["23/03/2032", "23/03/2032", "23/03/2032"];

  return (
    <>
      <Navbar />

      <section>
        {/* <SideBar userInfo={user} menuOpt={menuOpt} />
         */}
        <div className="h-[80vh] w-[50vw] flex flex-col">
          <h1 className="font-normal text-primary text-[45px] leading-[45px]">
            Novo Agendamento
          </h1>

          <div>
            <h3 className="font-normal text-primary text-[30px] leading-[45px] mt-4">
              Especialidade
            </h3>
            <SelectOptions dataArray={optionsArray} />

            <h3 className="font-normal text-primary text-[30px] leading-[45px] mt-4">
              Profissional
            </h3>
            <SelectOptions dataArray={optionsArray} />

            <div className="flex gap-10 mt-4">
              <div>
                <h3 className="font-normal text-primary text-[30px] leading-[45px]">
                  Encaminhado por:
                </h3>
                <SelectOptions dataArray={optionsArray} />
              </div>

              <div className="flex flex-col justify-between">
                <label
                  className="font-normal text-primary text-[30px] leading-[45px] w-fit cursor-pointer"
                  htmlFor="crm"
                >
                  CRM
                </label>
                <input
                  className="h-[40px] p-2 mt-[3px] bg-slate-400 rounded-[8px]"
                  id="crm"
                ></input>
              </div>

              <div className="flex items-end gap-3">
                <label className="font-normal text-primary text-[25px] leading-[45px]">
                  Retorno
                </label>
                <input
                  className="h-10 w-10 bg-slate-400"
                  type="checkbox"
                ></input>
              </div>
            </div>
          </div>

          <h1 className="font-normal text-primary text-[45px] leading-[45px] mb-[20px] mt-[15px]">
            {" "}
            Datas Disponíveis{" "}
          </h1>

          <div className="flex gap-10">
            {dataOptions.map((d, idx) => {
              return (
                <button
                  className="h-10 rounded-[8px] p-3 items-center flex text-[20px] bg-slate-400"
                  key={idx}
                >
                  {d}
                </button>
              );
            })}
          </div>

          <h1 className="font-normal text-primary text-[45px] leading-[45px] mb-[20px] mt-[15px]">
            {" "}
            Horário da Consulta{" "}
          </h1>

          <div className="flex gap-10">
            {dataOptions.map((d, idx) => {
              return (
                <button
                  className="h-10 rounded-[8px] p-3 items-center flex text-[20px] bg-slate-400"
                  key={idx}
                >
                  {d}
                </button>
              );
            })}
          </div>

          <button className="bg-blue-300 rounded-[8px] mt-[30px] w-1/6 font-normal px-6 py-1 text-primary text-[20px] leading-[45px]">
            Agendar
          </button>
        </div>
      </section>
    </>
  );
}
