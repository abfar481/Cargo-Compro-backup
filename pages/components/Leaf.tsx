/* eslint-disable @next/next/no-img-element */
import React from 'react'

const Leaf = ({ classID, imageURL }) => {
  return (
    <div className={classID}>
        <img className='leaf object-contain w-20 h-28' src={imageURL} alt="child-components" />
    </div>
  )
}

export default Leaf