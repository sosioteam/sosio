import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div className="flex flex-col items-center bg-white text-black w-full h-[70vh] overflow-hidden">
      {/* Title and description container */}
      <div className="w-9/12 bg-white h-1/2 flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold mb-4">
          Did you know that 2 out of 5 people lie about liking a gift?
        </h1>
        <p className="text-center mx-auto px-6">
          Every year 20 billion worth of unwanted gifts clutter our houses...
          and our planet. Over 30% of gift cards that we give to each other -
          never get redeemed. As they expire or get lost in our kitchen drawers,
          merchants add over a hundred billion to their profits. Just imagine,
          how many beautiful dreams could be realized with this money instead!
          It&#39;s time for a new gifting solution that fulfills dreams.
        </p>
      </div>
      {/* Image container */}
      <div className="flex w-full justify-center gap-4 p-4">
        <Image
          src="/sosioimg/give.svg"
          alt="logo-img"
          width={200}
          height={100}
        />
        <Image
          src="/sosioimg/receive.svg"
          alt="logo-img"
          width={200}
          height={100}
        />
        <Image
          src="/sosioimg/achieve.svg"
          alt="logo-img"
          width={200}
          height={100}
        />
      </div>
    </div>
  );
};

export default About;
