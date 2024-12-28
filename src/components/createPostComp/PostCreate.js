import React from "react";
import NewPost from "../newpost/NewPost";
import Preview from "../previewPost/Preview";
import { Link } from "react-router-dom";
import Stream from "../../pages/stream/Stream";

export default function PostCreate() {
  return (
    <div>
      <div className="">
        <div className="absolute bg-black w-[100%] h-[120vh] z-10 opacity-60"></div>
        <Stream />
      </div>

      <div className="absolute top-16 left-11 sm:left-20 lg:left-32 z-20 bg-white rounded-xl p-3 w-[80%]">
        <div className="flex items-center justify-between px-3">
          <p className="text-3xl font-semibold">Create Post</p>
          <Link to={"/stream"}>
            <div className="bg-slate-300  rounded-full w-8 h-8 cursor-pointer">
              <p className="text-gray-500 font-semibold text-xl text-center  ">
                x
              </p>
            </div>
          </Link>
        </div>
        <div className="flex gap-3">
          <NewPost />
          <Preview />
        </div>
      </div>
    </div>
  );
}
