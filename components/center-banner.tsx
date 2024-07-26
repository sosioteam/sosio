import React from "react";
import Image from "next/image";

const CenterBanner = () => {
  return (
    <div className="flex items-center justify-center bg-white text-white w-full h-[30vh] overflow-hidden ">
      <div className="flex items-center w-full p-3 md:w-[70vw] h-[20vh] rounded-none md:rounded-[5rem] justify-around bg-colorFullDiv bg-cover">
        <p className="text-3xl font-bold">Try Boon & Bliss, it’s free!</p>
        <Image
          src="/sosioimg/app-store.svg"
          alt="app-store-img"
          width={200}
          height={100}
        />
        <Image
          src="/sosioimg/play-store.svg"
          alt="play-store-img"
          width={200}
          height={100}
        />
      </div>
    </div>
  );
};

export default CenterBanner;
