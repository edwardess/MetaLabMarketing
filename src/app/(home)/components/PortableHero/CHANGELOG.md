# Changelog

All notable changes to the Portable Hero Component will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added
- Nothing yet

### Changed
- Nothing yet

### Deprecated
- Nothing yet

### Removed
- Nothing yet

### Fixed
- Nothing yet

### Security
- Nothing yet

---

## [1.0.0] - 2024-01-XX

### Added
- Initial release of Portable Hero Component
- Self-contained React component with no external dependencies
- Interactive flashlight cursor effect on background text
- Responsive video scaling with aspect ratio preservation
- TypeScript support with full type definitions
- Configurable props for all assets and styling
- CSS-in-JS styling with styled-jsx for component isolation
- Support for MP4 and WebM video formats
- Smooth transitions and animations
- Cross-browser compatibility (Chrome, Firefox, Safari, Edge)
- Mobile-responsive design
- Accessibility considerations
- Comprehensive documentation (README, Guidelines, Examples)
- Package.json with metadata and dependencies
- Clean export structure with named and default exports

### Features
- **Video Background**: Full-screen responsive video with proper scaling
- **Overlay Images**: Positioned overlay images that scale with the video
- **Flashlight Effect**: Interactive cursor reveal effect on background text
- **Responsive Design**: Scales perfectly from mobile to desktop
- **Self-Contained**: No external CSS dependencies
- **TypeScript Ready**: Full type safety and IntelliSense support
- **Customizable**: All assets, colors, and styling can be configured
- **Performance Optimized**: Efficient rendering and smooth interactions

### Technical Details
- **Video Aspect Ratio**: 3840/2876 (1.335359)
- **Flashlight Radius**: 200px with smooth gradient edges
- **CSS Masking**: Uses modern CSS mask-image for flashlight effect
- **Browser Support**: Modern browsers with CSS mask support
- **Bundle Size**: Minimal JavaScript footprint
- **Memory Management**: Automatic cleanup of event listeners

### Documentation
- Complete README with installation and usage instructions
- Comprehensive Guidelines document with best practices
- Extensive Examples document with real-world use cases
- TypeScript type definitions
- Package metadata and dependency information

### Browser Support
- ✅ Chrome 80+
- ✅ Firefox 75+
- ✅ Safari 13+
- ✅ Edge 80+
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

### Dependencies
- React 16.8+ (hooks support required)
- Next.js 12+ (for styled-jsx support)
- TypeScript 4.0+ (optional but recommended)

---

## [0.1.0] - 2024-01-XX (Pre-release)

### Added
- Initial development version
- Basic video background functionality
- Simple overlay image positioning
- Prototype flashlight effect
- Basic responsive behavior

### Changed
- Multiple iterations of the flashlight effect
- Refined positioning and sizing
- Improved smoothness of transitions

### Fixed
- Video scaling issues on different screen sizes
- Flashlight effect edge smoothness
- CSS mask browser compatibility
- Memory leaks in event listeners

---

## Migration Guide

### From 0.1.0 to 1.0.0

#### Breaking Changes
- None (this is the first stable release)

#### New Features
- All features are new in this release
- Component is now completely self-contained
- Added TypeScript support
- Added comprehensive documentation

#### Migration Steps
1. Copy the new `PortableHero` folder to your project
2. Update imports to use the new structure:
   ```tsx
   // Old (if you had a previous version)
   import Hero from './components/Hero';
   
   // New
   import { Hero } from './components/PortableHero';
   ```
3. Add your assets to the `public` folder
4. Update any custom styling to use the new class names

---

## Contributing

When contributing to this project, please:

1. Update this changelog with your changes
2. Follow the existing format and structure
3. Include all relevant details about new features, fixes, and breaking changes
4. Update version numbers according to semantic versioning
5. Test your changes across multiple browsers
6. Update documentation as needed

---

## Version Numbering

This project uses [Semantic Versioning](https://semver.org/):

- **MAJOR** version when you make incompatible API changes
- **MINOR** version when you add functionality in a backwards compatible manner
- **PATCH** version when you make backwards compatible bug fixes

### Version Format
- `1.0.0` - Major.Minor.Patch
- `1.0.0-beta.1` - Pre-release versions
- `1.0.0-alpha.1` - Alpha versions

---

*For more information about this project, see the [README.md](./README.md) file.*
