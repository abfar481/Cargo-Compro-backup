import React from 'react'
import Leaf from './Leaf'

const LeavesContainer = () => {
  return (
    <div>
        <Leaf classID='leafWrapper-1 absolute top-52 left-[30%]' imageURL='' />
        <Leaf classID='leafWrapper-2 absolute top-1/2 right-72' imageURL='' />
        <Leaf classID='leafWrapper-3 absolute top-10 right-[40%]' imageURL='' />
        <Leaf classID='leafWrapper-4 absolute top-[36%] right-1/3' imageURL='' />
        <Leaf classID='leafWrapper-5 absolute top-[75%] left-1/4' imageURL='' />
    </div>
  )
}

export default LeavesContainer