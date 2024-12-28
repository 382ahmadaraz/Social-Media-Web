import Btn3 from "../button3/Btn3";
import bar from "../../assests/images/bar.png";
import book from "../../assests/images/book.png";
import date from "../../assests/images/date.png";
import lt from "../../assests/images/lt.png";
import gt from "../../assests/images/gt.png";
import setting from "../../assests/images/setting.png";
import l0 from "../../assests/images/l0.png";

export default function Clndr() {
  return (
    <div>
      {/* Calander navbar */}
      <div className=" w-[100%]">
        <div className="w-[100%] flex items-center gap-1 lg:gap-3 [&>*]:cursor-pointer xl:px-8 lg:px-3">
          <Btn3 title="Social accounts" title1="Linked In" title2="Facebook" />
          <div className="hidden md:block">
            <Btn3 title="Post Status" title1="Linked In" title2="Facebook" />
          </div>
          <div className="md:hidden lg:block">
            <img src={bar} alt="menubar" className="h-[20px]" />
          </div>
          <img src={book} alt="bookIcon" className="h-[20px]" />
          <div className="md:hidden lg:block">
            <img src={date} alt="dateCalender" className="h-[20px]" />
          </div>
          <Btn3 title="Today" title1="Week" title2="Month" />
          <img src={lt} alt="dateCalender" className="h-[20px]" />
          <img src={gt} alt="dateCalender" className="h-[20px]" />
          <Btn3
            title="Jan 1-7,2024"
            title1="Jan 8-17,2024"
            title2="Jan 18-27,2024"
          />
          <img src={setting} alt="dateCalender" className="h-[20px]" />
        </div>

{/* Table start here */}
        <table className="border w-[100%] mt-9">
          <tbody className=" ">
            <tr className="h-fit [&>*]:border ">
              <th className="w-[6%] text-[12px] md:text-sm">
                GMT <br /> +05:00
              </th>
              <td className="w-[14%] p-1">
                <div className="flex items-center justify-between text-gray-400">
                  <p>Sun </p>
                  <img
                    src={l0}
                    alt="lightZero"
                    className="hidden md:block"
                  />{" "}
                </div>
                <br />{" "}
                <p className="sm:text-3xl text-xl font-semibold text-gray-400">
                  8
                </p>
              </td>
              <td className="w-[14%] p-1">
                <div className="flex items-center justify-between text-gray-400">
                  {" "}
                  <p>Mon </p>
                  <img
                    src={l0}
                    alt="lightZero"
                    className="hidden md:block"
                  />{" "}
                </div>
                <br />{" "}
                <p className="sm:text-3xl text-xl font-semibold text-gray-400">
                  9
                </p>{" "}
              </td>
              <td className="w-[14%] p-1 bg-gray-300 ">
                <div className="flex items-center justify-between">
                  <p>Tue </p>
                  <img
                    src={l0}
                    alt="lightZero"
                    className="hidden md:block"
                  />{" "}
                </div>
                <br /> <p className="sm:text-3xl text-xl font-semibold">10</p>{" "}
              </td>
              <td className="w-[14%] p-1">
                <div className="flex items-center justify-between">
                  <p>Wed </p>
                  <img
                    src={l0}
                    alt="lightZero"
                    className="hidden md:block"
                  />{" "}
                </div>
                <br /> <p className="sm:text-3xl text-xl font-semibold">11</p>
              </td>
              <td className="w-[14%] p-1">
                <div className="flex items-center justify-between">
                  <p>Thr </p>
                  <img
                    src={l0}
                    alt="lightZero"
                    className="hidden md:block"
                  />{" "}
                </div>
                <br /> <p className="sm:text-3xl text-xl font-semibold">12</p>{" "}
              </td>
              <td className="w-[14%] p-1">
                <div className="flex items-center justify-between">
                  {" "}
                  <p>Fri </p>
                  <img
                    src={l0}
                    alt="lightZero"
                    className="hidden md:block"
                  />{" "}
                </div>
                <br /> <p className="sm:text-3xl text-xl font-semibold">13</p>{" "}
              </td>
              <td className="w-[14%] p-1">
                <div className="flex items-center justify-between">
                  <p>Sat </p>
                  <img
                    src={l0}
                    alt="lightZero"
                    className="hidden md:block"
                  />{" "}
                </div>
                <br /> <p className="sm:text-3xl text-xl font-semibold">14</p>{" "}
              </td>
            </tr>
            <tr className="[&>*]:border  h-[50px]">
              <th className="text-[12px] sm:text-sm">12 AM</th>
              <td></td>
              <td></td>
              <td className="bg-gray-200 "></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr className="[&>*]:border   h-[50px]">
              <th className="text-sm">1 AM</th>
              <td></td>
              <td></td>
              <td className="bg-gray-200 opacity-70"></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr className="[&>*]:border  h-[50px]">
              <th className="text-sm">2 AM</th>
              <td></td>
              <td></td>
              <td className="bg-gray-100"></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr className="[&>*]:border  h-[50px]">
              <th className="text-sm">3 AM</th>
              <td></td>
              <td></td>
              <td className="bg-gray-100"></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr className="[&>*]:border  h-[50px]">
              <th className="text-sm">4 AM</th>
              <td></td>
              <td></td>
              <td className="bg-gray-50"></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr className="[&>*]:border  h-[50px]">
              <th className="text-sm">5 AM</th>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr className="[&>*]:border  h-[50px]">
              <th className="text-sm">6 AM</th>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr className="[&>*]:border  h-[50px]">
              <th className="text-sm">7 AM</th>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr className="[&>*]:border  h-[50px]">
              <th className="text-sm">8 AM</th>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr className="[&>*]:border  h-[50px]">
              <th className="text-sm">9 AM</th>
              <th></th>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr className="[&>*]:border  h-[50px]">
              <th className="text-sm">10 AM</th>
              <th></th>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr className="[&>*]:border  h-[50px]">
              <th className="text-sm">11 AM</th>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
