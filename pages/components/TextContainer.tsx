import React from 'react'

const TextContainer = () => {
  return (
    <div className='textContainer flex flex-col h-full px-2 py-28 md:px-52'>
        {/* Top */}
        <div className="textContainer-top flex items-center justify-between text-lg md:text-2xl">
            <span className='text-green-600'> Transfer your items now </span>
            <span className='first-letter:text-5xl'> 2 / 3 </span>
        </div>

        {/* Center */}
        <div className="textContainer-middle grid flex-1 place-items-start">
            <span className='text-5xl font-black tracking-wider md:text-3xl'> Air, Sea, Land </span>
        </div>

        {/* Bottom */}
        <div className="textContainer-bottom flex items-center justify-between">
            <button className='p-2 text-base tracking-wide text-white bg-blue-500 rounded-sm md:px-6 md:py-2 md:text-lg'> See More </button>
            <p className='text-sm font-semibold md:text-2xl'>
                <span className='text-green-600'> Lorem ipsum </span> dolor sit amet.
            </p>
        </div>
    </div>
  )
}

export default TextContainer