"use client";

import React from "react";
import { useModalStore } from "../hooks/useModalSweet";
import { deleteCommentary } from "../services/commentaries.service";

const ConfirmationModal = () => {
  const [state, { setState }] = useModalStore();
  const deletion = async () => {
    const res = await deleteCommentary(state.commentId);
    console.log("res", res);
    if (res.success) setState({ commentId: 0, state: false });
  };

  return (
    <div
      className={`bg-black bg-opacity-50 z-30 w-screen h-screen fixed top-0 left-0 overflow-auto flex-col justify-center ${
        state.active ? "flex" : "hidden"
      }`}
    >
      <div className="bg-white mx-auto w-5/6 rounded-[20px] shadow-modals flex flex-col md:max-w-xl justify-center items-center gap-8 p-10">
        <h2 className="text-gray-800 text-2xl text-center font-semibold">
          ¿Estás seguro de querer borrar este comentario?
        </h2>
        <p className="text-gray-800 text-lg font-medium text-center w-5/6 mx-auto">
          Esta acción no se puede revertir
        </p>
        <div className="flex items-center gap-5">
          <button
            className="px-10 py-2 rounded-lg font-semibold block"
            onClick={() => setState({ commentId: 0, state: false })}
          >
            Cancelar
          </button>
          <button
            className="bg-red-700 text-white px-10 py-2 rounded-lg font-semibold block self-center"
            onClick={deletion}
          >
            Borrar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
