import { Patient } from "@/models/Patient";

export default function PatientInfo({ patient }: Patient) {
  return (
    <main className="w-full flex items-center justify-start">
      <div className="w-11/12 rounded h-40 flex flex-col items-start justify-center gap-6 bg-slate-300 mb-5 px-4">
        <p>{patient.name}</p>
        <p>Data Nasc.: {patient.birthdate}</p>
        <p>Cpf: {patient.cpf}</p>
      </div>
    </main>
  );
}
