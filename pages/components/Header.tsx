import React from 'react'
import { motion } from 'framer-motion'

const Header = () => {

  return (
    <motion.nav  initial="initial" animate="animate" className="header h-[10vh] flex items-center px-10 py-4 md:px-20 text-lg justify-between">
      <span className="header-logo font-black md:text-2xl"> PT BSL </span>
      <ul className='justify-center flex-1 hidden space-x-5 md:flex'>
        <li> <a href="#">ABOUT</a> </li>
        <li> PORTFOLIO </li>
        <li> CONTACT </li>
      </ul>

      <span className="header-account hidden font-medium md:block"> My Account </span>
      <span className="header-user hidden md:block ml-5">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </span>
    </motion.nav>
  )
}

export default Header