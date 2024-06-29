import React from "react";

const Banner = () => {
  return (
    <div className="flex items-center bg-white text-black w-full h-[80vh]">
      {/* Left Area (2/3 of the width) */}
      <div className="w-2/3 h-full bg-white">{/* !Left Content go here */}</div>

      {/* Right Area (1/3 of the width) */}
      <div className="w-1/3 h-full bg-teal-400">
        {/* !Right Content go here */}
      </div>
    </div>
  );
};

export default Banner;
