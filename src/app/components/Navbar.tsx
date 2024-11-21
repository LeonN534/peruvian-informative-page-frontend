"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Navbar = () => {
  const pathname = usePathname();
  return (
    <nav className="bg-gray-700 px-40 py-10 flex text-white items-center">
      <Link href="/" className="font-black text-3xl mr-auto">
        Grupo 2
      </Link>
      <ul className="flex text-white text-lg font-bold justify-center">
        <li>
          <Link
            href="/economic-structure"
            className={`px-4 py-2 rounded-md block ${
              pathname === "/" && "bg-gray-400 text-gray-800"
            }`}
          >
            Estructura económica y desarrollo
          </Link>
        </li>
        <li>
          <Link
            href="/descentralization-process"
            className={`px-4 py-2 rounded-md block ${
              pathname === "/descentralization-process" &&
              "bg-gray-400 text-gray-800"
            }`}
          >
            Proceso de descentralización y su impacto
          </Link>
        </li>
      </ul>
      <Link
        href="/login"
        className="bg-white text-black font-semibold text-lg px-4 py-2 rounded-md ml-auto"
      >
        Acceder
      </Link>
    </nav>
  );
};

export default Navbar;
