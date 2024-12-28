import NavPic from "../../components/NavPic.js/NavPic";
import Hero from "../../components/heroHeader/Hero";
import Sidebar from "../../components/sidebar/Sidebar";
import ProfileNav2 from "../../components/profileNav2/ProfileNav2";
import SubHeading from "../../components/subHeading/SubHeading";
import Button2 from "../../components/button2/Button2";

export default function Security() {
  return (
    <div>
      <div className="md:flex flex-row ">
        <Sidebar />
        <div className="w-[100%]">
          <Hero title="Profile" descryption="Get details about your profile." />

          <div className=" flex mt-7 w-[100%]">
            <NavPic />
            <div className="  w-[75%]">
              <ProfileNav2 />
              <div className="p-4">
                <SubHeading heading="Security" />
                <p className="text-gray-500 mb-4">
                  2-step verification uses your mobile device to provide an
                  extra layer of security for your Hootsuite account. Powered by
                  Google Authenticator.
                </p>
                <Button2 title="Secure With Google" />
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
