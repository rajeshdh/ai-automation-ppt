import React, { useState, useEffect } from "react";
import {
  ChefHat,
  Utensils,
  Play,
  Brain,
  FileText,
  ArrowRight,
  ArrowLeft,
  Copy,
  Check,
  AlertTriangle,
  CheckCircle,
  Terminal,
  Cpu,
  Sparkles,
  MessageSquare,
  BookOpen,
  Mic,
  MicOff,
  Gift,
  Linkedin,
  Download,
  User,
  Globe,
  Zap,
  Layout,
  MousePointer2,
  Eye,
  Info,
  Mail,
  Calendar,
  FileSpreadsheet,
  Slack,
  Github,
} from "lucide-react";

// --- API Helpers (Preserved) ---

const apiKey = import.meta.env?.VITE_GEMINI_API_KEY || "";

const callGemini = async (prompt, systemInstruction = "") => {
  if (!apiKey) {
    throw new Error(
      "Missing Gemini API key. Set VITE_GEMINI_API_KEY in your .env file."
    );
  }
  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent?key=${apiKey}`;

  const payload = {
    contents: [{ parts: [{ text: prompt }] }],
    systemInstruction: { parts: [{ text: systemInstruction }] },
  };

  let delay = 1000;
  for (let i = 0; i < 5; i++) {
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        if (response.status === 429) throw new Error("Too Many Requests");
        throw new Error(`API Error: ${response.statusText}`);
      }

      const data = await response.json();
      return (
        data.candidates?.[0]?.content?.parts?.[0]?.text ||
        "No response generated."
      );
    } catch (error) {
      if (i === 4) throw error;
      await new Promise((resolve) => setTimeout(resolve, delay));
      delay *= 2;
    }
  }
};

// --- Components ---

const Button = ({
  onClick,
  children,
  variant = "primary",
  className = "",
  disabled = false,
}) => {
  const baseStyle =
    "px-6 py-3 rounded-xl font-bold text-base transition-all duration-200 flex items-center justify-center gap-2 shadow-sm active:scale-95";
  const variants = {
    primary:
      "bg-blue-600 text-white hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-200",
    secondary:
      "bg-white text-slate-800 border-2 border-slate-200 hover:border-blue-500 hover:text-blue-600",
    outline:
      "border-2 border-slate-300 text-slate-500 hover:border-slate-800 hover:text-slate-800",
    success: "bg-green-600 text-white hover:bg-green-700",
    magic:
      "bg-gradient-to-r from-violet-600 to-indigo-600 text-white hover:shadow-lg hover:shadow-indigo-200",
    ghost:
      "text-slate-500 hover:bg-slate-100 hover:text-slate-900 border-transparent text-sm py-2 px-4",
    linkedin: "bg-[#0077b5] text-white hover:bg-[#006399] shadow-md",
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyle} ${variants[variant]} ${
        disabled ? "opacity-50 cursor-not-allowed" : ""
      } ${className}`}
    >
      {children}
    </button>
  );
};

const Card = ({ title, icon: Icon, children, onClick, active }) => (
  <div
    onClick={onClick}
    className={`
      p-6 rounded-2xl border-2 transition-all duration-300 cursor-pointer h-full flex flex-col items-center text-center
      ${
        active
          ? "border-blue-600 bg-blue-50 shadow-xl scale-105"
          : "border-slate-100 bg-white hover:border-blue-200 hover:shadow-lg"
      }
    `}
  >
    <div
      className={`
      w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-colors
      ${
        active
          ? "bg-blue-600 text-white shadow-lg"
          : "bg-slate-50 text-slate-400 group-hover:bg-blue-50 group-hover:text-blue-500"
      }
    `}
    >
      <Icon size={24} />
    </div>
    <h3
      className={`text-xl font-bold mb-2 ${
        active ? "text-blue-900" : "text-slate-800"
      }`}
    >
      {title}
    </h3>
    <div className="text-slate-600 leading-relaxed font-medium text-sm">
      {children}
    </div>
  </div>
);

const StepIndicator = ({ total, current }) => (
  <div className="flex justify-center gap-2 mb-4 absolute top-0 left-0 right-0 py-2 z-10 pointer-events-none">
    {[...Array(total)].map((_, i) => (
      <div
        key={i}
        className={`h-1.5 rounded-full transition-all duration-500 ${
          i === current ? "w-8 bg-blue-600" : "w-2 bg-slate-200"
        }`}
      />
    ))}
  </div>
);

const CopyBox = ({ text, label }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="group bg-slate-900 rounded-xl overflow-hidden my-4 shadow-xl ring-1 ring-white/10 flex-shrink-0">
      <div className="flex justify-between items-center px-4 py-2 bg-slate-950/50 border-b border-white/10">
        <div className="flex items-center gap-2">
          <Terminal size={12} className="text-blue-400" />
          <span className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">
            {label || "System Prompt"}
          </span>
        </div>
        <button
          onClick={handleCopy}
          className="flex items-center gap-2 text-[10px] font-bold text-blue-400 hover:text-white transition-colors bg-white/5 px-2 py-1 rounded-full hover:bg-white/10"
        >
          {copied ? (
            <>
              <Check size={12} /> COPIED
            </>
          ) : (
            <>
              <Copy size={12} /> COPY
            </>
          )}
        </button>
      </div>
      <div className="p-4 font-mono text-xs text-blue-100 leading-relaxed whitespace-pre-wrap selection:bg-blue-500/30">
        {text}
      </div>
    </div>
  );
};

const SpeakerNotes = ({ notes, visible }) => {
  if (!visible) return null;
  return (
    <div className="bg-yellow-50 border-t-4 border-yellow-400 p-6 animate-in slide-in-from-bottom-20 fixed bottom-[80px] left-0 right-0 z-50 shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.1)] max-h-[250px] overflow-y-auto">
      <div className="max-w-5xl mx-auto flex gap-6">
        <div className="flex-shrink-0 mt-1">
          <div className="bg-yellow-400 text-yellow-900 p-2 rounded-lg shadow-sm">
            <Mic size={20} />
          </div>
        </div>
        <div className="prose prose-base max-w-none text-slate-800 font-medium leading-relaxed">
          <h4 className="text-yellow-800 font-bold uppercase text-xs tracking-widest mb-2">
            Speaker Script
          </h4>
          {notes.split("\n").map((line, i) => (
            <p key={i} className="mb-2">
              {line}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

const SimulationBox = ({ type }) => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);
  const [extraResult, setExtraResult] = useState("");
  const [extraLoading, setExtraLoading] = useState(false);

  const cleanLatex = (text) => {
    return text.replace(/```latex|```/g, "").trim();
  };

  const parseBold = (text) => {
    const parts = text.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, i) => {
      if (part.startsWith("**") && part.endsWith("**")) {
        return (
          <strong key={i} className="text-indigo-900 font-bold">
            {part.slice(2, -2)}
          </strong>
        );
      }
      return part;
    });
  };

  const renderMarkdown = (text) => {
    if (!text) return null;
    const lines = text.split("\n");
    return (
      <div className="space-y-1">
        {lines.map((line, i) => {
          const trimmed = line.trim();
          if (!trimmed) return <div key={i} className="h-1" />;
          if (trimmed.startsWith("* ") || trimmed.startsWith("- ")) {
            return (
              <div key={i} className="flex gap-2 ml-2">
                <span className="text-indigo-500 mt-1.5 flex-shrink-0 text-xs">
                  •
                </span>
                <span className="text-slate-700 text-sm">
                  {parseBold(trimmed.substring(2))}
                </span>
              </div>
            );
          }
          if (trimmed.startsWith("#")) {
            return (
              <h4
                key={i}
                className="font-bold text-base mt-2 mb-1 text-indigo-900"
              >
                {parseBold(trimmed.replace(/^#+\s/, ""))}
              </h4>
            );
          }
          return (
            <p key={i} className="text-slate-700 text-sm">
              {parseBold(line)}
            </p>
          );
        })}
      </div>
    );
  };

  const handleGenerate = async () => {
    if (!input) return;
    setLoading(true);
    setOutput("");
    setExtraResult("");

    try {
      let prompt = "";
      let systemPrompt = "";

      if (type === "math") {
        systemPrompt =
          "You are a helpful academic assistant. I will give you a mathematical description in plain English. You must convert it into valid LaTeX code. Do not explain it, just give me the code.";
        prompt = input;
      } else {
        systemPrompt =
          "You are a strict Academic Editor. I will give you rough bullet points of my research findings. Rewrite them into one professional paragraph. Do not add new facts. Only use the information I give you.";
        prompt = input;
      }

      const result = await callGemini(prompt, systemPrompt);
      setOutput(result);
    } catch (error) {
      setOutput("Error connecting to Gemini. Please try again.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleExtraAction = async () => {
    if (!output) return;
    setExtraLoading(true);
    setExtraResult("");

    try {
      let prompt = "";
      if (type === "math") {
        prompt = `Explain the following LaTeX code in simple English for a student. Code: ${output}`;
      } else {
        prompt = `Act as a critical professor. Critique the following paragraph. Is the tone objective? Is it concise? Output a bulleted list of feedback. Paragraph: ${output}`;
      }

      const result = await callGemini(prompt);
      setExtraResult(result);
    } catch (error) {
      setExtraResult("Error getting extra insights.");
    } finally {
      setExtraLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-xl shadow-slate-200/50 p-6 text-left ring-1 ring-slate-100 h-full flex flex-col">
      <h4 className="font-black text-slate-900 flex items-center gap-3 mb-4 text-lg">
        <div className="p-1.5 bg-indigo-100 rounded-lg text-indigo-600">
          <Sparkles size={18} />
        </div>
        {type === "math"
          ? "Live Demo: Math Translator"
          : "Live Demo: Writing Assistant"}
      </h4>

      <div className="flex flex-col gap-4 flex-1 min-h-0 overflow-y-auto">
        {/* Writing Assistant Example Box */}
        {type !== "math" && (
          <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl flex-shrink-0">
            <h5 className="font-bold text-slate-700 flex items-center gap-2 mb-2 text-xs uppercase tracking-wider">
              <Info size={14} className="text-blue-500" /> Example
            </h5>
            <div className="grid grid-cols-2 gap-4 text-xs">
              <div>
                <span className="font-bold text-slate-900 block mb-1">
                  Input:
                </span>
                <ul className="list-disc list-inside text-slate-500 space-y-0.5 bg-white p-2 rounded-lg border border-slate-100">
                  <li>Sample size = 50</li>
                  <li>Group A faster</li>
                </ul>
              </div>
              <div className="border-l border-slate-200 pl-4">
                <span className="font-bold text-blue-600 block mb-1">
                  Output:
                </span>
                <p className="text-slate-600 italic leading-snug bg-white p-2 rounded-lg border border-slate-100 border-l-2 border-l-blue-500">
                  "A study of 50 participants showed Group A was faster."
                </p>
              </div>
            </div>
          </div>
        )}

        <div className="flex-shrink-0">
          <label className="block text-xs font-bold text-slate-500 uppercase tracking-wide mb-1">
            Input
          </label>
          <div className="flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={
                type === "math"
                  ? "e.g., Integral of x squared..."
                  : "e.g., 1. Tested 50 students..."
              }
              className="flex-1 p-3 bg-slate-50 border-2 border-slate-200 rounded-xl focus:border-indigo-500 focus:ring-0 focus:outline-none text-base transition-colors"
              onKeyDown={(e) => e.key === "Enter" && handleGenerate()}
            />
            <Button
              onClick={handleGenerate}
              disabled={loading || !input}
              className="w-28 text-sm"
              variant="magic"
            >
              {loading ? (
                "Working..."
              ) : (
                <>
                  <Play size={16} fill="currentColor" /> Run
                </>
              )}
            </Button>
          </div>
        </div>

        {output && (
          <div className="animate-in fade-in slide-in-from-top-4 duration-500 space-y-4 flex-1 flex flex-col min-h-0">
            {type === "math" && (
              <div className="flex-shrink-0">
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wide mb-1">
                  Preview
                </label>
                <div className="p-4 bg-white border-2 border-slate-100 rounded-xl flex items-center justify-center shadow-inner min-h-[80px]">
                  <img
                    src={`https://latex.codecogs.com/svg.image?\\large&space;${encodeURIComponent(
                      cleanLatex(output)
                    )}`}
                    alt="Math Formula Render"
                    className="max-w-full max-h-16"
                  />
                </div>
              </div>
            )}

            <div className="flex-shrink-0">
              <label className="block text-xs font-bold text-slate-500 uppercase tracking-wide mb-1">
                {type === "math" ? "Output Code" : "Output"}
              </label>
              <div
                className={`p-4 rounded-xl border-2 ${
                  type === "math"
                    ? "bg-slate-900 border-slate-800 text-yellow-400 font-mono text-sm"
                    : "bg-white border-indigo-100 text-slate-800 text-sm leading-relaxed shadow-sm"
                }`}
              >
                {output}
              </div>
            </div>

            <div className="flex gap-2 pt-2 border-t border-slate-100 flex-shrink-0">
              <Button
                onClick={handleExtraAction}
                disabled={extraLoading}
                variant="secondary"
                className="text-xs py-2 px-4 h-auto"
              >
                {extraLoading ? (
                  "Analyzing..."
                ) : (
                  <>
                    {type === "math" ? (
                      <BookOpen size={14} />
                    ) : (
                      <MessageSquare size={14} />
                    )}
                    {type === "math" ? "Explain This" : "Critique Draft"}
                  </>
                )}
              </Button>
            </div>

            {extraResult && (
              <div className="p-4 bg-indigo-50 rounded-xl border border-indigo-100 text-slate-800 animate-in fade-in flex-1 overflow-y-auto">
                <strong className="text-indigo-900 block mb-2 text-sm">
                  Analysis:
                </strong>
                <div className="text-sm">{renderMarkdown(extraResult)}</div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

// --- Main App Component ---

export default function AIWorkshopApp() {
  const [step, setStep] = useState(0);
  const [activeConcept, setActiveConcept] = useState(null);
  const [showNotes, setShowNotes] = useState(false);

  const steps = [
    {
      title: "The Vision",
      id: "welcome",
      notes: "",
    },
    {
      title: "Your Guide",
      id: "instructor",
      notes: "",
    },
    {
      title: "The Villain",
      id: "problem",
      notes:
        "SCRIPT: 'We lose hours to cleanup and copy-paste. That’s not why we’re here. Today we’ll fix that.'",
    },
    {
      title: "The Insight",
      id: "analogy",
      notes:
        "SCRIPT: 'Automation is a kitchen: Recipe = workflow, Order = trigger, Station = node. If you get a sandwich shop, you get this.'",
    },
    {
      title: "The Triggers",
      id: "trigger-gallery",
      notes:
        "SCRIPT: 'Today we use a chat button. In real life you can trigger with email, calendar, or forms. That’s the jump from a tool to a system.'",
    },
    {
      title: "Example 1: Math",
      id: "math-intro",
      notes:
        "SCRIPT: 'Quick win: I type plain English, it returns LaTeX. No code, just a prompt. [Click Run].'",
    },
    {
      title: "Build Phase 1",
      id: "math-build",
      notes:
        "SCRIPT: 'Open laptops. Add Chat Trigger. Add LLM Chain. Connect them. Paste the instruction. Done.'",
    },
    {
      title: "The Rules",
      id: "ethics",
      notes:
        "SCRIPT: 'A warning before we continue. \nAsking AI to write your paper is plagiarism. It is lazy and dangerous. \nAsking AI to format YOUR ideas is productivity. \nWe are here to build Assistants, not Imposters.'",
    },
    {
      title: "Example 2: Writing",
      id: "drafter-intro",
      notes:
        "SCRIPT: 'Enemy number two: The Blank Page. \nYou have the data, but the words won’t come. \nWe will build a tool that takes your bullet points and turns them into a professional paragraph instantly.'",
    },
    {
      title: "Build Phase 2",
      id: "drafter-build",
      notes:
        "SCRIPT: 'Here is the secret of automation: Reuse. \nWe don’t need a new kitchen. We just need a new recipe. \nKeep the same blocks. Just change the instruction card. \nPaste this in.'",
    },
    {
      title: "The Possibilities",
      id: "complex-workflow",
      notes:
        "SCRIPT: 'We built single robots today. But true power comes from connecting them. \nImagine this: A new grant is posted. Your robot reads it, summarizes it, checks if you are eligible, and emails you a draft proposal. \nThis is not sci-fi. This is what we build in the advanced class.'",
    },
    {
      title: "The Vision",
      id: "summary",
      notes:
        "SCRIPT: 'You came in doing this manually. Now you have two starter tools and a playbook. Use them on one real task this week.'",
    },
    {
      title: "Feedback",
      id: "feedback",
      notes:
        "SCRIPT: 'If this was useful, please leave me a quick note on LinkedIn. If you have suggestions, email me at rajesh@eunix.tech.'",
    },
  ];

  const nextStep = () => setStep(Math.min(steps.length - 1, step + 1));
  const prevStep = () => setStep(Math.max(0, step - 1));

  // --- Screens (Visuals & Layout) ---

  const WelcomeScreen = () => (
    <div className="flex flex-col items-center justify-center h-full text-center max-w-4xl mx-auto pb-4">
      <div className="bg-gradient-to-tr from-blue-600 to-indigo-600 p-5 rounded-3xl shadow-2xl mb-6 animate-bounce">
        <Brain size={56} className="text-white" />
      </div>
      <h1 className="text-5xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight leading-tight">
        Let&apos;s stop burning time on busywork.
      </h1>
      <p className="text-lg md:text-xl text-slate-600 mb-8 font-medium max-w-2xl leading-relaxed">
        We&apos;ll let AI handle the repetitive parts so you can focus on the
        work that matters.
      </p>
      <Button
        onClick={nextStep}
        variant="magic"
        className="px-8 py-4 text-lg shadow-indigo-500/30"
      >
        Let&apos;s get started <ArrowRight size={20} />
      </Button>
    </div>
  );

  const InstructorScreen = () => (
    <div className="flex flex-col items-center justify-center h-full max-w-3xl mx-auto pb-4">
      <h2 className="text-4xl font-black text-slate-900 mb-2 tracking-tight">
        Rajesh Dhiman
      </h2>
      <p className="text-lg text-blue-600 font-bold uppercase tracking-widest mb-6 text-center">
        AI Engineer & Automation Architect · 12+ Years
      </p>
      <p className="text-slate-600 mb-6 text-center max-w-2xl">
        Eunix Tech (AI Automation Agency) — building AI agents, voice bots, and
        n8n workflows for teams in India, the US, and Singapore.
      </p>

      <div className="grid grid-cols-2 gap-4 w-full mb-8">
        {[
          "AI Agents & Voice Bots",
          "n8n Workflows",
          "Automation architecture",
          "Built for teams in IN / US / SG",
        ].map((skill, i) => (
          <div
            key={i}
            className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm border border-slate-100"
          >
            <CheckCircle size={18} className="text-green-500" />
            <span className="font-bold text-slate-700 text-sm">{skill}</span>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap justify-center gap-4">
        <Button
          variant="outline"
          onClick={() => window.open("https://www.rajeshdhiman.in", "_blank")}
        >
          <Globe size={18} /> rajeshdhiman.in
        </Button>
        <Button
          variant="linkedin"
          onClick={() =>
            window.open("https://www.linkedin.com/in/dhimanrajesh/", "_blank")
          }
        >
          <Linkedin size={18} /> Connect on LinkedIn
        </Button>
        <Button onClick={nextStep}>
          Let's Build <ArrowRight size={18} />
        </Button>
      </div>
      <div className="mt-6 text-sm text-slate-500 text-center space-y-1">
        <div>
          📘 Frontend Interview Guide —{" "}
          <a
            className="text-blue-600 underline"
            href="https://www.amazon.com/dp/B0FKYLFPPK"
            target="_blank"
            rel="noreferrer"
          >
            Amazon
          </a>
        </div>
        <div>
          📙 Vibe Coding Survival Guide —{" "}
          <a
            className="text-blue-600 underline"
            href="https://dhimanrajesh.gumroad.com/l/vibe-guide"
            target="_blank"
            rel="noreferrer"
          >
            Gumroad
          </a>
        </div>
      </div>
    </div>
  );

  const ProblemScreen = () => (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center h-full max-w-6xl mx-auto pb-4">
      <div>
        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-red-100 text-red-700 rounded-full font-bold uppercase text-[10px] tracking-wider mb-4">
          <AlertTriangle size={12} /> The Villain
        </div>
        <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 leading-none tracking-tight">
          The Productivity <br />
          <span className="text-red-600">Trap.</span>
        </h2>
        <p className="text-lg text-slate-600 mb-6 font-light leading-relaxed">
          We lose hours every week to cleanup and copy-paste. That’s not the
          work we were supposed to do.
        </p>
        <div className="space-y-3">
          {[
            "Pulling highlights from PDFs just to make a summary",
            "Cleaning messy CSVs (dates, headers, dupes) again",
            "Skimming abstracts to decide ‘read or skip’ and track it",
            "Rewriting the same updates and follow-ups",
          ].map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-4 p-3 bg-white rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-8 h-8 rounded-full bg-red-50 text-red-500 flex items-center justify-center flex-shrink-0">
                <AlertTriangle size={16} />
              </div>
              <span className="text-base font-bold text-slate-700">{item}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-slate-100 rounded-3xl p-8 text-center border-2 border-slate-200/50 flex flex-col items-center justify-center h-[300px] lg:h-[350px]">
        <h3 className="text-slate-400 font-bold uppercase tracking-widest mb-3 text-xs">
          Today
        </h3>
        <div className="text-7xl md:text-8xl font-black text-blue-600 mb-3">
          2
        </div>
        <p className="text-xl md:text-2xl font-bold text-slate-800">
          Small helpers
        </p>
        <p className="text-slate-500 mt-2 text-sm">Built by you. Today.</p>
      </div>
    </div>
  );

  const AnalogyScreen = () => (
    <div className="max-w-6xl mx-auto h-full flex flex-col justify-center pb-4">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-black text-slate-900 mb-3 tracking-tight">
          The Insight
        </h2>
        <p className="text-xl text-slate-500">
          Automation is not magic. It's a Kitchen.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card
          title="The Recipe"
          icon={FileText}
          active={activeConcept === "workflow"}
          onClick={() => setActiveConcept("workflow")}
        >
          {activeConcept === "workflow" ? (
            <span className="text-blue-700 font-bold text-base animate-in fade-in">
              The Workflow.
              <br />
              <span className="font-normal text-slate-600 text-sm mt-2 block">
                The step-by-step plan from start to finish.
              </span>
            </span>
          ) : (
            "What is the plan?"
          )}
        </Card>

        <Card
          title="The Ticket"
          icon={Play}
          active={activeConcept === "trigger"}
          onClick={() => setActiveConcept("trigger")}
        >
          {activeConcept === "trigger" ? (
            <span className="text-blue-700 font-bold text-base animate-in fade-in">
              The Trigger.
              <br />
              <span className="font-normal text-slate-600 text-sm mt-2 block">
                Nothing cooks until the order comes in.
              </span>
            </span>
          ) : (
            "When do we start?"
          )}
        </Card>

        <Card
          title="The Chef"
          icon={ChefHat}
          active={activeConcept === "node"}
          onClick={() => setActiveConcept("node")}
        >
          {activeConcept === "node" ? (
            <span className="text-blue-700 font-bold text-base animate-in fade-in">
              The Node.
              <br />
              <span className="font-normal text-slate-600 text-sm mt-2 block">
                One station chops. One station cooks.
              </span>
            </span>
          ) : (
            "Who does the work?"
          )}
        </Card>
      </div>
    </div>
  );

  const TriggerGalleryScreen = () => (
    <div className="max-w-6xl mx-auto h-full flex flex-col justify-center pb-8">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-black text-slate-900 mb-4 tracking-tight">
          What starts the machine?
        </h2>
        <p className="text-xl text-slate-500">
          A "Trigger" can be almost anything.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { icon: Mail, title: "An Email", desc: "When homework arrives." },
          { icon: Calendar, title: "The Time", desc: "Every Mon @ 9:00 AM." },
          {
            icon: FileSpreadsheet,
            title: "A Form",
            desc: "Google Form submit.",
          },
          { icon: MessageSquare, title: "A Chat", desc: "Manual request." },
        ].map((item, i) => (
          <div
            key={i}
            className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:border-blue-200 hover:shadow-lg transition-all text-center"
          >
            <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <item.icon size={24} />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-1">
              {item.title}
            </h3>
            <p className="text-slate-500 text-sm leading-tight">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );

  const ComplexWorkflowScreen = () => (
    <div className="max-w-6xl mx-auto h-full flex flex-col justify-center text-center pb-8">
      <h2 className="text-4xl font-black text-slate-900 mb-4 tracking-tight">
        The Possibilities
      </h2>
      <p className="text-xl text-slate-500 mb-12">
        Today is step 1. This is where we are going:
      </p>

      <div className="relative flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4 p-8 bg-white rounded-3xl border-2 border-dashed border-slate-200">
        {/* Workflow Nodes */}
        {[
          { icon: Mail, title: "New Grant Email", type: "trigger" },
          { icon: Brain, title: "AI Reads It", type: "action" },
          { icon: FileSpreadsheet, title: "Check Excel", type: "action" },
          { icon: Slack, title: "Notify Team", type: "end" },
        ].map((item, i) => (
          <React.Fragment key={i}>
            <div className="relative z-10 flex flex-col items-center">
              <div
                className={`w-20 h-20 rounded-2xl flex items-center justify-center shadow-lg mb-3 text-white
                     ${
                       item.type === "trigger"
                         ? "bg-green-500"
                         : item.type === "end"
                         ? "bg-purple-600"
                         : "bg-blue-600"
                     }
                  `}
              >
                <item.icon size={32} />
              </div>
              <span className="font-bold text-slate-700 text-sm">
                {item.title}
              </span>
            </div>

            {/* Arrow Connector */}
            {i < 3 && (
              <div className="hidden md:flex flex-1 h-1.5 bg-slate-100 relative items-center justify-center">
                <ArrowRight size={20} className="text-slate-300 absolute" />
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
      <p className="mt-8 text-slate-400 font-medium text-sm">
        Real Automation connects multiple apps together.
      </p>
    </div>
  );

  const MathIntroScreen = () => (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center h-full max-w-6xl mx-auto pb-4">
      <div className="text-left">
        <div className="inline-flex items-center justify-center p-3 bg-indigo-50 rounded-xl mb-6 w-16 h-16 text-indigo-600 shadow-sm">
          <Cpu size={32} />
        </div>
        <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">
          The Math Translator
        </h2>
        <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-lg leading-relaxed">
          Typing formulas is slow. <br />
          We build a robot that converts <strong>
            Plain English
          </strong> into <strong>Perfect Code</strong>.
        </p>
      </div>

      <div className="h-[400px] lg:h-[500px] w-full">
        <SimulationBox type="math" />
      </div>
    </div>
  );

  const MathBuildScreen = () => (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 h-full items-start max-w-7xl mx-auto pt-4 pb-8">
      <div className="space-y-6">
        <div>
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-2">
            Build Phase 1
          </h2>
          <p className="text-lg text-slate-500">Follow the recipe exactly.</p>
        </div>

        <div className="space-y-3">
          {[
            {
              title: "The Order Ticket",
              desc: "Add 'Chat Trigger' node.",
              icon: Play,
            },
            {
              title: "The Chef",
              desc: "Add 'Basic LLM Chain' node.",
              icon: Brain,
            },
            {
              title: "The Connection",
              desc: "Draw the line between them.",
              icon: Zap,
            },
            {
              title: "The Keys",
              desc: "Add API Credentials.",
              icon: CheckCircle,
            },
          ].map((step, i) => (
            <div
              key={i}
              className="flex gap-4 p-4 bg-white rounded-xl border border-slate-100 shadow-sm hover:border-blue-200 transition-colors group"
            >
              <div className="w-10 h-10 rounded-lg bg-slate-50 text-slate-400 group-hover:bg-blue-600 group-hover:text-white flex items-center justify-center font-bold flex-shrink-0 transition-colors">
                <step.icon size={18} />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-base">
                  {step.title}
                </h4>
                <p className="text-slate-500 font-medium text-sm">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 h-auto self-start">
        <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
          <Terminal size={20} className="text-blue-600" />
          The instruction (system prompt)
        </h3>
        <p className="text-slate-600 mb-2 font-medium text-sm">
          Open the <strong>Brain Node</strong> and paste this into the prompt
          box:
        </p>

        <CopyBox text="You are a helpful academic assistant. I will give you a mathematical description in plain English. You must convert it into valid LaTeX code. Do not explain it, just give me the code." />

        <div className="mt-6 p-3 bg-amber-50 border border-amber-200 rounded-lg text-amber-900 flex gap-2 items-start">
          <AlertTriangle size={16} className="mt-0.5 flex-shrink-0" />
          <p className="font-bold text-xs">
            Critical: Connect the Trigger Output to the Chain Input.
          </p>
        </div>
      </div>
    </div>
  );

  const EthicsScreen = () => (
    <div className="max-w-5xl mx-auto h-full flex flex-col justify-center pb-8">
      <h2 className="text-4xl font-black text-slate-900 mb-8 text-center tracking-tight">
        The Golden Rule
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-8 rounded-3xl bg-red-50 border-2 border-red-100 hover:shadow-xl hover:shadow-red-100/50 transition-all group">
          <div className="flex items-center gap-3 mb-4 text-red-600">
            <div className="p-2 bg-red-100 rounded-lg group-hover:scale-110 transition-transform">
              <AlertTriangle size={24} />
            </div>
            <h3 className="text-2xl font-bold">The Plagiarist</h3>
          </div>
          <p className="font-mono text-xs bg-white p-3 rounded-lg border border-red-100 mb-4 text-slate-500 shadow-inner">
            "Write me a research paper about History."
          </p>
          <ul className="space-y-3 text-red-900 font-medium text-sm">
            <li className="flex gap-2 items-center">
              <div className="w-1.5 h-1.5 rounded-full bg-red-500" /> Ideas are
              stolen.
            </li>
            <li className="flex gap-2 items-center">
              <div className="w-1.5 h-1.5 rounded-full bg-red-500" /> Facts are
              invented.
            </li>
            <li className="flex gap-2 items-center">
              <div className="w-1.5 h-1.5 rounded-full bg-red-500" />{" "}
              <strong>Dangerous.</strong>
            </li>
          </ul>
        </div>

        <div className="p-8 rounded-3xl bg-green-50 border-2 border-green-100 hover:shadow-xl hover:shadow-green-100/50 transition-all group">
          <div className="flex items-center gap-3 mb-4 text-green-600">
            <div className="p-2 bg-green-100 rounded-lg group-hover:scale-110 transition-transform">
              <CheckCircle size={24} />
            </div>
            <h3 className="text-2xl font-bold">The Architect</h3>
          </div>
          <p className="font-mono text-xs bg-white p-3 rounded-lg border border-green-100 mb-4 text-slate-500 shadow-inner">
            "Here are MY findings. Polish the grammar."
          </p>
          <ul className="space-y-3 text-green-900 font-medium text-sm">
            <li className="flex gap-2 items-center">
              <div className="w-1.5 h-1.5 rounded-full bg-green-500" /> Ideas
              are yours.
            </li>
            <li className="flex gap-2 items-center">
              <div className="w-1.5 h-1.5 rounded-full bg-green-500" /> AI acts
              as editor.
            </li>
            <li className="flex gap-2 items-center">
              <div className="w-1.5 h-1.5 rounded-full bg-green-500" />{" "}
              <strong>Powerful.</strong>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );

  const DrafterIntroScreen = () => (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center h-full max-w-6xl mx-auto pb-4">
      <div className="text-left">
        <div className="inline-flex items-center justify-center p-3 bg-violet-50 rounded-xl mb-6 w-16 h-16 text-violet-600 shadow-sm">
          <Utensils size={32} />
        </div>
        <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">
          The Writing Assistant
        </h2>
        <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-lg leading-relaxed">
          Input: Rough Bullet Points.
          <br />
          Output: Professional Prose.
        </p>
      </div>

      <div className="h-[400px] lg:h-[500px] w-full">
        <SimulationBox type="drafter" />
      </div>
    </div>
  );

  const DrafterBuildScreen = () => (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 h-full items-start max-w-7xl mx-auto pt-6 pb-10">
      <div className="space-y-8">
        <div>
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-2">
            Build Phase 2
          </h2>
          <p className="text-xl text-slate-500">The Power of Reuse.</p>
        </div>

        <div className="space-y-4">
          <div className="flex gap-6 p-6 bg-slate-50 rounded-2xl border border-slate-200 opacity-60">
            <div className="w-12 h-12 rounded-xl bg-slate-200 text-slate-400 flex items-center justify-center font-bold flex-shrink-0">
              <Check size={20} />
            </div>
            <div>
              <h4 className="font-bold text-slate-800 text-lg">The Setup</h4>
              <p className="text-slate-500">
                Keep the nodes exactly as they are.
              </p>
            </div>
          </div>
          <div className="flex gap-6 p-6 bg-white rounded-2xl border-2 border-indigo-500 shadow-lg shadow-indigo-100">
            <div className="w-12 h-12 rounded-xl bg-indigo-600 text-white flex items-center justify-center font-bold flex-shrink-0 animate-pulse">
              <MousePointer2 size={20} />
            </div>
            <div>
              <h4 className="font-bold text-indigo-900 text-lg">
                Swap The Brain
              </h4>
              <p className="text-indigo-600 font-medium">
                Open the LLM Node and replace the text.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200 sticky top-8">
        <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-3">
          <Terminal size={24} className="text-indigo-600" />
          The New Instruction
        </h3>
        <p className="text-slate-600 mb-2 font-medium">
          Tells the AI: "Stop acting like a Mathematician. Start acting like an
          Editor."
        </p>

        <CopyBox text="You are a strict Academic Editor. I will give you rough bullet points of my research findings. Rewrite them into one professional paragraph. Do not add new facts. Only use the information I give you." />
      </div>
    </div>
  );

  const SummaryScreen = () => (
    <div className="max-w-3xl mx-auto text-center h-full flex flex-col justify-center pb-8">
      <h2 className="text-5xl font-black text-slate-900 mb-8 tracking-tight">
        What you have now
      </h2>

      <div className="bg-white p-8 rounded-3xl shadow-2xl border border-slate-100 mb-8 text-left">
        <h3 className="font-black text-slate-800 mb-4 text-xl uppercase tracking-widest border-b pb-3">
          Takeaways
        </h3>
        <ul className="space-y-3">
          <li className="flex items-center gap-4">
            <div className="bg-green-100 text-green-600 p-1.5 rounded-lg">
              <Check size={18} />
            </div>
            <span className="text-lg text-slate-700 font-medium">
              Workflow thinking you can reuse
            </span>
          </li>
          <li className="flex items-center gap-4">
            <div className="bg-green-100 text-green-600 p-1.5 rounded-lg">
              <Check size={18} />
            </div>
            <span className="text-lg text-slate-700 font-medium">
              A starter math translator helper
            </span>
          </li>
          <li className="flex items-center gap-4">
            <div className="bg-green-100 text-green-600 p-1.5 rounded-lg">
              <Check size={18} />
            </div>
            <span className="text-lg text-slate-700 font-medium">
              A writing assistant template
            </span>
          </li>
        </ul>
        <p className="text-slate-600 mt-4 text-base">
          Didn’t finish? Pick one real task this week and test a small piece of
          it with these helpers.
        </p>
      </div>

      <div className="flex justify-center gap-4">
        <Button
          onClick={nextStep}
          variant="primary"
          className="px-10 py-5 text-lg"
        >
          One Last Thing <ArrowRight size={20} />
        </Button>
      </div>
    </div>
  );

  const FeedbackScreen = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center h-full max-w-6xl mx-auto pb-8">
      <div className="space-y-8">
        <div>
          <h2 className="text-4xl font-black text-slate-900 mb-4 tracking-tight">
            How did we do?
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed font-light">
            If this workshop helped you, snap a picture (screenshot or photo),
            post your feedback on LinkedIn, and tag me. Have ideas to improve
            it? Please email{" "}
            <a
              href="mailto:rajesh@eunix.tech"
              className="text-blue-600 underline"
            >
              rajesh@eunix.tech
            </a>
            .
          </p>
        </div>

        <div className="bg-indigo-50 p-6 rounded-3xl border border-indigo-100">
          <h3 className="font-bold text-indigo-900 mb-3 flex items-center gap-3 text-lg">
            <Gift className="text-indigo-600" size={24} /> Ways to share
            feedback
          </h3>
          <ul className="space-y-3 text-slate-700 text-base font-medium">
            <li className="flex items-center gap-3">
              <Linkedin size={20} className="text-indigo-500" />
              Post a photo/screenshot with your feedback on LinkedIn and tag me.
            </li>
            <li className="flex items-center gap-3">
              <Mail size={20} className="text-indigo-500" />
              Send suggestions to <strong>rajesh@eunix.tech</strong>.
            </li>
            <li className="flex items-center gap-3">
              <Sparkles size={20} className="text-indigo-500" />
              Tell me one thing to improve or one topic to add next time.
            </li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center text-center bg-white p-8 rounded-[2rem] shadow-2xl border border-slate-200 relative overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>

        <div className="w-56 h-56 bg-slate-900 rounded-2xl mb-6 overflow-hidden border-8 border-white shadow-2xl flex items-center justify-center relative z-10 transform group-hover:scale-105 transition-transform duration-500">
          <img
            src="https://api.qrserver.com/v1/create-qr-code/?data=https://www.linkedin.com/in/dhimanrajesh/&size=300x300&color=000000&bgcolor=ffffff"
            alt="LinkedIn QR Code"
            className="w-full h-full object-cover"
          />
        </div>

        <h3 className="text-2xl font-bold text-slate-900 mb-4 relative z-10">
          Share feedback
        </h3>
        <ol className="text-left text-slate-600 space-y-2 mb-6 text-base bg-slate-50 p-4 rounded-2xl relative z-10 w-full font-medium">
          <li>1. Scan to open LinkedIn.</li>
          <li>2. Post a quick note or photo with your feedback.</li>
          <li>3. Tag me so I can see it.</li>
          <li>
            4. Or email:{" "}
            <a
              href="mailto:rajesh@eunix.tech"
              className="text-blue-600 underline"
            >
              rajesh@eunix.tech
            </a>
          </li>
        </ol>

        <Button
          variant="linkedin"
          className="w-full text-lg py-3 relative z-10"
          onClick={() =>
            window.open("https://www.linkedin.com/in/dhimanrajesh/", "_blank")
          }
        >
          <Linkedin size={20} /> Connect on LinkedIn
        </Button>
      </div>
    </div>
  );

  return (
    <div className="h-screen w-screen bg-slate-50 font-sans text-slate-900 selection:bg-blue-200 flex flex-col overflow-hidden">
      {/* Header */}
      <header className="h-16 bg-white/80 backdrop-blur-md border-b border-slate-200 px-8 flex justify-between items-center z-30 flex-none">
        <div className="flex items-center gap-3 font-black text-slate-900 text-lg tracking-tight">
          <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center text-white shadow-lg shadow-blue-200">
            <Brain size={18} />
          </div>
          AI Automation Workflows
        </div>
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/rajeshdh/ai-automation-ppt"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900 text-sm font-semibold"
            title="View the code on GitHub"
          >
            <Github size={18} />
            Code
          </a>
          <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">
            Slide {step + 1} / {steps.length}
          </div>
        </div>
      </header>

      {/* Main Content Stage - No Scroll */}
      <main className="flex-1 relative flex flex-col items-center justify-center w-full p-6 overflow-hidden">
        <StepIndicator total={steps.length} current={step} />

        <div className="w-full h-full max-w-[1400px] flex flex-col justify-center animate-in fade-in zoom-in-95 duration-500 ease-out overflow-y-auto">
          {step === 0 && <WelcomeScreen />}
          {step === 1 && <InstructorScreen />}
          {step === 2 && <ProblemScreen />}
          {step === 3 && <AnalogyScreen />}
          {step === 4 && <TriggerGalleryScreen />}
          {step === 5 && <MathIntroScreen />}
          {step === 6 && <MathBuildScreen />}
          {step === 7 && <EthicsScreen />}
          {step === 8 && <DrafterIntroScreen />}
          {step === 9 && <DrafterBuildScreen />}
          {step === 10 && <ComplexWorkflowScreen />}
          {step === 11 && <SummaryScreen />}
          {step === 12 && <FeedbackScreen />}
        </div>
      </main>

      {/* Speaker Notes Overlay */}
      <SpeakerNotes notes={steps[step].notes} visible={showNotes} />

      {/* Footer Navigation */}
      <footer className="h-20 bg-white border-t border-slate-200 px-8 flex justify-between items-center z-50 flex-none">
        <div className="flex gap-4">
          <Button
            onClick={prevStep}
            disabled={step === 0}
            variant="outline"
            className="w-32"
          >
            <ArrowLeft size={16} /> Back
          </Button>

          <Button
            onClick={() => setShowNotes(!showNotes)}
            variant="ghost"
            className={`w-auto transition-colors ${
              showNotes
                ? "bg-yellow-100 text-yellow-800"
                : "text-slate-500 hover:bg-slate-100"
            }`}
            title="Toggle Speaker Notes"
          >
            {showNotes ? (
              <>
                <MicOff size={16} /> Hide Script
              </>
            ) : (
              <>
                <Mic size={16} /> Speaker Script
              </>
            )}
          </Button>
        </div>

        <div className="text-slate-300 text-xs hidden md:block font-bold uppercase tracking-widest">
          {steps[step].title}
        </div>

        <Button
          onClick={nextStep}
          disabled={step === steps.length - 1}
          className="w-32"
        >
          Next <ArrowRight size={16} />
        </Button>
      </footer>
    </div>
  );
}
