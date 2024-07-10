import React from "react";

import BannerLeft from "./banner-left";
import BannerCenter from "./banner-center";
import BannerRight from "./banner-right";

const Banner = () => {
  return (
    <div className="flex items-center bg-white text-black w-full h-[80vh] overflow-hidden">
      <div className="w-full md:w-2/3 h-full bg-white flex flex-col md:flex-row ">
        <BannerLeft />
        <BannerCenter />
      </div>
      <BannerRight />
    </div>
  );
};

export default Banner;
