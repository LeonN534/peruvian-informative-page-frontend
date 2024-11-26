import Link from "next/link";
import { ArrowLeft } from "@/../public/icons";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Link
        href="/"
        className="font-bold text-xl mr-auto flex gap-4 p-2 absolute text-white w-[220px] items-center top-4 left-4"
      >
        <ArrowLeft className="w-8 h-8 stroke-white stroke-2" />
        <p>Volver a la página principal</p>
      </Link>
      <main className="bg-gray-800 flex items-center justify-center h-screen">
        {children}
      </main>
    </>
  );
}
