import SubHeading from "../../components/subHeading/SubHeading";
import Button2 from "../../components/button2/Button2";
import Sidebar from "../../components/sidebar/Sidebar";
import Hero from "../../components/heroHeader/Hero";
import analytic from "../../assests/images/analytics.png";

export default function Analytics() {
  return (
    <div>
      <div className="md:flex flex-row ">
        <Sidebar />
        <div className=" w-[100%] h-[120vh] md:h-[130vh] lg:h-[120vh]">
          <Hero
            title="Analytics"
            descryption="Get all details about your social medias analytics. "
          />
          <div className="border shadow-xl mt-5 m-4 h-[80%] md:h-[75%] lg:h-[80%] rounded-xl p-9">
            <div className="flex items-center justify-center h-[60%] ">
              <img src={analytic} alt="Advertise" />
            </div>

            <div className="m-auto text-center">
              <SubHeading heading="Discover what works" />
              <p className="mb-4 text-gray-500">
                Cut through the fluff. Track post performance, share ready-made
                reports, and get insights so you can
                <br />
                create your best campaigns.
              </p>
              <Button2 title="Upgrade Now" />
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
