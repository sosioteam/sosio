import React from "react";
import Image from "next/image";

const QuestionLeft = () => {
  return (
    <div className="hidden md:flex w-1/4 md:w-1/4 flex-col  items-center justify-center  ">
      <div className="will-change-transform transform relative md:w-80 lg:left-[-10rem] lg:w-80 sm:left-[-4rem] sm:w-80 left-[-2rem] w-60 hidden sm:block md:block lg:block animate-scroll-up-down">
        <Image
          src="/sosioimg/parallax-triangles.svg"
          alt="dots-img"
          width={200}
          height={200}
          layout="responsive"
        />
      </div>
      <div className="relative md:w-96 lg:left-[-10rem] lg:w-96 sm:left-[-8rem] sm:w-64 left-[-6rem] w-80 hidden sm:block md:block lg:block animate-scroll-up-down">
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

export default QuestionLeft;
