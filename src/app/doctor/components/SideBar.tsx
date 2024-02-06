"use client";

import Image from "next/image";
import SideBarItemList from "./SideBarItem";
import AnonymousImage from "../../../assets/user.png";
import { useState } from "react";

type User = {
  name: string | undefined;
  image: string | undefined;
};

type Menu = {
  name: string;
  handler: () => void;
};

type Props = {
  userInfo?: User;
  menuOpt: Menu[];
};

export default function SideBar(props: Props) {
  const { userInfo, menuOpt } = props;
  const imgSrc = userInfo?.image;
  const imageLoader = () => {
    return `${imgSrc}`;
  };
  const [finishAppointment, setFinishAppointment] = useState(false);

  return (
    <main className="h-[80vh] min-w-[400px] xl:w-[25%] ml-8">
      <aside className="h-full">
        {userInfo?.name ? (
          <section className="h-1/3 w-full bg-primary rounded-xl rounded-b-none flex flex-col flex-nowrap overflow-hidden items-center justify-center gap-3">
            <Image
              loader={imageLoader}
              src="Patient.png"
              width={150}
              height={150}
              alt="Patient picture"
              className="h-[150px] w-[150px] rounded-full"
            />

            <p className="text-2xl text-white text-center max-h-5">
              {" "}
              {userInfo.name}{" "}
            </p>
          </section>
        ) : (
          <section className="h-1/3 w-full bg-primary rounded-xl rounded-b-none flex flex-col flex-nowrap overflow-hidden items-center justify-center gap-3">
            <Image
              src={AnonymousImage}
              width={150}
              height={150}
              alt="Patient picture"
              className="h-[150px] w-[150px] rounded-full"
            />

            <p className="text-2xl text-white text-center max-h-5">
              {" "}
              Paciente não cadastrado{" "}
            </p>
          </section>
        )}

        <section className="h-2/3 w-full relative bg-third rounded-xl rounded-t-none box-border py-5 flex flex-col gap-5 items-center">
          {menuOpt.map((item, idx) => (
            <SideBarItemList
              name={item.name}
              handler={item.handler}
              itemIdx={idx}
              stopAppointment={finishAppointment}
              key={idx}
            />
          ))}

          <button
            className="h-[40px] w-7/12 bg-secondary rounded-lg text-xl text-white text-center absolute bottom-[15%]"
            onClick={() => {
              setFinishAppointment(true);
            }}
          >
            Finalizar Atendimento
          </button>
        </section>
      </aside>
    </main>
  );
}
