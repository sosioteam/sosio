import React from "react";
import Image from "next/image";

const WeDoCategories = () => {
  return (
    <div className="flex flex-col w-full md:w-1/2 h-auto md:h-full bg-white items-center justify-center p-4">
      <div className="flex flex-row items-center gap-5">
        <Image
          src="/sosioimg/heart.webp"
          alt="logo-img"
          className="w-1/3 h-auto md:w-auto"
          width={200}
          height={100}
        />
        <p className="text-center md:text-left">
          Something to celebrate with gifts involved? Finally, no need to limit
          yourself with those random gifts or traditional gift cards. Think big!
          Create a list of dream gifts that really matter: The next epic trip? A
          new e-bike? Or may be even a pet lama? Anything becomes possible when
          your friends chip in!
        </p>
      </div>
      <div className="flex flex-row items-center mt-4 gap-5">
        <Image
          src="/sosioimg/people-group.webp"
          alt="logo-img"
          className="w-1/3 h-auto md:w-auto"
          width={200}
          height={100}
        />
        <p className="text-center md:text-left">
          Friends, family and collegues are breaking their heads while thinking
          of a gift that matters and fits their budget. With a magic link you
          invite them to contribute into what makes you really happy. They can
          easily contribute any amount, digitally from anywhere. It is super
          easy and fun as they add video messages to make your dream gift
          personal and memorable.
        </p>
      </div>
      <div className="flex flex-row items-center mt-4 gap-5">
        <Image
          src="/sosioimg/rocket.webp"
          alt="logo-img"
          className="w-1/3 h-auto md:w-auto"
          width={200}
          height={100}
        />
        <p className="text-center md:text-left">
          Enjoy the ka-ching sound as the money contributions are streaming and
          fund your dream. Best part: you can cash it out to your bank account,
          thank your friends for their contributions and… spend this money
          anytime, anywhere. For anything! No strings attached. We mean it.
        </p>
      </div>
    </div>
  );
};

export default WeDoCategories;
