'use client'

import MaskedDiv from '@/components/ui/masked-div'

import { SparklesIcon } from 'lucide-react'
import React, { useEffect, useState } from 'react'

const ComponentsShowcase = () => {
  const [text, setText] = useState('');
  const [sloganIndex, setSloganIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
     const slogans = [
     'We Satisfy the soul..',
    '........',
    'These are not just designs',
    '..........',
    'These are emotions...'
     ];

     const current = slogans[sloganIndex];
     if(charIndex < current.length) {
          const timeout = setTimeout(() => {
             setText((prev) => prev + current[charIndex]);
             setCharIndex(charIndex + 1);
          }, 80);

          return () => clearTimeout(timeout);

     } else {
         const delay = setTimeout(() => {
            setText('');
            setCharIndex(0);
            setSloganIndex((prev) => (prev + 1) & slogans.length)
         }, 1800);

         return () => clearTimeout(delay)
     }
    
  },[charIndex, sloganIndex])
  return (
    <section className='pt-20 pb-20 overflow-x-clip'>
        <div className='container mx-auto px-4 md:px-6 lg:px-8'>
            <div className='flex flex-col items-center'>
            <div className='flex flex-col items-center'>
            <span className='font-[family-name:var(--font-orbitron)] text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-center font-black pb-5'>We don't spot trends, we spark them</span>

         </div>
  
             <div className='mt-5'> 
       <MaskedDiv  maskType="type-4" className="my-4">
        <video
          className="cursor-pointer transition-all duration-300 hover:scale-105"
          autoPlay
          loop
          muted
        >
         <source
            src="https://file.garden/aPghh4sL7CGaPK8H/1stcolumn-final.mp4"
            type="video/mp4"
          />
        </video>
      </MaskedDiv>
       </div>

       {/* Desktop Layout - 3 videos in one row */}
       <div className='hidden md:flex items-center justify-between mt-10'>
        <MaskedDiv maskType="type-1" size={0.25}  >
        <video
          className="cursor-pointer transition-all duration-300 hover:scale-105"
          autoPlay
          loop
          muted
        >
          <source
            src="https://files.catbox.moe/eg77ai.mp4"
            type="video/mp4"
          />
        </video>
      </MaskedDiv>

         <MaskedDiv maskType="type-3" size={0.45} >
        <video
          className="cursor-pointer transition-all duration-300 hover:scale-105"
          autoPlay
          loop
          muted
        >
              <source
              src="https://files.catbox.moe/96ay6e.mp4"
            
            type="video/mp4"
          />
         
        </video>
      </MaskedDiv>

        <MaskedDiv maskType="type-1" size={0.25} >
        <video
          className="cursor-pointer transition-all duration-300 hover:scale-105"
          autoPlay
          loop
          muted
        >
             <source
            src="https://files.catbox.moe/cgi94f.mp4"
            type="video/mp4"
          />
        </video>
      </MaskedDiv>
       </div>

       {/* Mobile Layout - 2 videos in first row, 1 video in second row */}
       <div className='md:hidden flex flex-col items-center gap-6 mt-5'>
         {/* First row - 2 videos */}
         <div className='flex items-center justify-center gap-6'>
          <MaskedDiv maskType="type-1" size={0.45}  >
          <video
            className="cursor-pointer transition-all duration-300 hover:scale-105"
            autoPlay
            loop
            muted
          >
            <source
              src="https://files.catbox.moe/eg77ai.mp4"
              type="video/mp4"
            />
          </video>
        </MaskedDiv>

          <MaskedDiv maskType="type-1" size={0.45} >
          <video
            className="cursor-pointer transition-all duration-300 hover:scale-105"
            autoPlay
            loop
            muted
          >
               <source
              src="https://files.catbox.moe/cgi94f.mp4"
              type="video/mp4"
            />
          </video>
        </MaskedDiv>
         </div>

         {/* Second row - 1 video (type-3) */}
         <div className='flex items-center justify-center'>
          <MaskedDiv maskType="type-4" size={1} >
          <video
            className="cursor-pointer transition-all duration-300 hover:scale-105"
            autoPlay
            loop
            muted
            
          >
                <source
                src="https://files.catbox.moe/96ay6e.mp4"
              
              type="video/mp4"
            />
           
          </video>
        </MaskedDiv>
         </div>
       </div>
            </div>
        </div>
    </section>
  )
}

export default ComponentsShowcase