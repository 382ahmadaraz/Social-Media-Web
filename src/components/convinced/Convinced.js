import i1 from "../../assests/images/ii.png";
import i2 from "../../assests/images/i2.png";
import i3 from "../../assests/images/i3.png";
import i4 from "../../assests/images/i4.png";
import i5 from "../../assests/images/i5.png";
import Button from '../button/Button'

    // bg-orange-400 sm:bg-slate-500 md:bg-blue-500 lg:bg-pink-400 xl:bg-red-500 2xl:bg-slate-800
    // border-2 border-black

export default function Convinced() {
  return (
    <div className="p-4 px-7 my-16 lg:h-[100vh] lg:w-[100%] ">
      <div className="lg:w-[80%] lg:m-auto  ">
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl font-semibold  ">
          HUNDRED OF INDEPENDENTS ALREADY CONVINCED
        </h1>

        <hr className="my-6 mb-9 w-[47%] rounded-md border-2 border-pink-600" />

      </div>

      <div className="flex justify-center items-center lg:h-[80%] lg:[&>*]:mx-5">
        <div className="hidden lg:block  lg:w-[33%] lg:h-[85%]  lg:relative">
          <img src={i1} alt="identity-image" className="lg:rounded-bl-full lg:rounded-tl-full lg:rounded-br-full lg:w-[88%] lg:h-[88%] lg:absolute bottom-2 left-3 lg:z-10 lg:shadow-b lg:shadow-2xl"/>
          <img src={i2} alt="circle" className="lg:absolute bottom-0  "/>
          <img src={i3} alt="square-dots" className="lg:absolute top-0 right-0 lg:h-[35%]"/>


          <div className="flex lg:absolute bottom-11 left-[22%] [&>*]:cursor-pointer lg:[&>*]:ml-5 lg:z-20">
          <div className="lg:h-4 bg-black lg:rounded-full lg:w-4"></div>
          <div className="lg:h-4 bg-gray-400 lg:rounded-full lg:w-4"></div>
          <div className="lg:h-4 bg-gray-400 lg:rounded-full lg:w-4"></div>
          <div className="lg:h-4 bg-gray-400 lg:rounded-full lg:w-4"></div>
          <div className="lg:h-4 bg-gray-400 lg:rounded-full lg:w-4"></div>

          </div>
        </div>

        <div className="lg:w-[27%]   lg:mx-5  ">
          <h1  className="text-2xl lg:font-semibold lg:text-2xl">Emily Clark</h1>
          <p className="my-5 mb-8 sm:text-lg text-gray-600">In 2017 it took me over 13 hours to do my taxes on TurboTax. Last year I was able to reduce that time to 3 hours without even having to leave my house. Tax togo saved me time and money.</p>
          <Button title="REQUEST A QUOTE"/>
        </div>
        <div className="hidden lg:block  lg:w-[26%] lg:h-[80%] lg:relative"> 
          <img src={i4} alt="multi-people" className=" lg:z-10"/>
          <img src={i5} alt="circle" className="-z-10 lg:absolute bottom-20 left-6 "/>
        </div>
      </div>
    </div>
  );
}
