import { getDocById } from "@/services/doctor";
import ScheduleListItem from "./ScheduleListItem";

interface props {
    dataSchedules: {
        id: number;
        patientId: number;
        doctorId: number;
        createdAt: string;
        scheduledFor: string;
    }[] | undefined
}

export default function ScheduleList (infos: props) {
    const { dataSchedules } = infos;

    return (
        <ul className="gap-[20px] flex flex-col">
            {dataSchedules?.map((dataS) => {
                return <ScheduleListItem doctorId={dataS.doctorId} scheduledFor={dataS.scheduledFor} createdAt={dataS.createdAt} />
            })}
        </ul>
    );
}