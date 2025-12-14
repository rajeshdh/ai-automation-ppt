# AI Automation Workflows - 2-Hour Workshop Guide

## 🎯 Workshop Overview
Interactive 2-hour hands-on session for Chandigarh University faculty and researchers. Participants will build **3 real AI-powered workflows** using n8n, Zapier, and Gemini AI.

## ⏱️ Workshop Timeline

### **0:00-0:20** | Introduction (20 min)
- What is workflow automation?
- n8n vs Zapier comparison
- Gemini AI integration basics
- Setup check & API keys

### **0:20-0:35** | Workflow 1: Email Summarizer (15 min)
**Goal:** Automatically summarize long emails with Gemini AI

**What participants build:**
- Email → Gemini AI → Summary
- Extract action items automatically
- Send to Slack/Email

**Slide:** #7

### **0:35-0:50** | Workflow 2: Research Paper Finder (15 min)
**Goal:** Find relevant research papers using AI recommendations

**What participants build:**
- Topic input → Gemini AI → Ranked paper list
- Extract metadata (authors, citations)
- Save to Notion/Database

**Slide:** #8

### **0:50-1:00** | Coffee Break (10 min)
Stretch, questions, troubleshooting

**Slide:** #9

### **1:00-1:30** | Workflow 3: Complete Literature Review (30 min)
**Goal:** End-to-end automated literature review pipeline

**What participants build:**
- arXiv API search
- Filter by citations
- Gemini AI analysis
- Extract metadata
- Generate summary report
- Email to team + Save to database

**Slide:** #11

### **1:30-2:00** | Wrap Up & Deployment (30 min)
- Deploy workflows to production
- Best practices & security
- Q&A
- Next steps & resources

**Slides:** #12-15

## 🛠️ Setup Instructions

### Before the Workshop

1. **Install Dependencies:**
```bash
npm install
```

2. **Set Up Gemini API Key:**
   - Visit: https://makersuite.google.com/app/apikey
   - Click "Create API Key"
   - Copy the key
   - Add to `.env` file:
   ```
   VITE_GEMINI_API_KEY=your_key_here
   ```

3. **Start Development Server:**
```bash
npm run dev
```
Visit: http://localhost:3001

### Participant Setup (Share with attendees)

**Option 1: Use Demo Mode (No API Key)**
- The app works with mock responses
- Perfect for learning the workflow patterns
- No Gemini API key needed

**Option 2: Use Real Gemini AI**
- Get free API key: https://makersuite.google.com/app/apikey
- 60 requests/minute on free tier
- Real AI-powered summaries

## 📚 Three Workflows Explained

### 1. Email Summarizer (Simple - 15 min)

**Workflow Steps:**
1. **Trigger:** New email received
2. **AI Analysis:** Gemini summarizes content
3. **Action:** Send summary to Slack

**n8n Nodes:**
- Gmail Trigger
- HTTP Request (Gemini API)
- Slack Send Message

**Learning Points:**
- Basic trigger-action pattern
- API authentication
- Prompt engineering
- Error handling

**Demo Features:**
- Live text input
- Real-time AI processing
- Animated workflow steps
- Action item extraction

---

### 2. Research Paper Finder (Medium - 15 min)

**Workflow Steps:**
1. **Input:** Research topic + keywords
2. **AI Search:** Gemini recommends papers
3. **Action:** Save to Notion database

**n8n Nodes:**
- Webhook/Manual Trigger
- HTTP Request (Gemini API)
- Notion Create Page

**Learning Points:**
- Form data handling
- AI-powered search
- Database integration
- Structured output parsing

**Demo Features:**
- Topic input form
- Keyword extraction
- Paper ranking
- Citation analysis

---

### 3. Complete Literature Review (Advanced - 30 min)

**Workflow Steps:**
1. **Search:** Query arXiv API
2. **Filter:** By citations & relevance
3. **Analyze:** Gemini extracts insights
4. **Extract:** Authors, dates, citations
5. **Summarize:** Generate report
6. **Notify:** Email team + Save to DB

**n8n Nodes:**
- Schedule Trigger (daily/weekly)
- HTTP Request (arXiv API)
- Code Node (filter logic)
- HTTP Request (Gemini API)
- Multiple HTTP Requests (for each paper)
- Code Node (aggregate data)
- Gmail Send
- Notion/Airtable Create

**Learning Points:**
- Multi-step workflows
- API pagination
- Loop through items
- Data aggregation
- Scheduled automation
- Error recovery

**Demo Features:**
- 6-step visual pipeline
- Progress indicators
- Real-time status updates
- Complete workflow simulation

## 🎨 Interactive Components

### 1. **WorkflowCanvas**
- Auto-playing workflow animation
- Data flow particles
- Pulse effects on active nodes

### 2. **EmailSummarizer**
- Live text input/output
- AI processing animation
- Workflow step visualization

### 3. **PaperFinder**
- Form-based input
- AI search simulation
- Results display

### 4. **LiteratureReview**
- Complete 6-step pipeline
- Real-time progress tracking
- Success/error states

### 5. **APIPlayground**
- Test HTTP requests
- Request/response viewer
- cURL generator

### 6. **ZapierBuilder**
- Interactive trigger selection
- Action selection
- Visual flow builder

### 7. **DataFlow**
- Data transformation pipeline
- Extract → Filter → Enrich
- JSON visualization

## 🎯 Learning Outcomes

By the end of the workshop, participants will:

✅ **Understand:**
- Workflow automation fundamentals
- n8n vs Zapier trade-offs
- When to use AI in workflows
- Best practices & security

✅ **Build:**
- 3 complete working workflows
- Gemini AI integrations
- Database connections
- Email/Slack notifications

✅ **Deploy:**
- Workflows to production
- Environment variables setup
- Error handling
- Monitoring & logging

## 🔑 API Keys & Credentials

### Gemini AI (Required)
- Get key: https://makersuite.google.com/app/apikey
- Free tier: 60 requests/minute
- Add to `.env`: `VITE_GEMINI_API_KEY=xxx`

### Optional (for deployment):
- **n8n Cloud:** https://n8n.io (self-host or cloud)
- **Zapier:** https://zapier.com (free tier: 100 tasks/month)
- **Notion:** https://notion.so (for database storage)
- **Slack:** https://api.slack.com (for notifications)

## 🎓 Teaching Tips

### For Workflow 1 (Email Summarizer):
- Start simple - show the demo first
- Explain the flow: Input → AI → Output
- Let participants modify the email content
- Show how to improve prompts
- Demo error handling

### For Workflow 2 (Paper Finder):
- Build on Workflow 1 concepts
- Introduce form inputs
- Show how AI can rank/filter
- Explain structured outputs
- Demo saving to databases

### For Workflow 3 (Literature Review):
- This is the "wow" moment
- Show the complete pipeline
- Explain each step before running
- Highlight real-world applications
- Discuss scaling & scheduling

### Common Questions:

**Q: Do we need coding skills?**
A: No! n8n & Zapier are visual. Some basic JSON understanding helps.

**Q: What if my API key doesn't work?**
A: The app has mock responses built-in for demo mode.

**Q: Can we export our workflows?**
A: Yes! n8n exports as JSON, Zapier has export features.

**Q: How much does it cost to run?**
A: n8n self-hosted is free. Gemini free tier is generous. Zapier starts at $20/month.

## 📊 Slide Navigation

| Slide | Topic | Time | Type |
|-------|-------|------|------|
| 0 | Title | 2 min | Intro |
| 1 | Workshop Agenda | 3 min | Overview |
| 2 | Learning Outcomes | 5 min | Concept |
| 3 | Why Automation | 5 min | Motivation |
| 4 | Workflow Demo | 5 min | Visual |
| 5 | n8n vs Zapier | 10 min | Comparison |
| 6 | Gemini Setup | 10 min | Tutorial |
| 7 | **Exercise 1** | 15 min | **Hands-on** |
| 8 | **Exercise 2** | 15 min | **Hands-on** |
| 9 | Coffee Break | 10 min | Break |
| 10 | Data Flow | 5 min | Concept |
| 11 | **Exercise 3** | 30 min | **Hands-on** |
| 12 | Deployment | 15 min | Tutorial |
| 13 | Hosting Options | 5 min | Info |
| 14 | Next Steps | 10 min | Resources |
| 15 | Thank You | 2 min | Closing |

**Total: 120 minutes (2 hours)**

## 🚀 Deployment Guide

### Option 1: n8n Cloud (Easiest)
```bash
# Sign up at n8n.io
# Import workflow JSON
# Connect credentials
# Activate workflow
```

### Option 2: Self-Hosted (Free)
```bash
# Install n8n
npm install n8n -g

# Run n8n
n8n start

# Access at http://localhost:5678
```

### Option 3: Docker (Recommended for production)
```bash
docker run -it --rm \
  --name n8n \
  -p 5678:5678 \
  -v ~/.n8n:/home/node/.n8n \
  n8nio/n8n
```

## 📈 Success Metrics

**Engagement:**
- 90%+ participants complete Workflow 1
- 75%+ participants complete Workflow 2
- 50%+ participants complete Workflow 3

**Learning:**
- Understand automation benefits
- Can build simple workflows independently
- Know when to use n8n vs Zapier
- Comfortable with API integration basics

**Outcomes:**
- Each participant has 1-3 working workflows
- API keys configured
- Ready to build custom automations
- Connected to community resources

## 🎁 Resources for Participants

### Download:
- [.n8n workflow files](workflows/)
- [Gemini API examples](examples/)
- [Quick reference guide](quick-reference.md)

### Learn More:
- n8n Docs: https://docs.n8n.io
- Zapier University: https://zapier.com/learn
- Gemini API: https://ai.google.dev
- Community: https://community.n8n.io

### Follow Up:
- Email: rajesh@eunixtech.com
- LinkedIn: #ResearchAutomation challenge
- Share your workflows!

---

**Have an amazing workshop! 🎉**

