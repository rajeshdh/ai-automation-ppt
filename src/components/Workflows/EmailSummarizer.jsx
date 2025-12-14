import React, { useState } from 'react';
import { Mail, Sparkles, Clock, AlertCircle } from 'lucide-react';
import { summarizeEmail } from '../../utils/geminiAPI';
import './Workflows.css';

export const EmailSummarizer = () => {
  const [emailContent, setEmailContent] = useState(
    `Subject: Research Meeting - Project Update Required

Hi Team,

I hope this email finds you well. We need to schedule a meeting next Tuesday at 2 PM to discuss the progress on our AI healthcare research project.

Please review the attached research proposal and come prepared with your feedback. We also need to finalize the presentation slides for the upcoming conference.

Additionally, the budget approval is still pending with the department head. I've sent a reminder, but we should have a backup plan.

Action items before the meeting:
- Confirm your attendance by Friday
- Submit the revised dataset by Monday morning
- Book the conference room (capacity for 15 people)

Looking forward to hearing from you.

Best regards,
Dr. Smith`
  );
  const [summary, setSummary] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    { icon: Mail, label: 'Receive Email', color: '#60a5fa' },
    { icon: Sparkles, label: 'AI Analysis', color: '#a855f7' },
    { icon: Clock, label: 'Generate Summary', color: '#10b981' },
  ];

  const handleSummarize = async () => {
    setIsProcessing(true);
    setSummary('');
    setCurrentStep(0);

    // Animate through steps
    for (let i = 0; i <= steps.length; i++) {
      setCurrentStep(i);
      await new Promise(resolve => setTimeout(resolve, 800));
    }

    // Call AI
    const result = await summarizeEmail(emailContent);
    setSummary(result);
    setIsProcessing(false);
  };

  const resetDemo = () => {
    setSummary('');
    setCurrentStep(0);
  };

  return (
    <div className="workflow-demo">
      <div className="workflow-header">
        <div className="workflow-badge">
          <Clock size={16} />
          <span>15 min exercise</span>
        </div>
        <h3>Workflow 1: Email Summarizer</h3>
        <p className="workflow-subtitle">Automatically summarize long emails with AI</p>
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

      {/* Input/Output */}
      <div className="workflow-io">
        <div className="io-panel">
          <div className="io-header">
            <Mail size={18} />
            <span>Input: Email Content</span>
          </div>
          <textarea
            className="io-textarea"
            value={emailContent}
            onChange={(e) => setEmailContent(e.target.value)}
            rows={12}
            placeholder="Paste email content here..."
          />
        </div>

        <div className="io-panel">
          <div className="io-header">
            <Sparkles size={18} />
            <span>Output: AI Summary</span>
          </div>
          <div className="io-output">
            {isProcessing ? (
              <div className="processing-state">
                <div className="ai-spinner"></div>
                <p>AI is analyzing your email...</p>
              </div>
            ) : summary ? (
              <pre className="summary-text">{summary}</pre>
            ) : (
              <div className="empty-output">
                <AlertCircle size={32} className="text-slate-500" />
                <p>Click "Summarize Email" to see AI in action</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="workflow-actions">
        <button
          className="btn-primary"
          onClick={handleSummarize}
          disabled={isProcessing || !emailContent.trim()}
        >
          <Sparkles size={18} />
          {isProcessing ? 'Processing...' : 'Summarize Email'}
        </button>
        {summary && (
          <button className="btn-secondary" onClick={resetDemo}>
            Try Another
          </button>
        )}
      </div>

      {/* Learning Tip */}
      <div className="workflow-tip">
        <h4>💡 What You'll Learn:</h4>
        <ul>
          <li>Connect email triggers (Gmail, Outlook)</li>
          <li>Use Gemini AI for text summarization</li>
          <li>Extract action items automatically</li>
          <li>Send summaries to Slack/Notion</li>
        </ul>
      </div>
    </div>
  );
};
