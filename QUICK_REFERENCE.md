# 🎯 Quick Reference - WebGL Effects

## 🚀 Quick Start

```bash
npm start          # Start development server
npm run build      # Build for production
```

## 📦 Effect Components

| Component | Import Path | Use Case |
|-----------|------------|----------|
| AIOrb | `../Effects/AIOrb` | 3D animated sphere |
| ParticleField | `../Effects/ParticleField` | Particle background |
| LiquidGlass | `../Effects/LiquidGlass` | Glass refraction |
| GlowText | `../Effects/GlowText` | 3D neon text |
| LaserBeam | `../Effects/LaserBeam` | Laser beam effect |
| ScrollReveal | `../Effects/ScrollReveal` | Scroll animations |

## 💡 Common Usage

### Add AI Orb
```jsx
import AIOrb from '../Effects/AIOrb';

<AIOrb style={{ width: '400px', height: '400px' }} />
```

### Add Scroll Animation
```jsx
import ScrollReveal from '../Effects/ScrollReveal';

<ScrollReveal direction="up" delay={0.2}>
  <YourContent />
</ScrollReveal>
```

### Add Particle Field
```jsx
import ParticleField from '../Effects/ParticleField';

<ParticleField style={{ opacity: 0.6 }} />
```

## 🎨 Customization

### Change Color
```jsx
color="#YOUR_COLOR"
emissive="#YOUR_COLOR"
```

### Adjust Speed
```jsx
rotation.x = time * 0.3  // Change 0.3
```

### Particle Count
```jsx
<ParticleSystem count={2000} />  // Adjust number
```

## ⚡ Performance Tips

- Reduce particle count on mobile
- Use `powerPreference: "high-performance"`
- Wrap in `<Suspense>` for lazy loading
- Monitor FPS in DevTools

## 🐛 Troubleshooting

| Issue | Solution |
|-------|----------|
| Effects not showing | Check WebGL support |
| Low FPS | Reduce particle count |
| Console errors | Verify dependencies installed |
| Blank screen | Check Suspense fallbacks |

## 📚 Documentation

- Full Guide: `WEBGL_EFFECTS_GUIDE.md`
- Summary: `PORTFOLIO_ENHANCEMENT_SUMMARY.md`
- This File: `QUICK_REFERENCE.md`

## 🎯 Effect Locations

- **Home**: AIOrb + ParticleField
- **Projects**: LiquidGlass + ScrollReveal
- **About**: ScrollReveal animations

---

**Need help?** Check the full documentation files! 📖

