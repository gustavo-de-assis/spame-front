"use client";
import { AuthContext } from "@/context/AuthContext";
import Image from "next/image";
import { useContext } from "react";
import { useForm } from "react-hook-form";

export default function Home() {
  const { register, handleSubmit } = useForm();
  const { signInUser } = useContext(AuthContext);

  async function handleSignIn(data) {
    await signInUser(data);
  }

  const banner = require("../assets/banner.png");

  return (
    <main className="flex flex-row w-screen h-screen">
      <aside className="flex w-2/3 h-full justify-center items-center">
        <Image src={banner} alt="spame" width={"800"} />
      </aside>
      <aside className="flex flex-col w-1/3 h-full bg-third justify-center items-center">
        <h1 className="mb-20 text-8xl text-primary">Login</h1>
        <form
          className="mt-16 mb-10 flex flex-col gap-4"
          onSubmit={handleSubmit(handleSignIn)}
        >
          <div className=" relative mb-3">
            <p className="text-lg z-1 bottom-9 absolute px-1">Cpf</p>
            <input
              {...register("cpf")}
              id="cpf"
              name="cpf"
              type="text"
              autoComplete="current-cpf"
              className="h-12 rounded bg-white px-3 outline-none focus:bg-slate-200"
              required
            />
          </div>
          <div className=" relative mb-3">
            <p className="text-lg z-1 bottom-9 absolute px-1">Senha</p>
            <input
              {...register("password")}
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              className="h-12 rounded bg-white px-3 outline-none focus:bg-slate-200"
              required
            />
          </div>

          <button
            className="h-14 rounded-md bg-secondary text-white font-semibold text-3xl hover:bg-primary"
            type="submit"
          >
            Entrar
          </button>
        </form>
      </aside>
    </main>
  );
}
