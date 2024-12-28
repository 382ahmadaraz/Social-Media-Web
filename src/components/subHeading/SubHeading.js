import React from 'react'

export default function SubHeading(props) {
  return (
    <div>
      <h1 className='text-xl font-semibold md:text-3xl my-5'>{props.heading}</h1>
    </div>
  )
}
