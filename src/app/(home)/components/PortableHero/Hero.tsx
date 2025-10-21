"use client";

import { HeroProps } from './types';

export default function Hero({
  videoSrc = {
    mp4: "/videos/hero.mp4",
    webm: "/videos/hero.webm"
  },
  overlayImageSrc = "https://i.postimg.cc/bdc55xvK/hero-illustration-7100a376.png",
  backgroundTextSrc = "/bg-text-merged.png",
  backgroundColor = "#090b0c",
  className = ""
}: HeroProps) {
  return (
    <>
      <style jsx>{`
        /* Self-contained styles for the hero component */
        .hero-container * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        .hero-container {
          position: relative;
          height: 100vh;
          width: 100%;
          display: flex;
          align-items: flex-start;
          justify-content: center;
          background-color: ${backgroundColor};
          overflow: hidden;
        }
        
        .hero-video-container {
          position: relative;
          width: 100%;
          max-width: 1920px;
          margin: 0 auto;
          padding-top: 80px;
        }
        
        .hero-aspect-wrapper {
          position: relative;
          width: 100%;
          aspect-ratio: 3840 / 2876;
        }
        
        .hero-video {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        
        .hero-overlay-image {
          position: absolute;
          top: 70.6%;
          left: 44.7%;
          transform: translate(-50%, -50%);
          width: 54%;
          border-radius: 4px;
        }
        
        .hero-flashlight-container {
          position: absolute;
          top: 50%;
          left: 52%;
          transform: translate(-50%, -50%);
          width: 70%;
          height: auto;
          overflow: hidden;
          cursor: default;
        }
        
        .hero-flashlight-image {
          width: 100%;
          height: auto;
          opacity: 0.1;
          filter: brightness(0.3);
          mask-image: radial-gradient(circle 0px at 50% 50%, transparent 0%, transparent 100%);
          -webkit-mask-image: radial-gradient(circle 0px at 50% 50%, transparent 0%, transparent 100%);
          mask-size: 100% 100%;
          -webkit-mask-size: 100% 100%;
          mask-repeat: no-repeat;
          -webkit-mask-repeat: no-repeat;
          mask-position: center;
          -webkit-mask-position: center;
          transition: all 0.5s ease-out;
        }
      `}</style>
      
      <section className={`hero-container ${className}`}>
        {/* Video container - centers and constrains max width */}
        <div className="hero-video-container">
          {/* Aspect ratio wrapper for video (3840/2876 = 1.335359) */}
          <div className="hero-aspect-wrapper">
            {/* Video element */}
            <video
              className="hero-video"
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

            {/* PNG overlay - moved down and left from center */}
            <img
              alt="Hero illustration"
              className="hero-overlay-image"
              src={overlayImageSrc}
            />

            {/* Background text overlay - flashlight cursor effect */}
            <div
              className="hero-flashlight-container"
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
                className="hero-flashlight-image"
                src={backgroundTextSrc}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
