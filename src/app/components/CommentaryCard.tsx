import React from "react";
import { Commentary } from "../interfaces/commentary.interface";
import CommentaryVoter from "./CommentaryVoter";

const CommentaryCard = ({ commentary }: { commentary: Commentary }) => {
  return (
    <article className="flex items-center">
      <CommentaryVoter
        commentaryId={commentary.id}
        commentariesVotedByUser={commentary.commentariesVotedByUsers}
      />
      <div className="flex flex-col gap-3 w-full">
        <p className="text-lg font-semibold">{commentary.user.fullName}</p>
        <div
          className="border-white border-2 p-4 rounded-md text-sm h-[200px] overflow-y-auto"
          dangerouslySetInnerHTML={{
            __html: commentary.content,
          }}
        />
        <div>
          <p className="text-end">
            Publicado el {commentary.creationDate.toString()}
          </p>
        </div>
      </div>
    </article>
  );
};

export default CommentaryCard;
