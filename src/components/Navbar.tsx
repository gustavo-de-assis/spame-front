"use client";
import { AuthContext } from "@/context/AuthContext";
import Image from "next/image";
import { useContext } from "react";

export default function Navbar() {
  const { user, signOutUser } = useContext(AuthContext);

  const logo = require("@/assets/logo_spame.png");
  const userLogo = require("@/assets/user.png");

  return (
    <nav className="w-screen h-28 bg-secondary flex flex-row justify-between px-6">
      <aside className="flex flex-row items-center">
        <Image src={logo} width={80} alt="logo" />
        <h1 className="text-primary text-2xl ml-4"> Clínica Médica</h1>
      </aside>
      <aside className="flex flex-row items-center text-primary">
        <div className="flex flex-col text-right mr-2">
          <h1 className="text-xl">{user?.name}</h1>
          <p
            className="text-sm hover:cursor-pointer hover:text-white"
            onClick={signOutUser}
          >
            Sair
          </p>
        </div>
        <Image src={userLogo} width={80} alt="user" />
      </aside>
    </nav>
  );
}
