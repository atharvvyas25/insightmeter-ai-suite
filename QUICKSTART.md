# Quick Start Guide - InsightMeter AI Suite

## 🚀 Get Started in 3 Steps

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Add Your API Key
Open `src/api.js` and replace `YOUR_API_KEY` with your actual OpenAI API key:

```javascript
const API_KEY = 'sk-your-actual-api-key-here';
```

### Step 3: Run the App
```bash
npm start
```

The app will open at `http://localhost:3000`

---

## 🎨 What You'll See

### Home Page
- Beautiful animated hero section
- 5 feature cards for different AI tools
- Click any card to navigate to that tool

### Sidebar Navigation
- Click the hamburger menu to toggle sidebar
- Navigate between tools:
  - 🏠 Home
  - 📊 Text Analyzer
  - 📄 Resume Reviewer
  - ✨ AI Rewrite
  - 🔑 Keyword Extractor
  - ✅ Grammar Fixer

### Using the Tools

**Text Analyzer:**
1. Paste text in the textarea
2. Click "Analyze Text"
3. See instant metrics + AI analysis
4. Watch the animated cards appear!

**Resume Reviewer:**
1. Paste your resume text
2. Click "Review Resume"
3. Get 3 animated score circles
4. See strengths, keywords, and improvements

**AI Rewrite:**
1. Enter text to improve
2. Click "Rewrite Text"
3. Watch AI type the improved version
4. Copy to clipboard

**Keyword Extractor:**
1. Paste any text
2. Click "Extract Keywords"
3. See animated keyword chips

**Grammar Fixer:**
1. Enter text with errors
2. Click "Fix Grammar"
3. See corrected version + changes list

---

## 🎬 Animation Features

All tools feature:
- ✨ Smooth page transitions
- 🎯 Staggered card animations
- 💬 Typing effect for AI responses
- 🎨 3D tilt on hover
- 🌊 Parallax background shapes
- ⚡ Instant feedback

---

## 🔧 Troubleshooting

**API Key Error?**
- Make sure you replaced `YOUR_API_KEY` in `src/api.js`
- Check your API key is valid
- Ensure you have API credits

**Animations Not Working?**
- GSAP is included in package.json
- Run `npm install` again if needed

**Sidebar Not Showing?**
- Click the hamburger menu (☰) in top-left
- On mobile, sidebar auto-hides

---

## 🎯 Tips

1. **Try the typing effect** - Watch AI responses type out character by character
2. **Hover over cards** - See the 3D tilt effect
3. **Move your mouse** - Background shapes follow your cursor
4. **Toggle sidebar** - Works on desktop and mobile
5. **Check animations** - Every page transition is animated

---

## 📱 Mobile Support

The app is fully responsive:
- Sidebar collapses on mobile
- Cards stack vertically
- Touch-friendly buttons
- Optimized layouts

---

## 🎨 Customization

Want to change colors? Edit `src/styles/global.css`:

```css
:root {
  --primary: #667eea;      /* Main purple */
  --secondary: #764ba2;    /* Dark purple */
  --accent: #f093fb;       /* Pink accent */
}
```

---

## 🚀 Ready to Build?

```bash
npm run build
```

Creates production-ready files in the `build` folder.

---

Enjoy your modern AI SaaS dashboard! 🎉
