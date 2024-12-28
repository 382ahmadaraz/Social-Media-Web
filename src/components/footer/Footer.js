import logof from "../../assests/images/logof.png";
import fb from "../../assests/images/footer/fb.png";
import x from "../../assests/images/footer/x.png";
import insta from "../../assests/images/footer/insta.png";
import quick from "../../assests/images/footer/Quick.png";
import legal from "../../assests/images/footer/Legal.png";
import subscribe from "../../assests/images/footer/Subscribe.png";
import arrow from "../../assests/images/footer/arrow.png";
import arrowUp from "../../assests/images/footer/arrow-up.png" 
import { Link } from "react-router-dom";

    // bg-orange-400 sm:bg-slate-500 md:bg-blue-500 lg:bg-pink-400 xl:bg-red-500 2xl:bg-slate-800
    // border-2 border-black

export default function Footer() {
  return (
    <div className="lg:h-[60vh] ">
      <hr />

      <div className="md:flex justify-center sm:mx-9 md:mx-0 md:pt-9 md:[&>*]:ml-4 md:text-sm 2xl:text-lg text-gray-600">
        <div className="lg:w-[35%] p-3">
          <img src={logof} alt="logo" />
          <p className="lg:mt-4 lg:pr-8 text-gray-600 leading-loose">
            Social Medias are feeds that display the content from your connected
            social accounts and let you take part in industry conversations. You
            can use streams to monitor activity across all of your accounts.
          </p>
          <div className=" flex  [&>*]:ml-3  [&>*]:cursor-pointer  mt-4 ">
            <img src={fb} alt="icons" />
            <img src={x} alt="icons" />
            <img src={insta} alt="icons" />
          </div>
        </div>
        <div className="hidden md:block lg:w-[13%] md:w-[60%] ">
          <img src={quick} alt="icons" />
            <ul className="[&>*]:my-5">
              <li>Why Social Medias</li>
              <li>What We Do</li>
              <li>Pricing</li>
              <li>FAQS</li>
              <li>Login</li>
            </ul>
        </div>
        <div className="hidden md:block lg:w-[13%] md:w-[50%] ">
          <img src={legal} alt="icons" />
          <ul className="[&>*]:my-5">
              <li>Terms of Service</li>
              <li>Privacy Policy</li>
              <li>Contact Us</li>
            </ul>
        </div>

        <div className="hidden md:block lg:w-[23%] md:w-[55%] md:mr-4 ">
          <img src={subscribe} alt="icons" />
          <ul className="[&>*]:my-5 ">
              <li>Subscribe to grt letest property, blog news from us.</li>
              <li className="flex border-2 border-pink-500 lg:w-[80%] p-2 rounded-2xl md:w-[100%]">
                <input type="email" placeholder="Enter your email" className="w-[82%] "/>
                <div className="p-3 rounded-full bg-gradient-to-b from-Purple to-Pink cursor-pointer">
                   <img src={arrow} alt="icons" />
                </div>
              </li>
            </ul>
        </div>
      </div>
      <hr className="lg:mt-5"/>
      <div className='h-[70px] flex justify-between items-center bg-gradient-to-r from-purple-500 to-pink-500 px-3 md:px-11 text-gray-100'>
        <p className="">Social Medias developed by <span className="text-white lg:underline cursor-pointer hover:text-blue-800"><Link to={"/login"}>Ahmad Raza</Link></span> © 2022</p>
        <img src={arrowUp} alt="arrowUp"/>
      </div>
    </div>
  );
}
