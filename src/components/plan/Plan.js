import { NavLink } from "react-router-dom";

export default function Plan() {
  return (
    <div>
      <ul className="  flex justify-evenly text-center w-[50%]   ">
        {/* Calender */}
        <li className="flex   ">
          <NavLink
            to="/planner/calendar"
            className={({ isActive }) =>
              isActive
                ? "text-pink-500 font-semibold border-b-2 w-[150px] border-pink-500"
                : "text-gray-400 w-[150px] "
            }
          >
            Calendar
          </NavLink>
        </li>

        {/* Content */}
        <li className="flex   ">
          <NavLink
            to="/planner/content"
            className={({ isActive }) =>
              isActive
                ? "text-pink-500 font-semibold  border-b-2  w-[150px] border-pink-500"
                : "text-gray-400 w-[150px] "
            }
          >
            Content
          </NavLink>
        </li>
      </ul>
      <hr className="mb-5 border w-[94%] m-auto" />
    </div>
  );
}
