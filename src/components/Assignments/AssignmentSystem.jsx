import React, { useState } from 'react';
import { AssignmentCard } from './AssignmentCard';
import { gradeAssignment } from '../../utils/geminiAPI';
import { Trophy, Mail, CheckCircle } from 'lucide-react';
import './Assignments.css';

const ASSIGNMENTS = [
  {
    id: 'assignment-1',
    number: 1,
    title: 'Email Automation Workflow',
    shortDesc: 'Build an AI-powered email summarizer',
    difficulty: 'beginner',
    duration: '30-45 min',
    points: 20,
    requirements: [
      'Create a workflow that receives emails (webhook or Gmail trigger)',
      'Use Gemini AI to summarize the email content',
      'Extract action items from the email',
      'Send the summary to Slack or save to Notion',
      'Handle errors gracefully',
    ],
    objectives: [
      'Understand trigger-action patterns',
      'Integrate Gemini API',
      'Work with JSON data',
      'Implement error handling',
    ],
    gradingCriteria: [
      { name: 'Workflow completes without errors', points: 5 },
      { name: 'Gemini AI integration works correctly', points: 5 },
      { name: 'Action items are extracted', points: 4 },
      { name: 'Output is sent/saved properly', points: 4 },
      { name: 'Code quality and documentation', points: 2 },
    ],
    hints: [
      'Use the EmailSummarizer component from the workshop as reference',
      'Test with sample emails first',
      'Add console logs for debugging',
      'Check the n8n documentation for node-specific help',
    ],
  },
  {
    id: 'assignment-2',
    number: 2,
    title: 'Research Paper Discovery Bot',
    shortDesc: 'Automate finding relevant research papers',
    difficulty: 'intermediate',
    duration: '45-60 min',
    points: 30,
    requirements: [
      'Query arXiv or PubMed API based on keywords',
      'Filter papers by date (last 30 days)',
      'Use Gemini AI to rank papers by relevance',
      'Extract metadata (title, authors, abstract, citations)',
      'Store results in a database (Notion/Airtable/Google Sheets)',
      'Send a daily digest email',
    ],
    objectives: [
      'Work with external APIs',
      'Implement filtering logic',
      'Use AI for ranking/scoring',
      'Store structured data',
      'Schedule automated runs',
    ],
    gradingCriteria: [
      { name: 'API integration working', points: 6 },
      { name: 'Filtering logic implemented', points: 5 },
      { name: 'AI ranking functional', points: 7 },
      { name: 'Data storage working', points: 6 },
      { name: 'Email digest sent correctly', points: 4 },
      { name: 'Documentation and code quality', points: 2 },
    ],
    hints: [
      'arXiv API: http://export.arxiv.org/api/query',
      'PubMed API: https://www.ncbi.nlm.nih.gov/home/develop/api/',
      'Use the PaperFinder component as a starting point',
      'Test ranking prompts with different topics',
      'Set up scheduling after workflow works manually',
    ],
  },
  {
    id: 'assignment-3',
    number: 3,
    title: 'Complete Research Assistant Pipeline',
    shortDesc: 'End-to-end automated research workflow',
    difficulty: 'advanced',
    duration: '90-120 min',
    points: 50,
    requirements: [
      'Monitor multiple sources (arXiv, PubMed, Google Scholar)',
      'Filter by custom criteria (citations, keywords, authors)',
      'Use Gemini AI to analyze abstracts and extract key findings',
      'Generate a comprehensive summary report',
      'Store in database with proper categorization',
      'Send notifications to team (Slack/Email)',
      'Include error handling and retry logic',
      'Make it run on a schedule (daily/weekly)',
    ],
    objectives: [
      'Build complex multi-step workflows',
      'Implement advanced error handling',
      'Work with multiple APIs',
      'Use loops and branching',
      'Create production-ready automation',
    ],
    gradingCriteria: [
      { name: 'Multi-source data collection', points: 10 },
      { name: 'Advanced filtering logic', points: 8 },
      { name: 'AI analysis and insights', points: 10 },
      { name: 'Report generation quality', points: 8 },
      { name: 'Database integration', points: 6 },
      { name: 'Notifications working', points: 4 },
      { name: 'Error handling and reliability', points: 4 },
    ],
    hints: [
      'Break it into smaller workflows first, then combine',
      'Use the LiteratureReview component as reference',
      'Test each step individually before connecting',
      'Add logging at each major step',
      'Consider rate limits for APIs',
      'Use n8n sub-workflows for better organization',
    ],
  },
];

export const AssignmentSystem = () => {
  const [submissions, setSubmissions] = useState({});
  const [isGrading, setIsGrading] = useState(null);
  const [gradingResults, setGradingResults] = useState({});

  const handleSubmit = async (assignmentId, submissionData) => {
    const assignment = ASSIGNMENTS.find(a => a.id === assignmentId);

    setIsGrading(assignmentId);

    // Save submission
    const submission = {
      ...submissionData,
      assignmentId,
      submittedAt: new Date().toISOString(),
    };

    setSubmissions(prev => ({
      ...prev,
      [assignmentId]: submission,
    }));

    // Grade with AI
    try {
      const feedback = await gradeAssignment(assignment, submission);

      setGradingResults(prev => ({
        ...prev,
        [assignmentId]: {
          feedback,
          gradedAt: new Date().toISOString(),
        },
      }));

      // Simulate email sending
      console.log('Email sent to:', submissionData.studentEmail);
      console.log('Feedback:', feedback);

      alert(`Assignment submitted! ✅\n\nFeedback has been sent to ${submissionData.studentEmail}`);
    } catch (error) {
      console.error('Grading error:', error);
      alert('Submission saved, but grading failed. Instructor will review manually.');
    } finally {
      setIsGrading(null);
    }
  };

  return (
    <div className="assignment-system">
      <div className="assignment-header-section">
        <div className="assignment-hero">
          <Trophy size={48} className="text-yellow-400" />
          <div>
            <h2>Workshop Assignments</h2>
            <p>Complete these to master AI automation workflows</p>
          </div>
        </div>

        <div className="assignment-stats">
          <div className="stat-card">
            <div className="stat-number">{ASSIGNMENTS.length}</div>
            <div className="stat-label">Total Assignments</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">{Object.keys(submissions).length}</div>
            <div className="stat-label">Submitted</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">
              {ASSIGNMENTS.reduce((sum, a) => sum + a.points, 0)}
            </div>
            <div className="stat-label">Total Points</div>
          </div>
        </div>
      </div>

      <div className="assignment-instructions">
        <h3>📚 How to Submit</h3>
        <ol>
          <li><strong>Build your workflow</strong> in n8n or Zapier</li>
          <li><strong>Export as JSON</strong> (n8n: Settings → Export)</li>
          <li><strong>Fill the submission form</strong> for each assignment</li>
          <li><strong>Get instant AI feedback</strong> via email</li>
        </ol>
        <div className="instruction-note">
          <Mail size={18} />
          <span>You'll receive automated feedback within seconds using Gemini AI!</span>
        </div>
      </div>

      <div className="assignments-list">
        {ASSIGNMENTS.map((assignment) => (
          <AssignmentCard
            key={assignment.id}
            assignment={assignment}
            onSubmit={handleSubmit}
            isSubmitted={!!submissions[assignment.id]}
          />
        ))}
      </div>

      {isGrading && (
        <div className="grading-overlay">
          <div className="grading-modal">
            <div className="ai-spinner"></div>
            <h3>AI is grading your submission...</h3>
            <p>This usually takes 5-10 seconds</p>
          </div>
        </div>
      )}
    </div>
  );
};
