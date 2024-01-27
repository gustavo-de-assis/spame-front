import { Dispatch, SetStateAction } from "react";
import { Doctor } from "./Doctor";
import { Patient } from "./Patient";

export type PersonalInfo = {
  person: Patient;
  doctor?: Doctor;
  setPerson: Dispatch<SetStateAction<Patient>>;
  setDoctor?: Dispatch<SetStateAction<Doctor>>;
  setIsDoctor?: Dispatch<SetStateAction<boolean>>;
  isDoctor?: boolean;
  isEmployee: boolean;
};
