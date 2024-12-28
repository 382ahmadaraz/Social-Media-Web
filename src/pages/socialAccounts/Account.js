import { Link } from "react-router-dom";
import logo from "../../assests/images/logo.png";
import Navbar from "../../components/navbar/Navbar";
import socialAccounts from "./SocialCards";

export default function Account() {
  return (
    <div>
      <Navbar />
      <div className="lg:h-[120vh]  flex justify-center">
        <div class="w-[100%] lg:w-[45%] sm:w-[80%] md:w-[70%] sm:m-auto 2xl:w-[40%] sm:shadow-xl">
          <form class="bg-white rounded px-8 pt-6 pb-8 mb-4">
            <img
              src={logo}
              alt="logo"
              className="md:h-[110px] lg:h-[150px] lg:w-[70%] m-auto 2xl:h-[160px]"
            />
            <p className="font-semibold lg:text-2xl my-5">
              Let’s add some social accounts
            </p>
            <p className="my-3 font-semibold text-gray-600">
              Choose a social network to add an account
            </p>
            <div className="flex justify-start  items-center flex-wrap  gap-5">
              {socialAccounts.map((index) => {
                return (
                  <div
                    key={index}
                    className="border p-5 xl:p-7 w-[25%] sm:w-[30%] flex flex-col items-center"
                  >
                    <img
                      src={index.img}
                      alt="social-Accounts-Icons"
                      className="h-[30px] w-[30px]"
                    />
                    <p className="text-sm font">{index.name}</p>
                  </div>
                );
              })}
            </div>
            <div className="flex justify-end mt-11 text-sm">
              <Link to={"/dashboard"}>
                <button className="border border-pink-500 py-2 mr-4 px-7 rounded-lg text-pink-600 font-semibold">
                  Skip
                </button>
                <button className="p-1 px-2 text-sm sm:p-2 sm:px-5 font-semibold sm:text-md lg:text-md 2xl:text-lg bg-gradient-to-b from-Purple to-Pink rounded-md text-white ">
                  Confirm
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
