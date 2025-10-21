'use client'

import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import { LOGO } from '../../../../public/assets/images/images'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Blocks, Code2, FileCode, GitBranch, HandPlatter, Moon } from 'lucide-react'
import {BsDiscord} from 'react-icons/bs'
import { ExpandedTabs } from '@/components/ui/expanded-tabs'
import ThemeToggleButton from '@/components/ui/theme-toggle-button'
import { useTheme } from 'next-themes'
const Navbar = () => {
    const [mounted, setMounted] = useState(false);
    const {theme} = useTheme()
 
    useEffect(() => {
      setMounted(true)
    }, [])

  return (
    <section className='py-3 fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md'>
       <div className='container px-4 md:px-10 lg:px-2 mx-auto'>
          <div className='flex items-center justify-between rounded-full px-4 md:px-0'>
             {/* Logo - Left Side */}
             <div className='flex items-center gap-3'>
                {mounted && (
                  <Image
                   alt='logo'
                   src={theme === 'dark' ? LOGO.DARK_LOGO : LOGO.LIGHT_LOGO}
                   className='w-12 h-12 object-contain'
                   width={48}
                   height={48}
                  />
                )}
                {!mounted && (
                  <div className='w-12 h-12' />
                )}
                <div className='font-[family-name:var(--font-orbitron)] font-semibold text-xs sm:text-sm md:text-base lg:text-lg leading-tight whitespace-nowrap'>
                  Meta Lab<br className="lg:hidden" /> Marketing Studio
                </div>
             </div>

             {/* Navigation - Center (Desktop only) */}
             <nav className='hidden lg:flex items-center gap-8 absolute left-1/2 transform -translate-x-1/2'>
               <Link 
                 href="/#" 
                 className='font-[family-name:var(--font-roboto)] font-medium text-sm tracking-wide hover:text-primary transition-colors'
               >
                 HOME
               </Link>
               <Link 
                 href="/#" 
                 className='font-[family-name:var(--font-roboto)] font-medium text-sm tracking-wide hover:text-primary transition-colors'
               >
                 ABOUT
               </Link>
               <Link 
                 href="/#" 
                 className='font-[family-name:var(--font-roboto)] font-medium text-sm tracking-wide hover:text-primary transition-colors'
               >
                 BLOG
               </Link>
             </nav>

             {/* Theme Toggle & Navigation - Right Side */}
             <div className='flex items-center gap-4 flex-1 justify-end'>
               {/* Navigation - Tablet (beside theme button) */}
               <nav className='hidden md:flex lg:hidden items-center gap-6'>
                 <Link 
                   href="/#" 
                   className='font-[family-name:var(--font-roboto)] font-medium text-sm tracking-wide hover:text-primary transition-colors'
                 >
                   HOME
                 </Link>
                 <Link 
                   href="/#" 
                   className='font-[family-name:var(--font-roboto)] font-medium text-sm tracking-wide hover:text-primary transition-colors'
                 >
                   ABOUT
                 </Link>
                 <Link 
                   href="/#" 
                   className='font-[family-name:var(--font-roboto)] font-medium text-sm tracking-wide hover:text-primary transition-colors'
                 >
                   BLOG
                 </Link>
               </nav>
               
               <ThemeToggleButton
                 variant='circle-blur'
               />
             </div>
          </div>
       </div>
    </section>
  )
}

export default Navbar