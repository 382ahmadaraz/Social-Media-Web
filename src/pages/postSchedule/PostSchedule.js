import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Hero from "../../components/heroHeader/Hero";
import NavContent from "../../components/navContent/NavContent";
import Plan from "../../components/plan/Plan";
import SubHeading from "../../components/subHeading/SubHeading";
import noRecord from "../../assests/images/noRecord.png";

export default function PostSchedule() {
  return (
    <div>
      <div className="md:flex flex-row ">
        <Sidebar />
        <div className="w-[100%]">
          <Hero
            title="Planner"
            descryption="Get all details about your planned posts."
          />
          <div className="h-[80vh] md:h-[90vh] m-3 lg:m-7 rounded-xl shadow-xl ">
            <Plan />
            <NavContent />
            <div className="flex flex-col items-center text-center p-9 md:p-20">
              <div>
                <img src={noRecord} alt="no-record" />
              </div>

              <SubHeading heading="No Result Found" />
            </div>
          </div>
        </div>
      </div>
      <p className="text-gray-400 w-[100%] px-5 text-center mt-4 mb-2">
        Social Medias Developed by{" "}
        <span className="text-pink-700 cursor-pointer">Ahmad Raza</span> &copy;
        2022
      </p>
    </div>
  );
}
