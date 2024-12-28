import dBg from "../../../assests/what-pg/dBg.png"
import dImg from "../../../assests/what-pg/dImg.jpg"
import d1 from "../../../assests/what-pg/d1.png"
import d2 from "../../../assests/what-pg/d2.png"
import d3 from "../../../assests/what-pg/d3.png"
import d4 from "../../../assests/what-pg/d4.png"
import d5 from "../../../assests/what-pg/d5.png"





// bg-orange-400 sm:bg-slate-500 md:bg-blue-500 lg:bg-pink-400 xl:bg-red-500 2xl:bg-slate-800

export default function Manage() {
  return (
    <div className=" my-20  lg:mt-24 px-4 lg:flex justify-center lg:items-center relative">
      
      <div className="manage-image hidden lg:block lg:w-[40%] lg:h-[80%]    ">
        <img src={dBg} alt="lower-Image" className="rounded-md absolute top-[10%] lg:mt-[55px] z-[-1] lg:w-[30%] lg:h-[55%] xl:h-[65%] "/>
        <img src={dImg} alt="upper-image" className="rounded-md z-[2] lg:w-[90%] lg:hdden  lg:h-[100%] lg:float-end" />
      </div>


      <div className="p-4 lg:w-[53%] lg:p-0 lg:pl-5  md:text-md lg:text-md 2xl:text-xl 2xl:[&>*]:my-11">
        <h1 className="text-2xl sm:text-3xl md:text-4xl 2xl:text-5xl font-semibold">
          HOW WE'RE DIFFERENT?
        </h1>

        <hr className="my-3 rounded-md border-2  w-[40%] lg:my-3 xl:my-6  border-pink-600" />


        <p className="my-3 sm:text-lg lg:text-md md:my-8 lg:my-2 text-gray-600 md:leading-loose">
          Social Medias are feeds that display the content from your connected
          social accounts and let you take part in industry conversations. You
          can use streams to monitor activity across all of your accounts.
        </p>

        {/* manage icons */}
        {/* 1 */}
         <div className="mt-3 lg:my-2 flex  ">
            <div className="p-2 mt-3 h-[28%] hidden sm:block  lg:p-3 rounded-lg bg-gradient-to-b from-Purple to-Pink md:h-[60px] md:mt-2">
                <img src={d1} alt="d1 " className=" h-[40px] w-[50px]"/>
            </div>
            <div className="p-2 md:px-4   lg:ml-3 lg:px-0">
                <p className=" text-lg font-semibold">Publish and Schedule</p>
                <p className="text-gray-700 lg:text-md">Plan your posts with ease.</p>
            </div>
        </div>

        {/* 2 */}
        <div className="mt-3  lg:my-2  flex">
            <div className="p-2 mt-3 h-[28%] hidden sm:block  lg:p-3  rounded-lg bg-gradient-to-b from-Purple to-Pink lg:h-[60px] lg:mt-2">
                <img src={d2} alt="m3 " className="h-[40px] w-[60px] md:w-[50px]"/>
            </div>
            <div className="p-2 md:px-4  lg:ml-3 lg:px-0">
                <p className="text-lg font-semibold">Engage Customers</p>
                <p className="text-gray-700 lg:text-md">Manage incoming messages from multiple social channels</p>
            </div>
        </div>
        {/* 3 */}
        <div className="mt-3  lg:mt-2 flex ">
            <div className="p-2 mt-3 h-[28%] hidden sm:block lg:p-3  rounded-lg bg-gradient-to-b from-Purple to-Pink lg:h-[60px] lg:mt-2">
                <img src={d3} alt="m3 " className="h-[40px] w-[60px] md:w-[50px]"/>
            </div>
            <div className=" p-2 md:px-4 lg:ml-3 lg:text-lg lg:px-0 ">
                <p className="text-lg font-semibold">Monitor Activity</p>
                <p className="text-gray-700 lg:text-md">Stay informed about market trends and competitors.</p>
            </div>
        </div>
        {/* 4 */}
        <div className="mt-3  lg:mt-2 flex ">
            <div className="p-2 mt-3 h-[28%] hidden sm:block lg:p-3  rounded-lg bg-gradient-to-b from-Purple to-Pink lg:h-[60px] lg:mt-2">
                <img src={d4} alt="m3 " className="h-[40px] w-[60px] md:w-[50px]"/>
            </div>
            <div className=" p-2 md:px-4 lg:ml-3 lg:text-lg lg:px-0 ">
                <p className="text-lg font-semibold">Advertise Content</p>
                <p className="text-gray-700 lg:text-md">Promote your organic content and manage paid ads.</p>
            </div>
        </div>
        {/* 5 */}
        <div className="mt-3  lg:mt-2 flex ">
            <div className="p-2 mt-3 h-[28%] hidden sm:block lg:p-3  rounded-lg bg-gradient-to-b from-Purple to-Pink lg:h-[60px] lg:mt-2">
                <img src={d5} alt="m3 " className="h-[40px] w-[60px] md:w-[50px]"/>
            </div>
            <div className=" p-2 md:px-4 lg:ml-3 lg:text-lg lg:px-0 ">
                <p className="text-lg font-semibold">Analyze Results</p>
                <p className="text-gray-700 lg:text-md">Measure your results across all social networks.</p>
            </div>
        </div>
         
       </div>
    </div>
  );
}
