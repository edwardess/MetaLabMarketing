"use client"
import  * as THREE from 'three'
import { Canvas, useFrame } from '@react-three/fiber'
import React, { useRef } from 'react'
import { useScroll, useTransform,motion } from 'framer-motion'
import { OrbitControls } from '@react-three/drei'
import { ArrowUpRight, Circle } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import styles from './Hero.module.css'
const vertexShader = `
  varying vec2 vUv;
  varying float vElevation;
  varying float vShadow;

  uniform float uTime;

  // --- Perlin Noise helpers (Ashima Arts) ---
  vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
  vec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
  vec4 permute(vec4 x) { return mod289(((x * 34.0) + 1.0) * x); }
  vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }

  float perlinNoise3D(vec3 P) {
    vec3 i0 = floor(P);
    vec3 i1 = i0 + vec3(1.0);
    vec3 f0 = fract(P);
    vec3 f1 = f0 - vec3(1.0);
    vec3 f = f0 * f0 * (3.0 - 2.0 * f0);

    vec4 ix = vec4(i0.x, i1.x, i0.x, i1.x);
    vec4 iy = vec4(i0.y, i0.y, i1.y, i1.y);
    vec4 iz0 = vec4(i0.z);
    vec4 iz1 = vec4(i1.z);

    vec4 ixy = permute(permute(ix) + iy);
    vec4 ixy0 = permute(ixy + iz0);
    vec4 ixy1 = permute(ixy + iz1);

    vec4 gx0 = fract(ixy0 * (1.0 / 41.0)) * 2.0 - 1.0;
    vec4 gy0 = abs(gx0) - 0.5;
    vec4 gz0 = floor(gx0 + 0.5);
    gx0 -= gz0;

    vec4 gx1 = fract(ixy1 * (1.0 / 41.0)) * 2.0 - 1.0;
    vec4 gy1 = abs(gx1) - 0.5;
    vec4 gz1 = floor(gx1 + 0.5);
    gx1 -= gz1;

    vec3 g000 = vec3(gx0.x, gy0.x, gz0.x);
    vec3 g100 = vec3(gx0.y, gy0.y, gz0.y);
    vec3 g010 = vec3(gx0.z, gy0.z, gz0.z);
    vec3 g110 = vec3(gx0.w, gy0.w, gz0.w);
    vec3 g001 = vec3(gx1.x, gy1.x, gz1.x);
    vec3 g101 = vec3(gx1.y, gy1.y, gz1.y);
    vec3 g011 = vec3(gx1.z, gy1.z, gz1.z);
    vec3 g111 = vec3(gx1.w, gy1.w, gz1.w);

    vec4 norm0 = taylorInvSqrt(vec4(
      dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)
    ));
    g000 *= norm0.x;
    g010 *= norm0.y;
    g100 *= norm0.z;
    g110 *= norm0.w;

    vec4 norm1 = taylorInvSqrt(vec4(
      dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)
    ));
    g001 *= norm1.x;
    g011 *= norm1.y;
    g101 *= norm1.z;
    g111 *= norm1.w;

    float n000 = dot(g000, f0);
    float n100 = dot(g100, vec3(f1.x, f0.yz));
    float n010 = dot(g010, vec3(f0.x, f1.y, f0.z));
    float n110 = dot(g110, vec3(f1.xy, f0.z));
    float n001 = dot(g001, vec3(f0.xy, f1.z));
    float n101 = dot(g101, vec3(f1.x, f0.y, f1.z));
    float n011 = dot(g011, vec3(f0.x, f1.yz));
    float n111 = dot(g111, f1);

    vec3 fade_xyz = f * f * (3.0 - 2.0 * f);
    vec4 n_z = mix(
      vec4(n000, n100, n010, n110),
      vec4(n001, n101, n011, n111),
      fade_xyz.z
    );
    vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);
    float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x);

    return 2.2 * n_xyz;
  }

  void main() {
    vUv = uv;

    float noiseFreq = 5.0;
    float noiseAmp = 0.25;

    vec3 pos = position;
    float n = perlinNoise3D(pos * noiseFreq + uTime * 0.7);
    pos += normal * n * noiseAmp;

    vElevation = pos.y;
    vec3 displacedNormal = normalize(normal + vec3(0.0, n * noiseAmp, 0.0));
    float shadow = clamp(dot(displacedNormal, vec3(0.0, 2.0, 0.0)), 0.0, 1.0);
    vShadow = shadow;

    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  }
`

// Fragment Shader
const fragmentShader = `
  precision mediump float;

  varying vec2 vUv;
  varying float vElevation;
  varying float vShadow;

  uniform float uColorChange;

  void main() {
    // Monochrome palette
    vec4 c1 = vec4(0.9, 0.9, 0.9, 1.0);   // light grey
    vec4 c2 = vec4(0.6, 0.6, 0.6, 1.0);   // medium grey
    vec4 c3 = vec4(0.3, 0.3, 0.3, 1.0);   // dark grey
    vec4 c4 = vec4(0.05, 0.05, 0.05, 1.0); // almost black

    float dist = distance(vUv, vec2(0.5, 0.5));
    float organic = smoothstep(0.0, 0.7, dist);

    float noise = fract(sin(dot(vUv * 100.0, vec2(12.9898,78.233))) * 43758.5453);
    float blendFactor = mix(organic, noise, 0.18);

    vec4 colormixone = mix(c1, c2, blendFactor);
    vec4 colormixtwo = mix(c3, c4, blendFactor);

    vec4 final = mix(colormixone, colormixtwo, uColorChange);

    gl_FragColor = final;
  }
`;
const Globe = () => {
     const meshRef = useRef<THREE.Mesh>(null);
     const uniforms = useRef({
         uTime: {value: 0},
         uColorChange: {value: 0}
     })
   useFrame((state) => {
     uniforms.current.uTime.value = state.clock.getElapsedTime()
     uniforms.current.uColorChange.value = (Math.sin(state.clock.elapsedTime) + 1) / 2
   })

   return (
     <mesh ref={meshRef} rotation={[0.4, 0.6, 0]}>
        <icosahedronGeometry args={[3.2, 40]} />
        <shaderMaterial
         vertexShader={vertexShader}
         fragmentShader={fragmentShader}
         uniforms={uniforms.current}
         side={THREE.DoubleSide}
         //@ts-expect-error
         flatShading
         wireframe
        />

     </mesh>
   )
     
}
const Footer = () => {
  const ref = useRef(null)
    const  {scrollYProgress} = useScroll({
       target: ref,
       offset: ['start end', 'center center']
    })
    const  y = useTransform(scrollYProgress,[0,1], ["100%", "0%"])
    const opacity = useTransform(scrollYProgress,[0,0.5,1], [0,1,1])
  
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
     <section ref={ref} className="py-10 relative overflow-x-clip ">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 flex flex-col items-center gap-y-5">
        <div className="hidden md:block w-full h-[600px] relative">
          <Canvas camera={{ position: [5, 5, 5], fov: 50 }}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[5, 5, 5]} />
            <Globe />
            <OrbitControls enableZoom={false} />
          </Canvas>
        
        <motion.div style={{y, opacity}} className='absolute inset-0 flex flex-col items-center justify-center gap-6 font-medium text-4xl md:text-6xl font-[family-name:var(--font-orbitron)]'>
            <p className="text-center">
              Your Success Story<br className="md:hidden" />Starts Here
            </p>
            
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
                <span className={styles.heroCtaText}>Let's Talk</span>
              </Button>
            </div>
        </motion.div>

        </div>

        <div className="flex flex-col md:flex-row justify-between w-full items-center gap-6 text-center md:text-left">
  {/* Left side */}
  <div className="flex flex-col items-center md:items-start gap-2">
    <span className="text-xs font-mono">metalabmarketingstudio@gmail.com</span>
    <p className="text-xs font-mono">Philippines</p>

   
  </div>

  {/* Right side */}
  <div className="flex flex-wrap justify-center md:justify-end gap-16 text-xs font-mono">


  </div>
</div>

<footer className="w-full font-mono  border-t border-gray-600 pt-4">
  <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-center md:text-left">

    {/* Left side - Language + Copyright */}
    <div className="flex flex-col sm:flex-row items-center gap-3">
      <button className="border border-gray-400 px-3 py-1 rounded-full hover:bg-white hover:text-purple-900 transition">
        EN
      </button>

      <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 items-center text-xs">
        <span>Meta Lab Marketing Studio - 2025</span>
        
      </div>
    </div>

    {/* Right side - Links */}
    <div className="flex flex-wrap justify-center md:justify-end gap-6 text-xs">
      <a href="#" className="hover:underline">Legal & Terms</a>
      <a href="#" className="hover:underline">Privacy</a>
    </div>
  </div>
</footer>

    




      </div>
    </section>
  )
}

export default Footer