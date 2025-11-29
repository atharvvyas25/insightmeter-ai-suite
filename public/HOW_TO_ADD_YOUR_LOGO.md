# 🎨 How to Add Your Logo

## 📥 Step 1: Save Your Logo

Save your InsightMeter logo image (the one you shared) as:

```
public/logo.png
```

**Important:**
- Use the EXACT filename: `logo.png`
- Place it in the `public` folder
- Keep the original format (PNG)

---

## ✅ Step 2: That's It!

The app is already configured to use `logo.png`:

### Locations using your logo:
1. **Homepage** - Large animated logo in hero section
2. **Sidebar** - Small logo in top left
3. **Header** - Medium logo in center

### Files already updated:
- ✅ `src/components/Home.js` - Uses `/logo.png`
- ✅ `src/components/Sidebar.js` - Uses `/logo.png`
- ✅ `src/components/Header.js` - Uses `/logo.png`
- ✅ CSS styling already in place

---

## 🖼️ Your Logo Image

The image you shared:
- Purple/blue "M" logo with cloud and lightbulb
- "Insight Meter" text
- Black background

**Just save it as `public/logo.png` and refresh your browser!**

---

## 📁 File Structure

```
public/
├── index.html
├── logo.png          ← Save your image here
└── logo.svg          ← Can delete this (old placeholder)
```

---

## 🚀 After Adding Logo

1. Save your logo as `public/logo.png`
2. Refresh browser (Ctrl + Shift + R)
3. Your logo will appear:
   - Homepage hero (large, animated)
   - Sidebar (small)
   - Header (medium)

---

## 💡 Tips

### If logo has black background:
The app has a dark theme, so your logo will blend in perfectly!

### If you want transparent background:
Edit your logo in an image editor to remove the black background and save as PNG with transparency.

### Logo size recommendations:
- Minimum: 200x200px
- Recommended: 400x400px or larger
- Format: PNG (supports transparency)

---

## ✅ Current Setup

All components are already configured to use your logo:

```jsx
// Homepage
<img src="/logo.png" alt="InsightMeter Logo" className="hero-logo" />

// Sidebar
<img src="/logo.png" alt="InsightMeter Logo" className="logo-image" />

// Header
<img src="/logo.png" alt="InsightMeter" className="header-logo" />
```

**Just add the file and it will work!** 🎉
