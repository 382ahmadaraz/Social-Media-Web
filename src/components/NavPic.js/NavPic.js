import { NavLink } from "react-router-dom";
import profilePic from "../../assests/images/proNav.png";
import camera from "../../assests/images/Camera.png";
import p1 from "../../assests/images/New folder/acc-setting.png";
import p2 from "../../assests/images/New folder/preferrence.png";
import p3 from "../../assests/images/New folder/vanity.png";
import p4 from "../../assests/images/New folder/notify.png";
import p5 from "../../assests/images/New folder/auto-schedule.png";
import p6 from "../../assests/images/New folder/plan.png";
import p7 from "../../assests/images/New folder/acc-manage.png";

export default function NavPic() {
  return (
    <div className=" w-[35%] lg::w-[25%] h-[100vh]">
      <div className="  h-[20%] w-[70%] sm:w-[50%] m-auto">
        <img src={profilePic} alt="profile" />
        <div className="relative left-11 sm:left-16 bottom-9 lg:bottom-11 lg:left-20">
          <img src={camera} alt="cameraa" />
        </div>
      </div>
      <div className="text-center my-3">
        <p className="font-semibold ">Ahmad raza</p>
        <p className="text-pink-600"> Free Plan</p>
      </div>

      <div className=" h-[70%] ">
        <ul className="  [&>*]:w-[85%] [&>*]:p-2 md:text-[15px] text-[12px]">
          {/* Account Setting */}
          <li className="   ">
            <NavLink
              to="/profile/accountSetting"
              className={({ isActive }) =>
                isActive ? "text-pink-500 font-semibold" : "text-gray-400  "
              }
            >
              <div className="flex items-center gap-3">
                <img
                  className="h-[16px] w-[16px] hidden md:block"
                  src={p1}
                  alt=""
                />
                <p>Account Setting</p>
              </div>
            </NavLink>
          </li>

          {/* Preferrence */}
          <li className="   ">
            <NavLink
              to="/profile/preference"
              className={({ isActive }) =>
                isActive ? "text-pink-500 font-semibold" : "text-gray-400  "
              }
            >
              <div className="flex items-center gap-3">
                <img
                  className="h-[16px] w-[16px] hidden md:block"
                  src={p2}
                  alt=""
                />
                Preferrence
              </div>
            </NavLink>
          </li>

          {/* Vanity URLs */}
          <li className=" ">
            <NavLink
              to="/profile/vanity"
              className={({ isActive }) =>
                isActive ? "text-pink-500 font-semibold" : "text-gray-400  "
              }
            >
              <div className="flex items-center gap-3">
                <img
                  className="h-[16px] w-[16px] hidden md:block"
                  src={p3}
                  alt=""
                />
                Vanity URLs
              </div>
            </NavLink>
          </li>

          {/* Notifications */}
          <li className="flex   ">
            <NavLink
              to="/profile/notification"
              className={({ isActive }) =>
                isActive ? "text-pink-500 font-semibold" : "text-gray-400  "
              }
            >
              <div className="flex items-center gap-3">
                <img
                  className="h-[16px] w-[16px] hidden md:block"
                  src={p4}
                  alt=""
                />
                Notifications
              </div>
            </NavLink>
          </li>

          {/* Auto Schedule */}
          <li className="flex   ">
            <NavLink
              to="/profile/auto-schedule"
              className={({ isActive }) =>
                isActive ? "text-pink-500 font-semibold" : "text-gray-400  "
              }
            >
              <div className="flex items-center gap-3">
                <img
                  className="h-[16px] w-[16px] hidden md:block"
                  src={p5}
                  alt=""
                />
                Auto Schedule
              </div>
            </NavLink>
          </li>

          {/* Manage Plan */}
          <li className="flex   ">
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                isActive ? "text-pink-500 font-semibold" : "text-gray-400  "
              }
            >
              <div className="flex items-center gap-3">
                <img
                  className="h-[16px] w-[16px] hidden md:block"
                  src={p6}
                  alt=""
                />
                Manage Plan
              </div>
            </NavLink>
          </li>

          {/* Manage Account */}
          <li className="flex   ">
            <NavLink
              to="/profile/manage-account"
              className={({ isActive }) =>
                isActive ? "text-pink-500 font-semibold" : "text-gray-400  "
              }
            >
              <div className="flex items-center gap-3">
                <img
                  className="h-[16px] w-[16px] hidden md:block"
                  src={p7}
                  alt=""
                />
                Manage Account
              </div>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}
