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

export const speakerNotes = [
  // Slide 1: Title
  "Good morning everyone. Welcome to this session on Automation Workflows for Research Work. My name is Rajesh Dhiman. Today we will talk about simple computer helpers that can reduce the time you spend on reading, writing, formatting, and tracking research work. This session is practical and meant for your daily academic work, not industry or business use.",

  // Slide 2: Daily Research Problems
  "Let us start with problems you already face every day. Writing drafts takes a lot of time. Formatting equations is slow and frustrating. Rewriting text to avoid plagiarism creates stress. Tracking papers, deadlines, and funding calls is mostly manual. These problems are common across departments, and today we will see how simple tools can help.",

  // Slide 3: What Do We Mean by Automation
  "When I say automation, I do not mean complex systems. Think of it as a computer helper. This helper notices new information, follows a few rules, and repeats boring work for you. The goal is not to replace thinking, but to reduce effort so you can focus on research and teaching.",

  // Slide 4: How Researchers Already Use Automation
  "You are already using automation without calling it automation. Reference managers, spell checkers, citation tools, and equation editors are all helpers. Today we are only extending this idea. Instead of one tool doing one task, we connect multiple helpers together.",

  // Slide 5: Workflow Tools
  "Workflow tools help connect helpers together. Zapier is simple and good for basic tasks with very little setup. n8n gives more control and can run on university servers, which is important for privacy. Both allow you to design workflows visually, without heavy coding.",

  // Slide 6: Tools for Reading and Writing Papers
  "These tools help with reading and writing research papers. Consensus helps you find real papers. Scite shows how citations are used. Jenni helps expand drafts with references. Paperpal improves academic language. These tools support your work, but you remain the author.",

  // Slide 7: Use Case 1 Introduction
  "Now let us look at a real use case. Literature review is time-consuming. Many of us read dozens of abstracts daily. This example shows how a helper can reduce that effort while keeping you informed.",

  // Slide 8: Literature Review Workflow
  "Here is the workflow step by step. First, a new paper appears on a research website. Second, the system checks if it matches your keywords. Third, a short summary is created. Finally, the summary is stored and sent to you. You decide later whether to read the full paper.",

  // Slide 9: Safe Writing with Assistance
  "Many people worry about plagiarism. The safe approach is grounding, drafting, and polishing. First, collect facts from real papers. Second, expand your ideas with writing tools. Third, improve language. Always review and rewrite before submitting. The responsibility stays with you.",

  // Slide 10: Writing Mathematical Equations
  "For mathematics, these tools help with formatting, not thinking. You can convert text to LaTeX, clean equation structure, and explain formulas step by step. This saves time and reduces formatting errors.",

  // Slide 11: Tracking Opportunities
  "Funding and deadlines are critical. Instead of checking many websites manually, a helper can visit them regularly, extract key details, and send you a summary. This reduces the risk of missing important opportunities.",

  // Slide 12: Asking Questions to Your Data
  "Instead of complex formulas, you can ask questions in simple English. Upload your data, ask a clear question, and get charts or summaries. This is helpful for quick analysis and early exploration of data.",

  // Slide 13: Asking Clear Questions
  "Clear instructions give better results. Vague requests create confusion. When you give structure, length, and style, the output improves. This is useful not only for tools, but also for student instructions and assignments.",

  // Slide 14: Responsible Use
  "These tools are helpers, not decision makers. Always check facts. Review all outputs. Follow journal and university guidelines. Do not upload sensitive or private data. Responsible use is essential in academic environments.",

  // Slide 15: Manual vs Assisted Workflow
  "This table compares manual and assisted work. The goal is not speed alone, but accuracy and reduced mental load. Assisted workflows help you reach the same academic standards with less repetitive effort.",

  // Slide 16: What Changes for Researchers
  "With helpers, administrative work reduces, publishing becomes faster, and citation accuracy improves. The quality of thinking does not change, but the effort around it reduces.",

  // Slide 17: Hands-on Session
  "Next, we will move to a hands-on session. We will build a simple workflow together using visual tools. No coding is required. The goal is to show that these ideas are practical and usable in your daily academic work.",
];

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 17;

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
        // Live Workflow Simulation Slide
        <div className="w-full flex flex-col items-center justify-center">
          <h2 className="slide-title mb-12">How the Workflow Runs</h2>
          <div className="workflow-sim-container">
            <div className="workflow-node trigger">Trigger</div>
            <div className="workflow-line line1"></div>
            <div className="workflow-node filter">Filter</div>
            <div className="workflow-line line2"></div>
            <div className="workflow-node ai">AI Agent</div>
            <div className="workflow-line line3"></div>
            <div className="workflow-node action">Action</div>
          </div>
          <p className="mt-10 text-slate-400 text-lg text-center max-w-2xl">This simulation shows how data flows through an automation pipeline: a trigger starts the process, a filter checks conditions, an AI agent processes the data, and an action completes the workflow. Each step is revealed in sequence, just like a real workflow in Zapier or n8n.</p>
        </div>,
    // Slide 1: Title
    <div className="title-layout w-full max-w-4xl text-center">
      <div className="tagline">Expert Workshop | Chandigarh University</div>
      <h1>Automation Workflows for Research Work</h1>
      <p className="subtitle">
        Simple Tools to Reduce Writing, Reading, and Formatting Effort
      </p>
      <div className="mt-10 border-t border-slate-700 pt-5 inline-block">
        <p className="text-xl text-white font-bold m-0">Rajesh Dhiman</p>
        <p className="text-sm text-slate-400 mt-1">
          Automation Engineer | Eunix Tech
        </p>
      </div>
    </div>,

    // Slide 2: The Problem
    <div className="w-full">
      <h2 className="slide-title">Daily Research Problems</h2>
      <div className="two-column">
        <div>
          <ul className="tech-list mt-8">
            <li>Writing drafts takes too much time</li>
            <li>Formatting equations is slow</li>
            <li>Rewriting to avoid plagiarism is stressful</li>
            <li>Tracking papers and deadlines is manual</li>
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
      <h2 className="slide-title">What Do We Mean by Automation?</h2>
      <div className="two-column gap-24">
        <div className="text-center text-blue-500 flex justify-center">
          <UserCog size={120} strokeWidth={1} />
        </div>
        <div>
          <h3 className="mb-5 text-2xl text-white">
            Think of it as a "Computer Helper"
          </h3>
          <p>Automation is about simple computer helpers for your work.</p>
          <p>It's about setting up a helper that:</p>
          <ol className="list-decimal list-inside text-slate-300 text-xl leading-relaxed mt-5 pl-4">
            <li>Notices new information</li>
            <li>Follows simple rules</li>
            <li>Repeats work for you</li>
          </ol>
        </div>
      </div>
    </div>,

    // Slide 4: How Researchers Already Use Automation
    <div className="w-full">
      <h2 className="slide-title">How Researchers Already Use Automation</h2>
      <ul className="tech-list mt-8">
        <li>Reference managers</li>
        <li>Spell checkers</li>
        <li>Citation tools</li>
        <li>Equation editors</li>
      </ul>
      <p className="mt-6 text-slate-400 text-lg">
        These are all simple helpers you already know.
      </p>
    </div>,

    // Slide 5: Workflow Tools
    <div className="w-full">
      <h2 className="slide-title">Workflow Tools</h2>
        <div className="two-column tiled">
          <a href="https://zapier.com/" target="_blank" rel="noopener noreferrer" className="tool-card-link">
            <div>
              <h3 className="text-red-300">Zapier</h3>
              <p>Good for simple tasks, no setup</p>
              <ul className="tech-list mt-5">
                <li>Connects Gmail to Slack, or Forms to Excel.</li>
                <li>No coding required. Visual interface.</li>
                <li>Simple "If this, then that" tasks.</li>
              </ul>
            </div>
          </a>
          <a href="https://n8n.io/" target="_blank" rel="noopener noreferrer" className="tool-card-link">
            <div>
              <h3 className="text-blue-400">n8n</h3>
              <p>Good for research data, more control</p>
              <ul className="tech-list mt-5">
                <li>Free and private (can run on University servers).</li>
                <li>Handles research data with more options.</li>
                <li>Useful for advanced workflows.</li>
              </ul>
            </div>
          </a>
        </div>
    </div>,

    // Slide 6: Tools for Reading and Writing Papers
    <div className="w-full">
      <h2 className="slide-title">Tools for Reading and Writing Papers</h2>
      <div className="tool-grid">
        <a href="https://consensus.app/" target="_blank" rel="noopener noreferrer" className="tool-card tool-card-link">
          <div className="flex justify-center mb-4">
            <Quote size={30} className="text-violet-500" />
          </div>
          <h4>Consensus</h4>
          <p>Helps find real papers</p>
        </a>
        <a href="https://scite.ai/" target="_blank" rel="noopener noreferrer" className="tool-card tool-card-link">
          <div className="flex justify-center mb-4">
            <CheckCheck size={30} className="text-emerald-500" />
          </div>
          <h4>Scite.ai</h4>
          <p>Checks citation meaning</p>
        </a>
        <a href="https://jenni.ai/" target="_blank" rel="noopener noreferrer" className="tool-card tool-card-link">
          <div className="flex justify-center mb-4">
            <PenTool size={30} className="text-amber-500" />
          </div>
          <h4>Jenni</h4>
          <p>Helps expand drafts</p>
        </a>
        <a href="https://paperpal.com/" target="_blank" rel="noopener noreferrer" className="tool-card tool-card-link">
          <div className="flex justify-center mb-4">
            <Languages size={30} className="text-red-500" />
          </div>
          <h4>Paperpal</h4>
          <p>Improves academic language</p>
        </a>
      </div>
    </div>,

    // Slide 7: Use Case 1 Title
    <div className="title-layout w-full max-w-4xl text-center">
      <div className="tagline">Use Case 01</div>
      <h1>Example 1: Literature Review Helper</h1>
      <p className="subtitle">
        How to stay updated without reading 100 abstracts/day
      </p>
    </div>,

    // Slide 8: Use Case 1 Steps
    <div className="w-full">
      <h2 className="slide-title">Workflow: New Paper Alert System</h2>
      <div className="timeline-layout">
        <div className="timeline-line"></div>
        <div className="timeline-item">
          <div className="timeline-dot flex items-center justify-center">
            <Zap size={14} className="text-blue-500" />
          </div>
          <div className="timeline-content">
            <h3>1. New paper appears</h3>
            <p>System detects a new paper on ArXiv or PubMed.</p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-dot flex items-center justify-center">
            <GitBranch size={14} className="text-blue-500" />
          </div>
          <div className="timeline-content">
            <h3>2. Filter</h3>
            <p>Checks if abstract contains your keywords.</p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-dot flex items-center justify-center">
            <Bot size={14} className="text-blue-500" />
          </div>
          <div className="timeline-content">
            <h3>3. Create short summary</h3>
            <p>Assistant tool makes a 3-bullet summary.</p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-dot flex items-center justify-center">
            <Database size={14} className="text-blue-500" />
          </div>
          <div className="timeline-content">
            <h3>4. Store</h3>
            <p>Adds to your collection and sends you the summary.</p>
          </div>
        </div>
      </div>
    </div>,

    // Slide 9: Safe Writing with Assistance
    <div className="w-full">
      <h2 className="slide-title">Safe Writing with Assistance</h2>
      <div className="two-column">
        <div>
          <h3>Writing with Assisted Tools</h3>
          <p>How to use smart tools without plagiarism.</p>
          <div className="mt-5">
            <ul className="tech-list">
              <li className="text-white">
                <strong>Step 1: Grounding.</strong> Use <em>Consensus</em> to
                find facts from real papers.
              </li>
              <li className="text-white">
                <strong>Step 2: Drafting.</strong> Use <em>Jenni</em> to expand
                your points. It adds citations.
              </li>
              <li className="text-white">
                <strong>Step 3: Polishing.</strong> Use <em>Paperpal</em> to
                improve grammar and language.
              </li>
            </ul>
          </div>
          <p className="mt-5 text-lg text-violet-500 font-semibold">
            <strong>Result:</strong> Original text, proper citations, faster
            writing.
          </p>
          <p className="mt-3 text-red-400 font-semibold">
            Always review and rewrite before submission.
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

    // Slide 10: Writing Mathematical Equations
    <div className="w-full">
      <h2 className="slide-title">Writing Mathematical Equations</h2>
      <ul className="tech-list mt-8">
        <li>Convert text to LaTeX</li>
        <li>Clean equation formatting</li>
        <li>Explain formulas in steps</li>
      </ul>
      <p className="mt-6 text-slate-400 text-lg">
        Tool helps with format, not ideas.
      </p>
    </div>,

    // Slide 11: Tracking Opportunities Automatically
    <div className="w-full">
      <h2 className="slide-title">Tracking Opportunities Automatically</h2>
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
            Funding is important for research. Checking many grant websites by
            hand is slow.
          </p>
          <ul className="tech-list mt-5">
            <li>
              <strong>Check websites:</strong> Tool visits grant sites weekly.
            </li>
            <li>
              <strong>Extract:</strong> Gets "Deadline", "Eligibility", and
              "Amount".
            </li>
            <li>
              <strong>Notify:</strong> Sends a summary email to the Department
              Head.
            </li>
          </ul>
        </div>
      </div>
    </div>,

    // Slide 12: Asking Questions to Your Data
    <div className="w-full">
      <h2 className="slide-title">Asking Questions to Your Data</h2>
      <div className="two-column">
        <div>
          <p>
            Move beyond difficult Excel formulas. Use assistant tools like{" "}
            <strong>Julius</strong> or similar helpers.
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
              <strong>Get</strong> a publication-ready chart quickly.
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

    // Slide 13: How to Ask Clear Questions
    <div className="w-full">
      <h2 className="slide-title">How to Ask Clear Questions</h2>
      <div className="two-column">
        <div>
          <h3>Clear Instruction Method</h3>
          <p>
            Clear instructions give better results. For good research output, be
            specific with your request.
          </p>
          <div className="bg-slate-800 p-6 rounded-lg mt-5 border border-slate-700">
            <p className="text-red-300 mb-4 flex items-center gap-2">
              <AlertTriangle size={18} /> <strong>Bad:</strong> "Write an
              abstract about ML."
            </p>
            <p className="text-emerald-400 flex items-start gap-2">
              <CheckCheck size={18} className="mt-1 flex-shrink-0" />{" "}
              <span>
                <strong>Good:</strong> "Please use these 3 bullet points to
                write a 200-word abstract in active voice."
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

    // Slide 14: Responsible Use
    <div className="w-full">
      <h2 className="slide-title">Responsible Use</h2>
      <div className="two-column">
        <div>
          <ul className="tech-list mt-5">
            <li className="mb-6">
              <strong>Check all facts:</strong> Assisted tools can make
              mistakes. Always check with real sources.
            </li>
            <li className="mb-6">
              <strong>Review before submitting:</strong> Do not copy-paste
              results directly. Make sure your own ideas are clear.
            </li>
            <li className="mb-6">
              <strong>Say if you used a tool:</strong> Some journals want you to
              mention if a tool helped with writing.
            </li>
            <li className="mb-6">
              <strong>Protect data:</strong> Do not upload private or sensitive
              data to public tools.
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

    // Slide 15: Comparison
    <div className="w-full">
      <h2 className="slide-title">Manual vs. Assisted Workflow</h2>
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
              Assisted Workflow
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
              Jenni (Co-writer with citations)
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
              Julius (Conversational)
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

    // Slide 16: What Changes for Researchers
    <div className="w-full">
      <h2 className="slide-title">What Changes for Researchers</h2>
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

    // Slide 17: Hands-on Session Next
    <div className="title-layout w-full max-w-4xl text-center">
      <h1 className="text-[80px] mb-5">Hands-on Session Next</h1>
      <p className="subtitle">We will build a simple workflow together</p>
      <div className="mt-10 text-slate-400">
        <p className="text-2xl text-white mb-3">Rajesh Dhiman</p>
      </div>
    </div>,
  ];

  return (
    <div className="min-h-screen bg-black text-white font-sans flex items-center justify-center overflow-hidden relative">
      <style>{`
                /* Workflow Simulation Slide Styles */
                .workflow-sim-container {
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  gap: 0px;
                  position: relative;
                  height: 120px;
                  margin-top: 40px;
                }
                .workflow-node {
                  width: 120px;
                  height: 120px;
                  border-radius: 50%;
                  background: linear-gradient(135deg, #1e40af 0%, #8b5cf6 100%);
                  color: #fff;
                  font-size: 1.5rem;
                  font-weight: 700;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  box-shadow: 0 8px 32px 0 rgba(91, 33, 182, 0.25);
                  opacity: 0;
                  transform: translateY(40px) scale(0.9);
                  animation: nodeAppear 0.5s forwards;
                }
                .workflow-node.trigger { animation-delay: 0.2s; }
                .workflow-node.filter { animation-delay: 1.0s; }
                .workflow-node.ai { animation-delay: 1.8s; }
                .workflow-node.action { animation-delay: 2.6s; }
                .workflow-line {
                  width: 80px;
                  height: 6px;
                  background: linear-gradient(90deg, #60a5fa 0%, #a78bfa 100%);
                  border-radius: 3px;
                  margin: 0 8px;
                  opacity: 0;
                  transform: scaleX(0);
                  animation: lineDraw 0.5s forwards;
                }
                .workflow-line.line1 { animation-delay: 0.7s; }
                .workflow-line.line2 { animation-delay: 1.5s; }
                .workflow-line.line3 { animation-delay: 2.3s; }
                @keyframes nodeAppear {
                  to {
                    opacity: 1;
                    transform: translateY(0) scale(1);
                  }
                }
                @keyframes lineDraw {
                  to {
                    opacity: 1;
                    transform: scaleX(1);
                  }
                }
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
          transition: transform 0.25s cubic-bezier(0.22,1,0.36,1), box-shadow 0.25s cubic-bezier(0.22,1,0.36,1);
        }
        .tool-card-link:hover, .tool-card:hover, .two-column.tiled > a:hover > div, .two-column.tiled > div:hover {
          transform: translateY(-10px) scale(1.04);
          box-shadow: 0 12px 32px 0 rgba(59,130,246,0.18), 0 2px 8px 0 rgba(0,0,0,0.10);
          z-index: 2;
        }
        .tool-card-link {
          text-decoration: none;
          color: inherit;
          display: block;
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
        </div>

        {/* Slide Counter */}
        <div className="absolute bottom-6 right-8 text-slate-500 font-mono text-sm z-20">
            {currentSlide + 1} / {totalSlides}
          </div>
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
          <style>{`
            /* Slide up animation for all slide content */
            .slide-up-animate {
              animation: slideUpEntry 0.7s cubic-bezier(0.22, 1, 0.36, 1);
            }
            @keyframes slideUpEntry {
              from {
                opacity: 0;
                transform: translateY(60px) scale(0.98);
              }
              to {
                opacity: 1;
                transform: translateY(0) scale(1);
              }
            }
          `}</style>
      </div>
    </div>
  );
}
