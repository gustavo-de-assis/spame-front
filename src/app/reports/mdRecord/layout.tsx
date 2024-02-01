import Header from "../components/Header";

export default function DocLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="h-fit w-full">
      <Header />
      <section className="flex justify-center h-full mt-4">{children}</section>
    </main>
  );
}
