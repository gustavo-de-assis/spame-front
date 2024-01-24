import ItemList from "@/components/ItemList";

export default function EmployeeList () {
    const employeesMed = [{
            Nome: "Esdrinhas Alisson Antero Fontes",
            Especialidade: "Cirurgião",
            Status: "Férias"},
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

    const roles = [{id: 0, role: "Médico"}, {id: 0, role: "Recepcionista"}]

    return (
        <section>
            <title> Funcionários </title>

            <h1>{roles[0].role}</h1>
            <ItemList dataArray={employeesMed}/>

            <h1>{roles[1].role}</h1>
            <ItemList dataArray={employeesRec}/>
        </section>
    )
}