# Environment Variables Setup

## 📁 .env File Location

Your `.env` file is located in the **root directory** of the project:

```
insightmeter-ai-suite/
├── .env                    ← Your API key is here
├── .env.example           ← Template file
├── .gitignore             ← .env is ignored by git
├── package.json
├── public/
├── src/
└── ...
```

---

## ✅ Current Setup

Your `.env` file has been created with your API key:

```env
REACT_APP_API_KEY=your_groq_api_key_here
```

The `src/api.js` file now reads from this environment variable:

```javascript
const API_KEY = process.env.REACT_APP_API_KEY || 'YOUR_API_KEY';
```

---

## 🔒 Security

✅ `.env` is added to `.gitignore` - your API key won't be committed to git
✅ `.env.example` is provided as a template for others
✅ API key is loaded from environment variables

---

## 🔄 How to Update API Key

If you need to change your API key:

1. Open `.env` file in the root directory
2. Update the value:
   ```env
   REACT_APP_API_KEY=your_new_api_key_here
   ```
3. Restart the development server:
   ```bash
   # Stop the server (Ctrl+C)
   npm start
   ```

---

## ⚠️ Important Notes

1. **Restart Required**: After changing `.env`, you MUST restart the dev server
2. **Prefix Required**: React environment variables must start with `REACT_APP_`
3. **No Quotes**: Don't use quotes around the value in `.env`
4. **Git Safety**: `.env` is in `.gitignore` so it won't be pushed to GitHub

---

## 🚀 For Team Members

If someone else clones your project:

1. Copy `.env.example` to `.env`:
   ```bash
   copy .env.example .env
   ```

2. Add their own API key in `.env`:
   ```env
   REACT_APP_API_KEY=their_api_key_here
   ```

3. Start the app:
   ```bash
   npm install
   npm start
   ```

---

## 🧪 Testing

To verify your API key is loaded:

1. Start the app: `npm start`
2. Open browser console (F12)
3. Try any AI tool (Text Analyzer, Resume Reviewer, etc.)
4. If it works, your API key is configured correctly!

---

## 📝 Environment Variables Available

Currently configured:

| Variable | Purpose | Required |
|----------|---------|----------|
| `REACT_APP_API_KEY` | OpenAI API Key | Yes |

You can add more variables as needed:

```env
REACT_APP_API_KEY=your_key
REACT_APP_API_URL=https://api.openai.com/v1/chat/completions
REACT_APP_MODEL=gpt-4o-mini
```

Then use them in code:
```javascript
const API_URL = process.env.REACT_APP_API_URL;
const MODEL = process.env.REACT_APP_MODEL;
```

---

## ✅ Your Setup is Complete!

- ✅ `.env` file created with your API key
- ✅ `src/api.js` updated to use environment variables
- ✅ `.gitignore` updated to protect your key
- ✅ `.env.example` created for team members

You're all set! Just run `npm start` to launch the app.
