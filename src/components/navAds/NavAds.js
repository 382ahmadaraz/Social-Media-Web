import { NavLink } from "react-router-dom";

export default function NavAds() {
  return (
    <div>
      <ul className="flex justify-evenly gap-3 text-[14px] text-center">
        {/* facebook */}
        <li className="flex   ">
          <NavLink
            to="/advertise/facebook_Boost"
            className={({ isActive }) =>
              isActive
                ? "text-pink-500 font-semibold border border-pink-500 rounded-lg"
                : "text-gray-400 border border-gray-400 rounded-lg "
            }
          >
            <p className="p-1 px-4 ">Facebook Boost</p>
          </NavLink>
        </li>

        {/* Instagram */}
        <li className="flex   ">
          <NavLink
            to="/advertise/instagram_Boost"
            className={({ isActive }) =>
              isActive
                ? "text-pink-500 font-semibold border border-pink-500 rounded-lg"
                : "text-gray-400 border border-gray-400 rounded-lg "
            }
          >
            <p className="p-1 px-4 ">Instagram boost</p>
          </NavLink>
        </li>

        {/* Linked in  */}
        <li className="flex   ">
          <NavLink
            to="/advertise/linkedIn_Boost"
            className={({ isActive }) =>
              isActive
                ? "text-pink-500 font-semibold border border-pink-500 rounded-lg"
                : "text-gray-400 border border-gray-400 rounded-lg "
            }
          >
            <p className="p-1 px-4 ">LinkedIn Boost</p>
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
