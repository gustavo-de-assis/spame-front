type doctorType = {
  name: string;
  speciality: string;
};

export const doctors = [
  { id: 1, name: "Wilona Leward", speciality: "Goldenrod" },
  { id: 2, name: "Milicent Preston", speciality: "Purple" },
  { id: 3, name: "Korrie Croix", speciality: "Orange" },
  { id: 4, name: "Ardis Lamonby", speciality: "Yellow" },
  { id: 5, name: "Toma Crosetti", speciality: "Pink" },
  { id: 6, name: "Polly Lucks", speciality: "Blue" },
  { id: 7, name: "Ezra Kidwell", speciality: "Indigo" },
  { id: 8, name: "Elianora Petrolli", speciality: "Goldenrod" },
  { id: 9, name: "Catlee Greenwood", speciality: "Maroon" },
  { id: 10, name: "Pauli Mawdsley", speciality: "Indigo" },
];

export function getDoctorById(doctorId: number): doctorType {
  const doctor = doctors.find((d) => d.id === doctorId) as doctorType;
  return doctor;
}
