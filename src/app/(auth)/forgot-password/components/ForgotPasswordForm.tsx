"use client";

import React, { useActionState } from "react";
import { forgotPasswordAction } from "@/app/(auth)/actions/auth.action";
import BasicInput from "@/app/components/BasicInput";
import InformationalModal from "./InformationalModal";

const initialState = {
  data: null,
  apiErrors: null,
  zodErrors: null,
  message: null,
  fieldsData: {
    email: "",
  },
  modal: false,
};

const ForgotPasswordForm = () => {
  const [state, formAction, isPending] = useActionState(
    forgotPasswordAction,
    initialState
  );

  return (
    <>
      {state.modal && (
        <InformationalModal
          title="Email enviado correctamente"
          content="El email fue enviado correctamente. Revisar la carpeta de Spam en caso
          sea necesario."
        />
      )}
      <form
        className="text-xl flex flex-col gap-8"
        id="login-form"
        action={formAction}
      >
        <h2 className="text-white text-sm text-center md:text-lg">
          Se le enviará un correo con pasos a seguir para restaurar su
          contraseña.
        </h2>
        <BasicInput
          form="login-form"
          formState={state}
          label=""
          name="email"
          placeholder="example@gmail.com"
          type="email"
          defaultValue={state.fieldsData.email}
          required
          hasBackendErrors
        />
        <div className="text-white flex justify-center items-center">
          <button
            className="bg-green-600 text-white px-6 py-2 rounded-lg font-semibold disabled:bg-gray-300"
            disabled={isPending}
          >
            Enviar
          </button>
        </div>
      </form>
    </>
  );
};

export default ForgotPasswordForm;
