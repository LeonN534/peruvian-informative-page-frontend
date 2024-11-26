"use client";

import React, { useState } from "react";
import { Commentary } from "../interfaces/commentary.interface";
import CommentaryVoter from "./CommentaryVoter";
import { format } from "date-fns-tz";
import { Check, Pencil, Trash, X } from "lucide-react";
import { editCommentary } from "../services/commentaries.service";
import { useUserSessionStore } from "../hooks/useUserSessionSweet";
import { useModalStore } from "../hooks/useModalSweet";

const CommentaryCard = ({ commentary }: { commentary: Commentary }) => {
  const [user] = useUserSessionStore();

  const [isEditing, setIsEditing] = useState(false);
  const [content, setContent] = useState(commentary.content);

  const [error, setError] = useState("");

  const publishDate = new Date(commentary.creationDate);

  const peruTimeZone = "America/Lima";
  const formattedDate = format(publishDate, "yyyy-MM-dd HH:mm", {
    timeZone: peruTimeZone,
  });

  const [, { setState }] = useModalStore();

  const handleDelete = async () => {
    setState({ commentId: commentary.id, state: true });
    // const res = await deleteCommentary(commentary.id);
  };

  const handleEdit = async () => {
    if (!isEditing) {
      return setIsEditing(true);
    }

    const res = await editCommentary(commentary.id, content);
    if (res.error) return setError(res.message?.[0] ?? "An error occurred");

    setIsEditing(false);
  };

  return (
    <article className="flex items-center">
      <CommentaryVoter
        commentaryId={commentary.id}
        commentariesVotedByUser={commentary.commentariesVotedByUsers}
      />
      <div className="flex flex-col gap-3 w-full relative">
        <p className="text-lg font-semibold">{commentary.user.fullName}</p>
        <textarea
          className={`border-white border-2 p-4 rounded-md max-w-[1412px] text-sm h-[200px] overflow-y-auto ${
            isEditing ? "bg-slate-700" : "bg-slate-800"
          }`}
          disabled={!isEditing}
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        {error && (
          <div
            className={`text-red-400 text-sm absolute medium:font-normal medium:text-lg top-full -translate-y-full`}
          >
            {error}
          </div>
        )}
        <div className="max-w-[1412px]">
          <p className="text-end">Publicado el {formattedDate}</p>
        </div>
      </div>
      {user.id === commentary.user.id && (
        <div className="flex flex-col gap-4 px-2 w-[78px]">
          <div className="flex gap-2">
            <button onClick={handleEdit}>
              {isEditing ? (
                <Check className="w-6 h-6" />
              ) : (
                <Pencil className="w-6 h-6" />
              )}
            </button>
            {isEditing && (
              <button
                onClick={() => {
                  setError("");
                  setContent(commentary.content);
                  setIsEditing(false);
                }}
              >
                <X className="w-6 h-6" />
              </button>
            )}
          </div>
          <button onClick={handleDelete}>
            <Trash className="w-6 h-6" />
          </button>
        </div>
      )}
    </article>
  );
};

export default CommentaryCard;
