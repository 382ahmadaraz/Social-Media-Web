import specialImg from "../../assests/images/s-bg.jpg";
import Button from "../button/Button";

export default function SpecialMedia() {
  return (
    // bg-orange-400 sm:bg-slate-500 md:bg-blue-500 lg:bg-pink-400 xl:bg-red-500 2xl:bg-slate-800
    // border-2 border-black

    <div className="special-media my-11 text-center lg:h-[60vh] xl:h-[70vh] lg:text-center lg:mt-[8%] relative">
      <div className=" ">
        <img
          src={specialImg}
          alt="Special bg-Image"
          className="absolute z-[-1] brightness-50 w-[100%] h-[100%] "
        />
      </div>

      <div className="p-7 text-white sm:text-sm lg:z-10 lg:w-[100%] lg:py-9 xl:p-20">
        <p className=" lg:hidden md:text-4xl text-md font-semibold sm:text-xl">
          SOCIAL MEDIA IS AWESOME
        </p>

        <p className="hidden lg:block md:text-2xl lg:text-4xl font-semibold 2xl:text-5xl">
          SOCIAL MEDIA IS AWESOME PLANNING OUT SOCIAL MEDIA POSTS
        </p>

        <hr className="w-[30%] m-auto my-2 md:my-6 border-2 lg:rounded-md border-pink-600" />

        <p className="md:hidden text-sm my-3  lg:my-11">
          We offer you a true concierge experience.
        </p>

        <p className="hidden md:block md:my-4 md:mb-7 md:text-xl lg:text-2xl lg:my-11">
          We offer you a true concierge experience, combining the expertise if
          you run multiple social
          <br className="hidden lg:block" /> media accounts for your business.
        </p>
        <Button title="GET STARTED" />
      </div>
    </div>
  );
}
