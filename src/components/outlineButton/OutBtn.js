import React from 'react'

export default function OutBtn(props) {
  return (
    <div>
      <button class="px- lg:px-4 py-1 text-sm font-bold md:text-md text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 border border-purple-500 rounded-md "> {props.btn}</button>
    </div>
  )
}
