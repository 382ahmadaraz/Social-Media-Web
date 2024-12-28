import React from "react";
import logo from "../../assests/images/logo.png";
import { NavLink } from "react-router-dom";
import { TfiMenu } from "react-icons/tfi";
import { useState } from "react";
import { Link } from "react-router-dom";
import profile from "../../assests/images/profile.png";

export default function Navbar(props) {
  //    bg-orange-400 sm:bg-slate-500 md:bg-blue-500 lg:bg-pink-400 xl:bg-red-500 2xl:bg-slate-800
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div className=" ">
      <div className="h-[90px] px-5 sm:h-[100px] lg:h-[120px] 2xl:h-[120px] lg:text-[15px] 2xl:text-md xl:px-0 flex justify-around  xl:justify-evenly items-center ">
        <div className="  h-[100%] w-[45%] lg:w-[20%]">
          <Link to={"/dashboard"}>
            <img src={logo} alt={logo} className="h-[100%] cursor-pointer" />
          </Link>
        </div>

        <div className="lg:hidden p-2 sm:p-3 cursor-pointer rounded-full bg-gradient-to-b from-Purple to-Pink text-white ">
          <TfiMenu
            className=" h-[25px] w-[25px] sm:h-[30px] sm:w-[30px] "
            onClick={handleToggle}
          />
        </div>
        {/* toggle menu  */}
        {toggle && (
          <div className="bg-red-400 absolute rounded-2xl top-20 right-2">
            <ul className="bg-white shadow-2xl border rounded-xl p-6 flex flex-col items-cente font-semibold">
              <li className="hover:bg-gradient-to-b from-Purple to-Pink p-2 hover:rounded-sm hover:text-white">
                <Link to={"/dashboard"}>Dashboard</Link>{" "}
              </li>
              <li className="hover:bg-gradient-to-b from-Purple to-Pink text-pink-500 p-2 hover:rounded-sm hover:text-white">
                <Link to={"/login"}>Logout</Link>{" "}
              </li>
            </ul>
          </div>
        )}

        {/* nav-elements */}
        <div className=" hidden lg:block lg:py-5 h-[100%] lg:w-[75%] xl:w-[75%] xl:py-4 2xl:py-5 2xl:w-[55%] ">
          <ul className="flex items-center justify-end gap-5  [&>*]:cursor-pointer xl:[&>*]:p-2 lg:font-semibold 2xl:text-lg">
            {/* Dashboard */}
            <li className="hover:bg-gradient-to-b from-Purple to-Pink hover:rounded-sm hover:text-white ">
              <NavLink
                to="/dashboard"
                className={({ isActive }) =>
                  isActive
                    ? "text-pink-500 font-bold p-3"
                    : "text-gray-400 p-3 hover:text-white"
                }
              >
                DASHBOARD
              </NavLink>
            </li>

            {/* LOGOUT */}
            <li className="hover:bg-gradient-to-b from-Purple to-Pink p-2 hover:rounded-sm hover:text-white">
              <NavLink
                to="/login"
                className={
                  ({ isActive }) =>
                    isActive
                      ? "text-pink-500 font-bold p-3"  
                      : "text-gray-400 hover:text-white p-3"  
                }
              >
                LOGOUT
              </NavLink>
            </li>
            <li className=" ">
              <div className="flex items-center cursor-pointer p-2 px-3 gap-4   ">
                <div className="">
                  <img src={profile} alt="profile" className="h-[40px]" />
                </div>
                <div className="text-[13px]">
                  <h1 className="font-bold">Ahmad Raza</h1>
                  <p className="text-gray-400">User Account</p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
