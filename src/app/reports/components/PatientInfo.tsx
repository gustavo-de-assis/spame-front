import { Patient } from "@/models/Patient";

export default function PatientInfo(props: Patient) {
  const { name, birthdate, gender, cpf } = props;

  return (
    <main>
      <h1>
        <span className="text-xl">Paciente: {name}</span>
      </h1>
      <h1>
        <span className="text-xl">Data Nasc.: {birthdate}</span>
      </h1>
      <h1>
        <span className="text-xl">Sexo: {gender}</span>
      </h1>
      <h1>
        <span className="text-xl">Cpf: {cpf} </span>
      </h1>
    </main>
  );
}
