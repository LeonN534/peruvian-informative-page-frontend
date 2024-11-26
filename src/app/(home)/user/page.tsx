import React from "react";
import Image from "next/image";
import Link from "next/link";
import { getLoggedInUser } from "@/app/services/auth.service";
import { User } from "@/app/interfaces/user.interface";
import Profile from "@/../public/profile.png";
import LogOutButton from "./components/LogoutButton";

const UserPage = async () => {
  const user: User = (await getLoggedInUser()).data;
  return (
    <main
      className="bg-slate-800 flex justify-center items-center"
      style={{ height: "calc(100vh - 136px)" }}
    >
      <div>
        <div className="flex flex-col justify-center w-max mx-auto items-center gap-4">
          <Image
            src={Profile}
            alt="Profile image"
            className="w-40 h-40 bg-slate-300 rounded-full border-[8px] border-slate-white box-content"
          />
          <h2 className="text-2xl font-semibold text-white">{user.fullName}</h2>
        </div>
        <div className="flex flex-col gap-5 mt-10 w-[400px] mx-auto">
          <Link
            href="/user/change-password"
            className="text-white text-xl font-semibold py-4 block rounded-3xl text-center bg-slate-700"
          >
            Cambiar contraseña
          </Link>
          <LogOutButton />
        </div>
      </div>
    </main>
  );
};

export default UserPage;
