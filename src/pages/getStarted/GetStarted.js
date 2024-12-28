import Navbar from "../../components/navbar/Navbar";
import logo from "../../assests/images/logo.png";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    // border-2 border-black

    <div className=" ">
      <Navbar />
      <div className="mt-11">
        <div className="lg:h-[120vh] flex justify-center items-center">
          <div className="upper-box lg:w-[45%]  lg:p-16 bg-white ">
            <div class="lg:w-[100%] sm:w-[70%] m-auto shadow-xl">
              <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <img
                  src={logo}
                  alt="logo"
                  className="lg:h-[120px] lg:w-[70%] m-auto 2xl:h-[160px]"
                />
                <p className="font-semibold lg:text-2xl my-5">
                  Create your account
                </p>
                <div class="mb-4">
                  <label
                    class="block text-gray-700 text-sm font-bold mb-2"
                    for="email"
                  >
                    Email
                  </label>
                  <input
                    class="shadow appearance-none border rounded text-sm w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="username"
                    type="text"
                    placeholder="ahmadraza@gmail.com"
                  />
                </div>
                <div class="mb-6">
                  <label
                    class="block text-gray-700 text-sm font-bold mb-2"
                    for="password"
                  >
                    Password
                  </label>
                  <input
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    id="password"
                    type="password"
                    placeholder="******************"
                  />
                  {/* <p class="text-red-500 text-xs italic">Please choose a password.</p> */}
                </div>
                <Link to={"/login"}>
                  <div className="w-[100%] p-2 bg-gradient-to-b from-Purple to-Pink text-white text-center my-4 rounded-lg">
                    <button title="Sign In">Sign Up</button>
                  </div>
                </Link>
                <div className="flex items-center  w-[80%] m-auto">
                  <hr className="w-[40%] border" />
                  <p className="mx-3">OR</p>
                  <hr className="w-[40%] border" />
                </div>
                <div className="text-pink-500 flex items-center justify-center text-md font-semibold ">
                  <p className="text-gray-600 mr-3">Already a Member </p>
                  <Link to={"/login"}>Sign In</Link>
                </div>
              </form>
            </div>
          </div>
          <hr className="border-4 border-pink-600 absolute  w-[100%] z-[-1] rotate-12" />
        </div>
      </div>
    </div>
  );
}
