import n1 from "../../assests/images/n1.png";
import i3 from "../../assests/images/i3.png";
import n2 from "../../assests/images/n2.png";
import { Link } from "react-router-dom";

// bg-orange-400 sm:bg-slate-500 md:bg-blue-500 lg:bg-pink-400 xl:bg-red-500 2xl:bg-slate-800
// border-2 border-black

export default function Letter() {
  return (
    <div className="lg:p-4 my-20 mx-5 lg:px-32 lg:h-[67vh] md:mx-5 lg:mx-0">
      <div className="h-[100%] p-2 relative sm:p-7 md:p-11 lg:p-9 ">
        <img
          src={n1}
          alt="n1 "
          className="h-[60%] absolute bottom-0 left-0 z-[-1] md:h-[150px] lg:h-[200px]"
        />
        <img
          src={i3}
          alt="i3 "
          className="absolute top-0 right-0 z-[-1] h-[80px] md:h-[110px] lg:h-[180px]"
        />

        <div className="  rounded-[40px] flex justify-between items-center bg-slate-50 sm:p-5 lg:p-0 lg:h-[100%] lg:rounded-[90px] ">
          <div className="Newsletter py-5 lg:mr-8 lg:w-[42%] m-auto text-center sm:w-[70%]">
            <h1 className="text-pink-700 text-center sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-5 2xl:text-5xl">
              Subscribe Newsletter
            </h1>

            <div className="lg:hidden flex  items-center justify-between px-2 text-[12px] h-[55%] w-[90%] m-auto bg-white shadow-3xl z-[4] relative rounded-full sm:h-[70%] p-1 md:text-lg">
              <input
                type="email"
                placeholder="Enter email address.."
                className="h-[70%] w-[60%]  p-2 text-gray-800 rounded-full"
              />
              <button className="bg-gradient-to-b from-Purple to-Pink text-white  font-semibold  rounded-full h-[80%] w-[40%] sm:p-3">
                Contact Now
              </button>
            </div>

            <p className="hidden lg:block lg:text-xl text-gray-600">
              We will update you with good news and promotions.
            </p>
          </div>

          <div className="hidden lg:block lg:w-[58%] 2xl:w-[50%] lg:h-[100%] relative">
            <img
              src={n2}
              alt="input-bg"
              className="lg:absolute right-0 w-[75%] h-[100%] 2xl:w-[80%]"
            />

            <div className="lg:mt-20 lg:flex items-center justify-between lg:px-2 lg:h-[28%] lg:w-[90%] bg-white lg:shadow-3xl lg:z-[4] lg:relative rounded-full">
              <input
                type="email"
                placeholder="Enter your email address.."
                className="lg:h-[70%] lg:w-[60%] lg:p-3 text-gray-800 lg:rounded-full"
              />
              <button className="bg-gradient-to-b from-Purple to-Pink text-white lg:font-semibold lg:font-2xl lg:rounded-full lg:h-[80%] lg:w-[40%]">
                <Link to={"/login"}>Contact Now</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
