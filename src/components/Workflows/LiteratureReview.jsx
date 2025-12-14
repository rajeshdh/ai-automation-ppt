import React, { useState } from 'react';
import { Search, Filter, Sparkles, Database, Mail, CheckCircle, Clock, Play } from 'lucide-react';
import { findRelevantPapers, analyzeText, extractKeyInfo } from '../../utils/geminiAPI';
import './Workflows.css';

export const LiteratureReview = () => {
  const [topic, setTopic] = useState('Deep Learning in Medical Diagnosis');
  const [isRunning, setIsRunning] = useState(false);
  const [currentStep, setCurrentStep] = useState(-1);
  const [completedSteps, setCompletedSteps] = useState([]);
  const [results, setResults] = useState({});

  const workflowSteps = [
    {
      id: 'search',
      icon: Search,
      label: 'Search Papers',
      color: '#60a5fa',
      description: 'Query arXiv API for recent papers'
    },
    {
      id: 'filter',
      icon: Filter,
      label: 'Filter Results',
      color: '#f59e0b',
      description: 'Filter by citations and relevance'
    },
    {
      id: 'analyze',
      icon: Sparkles,
      label: 'AI Analysis',
      color: '#a855f7',
      description: 'Extract key findings with Gemini'
    },
    {
      id: 'extract',
      icon: Database,
      label: 'Extract Data',
      color: '#10b981',
      description: 'Parse authors, dates, citations'
    },
    {
      id: 'summarize',
      icon: Sparkles,
      label: 'Generate Summary',
      color: '#8b5cf6',
      description: 'Create comprehensive summary'
    },
    {
      id: 'notify',
      icon: Mail,
      label: 'Send Report',
      color: '#ef4444',
      description: 'Email summary to research team'
    },
  ];

  const runWorkflow = async () => {
    setIsRunning(true);
    setCurrentStep(-1);
    setCompletedSteps([]);
    setResults({});

    for (let i = 0; i < workflowSteps.length; i++) {
      setCurrentStep(i);
      await new Promise(resolve => setTimeout(resolve, 1500));

      // Simulate step execution
      const step = workflowSteps[i];
      let stepResult = '';

      switch (step.id) {
        case 'search':
          stepResult = '✓ Found 15 papers from arXiv\n✓ Filtered to papers from 2023-2024';
          break;
        case 'filter':
          stepResult = '✓ Filtered by citation count > 50\n✓ Kept 8 highly relevant papers';
          break;
        case 'analyze':
          const analysis = await findRelevantPapers(topic, ['deep learning', 'medical', 'diagnosis']);
          stepResult = analysis.substring(0, 300) + '...';
          break;
        case 'extract':
          stepResult = '✓ Extracted metadata from 8 papers\n✓ Parsed 24 authors\n✓ Total citations: 1,247';
          break;
        case 'summarize':
          stepResult = '✓ Generated 500-word summary\n✓ Created bibliography\n✓ Identified research gaps';
          break;
        case 'notify':
          stepResult = '✓ Email sent to 5 team members\n✓ Notion page created\n✓ Slack notification posted';
          break;
      }

      setResults(prev => ({ ...prev, [step.id]: stepResult }));
      setCompletedSteps(prev => [...prev, i]);
    }

    setCurrentStep(workflowSteps.length);
    setIsRunning(false);
  };

  const resetWorkflow = () => {
    setCurrentStep(-1);
    setCompletedSteps([]);
    setResults({});
  };

  return (
    <div className="workflow-demo big-workflow">
      <div className="workflow-header">
        <div className="workflow-badge workflow-badge-big">
          <Clock size={16} />
          <span>30 min exercise</span>
        </div>
        <h3>Workflow 3: Complete Literature Review Automation</h3>
        <p className="workflow-subtitle">End-to-end AI-powered research paper pipeline</p>
      </div>

      {/* Configuration */}
      <div className="workflow-config">
        <div className="form-group">
          <label>Research Topic</label>
          <input
            type="text"
            className="form-input"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            placeholder="Enter your research topic"
            disabled={isRunning}
          />
        </div>
        <button
          className="btn-primary btn-large"
          onClick={runWorkflow}
          disabled={isRunning || !topic.trim()}
        >
          <Play size={20} />
          {isRunning ? 'Running Workflow...' : 'Start Complete Workflow'}
        </button>
      </div>

      {/* Workflow Visualization */}
      <div className="big-workflow-steps">
        {workflowSteps.map((step, index) => {
          const StepIcon = step.icon;
          const isActive = currentStep === index;
          const isComplete = completedSteps.includes(index);
          const stepResult = results[step.id];

          return (
            <div
              key={step.id}
              className={`big-workflow-step ${isActive ? 'active' : ''} ${isComplete ? 'complete' : ''}`}
            >
              <div className="step-number-badge">{index + 1}</div>

              <div className="step-main">
                <div className="step-icon-wrapper" style={{ '--step-color': step.color }}>
                  <StepIcon size={28} />
                  {isComplete && (
                    <div className="completion-checkmark">
                      <CheckCircle size={16} />
                    </div>
                  )}
                </div>

                <div className="step-details">
                  <h4>{step.label}</h4>
                  <p className="step-description">{step.description}</p>

                  {stepResult && (
                    <div className="step-result">
                      <pre>{stepResult}</pre>
                    </div>
                  )}
                </div>
              </div>

              {isActive && (
                <div className="step-progress-bar">
                  <div className="progress-bar-fill"></div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Completion Status */}
      {currentStep === workflowSteps.length && (
        <div className="workflow-success">
          <div className="success-icon-big">
            <CheckCircle size={48} />
          </div>
          <h3>Literature Review Complete!</h3>
          <p>All 6 steps executed successfully. Report has been sent to your team.</p>
          <button className="btn-secondary" onClick={resetWorkflow}>
            Run Again
          </button>
        </div>
      )}

      {/* Learning Objectives */}
      <div className="workflow-tip big-workflow-tip">
        <h4>🎯 What You'll Build:</h4>
        <div className="learning-grid">
          <div className="learning-item">
            <h5>1. API Integration</h5>
            <p>Connect to arXiv, PubMed, Google Scholar APIs</p>
          </div>
          <div className="learning-item">
            <h5>2. Data Processing</h5>
            <p>Filter, sort, and rank papers by relevance</p>
          </div>
          <div className="learning-item">
            <h5>3. AI Analysis</h5>
            <p>Use Gemini to extract insights and generate summaries</p>
          </div>
          <div className="learning-item">
            <h5>4. Automation</h5>
            <p>Schedule daily/weekly runs and email notifications</p>
          </div>
          <div className="learning-item">
            <h5>5. Database Storage</h5>
            <p>Save to Notion, Airtable, or PostgreSQL</p>
          </div>
          <div className="learning-item">
            <h5>6. Team Collaboration</h5>
            <p>Share findings via Slack, Email, and shared docs</p>
          </div>
        </div>
      </div>
    </div>
  );
};
