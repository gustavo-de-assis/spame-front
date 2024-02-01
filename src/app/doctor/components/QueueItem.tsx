import { getUserById } from "@/services/patients";

type QueueItemType = {
  patientId: number;
  returning: boolean;
  appointTime: string;
};

export default function QueueItem(props: QueueItemType) {
  const { patientId, returning, appointTime } = props;

  const patient = getUserById(patientId);

  return (
    <main className="flex flex-row justify-between items-center bg-slate-300 rounded h-16 relative text-primary text-xl">
      <h2 className="absolute left-5">{patient?.name}</h2>
      <h2 className="absolute left-[49%]">{appointTime}</h2>
      {returning ? (
        <h2 className="absolute left-[94%] text-left">Retorno</h2>
      ) : (
        <h2 className="absolute left-[90%] text-left">Encaminhamento</h2>
      )}
    </main>
  );
}
