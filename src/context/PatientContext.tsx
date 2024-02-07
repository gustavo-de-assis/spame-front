"use client";
import { createContext, useEffect, useMemo, useState } from "react";
import { Patient } from "@/models/Patient";
import { getUserById } from "@/services/patients";

type PatientContextType = {
  patient: Patient | null;
  getPatient: (patientId: number) => Promise<void>;
};

export const PatientContext = createContext({} as PatientContextType);

export function PatientProvider({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const [patient, setPatient] = useState<Patient | null>(null);

  useEffect(() => {}, [patient]);

  async function getPatient(patientId: number) {
    const newPatient = await getUserById(patientId); //modify to db access
    if (newPatient) {
      setPatient(newPatient);
    }
  }

  const contextValue = useMemo(
    () => ({
      patient,
      getPatient,
    }),
    [patient, getPatient]
  );

  return (
    <PatientContext.Provider value={contextValue}>
      {children}
    </PatientContext.Provider>
  );
}
