import React from "react";
import Image from "next/image";

const QuestionRight = () => {
  return (
    <div className="hidden md:flex w-1/4 flex-col h-[145vh] items-center justify-around max-h-lg">
      <div className="will-change-transform transform relative md:w-80 lg:right-[-10rem] lg:w-80 sm:right-[-4rem] sm:w-80 right-[-2rem] w-60 hidden sm:block md:block lg:block animate-scroll-up-down">
        <Image
          src="/sosioimg/parallax-circles.svg"
          alt="dots-img"
          width={200}
          height={200}
          layout="responsive"
        />
      </div>
      <div className="relative md:w-96 lg:right-[-10rem] lg:w-96 sm:right-[-8rem] sm:w-64 riht-[-6rem] w-80 hidden sm:block md:block lg:block animate-scroll-up-down">
        <Image
          src="/sosioimg/parallax-dots.svg"
          alt="balls-img"
          width={100}
          height={100}
          layout="responsive"
        />
      </div>
    </div>
  );
};

export default QuestionRight;
