import React from "react";
import Image from "next/image";

const FooterMenu = () => {
  return (
    <div className="flex flex-row h-full justify-center items-start mt-5 w-9/12 mx-auto">
      {/* 1st column */}
      <div className="w-1/3 text-left px-4">
        <h1 className="font-extrabold text-xl text-black mb-2">
          Gifts that fulfill dreams
        </h1>
        <p className="font-semibold text-base">
          Forget gift cards and vouchers - <br /> there is a new way
        </p>
        <p className="font-semibold text-base">
          Wedding gifts made simple, fun and memorable
        </p>
        <p className="font-semibold text-base">
          Your wish list to get money for bigger gifts and wanna-have’s
        </p>
      </div>

      {/* 2nd column */}
      <div className="w-1/3 text-left px-4">
        <h1 className="font-extrabold text-xl text-black mb-2">
          Gifts that fulfill dreams
        </h1>
        <p className="font-semibold text-base">
          Forget gift cards and vouchers - <br /> there is a new way
        </p>
        <p className="font-semibold text-base">
          Wedding gifts made simple, fun and memorable
        </p>
        <p className="font-semibold text-base">
          {" "}
          Your wish list to get money for bigger gifts and wanna-have’s
        </p>
      </div>

      {/* 3rd column */}
      <div className="w-1/3 text-left px-4">
        <h1 className="font-extrabold text-xl text-black mb-2">
          Gifts that fulfill dreams
        </h1>
        <p className="font-semibold text-base">
          Forget gift cards and vouchers - <br /> there is a new way
        </p>
        <p className="font-semibold text-base">
          Wedding gifts made simple, fun and memorable
        </p>
        <p className="font-semibold text-base">
          Your wish list to get money for bigger gifts and wanna-have’s
        </p>
      </div>
    </div>
  );
};

export default FooterMenu;
