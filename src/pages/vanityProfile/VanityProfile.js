import { Link } from "react-router-dom";
import Sidebar from "../../components/sidebar/Sidebar";
import Hero from "../../components/heroHeader/Hero";
import NavPic from "../../components/NavPic.js/NavPic";
import SubHeading from "../../components/subHeading/SubHeading";

export default function Profile() {
  return (
    <div>
      <div className="md:flex flex-row ">
        <Sidebar />
        <div className="w-[100%]">
          <Hero title="Profile" descryption="Get details about your profile." />

          <div className="flex mt-7 w-[100%]">
            <NavPic />
            <div className="w-[75%] p-4 text-gray-600">
              <SubHeading heading="Vanity URLs" />
              <p>
                Vanity URLs are a great way to brand your links with a custom
                domain name while still enjoying the click-through statistics
                and security of Ow.ly. Add your existing vanity URL into
                Hootsuite by upgrading your plan{" "}
                <Link to={"/pricing"}>
                  <span className="font-medium text-pink-500 cursor-pointer">
                    here
                  </span>
                </Link>
                .
              </p>
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
