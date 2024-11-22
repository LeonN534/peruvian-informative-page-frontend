"use client";

import BasicInput from "@/app/components/BasicInput";
import Link from "next/link";
import React, { useActionState } from "react";
import { registerUserAction } from "../../actions/auth.action";

const initialState = {
  zodErrors: null,
  message: null,
  apiErrors: null,
  fieldsData: {
    email: "",
    password: "",
  },
};

const LoginForm = () => {
  const [state, formAction, isPending] = useActionState(
    registerUserAction,
    initialState
  );
  return (
    <form
      className="text-xl flex flex-col gap-8"
      id="login-form"
      action={formAction}
    >
      <BasicInput
        form="login-form"
        formState={state}
        label="Correo electrónico"
        name="email"
        placeholder="example@gmail.com"
        type="email"
        defaultValue={state.fieldsData.email}
        required
        hasBackendErrors
      />
      <BasicInput
        form="login-form"
        formState={state}
        label="Contraseña"
        name="password"
        placeholder="Contraseña"
        type="password"
        defaultValue={state.fieldsData.password}
        required
        hasBackendErrors
      />
      <div className="text-white flex justify-between items-center">
        <div className="flex text-base gap-2">
          <p className="text-gray-400">¿Aún no tines una cuenta?</p>
          <Link href="/register" className="underline">
            Resgístrate
          </Link>
        </div>
        <button
          className="bg-green-600 text-white px-4 py-2 rounded-lg font-semibold disabled:bg-gray-300"
          disabled={isPending}
        >
          Iniciar sesión
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
