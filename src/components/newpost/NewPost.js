import Smile from "../../assests/images/SmileOutlined.png";
import SubHeading from "../subHeading/SubHeading";
import Picture from "../../assests/images/picture.png";
import Book from "../../assests/images/openBook.png";
import OutBtn from "../outlineButton/OutBtn";
import Button2 from "../button2/Button2";

export default function NewPost() {
  return (
    <div className="w-[90%] shadow-lg sm:w-[56%] h-[90vh] px-5">
      <SubHeading heading="New Post" />
      <form>
        <label className="font-semibold">Publish to</label>
        <div className="my-3">
          <select className="border w-full rounded-md p-2 text-[14px] h-10 mb-5 outline-none">
            <option className="">Select a Social Account</option>
            <option>Facebook</option>
            <option>Twitter</option>
            <option>Instagram</option>
            <option>LinkedIn</option>
          </select>
        </div>
        <label className="font-semibold ">Content</label>
        <div className="border my-3">
          <textarea
            className="border w-full rounded-md p-2 text-[14px] h-28 outline-none border-none"
            placeholder="Enter Your links and text..."
          ></textarea>
          <div className="text-end flex items-center gap-1 justify-end [&>*]:cursor-pointer">
            <img src={Smile} alt="Smile" className="h-[12px]" />
            <p className="text-pink-700">#</p>
          </div>
        </div>
        <div className="flex justify-between py-5 [&>*]:cursor-pointer">
          <div className="flex justify-center items-center border-2 border-dashed h-20 w-[48%] ">
            <img src={Picture} alt="picPicture" className="h-[40px] w-[40px]" />
          </div>
          <div className="flex justify-center items-center border-2 border-dashed h-20 w-[48%]">
            <img src={Book} alt="openbook" className="h-[40px] w-[40px]" />
          </div>
        </div>
        <div className="flex items-center justify-end gap-3 ">
          <OutBtn btn="Schedule for later" />
          <Button2 title="Post Now" />
        </div>
      </form>
    </div>
  );
}
