# AI Automation Workflows - Workshop Presentation

## 🎯 Overview
Interactive presentation for Chandigarh University faculty and researchers on AI Automation Workflows, featuring hands-on demos of n8n, Zapier, and Custom APIs.

## 🚀 Quick Start

```bash
npm install
npm run dev
```

Visit: `http://localhost:3001`

## ✨ New Features

### Interactive Components
1. **WorkflowCanvas** - Animated workflow visualization with data flow
2. **APIPlayground** - Live API testing with request/response viewer
3. **ZapierBuilder** - Interactive automation builder (If-This-Then-That)
4. **DataFlow** - Real-time data transformation pipeline visualization

### Design Updates
- Deep indigo theme (#1e1b4b) matching your AI Agents presentation
- Purple accent colors (rgba(168, 85, 247))
- Frosted glass effects with backdrop blur
- Enhanced animations and micro-interactions
- All visuals created with code (no external images)

## 📚 Presentation Structure (13 Slides)

1. **Title** - Workshop introduction
2. **What We'll Build** - Overview of topics
3. **Why Automation Matters** - Problem/Solution comparison
4. **Live Workflow Demo** - Interactive workflow canvas
5. **n8n vs Zapier** - Detailed comparison
6. **Zapier Builder** - Interactive demo
7. **Data Transformation** - Pipeline visualization
8. **Custom APIs & Webhooks** - Explanation with examples
9. **API Playground** - Live testing interface
10. **Real-World Use Cases** - 4 practical examples
11. **Best Practices** - Do's and Security tips
12. **Complexity Levels** - Progressive workflow building
13. **Impact Metrics** - Measurable outcomes
14. **Let's Build Together** - Hands-on session start

## 🎨 Color Scheme

```css
--bg-primary: #1e1b4b;           /* Deep indigo background */
--accent-purple: rgba(168, 85, 247, 0.5);
--accent-blue: #60a5fa;
--accent-green: #10b981;
--accent-orange: #f59e0b;
```

## 🎮 Navigation

- **Arrow Keys**: ← Previous, → Next
- **Keyboard**: Home (first slide), End (last slide)
- **Touch**: Swipe left/right on mobile
- **Mouse**: Click navigation arrows

## 🔧 Component Details

### WorkflowCanvas
Auto-playing workflow visualization showing:
- Trigger → Filter → Transform → API → Database → Email
- Animated data particles
- Completion states
- Pulse animations on active nodes

### APIPlayground
Features:
- HTTP method selector (GET, POST, PUT, DELETE)
- Endpoint input
- JSON request editor
- Simulated API responses
- cURL command generator
- Copy to clipboard

### ZapierBuilder
Interactive builder with:
- Trigger selection (Gmail, Calendar, Sheets)
- Action selection (Slack, Database, Sheets)
- Visual flow arrows
- Success confirmation animations

### DataFlow
Pipeline showing:
- Input data (JSON)
- Transform steps (Extract → Filter → Enrich)
- Output data
- Real-time processing visualization

## 📦 Tech Stack

- React 18
- Vite (development server)
- Lucide React (icons)
- CSS with CSS Variables
- No external UI libraries

## 🎓 Workshop Use Cases

### 1. Literature Monitoring
**Tools**: arXiv API + n8n + OpenAI + Notion
**Flow**: Monitor papers → AI summary → Store in Notion

### 2. Data Processing
**Tools**: Google Forms + Zapier + ChatGPT + Email
**Flow**: Survey responses → AI analysis → Report generation

### 3. Team Collaboration
**Tools**: Slack + Calendar + n8n + Trello
**Flow**: Paper sharing → Review coordination → Deadline tracking

### 4. Grant Tracking
**Tools**: Web Scraper + n8n + Database + Email
**Flow**: Find grants → Extract deadlines → Send reminders

## 🔒 Security Best Practices Covered

- API key protection
- Environment variables
- Input validation
- Rate limiting
- HTTPS enforcement

## 📈 Measurable Impact

- **10x** Faster processing
- **99%** Accuracy rate
- **40h** Saved per month

## 🎯 Learning Progression

1. **Beginner**: Simple trigger → action
2. **Intermediate**: Filters + transforms
3. **Advanced**: Multi-step with branching
4. **Expert**: AI integration + loops

## 💡 Tips for Presenters

1. Start with live workflow demo (Slide 4) to grab attention
2. Use API Playground (Slide 9) for hands-on testing
3. Encourage audience to interact with Zapier Builder (Slide 6)
4. Discuss specific use cases relevant to their research
5. End with hands-on practice session

## 🛠️ Customization

### Update Color Scheme
Edit `src/styles/global.css` CSS variables

### Add New Slides
Edit `src/slides/slidesContent.jsx`

### Modify Components
Components are in `src/components/[ComponentName]/`

## 📝 Notes

- All animations auto-play on slide entry
- Responsive design works on tablets and mobile
- No internet required for presentation (after initial load)
- All code-based visuals (SVG, CSS, React components)

## 🎬 Demo URLs

Local: `http://localhost:3001`

Build for production:
```bash
npm run build
npm run preview
```

---

**Ready for your workshop!** 🚀

For questions or customization help, contact: Rajesh Dhiman
