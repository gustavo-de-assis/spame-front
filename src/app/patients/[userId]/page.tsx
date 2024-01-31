"use client";
import Navbar from "@/components/Navbar";
import SideBar from "@/components/SideBar";
import { Patient } from "@/models/Patient";
import { getAddressById } from "@/services/addresses";
import { getUserById } from "@/services/patients";
import { useEffect, useState } from "react";

export default function PatientPage({
  params,
}: {
  params: { userId: string };
}) {
  const [user, setUser] = useState<Patient>();
  //const [address, setAddress] = useState<Address>();
  /*   const user = await getUserById(Number(params.userId));
   */
  useEffect(() => {
    const getUser = getUserById(Number(params.userId));
    setUser(getUser);
  }, [user]);

  const address = getAddressById(user?.addressId);

  const img = require("@/assets/jao.jpeg");
  const userInfo = {
    name: user?.name,
    imgSrc: img,
  };

  const menuOpt = [{ name: "OLA" }, { name: "OLA" }, { name: "OLA" }];

  if (!user) {
    return <>Carregando...</>;
  }

  return (
    <main>
      <Navbar />
      <SideBar userInfo={userInfo} menuOpt={menuOpt} />
      <aside className="flex flex-col w-[73%] ml-[490px] mt-36 rounded text-primary px-4">
        <h1 className="text-5xl my-3">Dados Pessoais</h1>
        <section className="bg-white rounded mt-4 mb-12">
          <div className="text-2xl flex flex-col gap-2 px-6">
            <p>Nome: {user.name}</p>
            <p>Data Nasc.: {user.birthdate}</p>
            <p>Mãe: {user.mother}</p>
            <p>Pai: {user.father}</p>
            <p>Cpf: {user.cpf}</p>
            <p>Rg: {user.rg}</p>
          </div>
        </section>
        <h1 className="text-5xl my-3">Endereço e contato</h1>
        <section className="bg-white rounded mt-4">
          <div className="text-2xl flex flex-col gap-2 px-6">
            <p>Rua: {address.street}</p>
            <p>Número: {address.number}</p>
            <p>Bairro: {address.district}</p>
            <p>Cidade: {address.city}</p>
            <p>Estado: {address.state}</p>
            <p>Telefone: {user.phone}</p>
            <p>Email: {user.email}</p>
          </div>
        </section>
      </aside>
    </main>
  );
}
