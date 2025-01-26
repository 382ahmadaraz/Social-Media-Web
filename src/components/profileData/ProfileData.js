import Button2 from "../button2/Button2";

export default function ProfileData() {
  return (
    <div className="w-[98%] ">
      <form className="flex flex-wrap p-3 [&>*]:bg-gray-50 [&>*]:p-3 gap-4">
        <input
          type="text"
          value="First Name"
          className="p-3 w-[100%] sm:w-[45%]"
        />
        <input
          type="text"
          value="Last Name"
          className="p-3 w-[100%] sm:w-[45%]"
        />
        <input
          type="email"
          value="Your Email"
          className="p-3 w-[100%] sm:w-[45%]"
        />
        <input
          type="password"
          value="Password"
          className="p-3 w-[100%] sm:w-[45%]"
        />
        <select className=" outline-none bg-gray-50 w-[100%] sm:w-[45%]">
          <option>Your Country</option>
          <option>Pakistan</option>
          <option>India</option>
          <option>Australia</option>
        </select>
        <input
          type="text"
          value="Mobile Number"
          className="p-3 w-[100%] sm:w-[45%]"
        />
        <input
          type="text"
          value="Bio/Discryption"
          className="p-3 w-[100%] sm:w-[92%]"
        />
        <input
          type="text"
          value="Company Name"
          className="p-3 w-[100%] sm:w-[45%]"
        />
        <input
          type="text"
          value="Job Title"
          className="p-3 w-[100%] sm:w-[45%]"
        />
        <select className="w-[45%] outline-none bg-gray-50">
          <option>Time Zone</option>
          <option>Pakistan</option>
          <option>India</option>
          <option>Australia</option>
        </select>
        <input
          type="text"
          value="Twitter Account Link"
          className="p-3 w-[45%]"
        />
        <input
          type="text"
          value="Facebook Account Link"
          className="p-3 w-[45%]"
        />
        <input
          type="text"
          value="LinkedIn Account Link"
          className="p-3 w-[45%]"
        />

      </form>
        <div className="flex justify-end w-[90%]">
          <Button2 title="Edit Details" />
        </div>
    </div>
  );
}
