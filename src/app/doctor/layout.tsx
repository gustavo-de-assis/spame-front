import Navbar from "@/components/Navbar";

export default function DocLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="h-fit w-screen">
      <Navbar />
      <section className="mt-36 px-8">{children}</section>
    </main>
  );
}
