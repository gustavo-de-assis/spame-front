import { useRouter } from "next/navigation";
import { IconType } from "react-icons";

interface ButtonProps {
  children: React.ReactNode;
  Icon: IconType;
  route: string;
}

export default function MenuButton(props: ButtonProps) {
  const { children, Icon, route } = props;
  const router = useRouter();

  return (
    <div className="flex items-center justify-center flex-col">
      <button className="w-28 h-28 flex items-center justify-center rounded-md border-third border-2 mb-2 hover:bg-secondary hover:text-primary">
        {Icon && <Icon size={65} onClick={() => router.push(route)} />}
      </button>
      <p className="text-primary text-xl">{children}</p>
    </div>
  );
}
