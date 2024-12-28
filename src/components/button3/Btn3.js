import React from 'react'

export default function Btn3(props) {
  return (
    <div>
        <select className=' outline-none w-[60px] sm:w-fit border border-purple-600 text-pink-600 p-1 lg:px-2 px-0 rounded-md' >
            <option>{props.title}</option>
            <option>{props.title1}</option>
            <option>{props.title2}</option>
        </select>
 
    </div>
  )
}
