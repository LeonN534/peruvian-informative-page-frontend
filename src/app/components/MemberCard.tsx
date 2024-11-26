import React from "react";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Link from "next/link";

const MemberCard = ({
  name,
  photo,
  linkUrl,
}: {
  name: string;
  photo: StaticImport;
  linkUrl: string;
}) => {
  return (
    <article className="bg-white drop-shadow-lg rounded-3xl p-10 w-96 hover:scale-105 transition-transform duration-300 relative overflow-hidden">
      <Link href={linkUrl}>
        <div className="relative w-full h-[304px]">
          <Image alt={`${name}-photo`} src={photo} fill />
        </div>
        <p className="font-semibold text-xl text-center">{name}</p>
      </Link>
    </article>
  );
};

export default MemberCard;
