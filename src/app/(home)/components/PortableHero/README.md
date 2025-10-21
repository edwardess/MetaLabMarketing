# Portable Hero Component

A self-contained, interactive hero component with video background, overlay images, and flashlight cursor effect.

## Features

✅ **Self-contained styles** - No external CSS dependencies  
✅ **Configurable props** - Customize all assets and colors  
✅ **TypeScript support** - Full type safety  
✅ **Responsive design** - Scales perfectly on all devices  
✅ **Flashlight effect** - Interactive cursor reveal on background text  
✅ **Video scaling** - Smooth responsive video with overlay images  

## Quick Start

### Basic Usage
```tsx
import { Hero } from './components/PortableHero';

export default function Page() {
  return (
    <main>
      <Hero />
    </main>
  );
}
```

### Custom Configuration
```tsx
import { Hero } from './components/PortableHero';

export default function Page() {
  return (
    <main>
      <Hero
        videoSrc={{
          mp4: "/custom-video.mp4",
          webm: "/custom-video.webm"
        }}
        overlayImageSrc="/custom-overlay.png"
        backgroundTextSrc="/custom-bg-text.png"
        backgroundColor="#000000"
        className="my-custom-class"
      />
    </main>
  );
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `videoSrc` | `{mp4: string, webm: string}` | `{mp4: "/videos/hero.mp4", webm: "/videos/hero.webm"}` | Video sources for MP4 and WebM formats |
| `overlayImageSrc` | `string` | `"https://i.postimg.cc/bdc55xvK/hero-illustration-7100a376.png"` | Main overlay image URL |
| `backgroundTextSrc` | `string` | `"/bg-text-merged.png"` | Background text image for flashlight effect |
| `backgroundColor` | `string` | `"#090b0c"` | Background color of the hero section |
| `className` | `string` | `""` | Additional CSS classes |

## File Structure

```
PortableHero/
├── Hero.tsx          # Main component file
├── index.ts          # Export file
└── README.md         # This documentation
```

## Required Assets

Place these files in your project's `public` folder:

```
public/
├── videos/
│   ├── hero.mp4      # Your video file (MP4 format)
│   └── hero.webm     # Your video file (WebM format)
├── bg-text-merged.png # Background text image for flashlight
└── your-overlay.png   # Your overlay image
```

## Features Explained

### 1. Responsive Video Scaling
- Video scales smoothly from mobile to desktop
- Maintains aspect ratio (3840/2876)
- Centers on wide screens with black background

### 2. Flashlight Effect
- Interactive cursor reveal on background text
- Smooth, realistic flashlight beam
- Bright center with soft edges
- Follows mouse movement in real-time

### 3. Self-Contained Styles
- All styles are scoped to the component
- No external CSS dependencies
- Uses `styled-jsx` for component-scoped styling
- Includes CSS reset for consistent rendering

## Browser Support

- ✅ Chrome/Edge (modern versions)
- ✅ Firefox (modern versions)
- ✅ Safari (modern versions)
- ✅ Mobile browsers

## Installation

1. Copy the `PortableHero` folder to your project
2. Add your video and image files to the `public` folder
3. Import and use the component

```tsx
import { Hero } from './components/PortableHero';
```

## Customization

The component is designed to be easily customizable:

1. **Colors**: Change `backgroundColor` prop
2. **Images**: Replace `overlayImageSrc` and `backgroundTextSrc`
3. **Videos**: Update `videoSrc` with your video files
4. **Styling**: Add custom classes via `className` prop
5. **Positioning**: Modify the CSS values in the `<style jsx>` block

## Performance

- Optimized video loading with multiple formats
- Efficient CSS masking for flashlight effect
- Minimal JavaScript for smooth interactions
- Responsive images with proper sizing

## Migration

If you were using this component with external CSS:

1. Copy the `PortableHero` folder to your new project
2. Add your video and image files to the `public` folder
3. Import and use the component - no additional setup needed!

The component now includes all necessary styles internally and will work in any React/Next.js project without external dependencies.
