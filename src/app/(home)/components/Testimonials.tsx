"use client"

import { motion, useScroll, useTransform } from 'framer-motion'
import { SparklesIcon } from 'lucide-react';
import React, { useRef } from 'react'
import TestiRow from './TestiRow';
import { testimonials } from '@/constant/constant';
import { Three3dPng } from '../../../../public/assets/images/images';

const Testimonials = () => {
  const sectionRef = useRef(null);
  const {scrollYProgress} = useScroll({
      target: sectionRef,
      offset: ['start end', 'end start'],
  })

  const translateY = useTransform(scrollYProgress, [0,1], [150, -150]);
  return (
    <section ref={sectionRef} className='pt-0 pb-20 overflow-x-clip relative'>
        <div className='container mx-auto'>
            <div className='flex flex-col items-center gap-y-5'>
    

         <div className='flex flex-col items-center'>
            <span className='font-[family-name:var(--font-orbitron)] text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-center font-black'>Clients talk about us</span>

         </div>

         <div   className="relative h-auto lg:w-[1300px] overflow-hidden 
  [mask-image:linear-gradient(to_right,transparent,black_70%,black_10%,transparent)] 
  [mask-repeat:no-repeat] [mask-size:100%_100%]
  px-0 md:px-6 lg:px-12 flex flex-col gap-4 md:gap-8 lg:gap-12 py-0 md:py-8">
         <TestiRow
          data={testimonials}
         />

         <div className="hidden md:block">
           <TestiRow
            data={testimonials}
            reverse
           />
         </div>
         </div>

            </div>
        </div>
    </section>
  )
}

export default Testimonials