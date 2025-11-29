# 🔄 How to Restart the Server

## ⚠️ Important: Environment Variables

React **MUST** be restarted after changing `.env` file!

Environment variables are loaded **only once** when the server starts.

---

## 🚀 How to Restart

### Method 1: In Your Terminal

1. **Stop the server**:
   - Press `Ctrl + C` in the terminal where `npm start` is running

2. **Start again**:
   ```bash
   npm start
   ```

3. **Wait for**:
   ```
   Compiled successfully!
   Local: http://localhost:3000
   ```

4. **Refresh browser**: `Ctrl + Shift + R`

---

### Method 2: Close and Reopen Terminal

1. Close the terminal window
2. Open a new terminal
3. Navigate to project:
   ```bash
   cd path/to/insightmeter-ai-suite
   ```
4. Start server:
   ```bash
   npm start
   ```

---

## ✅ Verify API Key is Loaded

After restarting, open browser console (F12) and you should see:

```
🚀 Calling Groq API...
🔑 API Key present: true
🔑 API Key starts with: gsk_xxxxx
```

If you see:
```
🔑 API Key present: false
```

Then the `.env` file is not being read.

---

## 🔍 Troubleshooting

### Issue: API Key still not loading

**Check these:**

1. **File location**: `.env` must be in **root directory**
   ```
   insightmeter-ai-suite/
   ├── .env          ← Here!
   ├── package.json
   ├── src/
   └── ...
   ```

2. **File name**: Must be exactly `.env` (not `.env.txt`)

3. **Variable name**: Must start with `REACT_APP_`
   ```
   REACT_APP_API_KEY=your_key_here
   ```

4. **No quotes**: Don't use quotes
   ```
   ✅ REACT_APP_API_KEY=your_api_key
   ❌ REACT_APP_API_KEY="your_api_key"
   ```

5. **No spaces**: No spaces around `=`
   ```
   ✅ REACT_APP_API_KEY=your_api_key
   ❌ REACT_APP_API_KEY = your_api_key
   ```

---

## 🎯 Current .env Content

Your `.env` file should contain:

```
REACT_APP_API_KEY=your_groq_api_key_here
```

---

## 🚀 Quick Restart Steps

1. **Stop server**: `Ctrl + C`
2. **Start server**: `npm start`
3. **Wait for**: "Compiled successfully!"
4. **Refresh browser**: `Ctrl + Shift + R`
5. **Test**: Try Text Analyzer
6. **Check console**: Look for API key logs

---

## 💡 Alternative: Hardcode for Testing

If `.env` still doesn't work, temporarily hardcode the key in `src/api.js`:

```javascript
// Temporary - for testing only
const API_KEY = 'your_groq_api_key_here';
// const API_KEY = process.env.REACT_APP_API_KEY;
```

**Remember**: Remove this before committing to git!

---

## ✅ After Restart

You should see in console:
```
🚀 Calling Groq API...
🔑 API Key present: true
🔑 API Key starts with: gsk_xxxxx
📡 Response status: 200
✅ Got response from Groq
✅ Successfully parsed JSON
```

---

Now restart your server and try again! 🚀
