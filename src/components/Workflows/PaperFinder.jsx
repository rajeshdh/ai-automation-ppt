import React, { useState } from 'react';
import { Search, Sparkles, BookOpen, Clock, TrendingUp } from 'lucide-react';
import { findRelevantPapers } from '../../utils/geminiAPI';
import './Workflows.css';

export const PaperFinder = () => {
  const [topic, setTopic] = useState('AI in Healthcare');
  const [keywords, setKeywords] = useState('machine learning, diagnosis, medical imaging');
  const [papers, setPapers] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    { icon: Search, label: 'Search Query', color: '#60a5fa' },
    { icon: Sparkles, label: 'AI Processing', color: '#a855f7' },
    { icon: BookOpen, label: 'Find Papers', color: '#10b981' },
  ];

  const handleSearch = async () => {
    setIsSearching(true);
    setPapers('');
    setCurrentStep(0);

    // Animate through steps
    for (let i = 0; i <= steps.length; i++) {
      setCurrentStep(i);
      await new Promise(resolve => setTimeout(resolve, 800));
    }

    // Call AI
    const keywordArray = keywords.split(',').map(k => k.trim());
    const result = await findRelevantPapers(topic, keywordArray);
    setPapers(result);
    setIsSearching(false);
  };

  return (
    <div className="workflow-demo">
      <div className="workflow-header">
        <div className="workflow-badge">
          <Clock size={16} />
          <span>15 min exercise</span>
        </div>
        <h3>Workflow 2: Research Paper Finder</h3>
        <p className="workflow-subtitle">Find relevant papers using AI recommendations</p>
      </div>

      {/* Workflow Steps */}
      <div className="workflow-steps">
        {steps.map((step, index) => {
          const StepIcon = step.icon;
          const isActive = currentStep === index + 1;
          const isComplete = currentStep > index + 1;

          return (
            <React.Fragment key={index}>
              <div className={`workflow-step ${isActive ? 'active' : ''} ${isComplete ? 'complete' : ''}`}>
                <div className="step-icon-wrapper" style={{ '--step-color': step.color }}>
                  <StepIcon size={24} />
                </div>
                <div className="step-label">{step.label}</div>
              </div>
              {index < steps.length - 1 && (
                <div className={`step-connector ${isComplete ? 'complete' : ''}`}></div>
              )}
            </React.Fragment>
          );
        })}
      </div>

      {/* Input Form */}
      <div className="workflow-form">
        <div className="form-group">
          <label>Research Topic</label>
          <input
            type="text"
            className="form-input"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            placeholder="e.g., AI in Healthcare"
          />
        </div>
        <div className="form-group">
          <label>Keywords (comma-separated)</label>
          <input
            type="text"
            className="form-input"
            value={keywords}
            onChange={(e) => setKeywords(e.target.value)}
            placeholder="e.g., machine learning, diagnosis, medical imaging"
          />
        </div>
      </div>

      {/* Output */}
      <div className="workflow-output-single">
        <div className="io-header">
          <BookOpen size={18} />
          <span>Recommended Papers</span>
        </div>
        <div className="io-output">
          {isSearching ? (
            <div className="processing-state">
              <div className="ai-spinner"></div>
              <p>AI is searching for relevant papers...</p>
            </div>
          ) : papers ? (
            <pre className="summary-text">{papers}</pre>
          ) : (
            <div className="empty-output">
              <Search size={32} className="text-slate-500" />
              <p>Enter your research topic and click "Find Papers"</p>
            </div>
          )}
        </div>
      </div>

      {/* Action Button */}
      <div className="workflow-actions">
        <button
          className="btn-primary"
          onClick={handleSearch}
          disabled={isSearching || !topic.trim()}
        >
          <Search size={18} />
          {isSearching ? 'Searching...' : 'Find Papers'}
        </button>
      </div>

      {/* Learning Tip */}
      <div className="workflow-tip">
        <h4>💡 What You'll Learn:</h4>
        <ul>
          <li>Query arXiv and PubMed APIs</li>
          <li>Use AI to rank paper relevance</li>
          <li>Extract key findings automatically</li>
          <li>Save to Notion/Zotero database</li>
        </ul>
      </div>
    </div>
  );
};
