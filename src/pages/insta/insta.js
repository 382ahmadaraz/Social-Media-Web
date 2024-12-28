import Sidebar from "../../components/sidebar/Sidebar";
import Hero from "../../components/heroHeader/Hero";
import insta from "../../assests/images/insta.png";
import adsInsta from "../../assests/images/ads-Insta.png";
import SubHeading from "../../components/subHeading/SubHeading";
import Button2 from "../../components/button2/Button2";
import NavAds from "../../components/navAds/NavAds";

// border-2 border-black
export default function Insta() {
  return (
    <div>
      <div className="md:flex flex-row ">
        <Sidebar />
        <div className=" w-[100%] h-[115vh] md:h-[140vh] lg:h-[130vh]">
          <Hero
            title="Advertise"
            descryption="Promote your posts on Facebook, Instagram, and LinkedIn. "
          />
          <div className="border mt-5 m-4 h-[80%] md:h-[75%] rounded-xl pb-7 p-2">
            <div className=" flex items-center justify-between flex-col-reverse h-fit px-7 ">
              <div className="flex items-center gap-3">
                <img src={insta} alt="logo" />
                <SubHeading heading="Instagram Boost" />
              </div>
              <NavAds />
            </div>

            <div className="flex items-center justify-center h-[50%] ">
              <img src={adsInsta} alt="instagram" />
            </div>

            <div className="m-auto text-center">
              <SubHeading heading="Welcome to Boost, Ahmad Raza!" />
              <p className="mb-4 text-gray-500 text-[12px] sm:text-[16px] px-1 text-center">
                Add power to your posting with our Instagram Boost feature.
                <br className="hidden md:block" />
                Boost your posts to reach wider targeted audience and get better
                engagement.
              </p>
              <Button2 title="Get Started with Instagram Business" />
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
