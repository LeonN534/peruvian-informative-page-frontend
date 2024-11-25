"use client";

import React from "react";
import { CommentaryVotedByUser } from "../interfaces/commentary-voted-by-user.interface";
import { ArrowDown, ArrowUp } from "lucide-react";
import { voteCommentary } from "../services/commentaries.service";
import { useToastStore } from "../hooks/useToastSweet";

const CommentaryVoter = ({
  commentaryId,
  commentariesVotedByUser,
}: {
  commentaryId: number;
  commentariesVotedByUser: CommentaryVotedByUser[];
}) => {
  const [show, { setState }] = useToastStore();

  const totalpositiveVotes = commentariesVotedByUser.filter(
    (comment) => comment.vote == "up"
  ).length;
  const totalNegativeVotes = commentariesVotedByUser.filter(
    (comment) => comment.vote == "down"
  ).length;
  const totalVotes = totalpositiveVotes - totalNegativeVotes;

  const userVote = commentariesVotedByUser.find(
    (comment) => comment.commentaryId === commentaryId
  );

  const hasVotedUp = userVote?.vote === "up";
  const hasVotedDown = userVote?.vote === "down";

  const handleVote = async (vote: "up" | "down") => {
    const response = await voteCommentary(commentaryId, vote);
    console.log(response);
    if (response.status === 401) {
      setState(true);
      return;
    }
  };

  return (
    <div className="flex flex-col gap-10 px-4 items-center">
      <button
        className={`text-white rounded-md px-4 py-2 ${
          hasVotedUp && "bg-green-500"
        }`}
        onClick={() => handleVote("up")}
      >
        <ArrowUp className="w-6 h-6" />
      </button>
      <p className="text-lg font-bold">{totalVotes}</p>
      <button
        className={`text-white rounded-md px-4 py-2 ${
          hasVotedDown && "bg-red-500"
        }`}
        onClick={() => handleVote("down")}
      >
        <ArrowDown className="w-6 h-6" />
      </button>
    </div>
  );
};

export default CommentaryVoter;
