# Installation Instructions

## Prerequisites

Before you begin, ensure you have:
- **Node.js** (v14 or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js)
- **OpenAI API Key** - [Get one here](https://platform.openai.com/api-keys)

---

## Step-by-Step Installation

### 1. Verify Node.js Installation

Open your terminal and run:
```bash
node --version
npm --version
```

You should see version numbers. If not, install Node.js first.

---

### 2. Navigate to Project Directory

```bash
cd path/to/insightmeter-ai-suite
```

---

### 3. Install Dependencies

```bash
npm install
```

This will install:
- React 18.2.0
- React DOM 18.2.0
- React Scripts 5.0.1
- GSAP 3.12.5

**Expected output:**
```
added 1500+ packages in 30s
```

---

### 4. Configure API Key

Open `src/api.js` in your code editor and replace:

```javascript
const API_KEY = 'YOUR_API_KEY';
```

With your actual OpenAI API key:

```javascript
const API_KEY = 'sk-proj-xxxxxxxxxxxxxxxxxxxxx';
```

**Important:** Keep your API key secure! Don't commit it to version control.

---

### 5. Start Development Server

```bash
npm start
```

**Expected output:**
```
Compiled successfully!

You can now view insightmeter-ai-suite in the browser.

  Local:            http://localhost:3000
  On Your Network:  http://192.168.x.x:3000
```

---

### 6. Open in Browser

The app should automatically open at:
```
http://localhost:3000
```

If not, manually navigate to that URL.

---

## Verify Installation

You should see:

1. ✅ **Animated header** sliding down from top
2. ✅ **Sidebar** sliding in from left
3. ✅ **Home page** with hero section
4. ✅ **5 feature cards** with hover effects
5. ✅ **Floating background shapes**
6. ✅ **Smooth animations** everywhere

---

## Test the Features

### Quick Test Checklist

1. **Navigation**
   - [ ] Click sidebar items
   - [ ] Toggle sidebar with hamburger menu
   - [ ] See smooth page transitions

2. **Text Analyzer**
   - [ ] Paste sample text
   - [ ] Click "Analyze Text"
   - [ ] See animated stat cards
   - [ ] Watch AI response type out

3. **Resume Reviewer**
   - [ ] Paste resume text
   - [ ] Click "Review Resume"
   - [ ] See 3 animated score circles
   - [ ] View suggestions and keywords

4. **Other Tools**
   - [ ] Try AI Rewrite
   - [ ] Test Keyword Extractor
   - [ ] Use Grammar Fixer

---

## Troubleshooting

### Issue: `npm install` fails

**Solution:**
```bash
# Clear npm cache
npm cache clean --force

# Try again
npm install
```

---

### Issue: Port 3000 already in use

**Solution:**
```bash
# Kill process on port 3000 (Windows)
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Or use different port
set PORT=3001 && npm start
```

---

### Issue: API calls fail

**Possible causes:**
1. Invalid API key
2. No API credits
3. Network issues

**Solution:**
- Verify API key in `src/api.js`
- Check OpenAI account has credits
- Check console for error messages (F12)

---

### Issue: Animations not working

**Solution:**
```bash
# Reinstall dependencies
rm -rf node_modules
npm install
```

---

### Issue: Blank page

**Solution:**
1. Open browser console (F12)
2. Check for errors
3. Verify all files are present
4. Try clearing browser cache

---

## Build for Production

When ready to deploy:

```bash
npm run build
```

This creates optimized files in the `build` folder.

**Output:**
```
Creating an optimized production build...
Compiled successfully.

File sizes after gzip:

  50.2 KB  build/static/js/main.xxxxx.js
  2.5 KB   build/static/css/main.xxxxx.css
```

---

## Deployment

### Deploy to Netlify

1. Install Netlify CLI:
```bash
npm install -g netlify-cli
```

2. Deploy:
```bash
npm run build
netlify deploy --prod --dir=build
```

### Deploy to Vercel

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Deploy:
```bash
npm run build
vercel --prod
```

---

## Environment Variables (Optional)

For better security, use environment variables:

1. Create `.env` file:
```
REACT_APP_API_KEY=your_api_key_here
```

2. Update `src/api.js`:
```javascript
const API_KEY = process.env.REACT_APP_API_KEY;
```

3. Add `.env` to `.gitignore`

---

## File Structure Verification

Your project should have:

```
insightmeter-ai-suite/
├── node_modules/          (after npm install)
├── public/
│   └── index.html
├── src/
│   ├── components/        (12 files)
│   ├── hooks/            (1 file)
│   ├── styles/           (10 files)
│   ├── api.js
│   ├── App.js
│   └── index.js
├── .gitignore
├── package.json
├── README.md
├── QUICKSTART.md
├── FEATURES.md
├── DESIGN_GUIDE.md
└── INSTALLATION.md
```

---

## Getting Help

If you encounter issues:

1. Check browser console (F12) for errors
2. Review `QUICKSTART.md` for usage tips
3. Check `FEATURES.md` for feature list
4. Review `DESIGN_GUIDE.md` for customization

---

## Next Steps

Once installed:

1. ✅ Explore all 6 tools
2. ✅ Test animations and interactions
3. ✅ Customize colors in `src/styles/global.css`
4. ✅ Add your own features
5. ✅ Deploy to production

---

## Success! 🎉

You now have a fully functional, beautifully animated AI SaaS dashboard!

Enjoy building with InsightMeter AI Suite!
