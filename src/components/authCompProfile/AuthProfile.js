import google from "../../assests/images/google.png";
import close from "../../assests/images/Close.png";
import SubHeading from "../subHeading/SubHeading";

export default function AuthProfile() {
  return (
    <div className="p-3">
      <SubHeading heading="Authentication Methods" />
      <form>
        <label className="text-[12px] sm:text-lg font-medium">
          Current Authentication Methods
        </label>
        <div className="p-2 border md:w-[60%] flex items-center justify-between">
          <div className="gap-2 w-[80%] flex items-center">
            <img src={google} alt="Google" />
            <input
              type="email"
              placeholder="ahmadraza@gmail.com"
              className="outline-none p-1 w-[90%] "
            />
          </div>
          <img src={close} alt="closeTick" className="cursor-pointer" />
        </div>
      </form>
    </div>
  );
}
