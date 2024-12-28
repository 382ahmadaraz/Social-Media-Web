import Sidebar from "../../components/sidebar/Sidebar";
import Hero from "../../components/heroHeader/Hero";
import NavPic from "../../components/NavPic.js/NavPic";
import SubHeading from "../../components/subHeading/SubHeading";
import Button2 from "../../components/button2/Button2";

export default function Preference() {
  return (
    <div>
      <div className="md:flex flex-row ">
        <Sidebar />
        <div className="w-[100%]">
          <Hero title="Profile" descryption="Get details about your profile." />

          <div className="  flex mt-7 w-[100%]">
            <NavPic />
            <div className=" w-[75%]">
              <div className="p-4 ">
                <SubHeading heading="Preferences" />
                <form className="flex flex-col text-gray-600">
                  <label className="font-medium">Preferences Language</label>
                  <select className="p-3 md:w-[50%] my-2 outline-none border mb-5">
                    <option>English</option>
                    <option>Urdu</option>
                    <option>Latin</option>
                    <option>Punjabi</option>
                  </select>
                  <label className="font-medium">Twitter</label>
                  <div className="flex gap-3">
                    <input type="checkbox" />
                    <p className="">Allow Retweets</p>
                  </div>
                  <div className="flex justify-end mt-7 w-[50%]">
                    <Button2 title="Save Changes" />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="text-gray-400 w-[70%] text-center mt-3 mb-2">
        Social Medias Developed by Ahmad Raza &copy; 2022
      </p>
    </div>
  );
}
