import { Link } from "react-router-dom"

export default function Button(props) {
  return (
    <div>
   <Link to={"/login"}> <button className='p-1 px-2 text-sm sm:p-3 sm:px-5 font-semibold sm:text-md lg:text-md 2xl:text-lg bg-gradient-to-b from-Purple to-Pink rounded-md text-white '>{props.title}</button></Link>

    </div>
  )
}
