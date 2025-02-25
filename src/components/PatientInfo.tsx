import { PatientContext } from "@/context/PatientContext";
import { Patient } from "@/models/Patient";
import { useRouter } from "next/navigation";
import { useContext } from "react";

export default function PatientInfo({ patient }: Patient) {
  const router = useRouter();
  const { getPatient } = useContext(PatientContext);

  const navigateToPatientPage = () => {
    getPatient(patient.id);
    router.push(`/patients/${patient.id}`);
  };

  return (
    <main className="w-full flex items-center justify-start">
      <div
        className="w-11/12 rounded h-40 flex flex-col items-start justify-center gap-6 bg-slate-300 mb-5 px-4"
        onClick={navigateToPatientPage}
      >
        <p>{patient.name}</p>
        <p>Data Nasc.: {patient.birthdate}</p>
        <p>Cpf: {patient.cpf}</p>
      </div>
    </main>
  );
}
