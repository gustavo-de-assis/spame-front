import Image from "next/image";

export default function Header() {
  const logo = require("@/assets/logo_spame.png");

  return (
    <nav className="w-full h-28 flex flex-row justify-center items-center gap-5 bg-slate-300">
      <Image src={logo} width={80} alt="logo.png" color="red" />
      <p className="text-3xl">Clínica João das Couves</p>
    </nav>
  );
}
