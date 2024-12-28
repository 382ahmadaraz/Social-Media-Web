import m1 from "../../assests/images/m1.png";
import m2 from "../../assests/images/m2.jpg";
import m3 from "../../assests/images/m3.png";
import m4 from "../../assests/images/m4.png";
import m5 from "../../assests/images/m5.png";

// bg-orange-400 sm:bg-slate-500 md:bg-blue-500 lg:bg-pink-400 xl:bg-red-500 2xl:bg-slate-800

export default function Manage() {
  return (
    <div className=" my-20 lg:mt-24 px-4 lg:flex justify-center lg:items-center relative">
      <div className="manage-image hidden lg:block lg:w-[40%] lg:h-[80%]    ">
        <img
          src={m1}
          alt="lower-Image"
          className="rounded-md absolute top-[10%] lg:mt-[55px] z-[-1] lg:w-[30%] lg:h-[55%] xl:h-[65%] "
        />
        <img
          src={m2}
          alt="upper-image"
          className="rounded-md z-[2] lg:w-[90%] lg:hdden lg:h-[100%] lg:float-end"
        />
      </div>

      <div className="p-4 lg:w-[53%] lg:p-0 lg:pl-5 md:text-md lg:text-md 2xl:text-xl 2xl:[&>*]:my-11">
        <h1 className="text-2xl sm:text-3xl md:text-4xl 2xl:text-5xl font-semibold">
          MANAGE SOCIAL MEDIA IN ONE PLACE
        </h1>

        <hr className="my-3 rounded-md border-2 w-[40%] lg:my-3 xl:my-6 border-pink-600" />

        <p className="my-3 sm:text-lg lg:text-md md:my-8 lg:my-2 text-gray-600">
          Social Medias are feeds that display the content from your connected
          social accounts and let you take part in industry conversations. You
          can use streams to monitor activity across all of your accounts.
        </p>

        {/* manage icons */}
        <div className="mt-3 lg:my-2 flex">
          <div className="p-2 mt-3 h-[28%] hidden sm:block lg:p-3 rounded-lg bg-gradient-to-b from-Purple to-Pink md:h-[60px] md:mt-2">
            <img src={m3} alt="m3" className=" h-[40px] w-[50px]" />
          </div>
          <div className="p-2 md:px-4 lg:ml-3 lg:px-0">
            <p className="text-lg font-semibold">Light Up Your Profile</p>
            <p className="text-gray-700 lg:text-md">
              Schedule and publish content to all of your social profiles, track
              effectiveness in real time.
            </p>
          </div>
        </div>
        <div className="mt-3 lg:my-2  flex">
          <div className="p-2 mt-3 h-[28%] hidden sm:block lg:p-3 rounded-lg bg-gradient-to-b from-Purple to-Pink lg:h-[60px] lg:mt-2">
            <img src={m4} alt="m3 " className="h-[40px] w-[60px] md:w-[55px]" />
          </div>
          <div className="p-2 md:px-4 lg:ml-3 lg:px-0">
            <p className="text-lg font-semibold">Plan your content with ease</p>
            <p className="text-gray-700 lg:text-md">
              View all of your social media content in one calendar. Easily see
              all your scheduled and published content.
            </p>
          </div>
        </div>
        <div className="mt-3 lg:mt-2 flex">
          <div className="p-2 mt-3 h-[28%] hidden sm:block lg:p-3  rounded-lg bg-gradient-to-b from-Purple to-Pink lg:h-[60px] lg:mt-2">
            <img src={m5} alt="m3 " className="h-[40px] w-[90px] md:w-[80px]" />
          </div>
          <div className=" p-2 md:px-4 lg:ml-3 lg:text-lg lg:px-0 ">
            <p className="text-lg font-semibold">
              Stay on top of trends by posting on time
            </p>
            <p className="text-gray-700 lg:text-md">
              Set up customizable streams that let you monitor trends and stay
              notified. Get actionable insights on the best times to post
              without the heavy data crunching.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
