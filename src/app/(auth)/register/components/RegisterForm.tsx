"use client";

import { registerUserAction } from "@/app/(auth)/actions/auth.action";
import BasicInput from "@/app/components/BasicInput";
import Link from "next/link";
import React, { useActionState } from "react";

const initialState = {
  zodErrors: null,
  message: null,
  apiErrors: null,
  fieldsData: {
    name: "",
    lastName: "",
    email: "",
    password: "",
    confirmedPassword: "",
  },
};

const RegisterForm = () => {
  const [state, formAction, isPending] = useActionState(
    registerUserAction,
    initialState
  );
  return (
    <form
      className="text-xl flex flex-col gap-8 w-max"
      id="register-form"
      action={formAction}
    >
      <div className="flex gap-8 items-center">
        <BasicInput
          form="register-form"
          formState={state}
          label="Nombres"
          name="name"
          placeholder="Adolfo Fernando"
          type="text"
          defaultValue={state.fieldsData.name}
          required
        />
        <BasicInput
          form="register-form"
          formState={state}
          label="Apellidos"
          name="lastName"
          placeholder="Guerrero Pérez"
          type="text"
          defaultValue={state.fieldsData.lastName}
          required
        />
      </div>
      <BasicInput
        form="register-form"
        formState={state}
        label="Correo electrónico"
        name="email"
        placeholder="example@gmail.com"
        type="email"
        defaultValue={state.fieldsData.email}
        required
        hasBackendErrors
      />
      <div className="flex gap-8 items-center">
        <BasicInput
          form="register-form"
          formState={state}
          label="Contraseña"
          name="password"
          placeholder="Debe contener al menos 6 caracteres y un caracter especial"
          type="password"
          defaultValue={state.fieldsData.password}
          required
        />
        <BasicInput
          form="register-form"
          formState={state}
          label="Confirmar contraseña"
          name="confirmedPassword"
          placeholder="Debe contener al menos 6 caracteres y un caracter especial"
          type="password"
          defaultValue={state.fieldsData.confirmedPassword}
          required
        />
      </div>
      <div className="text-white flex justify-between items-center">
        <div className="flex text-base gap-2">
          <p className="text-gray-400">¿Ya tienes una cuenta?</p>
          <Link href="/login" className="underline">
            Acceder
          </Link>
        </div>
        <button
          className="bg-green-600 text-white px-4 py-2 rounded-lg font-semibold disabled:bg-gray-300"
          disabled={isPending}
        >
          Registrarse
        </button>
      </div>
    </form>
  );
};

export default RegisterForm;
