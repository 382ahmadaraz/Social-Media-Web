import ideaCard from "./ideasData";

export default function Ideas() {
  return (
    <div className="p-3 shadow-xl rounded-xl flex flex-wrap lg:gap-4 gap-3">
      {ideaCard.map((id) => {
        return (
          <div
            key={id}
            className="border rounded-xl flex w-full xl:w-[49%] text-[14px]"
          >
            <img
              src={id.img}
              alt="cardImg"
              className="h-[100%] w-[30%] lg:h-[155px] lg:w-[130px] lg:mr-5 mr-3 rounded-xl"
            />
            <div>
              <div className=" h-[100px] sm:pt-3">
                <h1 className="font-bold sm:text-xl lg:text-lg">{id.title}</h1>
                <p className="text-[12px] sm:text-[14px]">{id.desc}</p>
              </div>

              <div className="flex items-end mt-3 h-fit gap-2">
                <button>{id.btn}</button>
                <button>{id.btn1}</button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
