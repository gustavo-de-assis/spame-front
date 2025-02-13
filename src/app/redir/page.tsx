import Navbar from "@/components/Navbar";
import SideBar from "@/components/SideBar";

export default function Dashboard() {
  const user = {
    name: "NOME GRANDE PRA TESTAR SE VAI OCULTAR, GRANDE MESMO, GIGANTE DEMAIS VERY BIG",
    imgSrc: "https://www.svgrepo.com/show/350417/user-circle.svg",
  };
  const menu = [{ name: "Menu 1" }, { name: "Menu 1" }, { name: "Menu 1" }];

  return (
    <main className="h-full">
      <Navbar></Navbar>
      <SideBar userInfo={user} menuOpt={menu}></SideBar>
    </main>
  );
}
