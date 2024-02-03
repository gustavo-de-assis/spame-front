import { getDoctorById } from "@/services/doctor";

type mdRecordType = {
  doctorId: number;
  diagnostic: string;
  createdAt: string;
};

export default function MedicalRecord(props: mdRecordType) {
  const { doctorId, diagnostic, createdAt } = props;

  const doctorInfo = getDoctorById(doctorId);

  return (
    <main>
      <section className="flex flex-row text-xl mb-4 gap-5">
        <h2>Data.: {createdAt}</h2>
        <h2>Médico: {doctorInfo.name}</h2>
        <h2>Especialidade: {doctorInfo.speciality}</h2>
      </section>
      <section className="text-justify">{diagnostic.toUpperCase()}</section>
    </main>
  );
}
