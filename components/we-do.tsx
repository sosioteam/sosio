import React from "react";
import Image from "next/image";
import WeDoText from "./we-do-text";
import WeDoCategories from "./we-do.categories";

const WeDo = () => {
  return (
    <div className="flex flex-col md:flex-row items-center bg-white text-black w-full h-auto md:h-[60vh] overflow-hidden">
      <WeDoText></WeDoText>
      <WeDoCategories></WeDoCategories>
    </div>
  );
};

export default WeDo;
