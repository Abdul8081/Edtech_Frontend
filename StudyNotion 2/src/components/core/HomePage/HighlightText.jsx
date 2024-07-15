import React from 'react'

const HighlightText = ({text}) => {
  return (
    <span className='font-bold text-richblue-200'>
        {" "}
        {/* this above is added for the space */}
        {text}
    </span>
  )
}

export default HighlightText
