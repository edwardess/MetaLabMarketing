"use client"

import { SparklesIcon } from 'lucide-react'
import React from 'react'
import CustomCaro from './CustomCaro'

const Work = () => {
  return (
    <section className='py-20 overflow-x-clip '>
        <div className='container mx-auto'>
            <div className='flex flex-col items-center gap-y-5'>
              

         <div className='flex flex-col items-center'>
             <span className='font-[family-name:var(--font-orbitron)] capitalize text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black'>
                Our {" "}
                <span className='dark:text-white text-gray-700'>
                   Social Media Marketing 
                </span>
                {" "}Services
             </span>
       
         
         </div>
      <CustomCaro/>
       
            </div>
        </div>
    </section>
  )
}

export default Work