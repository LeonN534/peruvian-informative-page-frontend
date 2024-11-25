import React from "react";
import { Commentary } from "../interfaces/commentary.interface";
import CommentaryVoter from "./CommentaryVoter";
import { format } from "date-fns-tz";

const CommentaryCard = ({ commentary }: { commentary: Commentary }) => {
  const publishDate = new Date(commentary.creationDate);

  const peruTimeZone = "America/Lima";
  const formattedDate = format(publishDate, "yyyy-MM-dd HH:mm", {
    timeZone: peruTimeZone,
  });

  return (
    <article className="flex items-center">
      <CommentaryVoter
        commentaryId={commentary.id}
        commentariesVotedByUser={commentary.commentariesVotedByUsers}
      />
      <div className="flex flex-col gap-3 w-full">
        <p className="text-lg font-semibold">{commentary.user.fullName}</p>
        <div className="border-white border-2 p-4 rounded-md text-sm h-[200px] overflow-y-auto">
          {commentary.content}
        </div>

        <div>
          <p className="text-end">Publicado el {formattedDate}</p>
        </div>
      </div>
    </article>
  );
};

export default CommentaryCard;
