import React from "react";
import Image from "next/image";

const BannerLeft = () => {
  return (
    <div className="hidden md:flex w-full md:w-1/3 h-full bg-white flex-col justify-around items-center">
      <div className="relative md:w-80 md:top-[-7.8rem] lg:left-[-12rem] lg:top-[-7.8rem] lg:w-80 sm:left-[-6rem] sm:w-80 sm:top-[-5rem] left-[-4rem] w-60 top-[-3.8rem]">
        <Image
          src="/sosioimg/parallax-dots.svg"
          alt="dots-img"
          width={200}
          height={200}
          layout="responsive"
        />
      </div>
      <div className="relative md:w-96 md:top-[1.2rem] lg:left-[-8rem] lg:w-96 sm:left-[-6rem] sm:w-64 sm:top-[0.8rem] left-[-4rem] w-80 top-[0.6rem]">
        <Image
          src="/sosioimg/ball.svg"
          alt="balls-img"
          width={100}
          height={100}
          layout="responsive"
        />
      </div>
    </div>
  );
};

export default BannerLeft;
