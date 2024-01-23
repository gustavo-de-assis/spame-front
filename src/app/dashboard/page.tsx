"use client";
import { AuthContext } from "@/context/AuthContext";
import { useContext } from "react";

export default function Dashboard() {
  const { user } = useContext(AuthContext);

  return (
    <>
      <h1>{user?.name}</h1>
      <h2>{user?.cpf}</h2>
    </>
  );
}
