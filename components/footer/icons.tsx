import React from "react";
import Image from "next/image";

const Icons = () => {
  return (
    <div className="flex h-full items-center max-w-96 mb-5 w-full justify-between md:justify-around lg:justify-center gap-10">
      <Image
        src="/sosioimg/e-mail.svg"
        alt="e-mail icon"
        width={100}
        height={50}
        className="mx-auto mt-10"
      />
      <Image
        src="/sosioimg/facebook.svg"
        alt="facebook icon"
        width={100}
        height={50}
        className="mx-auto mt-10"
      />
      <Image
        src="/sosioimg/instagram.svg"
        alt="instagram icon"
        width={100}
        height={50}
        className="mx-auto mt-10"
      />
      <Image
        src="/sosioimg/youtube.svg"
        alt="youtube icon"
        width={100}
        height={50}
        className="mx-auto mt-10"
      />
      <Image
        src="/sosioimg/linkedin.svg"
        alt="linkedin icon"
        width={100}
        height={50}
        className="mx-auto mt-10"
      />
    </div>
  );
};

export default Icons;
