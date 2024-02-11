"use client";

import MenuButton from "@/components/MenuButton";
import Navbar from "@/components/Navbar";
import { FaIdCard } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { LuCalendarClock } from "react-icons/lu";
import { VscGraph } from "react-icons/vsc";

export default function Dashboard() {
  return (
    <main>
      <Navbar></Navbar>
      <section className="w-screen h-screen flex flex-row items-center justify-center">
        <div className=" w-3/4 h-full items-center justify-evenly flex flex-row">
          <MenuButton Icon={FiSearch} route="/search">
            Pacientes
          </MenuButton>
          <MenuButton Icon={FaIdCard} route="/employee-list">
            Funcionários
          </MenuButton>
          <MenuButton Icon={LuCalendarClock} route="/employee-scale">
            Escalas
          </MenuButton>
          <MenuButton Icon={VscGraph} route="/reports">
            Estatísticas
          </MenuButton>
        </div>
      </section>
    </main>
  );
}
