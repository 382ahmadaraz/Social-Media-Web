import React from "react";
import Button from "../../../components/button/Button";

export default function Contact() {
  return (
    <div className="mt-11">
      <div className=" flex justify-center  mt-14">
      <h1 className="flex flex-col justify-center items-start text-lg md:text-3xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-semibold text-center">
          GET IN TOUCH
        <hr className="w-[50%] lg:w-[67%] border lg:border-[2px] border-purple-600 rounded-full my-4" />
        </h1>
      </div>
      {/* form  */}
      <div className=" py-5 w-[70%] m-auto shadow-lg bg-slate-50 my-16 ">
        <form className="[&>*]:bg-50 [&>*]: [&>*]:my-5 [&>*]:mx-5 [&>*]:h-[50px] [&>*]:rounded-xl [&>*]:p-3  flex-wrap justify-evenly">
            <input type="text" name="name" placeholder="Your Full Name" className="w-[80%] md:w-[40%] xl:w-[45%]"/>
            <input type="email" name="name" placeholder="Your Email (Required)" className="w-[80%] md:w-[40%] xl:w-[45%]"/>
            <input type="text" name="name" placeholder="Your Phone" className="w-[80%] md:w-[40%] xl:w-[45%]"/>
            <input type="text" name="name" placeholder="Subject" className="w-[80%] md:w-[40%] xl:w-[45%]"/>
            <textarea placeholder="Your Message" className="w-[80%] md:w-[85%] xl:w-[94%]	py-32"/>
        </form>
        <div className="text-center my-9 mb-11">
           <Button title="SUBMIT"/>
        </div>
      </div>
    </div>
  );
}
