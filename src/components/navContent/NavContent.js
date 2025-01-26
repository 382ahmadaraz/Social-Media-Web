import { NavLink } from "react-router-dom";

export default function NavContent() {
  return (
    <div>
      <ul className=" flex lg:justify-evenly justify-center gap-1 flex-wrap text-center w-[100%] xl:w-[82%] text-[14px]">
        {/* Schedule */}
        <li className="flex">
          <NavLink
            to="/planner/content/schedule"
            className={({ isActive }) =>
              isActive
                ? "text-pink-500 font-semibold border border-pink-500 rounded-lg"
                : "text-gray-400 border border-gray-400 rounded-lg "
            }
          >
            <p className="p-1 :lg:px-4 ">Schedule</p>
          </NavLink>
        </li>

        {/* Post Schedule */}
        <li className="flex">
          <NavLink
            to="/planner/content/Post-schedule"
            className={({ isActive }) =>
              isActive
                ? "text-pink-500 font-semibold border border-pink-500 rounded-lg"
                : "text-gray-400 border border-gray-400 rounded-lg "
            }
          >
            <p className="p-1 px-4 "> Post Schedule</p>
          </NavLink>
        </li>

        {/* Require Approvals */}
        <li className="flex">
          <NavLink
            to="/planner/content/require-Approval"
            className={({ isActive }) =>
              isActive
                ? "text-pink-500 font-semibold border border-pink-500 rounded-lg"
                : "text-gray-400 border border-gray-400 rounded-lg "
            }
          >
            <p className="p-1 px-4 "> Require Approvals</p>
          </NavLink>
        </li>

        {/* Expired Approvals */}
        <li className="flex">
          <NavLink
            to="/planner/content/expire-approval"
            className={({ isActive }) =>
              isActive
                ? "text-pink-500 font-semibold border border-pink-500 rounded-lg"
                : "text-gray-400 border border-gray-400 rounded-lg "
            }
          >
            <p className="p-1 px-4 "> Expired Approvals</p>
          </NavLink>
        </li>

        {/* Rejected */}
        <li className="flex">
          <NavLink
            to="/planner/content/rejected"
            className={({ isActive }) =>
              isActive
                ? "text-pink-500 font-semibold border border-pink-500 rounded-lg"
                : "text-gray-400 border border-gray-400 rounded-lg "
            }
          >
            <p className="p-1 px-4 "> Rejected</p>
          </NavLink>
        </li>

        {/* Bulk Message Upload */}
        <li className="flex">
          <NavLink
            to="/planner/content/bulk"
            className={({ isActive }) =>
              isActive
                ? "text-pink-500 font-semibold border border-pink-500 rounded-lg"
                : "text-gray-400 border border-gray-400 rounded-lg "
            }
          >
            <p className="p-1 px-4 ">Bulk Message Upload</p>
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
