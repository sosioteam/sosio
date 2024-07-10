import React from "react";
import Image from "next/image";

const WeDoText = () => {
  return (
    <div className="w-full md:w-1/2 h-auto md:h-full bg-white flex flex-col items-center justify-center text-left p-4">
      <div className="w-[calc(60.66667%-11.66667px)] items-start">
        <p className="text-gray-600 text-base mb-2">Works like a charm</p>
        <h1 className="text-black text-2xl md:text-3xl font-bold">
          A spot-on group gift in a snap to fulfill a dream
        </h1>
      </div>
    </div>
  );
};

export default WeDoText;
