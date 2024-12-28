import Sidebar from "../../components/sidebar/Sidebar";
import Hero from "../../components/heroHeader/Hero";
import linked from "../../assests/images/linked.png";
import adsLinked from "../../assests/images/ads-linked.png";
import SubHeading from "../../components/subHeading/SubHeading";
import Button2 from "../../components/button2/Button2";
import NavAds from "../../components/navAds/NavAds";

// border-2 border-black
export default function Insta() {
  return (
    <div>
      <div className="md:flex flex-row ">
        <Sidebar />
        <div className=" w-[100%] h-[137vh] sm:h-[130vh] md:h-[140vh] lg:h-[130vh]">
          <Hero
            title="Advertise"
            descryption="Promote your posts on Facebook, Instagram, and LinkedIn. "
          />

          <div className="border mt-5 m-4 h-[80%] md:h-[75%] rounded-xl pb-7 p-2">
            <div className=" flex items-center justify-between flex-col-reverse  px-7 ">
              <div className="flex items-center gap-3">
                <img src={linked} alt="logo" />
                <SubHeading heading="Linked In Boost" />
              </div>
              <NavAds />
            </div>

            <div className="flex items-center justify-center h-[50%] ">
              <img src={adsLinked} alt="instagram" />
            </div>

            <div className="m-auto text-center">
              <SubHeading heading="Welcome to Boost, Ahmad Raza!" />
              <p className="mb-4 text-gray-500">
                Increase the value and extend the reach of your best LinkedIn
                Page content using Boost.
                <br className="hidden lg:block" />
                Sponsor your posts to reach a wider targeted audience and get
                better engagement.
              </p>
              <Button2 title="Connect with LinkedIn" />
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
