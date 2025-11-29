# Design Guide - InsightMeter AI Suite

## 🎨 Color Palette

### Primary Colors
```css
--primary: #667eea      /* Main Purple */
--secondary: #764ba2    /* Dark Purple */
--accent: #f093fb       /* Pink Accent */
```

### Semantic Colors
```css
--success: #10b981      /* Green - Success states */
--warning: #f59e0b      /* Orange - Warnings */
--danger: #ef4444       /* Red - Errors */
```

### Neutral Colors
```css
--dark: #1a1a2e         /* Dark text */
--light: #f8f9fa        /* Light backgrounds */
```

### Gradients
```css
/* Primary Gradient */
linear-gradient(135deg, #667eea 0%, #764ba2 100%)

/* Accent Gradient */
linear-gradient(135deg, #f093fb 0%, #f5576c 100%)

/* Success Gradient */
linear-gradient(135deg, #10b981 0%, #059669 100%)

/* Blue Gradient */
linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)
```

---

## 🎭 Typography

### Font Family
```css
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 
             'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 
             'Droid Sans', 'Helvetica Neue', sans-serif;
```

### Font Sizes
- **Hero Title**: 4rem (64px)
- **Page Title**: 2.5rem (40px)
- **Section Title**: 2rem (32px)
- **Card Title**: 1.5rem (24px)
- **Body**: 1rem (16px)
- **Small**: 0.9rem (14px)

### Font Weights
- **Light**: 300
- **Regular**: 400
- **Medium**: 500
- **Semibold**: 600
- **Bold**: 700
- **Extra Bold**: 800

---

## 📐 Spacing System

### Padding/Margin Scale
```css
0.25rem = 4px
0.5rem  = 8px
0.75rem = 12px
1rem    = 16px
1.5rem  = 24px
2rem    = 32px
2.5rem  = 40px
3rem    = 48px
4rem    = 64px
```

### Component Spacing
- **Card Padding**: 1.5rem - 2rem
- **Section Margin**: 2rem - 4rem
- **Grid Gap**: 1rem - 2rem
- **Button Padding**: 0.75rem 1.5rem

---

## 🎯 Border Radius

```css
Small:  8px   /* Buttons, inputs */
Medium: 12px  /* Cards, panels */
Large:  16px  /* Large cards */
XLarge: 20px  /* Hero sections */
Round:  50px  /* Pills, chips */
Circle: 50%   /* Avatars, icons */
```

---

## 💫 Shadows

### Card Shadows
```css
/* Default */
box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);

/* Hover */
box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);

/* Active/Pressed */
box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
```

### Colored Shadows
```css
/* Primary */
box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);

/* Accent */
box-shadow: 0 6px 20px rgba(245, 87, 108, 0.3);
```

---

## 🪟 Glassmorphism

### Standard Glass Effect
```css
background: rgba(255, 255, 255, 0.95);
backdrop-filter: blur(20px);
-webkit-backdrop-filter: blur(20px);
border: 1px solid rgba(255, 255, 255, 0.3);
box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
```

### Light Glass
```css
background: rgba(255, 255, 255, 0.5);
backdrop-filter: blur(10px);
```

### Dark Glass
```css
background: rgba(0, 0, 0, 0.2);
backdrop-filter: blur(20px);
```

---

## 🎬 Animation Timing

### Durations
```css
Fast:    0.2s - 0.3s  /* Hover effects */
Normal:  0.4s - 0.6s  /* Page transitions */
Slow:    0.8s - 1.2s  /* Entrance animations */
Counter: 1.5s         /* Number animations */
```

### Easing Functions
```css
ease-out:     cubic-bezier(0, 0, 0.2, 1)
ease-in-out:  cubic-bezier(0.4, 0, 0.2, 1)
power3.out:   GSAP easing (smooth)
back.out:     GSAP easing (bounce)
```

### Stagger Delays
```css
Cards:    0.1s - 0.15s
Bubbles:  0.05s
Keywords: 0.05s
```

---

## 🎨 Component Styles

### Buttons
```css
/* Primary Button */
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
color: white;
padding: 0.75rem 1.5rem;
border-radius: 12px;
font-weight: 600;
box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
transition: all 0.3s ease;

/* Hover */
transform: translateY(-2px);
box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
```

### Cards
```css
/* Stat Card */
background: rgba(255, 255, 255, 0.95);
backdrop-filter: blur(20px);
padding: 1.5rem;
border-radius: 16px;
box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
border: 1px solid rgba(255, 255, 255, 0.3);
transition: all 0.3s ease;

/* Hover */
transform: translateY(-5px);
box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
```

### Chat Bubbles
```css
/* AI Bubble */
background: rgba(255, 255, 255, 0.95);
backdrop-filter: blur(20px);
padding: 1.25rem;
border-radius: 16px;
border-bottom-left-radius: 4px;
box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
```

### Inputs
```css
/* Textarea */
background: rgba(255, 255, 255, 0.5);
border: 2px solid rgba(102, 126, 234, 0.2);
border-radius: 16px;
padding: 1.5rem;
transition: all 0.3s ease;

/* Focus */
border-color: #667eea;
box-shadow: 0 0 0 4px rgba(102, 126, 234, 0.1);
background: white;
```

---

## 🎯 Layout Grid

### Breakpoints
```css
Mobile:  < 768px
Tablet:  768px - 1199px
Desktop: 1200px+
```

### Grid Systems
```css
/* Two Column */
grid-template-columns: 1fr 1fr;
gap: 2rem;

/* Auto Fit */
grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
gap: 2rem;

/* Stats Grid */
grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
gap: 1.5rem;
```

---

## 🌟 Special Effects

### 3D Tilt
```javascript
// On mouse move
rotateX: (y - centerY) / 10
rotateY: (centerX - x) / 10
```

### Parallax
```javascript
// Background shapes
x: (mouseX / windowWidth - 0.5) * 50
y: (mouseY / windowHeight - 0.5) * 50
```

### Typing Effect
```javascript
// Character delay
interval: 20ms per character
```

---

## 📱 Responsive Rules

### Mobile (< 768px)
- Sidebar collapses to icons only
- Single column layouts
- Reduced font sizes
- Full-width buttons
- Stacked cards

### Tablet (768px - 1199px)
- Sidebar visible
- Two column grids
- Medium font sizes
- Flexible layouts

### Desktop (1200px+)
- Full sidebar with labels
- Multi-column grids
- Large font sizes
- Maximum width: 1600px

---

## 🎨 Icon Usage

### Emoji Icons
```
🤖 AI / Bot
👤 User
📊 Analytics
📄 Document
✨ Magic / Enhance
🔑 Keywords
✅ Success / Check
⚠️ Warning
❌ Error
💡 Suggestion
🏠 Home
⏳ Loading
📝 Text
📏 Metrics
⏱️ Time
📖 Reading
```

---

## ✨ Best Practices

### Do's
✅ Use glassmorphism for panels
✅ Add smooth transitions
✅ Include hover states
✅ Use gradient text for titles
✅ Add loading states
✅ Show error messages
✅ Animate entrances
✅ Use consistent spacing

### Don'ts
❌ Mix too many colors
❌ Skip hover effects
❌ Use harsh transitions
❌ Forget mobile styles
❌ Ignore loading states
❌ Use tiny touch targets
❌ Overcomplicate animations

---

This design system ensures consistency across the entire application!
