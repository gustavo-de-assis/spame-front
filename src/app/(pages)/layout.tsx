import Navbar from "@/components/Navbar";

export default function pagesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <Navbar />
      <section>{children}</section>
    </main>
  );
}
