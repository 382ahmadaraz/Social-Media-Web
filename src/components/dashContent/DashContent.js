import tick from "../../assests/images/check.png";
import Button2 from "../button2/Button2";


export default function DashContent(props) {
  const content = [
    {
      id:1,
      heading: "Manage all of your social medias in one place ",
      detail:
        "Easily keep all of your social media accounts active by publishing to any profile, page, or channel at once. We recommend adding 2 social accounts to start but you can add even more later.      ",
      button:"+ Add Account"
    },
    {
      id:2,
      heading: "Save time by scheduling one post to multiple accounts",
      detail:
        "Scheduling at the right times is one of the best ways to attract new followers and grow engagement. Start off by composing your first post, then schedule it across your social accounts at a recommended time — the more you schedule, the smarter the recommendations.",
      button: "✎ shedule your first project" 
      },
  ];

  return (
    <div className=" w-[100%] mb-8 my-9 md:px-12">
      <div className=" px-2 ">
      {content.map((items,id) => {
        return (
          <div key={id} className="md:m-3 border rounded-lg md:p-5 p-2 my-3 sm:m-5">
            <div className="flex justify-between items-center">
              <h2 className="text-xl md:text-2xl font-semibold md:my-3">{items.heading}</h2>
              <div className="bg-gray-200 rounded-full h-fit ml-2 p-1">
                <img src={tick} alt="tick-mark" />
              </div>
            </div>
            <p className="text-gray-500 text-sm my-2">{items.detail}</p>
            <Button2 title={items.button}/>
          </div>
        );
      })}
      </div>
  </div>
  )
}
