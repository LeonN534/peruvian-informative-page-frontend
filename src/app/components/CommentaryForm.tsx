"use client";

import React, { useActionState } from "react";
import { Topics } from "../enums/topics.enum";
import { publishCommentAction } from "../actions/commentaries.action";
import { useUserSessionStore } from "../hooks/useUserSessionSweet";
import ValidationErrors from "./ValidationErrors";

const initialState = {
  zodErrors: null,
  message: null,
  apiErrors: null,
  fieldsData: {
    commentary: "",
  },
};

const CommentaryForm = ({ topic }: { topic: Topics }) => {
  const [userData] = useUserSessionStore();

  const [state, formAction, isPending] = useActionState(
    publishCommentAction.bind(null, topic, userData.id),
    initialState
  );

  if (!userData.fullName)
    return (
      <div className="text-red-500 font-semibold text-2xl">
        Necesitas iniciar sesión para poder comentar.
      </div>
    );

  return (
    <div className="flex flex-col gap-10">
      <h3 className="text-lg font-semibold">Cuéntanos tu opinión</h3>
      <form
        id="commentary-form"
        className="relative w-full"
        action={formAction}
      >
        <textarea
          className="rounded-2xl bg-slate-700 p-5 overflow-auto w-full h-[200px] resize-none"
          defaultValue={state?.fieldsData.commentary}
          id="comment"
          name="comment"
          required
        />
        <button
          type="submit"
          className="bg-green-500 text-white py-2 px-4 rounded-md mt-2 font-semibold ml-auto mr-5 block disabled:bg-gray-300"
          disabled={isPending}
        >
          Publicar
        </button>
        <ValidationErrors
          error={state.zodErrors?.commentary}
          className="-translate-y-full"
        />
      </form>
    </div>
  );
};

export default CommentaryForm;
