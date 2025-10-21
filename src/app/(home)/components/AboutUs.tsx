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
                
                {/* Title */}
                <motion.div 
                    ref={titleRef}
                    className='flex flex-col items-center'
                    initial={{ 
                        opacity: 0, 
                        y: 80,
                        scale: 0.8,
                        rotateX: 45
                    }}
                    animate={isTitleInView ? {
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        rotateX: 0
                    } : {
                        opacity: 0,
                        y: 80,
                        scale: 0.8,
                        rotateX: 45
                    }}
                    transition={{
                        duration: 0.5,
                        ease: [0.25, 0.46, 0.45, 0.94],
                        delay: 0.1
                    }}
                >
                    <motion.span 
                        className='font-[family-name:var(--font-orbitron)] text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-center font-black'
                        initial={{ opacity: 0 }}
                        animate={isTitleInView ? { opacity: 1 } : { opacity: 0 }}
                        transition={{ duration: 0.4, delay: 0.4 }}
                    >
                        About Us
                    </motion.span>
                </motion.div>

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
                                className='space-y-4'
                                initial={{ opacity: 0 }}
                                animate={isTextInView ? { opacity: 1 } : { opacity: 0 }}
                                transition={{ duration: 0.5, delay: 0.4 }}
                            >
                                <motion.h3 
                                    className='text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white'
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
                                    Meet Edward EA
                                </motion.h3>
                                
                                <motion.p 
                                    className='text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed'
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
                                    As the founder and CEO of Meta Lab Marketing Studio, Edward EA brings over a decade of expertise in digital marketing and brand strategy. With a passion for helping businesses unlock their potential, Edward has built a reputation for delivering innovative solutions that drive real results.
                                </motion.p>
                                
                                <motion.p 
                                    className='text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed'
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
                                    transition={{ duration: 0.3, delay: 0.7 }}
                                >
                                    His vision is simple yet powerful: every brand has untapped potential waiting to be discovered. Through strategic social media marketing, creative campaigns, and data-driven insights, Edward and his team transform businesses from good to extraordinary.
                                </motion.p>
                                
                                <motion.p 
                                    className='text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed'
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
                                    transition={{ duration: 0.3, delay: 0.8 }}
                                >
                                    When not crafting marketing strategies, Edward enjoys exploring new technologies, mentoring emerging entrepreneurs, and staying ahead of the ever-evolving digital landscape. His commitment to excellence and innovation continues to drive Meta Lab Marketing Studio forward.
                                </motion.p>
                                
                                <motion.div 
                                    className='pt-4'
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
                                    transition={{ duration: 0.4, delay: 0.9 }}
                                >
                                    <span className='text-sm md:text-base font-semibold text-gray-900 dark:text-white'>
                                        "We don't just follow trends – we create them."
                                    </span>
                                    <p className='text-sm text-gray-600 dark:text-gray-400 mt-1'>
                                        - Edward EA, Founder & CEO
                                    </p>
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
