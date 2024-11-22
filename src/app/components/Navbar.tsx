"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useUserSessionStore } from "../hooks/useUserSessionSweet";
import Profile from "@/../public/profile.png";
import { Home } from "@/../public/icons";

const Navbar = () => {
  const pathname = usePathname();
  const [data, { fetchData }] = useUserSessionStore();

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <nav className="bg-gray-700 px-40 py-10 flex text-white items-center">
      <Link href="/" className="font-black text-3xl mr-auto flex gap-2 p-2">
        <Home className="w-10 h-10 stroke-white stroke-2" />
        Grupo 2
      </Link>
      <ul className="flex text-white text-lg font-bold justify-center gap-4">
        <li>
          <Link
            href="/economic-structure"
            className={`px-4 py-2 rounded-md block ${
              pathname === "/economic-structure" && "bg-gray-400 text-gray-800"
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
      {data.id ? (
        <Link
          href="/user"
          className="ml-auto flex items-center gap-2 w-[120px]"
        >
          <Image
            src={Profile}
            alt="Profile"
            className="w-10 h-10 bg-slate-200 rounded-full p-1"
          />
          <p className="font-semibold text-lg">Mi perfil</p>
        </Link>
      ) : (
        <Link
          href="/login"
          className="bg-white text-black font-semibold text-lg px-4 py-2 rounded-md ml-auto w-[120px] text-center"
        >
          Acceder
        </Link>
      )}
    </nav>
  );
};

export default Navbar;
