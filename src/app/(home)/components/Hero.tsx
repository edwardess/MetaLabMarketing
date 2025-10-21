"use client";

import { HeroProps } from './PortableHero/types';
import styles from './Hero.module.css';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

export default function Hero({
  videoSrc = {
    mp4: "/videos/hero.mp4",
    webm: "/videos/hero.webm"
  },
  overlayImageSrc = "https://files.catbox.moe/hzcd2a.webp",
  backgroundTextSrc = "/bg-text-merged.png",
  backgroundColor = "#090b0c",
  className = ""
}: HeroProps) {
  const handleButtonMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    
    const button = e.currentTarget.querySelector('button');
    if (button) {
      const glowOuter = button.querySelector(`.${styles.ctaGlowOuter}`) as HTMLElement;
      const glowInner = button.querySelector(`.${styles.ctaGlowInner}`) as HTMLElement;
      
      if (glowOuter) {
        glowOuter.style.left = `${x}%`;
        glowOuter.style.top = `${y}%`;
        glowOuter.style.transition = 'none';
      }
      if (glowInner) {
        glowInner.style.left = `${x}%`;
        glowInner.style.top = `${y}%`;
        glowInner.style.transition = 'none';
      }
    }
    
    const outlineGradient = e.currentTarget.querySelector(`.${styles.ctaOutlineGradient}`) as HTMLElement;
    if (outlineGradient) {
      outlineGradient.style.background = `radial-gradient(
        circle at ${x}% ${y}%,
        rgba(180, 50, 30, 1) 0%,
        rgba(180, 50, 30, 1) 8%,
        rgba(180, 50, 30, 0.95) 15%,
        rgba(180, 50, 30, 0.85) 22%,
        rgba(180, 50, 30, 0.7) 30%,
        rgba(180, 50, 30, 0.5) 38%,
        rgba(180, 50, 30, 0.3) 46%,
        rgba(180, 50, 30, 0.15) 54%,
        rgba(11, 12, 13, 0.95) 65%,
        #0b0c0d 80%
      )`;
      outlineGradient.style.transition = 'none';
    }
  };

  const handleButtonMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const button = e.currentTarget.querySelector('button');
    if (button) {
      const glowOuter = button.querySelector(`.${styles.ctaGlowOuter}`) as HTMLElement;
      const glowInner = button.querySelector(`.${styles.ctaGlowInner}`) as HTMLElement;
      
      if (glowOuter) {
        glowOuter.style.transition = 'all 0.5s ease-out';
        glowOuter.style.left = '90%';
        glowOuter.style.top = '50%';
        glowOuter.style.opacity = '1';
        glowOuter.style.visibility = 'visible';
      }
      if (glowInner) {
        glowInner.style.transition = 'all 0.5s ease-out';
        glowInner.style.left = '90%';
        glowInner.style.top = '50%';
        glowInner.style.opacity = '1';
        glowInner.style.visibility = 'visible';
      }
    }
    
    const outlineGradient = e.currentTarget.querySelector(`.${styles.ctaOutlineGradient}`) as HTMLElement;
    if (outlineGradient) {
      outlineGradient.style.transition = 'all 0.5s ease-out';
      outlineGradient.style.background = `radial-gradient(
        circle at 90% 50%,
        rgba(180, 50, 30, 1) 0%,
        rgba(180, 50, 30, 1) 8%,
        rgba(180, 50, 30, 0.95) 15%,
        rgba(180, 50, 30, 0.85) 22%,
        rgba(180, 50, 30, 0.7) 30%,
        rgba(180, 50, 30, 0.5) 38%,
        rgba(180, 50, 30, 0.3) 46%,
        rgba(180, 50, 30, 0.15) 54%,
        rgba(11, 12, 13, 0.95) 65%,
        #0b0c0d 80%
      )`;
    }
  };

  return (
      <>
      {/* DESKTOP CONTAINER */}
      <section 
        className={`${styles.heroContainer} ${className} !hidden lg:!block`}
        style={{ backgroundColor }}
      >
        {/* Video container - centers and constrains max width */}
        <div className={styles.heroVideoContainer}>
          {/* Aspect ratio wrapper for video (3840/2876 = 1.335359) */}
          <div className={styles.heroAspectWrapper}>
            {/* Video element */}
            <video
              className={styles.heroVideo}
              width={3840}
              height={2876}
              autoPlay
              loop
              muted
              playsInline
            >
              <source src={videoSrc.mp4} type="video/mp4" />
              <source src={videoSrc.webm} type="video/webm" />
            </video>

            {/* Text Overlay */}
            <div className={styles.heroTextOverlay}>
              <motion.div 
                className={styles.heroHeadline}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <h1>
                  Helping brands grow
                  <br />
                  through{' '}
                  <motion.span
                    className={styles.heroGlowText}
                    animate={{
                      textShadow: [
                        "0 0 8px rgba(255, 255, 255, 0.2), 0 0 16px rgba(255, 255, 255, 0.1)",
                        "0 0 12px rgba(255, 255, 255, 0.3), 0 0 20px rgba(255, 255, 255, 0.15)",
                        "0 0 8px rgba(255, 255, 255, 0.2), 0 0 16px rgba(255, 255, 255, 0.1)",
                      ]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    smarter
                  </motion.span>
                  <br />
                  social marketing
                </h1>
                <p className={styles.heroSubtext}>
                  Every brand has <strong>potential</strong>, we build the systems to unlock it.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className={styles.heroCtaWrapper}
              >
                    <div 
                      className={styles.heroCtaButtonWrapper}
                      onMouseMove={handleButtonMouseMove}
                      onMouseLeave={handleButtonMouseLeave}
                    >
                      <div className={styles.ctaOutlineGradient}></div>
                      <Button 
                        size="lg"
                        className={styles.heroCtaButton}
                      >
                        <div className={styles.ctaGlowOuter}></div>
                        <div className={styles.ctaGlowInner}></div>
                        <span className={styles.heroCtaText}>Let's Drive Growth Together</span>
                      </Button>
                    </div>
              </motion.div>
            </div>

            {/* PNG overlay - moved down and left from center */}
            <div className={`${styles.heroOverlayImage} ${styles.shineContainer}`} style={{ position: 'relative', overflow: 'hidden' }}>
              <img
                alt="Hero illustration"
                src={overlayImageSrc}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>

            {/* Background text overlay - flashlight cursor effect */}
            <div
              className={styles.heroFlashlightContainer}
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const x = ((e.clientX - rect.left) / rect.width) * 100;
                const y = ((e.clientY - rect.top) / rect.height) * 100;
                
                const img = e.currentTarget.querySelector('img');
                if (img) {
                  // Create a realistic flashlight effect with only the dimmer outer ring
                  const outerRadius = 200; // Larger, dimmer outer circle
                  
                  // Dimmer outer ring only
                  const dimmerRing = `radial-gradient(circle ${outerRadius}px at ${x}% ${y}%, black 0%, black 40%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.2) 60%, rgba(0,0,0,0.15) 70%, rgba(0,0,0,0.1) 80%, rgba(0,0,0,0.05) 90%, transparent 100%)`;
                  
                  img.style.maskImage = dimmerRing;
                  img.style.webkitMaskImage = dimmerRing;
                  img.style.maskSize = '100% 100%';
                  img.style.webkitMaskSize = '100% 100%';
                  img.style.maskRepeat = 'no-repeat';
                  img.style.webkitMaskRepeat = 'no-repeat';
                  img.style.maskPosition = 'center';
                  img.style.webkitMaskPosition = 'center';
                  img.style.opacity = '1';
                  img.style.filter = 'brightness(1)';
                }
              }}
              onMouseLeave={(e) => {
                const img = e.currentTarget.querySelector('img');
                if (img) {
                  img.style.maskImage = 'radial-gradient(circle 0px at 50% 50%, transparent 0%, transparent 100%)';
                  img.style.webkitMaskImage = 'radial-gradient(circle 0px at 50% 50%, transparent 0%, transparent 100%)';
                  img.style.opacity = '0.1';
                  img.style.filter = 'brightness(0.3)';
                }
              }}
            >
              <img
                alt="Background text"
                className={styles.heroFlashlightImage}
                src={backgroundTextSrc}
              />
            </div>
          </div>
        </div>
      </section>

      {/* MOBILE & TABLET CONTAINER */}
      <section className="block lg:hidden relative h-[85vh] md:h-[90vh] bg-gray-900 overflow-hidden">
        {/* Video Background */}
        <video
          className="absolute inset-0 w-full h-full object-cover object-left pt-16"
          autoPlay
          loop
          muted
          playsInline
          style={{ transform: 'none !important' }}
        >
          <source src="/videos/hero-mobile.mp4" type="video/mp4" />
        </video>

        {/* Content Overlay */}
        <div className="relative z-10 flex flex-col items-start justify-start h-[85vh] md:h-[90vh] px-6 md:px-10 pt-32">
          {/* Headline */}
          <motion.h1 
            className="text-lg md:text-3xl font-black text-white mb-3 leading-tight text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Helping brands grow
            <br />
            through{' '}
            <span className="underline decoration-white decoration-1 underline-offset-2">
              smarter
            </span>
            <br />
            social marketing
          </motion.h1>

          {/* Subtext */}
          <motion.p 
            className="text-xs md:text-base text-white/80 mb-6 max-w-xs md:max-w-sm text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Every brand has <strong className="text-white">potential</strong>,<br className="md:hidden" />
            we build the systems to unlock it.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Button 
              className="bg-white hover:bg-gray-100 text-gray-900 font-bold text-xs md:text-base px-6 md:px-10 py-2.5 md:py-4 rounded-full"
            >
              Let's Drive Growth Together
            </Button>
          </motion.div>
        </div>
      </section>
      </>
  );
}
