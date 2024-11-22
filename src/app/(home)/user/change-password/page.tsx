import React from "react";
import ChangePasswordForm from "../components/ChangePasswordForm";

const ChangePasswordPage = () => {
  return (
    <main
      className="bg-gray-800 flex justify-center items-center"
      style={{ height: "calc(100vh - 136px)" }}
    >
      <div className="rounded-3xl border-2 border-white p-14 bg-gray-900 w-1/3">
        <h1 className="text-white font-black text-4xl text-center mb-10">
          Restaurar contraseña
        </h1>
        <ChangePasswordForm />
      </div>
    </main>
  );
};

export default ChangePasswordPage;
