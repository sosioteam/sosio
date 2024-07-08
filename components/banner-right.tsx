import React from "react";
import Image from "next/image";
import "./banner-right.css";

const BannerRight = () => {
  return (
    <div className="hidden md:flex w-1/3 h-full bg-teal-400 flex-col justify-center items-center text-center p-4">
      <p className="text-white text-lg mb-6 description-text">
        Finally. Revolutionary way to give and receive spot-on gifts.
      </p>
      <p className="text-white text-lg mb-6 description-text">
        Gifts that fulfill dreams.
      </p>
      <div className="flex flex-col space-y-4">
        <a
          href="#"
          className="bg-black text-white px-4 py-2 rounded flex items-center justify-center space-x-2"
        >
          <Image
            src="/sosioimg/app-store.svg"
            alt="app-store-img"
            width={200}
            height={100}
          />
        </a>
        <a
          href="#"
          className="bg-black text-white px-4 py-2 rounded flex items-center justify-center space-x-2"
        >
          <Image
            src="/sosioimg/play-store.svg"
            alt="play-store-img"
            width={200}
            height={100}
          />
        </a>
      </div>
    </div>
  );
};

export default BannerRight;
