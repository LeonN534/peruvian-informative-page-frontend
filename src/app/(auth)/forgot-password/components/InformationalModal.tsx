import React from "react";
import Link from "next/link";

const InformationalModal = ({
  title,
  content,
}: {
  title: string;
  content: string;
}) => {
  return (
    <div className="bg-black bg-opacity-50 z-30 w-screen h-screen fixed top-0 left-0 overflow-auto flex flex-col justify-center">
      <div className="bg-white mx-auto w-5/6 rounded-[20px] shadow-modals flex flex-col md:max-w-xl justify-center items-center gap-8 p-10">
        <h2 className="text-gray-800 text-2xl text-center font-semibold">
          {title}
        </h2>
        <p className="text-gray-800 text-lg font-medium text-center w-5/6 mx-auto">
          {content}
        </p>
        <Link
          href={"/login"}
          className="bg-slate-900 text-white px-10 py-2 rounded-lg font-semibold block self-center"
        >
          Ok
        </Link>
      </div>
    </div>
  );
};

export default InformationalModal;