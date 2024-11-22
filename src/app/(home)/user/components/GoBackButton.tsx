"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "@/../public/icons";

const GoBackButton = () => {
  const router = useRouter();
  return (
    <button
      className="font-bold text-xl mr-auto flex gap-4 p-2 absolute text-white w-[220px] items-center top-4 left-4"
      onClick={() => router.back()}
    >
      <ArrowLeft className="w-8 h-8 stroke-white stroke-2" />
      <p>Volver</p>
    </button>
  );
};

export default GoBackButton;
