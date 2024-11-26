"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { useToastStore } from "../hooks/useToastSweet";
import { X } from "lucide-react";

const LoginToast = () => {
  const [state, { setState }] = useToastStore();

  useEffect(() => {
    if (state.show) {
      const timer = setTimeout(() => {
        setState(false);
      }, 5000);

      return () => clearTimeout(timer); // Cleanup the timer if the component unmounts or state changes
    }
  }, [state.show]);

  return (
    <div
      className={`fixed bg-red-100 w-11/12 border-2 border-red-500 rounded-xl text-xl font-semibold text-red-800 flex justify-between pl-2 pr-10 py-2 left-1/2 transition-all duration-300 z-10 ${
        state.show ? "top-10 visible" : "-top-full invisible"
      } -translate-x-1/2`}
    >
      <div className="flex gap-4">
        <button className="hover:bg-red-400 rounded-lg px-1 flex items-center justify-center">
          <X className="w-6 h-6" onClick={() => setState(false)} />
        </button>
        <p>Necesitas iniciar sesión para poder interactuar.</p>
      </div>
      <Link href="/login" className="underline ">
        Iniciar sesion
      </Link>
    </div>
  );
};

export default LoginToast;
