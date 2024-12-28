import { NavLink } from "react-router-dom";
import OutBtn from "../outlineButton/OutBtn";

export default function ProfileNav2() {
  return (
    <div className="w-[100%] ">
      <ul className="flex items-center justify-center lg:justify-start flex-wrap xl:flex-nowrap gap-2 xl:gap-4 text-[15px]  text-center w-[100%]  ">
        {/* Profile */}
        <li className="flex">
          <NavLink
            to="/profile/accountSetting/profileSection"
            className={({ isActive }) =>
              isActive
                ? "text-pink-500 font-semibold p-2 border-b-2 border-pink-500"
                : " p-2 text-gray-400 "
            }
          >
            Profile
          </NavLink>
        </li>

        {/* Authentication */}
        <li className="flex   ">
          <NavLink
            to="/profile/accountSetting/authentication"
            className={({ isActive }) =>
              isActive
                ? "text-pink-500 font-semibold p-1 border-b-2  border-pink-500"
                : " p-2 text-gray-400 "
            }
          >
            Authentication
          </NavLink>
        </li>

        {/* Security */}
        <li className="flex   ">
          <NavLink
            to="/profile/accountSetting/security"
            className={({ isActive }) =>
              isActive
                ? "text-pink-500 font-semibold  border-b-2  p-1  border-pink-500"
                : " p-2 text-gray-400 "
            }
          >
            Security
          </NavLink>
        </li>

        {/* Privacy */}
        <li className="flex   ">
          <NavLink
            to="/profile/accountSetting/privacy"
            className={({ isActive }) =>
              isActive
                ? "text-pink-500 font-semibold  border-b-2  p-2  border-pink-500"
                : " p-2 text-gray-400  "
            }
          >
            Privacy
          </NavLink>
        </li>

        {/* Billing */}
        <li className="flex   ">
          <NavLink
            to=" "
            className={({ isActive }) =>
              isActive
                ? "text-pink-500 font-semibold  border-b-2  p-2  border-pink-500"
                : " p-2 text-gray-400 "
            }
          >
            Billing
          </NavLink>
        </li>

        {/* btn="Upgrade Plan */}
        <li className="flex   ">
          <NavLink
            to="/upgrade-plan/pricing"
            className={({ isActive }) =>
              isActive
                ? "text-pink-500 font-semibold  border-b-2  border-pink-500"
                : "   text-gray-400 "
            }
          >
            <OutBtn btn="Upgrade Plan" />
          </NavLink>
        </li>

        {/* btn="Reset Password" */}
        <li className="flex   ">
          <NavLink
            to="/profile/accountSetting/reset-password"
            className={({ isActive }) =>
              isActive
                ? "text-pink-500 font-semibold  border-b-2     border-pink-500"
                : "   text-gray-400 "
            }
          >
            <OutBtn btn="Reset Password" />
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
