import search from "../../assests/images/search.png";
import bell from "../../assests/images/bell.png";
import profile from "../../assests/images/profile.png";
import { Link } from "react-router-dom";
import { useState } from "react";

// border-2 border-black

export default function Hero(props) {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div className="w-[100%] xl:w-[100%] flex flex-wrap xl:px-4 md:h-fit md:pt-5 lg:pt-0 lg:h-[20vh]">
      
      {/* content part for small screens below sm*/}
      <div className="block md:hidden w-[100%] p-2 pt-7 sm:px-7">
        <h1 className="text-3xl font-semibold sm:text-4xl sm:my-2">
          {props.title}
        </h1>
        <p >{props.descryption}</p>
      </div>

      {/* content part above lg */}
      <div className="hidden lg:block lg:w-[55%] lg:p-2 lg:pt-7">
        <h1 className="text-5xl font-semibold py-2">{props.title}</h1>
        <p className="text-gray-400">{props.descryption}</p>
      </div>

      {/* profile part  */}
      <div className="hidden md:block lg:w-[45%] md:w-[100%] md:flex items-center justify-evenly xl:gap-4 md:h-[40%] lg:h-full">
        <div className="border  flex items-center md:gap-2 xl:w-[47%] rounded-md xl:p-1 text-[14px] md:w-[50%] md:px-2 md:h-[30px] lg:h-[40px]">
          <img src={search} alt="profile" className=" h-[16px] " />
          <input
            type="text"
            placeholder="Search everything"
            className="outline-none md:h-full md:w-full"
          />
        </div>
        {/* profile image  */}
        <div className="cursor-pointer flex items-center md:justify-evenly gap-4 md:w-[20%] lg:w-[50%]">
          <div>
            <p className="relative z-10 left-4 top-3 bg-red-500 rounded-full h-[14px] w-[14px] text-[10px] text-center text-white">
              1
            </p>
            <img
              src={bell}
              alt="profile"
              className="xl:h-[34px] "
              onClick={handleToggle}
            />
          </div>

          {toggle && (
            <div className="bg-red-400 absolute rounded-2xl top-20 right-2">
              <div className="p-3 h-[300px] rounded-lg w-[300px] bg-gray-100">
                <div className="border p-3 text-pink-500 ">
                  <p>
                    Login Successfully <span className="ml-3">👍</span>{" "}
                  </p>
                </div>
              </div>
            </div>
          )}

          <div>
            <Link to={"/profile/accountSetting/profileSection"}>
              <div className="flex items-center  cursor-pointer xl:p-2 xl:px-3 gap-4   ">
                <div>
                  <img src={profile} alt="profile" className="xl:h-[40px]" />
                </div>
                <div className="xl:text-[13px] hidden xl:block">
                  <h1 className="xl:font-bold">Ahmad Raza</h1>
                  <p className="xl:text-gray-400">User Account</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* content part  md  */}
      <div className="hidden md:block lg:hidden w-[100%] p-2 pt-4">
        <h1 className="md:text-5xl font-semibold py-2">{props.title}</h1>
        <p className="text-gray-400 text-lg">{props.descryption}</p>
      </div>
    </div>
  );
}
