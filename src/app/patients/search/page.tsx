"use client";
import { useEffect, useState } from "react";
import { IoPersonAddSharp } from "react-icons/io5";

import Navbar from "@/components/Navbar";
import PatientInfo from "@/components/PatientInfo";

import { Patient } from "@/models/Patient";
import { patients as bdPatients } from "@/services/patients";
import { useRouter } from "next/navigation";

export default function Search() {
  const [patients, setPatients] = useState<Patient[]>([]);
  const [search, setSearch] = useState<string>("");
  const router = useRouter();

  useEffect(() => {
    searchPatient();
  }, [search]);

  function searchPatient() {
    const result = bdPatients.filter((patient) =>
      patient.name.includes(search)
    );
    setPatients(result);
  }

  return (
    <main>
      <Navbar />
      <section className="flex items-center w-full h-24 mt-32">
        <input
          name="search"
          type="text"
          placeholder="Entre com o nome do paciente"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-1/4 rounded mx-8 px-2 h-10 border-slate-400 border-2"
        />

        <div className="flex items-center justify-center flex-col">
          <button
            onClick={() => router.push("/patients/register")}
            className="w-16 h-10 flex items-center justify-center rounded-md border-primary border-2 text-primary hover:bg-primary hover:text-third"
          >
            <IoPersonAddSharp size={20} />
          </button>
        </div>
      </section>

      {search.length > 0 ? (
        <section className="mx-8">
          {patients.map((p, idx) => (
            <PatientInfo patient={p} key={idx} />
          ))}
        </section>
      ) : (
        <></>
      )}

      <section></section>
    </main>
  );
}
