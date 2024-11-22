import React from "react";
import RegisterForm from "./components/RegisterForm";

const RegisterPage = () => {
  return (
    <div className="rounded-3xl border-2 border-white p-14 bg-gray-900 w-max">
      <h1 className="text-white font-black text-4xl text-center mb-10">
        Registrarse
      </h1>
      <RegisterForm />
    </div>
  );
};

export default RegisterPage;
