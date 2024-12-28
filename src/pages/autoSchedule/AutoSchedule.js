import Sidebar from "../../components/sidebar/Sidebar";
import Hero from "../../components/heroHeader/Hero";
import NavPic from "../../components/NavPic.js/NavPic";
import SubHeading from "../../components/subHeading/SubHeading";
import Button2 from "../../components/button2/Button2";

export default function AutoSchedule() {
  return (
    <div>
      <div className="md:flex flex-row ">
        <Sidebar />
        <div className="w-[100%]">
          <Hero title="Profile" descryption="Get details about your profile." />

          <div className="flex mt-7 w-[100%]">
            <NavPic />
            <div className="w-[75%] p-4 text-gray-600 h-[79%]">
              <SubHeading heading="Auto Schedule" />
              <p className="mb-8">
                Schedule upto{" "}
                <select className="mx-1 outline-none border rounded-md">
                  <option>5</option>
                  <option>4</option>
                  <option>3</option>
                  <option>2</option>
                  <option>1</option>
                </select>{" "}
                post per day between
                <select className="mx-1 outline-none border rounded-md">
                  <option>8 AM</option>
                  <option>9 AM</option>
                  <option>10 AM</option>
                  <option>11 AM</option>
                  <option>12 AM</option>
                </select>{" "}
                to
                <select className="mx-1 outline-none border rounded-md">
                  <option>7 PM</option>
                  <option>8 PM</option>
                  <option>9 PM</option>
                  <option>10 PM</option>
                  <option>11 PM</option>
                </select>
                .
              </p>
              <form>
                <label className="font-medium">
                  Select the days you want posts to be scheduled on:
                </label>
                <div>
                  <div className="flex gap-2">
                    <input type="checkbox" />
                    <p>Sunday</p>
                  </div>

                  <div className="flex gap-2">
                    <input type="checkbox" />
                    <p>Monday</p>
                  </div>

                  <div className="flex gap-2">
                    <input type="checkbox" />
                    <p>Tuesday</p>
                  </div>

                  <div className="flex gap-2">
                    <input type="checkbox" />
                    <p>Wednesday</p>
                  </div>

                  <div className="flex gap-2">
                    <input type="checkbox" />
                    <p>Thursday</p>
                  </div>

                  <div className="flex gap-2">
                    <input type="checkbox" />
                    <p>Friday</p>
                  </div>

                  <div className="flex gap-2">
                    <input type="checkbox" />
                    <p>Saturday</p>
                  </div>

                  <div className="w-[70%] text-end">
                    <Button2 title="Save Setting" />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <p className="text-gray-400 w-[70%] text-center mt-3 mb-2">
        Social Medias Developed by Ahmad Raza &copy; 2022
      </p>
    </div>
  );
}
