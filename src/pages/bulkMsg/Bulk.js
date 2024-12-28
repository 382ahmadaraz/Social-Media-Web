import React from "react";
import Content from "../content/Content";
import bulk from "../../assests/images/bulk.png";
import OutBtn from "../../components/outlineButton/OutBtn";
import Button2 from "../../components/button2/Button2";
import { Link } from "react-router-dom";

// border-2 border-black
export default function Bulk() {
  return (
    <div className=" ">
      <div className="">
        <div className="absolute bg-black w-[100%] h-[150vh] z-10 opacity-60"></div>
        <Content />
      </div>

      <div className="absolute -bottom-28 right-20 sm:right-36 lg:right-1/3 z-20 h-[70%] lg:h-[76%] xl:h-[72%] lg:w-[35%] w-[60%] bg-white  rounded-xl p-4">
        <div className="flex items-center justify-between mb-5">
          <h2 className="md:text-2xl font-semibold">
            Unlock Bulk Message Scheduling
          </h2>
          <Link to={"/planner/content/schedule"}>
            <div className="bg-slate-300  rounded-full w-8 h-8 cursor-pointer">
              <p className="text-gray-500 font-semibold text-xl text-center  ">
                x
              </p>
            </div>
          </Link>
        </div>

        <p className="text-gray-500 text-[12px] sm:text-[16px]">
          Upgrade your plan to access Bulk Message Scheduling and schedule 100s
          of messages in advance.
        </p>

        <div className="flex items-center justify-center mt-11">
          <img src={bulk} alt="bulk" />
        </div>
        <div className="flex justify-end gap-3 mt-7 xl:mt-11">
          <Link to={"/planner/content/schedule"}>
            <OutBtn btn="Cancel" />
          </Link>
          <Link to={"/upgrade-plan/pricing"}>
            <Button2 title="Upgrade Now" />
          </Link>
        </div>
      </div>
    </div>
  );
}
