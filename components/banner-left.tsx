import React from "react";
import Image from "next/image";
import "./banner-left.css";

const BannerLeft = () => {
  return (
    <div className="hidden md:flex w-full md:w-1/3 h-full bg-white flex-col justify-around items-center">
      <Image
        src="/sosioimg/parallax-dots.svg"
        className="parallax-img"
        alt="dots-img"
        width={200}
        height={200}
      />
      <Image
        src="/sosioimg/ball.svg"
        className="balls-img"
        alt="balls-img"
        width={100}
        height={100}
      />
    </div>
  );
};

export default BannerLeft;
