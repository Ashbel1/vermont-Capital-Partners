# Framer Motion Scroll Animations Guide

## 🎬 Animation Components Available

### 1. **AnimatedSection** - Slide in from different directions
Animates content from left, right, up, or down as user scrolls.

```javascript
import { AnimatedSection } from '../AnimatedSection';

<AnimatedSection direction="left" delay={0.2}>
    <h2>Your Content Here</h2>
</AnimatedSection>
```

**Props:**
- `direction`: 'left', 'right', 'up', 'down' (default: 'left')
- `delay`: Animation delay in seconds (default: 0)
- `duration`: Animation duration in seconds (default: 0.6)
- `className`: Additional CSS classes

### 2. **FadeInSection** - Simple fade-in effect
Content fades in and slides up slightly.

```javascript
import { FadeInSection } from '../AnimatedSection';

<FadeInSection delay={0.1}>
    <p>This will fade in beautifully</p>
</FadeInSection>
```

**Props:**
- `delay`: Animation delay in seconds (default: 0)
- `duration`: Animation duration in seconds (default: 0.6)
- `className`: Additional CSS classes

### 3. **StaggerChildren** - Sequential animations
Animates child elements one after another.

```javascript
import { StaggerChildren } from '../AnimatedSection';

<StaggerChildren staggerDelay={0.15}>
    <div>Item 1</div>
    <div>Item 2</div>
    <div>Item 3</div>
</StaggerChildren>
```

**Props:**
- `staggerDelay`: Delay between each child animation (default: 0.1)
- `className`: Additional CSS classes

---

## 📝 Usage Examples

### Example 1: About Section (already implemented)
```javascript
import { AnimatedSection } from '../AnimatedSection';

// Image slides from left
<AnimatedSection direction="left" delay={0.2}>
    <div className="img-holder">
        <img src={image} alt="" />
    </div>
</AnimatedSection>

// Text slides from right
<AnimatedSection direction="right" delay={0.2}>
    <div className="content">
        <h2>Title</h2>
        <p>Description</p>
    </div>
</AnimatedSection>
```

### Example 2: Mission/Vision Cards (already implemented)
```javascript
// Three cards animate from different directions
<AnimatedSection direction="left" delay={0.2}>
    <div className="card">Mission</div>
</AnimatedSection>

<AnimatedSection direction="up" delay={0.3}>
    <div className="card">Vision</div>
</AnimatedSection>

<AnimatedSection direction="right" delay={0.4}>
    <div className="card">Values</div>
</AnimatedSection>
```

### Example 3: Services Grid
```javascript
import { StaggerChildren } from '../AnimatedSection';

<StaggerChildren staggerDelay={0.2}>
    {services.map(service => (
        <div key={service.id} className="service-card">
            <h3>{service.title}</h3>
            <p>{service.description}</p>
        </div>
    ))}
</StaggerChildren>
```

### Example 4: Hero Section
```javascript
import { FadeInSection } from '../AnimatedSection';

<FadeInSection delay={0.3}>
    <h1>Welcome to Our Site</h1>
</FadeInSection>

<FadeInSection delay={0.5}>
    <p>Discover amazing solutions</p>
</FadeInSection>
```

---

## 🎨 Animation Tips

### Timing
- **Quick**: duration={0.4} - Snappy, modern feel
- **Standard**: duration={0.6} - Balanced (default)
- **Smooth**: duration={0.8} - Elegant, premium feel

### Delays
- Use incremental delays (0.1, 0.2, 0.3) for sequential elements
- First element: delay={0.1} or delay={0.2}
- Subsequent elements: increase by 0.1-0.2 seconds

### Directions Pattern
```javascript
// Alternating pattern for balance
<AnimatedSection direction="left">Left side</AnimatedSection>
<AnimatedSection direction="right">Right side</AnimatedSection>
<AnimatedSection direction="left">Left side</AnimatedSection>

// Center focus
<AnimatedSection direction="left">Left item</AnimatedSection>
<AnimatedSection direction="up">Center item</AnimatedSection>
<AnimatedSection direction="right">Right item</AnimatedSection>
```

---

## 🚀 How to Add to Your Components

### Step 1: Import the animation component
```javascript
import { AnimatedSection, FadeInSection, StaggerChildren } from '../AnimatedSection';
```

### Step 2: Wrap your content
```javascript
// Before
<div className="content">
    <h2>Title</h2>
    <p>Text</p>
</div>

// After
<AnimatedSection direction="left" delay={0.2}>
    <div className="content">
        <h2>Title</h2>
        <p>Text</p>
    </div>
</AnimatedSection>
```

---

## ✅ Components Already Animated
- ✅ About Section - Left/Right slide animations
- ✅ Mission/Vision Section - Multi-directional animations

## 📋 Suggested Components to Animate
- Services Section
- Features Section
- Testimonials
- Team Section
- Portfolio/Projects
- Blog posts
- Footer sections

---

## 🔧 Customization

To adjust animation behavior, edit the files in:
`src/components/AnimatedSection/`

- `AnimatedSection.js` - Main directional animations
- `FadeInSection.js` - Fade effects
- `StaggerChildren.js` - Sequential animations

---

## 💡 Performance Notes

- Animations trigger **once** when scrolling into view
- Elements animate when 100px from viewport (adjustable)
- Uses Framer Motion's optimized animation engine
- No impact on initial page load

---

Happy animating! 🎉
