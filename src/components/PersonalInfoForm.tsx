"use client";
import { PersonalInfo } from "@/models/PersonalInfo";
import { ReactNode } from "react";

export default function PersonalInfoForm(props: PersonalInfo): ReactNode {
  const {
    person,
    setPerson,
    doctor,
    setDoctor,
    isDoctor,
    setIsDoctor,
    isEmployee,
  } = props;

  return (
    <main className="w-full">
      <h1 className="text-primary text-3xl">Informações Pessoais</h1>
      <div className="flex flex-row w-full gap-8 my-2">
        <div className="flex flex-col w-2/5">
          <label className="text-lg">Nome Completo</label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="off"
            value={person.name}
            onChange={(e) => {
              setPerson({
                ...person,
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
            value={person.birthdate}
            onChange={(e) => {
              setPerson({
                ...person,
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
            value={person.gender}
            onChange={(e) => {
              setPerson({
                ...person,
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
            value={person.mother}
            onChange={(e) => {
              setPerson({
                ...person,
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
            value={person.father}
            onChange={(e) => {
              setPerson({
                ...person,
                father: e.target.value.toUpperCase(),
              });
            }}
            className="h-11 rounded px-3 outline-none bg-slate-200 w-full"
            required
          />
        </div>
      </div>
      <div className="flex flex-row w-full gap-8 my-2 items-center">
        <div className="flex flex-row gap-8 w-2/5">
          <div className="flex flex-col w-26">
            <label className="text-lg">CPF</label>
            <input
              id="cpf"
              name="cpf"
              type="text"
              autoComplete="off"
              value={person.cpf}
              onChange={(e) => {
                setPerson({
                  ...person,
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
              value={person.rg}
              onChange={(e) => {
                setPerson({
                  ...person,
                  rg: e.target.value.toUpperCase(),
                });
              }}
              className="h-11 rounded px-3 outline-none bg-slate-200"
              required
            />
          </div>
        </div>
        {isDoctor && doctor ? (
          <div className="flex flex-row gap-8 w-2/5">
            <div className="flex flex-col w-26">
              <label className="text-lg">CRM</label>
              <input
                id="crm"
                name="crm"
                type="text"
                autoComplete="off"
                value={doctor.crm}
                onChange={(e) => {
                  setDoctor({
                    ...doctor,
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
                value={doctor.speciality}
                onChange={(e) => {
                  setDoctor({
                    ...doctor,
                    speciality: e.target.value.toUpperCase(),
                  });
                }}
                className="h-11 rounded px-3 outline-none bg-slate-200"
                required
              />
            </div>
          </div>
        ) : (
          <></>
        )}

        {isEmployee ? (
          <label className="flex flex-row items-center justify-center gap-2">
            <input
              type="checkbox"
              defaultChecked={isDoctor}
              onChange={(e) => setIsDoctor(e.target.checked)}
            />{" "}
            <p>Médico?</p>
          </label>
        ) : (
          <></>
        )}
      </div>
    </main>
  );
}
