import content from "../../assests/images/content.png";
import SubHeading from "../subHeading/SubHeading";
import Button2 from "../button2/Button2";
import NavContent from "../navContent/NavContent";
import { Link } from "react-router-dom";

// border-2 border-black
export default function ContentComp() {
  return (
    <div >
      <NavContent />
      <div className="flex flex-col items-center text-center p-9 lg:p-24">
        <div>
          <img src={content} alt="placeholder" />
        </div>
        <SubHeading heading="Save time by scheduling posts" />
        <p className="mb-4">
          Create your posts in advance, then schedule up to 5 posts to publish
          automatically <br />
          throughout the week.
        </p>
        <Link to={"/post-create"}>
          <Button2 title="Schedule a post" />
        </Link>
      </div>
    </div>
  );
}
