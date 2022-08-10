/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { motion } from 'framer-motion'

const ImgContainer = () => {
  return (
    <motion.div className='bottleWrapper absolute top-0 left-0 grid w-full text-center place-items-center'>
        <img src="../images/air-cargo.png" alt="main-img" className='bottle h-[500px] w-[250px] md:h-[525px] md:w-[525px] object-contain' />
    </motion.div>
  )
}

export default ImgContainer