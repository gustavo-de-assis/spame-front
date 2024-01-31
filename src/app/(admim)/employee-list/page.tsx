"use client";
import ItemList from "@/components/ItemList";
import Navbar from "@/components/Navbar";
import { useRouter } from "next/navigation";

export default function EmployeeList () {
    const router = useRouter();

    const employeesMed = [{
            Nome: "Esdrinhas Alisson Antero Fontes",
            Especialidade: "Cirurgião",
            Status: "Férias"},
        {
            Nome: "Esdrinhas Das Sombras",
            Especialidade: "Cirugião",
            Status: "Trabalhando"
        },
        {
            Nome: "Esdrinhas Das Sombras",
            Especialidade: "Cirugião",
            Status: "Trabalhando"
        },
        {
            Nome: "Esdrinhas Das Sombras",
            Especialidade: "Cirugião",
            Status: "Trabalhando"
        }
    ]

    const employeesRec = [{
        Nome: "Esdrinhas Das Sombras",
        Especialidade: "Atendente",
        Status: "Férias"},
    {
        Nome: "Esdrinhas Alisson Antero Fontes",
        Especialidade: "Atendente",
        Status: "Trabalhando"
    }
    ]

    const roles = [{id: 0, role: "Médicos"}, {id: 0, role: "Recepcionistas"}]

    return (
        <>
            <Navbar/>

            <section className="flex flex-col items-center gap-10 h-auto mt-[112px]">
                <div className="flex items-center justify-between mt-[50px] w-[95%]">
                    <h1 className="font-normal text-primary text-[50px] leading-[45px]"> Funcionários </h1>
                    <button 
                        className="h-[40px] w-[120px] rounded-[10px] text-white font-bold bg-secondary" 
                        onClick={() => router.push("/employee/register")}>Adicionar</button>  
                </div>
                
                <div className="flex flex-col gap-[30px] w-[95%]">
                    <h2 className="font-normal text-primary text-[36px]">{roles[0].role}</h2>
                    <ItemList dataArray={employeesMed}/>
                </div>

                <div className="flex flex-col gap-[30px] w-[95%]">
                    <h2 className="font-normal text-primary text-[36px]">{roles[1].role}</h2>
                    <ItemList dataArray={employeesRec}/>
                </div>
            </section>
        </>
    )
}