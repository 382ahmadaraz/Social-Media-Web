import Sidebar from "../../components/sidebar/Sidebar";
import Hero from "../../components/heroHeader/Hero";
import DashContent from "../../components/dashContent/DashContent";

export default function Dashboard(props) {
  return (
   <div className="w-[100%]">
     <div className=" md:flex md:flex-row">
           <Sidebar />

      <div className="">
        <Hero title="Home"  descryption=" Boost engagement and attract more followers by scheduling consistently." />
        <DashContent />
      </div>
    </div>
      <p className="text-gray-400 w-[100%] px-5 text-center mt-4 mb-2">Social Medias Developed by <span className="text-pink-700 cursor-pointer">Ahmad Raza</span> &copy; 2022</p>
   </div>
  );
}
