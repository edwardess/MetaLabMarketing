"use client"
import { SparklesIcon } from 'lucide-react'
import React from 'react'
import CustomRolledUp from './CustomRolledUp'
import { FaLinkedin, FaInstagram, FaFacebook } from 'react-icons/fa'

const Link = () => {
  return (
    <section className='py-20 overflow-x-clip'>
        <div className='container mx-auto'>
            <div className='flex flex-col items-center'>
                 <button 
                    className='w-fit border rounded-2xl px-4 py-1 flex items-center gap-2 hover:bg-gray-50 hover:dark:bg-gray-800 transition-all duration-200 hover:scale-105 select-none bg-transparent'
                    style={{ cursor: 'pointer' }}
                 >
                    <span 
                       className='font-mono text-center select-none pointer-events-none'
                       style={{ cursor: 'pointer' }}
                    >
                       Contact us: <br />(+63) 977 776 9109
                    </span>
                 </button>


         {/* Mobile & Tablet - Social Media Icons */}
         <div className='flex lg:hidden flex-row gap-8 pb-20 mt-10 items-center justify-center'>
            <a
              href="https://www.linkedin.com/company/metalabmarketingstudio"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-200 hover:scale-110"
            >
              <FaLinkedin className="text-3xl text-black dark:text-white" />
            </a>
            <a
              href="https://www.instagram.com/metalabmarketingstudio"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-200 hover:scale-110"
            >
              <FaInstagram className="text-3xl text-black dark:text-white" />
            </a>
            <a
              href="https://www.facebook.com/metalabmarketingstudio"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-200 hover:scale-110"
            >
              <FaFacebook className="text-3xl text-black dark:text-white" />
            </a>
         </div>

         {/* Desktop - CustomRolledUp Text */}
         <div className='hidden lg:flex flex-col text-2xl md:text-9xl pb-20 font-[family-name:var(--font-orbitron)] font-medium text-black dark:text-white mt-10 items-center'>
            <CustomRolledUp/>
         </div>

            </div>
        </div>
    </section>
  )
}

export default Link