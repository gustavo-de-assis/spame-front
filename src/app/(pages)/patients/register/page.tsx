"use client";
import axios from "axios";
import { useEffect, useState } from "react";

import { Address } from "@/models/Address";
import { Patient } from "@/models/Patient";

import AddressForm from "@/components/AddressForm";
import Navbar from "@/components/Navbar";
import PersonalInfoForm from "@/components/PersonalInfoForm";

export default function Register() {
  const [cep, setCep] = useState<string>("");
  const [address, setAddress] = useState<Address>({
    street: "",
    number: "",
    district: "",
    city: "",
    state: "",
  });
  const [patient, setPatient] = useState<Patient>({
    name: "",
    birthdate: "",
    gender: "",
    mother: "",
    father: "",
    cpf: "",
    rg: "",
    phone: "",
    email: "",
  });

  const isEmployee = false;

  useEffect(() => {
    if (cep.length === 8) {
      findAddressByCep();
    }
  }, [cep]);

  async function findAddressByCep() {
    const url = `https://viacep.com.br/ws/${cep}/json`;
    let newAddress;
    await axios
      .get(url)
      .then((res) => {
        newAddress = res.data;
        setAddress({
          ...address,
          street: newAddress.logradouro,
          district: newAddress.bairro,
          city: newAddress.localidade,
          state: newAddress.uf,
        });
      })
      .catch((e) => console.log(e));
  }

  function handleRegistration(e: any) {
    e.preventDefault();
    console.log("Patient: ", patient);
    console.log("Address: ", address);
  }

  return (
    <main>
      <section className="mt-32 px-8">
        <h1 className="text-primary text-4xl">Cadastramento de Pacientes</h1>
        <section className="mt-3">
          <form onSubmit={handleRegistration}>
            <PersonalInfoForm
              person={patient}
              setPerson={setPatient}
              isEmployee={isEmployee}
            />
            <AddressForm
              cep={cep}
              address={address}
              setCep={setCep}
              setAddress={setAddress}
            />
            <section className="w-full">
              <h1 className="text-primary text-3xl">Contato</h1>
              <div className="flex flex-row w-full gap-8 my-2">
                <div className="flex flex-col w-1/5">
                  <label className="text-lg">Telefone</label>
                  <input
                    id="phone"
                    name="phone"
                    type="text"
                    autoComplete="off"
                    value={patient.phone}
                    onChange={(e) => {
                      setPatient({
                        ...patient,
                        phone: e.target.value.toUpperCase(),
                      });
                    }}
                    className="h-11 rounded px-3 outline-none bg-slate-200 w-full"
                    required
                  />
                </div>
                <div className="flex flex-col w-1/5">
                  <label className="text-lg">E-mail</label>
                  <input
                    id="email"
                    name="email"
                    type="text"
                    autoComplete="off"
                    value={patient.email}
                    onChange={(e) => {
                      setPatient({
                        ...patient,
                        email: e.target.value.toUpperCase(),
                      });
                    }}
                    className="h-11 rounded px-3 outline-none bg-slate-200"
                    required
                  />
                </div>
              </div>
            </section>
            <button
              className="h-14 w-52 rounded-md mt-8 
                 bg-secondary text-3xl text-white"
              type="submit"
            >
              Enviar
            </button>
          </form>
        </section>
      </section>
    </main>
  );
}
