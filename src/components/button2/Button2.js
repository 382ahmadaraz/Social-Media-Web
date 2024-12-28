import React from 'react'


export default function Button2(props) {
  return (
    <div>
      <button className='py-1 px-2 text-[11px] sm:p-1 border-purple-600 border sm:px-2 font-semibold sm:text-[15px] lg:text-md 2xl:text-lg bg-gradient-to-b from-Purple to-Pink rounded-md text-white '>{props.title}</button>
    </div>
  )
}
