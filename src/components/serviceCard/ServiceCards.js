import Button from "../button/Button";
import CardsData from "./CardsData";
import { Link } from "react-router-dom";

// bg-orange-400 sm:bg-slate-500 md:bg-blue-500 lg:bg-pink-400 xl:bg-red-500 2xl:bg-slate-800
// border-2 border-black

export default function ServiceCards(props) {
  return (
    <div className="p-4 my-16 lg:mt-14 2xl:p-11">
      <h1 className="text-2xl 2xl:text-5xl font-semibold text-center sm:text-4xl">
        OUR SERVICES
      </h1>

      <hr className="my-6 md:mb-11 border-2 w-[20%] m-auto rounded-md border-pink-600" />

      <div className="lg:flex lg:flex-wrap justify-center lg:gap-5 ">
        {CardsData.map((card) => (
          <div
            key={card.id}
            className=" mb-4 p-3 border-[1px] border-gray-300 lg:w-[42%] lg:h-[43%] text-sm  rounded-2xl lg:px-6 lg:py-4"
          >
            <img
              src={card.url}
              alt={card.url}
              className="p-2 lg:p-4 rounded-xl bg-gradient-to-b from-Purple to-Pink lg:h-[70px]"
            />
            <h1 className="text-xl my-2 md:text-2xl 2xl:text-3xl lg:my- font-semibold">
              {card.title}
            </h1>
            <p className=" mb-2 lg:mb-5 sm:text-md  2xl:text-lg text-gray-600 text-[16px] leading-relaxed">
              {card.desc}
            </p>
            <Button title="HIRE US" />
          </div>
        ))}
        <Link to={"/login"}>
          <button class="px-6 py-3 text-sm font-bold md:text-md text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 border-2 border-purple-500 rounded-md ">
            EXPLORE ALL FEATURES
          </button>
        </Link>
      </div>
    </div>
  );
}
