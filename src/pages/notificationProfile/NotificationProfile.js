import Sidebar from "../../components/sidebar/Sidebar";
import Hero from "../../components/heroHeader/Hero";
import NavPic from "../../components/NavPic.js/NavPic";
import SubHeading from "../../components/subHeading/SubHeading";
import Button2 from "../../components/button2/Button2";

export default function Profile() {
  return (
    <div>
      <div className="md:flex flex-row ">
        <Sidebar />
        <div className="w-[100%]">
          <Hero title="Profile" descryption="Get details about your profile." />

          <div className="  flex mt-7 w-[100%]">
            <NavPic />
            <div className="  w-[75%] p-4">
              <SubHeading heading="General" />
              <div className="flex gap-3">
                <input type="checkbox" />
                <p>
                  Flash the title bar when new messages appear in my streams
                </p>
              </div>
              <SubHeading heading="Email Notifications" />
              <div className="flex gap-3">
                <input type="radio" name="notify" />
                <p>Turn On</p>
              </div>
              <div className="flex gap-3">
                <input type="radio" name="notify" />
                <p>Turn Off</p>
              </div>
              <div className="my-4 w-[60%] text-end">
                <Button2 title="Save Changes" />
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
