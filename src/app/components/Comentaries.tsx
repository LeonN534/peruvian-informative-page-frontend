import React from "react";
import { Topics } from "../enums/topics.enum";
import { getComentariesByTopic } from "../services/commentaries.service";
import { Commentary } from "../interfaces/commentary.interface";
import CommentaryCard from "./CommentaryCard";

const Comentaries = async ({
  topic,
  page,
}: {
  topic: Topics;
  page: number;
}) => {
  const resData = await getComentariesByTopic(topic, 10 * (page - 1));

  console.log("resData", resData);
  if (!resData.success)
    return (
      <div className="bg-slate-900 text-4xl font-bold text-red-600 p-10">
        Error on comments
      </div>
    );

  const comments: Commentary[] = resData.data;

  return (
    <div className="bg-slate-900 text-white px-40 py-10">
      <h2 className="text-3xl font-bold">Comentarios</h2>
      <div className="mt-10 flex flex-col gap-5">
        {comments.map((comment) => (
          <CommentaryCard key={comment.id} commentary={comment} />
        ))}
      </div>
    </div>
  );
};

export default Comentaries;
