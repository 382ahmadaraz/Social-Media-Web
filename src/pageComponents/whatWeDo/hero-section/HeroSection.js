import { Link } from "react-router-dom";
import Button from "../../../components/button/Button";
import Polygon from "../../../assests/what-pg/Polygon.png";
import h1 from "../../../assests/what-pg/h1.jpg";
import h2 from "../../../assests/what-pg/h2.jpg";
import h3 from "../../../assests/what-pg/h3.jpg";
import dot from "../../../assests/what-pg/Dot.png";

// bg-orange-400 sm:bg-slate-500 md:bg-blue-500 lg:bg-pink-400 xl:bg-red-500 2xl:bg-slate-800
// border-2 border-black

export default function HeroSection() {
  return (
    <div className="header-section  p-2 mb-20 sm:px-4 flex items-center justify-center relative  h-[70h]">
      <div className="header-text  px-5 sm:mt-3 sm:p-2 md:px-9 lg:px-0 lg:w-[45%] lg:font-semibold ">
        <h1 className="font-semibold text-2xl sm:text-4xl lg:font-bold  md:text-4xl xl:text-5xl 2xl:text-6xl ">
          {" "}
          What We Do
        </h1>
        <p className=" font-normal my-5 sm:text-lg sm:my-11  md:text-md lg:my-6 lg:pr-3 xl:my-3 2xl:text-2xl 2xl:my-20 text-gray-600 md:leading-loose 2xl:leading-loose">
          Social Medias are feeds that display the content from your connected
          social accounts and let you take part in industry conversations. You
          can use streams to monitor activity across all of your accounts. Share
          real-time insights by monitoring mentions of your brand, company,
          products, and competitors. Social Medias is a social media management
          tool with features to help with planning, scheduling, and syndicating
          social posts.
        </p>
        <div className=" flex items-center my-2 w-fit m-auto sm:m-0 sm:w-auto sm:p-0 sm:border-none ">
          <Button title="GET STARTED" />
          <Link to={"/login"}>
            <div className="ml-4 lg:ml-7 flex items-center sm:p-3 cursor-pointer text-pink-700">
              <img
                src={Polygon}
                alt="arrow"
                className="border border-pink-600 mr-1 p-1 sm:p-2 lg:p-2 lg:rounded lg:mr-3"
              />
              <p className=" hidden sm:block sm:text-lg font-semibold text-md">
                SEE HOW IT WORKS
              </p>
            </div>
          </Link>
        </div>
      </div>
      <div className="hidden lg:block w-[49%]">
        <div className="header-image ml-5 p-4 h-full relative flex animate-fadeIn">
          <img src={dot} alt="h1" className="absolute top-0 right-8 " />
          <img src={dot} alt="h1" className="absolute bottom-0 left-0 z-[-1]" />
          <img
            src={h1}
            alt="h1"
            className="lg:h-[250px] lg:w-[140px] xl:h-[320px] xl:w-[190px] 2xl:h-[360px] 2xl:w-[220px] rounded-xl z-[3] ml-3 2xl:ml-5"
          />
          <img
            src={h2}
            alt="h1"
            className="lg:h-[250px] lg:w-[140px] xl:h-[320px] xl:w-[190px] 2xl:h-[360px] 2xl:w-[220px] rounded-xl z-[3] ml-3 2xl:ml-5 relative top-16"
          />
          <img
            src={h3}
            alt="h1"
            className="lg:h-[250px] lg:w-[140px] xl:h-[320px] xl:w-[190px] 2xl:h-[360px] 2xl:w-[220px] rounded-xl z-[3] ml-3 2xl:ml-5"
          />
        </div>
      </div>
    </div>
  );
}
