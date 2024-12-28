import SubHeading from "../subHeading/SubHeading";

// border-2 border-black

export default function Preview() {
  return (
    <div className="hidden sm:block w-[37%] h-[80vh]">
      <SubHeading heading="Preview" />
      <div className="p-5 shadow-lg">
        <div className=" flex items-center opacity-70 gap-3">
          <div className="size-10 bg-gray-300 rounded-md"></div>
          <div className="h-[14px] w-[20%] bg-gray-300 rounded-lg"></div>
        </div>
        <div className="w-full h-[14px] bg-gray-300 rounded-lg my-2"></div>
        <div className="w-[20%] h-[14px] bg-gray-300 rounded-lg my-2"></div>
        <div className="flex gap-4 mt-11">
          <div className="h-[14px] w-[20%] bg-gray-300 rounded-lg"></div>
          <div className="h-[14px] w-[20%] bg-gray-300 rounded-lg"></div>
          <div className="h-[14px] w-[20%] bg-gray-300 rounded-lg"></div>
        </div>
      </div>
      <p className="text-[14px] text-center my-3">
        Social networks regularly make updates to formatting, so yours post may
        appear slight different when publish.
        <span className="text-pink-600 cursor-pointer"> Learn more</span>
      </p>
    </div>
  );
}
