import { ReactTyped } from "react-typed";
import React from "react";
const land = () => {
  return (
    <div className="text-white max-w-[800px] mx-auto text-center mt-[-96px] h-screen w-full flex flex-col justify-center">
      <p className="text-[#00df9a] p-3">GROWING WITH DATA ANALYSIS</p>
      <h1 className="md:text-7xl sm:text-5xl text-xl font-bold md:py-6">
        Grow with data
      </h1>
      <div className="md:text-5xl sm:text-4xl font-bold text-xl flex justify-center py-4 ">
        <p className="pr-2">
          Fast,flexible financing for
        </p>
        <ReactTyped
          strings={["BTB", "BTC", "SASS"]}
          typeSpeed={120}
          backSpeed={140}
          loop
        ></ReactTyped>
      </div>
      <p className=" text-gray-500 md:text-2xl text-bold text-xl md:pl-4  ">
        Master your data analytics to increase revenue for BTB,BTC & SASS
        Platforms.
      </p>

      <button className="bg-[#00df9a] w-[200px] rounded-md my-6 mx-auto py-3 text-bl">Get Started</button>
    </div>
  );
};

export default land;
