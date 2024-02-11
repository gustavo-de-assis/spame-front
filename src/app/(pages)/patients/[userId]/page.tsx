"use client";
import { PatientContext } from "@/context/PatientContext";
import { Address } from "@/models/Address";
import { getAddressById } from "@/services/addresses";
import { useContext, useEffect, useState } from "react";

export default function PatientPage({
  params,
}: {
  params: { userId: string };
}) {
  const [address, setAddress] = useState<Address | null>(null);
  const { patient, getPatient } = useContext(PatientContext);

  useEffect(() => {
    if (!patient) {
      getPatient(Number(params.userId));
    }
    console.log("Patient Context: ", patient);
    if (patient && !address) {
      const patientAddress = getAddressById(patient.addressId);
      setAddress(patientAddress);
    }
  }, [address, patient]);

  if (!patient) {
    return <>Carregando...</>;
  }

  return (
    <main className="w-full">
      {/* <Navbar /> */}
      <aside className="flex w-[97%] h-[80vh] flex-col rounded text-primary px-4 bg-slate-200">
        <h1 className="text-5xl my-3">Dados Pessoais</h1>

        <section className="mt-2 mb-6">
          <div className="text-2xl flex flex-col gap-2 px-6">
            <p>Nome: {patient.name}</p>
            <p>Data Nasc.: {patient.birthdate}</p>
            <p>Mãe: {patient.mother}</p>
            <p>Pai: {patient.father}</p>
            <p>Cpf: {patient.cpf}</p>
            <p>Rg: {patient.rg}</p>
          </div>
        </section>

        <h1 className="text-5xl my-3">Endereço e contato</h1>
        <section className="mt-2">
          <div className="text-2xl flex flex-col gap-2 px-6">
            <p>Rua: {address?.street}</p>
            <p>Número: {address?.number}</p>
            <p>Bairro: {address?.district}</p>
            <p>Cidade: {address?.city}</p>
            <p>Estado: {address?.state}</p>
            <p>Telefone: {patient.phone}</p>
            <p>Email: {patient.email}</p>
          </div>
        </section>
      </aside>
    </main>
  );
}
