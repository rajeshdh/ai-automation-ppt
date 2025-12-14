# 🔑 How to Add Your Gemini API Key

## Quick Setup (2 minutes)

### Step 1: Get Your Free Gemini API Key

1. Visit: **https://makersuite.google.com/app/apikey**
2. Sign in with your Google account
3. Click **"Create API Key"**
4. Copy the generated key (starts with `AIza...`)

### Step 2: Add to Your App

Open the `.env` file in the project root and add your key:

```bash
# .env file
VITE_GEMINI_API_KEY=AIzaSy...your_actual_key_here
```

### Step 3: Restart the Server

The server will auto-restart when you save the `.env` file, or manually restart:

```bash
# Kill the current server (Ctrl+C)
# Then restart:
npm run dev
```

### Step 4: Test It!

Open http://localhost:3000 (or 3001) and navigate to:
- Slide #7: Email Summarizer
- Slide #8: Paper Finder
- Slide #11: Literature Review

Click the buttons and watch real AI responses! ✨

## Demo Mode (No API Key Needed)

If you don't add an API key, the app works with **mock responses** - perfect for:
- Learning the workflow patterns
- Testing the UI
- Presenting without internet
- Quick demos

## Gemini API Limits

**Free Tier:**
- 60 requests per minute
- 1,500 requests per day
- Perfect for workshops and demos

**Rate Limits:**
If you hit limits, the app will show:
```
Rate limit exceeded. Please try again in a moment.
```

## Troubleshooting

### API Key Not Working?
1. Check if the key is correct (no extra spaces)
2. Ensure it starts with `AIza`
3. Restart the dev server
4. Check browser console for errors

### Still Using Mock Responses?
1. Verify `.env` file exists in project root
2. Check the variable name is exactly: `VITE_GEMINI_API_KEY`
3. Restart the server after adding the key

### Want to Switch Back to Demo Mode?
Just remove or comment out the API key:
```bash
# VITE_GEMINI_API_KEY=AIza...
```

## For Your Workshop

### Before the Session:
- Add your API key
- Test all 3 workflows
- Have a backup plan (demo mode works great!)

### During the Session:
- Participants can use demo mode
- Share your API key if comfortable (rate limits apply)
- Or guide them to get their own (takes 2 min)

### After the Session:
- Participants take home working examples
- They can add their own keys later
- All code works in both modes!

---

**You're all set! 🚀**

The app is now ready for your 2-hour workshop at Chandigarh University!
