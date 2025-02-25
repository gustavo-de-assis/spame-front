import { getPatientMdRecord } from "@/services/mdRecord";
import { getUserById } from "@/services/patients";
import PatientInfo from "../../components/PatientInfo";
import MedicalRecord from "../../components/MedicalRecord";

export default function MdRecord({
  params,
}: {
  params: { patientId: string };
}) {
  const patient = getUserById(Number(params.patientId));
  const mdRecord = getPatientMdRecord(Number(params.patientId));

  //mdRecord.sort((a, b) => (a.createdAt > b.createdAt ? 1 : -1));

  //Transforming the createdAt to a Date format so I can order by time.
  function parseDate(dateString: string): Date {
    const [day, month, year] = dateString.split("/").map(Number);
    return new Date(year, month - 1, day);
  }

  mdRecord.sort((a, b) => {
    const dateA = parseDate(a.createdAt);
    const dateB = parseDate(b.createdAt);
    return dateA.getTime() - dateB.getTime();
  });

  return (
    <main className="w-2/3 h-[600px]">
      {patient ? (
        <>
          <section className="my-5">
            <h1 className="text-3xl mb-5">Dados do paciente</h1>
            <PatientInfo
              name={patient?.name}
              birthdate={patient?.birthdate}
              gender={patient?.gender}
              cpf={patient?.cpf}
            />
          </section>
          <section>
            <h1 className="text-3xl mb-5">Atendimentos</h1>
            {mdRecord.map((m) => (
              <div className="mb-16" key={m.id}>
                <MedicalRecord
                  diagnostic={m.diagnostic}
                  createdAt={m.createdAt}
                  doctorId={m.doctorId}
                />
              </div>
            ))}
          </section>
        </>
      ) : (
        <></>
      )}
    </main>
  );
}
