# Portable Hero Component - Guidelines

## 🎯 Overview

This document provides comprehensive guidelines for using, customizing, and maintaining the Portable Hero component.

## 📋 Table of Contents

1. [Installation & Setup](#installation--setup)
2. [Usage Guidelines](#usage-guidelines)
3. [Customization Guidelines](#customization-guidelines)
4. [Performance Guidelines](#performance-guidelines)
5. [Accessibility Guidelines](#accessibility-guidelines)
6. [Browser Support Guidelines](#browser-support-guidelines)
7. [Troubleshooting](#troubleshooting)
8. [Best Practices](#best-practices)

---

## 🚀 Installation & Setup

### Prerequisites
- React 16.8+ (hooks support)
- Next.js 12+ (for styled-jsx)
- TypeScript 4.0+ (optional but recommended)

### Quick Setup
1. Copy the `PortableHero` folder to your project
2. Add required assets to `public/` folder
3. Import and use the component

```tsx
import { Hero } from './components/PortableHero';
```

### Required Assets Structure
```
public/
├── videos/
│   ├── hero.mp4      # Required: MP4 video format
│   └── hero.webm     # Required: WebM video format
├── bg-text-merged.png # Required: Background text image
└── overlay.png        # Optional: Custom overlay image
```

---

## 📖 Usage Guidelines

### Basic Implementation
```tsx
// ✅ Recommended: Basic usage
<Hero />

// ✅ Recommended: With custom assets
<Hero
  videoSrc={{
    mp4: "/my-video.mp4",
    webm: "/my-video.webm"
  }}
  overlayImageSrc="/my-overlay.png"
  backgroundTextSrc="/my-bg-text.png"
/>
```

### Advanced Implementation
```tsx
// ✅ Advanced: Full customization
<Hero
  videoSrc={{
    mp4: "/videos/hero.mp4",
    webm: "/videos/hero.webm"
  }}
  overlayImageSrc="/images/overlay.png"
  backgroundTextSrc="/images/bg-text.png"
  backgroundColor="#000000"
  className="my-hero-section"
/>
```

### ❌ Common Mistakes to Avoid
```tsx
// ❌ Don't: Missing video files
<Hero videoSrc={{ mp4: "/missing.mp4", webm: "/missing.webm" }} />

// ❌ Don't: Invalid image paths
<Hero backgroundTextSrc="/nonexistent.png" />

// ❌ Don't: Missing both video formats
<Hero videoSrc={{ mp4: "/video.mp4", webm: "" }} />
```

---

## 🎨 Customization Guidelines

### Video Requirements
- **Format**: MP4 (primary) + WebM (fallback)
- **Resolution**: 3840x2876 (native aspect ratio)
- **Size**: Optimize for web (recommend <10MB total)
- **Duration**: 10-30 seconds for best performance
- **Background**: Should have black/dark background

### Image Requirements
- **Overlay Image**: PNG with transparency support
- **Background Text**: PNG with transparency
- **Size**: Optimize for web (recommend <2MB each)
- **Format**: PNG preferred for transparency

### Color Customization
```tsx
// ✅ Good: Dark backgrounds
<Hero backgroundColor="#000000" />
<Hero backgroundColor="#090b0c" />
<Hero backgroundColor="#1a1a1a" />

// ⚠️ Caution: Light backgrounds may need overlay adjustments
<Hero backgroundColor="#ffffff" />
```

### Positioning Guidelines
The component uses fixed positioning that works well for:
- **Overlay Image**: Positioned at 70.6% top, 44.7% left
- **Background Text**: Positioned at 50% top, 52% left
- **Flashlight Effect**: 200px radius with smooth edges

---

## ⚡ Performance Guidelines

### Video Optimization
1. **Compress videos** using tools like HandBrake or FFmpeg
2. **Use multiple formats** (MP4 + WebM) for browser compatibility
3. **Consider video length** - shorter videos load faster
4. **Test on mobile** - ensure smooth playback

### Image Optimization
1. **Compress PNG files** using tools like TinyPNG
2. **Use appropriate dimensions** - don't use oversized images
3. **Consider WebP format** for better compression (with fallbacks)

### Loading Performance
```tsx
// ✅ Good: Preload critical assets
<link rel="preload" href="/videos/hero.mp4" as="video" />
<link rel="preload" href="/bg-text-merged.png" as="image" />

// ✅ Good: Lazy load non-critical images
<Hero overlayImageSrc="/overlay.png" /> // Loads when needed
```

### Memory Management
- The component automatically handles cleanup
- No memory leaks from event listeners
- Efficient CSS masking for flashlight effect

---

## ♿ Accessibility Guidelines

### Video Accessibility
```tsx
// ✅ Add captions for video content
<video>
  <source src="/hero.mp4" type="video/mp4" />
  <track kind="captions" src="/captions.vtt" />
</video>
```

### Keyboard Navigation
- Component is focusable by default
- Flashlight effect works with mouse only
- Consider adding keyboard alternatives for interactive elements

### Screen Reader Support
```tsx
// ✅ Good: Descriptive alt text
<img alt="Hero illustration showing product interface" />
<img alt="Background text with company information" />

// ❌ Avoid: Generic alt text
<img alt="image" />
<img alt="text" />
```

### Color Contrast
- Ensure sufficient contrast between text and background
- Test with color blindness simulators
- Provide alternative text for color-dependent information

---

## 🌐 Browser Support Guidelines

### Supported Browsers
- ✅ Chrome 80+
- ✅ Firefox 75+
- ✅ Safari 13+
- ✅ Edge 80+
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

### CSS Features Used
- `aspect-ratio` - Modern browsers only
- `mask-image` - WebKit browsers + Firefox
- `object-fit: cover` - All modern browsers
- `styled-jsx` - Next.js specific

### Fallbacks
```css
/* Fallback for older browsers */
.hero-aspect-wrapper {
  aspect-ratio: 3840 / 2876;
  /* Fallback */
  height: 0;
  padding-bottom: 74.9%; /* 2876/3840 * 100 */
}
```

---

## 🔧 Troubleshooting

### Common Issues

#### Video Not Playing
```tsx
// ✅ Check: Video file paths
<Hero videoSrc={{
  mp4: "/videos/hero.mp4",  // Ensure file exists
  webm: "/videos/hero.webm" // Ensure file exists
}} />

// ✅ Check: Video format compatibility
// MP4: H.264 codec recommended
// WebM: VP9 codec recommended
```

#### Flashlight Effect Not Working
```tsx
// ✅ Check: Image file exists
<Hero backgroundTextSrc="/bg-text-merged.png" />

// ✅ Check: Browser support for CSS masks
// Test in Chrome/Firefox/Safari
```

#### Layout Issues
```tsx
// ✅ Check: Container has proper dimensions
<div style={{ height: '100vh', width: '100%' }}>
  <Hero />
</div>

// ✅ Check: No conflicting CSS
<Hero className="my-hero" /> // Avoid global styles
```

### Debug Mode
```tsx
// Add debug styles to see component boundaries
<Hero className="debug-hero" />

// CSS for debugging
.debug-hero {
  border: 2px solid red !important;
}
```

---

## 🏆 Best Practices

### Code Organization
```tsx
// ✅ Good: Separate component file
// components/PortableHero/Hero.tsx

// ✅ Good: Type definitions
import { HeroProps } from './types';

// ✅ Good: Clean imports
import { Hero } from './components/PortableHero';
```

### Asset Management
```tsx
// ✅ Good: Organized asset structure
public/
├── videos/
│   ├── hero.mp4
│   └── hero.webm
├── images/
│   ├── overlay.png
│   └── bg-text.png

// ✅ Good: Consistent naming
hero-video.mp4
hero-overlay.png
hero-bg-text.png
```

### Performance Monitoring
```tsx
// ✅ Good: Monitor loading times
useEffect(() => {
  const startTime = performance.now();
  // Component loaded
  const loadTime = performance.now() - startTime;
  console.log(`Hero loaded in ${loadTime}ms`);
}, []);
```

### Testing Guidelines
1. **Test on multiple devices** - Desktop, tablet, mobile
2. **Test video playback** - Different browsers and networks
3. **Test flashlight effect** - Mouse movement and touch
4. **Test responsive behavior** - Different screen sizes
5. **Test accessibility** - Screen readers and keyboard navigation

### Maintenance
1. **Update dependencies** regularly
2. **Monitor performance** metrics
3. **Test browser compatibility** with new releases
4. **Optimize assets** periodically
5. **Update documentation** when making changes

---

## 📞 Support

### Getting Help
1. Check this guidelines document first
2. Review the README.md for basic usage
3. Check browser console for errors
4. Test with minimal configuration
5. Verify all assets are properly loaded

### Contributing
1. Follow the existing code style
2. Update documentation for new features
3. Test across multiple browsers
4. Ensure accessibility compliance
5. Optimize for performance

---

## 📝 Changelog

### Version 1.0.0
- Initial release
- Self-contained component
- Flashlight cursor effect
- Responsive video scaling
- TypeScript support
- Complete documentation

---

*Last updated: [Current Date]*
*Version: 1.0.0*
