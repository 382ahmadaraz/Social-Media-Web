import React from "react";
import logo from "../../assests/images/logo.png";
import { NavLink } from "react-router-dom";
import { TfiMenu } from "react-icons/tfi";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  //    bg-orange-400 sm:bg-slate-500 md:bg-blue-500 lg:bg-pink-400 xl:bg-red-500 2xl:bg-slate-800
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div className="h-[90px] px-5 sm:h-[100px] lg:h-[120px] 2xl:h-[120px] lg:text-[15px] 2xl:text-md xl:px-0 flex justify-between  xl:justify-evenly items-center ">
      <div className="h-[100%] w-[45%] lg:w-[20%]">
        <Link to={"/"}>
          <img src={logo} alt={logo} className="h-[100%] cursor-pointer" />
        </Link>
      </div>

      <div className="lg:hidden p-2 sm:p-3 cursor-pointer rounded-full bg-gradient-to-b from-Purple to-Pink text-white ">
        <TfiMenu
          className="h-[25px] w-[25px] sm:h-[30px] sm:w-[30px] "
          onClick={handleToggle}
        />
      </div>

      {/* toggle menu  */}
      {toggle && (
        <div className="bg-red-400 absolute rounded-2xl top-20 right-2 z-20">
          <ul className="bg-white shadow-2xl border rounded-xl p-6 flex flex-col items-cente font-semibold">
            <Link to={"/"}>
              {" "}
              <li className="hover:bg-gradient-to-b from-Purple to-Pink p-2 hover:rounded-sm hover:text-white">
                WHY SOCIAL MEDIAS{" "}
              </li>
            </Link>
            <Link to={"/whatWeDo"}>
              <li className="hover:bg-gradient-to-b from-Purple to-Pink p-2 hover:rounded-sm hover:text-white">
                WHAT WE DO
              </li>
            </Link>
            <Link to={"/pricing"}>
              <li className="hover:bg-gradient-to-b from-Purple to-Pink p-2 hover:rounded-sm hover:text-white">
                PRICING
              </li>
            </Link>
            <Link to={"/faqs"}>
              <li className="hover:bg-gradient-to-b from-Purple to-Pink p-2 hover:rounded-sm hover:text-white">
                FAQS
              </li>
            </Link>
            <Link to={"/login"}>
              <li className="hover:bg-gradient-to-b from-Purple to-Pink text-pink-500 p-2 hover:rounded-sm hover:text-white">
                Login
              </li>
            </Link>
          </ul>
        </div>
      )}

      {/* nav-elements */}
      <div className="hidden lg:block lg:py-5 h-[100%] lg:w-[75%] xl:w-[65%] xl:py-4 2xl:py-5 2xl:w-[55%] ">
        <ul className="flex items-center justify-between [&>*]:cursor-pointer xl:[&>*]:p-2 xl:[&>*]:px-4 lg:font-semibold 2xl:text-lg">
         
          {/* why Social Media  */}
          <li className="hover:bg-gradient-to-b from-Purple to-Pink hover:rounded-sm hover:text-white ">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-pink-500 font-bold p-3"
                  : "text-gray-400 hover:text-white p-3"
              }
            >
              WHY SOCIAL MEDIAS
            </NavLink>
          </li>

          {/* WHAT WE DO */}
          <li className="hover:bg-gradient-to-b from-Purple to-Pink hover:rounded-sm hover:text-white">
            <NavLink
              to="/WhatWeDo"
              className={({ isActive }) =>
                isActive
                  ? "text-pink-500 font-bold p-3"
                  : "text-gray-400 hover:text-white p-3"
              }
            >
              WHAT WE DO
            </NavLink>
          </li>

          {/* PRICING */}
          <li className="hover:bg-gradient-to-b from-Purple to-Pink hover:rounded-sm hover:text-white">
            <NavLink
              to="/pricing"
              className={({ isActive }) =>
                isActive
                  ? "text-pink-500 font-bold p-3"
                  : "text-gray-400 hover:text-white p-3"
              }
            >
              PRICING
            </NavLink>
          </li>

          {/* FAQs */}
          <li className="hover:bg-gradient-to-b from-Purple to-Pink  hover:rounded-sm hover:text-white">
            <NavLink
              to="/faqs"
              className={({ isActive }) =>
                isActive
                  ? "text-pink-500 font-bold p-3"
                  : "text-gray-400 hover:text-white p-3"
              }
            >
              FAQs
            </NavLink>
          </li>

          {/* LOGIN */}
          <li className="hover:bg-gradient-to-b from-Purple to-Pink  hover:rounded-sm hover:text-white">
            <NavLink
              to="/login"
              className={({ isActive }) =>
                isActive
                  ? "text-pink-500 font-bold p-3"
                  : "text-gray-400 hover:text-white p-3"
              }
            >
              LOGIN
            </NavLink>
          </li>

          {/* GET STARTED button  */}
          <li className=" ">
            <div>
              <Link to={"/signup"}>
                {" "}
                <button className="p-1 px-2 text-sm sm:p-3 sm:px-5 font-semibold sm:text-md lg:text-md 2xl:text-lg bg-gradient-to-b from-Purple to-Pink rounded-md text-white ">
                  GET STARTED
                </button>
              </Link>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
