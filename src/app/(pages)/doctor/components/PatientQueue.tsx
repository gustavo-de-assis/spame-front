import { getDoctorQueue } from "@/services/queue";
import QueueItem from "./QueueItem";

export default function PatientQeue() {
  const patientsQueue = getDoctorQueue(5);
  patientsQueue.sort((a, b) => (a.appointTime > b.appointTime ? 1 : -1));
  return (
    <main>
      <section className="flex flex-row justify-between text-2xl text-primary">
        <h1>Paciente</h1>
        <h1>Horário</h1>
        <h1>Origem</h1>
      </section>
      <section className="flex flex-col gap-8 mt-4 h-[70vh] overflow-y-scroll">
        {patientsQueue.map((p) => (
          <QueueItem
            key={p.id}
            patientId={p.patientId}
            returning={p.returning}
            appointTime={p.appointTime}
          />
        ))}
      </section>
    </main>
  );
}
