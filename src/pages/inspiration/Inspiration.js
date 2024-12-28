import Ideas from "../../components/contentIdea/Ideas";
import Hero from "../../components/heroHeader/Hero";
import OutBtn from "../../components/outlineButton/OutBtn";
import Sidebar from "../../components/sidebar/Sidebar";
import SubHeading from "../../components/subHeading/SubHeading";

export default function Inspiration() {
  return (
    <div>
      <div className="md:flex flex-row ">
        <Sidebar />
        <div className="w-[100%]">
          <Hero
            title="Inspiration"
            descryption="Get best content ideas for inspiration."
          />

          <div className="md:p-3 lg:p-9">
            <div className="flex items-center justify-between px-2">
              <SubHeading heading="Content ideas" />
              <OutBtn btn="Add Filter" />
            </div>
            <Ideas />
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
