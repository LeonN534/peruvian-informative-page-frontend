"use client";

import BasicInput from "@/app/components/BasicInput";
import Link from "next/link";
import React from "react";

const RegisterForm = () => {
  return (
    <form className="text-xl flex flex-col gap-8 w-max" id="register-form">
      <div className="flex gap-8 items-center">
        <BasicInput
          form="register-form"
          formState={{}}
          label="Nombres"
          name="name"
          placeholder="Adolfo Fernando"
          type="text"
        />
        <BasicInput
          form="register-form"
          formState={{}}
          label="Apellidos"
          name="last-name"
          placeholder="Guerrero Pérez"
          type="text"
        />
      </div>
      <BasicInput
        form="register-form"
        formState={{}}
        label="Correo electrónico"
        name="email"
        placeholder="example@gmail.com"
        type="email"
      />
      <div className="flex gap-8 items-center">
        <BasicInput
          form="register-form"
          formState={{}}
          label="Contraseña"
          name="password"
          placeholder="Debe contener al menos 6 caracteres y un caracter especial"
          type="password"
        />
        <BasicInput
          form="register-form"
          formState={{}}
          label="Confirmar contraseña"
          name="confirm-password"
          placeholder="Debe contener al menos 6 caracteres y un caracter especial"
          type="password"
        />
      </div>
      <div className="text-white flex justify-between items-center">
        <div className="flex text-base gap-2">
          <p className="text-gray-400">¿Ya tienes una cuenta?</p>
          <Link href="/login" className="underline">
            Acceder
          </Link>
        </div>
        <button className="bg-green-600 text-white px-4 py-2 rounded-lg font-semibold">
          Registrarse
        </button>
      </div>
    </form>
  );
};

export default RegisterForm;
