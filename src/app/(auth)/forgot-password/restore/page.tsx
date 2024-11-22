import React from "react";
import RestorePasswordForm from "../components/RestorePasswordForm";

const RestorePasswordPage = () => {
  return (
    <div className="rounded-3xl border-2 border-white p-14 bg-gray-900 w-1/3">
      <h1 className="text-white font-black text-4xl text-center mb-10">
        Restaurar contraseña
      </h1>
      <RestorePasswordForm />
    </div>
  );
};

export default RestorePasswordPage;
