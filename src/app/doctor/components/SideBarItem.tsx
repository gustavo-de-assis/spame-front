import Stopwatch from "./Chronometer";

type Item = {
  name: string;
  handler?: () => void;
  itemIdx: number;
  stopAppointment: boolean;
};

export default function SideBarItemList(props: Item) {
  const { name, handler, itemIdx, stopAppointment } = props;

  return itemIdx !== 0 ? (
    <span
      className="flex items-center cursor-pointer h-10 w-full text-2xl p-5 text-primary hover:bg-primary hover:text-third"
      onClick={() => {
        handler();
      }}
    >
      {name.toUpperCase()}
    </span>
  ) : (
    <div
      className="flex items-center cursor-pointer justify-between h-10 w-full p-5 text-2xl text-primary hover:bg-primary hover:text-third"
      onClick={() => handler()}
    >
      <span>{name.toUpperCase()}</span>
      <Stopwatch stopAppointment={stopAppointment} />
    </div>
  );
}
