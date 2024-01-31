import Image from "next/image";
import MenuItem from "./SideBarMenuItem";

type User = {
  name: string;
  imgSrc: string;
};

type Menu = {
  name: string;
};

type Props = {
  userInfo?: User;
  menuOpt: Menu[];
};

export default function SideBar(props: Props) {
  const { userInfo, menuOpt } = props;
  const imgSrc = userInfo?.imgSrc;

  return (
    <main className="h-[80vh] w-[440px] ml-8">
      <aside className="h-full">
        <section className="h-1/3 w-full bg-primary rounded-xl rounded-b-none">
          {userInfo ? (
            <div className="flex flex-col flex-nowrap overflow-hidden items-center h-full justify-between py-4">
              <Image src={imgSrc} width={150} height={150} alt="imgSrc" className="rounded-full"/>
              
              <p className="text-2xl text-white text-center w-[90%]">
                {userInfo.name}
              </p>
            </div>
          ) : (
            <></>
          )}
        </section>

        <section className="h-2/3 w-full bg-third rounded-xl rounded-t-none">
          {menuOpt.map((item, idx) => (
            <MenuItem name={item.name} key={idx} />
          ))}
        </section>
      </aside>
    </main>
  );
}
