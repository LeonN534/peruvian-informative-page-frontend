"use client";

import React, { useActionState } from "react";
import { changePasswordAction } from "@/app/(auth)/actions/auth.action";
import InformationalModal from "@/app/(auth)/forgot-password/components/InformationalModal";
import BasicInput from "@/app/components/BasicInput";

const initialState = {
  data: null,
  apiErrors: null,
  zodErrors: null,
  message: null,
  modal: false,
  fieldsData: {
    currentPassword: "",
    newPassword: "",
    confirmedPassword: "",
  },
};

const ChangePasswordForm = () => {
  const [state, formAction, isPending] = useActionState(
    changePasswordAction,
    initialState
  );

  return (
    <>
      {state.modal && (
        <InformationalModal
          title="Contraseña cambiada exitosamente"
          content="La contraseña fue cambiada con éxito. Por favor, vuelva a iniciar
          sesión."
        />
      )}
      <form
        action={formAction}
        id="change-password-form"
        className="text-xl flex flex-col gap-8"
      >
        <BasicInput
          form="change-password-form"
          formState={state}
          label="Contraseña actual"
          name="currentPassword"
          placeholder="Contraseña actual"
          type="password"
          defaultValue={state.fieldsData.newPassword}
          required
          hasBackendErrors
        />
        <BasicInput
          form="change-password-form"
          formState={state}
          label="Nueva contraseña"
          name="newPassword"
          placeholder="Nueva contraseña"
          type="password"
          defaultValue={state.fieldsData.newPassword}
          required
        />
        <BasicInput
          form="change-password-form"
          formState={state}
          label="Confirmar contraseña"
          name="confirmedPassword"
          placeholder="confirmar contraseña"
          type="password"
          defaultValue={state.fieldsData.confirmedPassword}
          required
        />
        <button
          className="bg-green-600 text-white px-4 py-2 rounded-lg font-semibold disabled:bg-gray-300 block self-center"
          disabled={isPending}
        >
          Cambiar contraseña
        </button>
      </form>
    </>
  );
};

export default ChangePasswordForm;
