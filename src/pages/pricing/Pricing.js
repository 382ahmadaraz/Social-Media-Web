import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import Letter from "../../components/newsletter/Letter";
import Ptable from "../../pageComponents/pricing/table/Ptable";

export default function Pricing() {
  return (
    <div>
      <Navbar />
      <div className="price-main  mt-14 ">
        <div className="price-head lg:w-[10%] m-auto ">
          <h1 className="text-xl  md:text-4xl font-semibold text-center">
            PRICING
          </h1>
          <hr className="w-[20%] m-auto md:w-[67%] border-[2px] border-purple-600 rounded-full my-4" />
        </div>
        <p className="text-center text-lg font-medium text-gray-700 my-10 mb-14">
          Our pricing plans are fair, upfront, and transparent.
        </p>

        {/* cards  */}
        <div className="mx-8 lg:mx-11">
          <Ptable />
        </div>
        <Letter />
        <Footer />
      </div>
    </div>
  );
}
