"use client"

import { useScroll, useTransform, motion } from 'framer-motion';
import { SparklesIcon } from 'lucide-react';
import React, { useRef } from 'react'
import FaqCards from './FaqCards';
import { faq } from '@/constant/constant';
import { Three3dPng } from '../../../../public/assets/images/images';

const Faq = () => {
  const sectionRef = useRef(null);
  const {scrollYProgress} = useScroll({
      target: sectionRef,
      offset: ['start end', 'end start'],
  })

  const translateY = useTransform(scrollYProgress, [0,1], [350, -350]);
  return (
    <section ref={sectionRef} className='py-20 overflow-x-clip relative'>
        <div className='container mx-auto'>
            <div className='flex flex-col items-center gap-y-5'>
                <div className='w-fit border rounded-2xl px-4 py-1 flex items-center gap-2'>
         <SparklesIcon className='fill-[#EEBDE0] stroke-1 text-neutral-800' />
         <span className='font-mono'>FAQ</span></div>

         <div className='flex flex-col items-center'>
             <span className='text-4xl md:text-7xl text-center font-black font-[family-name:var(--font-orbitron)]'>
                All you need to { " " } <span className='dark:text-amber-200 text-amber-200 '>Know.</span>
             </span>
             <p className='font-mono text-xs md:text-lg text-center mt-2'>Quick insights before you dive in.</p>
         </div>

         <div className='flex flex-col max-w-xl mx-auto justify-center mt-0 px-5 md:px-0'>
            <FaqCards data={faq} />
         </div>
            </div>

            <motion.img
             src={Three3dPng.Three3d1.src}
             alt=''
             width={262}
             height={262}
             style={{translateY}}
             className='hidden md:block absolute right-32 -top-2'
             
            />

              <motion.img
             src={Three3dPng.Three3d2.src}
             alt=''
             width={262}
             height={262}
             style={{translateY}}
             className='hidden md:block absolute bottom-24 left-20'
             
            />
        </div>
    </section>
  )
}

export default Faq