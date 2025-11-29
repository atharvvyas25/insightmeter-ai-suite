# InsightMeter AI Suite 🤖

A stunning, modern AI SaaS dashboard built with React, featuring powerful AI-driven writing tools with beautiful GSAP animations and glassmorphism design.

## ✨ Features

### 🏠 Home Dashboard
- Beautiful animated hero section
- Feature cards with hover effects
- Smooth GSAP entrance animations

### 📊 Text Analyzer
- Rule-based metrics (words, sentences, reading time, readability)
- AI-powered analysis (summary, tone, grammar, quality score)
- Animated stat cards with 3D tilt effects
- Chat-style AI responses with typing animation

### 📄 Resume Reviewer
- Overall, ATS, and Keyword scores with animated circles
- Missing sections detection
- Strengths and weaknesses analysis
- Suggested keywords for ATS optimization
- Improved resume summary
- Rewritten professional bullet points

### ✨ AI Rewrite Tool
- Transform text into professional content
- Chat bubble output with typing effect
- Copy to clipboard functionality

### 🔑 Keyword Extractor
- Extract important keywords from any text
- Animated keyword chips
- Beautiful grid layout

### ✅ Grammar Fixer
- AI-powered grammar correction
- Side-by-side comparison
- List of changes made

## 🎨 Design Features

- **Glassmorphism** - Modern frosted glass UI elements
- **Gradient Backgrounds** - Beautiful animated gradients
- **GSAP Animations** - Smooth, professional animations
- **3D Tilt Effects** - Interactive card hover effects
- **Parallax Background** - Floating shapes with mouse tracking
- **Typing Effects** - Realistic AI typing animation
- **Chat Interface** - Modern chat-style responses
- **Responsive Design** - Works on all screen sizes

## 🚀 Tech Stack

- **React 18** - Modern React with hooks
- **GSAP 3** - Professional animation library
- **Pure CSS** - No frameworks, custom styling
- **OpenAI API** - AI-powered analysis

## 📦 Installation

1. **Install dependencies:**
```bash
npm install
```

2. **Add your API key in `src/api.js`:**
```javascript
const API_KEY = 'YOUR_API_KEY'; // Replace with your actual API key
```

3. **Start the development server:**
```bash
npm start
```

4. **Open your browser:**
Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
src/
├── api.js                      # AI API integration
├── App.js                      # Main app with routing
├── index.js                    # Entry point
├── hooks/
│   └── useGSAP.js             # Custom GSAP hooks
├── components/
│   ├── Sidebar.js             # Animated sidebar navigation
│   ├── Header.js              # Top header bar
│   ├── Home.js                # Landing page
│   ├── ToolLayout.js          # Shared tool layout
│   ├── ChatBubble.js          # Chat message component
│   ├── StatCard.js            # Animated stat cards
│   ├── TextAnalyzer.js        # Text analysis tool
│   ├── ResumeReviewer.js      # Resume review tool
│   ├── RewriteTool.js         # AI rewrite tool
│   ├── KeywordExtractor.js    # Keyword extraction
│   └── GrammarFixer.js        # Grammar correction
└── styles/
    ├── global.css             # Global styles & variables
    ├── layout.css             # Layout & grid system
    ├── sidebar.css            # Sidebar styles
    ├── header.css             # Header styles
    ├── home.css               # Home page styles
    ├── cards.css              # Card components
    ├── chat.css               # Chat bubble styles
    └── animations.css         # Animation keyframes
```

## 🎬 Animations

The app features extensive GSAP animations:

- **Page Load** - Fade and slide-in effects
- **Header** - Slide down from top
- **Sidebar** - Slide in from left
- **Cards** - Staggered entrance with 3D tilt
- **Chat Bubbles** - Scale and fade with typing effect
- **Background Shapes** - Floating parallax animation
- **Hover Effects** - Smooth transitions on all interactive elements

## 🔧 API Configuration

Default configuration uses OpenAI. To customize:

1. Open `src/api.js`
2. Update `API_URL` for your provider
3. Update `MODEL` to your preferred model
4. Adjust request format if needed

## 🏗️ Build for Production

```bash
npm run build
```

Creates optimized production build in the `build` folder.

## 🎯 Key Features

- ✅ Modern AI SaaS dashboard design
- ✅ Glassmorphism UI with backdrop blur
- ✅ Full GSAP animation suite
- ✅ Chat-style AI responses
- ✅ Typing animation effects
- ✅ 3D card tilt interactions
- ✅ Parallax background shapes
- ✅ Responsive sidebar navigation
- ✅ Animated score circles
- ✅ Keyword chips with animations
- ✅ Error handling
- ✅ Loading states
- ✅ Copy to clipboard
- ✅ Mobile responsive

## 📝 License

MIT

---

Built with ❤️ using React, GSAP, and modern CSS
