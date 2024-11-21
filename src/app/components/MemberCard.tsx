import React from "react";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

const MemberCard = ({ name, photo }: { name: string; photo: StaticImport }) => {
  return (
    <article className="bg-white drop-shadow-lg rounded-3xl p-10 w-96">
      <div className="relative w-full h-[304px]">
        <Image alt={`${name}-photo`} src={photo} fill />
      </div>
      <p className="font-semibold text-xl text-center">{name}</p>
    </article>
  );
};

export default MemberCard;
