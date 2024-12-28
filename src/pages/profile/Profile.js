import Sidebar from "../../components/sidebar/Sidebar";
import Hero from "../../components/heroHeader/Hero";
import NavPic from "../../components/NavPic.js/NavPic";
import ProfileData from "../../components/profileData/ProfileData";
import ProfileNav2 from "../../components/profileNav2/ProfileNav2";

export default function Profile() {
  return (
    <div>
      <div className="md:flex flex-row ">
        <Sidebar />
        <div className="w-[100%]">
          <Hero title="Profile" descryption="Get details about your profile." />

          <div className="flex mt-7 w-[100%]">
            <NavPic />
            <div className="w-[75%]">
              <ProfileNav2 />
              <ProfileData />
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
