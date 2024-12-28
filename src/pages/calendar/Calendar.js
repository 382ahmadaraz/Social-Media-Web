import Plan from "../../components/plan/Plan";
import Hero from "../../components/heroHeader/Hero";
import Sidebar from "../../components/sidebar/Sidebar";
import Clndr from "../../components/calendarComp/Clndr";

// border-2 border-black
export default function Calendar() {
  return (
    <div className="">
      <div className="md:flex flex-row ">
        <Sidebar />
        <div className="w-[100%]">
          <Hero
            title="Planner"
            descryption="Get all details about your planned posts."
          />
          <div className="h-[126vh] m-2 xl:m-7 rounded-xl shadow-xl ">
            <Plan />
            <Clndr />
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
