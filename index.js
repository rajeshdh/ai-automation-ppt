import React, { useState, useEffect } from "react";
import {
  Zap,
  GitBranch,
  Bot,
  User,
  Globe,
  Laptop,
  ChevronRight,
  ChevronLeft,
  Quote,
  CheckCheck,
  PenTool,
  Languages,
  UserCog,
  FileText,
  Search,
  Database,
  ShieldCheck,
  AlertTriangle,
  FileCheck,
} from "lucide-react";

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 15;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowRight" || e.key === "Space") {
        nextSlide();
      } else if (e.key === "ArrowLeft") {
        prevSlide();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Slide Components
  const slides = [
    // Slide 1: Title
    <div className="title-layout w-full max-w-4xl text-center">
      <div className="tagline">Expert Workshop | Chandigarh University</div>
      <h1>
        Intro to AI & <span className="gradient-text">Automation</span>
      </h1>
      <p className="subtitle">Practical Tools to Speed Up Research & Writing</p>
      <div className="mt-10 border-t border-slate-700 pt-5 inline-block">
        <p className="text-xl text-white font-bold m-0">
          Presented by Rajesh Dhiman
        </p>
        <p className="text-sm text-slate-400 mt-1">Tech Consultant & Mentor</p>
      </div>
    </div>,

    // Slide 2: The Problem
    <div className="w-full">
      <h2 className="slide-title">Why use AI? The "Manual" Struggle</h2>
      <div className="two-column">
        <div>
          <p>
            Research is 10% discovery and 90% administration. We want to flip
            that.
          </p>
          <ul className="tech-list mt-8">
            <li>
              <strong>Writer's Block:</strong> Staring at a blank page for
              hours.
            </li>
            <li>
              <strong>Plagiarism Anxiety:</strong> Fear of accidentally copying
              or mis-citing.
            </li>
            <li>
              <strong>Citation Chaos:</strong> Manually formatting
              bibliographies.
            </li>
            <li>
              <strong>Missed Opportunities:</strong> Forgetting grant deadlines.
            </li>
          </ul>
        </div>
        <div className="image-wrapper">
          <img
            src="http://googleusercontent.com/image_collection/image_retrieval/11454687588526374161"
            alt="Stressed researcher with papers"
          />
        </div>
      </div>
    </div>,

    // Slide 3: Concept
    <div className="w-full">
      <h2 className="slide-title">What is Automation?</h2>
      <div className="two-column gap-24">
        <div className="text-center text-blue-500 flex justify-center">
          <UserCog size={120} strokeWidth={1} />
        </div>
        <div>
          <h3 className="mb-5 text-2xl text-white">
            Think of it as a "Digital Intern"
          </h3>
          <p>Automation isn't about robots taking over.</p>
          <p>It's about setting up a digital helper that:</p>
          <ol className="list-decimal list-inside text-slate-300 text-xl leading-relaxed mt-5 pl-4">
            <li>
              <strong>Watches</strong> for something (like a new email).
            </li>
            <li>
              <strong>Thinks</strong> about it (checks if it's important).
            </li>
            <li>
              <strong>Acts</strong> on it (saves it to your folder).
            </li>
          </ol>
          <p className="mt-5 text-emerald-500 font-semibold">
            It works 24/7 so you don't have to.
          </p>
        </div>
      </div>
    </div>,

    // Slide 4: Connectors
    <div className="w-full">
      <h2 className="slide-title">The "Connecting" Tools</h2>
      <div className="two-column tiled">
        <div>
          <h3 className="text-red-300">Zapier</h3>
          <p>
            <strong>The "Easy Button"</strong>
          </p>
          <ul className="tech-list mt-5">
            <li>Connects Gmail to Slack, or Forms to Excel.</li>
            <li>No coding required. Very visual.</li>
            <li>Good for simple "If this, then that" tasks.</li>
          </ul>
        </div>
        <div>
          <h3 className="text-blue-400">n8n</h3>
          <p>
            <strong>The "Power User" Choice</strong>
          </p>
          <ul className="tech-list mt-5">
            <li>Free and private (can run on University servers).</li>
            <li>Handles complex research data securely.</li>
            <li>We will use this for advanced workflows.</li>
          </ul>
        </div>
      </div>
    </div>,

    // Slide 5: The Toolkit
    <div className="w-full">
      <h2 className="slide-title">The "Thinking" Tools (Research AI)</h2>
      <p className="mb-8 text-left w-full text-slate-300">
        Forget generic ChatGPT. These tools are built for researchers.
      </p>
      <div className="tool-grid">
        <div className="tool-card">
          <div className="flex justify-center mb-4">
            <Quote size={30} className="text-violet-500" />
          </div>
          <h4>Consensus</h4>
          <p>
            AI Search Engine that <strong>only</strong> uses real academic
            papers. No hallucinations.
          </p>
        </div>
        <div className="tool-card">
          <div className="flex justify-center mb-4">
            <CheckCheck size={30} className="text-emerald-500" />
          </div>
          <h4>Scite.ai</h4>
          <p>
            Checks if citations support or contrast your claim. Smart
            validation.
          </p>
        </div>
        <div className="tool-card">
          <div className="flex justify-center mb-4">
            <PenTool size={30} className="text-amber-500" />
          </div>
          <h4>Jenni AI</h4>
          <p>
            Auto-complete for academic writing. Suggests text{" "}
            <strong>with citations</strong>.
          </p>
        </div>
        <div className="tool-card">
          <div className="flex justify-center mb-4">
            <Languages size={30} className="text-red-500" />
          </div>
          <h4>Paperpal</h4>
          <p>
            Grammar and academic tone checker. Pre-submission "plagiarism"
            guard.
          </p>
        </div>
      </div>
    </div>,

    // Slide 6: Use Case 1 Title
    <div className="title-layout w-full max-w-4xl text-center">
      <div className="tagline">Use Case 01</div>
      <h1>The "Smart" Literature Review</h1>
      <p className="subtitle">
        How to stay updated without reading 100 abstracts/day
      </p>
    </div>,

    // Slide 7: Use Case 1 Steps
    <div className="w-full">
      <h2 className="slide-title">Workflow: New Paper Alert System</h2>
      <div className="timeline-layout">
        <div className="timeline-line"></div>
        <div className="timeline-item">
          <div className="timeline-dot flex items-center justify-center">
            <Zap size={14} className="text-blue-500" />
          </div>
          <div className="timeline-content">
            <h3>1. Trigger</h3>
            <p>
              RSS Feed detects new paper on ArXiv/PubMed with tag "Machine
              Learning".
            </p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-dot flex items-center justify-center">
            <GitBranch size={14} className="text-blue-500" />
          </div>
          <div className="timeline-content">
            <h3>2. Filter</h3>
            <p>
              n8n checks if abstract contains specific keywords (e.g.,
              "Transformer").
            </p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-dot flex items-center justify-center">
            <Bot size={14} className="text-blue-500" />
          </div>
          <div className="timeline-content">
            <h3>3. Analyze</h3>
            <p>Send abstract to AI to generate a 3-bullet summary.</p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-dot flex items-center justify-center">
            <Database size={14} className="text-blue-500" />
          </div>
          <div className="timeline-content">
            <h3>4. Store</h3>
            <p>Add to Zotero collection and email you the summary.</p>
          </div>
        </div>
      </div>
    </div>,

    // Slide 8: Use Case 2
    <div className="w-full">
      <h2 className="slide-title">Use Case 02: Plagiarism-Free Writing</h2>
      <div className="two-column">
        <div>
          <h3>The "Safe" Writing Workflow</h3>
          <p>How to use AI without cheating or plagiarism.</p>
          <div className="mt-5">
            <ul className="tech-list">
              <li className="text-white">
                <strong>Step 1: Grounding.</strong> Use <em>Consensus</em> to
                find facts backed by real papers.
              </li>
              <li className="text-white">
                <strong>Step 2: Drafting.</strong> Use <em>Jenni AI</em> to
                expand your bullets. It cites as it writes.
              </li>
              <li className="text-white">
                <strong>Step 3: Polishing.</strong> Use <em>Paperpal</em> to fix
                grammar and check tone.
              </li>
            </ul>
          </div>
          <p className="mt-5 text-lg text-violet-500 font-semibold">
            <strong>Result:</strong> Original text, proper citations, 2x faster
            speed.
          </p>
        </div>
        <div className="image-wrapper">
          <img
            src="http://googleusercontent.com/image_collection/image_retrieval/18251213032587637172"
            alt="AI writing assistant interface"
          />
        </div>
      </div>
    </div>,

    // Slide 9: Use Case 3
    <div className="w-full">
      <h2 className="slide-title">Use Case 03: Grant Funding Tracker</h2>
      <div className="two-column rounded-layout items-center">
        <div className="text-center">
          <img
            src="http://googleusercontent.com/image_collection/image_retrieval/8132629160040445570"
            alt="Funding growth chart"
            className="rounded-full w-[350px] h-[350px] object-cover border-4 border-blue-500 mx-auto"
          />
        </div>
        <div>
          <h3>Never Miss a Deadline</h3>
          <p>
            Funding is the lifeblood of research. Manually checking 50+ grant
            portals is inefficient.
          </p>
          <ul className="tech-list mt-5">
            <li>
              <strong>Scrape:</strong> Automated bot visits grant websites
              weekly.
            </li>
            <li>
              <strong>Extract:</strong> Pulls out "Deadline", "Eligibility", and
              "Amount".
            </li>
            <li>
              <strong>Notify:</strong> Sends a digest email to the Department
              Head.
            </li>
          </ul>
        </div>
      </div>
    </div>,

    // Slide 10: Data Analysis
    <div className="w-full">
      <h2 className="slide-title">Conversational Data Analysis</h2>
      <div className="two-column">
        <div>
          <p>
            Move beyond painful Excel formulas. Use tools like{" "}
            <strong>Julius AI</strong> or{" "}
            <strong>ChatGPT Advanced Data Analysis</strong>.
          </p>
          <h3 className="mt-8 text-2xl text-blue-400">How it works:</h3>
          <ol className="mt-4 list-decimal list-inside leading-loose text-slate-300 text-lg">
            <li>
              <strong>Upload</strong> your CSV or Excel file (e.g., Patient
              Data).
            </li>
            <li>
              <strong>Ask</strong> in plain English: "Show me the correlation
              between Age and Recovery Time."
            </li>
            <li>
              <strong>Get</strong> a publication-ready chart instantly.
            </li>
          </ol>
        </div>
        <div className="image-wrapper">
          <img
            src="http://googleusercontent.com/image_collection/image_retrieval/4327390395723095723"
            alt="AI data analysis dashboard"
          />
        </div>
      </div>
    </div>,

    // Slide 11: Prompt Engineering
    <div className="w-full">
      <h2 className="slide-title">Prompt Engineering 101</h2>
      <div className="two-column">
        <div>
          <h3>The "R-C-O" Framework</h3>
          <p>
            Garbage in, garbage out. To get good research output, you must
            structure your prompt.
          </p>
          <div className="bg-slate-800 p-6 rounded-lg mt-5 border border-slate-700">
            <p className="text-red-300 mb-4 flex items-center gap-2">
              <AlertTriangle size={18} /> <strong>Bad:</strong> "Write an
              abstract about ML."
            </p>
            <p className="text-emerald-400 flex items-start gap-2">
              <CheckCheck size={18} className="mt-1 flex-shrink-0" />{" "}
              <span>
                <strong>Good:</strong> "Act as a Senior Editor{" "}
                <strong>[Role]</strong>. Based on these 3 bullet points{" "}
                <strong>[Context]</strong>, write a 200-word abstract{" "}
                <strong>[Task]</strong> using active voice{" "}
                <strong>[Constraint]</strong>."
              </span>
            </p>
          </div>
        </div>
        <div className="image-wrapper">
          <img
            src="http://googleusercontent.com/image_collection/image_retrieval/9105758704350021743"
            alt="Prompt engineering structure"
          />
        </div>
      </div>
    </div>,

    // Slide 12: Ethics
    <div className="w-full">
      <h2 className="slide-title">The "Responsible AI" Checklist</h2>
      <div className="two-column">
        <div>
          <ul className="tech-list mt-5">
            <li className="mb-6">
              <strong>Verify Everything:</strong> AI can "hallucinate" facts.
              Always cross-check with original sources (using tools like Scite).
            </li>
            <li className="mb-6">
              <strong>Human in the Loop:</strong> Never copy-paste directly into
              a submission. You are the author; AI is just the drafter.
            </li>
            <li className="mb-6">
              <strong>Disclose Usage:</strong> Check your journal's policy. Many
              require a statement: "AI was used for language editing."
            </li>
            <li className="mb-6">
              <strong>Data Privacy:</strong> Do not upload sensitive patient
              data or unpublished IP to public AI models.
            </li>
          </ul>
        </div>
        <div className="flex justify-center items-center h-[400px]">
          <ShieldCheck
            size={200}
            className="text-emerald-500 opacity-80"
            strokeWidth={0.5}
          />
        </div>
      </div>
    </div>,

    // Slide 13: Comparison
    <div className="w-full">
      <h2 className="slide-title">Manual vs. AI Assisted</h2>
      <table className="w-full mt-5 border-collapse">
        <thead>
          <tr>
            <th className="bg-slate-800 text-white p-4 text-left font-semibold border-b-2 border-blue-500">
              Activity
            </th>
            <th className="bg-slate-800 text-white p-4 text-left font-semibold border-b-2 border-blue-500">
              Manual Process
            </th>
            <th className="bg-slate-800 text-white p-4 text-left font-semibold border-b-2 border-blue-500">
              AI Workflow
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="p-4 border-b border-slate-700 text-slate-300">
              Finding Sources
            </td>
            <td className="p-4 border-b border-slate-700 text-slate-300">
              Hours on Google Scholar
            </td>
            <td className="p-4 border-b border-slate-700 text-slate-300 font-semibold text-emerald-400">
              Consensus/Scite (Minutes, verified)
            </td>
          </tr>
          <tr>
            <td className="p-4 border-b border-slate-700 text-slate-300">
              Writing Drafts
            </td>
            <td className="p-4 border-b border-slate-700 text-slate-300">
              High effort, blank page syndrome
            </td>
            <td className="p-4 border-b border-slate-700 text-slate-300 font-semibold text-emerald-400">
              Jenni AI (Co-writer with citations)
            </td>
          </tr>
          <tr>
            <td className="p-4 border-b border-slate-700 text-slate-300">
              Data Analysis
            </td>
            <td className="p-4 border-b border-slate-700 text-slate-300">
              Writing complex Python/R code
            </td>
            <td className="p-4 border-b border-slate-700 text-slate-300 font-semibold text-emerald-400">
              Julius AI (Conversational)
            </td>
          </tr>
          <tr>
            <td className="p-4 text-slate-300">Plagiarism Risk</td>
            <td className="p-4 text-slate-300">High (accidental misses)</td>
            <td className="p-4 text-slate-300 font-semibold text-emerald-400">
              Low (Built-in checks)
            </td>
          </tr>
        </tbody>
      </table>
    </div>,

    // Slide 14: Impact
    <div className="w-full">
      <h2 className="slide-title">The Impact on Research Output</h2>
      <div className="tiled-content text-center">
        <div className="tile bg-transparent border-0 shadow-none">
          <div className="highlight-number text-9xl font-bold text-blue-500 leading-none">
            50%
          </div>
          <div className="highlight-label text-2xl text-white mt-4">
            Less Admin Work
          </div>
        </div>
        <div className="tile bg-transparent border-0 shadow-none">
          <div className="highlight-number text-9xl font-bold text-blue-500 leading-none">
            2x
          </div>
          <div className="highlight-label text-2xl text-white mt-4">
            Faster Publishing
          </div>
        </div>
        <div className="tile bg-transparent border-0 shadow-none">
          <div className="highlight-number text-9xl font-bold text-blue-500 leading-none">
            100%
          </div>
          <div className="highlight-label text-2xl text-white mt-4">
            Citation Accuracy
          </div>
        </div>
      </div>
    </div>,

    // Slide 15: Q&A
    <div className="title-layout w-full max-w-4xl text-center">
      <h1 className="text-[80px] mb-5">Let's Build.</h1>
      <p className="subtitle">I'm here to help you set this up.</p>
      <div className="mt-10 text-slate-400">
        <p className="text-2xl text-white mb-3">Rajesh Dhiman</p>
        <p className="flex items-center justify-center gap-2 mb-2">
          <Globe size={16} />{" "}
          <a
            href="https://www.rajeshdhiman.in"
            className="text-blue-400 no-underline hover:text-blue-300 transition-colors"
          >
            www.rajeshdhiman.in
          </a>
        </p>
        <p className="flex items-center justify-center gap-2">
          <Laptop size={16} />{" "}
          <a
            href="https://www.eunix.tech"
            className="text-blue-400 no-underline hover:text-blue-300 transition-colors"
          >
            www.eunix.tech
          </a>
        </p>
      </div>
    </div>,
  ];

  return (
    <div className="min-h-screen bg-black text-white font-sans flex items-center justify-center overflow-hidden relative">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;600;700&family=Inter:wght@400;500;600&display=swap');
        
        body { font-family: 'Inter', sans-serif; }
        h1, h2, h3, h4 { font-family: 'Plus Jakarta Sans', sans-serif; letter-spacing: -0.02em; }
        
        .slide-container {
          background: radial-gradient(circle at 50% 0%, #1e1b4b 0%, #050505 40%);
          background-color: #050505;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
        }
        
        .slide-container::before {
          content: '';
          position: absolute;
          top: 0; left: 0; width: 100%; height: 100%;
          background-image: linear-gradient(#1e293b 1px, transparent 1px), linear-gradient(90deg, #1e293b 1px, transparent 1px);
          background-size: 40px 40px;
          opacity: 0.1;
          z-index: 0;
          mask-image: linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 80%);
          pointer-events: none;
        }

        .gradient-text {
          background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .tagline {
          background: rgba(59, 130, 246, 0.1);
          border: 1px solid rgba(59, 130, 246, 0.2);
          color: #60a5fa;
          padding: 8px 16px;
          border-radius: 20px;
          font-size: 14px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 30px;
          display: inline-block;
        }

        .slide-title {
          font-size: 48px;
          margin-bottom: 40px;
          color: #f8fafc;
          border-bottom: 1px solid #334155;
          padding-bottom: 20px;
        }

        .subtitle { color: #94a3b8; font-size: 24px; font-weight: 400; }

        .two-column {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          width: 100%;
          align-items: center;
        }
        
        .two-column.tiled { align-items: stretch; }
        .two-column.tiled > div {
          background: linear-gradient(180deg, #1e293b 0%, #0f172a 100%);
          border: 1px solid #334155;
          border-radius: 16px;
          padding: 40px;
        }

        .image-wrapper {
          border-radius: 12px;
          border: 1px solid #334155;
          box-shadow: 0 10px 30px rgba(0,0,0,0.5);
          height: 400px;
          width: 100%;
          overflow: hidden;
          background: #0f172a;
        }
        .image-wrapper img { width: 100%; height: 100%; object-fit: cover; }

        .tiled-content { display: flex; gap: 30px; width: 100%; }
        .tile {
          background: linear-gradient(180deg, #1e293b 0%, #0f172a 100%);
          border: 1px solid #334155;
          border-radius: 16px;
          padding: 30px;
          flex: 1;
        }

        .tech-list li { margin-bottom: 15px; padding-left: 30px; position: relative; font-size: 18px; color: #cbd5e1; }
        .tech-list li::before {
          content: '';
          position: absolute; left: 0; top: 6px;
          width: 8px; height: 14px;
          border: solid #10b981;
          border-width: 0 3px 3px 0;
          transform: rotate(45deg);
        }

        .tool-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; width: 100%; }
        .tool-card {
          background: #1e293b;
          border: 1px solid #334155;
          border-radius: 12px;
          padding: 20px;
          text-align: center;
        }
        .tool-card h4 { color: #60a5fa; font-size: 20px; margin: 10px 0; }
        .tool-card p { font-size: 14px; color: #cbd5e1; }

        .timeline-layout { display: flex; justify-content: space-between; width: 100%; position: relative; margin-top: 40px; }
        .timeline-line {
          position: absolute; top: 25px; left: 0; width: 100%; height: 2px;
          background: #334155; z-index: 1;
        }
        .timeline-item { position: relative; width: 22%; z-index: 2; text-align: center; }
        .timeline-dot {
          width: 50px; height: 50px; background: #0f172a; border: 2px solid #3b82f6;
          border-radius: 50%; margin: 0 auto;
        }
        .timeline-content { margin-top: 20px; background: #1e293b; padding: 20px; border-radius: 8px; border: 1px solid #334155; }
        
      `}</style>

      {/* Main Slide Container */}
      <div className="slide-container w-[1280px] h-[720px] rounded-2xl border border-slate-800 relative flex flex-col justify-center items-center p-16 overflow-hidden">
        {/* Render Active Slide */}
        <div className="relative z-10 w-full h-full flex items-center justify-center animate-fadeIn">
          {slides[currentSlide]}
        </div>

        {/* Slide Counter */}
        <div className="absolute bottom-6 right-8 text-slate-500 font-mono text-sm z-20">
          {currentSlide + 1} / {totalSlides}
        </div>

        {/* Navigation Buttons (Visible on hover/focus) */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full hover:bg-white/10 text-slate-500 hover:text-white transition-all z-20 focus:outline-none"
        >
          <ChevronLeft size={32} />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full hover:bg-white/10 text-slate-500 hover:text-white transition-all z-20 focus:outline-none"
        >
          <ChevronRight size={32} />
        </button>

        {/* Progress Bar */}
        <div
          className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-600 to-violet-600 transition-all duration-300 z-20"
          style={{ width: `${((currentSlide + 1) / totalSlides) * 100}%` }}
        ></div>
      </div>
    </div>
  );
}
