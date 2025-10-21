# Portable Hero Component - Examples

This document provides practical examples of how to use the Portable Hero component in various scenarios.

## 📋 Table of Contents

1. [Basic Examples](#basic-examples)
2. [Customization Examples](#customization-examples)
3. [Integration Examples](#integration-examples)
4. [Advanced Examples](#advanced-examples)
5. [Real-world Use Cases](#real-world-use-cases)

---

## 🚀 Basic Examples

### Example 1: Minimal Setup
```tsx
// pages/index.tsx or app/page.tsx
import { Hero } from '../components/PortableHero';

export default function HomePage() {
  return (
    <main>
      <Hero />
    </main>
  );
}
```

### Example 2: With Custom Assets
```tsx
import { Hero } from '../components/PortableHero';

export default function ProductPage() {
  return (
    <main>
      <Hero
        videoSrc={{
          mp4: "/videos/product-demo.mp4",
          webm: "/videos/product-demo.webm"
        }}
        overlayImageSrc="/images/product-interface.png"
        backgroundTextSrc="/images/product-features.png"
      />
    </main>
  );
}
```

### Example 3: With Custom Styling
```tsx
import { Hero } from '../components/PortableHero';

export default function BrandPage() {
  return (
    <main>
      <Hero
        backgroundColor="#1a1a1a"
        className="brand-hero"
      />
      <style jsx>{`
        .brand-hero {
          border-top: 1px solid #333;
        }
      `}</style>
    </main>
  );
}
```

---

## 🎨 Customization Examples

### Example 4: Dark Theme
```tsx
import { Hero } from '../components/PortableHero';

export default function DarkThemePage() {
  return (
    <main className="dark-theme">
      <Hero
        backgroundColor="#000000"
        overlayImageSrc="/images/dark-overlay.png"
        backgroundTextSrc="/images/dark-bg-text.png"
      />
    </main>
  );
}
```

### Example 5: Light Theme
```tsx
import { Hero } from '../components/PortableHero';

export default function LightThemePage() {
  return (
    <main className="light-theme">
      <Hero
        backgroundColor="#f8f9fa"
        overlayImageSrc="/images/light-overlay.png"
        backgroundTextSrc="/images/light-bg-text.png"
      />
    </main>
  );
}
```

### Example 6: Brand Colors
```tsx
import { Hero } from '../components/PortableHero';

export default function BrandPage() {
  return (
    <main>
      <Hero
        backgroundColor="#1e3a8a" // Blue brand color
        overlayImageSrc="/images/brand-overlay.png"
        backgroundTextSrc="/images/brand-features.png"
      />
    </main>
  );
}
```

---

## 🔗 Integration Examples

### Example 7: With Next.js App Router
```tsx
// app/page.tsx
import { Hero } from '../components/PortableHero';

export default function HomePage() {
  return (
    <div>
      <Hero />
      <section className="content">
        <h1>Welcome to our site</h1>
        <p>Content below the hero...</p>
      </section>
    </div>
  );
}
```

### Example 8: With Next.js Pages Router
```tsx
// pages/index.tsx
import { Hero } from '../components/PortableHero';
import Head from 'next/head';

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Home - My Website</title>
        <meta name="description" content="Welcome to our website" />
      </Head>
      <main>
        <Hero />
        <section className="content">
          <h1>Welcome to our site</h1>
          <p>Content below the hero...</p>
        </section>
      </main>
    </>
  );
}
```

### Example 9: With Layout Component
```tsx
// components/Layout.tsx
import { Hero } from './PortableHero';

interface LayoutProps {
  children: React.ReactNode;
  showHero?: boolean;
}

export default function Layout({ children, showHero = true }: LayoutProps) {
  return (
    <div className="layout">
      {showHero && <Hero />}
      <main className="content">
        {children}
      </main>
    </div>
  );
}

// Usage
<Layout showHero={true}>
  <h1>Page Content</h1>
</Layout>
```

---

## 🚀 Advanced Examples

### Example 10: Dynamic Asset Loading
```tsx
import { Hero } from '../components/PortableHero';
import { useState, useEffect } from 'react';

export default function DynamicHeroPage() {
  const [assets, setAssets] = useState({
    videoSrc: { mp4: '', webm: '' },
    overlayImageSrc: '',
    backgroundTextSrc: ''
  });

  useEffect(() => {
    // Load assets dynamically
    setAssets({
      videoSrc: {
        mp4: '/videos/hero.mp4',
        webm: '/videos/hero.webm'
      },
      overlayImageSrc: '/images/overlay.png',
      backgroundTextSrc: '/images/bg-text.png'
    });
  }, []);

  return (
    <main>
      {assets.videoSrc.mp4 && (
        <Hero
          videoSrc={assets.videoSrc}
          overlayImageSrc={assets.overlayImageSrc}
          backgroundTextSrc={assets.backgroundTextSrc}
        />
      )}
    </main>
  );
}
```

### Example 11: Conditional Rendering
```tsx
import { Hero } from '../components/PortableHero';
import { useRouter } from 'next/router';

export default function ConditionalHeroPage() {
  const router = useRouter();
  const isHomePage = router.pathname === '/';

  return (
    <main>
      {isHomePage && (
        <Hero
          videoSrc={{
            mp4: '/videos/home-hero.mp4',
            webm: '/videos/home-hero.webm'
          }}
          overlayImageSrc="/images/home-overlay.png"
          backgroundTextSrc="/images/home-features.png"
        />
      )}
      <section className="content">
        <h1>Page Content</h1>
      </section>
    </main>
  );
}
```

### Example 12: With Loading States
```tsx
import { Hero } from '../components/PortableHero';
import { useState } from 'react';

export default function LoadingHeroPage() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <main>
      {isLoading ? (
        <div className="loading-hero">
          <div className="spinner">Loading...</div>
        </div>
      ) : (
        <Hero
          videoSrc={{
            mp4: '/videos/hero.mp4',
            webm: '/videos/hero.webm'
          }}
          overlayImageSrc="/images/overlay.png"
          backgroundTextSrc="/images/bg-text.png"
        />
      )}
    </main>
  );
}
```

---

## 🌟 Real-world Use Cases

### Example 13: E-commerce Product Page
```tsx
import { Hero } from '../components/PortableHero';

export default function ProductPage({ product }) {
  return (
    <main>
      <Hero
        videoSrc={{
          mp4: `/videos/products/${product.id}.mp4`,
          webm: `/videos/products/${product.id}.webm`
        }}
        overlayImageSrc={`/images/products/${product.id}-interface.png`}
        backgroundTextSrc={`/images/products/${product.id}-features.png`}
        backgroundColor="#f8f9fa"
      />
      <section className="product-details">
        <h1>{product.name}</h1>
        <p>{product.description}</p>
        <button>Add to Cart</button>
      </section>
    </main>
  );
}
```

### Example 14: Portfolio Website
```tsx
import { Hero } from '../components/PortableHero';

export default function PortfolioPage() {
  return (
    <main>
      <Hero
        videoSrc={{
          mp4: '/videos/portfolio-showcase.mp4',
          webm: '/videos/portfolio-showcase.webm'
        }}
        overlayImageSrc="/images/portfolio-works.png"
        backgroundTextSrc="/images/portfolio-skills.png"
        backgroundColor="#1a1a1a"
      />
      <section className="portfolio-grid">
        <div className="project">Project 1</div>
        <div className="project">Project 2</div>
        <div className="project">Project 3</div>
      </section>
    </main>
  );
}
```

### Example 15: SaaS Landing Page
```tsx
import { Hero } from '../components/PortableHero';

export default function SaaSHomePage() {
  return (
    <main>
      <Hero
        videoSrc={{
          mp4: '/videos/saas-demo.mp4',
          webm: '/videos/saas-demo.webm'
        }}
        overlayImageSrc="/images/saas-dashboard.png"
        backgroundTextSrc="/images/saas-features.png"
        backgroundColor="#0f172a"
      />
      <section className="features">
        <h2>Why Choose Our Platform?</h2>
        <div className="feature-grid">
          <div className="feature">Feature 1</div>
          <div className="feature">Feature 2</div>
          <div className="feature">Feature 3</div>
        </div>
      </section>
    </main>
  );
}
```

### Example 16: Agency Website
```tsx
import { Hero } from '../components/PortableHero';

export default function AgencyHomePage() {
  return (
    <main>
      <Hero
        videoSrc={{
          mp4: '/videos/agency-showcase.mp4',
          webm: '/videos/agency-showcase.webm'
        }}
        overlayImageSrc="/images/agency-services.png"
        backgroundTextSrc="/images/agency-clients.png"
        backgroundColor="#1e293b"
      />
      <section className="services">
        <h2>Our Services</h2>
        <div className="service-list">
          <div className="service">Web Design</div>
          <div className="service">Development</div>
          <div className="service">Marketing</div>
        </div>
      </section>
    </main>
  );
}
```

---

## 🎯 Best Practice Examples

### Example 17: SEO Optimized
```tsx
import { Hero } from '../components/PortableHero';
import Head from 'next/head';

export default function SEOOptimizedPage() {
  return (
    <>
      <Head>
        <title>Amazing Product - Interactive Demo</title>
        <meta name="description" content="Experience our product through an interactive video demonstration" />
        <meta property="og:title" content="Amazing Product - Interactive Demo" />
        <meta property="og:description" content="Experience our product through an interactive video demonstration" />
        <meta property="og:image" content="/images/hero-preview.jpg" />
      </Head>
      <main>
        <Hero
          videoSrc={{
            mp4: '/videos/product-demo.mp4',
            webm: '/videos/product-demo.webm'
          }}
          overlayImageSrc="/images/product-interface.png"
          backgroundTextSrc="/images/product-features.png"
        />
      </main>
    </>
  );
}
```

### Example 18: Performance Optimized
```tsx
import { Hero } from '../components/PortableHero';
import { Suspense } from 'react';

export default function PerformanceOptimizedPage() {
  return (
    <main>
      <Suspense fallback={<div>Loading hero...</div>}>
        <Hero
          videoSrc={{
            mp4: '/videos/optimized-hero.mp4', // Compressed video
            webm: '/videos/optimized-hero.webm' // Compressed video
          }}
          overlayImageSrc="/images/optimized-overlay.png" // Compressed image
          backgroundTextSrc="/images/optimized-bg-text.png" // Compressed image
        />
      </Suspense>
    </main>
  );
}
```

---

## 📱 Responsive Examples

### Example 19: Mobile-First Approach
```tsx
import { Hero } from '../components/PortableHero';

export default function MobileFirstPage() {
  return (
    <main>
      <Hero
        videoSrc={{
          mp4: '/videos/mobile-hero.mp4', // Mobile-optimized video
          webm: '/videos/mobile-hero.webm'
        }}
        overlayImageSrc="/images/mobile-overlay.png"
        backgroundTextSrc="/images/mobile-bg-text.png"
        className="mobile-optimized"
      />
      <style jsx>{`
        .mobile-optimized {
          /* Mobile-specific styles */
        }
        
        @media (min-width: 768px) {
          .mobile-optimized {
            /* Tablet styles */
          }
        }
        
        @media (min-width: 1024px) {
          .mobile-optimized {
            /* Desktop styles */
          }
        }
      `}</style>
    </main>
  );
}
```

---

## 🔧 Troubleshooting Examples

### Example 20: Error Handling
```tsx
import { Hero } from '../components/PortableHero';
import { useState } from 'react';

export default function ErrorHandlingPage() {
  const [hasError, setHasError] = useState(false);

  const handleVideoError = () => {
    setHasError(true);
  };

  return (
    <main>
      {hasError ? (
        <div className="error-fallback">
          <h1>Video failed to load</h1>
          <p>Please refresh the page or try again later.</p>
        </div>
      ) : (
        <Hero
          videoSrc={{
            mp4: '/videos/hero.mp4',
            webm: '/videos/hero.webm'
          }}
          overlayImageSrc="/images/overlay.png"
          backgroundTextSrc="/images/bg-text.png"
        />
      )}
    </main>
  );
}
```

---

*These examples demonstrate various ways to implement and customize the Portable Hero component for different use cases and scenarios.*
