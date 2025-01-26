import { Link } from "react-router-dom";
import h1 from "../../assests/images/header-img1.jpg";
import h2 from "../../assests/images/header-2.png";
import Button from "../../components/button/Button";
import h3 from "../../assests/images/arrow-h3.png";

export default function Header() {
  return (
    // bg-orange-400 sm:bg-slate-500 md:bg-blue-500 lg:bg-pink-400 xl:bg-red-500 2xl:bg-slate-800
    // border-2 border-black

    <div className="">
      <div className="header-section p-2 sm:px-4 lg:flex items-center justify-around  ">
        <div className="header-text px-5 sm:mt-3 sm:p-2 md:px-9 lg:px-0 lg:w-[45%] lg:font-semibold ">
          <h1 className="font-semibold text-2xl sm:text-4xl lg:font-bold md:text-4xl xl:text-5xl 2xl:text-6xl">
            {" "}
            Grow your reach and get more business with social media. Let's do
            this.
          </h1>
          <p className="font-normal my-5 sm:text-lg sm:my-11  md:text-md lg:my-6 lg:pr-3 xl:my-11 2xl:text-2xl 2xl:my-20 text-gray-600">
            Create, schedule, publish, and manage your content and ad campaigns
            across social networks from a single dashboard. We help maximize the
            impact of your social marketing by providing real-time insights.
          </p>
          <div className="flex items-center my-2 border border-pink-500 p-2 w-fit m-auto rounded-md sm:m-0 sm:w-auto sm:p-0 sm:border-none ">
            <Button title="Start Today" />
            <Link to={"/login"}>
              <div className="ml-4 lg:ml-7 flex items-center cursor-pointer text-pink-700 ">
                <img
                  src={h3}
                  alt="arrow"
                  className="border-2 border-pink-600 mr-1 sm:p-2 lg:p-2 lg:rounded-md lg:mr-3"
                />
                <p className=" hidden sm:block sm:text-lg">Book a Demo Today</p>
              </div>
            </Link>
          </div>
        </div>
        <div className="header-image mt-3 p-4 sm:px-20 sm:hidden md:block md:p-9 md:mt-0 md:px-36 lg:px-0 lg:w-[40%] relative">
          <img
            src={h2}
            alt="h1"
            className="animate-fadeIn h-[80px] absolute left-0 top-[10%] sm:h-[100px] sm:left-[8%] md:h-[140px] md:top-[20%] md:left-[12%] lg:h-[120px] lg:top-[10%] lg:left-[-6%] z-10 "
          />
          <img src={h1} alt="h1" className=" -z-10  lg:h-[100%] lg:w-[100%] animate-fadeIn" />
        </div>
      </div>
    </div>
  );
}
