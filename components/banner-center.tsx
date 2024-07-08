import React from "react";
import Image from "next/image";

const BannerCenter = () => {
  return (
    <div className="w-full md:w-1/3 h-full bg-white flex flex-col justify-between md:justify-center items-center md:order-2">
      <div className="h-auto logo flex justify-center items-center md:h-1/3 m-auto mr-0">
        <Image
          src="/sosioimg/logo.svg"
          alt="logo-img"
          width={200}
          height={100}
        />
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8 over">
        <div className="w-full md:w-1/3 h-full bg-white flex flex-col justify-center items-center">
          <div className="flex flex-col items-center mb-4">
            <p className="bg-pink-400 text-white px-2 py-1 rounded-r-lg mb-2">
              Easy as a gift-card
            </p>
            <p className="bg-pink-400 text-white px-2 py-1 rounded-r-lg">
              Fun as a real gift
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <p className="text-gray-700">Collects money from more friends</p>
            <p className="text-gray-700">Can be spent anywhere as cash</p>
          </div>
        </div>
        <div className="bg-phone bg-bottom bg-no-repeat bg-contain h-450px w-500px relative z-1 flex justify-center items-end">
          <div className="bg-phoneScreen bg-center bg-no-repeat bg-cover h-89p3 w-24p z-2"></div>
        </div>
      </div>
    </div>
  );
};

export default BannerCenter;
