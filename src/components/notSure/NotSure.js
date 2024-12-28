import React from "react";
import pattern from "../../assests/images/pattern.png";
import group from "../../assests/images/Mask-Group.png";
import TickMark from "../../assests/images/Group 1322.png";
import Button from "../button/Button";

// bg-orange-400 sm:bg-slate-500 md:bg-blue-500 lg:bg-pink-400 xl:bg-red-500 2xl:bg-slate-800
// border-2 border-black

export default function NotSure() {
  return (
    <div className="px-5 my-16 p-3 lg:p-7 md:text-xl lg:mt-24 lg:flex justify-evenly">
      <div className="hidden lg:block lg:-[100%] lg:w-[35%] lg:relative ">
        <img
          src={pattern}
          alt="patern img"
          className="lg:h-[70%] lg:w-[65%] lg:absolute bottom-0 left-0 lg:-z-0 "
        />
        <img
          src={group}
          alt="patern"
          className="lg:h-[85%] lg:w-[80%] lg:absolute top-0 right-0"
        />
      </div>

      <div className="md:p-8   lg:w-[50%] lg:text-xl text-gray-800 2xl:text-2xl">
        <h1 className="text-xl sm:text-3xl md:text-4xl text-black lg:text-4xl 2xl:text-5xl font-semibold">
          STILL NOT SURE WHERE TO START?
        </h1>

        <hr className=" my-4 lg:my-6 border-2 w-[40%] rounded-md border-pink-600" />

        <p className="my-4 sm:text-lg md:text-xl lg:mb-9 2xl:text-2xl">
          Share real-time insights by monitoring mentions of your brand,
          company, products, and competitors. Measure the impact of your social
          marketing campaigns through comprehensive social channel reporting.
        </p>
        <div className="my-1 sm:my-2 flex items-center lg:mt-4 ">
          <img src={TickMark} alt="tick mark" className=" " />
          <p className="ml-2 lg:ml-5">Choose the right plan</p>
        </div>
        <div className="my-1 sm:my-2 flex items-center lg:mt-4 ">
          <img src={TickMark} alt="tick mark" className=" " />
          <p className="ml-2 lg:ml-5">Start your free trial</p>
        </div>
        <div className="my-1 sm:my-2 flex items-center lg:mt-4 ">
          <img src={TickMark} alt="tick mark" className=" " />
          <p className="ml-2 lg:ml-5">Attend free classes for beginners</p>
        </div>
        <div className="my-1 sm:my-2 flex items-center lg:mt-4 ">
          <img src={TickMark} alt="tick mark" className=" " />
          <p className="ml-2 lg:ml-5">Charging Less</p>
        </div>
        <div className="text-center sm:text-start mt-4 lg:text-sm lg:mt-6">
          <Button title="SOUNDS GOOD TO ME" />
        </div>
      </div>
    </div>
  );
}
