# 🎨 WebGL Effects Components

This folder contains all the custom WebGL effect components inspired by Unicorn Studio templates.

## 📦 Components

### AIOrb.js
**3D Animated Sphere with Distortion**

```jsx
import AIOrb from './Effects/AIOrb';

<AIOrb style={{ width: '400px', height: '400px' }} />
```

Features:
- Continuous rotation
- Pulsing animation
- Dynamic distortion
- Purple gradient glow
- Metallic material

---

### ParticleField.js
**Animated Particle System**

```jsx
import ParticleField from './Effects/ParticleField';

<ParticleField style={{ opacity: 0.6 }} />
```

Features:
- 2000+ particles
- Rainbow colors
- Wave motion
- Spherical distribution
- Additive blending

---

### LiquidGlass.js
**Glass Sphere with Refraction**

```jsx
import LiquidGlass from './Effects/LiquidGlass';

<LiquidGlass style={{ height: '400px' }} />
```

Features:
- Chromatic aberration
- Floating animation
- Distortion effects
- Realistic glass refraction
- Transmission material

---

### GlowText.js
**3D Neon Text Effect**

```jsx
import GlowText from './Effects/GlowText';

<GlowText text="YOUR TEXT" style={{ height: '300px' }} />
```

Features:
- Pulsing glow
- Subtle rotation
- Emissive material
- Customizable text
- 3D depth

---

### LaserBeam.js
**Vertical Laser Beam**

```jsx
import LaserBeam from './Effects/LaserBeam';

<LaserBeam style={{ height: '500px' }} />
```

Features:
- Pulsing intensity
- Additive blending
- Dual-layer glow
- Smooth movement
- Cyan/blue gradient

---

### ScrollReveal.js
**Scroll-Triggered Animations**

```jsx
import ScrollReveal from './Effects/ScrollReveal';

<ScrollReveal direction="up" delay={0.2} duration={0.8}>
  <YourContent />
</ScrollReveal>
```

Props:
- `direction`: 'up', 'down', 'left', 'right'
- `delay`: Animation delay in seconds
- `duration`: Animation duration in seconds

Features:
- Fade + slide + scale
- One-time trigger
- Smooth easing
- Customizable timing

---

## 🎯 Usage Tips

### Performance
- Wrap in `<Suspense>` for lazy loading
- Use `opacity` to blend with background
- Adjust particle count for performance
- Monitor FPS in DevTools

### Styling
- All components accept `style` prop
- Use `position: absolute` for layering
- Adjust `zIndex` for proper stacking
- Set `pointerEvents: none` for backgrounds

### Customization
- Colors can be changed in component files
- Animation speeds adjustable in `useFrame` hooks
- Particle counts configurable
- Materials fully customizable

---

## 🚀 Examples

### Layered Background
```jsx
<div style={{ position: 'relative' }}>
  <ParticleField style={{ 
    position: 'absolute', 
    opacity: 0.6, 
    zIndex: 1 
  }} />
  <YourContent style={{ position: 'relative', zIndex: 2 }} />
</div>
```

### Behind Element
```jsx
<div style={{ position: 'relative' }}>
  <AIOrb style={{ 
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    opacity: 0.7,
    zIndex: 1
  }} />
  <YourElement style={{ position: 'relative', zIndex: 2 }} />
</div>
```

### Scroll Animations
```jsx
<ScrollReveal direction="up">
  <Section1 />
</ScrollReveal>

<ScrollReveal direction="left" delay={0.2}>
  <Section2 />
</ScrollReveal>

<ScrollReveal direction="right" delay={0.4}>
  <Section3 />
</ScrollReveal>
```

---

## 🎨 Color Scheme

All effects use the portfolio's purple theme:
- Primary: `#c770f0`
- Secondary: `#cd5ff8`
- Accent: `#7f00ff`

To customize, edit the color values in each component.

---

## ⚡ Performance Notes

- **ParticleField**: Most intensive, use sparingly
- **AIOrb**: Medium performance impact
- **LiquidGlass**: Medium performance impact
- **GlowText**: Low performance impact
- **LaserBeam**: Low performance impact
- **ScrollReveal**: Minimal performance impact

---

## 📚 Dependencies

These components require:
- `three`
- `@react-three/fiber`
- `@react-three/drei`
- `framer-motion` (ScrollReveal only)

---

**Created with inspiration from Unicorn Studio** ✨

