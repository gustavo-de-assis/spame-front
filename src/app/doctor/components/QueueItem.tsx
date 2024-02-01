"use client";
import { getUserById } from "@/services/patients";

type QueueItemType = {
  patientId: number;
  returning: boolean;
  appointTime: string;
};

export default function QueueItem(props: QueueItemType) {
  const { patientId, returning, appointTime } = props;

  const patient = getUserById(patientId);

  const startAppointment = () => {
    console.log("Patient: ", patient);
  };

  return (
    <main className="flex flex-row justify-between items-center bg-slate-300 rounded h-16 relative text-primary text-xl">
      <h2 className="absolute left-5">{patient?.name}</h2>
      <h2 className="absolute left-[49%]">{appointTime}</h2>
      {returning ? (
        <h2 className="absolute left-[89%] text-left">Retorno</h2>
      ) : (
        <h2 className="absolute left-[85%] text-left">Encaminhamento</h2>
      )}
      <button
        className="absolute left-[95%] text-white bg-secondary rounded-md px-3"
        onClick={startAppointment}
      >
        Iniciar
      </button>
    </main>
  );
}
