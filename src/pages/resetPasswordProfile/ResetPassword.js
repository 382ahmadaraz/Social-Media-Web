import NavPic from "../../components/NavPic.js/NavPic";
import Hero from "../../components/heroHeader/Hero";
import Sidebar from "../../components/sidebar/Sidebar";
import SubHeading from "../../components/subHeading/SubHeading";
import Button2 from "../../components/button2/Button2";
import { Link } from "react-router-dom";

export default function Security() {
  return (
    <div>
      <div className="md:flex flex-row ">
        <Sidebar />
        <div className="w-[100%]">
          <Hero title="Profile" descryption="Get details about your profile." />

          <div className="flex mt-7 w-[100%]">
            <NavPic />
            <div className="w-[75%]">
              <div className="p-4">
                <SubHeading heading="Change Password" />
                <form className="flex flex-wrap w-[90%] gap-4">
                  <input
                    type="text"
                    placeholder="New Password"
                    className="w-[100%] p-3 border rounded-md"
                  />
                  <input
                    type="text"
                    placeholder="Current Password"
                    className="w-[100%] p-3 border rounded-md"
                  />
                  <div className="flex justify-end  w-[55%]">
                    <Link to={"/profile/accountSetting/profileSection"}>
                      <Button2 title="Confirm" />
                    </Link>
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
