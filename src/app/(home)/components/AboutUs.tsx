"use client"

import { motion, useScroll, useTransform, useInView } from 'framer-motion'
import React, { useRef } from 'react'
import Image from 'next/image'

const AboutUs = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const imageRef = useRef(null);
  const textRef = useRef(null);
  
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const isTitleInView = useInView(titleRef, { once: true, margin: "-50px" });
  const isImageInView = useInView(imageRef, { once: true, margin: "-50px" });
  const isTextInView = useInView(textRef, { once: true, margin: "-50px" });
  
  return (
    <section ref={sectionRef} className='pt-0 pb-0 md:py-20 overflow-x-clip relative'>
        <div className='container mx-auto'>
            <div className='flex flex-col items-center gap-y-8'>
                

                {/* Content Container */}
                <div className="relative h-auto lg:w-[1300px] px-6 lg:px-12 py-8">
                    
                    <div className='flex flex-col lg:flex-row items-center gap-8 lg:gap-12'>
                        
                        {/* Image Column - bigger width - Shows first on mobile/tablet */}
                        <motion.div 
                            ref={imageRef}
                            className='flex-1 lg:flex-[2] flex justify-center lg:justify-end order-1 lg:order-2'
                            initial={{ 
                                opacity: 0, 
                                x: -120,
                                scale: 0.9,
                                rotateY: -15
                            }}
                            animate={isImageInView ? {
                                opacity: 1,
                                x: 0,
                                scale: 1,
                                rotateY: 0
                            } : {
                                opacity: 0,
                                x: -120,
                                scale: 0.9,
                                rotateY: -15
                            }}
                            transition={{
                                duration: 0.6,
                                ease: [0.25, 0.46, 0.45, 0.94],
                                delay: 0.2
                            }}
                        >
                            <motion.div
                                initial={{ 
                                    scale: 0.8,
                                    filter: "blur(10px)"
                                }}
                                animate={isImageInView ? {
                                    scale: 1,
                                    filter: "blur(0px)"
                                } : {
                                    scale: 0.8,
                                    filter: "blur(10px)"
                                }}
                                transition={{
                                    duration: 0.7,
                                    ease: [0.25, 0.46, 0.45, 0.94],
                                    delay: 0.3
                                }}
                            >
                                <Image
                                    src="/assets/images/ceo.webp"
                                    alt="Edward EA - CEO of Meta Lab Marketing Studio"
                                    width={500}
                                    height={500}
                                    priority
                                />
                            </motion.div>
                        </motion.div>
                        
                        {/* Text Column - more width - Shows second on mobile/tablet */}
                        <motion.div 
                            ref={textRef}
                            className='flex-1 lg:flex-[3] space-y-6 order-2 lg:order-1'
                            initial={{ 
                                opacity: 0, 
                                x: 120,
                                scale: 0.95
                            }}
                            animate={isTextInView ? {
                                opacity: 1,
                                x: 0,
                                scale: 1
                            } : {
                                opacity: 0,
                                x: 120,
                                scale: 0.95
                            }}
                            transition={{
                                duration: 0.6,
                                ease: [0.25, 0.46, 0.45, 0.94],
                                delay: 0.3
                            }}
                        >
                            <motion.div 
                                className='space-y-6'
                                initial={{ opacity: 0 }}
                                animate={isTextInView ? { opacity: 1 } : { opacity: 0 }}
                                transition={{ duration: 0.5, delay: 0.4 }}
                            >
                                <motion.div
                                    initial={{ 
                                        opacity: 0, 
                                        y: 30,
                                        filter: "blur(5px)"
                                    }}
                                    animate={isTextInView ? {
                                        opacity: 1,
                                        y: 0,
                                        filter: "blur(0px)"
                                    } : {
                                        opacity: 0,
                                        y: 30,
                                        filter: "blur(5px)"
                                    }}
                                    transition={{ duration: 0.4, delay: 0.5 }}
                                >
                                    <h3 className='text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white'>
                                        Edward EA
                                    </h3>
                                    <p className='text-lg md:text-xl text-gray-600 dark:text-gray-400 font-medium'>
                                        CEO
                                    </p>
                                </motion.div>
                                
                                <motion.div 
                                    className='space-y-4'
                                    initial={{ 
                                        opacity: 0, 
                                        y: 20,
                                        filter: "blur(3px)"
                                    }}
                                    animate={isTextInView ? {
                                        opacity: 1,
                                        y: 0,
                                        filter: "blur(0px)"
                                    } : {
                                        opacity: 0,
                                        y: 20,
                                        filter: "blur(3px)"
                                    }}
                                    transition={{ duration: 0.3, delay: 0.6 }}
                                >
                                    <p className='text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed'>
                                        At Meta Lab Marketing Studio, we don't just craft strategies. We build systems that work, so you can rest easy knowing your growth is always in motion.
                                    </p>
                                    
                                    <p className='text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed'>
                                        We blend creativity, psychology, and data to deliver a first-class experience that feels less like outsourcing and more like having your own in-house marketing team.
                                    </p>
                                </motion.div>
                                
                                {/* Stats Buttons */}
                                <motion.div 
                                    className='flex flex-row gap-6 pt-6'
                                    initial={{ 
                                        opacity: 0, 
                                        y: 20,
                                        scale: 0.95
                                    }}
                                    animate={isTextInView ? {
                                        opacity: 1,
                                        y: 0,
                                        scale: 1
                                    } : {
                                        opacity: 0,
                                        y: 20,
                                        scale: 0.95
                                    }}
                                    transition={{ duration: 0.4, delay: 0.8 }}
                                >
                                    {/* 5+ Years Button */}
                                    <div className='flex flex-col items-center'>
                                        <div className='w-20 h-20 bg-black dark:bg-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-200 dark:border-gray-700'>
                                            <span className='text-2xl font-bold text-white dark:text-black'>5+</span>
                                        </div>
                                        <p className='text-base text-gray-600 dark:text-gray-400 mt-3 text-center'>
                                            years on the<br />market
                                        </p>
                                    </div>
                                    
                                    {/* 30+ Projects Button */}
                                    <div className='flex flex-col items-center'>
                                        <div className='w-20 h-20 bg-black dark:bg-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-200 dark:border-gray-700'>
                                            <span className='text-2xl font-bold text-white dark:text-black'>30+</span>
                                        </div>
                                        <p className='text-base text-gray-600 dark:text-gray-400 mt-3 text-center'>
                                            projects<br />completed
                                        </p>
                                    </div>
                                </motion.div>
                            </motion.div>
                        </motion.div>
                        
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default AboutUs
