import React from 'react';
import {
  Workflow,
  Code,
  Sparkles,
  Target,
  Lock,
  Zap,
  CheckCircle,
  Users,
  Rocket,
  Brain,
  Clock,
  Play,
  Trophy,
  Coffee,
} from 'lucide-react';
import { TitleSlide } from './TitleSlide';
import { TwoColumnSlide } from './TwoColumnSlide';
import { WorkflowCanvas } from '../components/WorkflowCanvas/WorkflowCanvas';
import { APIPlayground } from '../components/APIPlayground/APIPlayground';
import { ZapierBuilder } from '../components/ZapierBuilder/ZapierBuilder';
import { DataFlow } from '../components/DataFlow/DataFlow';
import { EmailSummarizer } from '../components/Workflows/EmailSummarizer';
import { PaperFinder } from '../components/Workflows/PaperFinder';
import { LiteratureReview } from '../components/Workflows/LiteratureReview';
import { AssignmentSystem } from '../components/Assignments/AssignmentSystem';

export const slidesContent = [
  // Slide 0: Title
  <TitleSlide
    key="title"
    tagline="2-Hour Hands-on Workshop | Chandigarh University"
    title="AI Automation Workflows"
    subtitle="Build 3 Real Workflows: n8n, Zapier & Gemini AI Integration"
    author="Rajesh Dhiman"
    designation="Automation Engineer | Eunix Tech"
  />,

  // Slide 1: Workshop Agenda
  <div key="agenda" className="w-full">
    <h2 className="slide-title">Today's 2-Hour Workshop</h2>
    <div className="timeline-layout">
      <div className="timeline-line"></div>
      <div className="timeline-item">
        <div className="timeline-dot flex items-center justify-center" style={{background: '#60a5fa'}}>
          <Clock size={18} />
        </div>
        <div className="timeline-content">
          <h3 className="text-blue-400">0:00-0:20 | Introduction</h3>
          <p className="text-sm">• What is automation?</p>
          <p className="text-sm">• n8n vs Zapier overview</p>
          <p className="text-sm">• AI integration basics</p>
        </div>
      </div>
      <div className="timeline-item">
        <div className="timeline-dot flex items-center justify-center" style={{background: '#10b981'}}>
          <Sparkles size={18} />
        </div>
        <div className="timeline-content">
          <h3 className="text-green-400">0:20-0:35 | Workflow 1</h3>
          <p className="text-sm font-semibold">Email Summarizer with Gemini AI</p>
          <p className="text-sm">15 min hands-on</p>
        </div>
      </div>
      <div className="timeline-item">
        <div className="timeline-dot flex items-center justify-center" style={{background: '#a855f7'}}>
          <Brain size={18} />
        </div>
        <div className="timeline-content">
          <h3 className="text-purple-400">0:35-0:50 | Workflow 2</h3>
          <p className="text-sm font-semibold">Research Paper Finder</p>
          <p className="text-sm">15 min hands-on</p>
        </div>
      </div>
      <div className="timeline-item">
        <div className="timeline-dot flex items-center justify-center" style={{background: '#f59e0b'}}>
          <Coffee size={18} />
        </div>
        <div className="timeline-content">
          <h3 className="text-orange-400">0:50-1:00 | Break</h3>
          <p className="text-sm">Coffee & Questions</p>
        </div>
      </div>
      <div className="timeline-item">
        <div className="timeline-dot flex items-center justify-center" style={{background: '#ef4444'}}>
          <Rocket size={18} />
        </div>
        <div className="timeline-content">
          <h3 className="text-red-400">1:00-1:30 | Workflow 3</h3>
          <p className="text-sm font-semibold">Complete Literature Review</p>
          <p className="text-sm">30 min hands-on (Big Project)</p>
        </div>
      </div>
      <div className="timeline-item">
        <div className="timeline-dot flex items-center justify-center" style={{background: '#6366f1'}}>
          <Trophy size={18} />
        </div>
        <div className="timeline-content">
          <h3 className="text-indigo-400">1:30-2:00 | Wrap Up</h3>
          <p className="text-sm">• Deploy your workflows</p>
          <p className="text-sm">• Q&A and next steps</p>
        </div>
      </div>
    </div>
  </div>,

  // Slide 2: What You'll Learn
  <div key="learning-outcomes" className="w-full">
    <h2 className="slide-title">What You'll Learn & Build</h2>
    <div className="two-column tiled">
      <div>
        <div className="flex items-center gap-3 mb-4">
          <Workflow size={32} className="text-blue-500" />
          <h3 className="text-xl">Workflow Skills</h3>
        </div>
        <ul className="tech-list">
          <li>Visual workflow building in n8n</li>
          <li>Zapier automation setup</li>
          <li>Trigger-action patterns</li>
          <li>Data transformation</li>
          <li>Error handling basics</li>
        </ul>
      </div>

      <div>
        <div className="flex items-center gap-3 mb-4">
          <Sparkles size={32} className="text-purple-500" />
          <h3 className="text-xl">AI Integration</h3>
        </div>
        <ul className="tech-list">
          <li>Gemini API setup & usage</li>
          <li>Text summarization with AI</li>
          <li>Smart content extraction</li>
          <li>Automated analysis</li>
          <li>Prompt engineering basics</li>
        </ul>
      </div>

      <div>
        <div className="flex items-center gap-3 mb-4">
          <Code size={32} className="text-green-500" />
          <h3 className="text-xl">API & Webhooks</h3>
        </div>
        <ul className="tech-list">
          <li>REST API integration</li>
          <li>Webhook configuration</li>
          <li>JSON data handling</li>
          <li>Authentication methods</li>
          <li>Testing APIs live</li>
        </ul>
      </div>

      <div>
        <div className="flex items-center gap-3 mb-4">
          <Target size={32} className="text-orange-500" />
          <h3 className="text-xl">Real Applications</h3>
        </div>
        <ul className="tech-list">
          <li>Email automation</li>
          <li>Research paper tracking</li>
          <li>Literature reviews</li>
          <li>Team notifications</li>
          <li>Database integration</li>
        </ul>
      </div>
    </div>
  </div>,

  // Slide 3: Why Automation for Researchers
  <TwoColumnSlide
    key="why-automation"
    title="Why Automation for Researchers?"
    leftContent={
      <div>
        <h3 className="text-3xl mb-6 text-red-400">Time Wasters</h3>
        <ul className="tech-list">
          <li>Reading 50+ emails daily</li>
          <li>Manual paper searches</li>
          <li>Copy-pasting data</li>
          <li>Formatting references</li>
          <li>Tracking deadlines manually</li>
          <li>Repetitive admin tasks</li>
        </ul>
        <div className="mt-6 p-4 bg-red-500/10 rounded-lg border border-red-500/30">
          <p className="text-red-300 font-semibold">⏰ Average: 15 hours/week lost</p>
        </div>
      </div>
    }
    rightContent={
      <div>
        <h3 className="text-3xl mb-6 text-green-400">Automation Benefits</h3>
        <ul className="tech-list">
          <li>AI-powered email summaries</li>
          <li>Auto-discover relevant papers</li>
          <li>One-click data extraction</li>
          <li>Auto-format bibliographies</li>
          <li>Smart deadline reminders</li>
          <li>Focus on actual research</li>
        </ul>
        <div className="mt-6 p-4 bg-green-500/10 rounded-lg border border-green-500/30">
          <p className="text-green-300 font-semibold">🚀 Save: 60-70% of admin time</p>
        </div>
      </div>
    }
  />,

  // Slide 4: Quick Workflow Demo
  <div key="quick-demo" className="w-full">
    <h2 className="slide-title">How Workflows Work</h2>
    <p className="text-center text-slate-400 mb-8 text-lg">
      Watch a complete automation in action
    </p>
    <WorkflowCanvas autoPlay={true} />
  </div>,

  // Slide 5: n8n vs Zapier Decision
  <div key="n8n-zapier-decision" className="w-full">
    <h2 className="slide-title">Choosing Your Tool: n8n vs Zapier</h2>
    <div className="two-column tiled">
      <div>
        <h3 className="text-blue-400 text-2xl mb-4 flex items-center gap-2">
          <Workflow size={28} />
          n8n
        </h3>
        <ul className="tech-list">
          <li><strong>Self-hosted</strong> - Run on university servers</li>
          <li><strong>Open Source</strong> - Free forever, no limits</li>
          <li><strong>Data Privacy</strong> - All data stays with you</li>
          <li><strong>Advanced Features</strong> - Loops, branching, custom code</li>
          <li><strong>200+ integrations</strong> - Growing community</li>
        </ul>
        <div className="mt-6 p-4 bg-blue-500/10 rounded-lg border border-blue-500/30">
          <p className="text-sm text-blue-300 font-semibold">✅ Best for: Research labs, sensitive data, unlimited workflows</p>
        </div>
        <div className="mt-4 p-3 bg-red-500/10 rounded-lg border border-red-500/30">
          <p className="text-sm text-red-300">⚠️ Requires: Basic server setup knowledge</p>
        </div>
      </div>
      <div>
        <h3 className="text-orange-400 text-2xl mb-4 flex items-center gap-2">
          <Zap size={28} />
          Zapier
        </h3>
        <ul className="tech-list">
          <li><strong>Cloud-based</strong> - No setup, instant start</li>
          <li><strong>7000+ integrations</strong> - Connect anything</li>
          <li><strong>User-friendly</strong> - Perfect for beginners</li>
          <li><strong>Templates</strong> - Pre-built workflows</li>
          <li><strong>Free tier</strong> - 100 tasks/month</li>
        </ul>
        <div className="mt-6 p-4 bg-orange-500/10 rounded-lg border border-orange-500/30">
          <p className="text-sm text-orange-300 font-semibold">✅ Best for: Quick start, popular apps, non-technical users</p>
        </div>
        <div className="mt-4 p-3 bg-red-500/10 rounded-lg border border-red-500/30">
          <p className="text-sm text-red-300">⚠️ Costs: $20-50/month for serious use</p>
        </div>
      </div>
    </div>
  </div>,

  // Slide 6: Gemini AI Setup
  <div key="gemini-setup" className="w-full">
    <h2 className="slide-title">Setting Up Gemini AI</h2>
    <TwoColumnSlide
      leftContent={
        <div>
          <h3 className="text-2xl mb-4">Why Gemini?</h3>
          <ul className="tech-list">
            <li><strong>Free tier</strong> - 60 requests/minute</li>
            <li><strong>Powerful</strong> - Advanced language understanding</li>
            <li><strong>Multimodal</strong> - Text, code, images</li>
            <li><strong>Fast</strong> - Low latency responses</li>
            <li><strong>Easy API</strong> - Simple integration</li>
          </ul>
          <div className="mt-6 p-4 bg-purple-500/10 rounded-lg border border-purple-500/30">
            <h4 className="text-purple-400 mb-2 font-semibold">Quick Start:</h4>
            <ol className="list-decimal list-inside text-slate-300 space-y-2 text-sm">
              <li>Visit: makersuite.google.com/app/apikey</li>
              <li>Click "Create API Key"</li>
              <li>Copy your key</li>
              <li>Add to .env file</li>
            </ol>
          </div>
        </div>
      }
      rightContent={
        <div className="p-6 bg-slate-800 rounded-lg border border-purple-500/20">
          <h4 className="text-sm font-semibold text-purple-400 mb-3">Example API Call</h4>
          <pre className="text-xs text-green-300 overflow-x-auto leading-relaxed">{`// .env file
VITE_GEMINI_API_KEY=your_key_here

// In your workflow
import { callGemini } from './geminiAPI';

const summary = await callGemini(
  "Summarize this research paper..."
);

console.log(summary);
// Returns: AI-generated summary`}</pre>
          <div className="mt-4 p-3 bg-green-500/10 rounded-lg">
            <p className="text-xs text-green-300">✅ Works in n8n, Zapier, and custom code!</p>
          </div>
        </div>
      }
    />
  </div>,

  // Slide 7: HANDS-ON EXERCISE 1 - Email Summarizer
  <div key="exercise-1" className="w-full">
    <div className="flex items-center justify-center gap-4 mb-8">
      <Play size={40} className="text-green-400" />
      <div>
        <h2 className="slide-title mb-0">Hands-On Exercise 1</h2>
        <p className="text-center text-slate-400 text-lg">Email Summarizer with Gemini AI</p>
      </div>
    </div>
    <EmailSummarizer />
  </div>,

  // Slide 8: HANDS-ON EXERCISE 2 - Paper Finder
  <div key="exercise-2" className="w-full">
    <div className="flex items-center justify-center gap-4 mb-8">
      <Play size={40} className="text-purple-400" />
      <div>
        <h2 className="slide-title mb-0">Hands-On Exercise 2</h2>
        <p className="text-center text-slate-400 text-lg">Research Paper Finder</p>
      </div>
    </div>
    <PaperFinder />
  </div>,

  // Slide 9: Coffee Break
  <div key="break" className="w-full flex flex-col items-center justify-center">
    <Coffee size={80} className="text-orange-400 mb-6" />
    <h2 className="slide-title">10 Minute Break</h2>
    <p className="text-2xl text-slate-300 text-center max-w-2xl">
      Stretch, grab coffee, and get ready for the big workflow!
    </p>
    <div className="mt-8 p-6 bg-orange-500/10 rounded-lg border border-orange-500/30 max-w-xl">
      <p className="text-orange-300 text-center">
        <strong>Next up:</strong> Complete Literature Review Automation<br/>
        (30 minutes - our biggest workflow)
      </p>
    </div>
  </div>,

  // Slide 10: Data Flow Visualization
  <div key="data-flow" className="w-full">
    <h2 className="slide-title">Understanding Data Transformation</h2>
    <p className="text-center text-slate-400 mb-8 text-lg">
      Before we build the big workflow, let's understand how data flows
    </p>
    <DataFlow />
  </div>,

  // Slide 11: HANDS-ON EXERCISE 3 - Big Workflow
  <div key="exercise-3" className="w-full">
    <div className="flex items-center justify-center gap-4 mb-8">
      <Rocket size={48} className="text-red-400" />
      <div>
        <h2 className="slide-title mb-0">Hands-On Exercise 3</h2>
        <p className="text-center text-slate-400 text-lg">Complete Literature Review Automation</p>
      </div>
    </div>
    <LiteratureReview />
  </div>,

  // Slide 12: Deployment & Best Practices
  <div key="deployment" className="w-full">
    <h2 className="slide-title">Deploying Your Workflows</h2>
    <div className="two-column">
      <div>
        <h3 className="text-2xl mb-6 flex items-center gap-3">
          <CheckCircle className="text-green-400" size={28} />
          Best Practices
        </h3>
        <ul className="tech-list">
          <li><strong>Test thoroughly</strong> - Use test data first</li>
          <li><strong>Start simple</strong> - Add complexity gradually</li>
          <li><strong>Monitor logs</strong> - Check execution history</li>
          <li><strong>Handle errors</strong> - Add try-catch blocks</li>
          <li><strong>Document flows</strong> - Add descriptions</li>
          <li><strong>Version control</strong> - Export backups</li>
        </ul>
      </div>
      <div>
        <h3 className="text-2xl mb-6 flex items-center gap-3">
          <Lock className="text-red-400" size={28} />
          Security Essentials
        </h3>
        <ul className="tech-list">
          <li><strong>API Keys</strong> - Never hardcode, use env vars</li>
          <li><strong>Credentials</strong> - Use n8n/Zapier credential storage</li>
          <li><strong>Data Privacy</strong> - Don't log sensitive info</li>
          <li><strong>Rate Limits</strong> - Respect API quotas</li>
          <li><strong>HTTPS</strong> - Always use secure connections</li>
          <li><strong>Access Control</strong> - Limit who can edit</li>
        </ul>
      </div>
    </div>
  </div>,

  // Slide 13: Real-World Deployment Options
  <div key="deployment-options" className="w-full">
    <h2 className="slide-title">Where to Run Your Workflows</h2>
    <div className="tool-grid">
      <div className="tool-card">
        <h4 className="text-blue-400">n8n Cloud</h4>
        <p className="text-sm mb-3">Managed hosting by n8n</p>
        <div className="text-left text-xs text-slate-400">
          <p>✅ No setup needed</p>
          <p>✅ Auto-updates</p>
          <p>💰 $20/month</p>
        </div>
      </div>
      <div className="tool-card">
        <h4 className="text-green-400">Self-Hosted</h4>
        <p className="text-sm mb-3">Your own server</p>
        <div className="text-left text-xs text-slate-400">
          <p>✅ Full control</p>
          <p>✅ Free forever</p>
          <p>⚙️ Requires setup</p>
        </div>
      </div>
      <div className="tool-card">
        <h4 className="text-purple-400">Railway/Render</h4>
        <p className="text-sm mb-3">Easy deployment platforms</p>
        <div className="text-left text-xs text-slate-400">
          <p>✅ One-click deploy</p>
          <p>✅ Free tier available</p>
          <p>📈 Scales automatically</p>
        </div>
      </div>
      <div className="tool-card">
        <h4 className="text-orange-400">Zapier</h4>
        <p className="text-sm mb-3">Fully managed</p>
        <div className="text-left text-xs text-slate-400">
          <p>✅ Zero maintenance</p>
          <p>✅ Reliable uptime</p>
          <p>💰 Pay per task</p>
        </div>
      </div>
    </div>
  </div>,

  // Slide 14: Next Steps & Resources
  <div key="next-steps" className="w-full">
    <h2 className="slide-title">Your Automation Journey Starts Now</h2>
    <div className="two-column tiled">
      <div>
        <h3 className="text-purple-400 text-xl mb-4">📚 Learning Resources</h3>
        <ul className="tech-list text-sm">
          <li><strong>n8n Docs:</strong> docs.n8n.io</li>
          <li><strong>Zapier University:</strong> zapier.com/learn</li>
          <li><strong>Gemini API:</strong> ai.google.dev</li>
          <li><strong>YouTube:</strong> n8n official channel</li>
          <li><strong>Community:</strong> community.n8n.io</li>
        </ul>
      </div>
      <div>
        <h3 className="text-green-400 text-xl mb-4">🚀 What to Build Next</h3>
        <ul className="tech-list text-sm">
          <li>Automate your grant tracking</li>
          <li>Set up paper citation alerts</li>
          <li>Create a research dashboard</li>
          <li>Build a team knowledge base</li>
          <li>Automate data collection</li>
        </ul>
      </div>
    </div>
    <div className="mt-8 p-6 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-xl border border-purple-500/30">
      <h3 className="text-2xl text-center mb-4 text-purple-300">Challenge: Build 1 Workflow This Week! 💪</h3>
      <p className="text-center text-slate-300">
        Pick one repetitive task you do regularly and automate it.<br/>
        Share your workflow on LinkedIn with #ResearchAutomation
      </p>
    </div>
  </div>,

  // Slide 15: Assignments
  <div key="assignments" className="w-full">
    <AssignmentSystem />
  </div>,

  // Slide 16: Thank You
  <TitleSlide
    key="thank-you"
    title="Thank You!"
    subtitle="Questions? Let's connect and keep building!"
    author="Rajesh Dhiman | rajesh@eunixtech.com"
  />,
];
