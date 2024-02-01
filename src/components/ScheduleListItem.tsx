import { getDocById } from "@/services/doctor";

interface props {
    doctorId: number;
    createdAt: string;
    scheduledFor: string;
}

export default function ScheduleListItem (infos: props) {
    const { doctorId, createdAt, scheduledFor } = infos;

    const doctor = getDocById(doctorId);

    return (
        <li className="bg-container relative rounded-[5px] h-[50px] flex flex-row items-center">
            <span className="absolute left-[20px] font-normal text-primary text-[20px] leading-[45px]">{doctor?.speciality}</span>
            <span className="absolute left-1/4 font-normal text-primary text-[20px] leading-[45px]">{doctor?.name}</span>
            <span className="absolute left-2/4 font-normal text-primary text-[20px] leading-[45px]">{scheduledFor}</span>
            <span className="absolute left-3/4 font-normal text-primary text-[20px] leading-[45px]">{createdAt}</span>
        </li>
    );
}