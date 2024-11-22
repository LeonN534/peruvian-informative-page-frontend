"use client";

import BasicInput from "@/app/components/BasicInput";
import React, { useActionState } from "react";
import { restorePasswordAction } from "../../actions/auth.action";
import { useSearchParams } from "next/navigation";
import InformationalModal from "./InformationalModal";

const initialState = {
  zodErrors: null,
  message: null,
  apiErrors: null,
  fieldsData: {
    newPassword: "",
    confirmedPassword: "",
  },
};

const RestorePasswordForm = () => {
  const searchParams = useSearchParams();
  const token = searchParams.get("token") || "";

  const [state, formAction, isPending] = useActionState(
    restorePasswordAction.bind(null, token),
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
        className="text-xl flex flex-col gap-8"
        id="restore-password-form"
        action={formAction}
      >
        <BasicInput
          form="restore-password-form"
          formState={state}
          label="Nueva contraseña"
          name="newPassword"
          placeholder="Contraseña"
          type="password"
          defaultValue={state.fieldsData.newPassword}
          required
          hasBackendErrors
        />
        <BasicInput
          form="restore-password-form"
          formState={state}
          label="Confirmar contraseña"
          name="confirmedPassword"
          placeholder="Contraseña"
          type="password"
          defaultValue={state.fieldsData.confirmedPassword}
          required
        />
        <button
          className="bg-green-600 text-white px-4 py-2 rounded-lg font-semibold disabled:bg-gray-300 block self-center"
          disabled={isPending}
        >
          Restaurar contraseña
        </button>
      </form>
    </>
  );
};

export default RestorePasswordForm;
