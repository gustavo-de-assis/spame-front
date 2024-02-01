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
    <main className="flex flex-row justify-between items-center bg-slate-300 rounded min-h-16 max-h-16 relative text-primary text-xl">
      <h2 className="absolute left-5">{patient?.name}</h2>
      <h2 className="absolute left-[49%]">{appointTime}</h2>
      {returning ? (
        <span className="absolute right-2 text-left flex flex-row gap-4">
          <h2>Retorno</h2>
          <button
            className=" text-white bg-secondary rounded-md px-3"
            onClick={startAppointment}
          >
            Iniciar
          </button>
        </span>
      ) : (
        <span className="absolute right-2 text-left flex flex-row gap-4">
          <h2>Encaminhamento</h2>
          <button
            className=" text-white bg-secondary rounded-md px-3"
            onClick={startAppointment}
          >
            Iniciar
          </button>
        </span>
      )}
    </main>
  );
}
