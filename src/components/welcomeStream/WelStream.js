import { Link } from "react-router-dom";
import streamImg from "../../assests/images/stream.png";
import Button2 from "../button2/Button2";
import SubHeading from "../subHeading/SubHeading";

// border-2 border-black
export default function WelStream() {
  return (
    <div className="border h-[80vh] m-9 flex flex-col items-center justify-center text-center shadow-xl rounded-xl">
      <img src={streamImg} alt="stream" />

      <SubHeading heading="Welcome Ahmad Raza" />
      <p className="text-gray-500 text-md mb-4 px-3">
        Add boards and streams to keep up with social conversations, trends,
        competitor activity, <br className="hidden lg:block" />
        and brand mentions that matter to you.
      </p>
      <Link to={"/post-create"}>
        <Button2 title="✔ Get Started" />
      </Link>
    </div>
  );
}
