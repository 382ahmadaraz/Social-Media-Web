import tableData from "./Table";
import Tick from "../../../assests/price-pg/Path_888.png";
import Button from "../../../components/button/Button";

export default function Ptable(detail) {
  return (
    // nested Map Function used

    <div className="flex justify-evenly lg:justify-between flex-wrap">
      {tableData.map((index) => {
        return (
          <div
            key={index.btn}
            className="border-2 p-2 mb-3 md:p-4 lg:w-[24%] rounded-xl h-fit text-sm leading-9 2xl:text-lg 2xl:leading-loose "
          >
            <h2 className="text-center my-7">{index.btn}</h2>
            <p className="text-4xl text-center mb-9">
              <sup className="text-[20px] text-gray-300">$</sup>
              {index.price}
              <sub className="text-[17px] text-gray-300">/month</sub>
            </p>

            {/* second Map  */}
            {index.detail.map((detail, id) => {
              return (
                <div key={id}>
                  <p className="flex items-center text-slate-500">
                    <img
                      src={Tick}
                      alt="tick mark"
                      className="w-[13px] h-[10px] mr-2"
                    />
                    {detail}
                  </p>
                </div>
              );
            })}
            <div className="text-center my-3 mt-5">
              <Button title="SUBSCRIBE" />
            </div>
          </div>
        );
      })}
    </div>
  );
}
