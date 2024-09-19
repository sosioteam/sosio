import React from "react";
import Image from "next/image";
import FooterMenu from "./footer-menu";
import Icons from "./icons";

const Footer = () => {
  return (
    <div className="flex w-full h-full flex-col overflow-hidden items-center justify-center mb-5">
      <Image
        src="/sosioimg/logo.svg"
        alt="logo-img"
        width={300}
        height={100}
        className="mx-auto mt-10"
      />
      <p className="mt-5 text-4xl font-black text-slate-700">
        You first gift in mind
      </p>
      <Icons />
      <FooterMenu />
      <p className="font-semibold text-base mt-3">@Designed by Sosio</p>
    </div>
  );
};

export default Footer;
