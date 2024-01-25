import ItemList from "@/components/ItemList";
import Navbar from "@/components/Navbar";

export default function EmployeeList () {
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

            <section className="flex flex-col items-center gap-10 h-auto">
                <h1 className="font-normal text-primary text-[50px] leading-[45px] mt-14 w-[95%]"> Funcionários </h1>
                
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