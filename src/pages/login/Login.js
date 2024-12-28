import Navbar from "../../components/navbar/Navbar";
import logo from "../../assests/images/logo.png";
import { Link } from "react-router-dom";

export default function Login() {
  return (

    // border-2 border-black

    <div className=" ">
      <Navbar />
      <div className="  mt-11">
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
                  Sign in to your account
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
                <div class="flex items-center justify-between">
                  <div>
                    <input type="checkbox" />{" "}
                    <label className="text-sm font-semibold">
                      Keep me Logged In
                    </label>
                  </div>

                  <Link
                    class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                    href="#"
                  >
                    Forgot Password?
                  </Link>
                </div>
                <Link to={"/socialAccounts"}>
                <div className="w-[100%] p-2 bg-gradient-to-b from-Purple to-Pink text-white text-center my-4 rounded-lg">
                  <button title="Sign In">Sign In</button>
                </div>
                </Link>
                <div className="flex items-center  w-[80%] m-auto">
                  <hr className="w-[40%] border"/>
                  <p className="mx-3">OR</p>  
                  <hr className="w-[40%] border"/>
                </div>
                <div className="text-pink-500 flex items-center justify-center">
                <p className="text-black mr-3">Not a Member yet? </p><Link to={"/signup"} className="font-semibold">Sign Up</Link>

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
