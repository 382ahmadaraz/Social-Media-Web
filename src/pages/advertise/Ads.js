import Sidebar from "../../components/sidebar/Sidebar";
import Hero from "../../components/heroHeader/Hero";
import facebook from "../../assests/images/facebook.png";
import advertise from "../../assests/images/ads.png";
import SubHeading from "../../components/subHeading/SubHeading";
import Button2 from "../../components/button2/Button2";
import NavAds from "../../components/navAds/NavAds";

// border-2 border-black
export default function Ads() {
  return (
    <div>
      <div className="md:flex flex-row ">
        <Sidebar />
        <div className="w-[100%] h-[110vh] md:h-[150vh] lg:h-[140vh]">
          <Hero
            title="Advertise"
            descryption="Promote your posts on Facebook, Instagram, and LinkedIn. "
          />
          <div className="border mt-5 m-2 sm:m-4 md:h-[110vh] p-2 rounded-xl pb-7">
            <div className=" flex items-center justify-between flex-col-reverse h-fit px-7 ">
              <div className="flex items-center gap-3">
                <img src={facebook} alt="logo" />
                <SubHeading heading="Facebook Boost" />
              </div>
              <NavAds />
            </div>

            <div className="flex items-center justify-center h-[50%] ">
              <img src={advertise} alt="Advertise" />
            </div>

            <div className=" m-auto text-center">
              <SubHeading heading="Welcome to Boost, Ahmad Raza!" />
              <p className="mb-4 text-gray-500 text-[12px] md:text-[16px] px-3 text-center">
                Increase the value and extend the reach of your best Facebook
                Page content using Boost.
                <br className="hidden lg:block"/>
                Create an auto-boosting campaign to automatically identify and
                boost your published posts based <br className="hidden lg:block"/>
                on criteria you set. You can set promotion objectives and
                timelines, define engagement criteria, and target <br className="hidden xl:block"/>
                specific audiences to optimize your ad spend.
              </p>
              <Button2 title="Get Started With Boost" />
            </div>
          </div>
        </div>
      </div>
      <p className="text-gray-400 w-[100%] px-5 text-center mt-4 mb-2">Social Medias Developed by <span className="text-pink-700 cursor-pointer">Ahmad Raza</span> &copy; 2022</p>

    </div>
  );
}
