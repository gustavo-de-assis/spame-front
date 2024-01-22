import Image from "next/image";

export default function Home() {
  const banner = require("../assets/banner.png");

  return (
    <main className="flex flex-row w-screen h-screen">
      <aside className="flex w-2/3 h-full bg-[#fefefe] justify-center items-center">
        <Image src={banner} alt="spame" width={"800"} />
      </aside>
      <aside className="flex flex-col w-1/3 h-full bg-[#5FF0D5] justify-center items-center">
        <h1 className="mb-20 text-8xl text-[#004277]">Login</h1>
        <form className="mt-16 mb-10 flex flex-col gap-4">
          <div className=" relative mb-3">
            <p className="text-lg z-1 bottom-9 absolute px-1">Cpf</p>
            <input
              className="h-12 rounded bg-botticelli-100 px-3 outline-none focus:bg-slate-200"
              type="text"
              required
            />
          </div>
          <div className=" relative mb-3">
            <p className="text-lg z-1 bottom-9 absolute px-1">Senha</p>
            <input
              className="h-12 rounded bg-botticelli-100 px-3 outline-none focus:bg-slate-200"
              type="password"
              required
            />
          </div>

          <button
            className="h-12 rounded-md bg-[#1B96EE] text-white font-semibold text-3xl hover:bg-[#004277]"
            type="submit"
          >
            Entrar
          </button>
        </form>
      </aside>
    </main>
  );
}
