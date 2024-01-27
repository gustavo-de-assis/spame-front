"use client";
import axios from "axios";
import { useEffect, useState } from "react";

import { Address } from "@/models/Address";
import { Employee } from "@/models/Employee";

import AddressForm from "@/components/AddressForm";
import Navbar from "@/components/Navbar";

export default function Register() {
  const [cep, setCep] = useState<string>("");
  const [address, setAddress] = useState<Address>({
    street: "",
    number: "",
    district: "",
    city: "",
    state: "",
  });
  const [employee, setEmployee] = useState<Employee>({
    name: "",
    birthdate: "",
    gender: "",
    mother: "",
    father: "",
    cpf: "",
    rg: "",
    crm: "",
    speciality: "",
    phone: "",
    email: "",
  });

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
    console.log("Employee: ", employee);
    console.log("Address: ", address);
  }

  return (
    <main>
      <Navbar />
      <section className="mt-32 px-8">
        <h1 className="text-primary text-4xl">Cadastramento de Funcionários</h1>
        <section className="mt-3">
          <form onSubmit={handleRegistration}>
            <section className="w-full">
              <h1 className="text-primary text-3xl">Informações Pessoais</h1>
              <div className="flex flex-row w-full gap-8 my-2">
                <div className="flex flex-col w-2/5">
                  <label className="text-lg">Nome Completo</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="off"
                    value={employee.name}
                    onChange={(e) => {
                      setEmployee({
                        ...employee,
                        name: e.target.value.toUpperCase(),
                      });
                    }}
                    className="h-11 rounded px-3 outline-none bg-slate-200 w-full"
                    required
                  />
                </div>
                <div className="flex flex-col w-26">
                  <label className="text-lg">Data Nasc.:</label>
                  <input
                    id="birthdate"
                    name="birthdate"
                    type="date"
                    autoComplete="off"
                    value={employee.birthdate}
                    onChange={(e) => {
                      setEmployee({
                        ...employee,
                        birthdate: e.target.value.toUpperCase(),
                      });
                    }}
                    className="h-11 rounded px-3 outline-none bg-slate-200"
                    required
                  />
                </div>
                <div className="flex flex-col w-16">
                  <label className="text-lg">Sexo</label>
                  <input
                    id="gender"
                    name="gender"
                    type="text"
                    autoComplete="off"
                    value={employee.gender}
                    onChange={(e) => {
                      setEmployee({
                        ...employee,
                        gender: e.target.value.toUpperCase(),
                      });
                    }}
                    className="h-11 rounded px-3 outline-none bg-slate-200"
                    required
                  />
                </div>
              </div>
              <div className="flex flex-row w-full gap-8 my-2">
                <div className="flex flex-col w-2/5">
                  <label className="text-lg">Filiação (Mãe)</label>
                  <input
                    id="mother"
                    name="mother"
                    type="text"
                    autoComplete="off"
                    value={employee.mother}
                    onChange={(e) => {
                      setEmployee({
                        ...employee,
                        mother: e.target.value.toUpperCase(),
                      });
                    }}
                    className="h-11 rounded px-3 outline-none bg-slate-200 w-full"
                    required
                  />
                </div>
                <div className="flex flex-col w-2/5">
                  <label className="text-lg">Filiação (Pai)</label>
                  <input
                    id="father"
                    name="father"
                    type="text"
                    autoComplete="off"
                    value={employee.father}
                    onChange={(e) => {
                      setEmployee({
                        ...employee,
                        father: e.target.value.toUpperCase(),
                      });
                    }}
                    className="h-11 rounded px-3 outline-none bg-slate-200 w-full"
                    required
                  />
                </div>
              </div>
              <div className="flex flex-row w-full gap-8 my-2">
                <div className="flex flex-row gap-8 w-2/5">
                  <div className="flex flex-col w-26">
                    <label className="text-lg">CPF</label>
                    <input
                      id="cpf"
                      name="cpf"
                      type="text"
                      autoComplete="off"
                      value={employee.cpf}
                      onChange={(e) => {
                        setEmployee({
                          ...employee,
                          cpf: e.target.value.toUpperCase(),
                        });
                      }}
                      className="h-11 rounded px-3 outline-none bg-slate-200"
                      required
                    />
                  </div>
                  <div className="flex flex-col w-26">
                    <label className="text-lg">RG</label>
                    <input
                      id="rg"
                      name="rg"
                      type="text"
                      autoComplete="off"
                      value={employee.rg}
                      onChange={(e) => {
                        setEmployee({
                          ...employee,
                          rg: e.target.value.toUpperCase(),
                        });
                      }}
                      className="h-11 rounded px-3 outline-none bg-slate-200"
                      required
                    />
                  </div>
                </div>
                <div className="flex flex-row gap-8 w-1/2">
                  <div className="flex flex-col w-26">
                    <label className="text-lg">CRM</label>
                    <input
                      id="crm"
                      name="crm"
                      type="text"
                      autoComplete="off"
                      value={employee.crm}
                      onChange={(e) => {
                        setEmployee({
                          ...employee,
                          crm: e.target.value.toUpperCase(),
                        });
                      }}
                      className="h-11 rounded px-3 outline-none bg-slate-200"
                      required
                    />
                  </div>
                  <div className="flex flex-col w-26">
                    <label className="text-lg">Especialidade</label>
                    <input
                      id="speciality"
                      name="speciality"
                      type="text"
                      autoComplete="off"
                      value={employee.speciality}
                      onChange={(e) => {
                        setEmployee({
                          ...employee,
                          speciality: e.target.value.toUpperCase(),
                        });
                      }}
                      className="h-11 rounded px-3 outline-none bg-slate-200"
                      required
                    />
                  </div>
                </div>
              </div>
            </section>
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
                    value={employee.phone}
                    onChange={(e) => {
                      setEmployee({
                        ...employee,
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
                    value={employee.email}
                    onChange={(e) => {
                      setEmployee({
                        ...employee,
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
