import Button from "../../../components/button/Button";
import faqs from "./FaqsData";

export default function FaqsMap() {
  return (
    <div className="container p-2 py-4 md:p-6 md:w-[90%] m-auto shadow-xl">
      <p className="text-lg md:pl-4 md:text-2xl font-semibold lg:pl-14">Questions</p>

      {faqs.map((index) => {
        return (
          <div key={index.id} className="w-[100%] md:w-[90%] m-auto">
            <div className="flex justify-between my-5 font-semibold">
              <p className="2xl:text-2xl">{index.Q}</p>
              <img src={index.img} alt="plus-icon" className="h-[24px]"/>
            </div>
            <hr className="border mb-11" />
          </div>
        );
      })}
      <div className="text-center">
      <Button title="ASK A QUESTION"/>
</div>
    </div>
  );
}
