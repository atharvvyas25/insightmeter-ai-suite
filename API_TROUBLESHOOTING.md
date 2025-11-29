# API Troubleshooting Guide

## ✅ Current Status

Your app is now running at: **http://localhost:3000**

### API Configuration:
- **Provider**: Groq (FREE and FAST!)
- **Model**: llama3-70b-8192
- **API Key**: Loaded from `.env` file
- **Status**: ✅ All functions restored

---

## 🔍 How to Test if API is Working

### 1. Open the App
Navigate to: http://localhost:3000

### 2. Try Text Analyzer
1. Click "Text Analyzer" in sidebar
2. Paste this sample text:
   ```
   This is a test. I want to see if the AI is working properly. It should analyze this text and give me feedback.
   ```
3. Click "🤖 Analyze Text"
4. Watch for:
   - ✅ Loading state appears
   - ✅ Animated cards show up
   - ✅ AI response types out

### 3. Check Browser Console
Press **F12** to open Developer Tools and check for:

**If Working:**
```
✅ No errors in console
✅ Network tab shows successful API calls
✅ Response data appears
```

**If Not Working:**
```
❌ Red errors in console
❌ 401 Unauthorized (bad API key)
❌ 429 Rate limit (too many requests)
❌ Network error (connection issue)
```

---

## 🐛 Common Issues & Solutions

### Issue 1: "API Key not found" or 401 Error

**Cause**: Environment variable not loaded

**Solution**:
1. Stop the server (Ctrl+C in terminal)
2. Verify `.env` file exists in root directory
3. Check `.env` contains:
   ```
   REACT_APP_API_KEY=your_groq_api_key_here
   ```
4. Restart server: `npm start`

---

### Issue 2: "Failed to parse JSON"

**Cause**: AI returned invalid JSON format

**Solution**: Already handled in code with:
```javascript
const clean = content
  .replace(/```json/g, "")
  .replace(/```/g, "")
  .trim();
```

If still failing, check console for actual response.

---

### Issue 3: "Groq request failed"

**Possible Causes**:
- Invalid API key
- Rate limit exceeded
- Network connection issue

**Solution**:
1. Verify API key is correct in `.env`
2. Check Groq dashboard for rate limits
3. Try again in a few seconds

---

### Issue 4: API works but no typing animation

**Cause**: Not an error - typing animation only shows for AI responses

**Check**:
- Look for chat bubbles appearing
- Text should type out character by character
- If instant, check `ChatBubble.js` typing prop

---

## 🧪 Test Each Tool

### Text Analyzer
```javascript
// Should return:
{
  summary: "...",
  tone: "Professional",
  grammarIssues: [...],
  score: 85,
  suggestions: [...]
}
```

### Resume Reviewer
```javascript
// Should return:
{
  overallScore: 75,
  atsScore: 80,
  keywordScore: 70,
  missingSections: [...],
  strengths: [...],
  weaknesses: [...],
  suggestedKeywords: [...],
  improvedSummary: "...",
  rewrittenBullets: [...]
}
```

### AI Rewrite
```javascript
// Should return:
{
  rewrittenText: "..."
}
```

### Keyword Extractor
```javascript
// Should return:
{
  keywords: ["keyword1", "keyword2", ...]
}
```

### Grammar Fixer
```javascript
// Should return:
{
  correctedText: "...",
  changes: [...]
}
```

---

## 🔧 Debug Mode

Add this to `src/api.js` to see what's happening:

```javascript
export async function callAI(prompt) {
  console.log('🚀 Calling Groq API...');
  console.log('📝 Prompt:', prompt.substring(0, 100) + '...');
  
  try {
    const response = await fetch(API_URL, {
      // ... existing code
    });

    console.log('✅ Response status:', response.status);
    
    const data = await response.json();
    console.log('📦 Raw response:', data);
    
    const content = data.choices[0].message.content;
    console.log('💬 AI content:', content);
    
    // ... rest of code
  } catch (error) {
    console.error('❌ Error:', error);
    throw error;
  }
}
```

---

## 📊 Check Network Tab

1. Open DevTools (F12)
2. Go to "Network" tab
3. Try an AI tool
4. Look for request to `api.groq.com`
5. Click on it to see:
   - Request headers (should have Authorization)
   - Request payload (your prompt)
   - Response (AI's answer)

---

## ✅ Verification Checklist

- [ ] App running at http://localhost:3000
- [ ] `.env` file exists with API key
- [ ] Server restarted after `.env` changes
- [ ] Browser console shows no errors
- [ ] Network tab shows successful API calls
- [ ] AI responses appear in UI
- [ ] Typing animation works
- [ ] All 5 tools functional

---

## 🎯 Quick Test Script

Open browser console and run:

```javascript
// Test if API key is loaded
console.log('API Key loaded:', !!process.env.REACT_APP_API_KEY);

// Test API call (if you expose callAI globally)
fetch('https://api.groq.com/openai/v1/chat/completions', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer your_groq_api_key_here'
  },
  body: JSON.stringify({
    model: 'llama3-70b-8192',
    messages: [{role: 'user', content: 'Say "API works!" in JSON format'}],
    temperature: 0.3
  })
})
.then(r => r.json())
.then(d => console.log('✅ API Response:', d))
.catch(e => console.error('❌ API Error:', e));
```

---

## 🆘 Still Not Working?

1. **Check Groq API Status**: https://status.groq.com/
2. **Verify API Key**: Log into Groq dashboard
3. **Check Rate Limits**: Free tier has limits
4. **Try Different Model**: Change to `llama3-8b-8192` (faster)
5. **Clear Browser Cache**: Hard refresh (Ctrl+Shift+R)
6. **Restart Everything**: Stop server, close browser, restart

---

## 📝 Current API Setup

```javascript
Provider: Groq
URL: https://api.groq.com/openai/v1/chat/completions
Model: llama3-70b-8192
API Key: From .env file
Temperature: 0.3 (more focused responses)
```

---

Your API should now be working! Test it at http://localhost:3000 🚀
