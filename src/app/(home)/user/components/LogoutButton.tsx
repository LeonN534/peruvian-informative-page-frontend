"use client";

import { logoutAction } from "@/app/(auth)/actions/auth.action";
import { useUserSessionStore } from "@/app/hooks/useUserSessionSweet";
import { useRouter } from "next/navigation";
import React from "react";

const LogOutButton = () => {
  const router = useRouter();
  const [, { fetchData }] = useUserSessionStore();
  return (
    <button
      className="text-red-400 text-xl font-semibold py-4 w-full border-4 border-red-400 rounded-3xl"
      onClick={async () => {
        await logoutAction();
        await fetchData();
        router.push("/");
      }}
    >
      Cerrar sesión
    </button>
  );
};

export default LogOutButton;
