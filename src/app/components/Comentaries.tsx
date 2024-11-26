import React from "react";
import { Topics } from "../enums/topics.enum";
import { getComentariesByTopic } from "../services/commentaries.service";
import { Commentary } from "../interfaces/commentary.interface";
import CommentaryCard from "./CommentaryCard";
import CommentaryForm from "./CommentaryForm";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

const Comentaries = async ({
  topic,
  page,
}: {
  topic: Topics;
  page: number;
}) => {
  const resData = await getComentariesByTopic(topic, 10 * (page - 1));

  if (!resData.success || resData.data.length === 0)
    return (
      <div className="bg-slate-900 text-4xl font-bold text-red-600 p-10 text-center">
        Sin comentarios que mostrar
        <div className="flex items-center justify-center gap-10">
          <Link href={`/${topic}?page=${page - 1}`}>
            <ArrowLeft className="w-10 h-10 mt-5 text-white" />
          </Link>
          <Link href={`/${topic}?page=${page + 1}`}>
            <ArrowRight className="w-10 h-10 mt-5 text-white" />
          </Link>
        </div>
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
      <div className="flex items-center justify-center gap-10">
        <Link href={`/${topic}?page=${page - 1}`}>
          <ArrowLeft className="w-10 h-10 mt-5" />
        </Link>
        <Link href={`/${topic}?page=${page + 1}`}>
          <ArrowRight className="w-10 h-10 mt-5" />
        </Link>
      </div>
      <CommentaryForm topic={topic} />
    </div>
  );
};

export default Comentaries;
