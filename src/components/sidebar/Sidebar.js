import { NavLink, Link } from "react-router-dom";
import logo from "../../assests/images/logo.png";
import home from "../../assests/sidebar/home.png";
import create from "../../assests/sidebar/create.png";
import inspiration from "../../assests/sidebar/inspiration.png";
import stream from "../../assests/sidebar/stream.png";
import planner from "../../assests/sidebar/planner.png";
import adverties from "../../assests/sidebar/create.png";
import analytics from "../../assests/sidebar/analytics.png";
import profile from "../../assests/sidebar/profile.png";
import upgrade from "../../assests/sidebar/upgrade.png";
import logout from "../../assests/sidebar/logout.png";
import { useState } from "react";
import { TfiLayoutGrid4Alt } from "react-icons/tfi";
import search from "../../assests/images/search.png";
import bell from "../../assests/images/bell.png";
import profileMen from "../../assests/images/profile.png";

// border-2 border-black
export default function Sidebar() {
  const [toggle, setToggle] = useState(false);
  const [toggleBell, setToggleBell] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };
  const handleToggleBell = () => {
    setToggleBell(!toggleBell);
  };

  return (
    <div className="w-[100%] h-[15vh] md:w-[25%] md:h-[100vh] md:px-7 border-r-gray-200 flex flex-col items-center ">
      <div className="flex items-center justify-evenly w-full h-full md:w-fit md:h-[100px] ">
        <div className="flex items-center w-[40%] md:w-[100%]">
          <TfiLayoutGrid4Alt
            className="md:hidden h-[25px] w-[225px] sm:w-[130px] "
            onClick={handleToggle}
          />
          <Link to={"/dashboard"}>
            <img className=" " src={logo} alt="logo" />
          </Link>
        </div>

        {/* profile part  */}
        <div className="md:hidden w-[70%] flex items-center justify-evenly gap-4 sm:w-[50%] md:w-[70%]">
          <div className=" border flex items-center gap-2 w-[40%] rounded-lg p-1 text-[14px]  ">
            <img src={search} alt="profile" className=" h-[16px] w-[16px]" />
            <input type="text" className="outline-none w-[80%]" />
          </div>

          <div className=" w-[50%] cursor-pointer flex items-center justify-evenly">
            <div>
              <p className="relative z-10 left-4 top-3 bottom-2 bg-red-500 rounded-full h-[14px] w-[14px] text-[10px] text-center text-white">
                1
              </p>
              <img
                src={bell}
                alt="profile"
                className="xl:h-[24px]"
                onClick={handleToggleBell}
              />
            </div>

            {/* bell Notifycation */}
            {toggleBell && (
              <div className="absolute rounded-2xl top-20 right-2">
                <div className="p-3 h-[300px] rounded-lg w-[300px] bg-gray-100">
                  <div className="border p-3 text-pink-500 ">
                    <p>
                      Login Successfully <span className="ml-3">👍</span>{" "}
                    </p>
                  </div>
                </div>
              </div>
            )}

            <div className="">
              <Link to={"/profile/accountSetting/profileSection"}>
                <div className="flex items-center cursor-pointer xl:p-2 xl:px-3 xl:gap-4   ">
                  <div className=" ">
                    <img
                      src={profileMen}
                      alt="profile"
                      className="xl:h-[40px]"
                    />
                  </div>
                  <div className="xl:text-[13px] hidden lg:block">
                    <h1 className="xl:font-bold">Ahmad Raza</h1>
                    <p className="xl:text-gray-400">User Account</p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* toggle menu  */}
      {toggle && (
        <div className="bg-red-400 absolute rounded-2xl top-20 left-2 z-20">
          <ul className="bg-white shadow-2xl border rounded-xl p-6 flex flex-col items-cente font-semibold">
            <Link to={"/dashboard"}>
              {" "}
              <li className="hover:bg-gradient-to-b from-Purple to-Pink p-2 hover:rounded-sm hover:text-white">
                Dashboard{" "}
              </li>
            </Link>
            <Link to={"/Create-Post"}>
              <li className="hover:bg-gradient-to-b from-Purple to-Pink p-2  hover:rounded-sm hover:text-white">
                Create Post
              </li>
            </Link>
            <Link to={"/inspiration"}>
              <li className="hover:bg-gradient-to-b from-Purple to-Pink p-2 hover:rounded-sm hover:text-white">
                Inspiration
              </li>
            </Link>
            <Link to={"/stream"}>
              <li className="hover:bg-gradient-to-b from-Purple to-Pink p-2 hover:rounded-sm hover:text-white">
                Streams
              </li>
            </Link>
            <Link to={"/planner"}>
              <li className="hover:bg-gradient-to-b from-Purple to-Pink p-2 hover:rounded-sm hover:text-white">
                Planner
              </li>
            </Link>
            <Link to={"/advertise"}>
              <li className="hover:bg-gradient-to-b from-Purple to-Pink p-2 hover:rounded-sm hover:text-white">
                Advertise
              </li>
            </Link>
            <Link to={"/analytics"}>
              <li className="hover:bg-gradient-to-b from-Purple to-Pink p-2 hover:rounded-sm hover:text-white">
                Analytics
              </li>
            </Link>
            <Link to={"/profile"}>
              <li className="hover:bg-gradient-to-b from-Purple to-Pink p-2 hover:rounded-sm hover:text-white">
                My Profile
              </li>
            </Link>
            <Link to={"/upgrade-plan/pricing"}>
              <li className="hover:bg-gradient-to-b from-Purple to-Pink p-2 hover:rounded-sm hover:text-white">
                Upgrade My Plans
              </li>
            </Link>
            <Link to={"/login"}>
              <li className="hover:bg-gradient-to-b from-Purple to-Pink text-pink-500 p-2 hover:rounded-sm hover:text-white">
                Logout
              </li>
            </Link>
          </ul>
        </div>
      )}

      {/* side Bar Elements  */}
      <div className="hidden md:block md:pl-7 md:ml-3 lg:pl-0 mt-4">
        <ul className=" text-lg [&>*]:w-[200px] [&>*]:p-2">
          {/* home */}
          <li>
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                isActive ? "text-pink-500 font-semibold" : "text-gray-600  "
              }
            >
              <div className="flex items-center gap-3">
                <img className="h-[30px] w-[30px] " src={home} alt="" />
                <p>Home</p>
              </div>
            </NavLink>
          </li>

          {/* create */}
          <li>
            <NavLink
              to="/Create-Post"
              className={({ isActive }) =>
                isActive ? "text-pink-500 font-semibold" : "text-gray-500  "
              }
            >
              <div className="flex items-center gap-3">
                <img className="h-[30px] w-[30px] " src={create} alt="" />
                Create Post
              </div>
            </NavLink>
          </li>

          {/* inspiration */}
          <li>
            <NavLink
              to="/inspiration"
              className={({ isActive }) =>
                isActive ? "text-pink-500 font-semibold" : "text-gray-500  "
              }
            >
              <div className="flex items-center gap-3">
                <img className="h-[30px] w-[30px]" src={inspiration} alt="" />
                Inspirations
              </div>
            </NavLink>
          </li>

          {/* stream */}
          <li>
            <NavLink
              to="/stream"
              className={({ isActive }) =>
                isActive ? "text-pink-500 font-semibold" : "text-gray-500  "
              }
            >
              <div className="flex items-center gap-3">
                <img className="h-[30px] w-[30px]" src={stream} alt="" />
                Streams
              </div>
            </NavLink>
          </li>

          {/* planner */}
          <li>
            <NavLink
              to="/planner"
              className={({ isActive }) =>
                isActive ? "text-pink-500 font-semibold" : "text-gray-500  "
              }
            >
              <div className="flex items-center gap-3">
                <img className="h-[30px] w-[30px]" src={planner} alt="" />
                Planner
              </div>
            </NavLink>
          </li>

          {/* adverties */}
          <li>
            <NavLink
              to="/advertise"
              className={({ isActive }) =>
                isActive ? "text-pink-500 font-semibold" : "text-gray-500  "
              }
            >
              <div className="flex items-center gap-3">
                <img className="h-[30px] w-[30px]" src={adverties} alt="" />
                Advertise
              </div>
            </NavLink>
          </li>

          {/* analytics */}
          <li>
            <NavLink
              to="/analytics"
              className={({ isActive }) =>
                isActive ? "text-pink-500 font-semibold" : "text-gray-500  "
              }
            >
              <div className="flex items-center gap-3">
                <img className="h-[30px] w-[30px]" src={analytics} alt="" />
                Analytics
              </div>
            </NavLink>
          </li>

          {/* profile */}
          <li className="flex">
            <NavLink
              to="/profile"
              className={({ isActive }) =>
                isActive ? "text-pink-500 font-semibold" : "text-gray-500  "
              }
            >
              <div className="flex items-center gap-3">
                <img className="h-[30px] w-[30px]" src={profile} alt="" />
                My Profile
              </div>
            </NavLink>
          </li>

          {/* upgrade */}
          <li>
            <NavLink
              to="/upgrade-plan/pricing"
              className={({ isActive }) =>
                isActive ? "text-pink-500 font-semibold" : "text-gray-500  "
              }
            >
              <div className="flex items-center gap-3">
                <img className="h-[30px] w-[30px]" src={upgrade} alt="" />
                Upgrade Plans
              </div>
            </NavLink>
          </li>

          {/* logout */}
          <li>
            <NavLink
              to="/login"
              className={({ isActive }) =>
                isActive ? "text-pink-500 font-semibold" : "text-gray-500  "
              }
            >
              <div className="flex items-center gap-3">
                <img className="h-[30px] w-[30px]" src={logout} alt="" />
                Logout
              </div>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}
