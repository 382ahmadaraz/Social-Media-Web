import Navbar from "../../components/navbar/Navbar";
import msg from "../../assests/FAQS/msg.png";
import FaqsMap from "../../pageComponents/FAQS/questions/FaqsMap";
import Contact from "../../pageComponents/FAQS/conatct/Contact";
import Footer from "../../components/footer/Footer";

export default function Faq() {
  return (
    <div>
      <Navbar />
      <div className="price-head flex justify-center  m-auto mt-14">
        <h1 className="flex flex-col justify-center items-start text-lg md:text-3xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-semibold text-center">
          FREQUENTLY ASKED QUESTIONS
        <hr className="w-[50%] lg:w-[67%] border lg:border-[2px] border-purple-600 rounded-full my-4" />
        </h1>
      </div>
      <p className="text-center text-sm lg:text-lg font-medium text-gray-700 my-10 mb-14">
        We provide best Marketing services.
      </p>

      <div className="text-center w-[23%] p-2 m-auto">
        <img src={msg} alt="imagea" />
      </div>
      <div className=" p-11">
        <FaqsMap />
      </div>
      <Contact />
      <Footer />
    </div>
  );
}
