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

          <div className=" flex mt-7 w-[100%]">
            <NavPic />
            <div className="  w-[75%] p-4 ">
              <SubHeading heading="Share Access to a Social Network" />
              <p className="my-2">
                Give colleagues access to a social network securely through
                Social Medias.
              </p>
              <Button2 title="Share a Social Network" />

              <SubHeading heading="Private social accounts" />
              <p className="my-2">
                These are the social accounts that only you can view and post
                to.
              </p>
              <Button2 title="Add Private Account" />
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
