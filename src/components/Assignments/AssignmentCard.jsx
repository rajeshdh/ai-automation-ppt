import React, { useState } from 'react';
import { Clock, Target, Award, ChevronDown, ChevronUp, CheckCircle } from 'lucide-react';
import './Assignments.css';

export const AssignmentCard = ({ assignment, onSubmit, isSubmitted }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showSubmitForm, setShowSubmitForm] = useState(false);

  const difficultyColors = {
    beginner: 'text-green-400',
    intermediate: 'text-blue-400',
    advanced: 'text-purple-400',
  };

  return (
    <div className={`assignment-card ${isSubmitted ? 'submitted' : ''}`}>
      <div className="assignment-header" onClick={() => setIsExpanded(!isExpanded)}>
        <div className="assignment-title-section">
          <div className="assignment-number">{assignment.number}</div>
          <div>
            <h3 className="assignment-title">{assignment.title}</h3>
            <p className="assignment-description">{assignment.shortDesc}</p>
          </div>
        </div>

        <div className="assignment-meta">
          <div className="assignment-badge">
            <Clock size={14} />
            <span>{assignment.duration}</span>
          </div>
          <div className={`assignment-badge ${difficultyColors[assignment.difficulty]}`}>
            <Target size={14} />
            <span>{assignment.difficulty}</span>
          </div>
          <div className="assignment-badge">
            <Award size={14} />
            <span>{assignment.points} pts</span>
          </div>
          {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </div>
      </div>

      {isExpanded && (
        <div className="assignment-content">
          <div className="assignment-section">
            <h4>📋 Requirements</h4>
            <ul className="requirements-list">
              {assignment.requirements.map((req, idx) => (
                <li key={idx}>{req}</li>
              ))}
            </ul>
          </div>

          <div className="assignment-section">
            <h4>🎯 Learning Objectives</h4>
            <ul className="objectives-list">
              {assignment.objectives.map((obj, idx) => (
                <li key={idx}>{obj}</li>
              ))}
            </ul>
          </div>

          <div className="assignment-section">
            <h4>📊 Grading Criteria ({assignment.points} points)</h4>
            <div className="grading-criteria">
              {assignment.gradingCriteria.map((criteria, idx) => (
                <div key={idx} className="criteria-item">
                  <span className="criteria-name">{criteria.name}</span>
                  <span className="criteria-points">{criteria.points} pts</span>
                </div>
              ))}
            </div>
          </div>

          <div className="assignment-section">
            <h4>💡 Hints & Resources</h4>
            <ul className="hints-list">
              {assignment.hints.map((hint, idx) => (
                <li key={idx}>{hint}</li>
              ))}
            </ul>
          </div>

          <div className="assignment-actions">
            {isSubmitted ? (
              <div className="submitted-badge">
                <CheckCircle size={20} />
                <span>Submitted! Check your email for feedback</span>
              </div>
            ) : (
              <button
                className="btn-submit-assignment"
                onClick={() => setShowSubmitForm(!showSubmitForm)}
              >
                {showSubmitForm ? 'Cancel' : 'Submit Assignment'}
              </button>
            )}
          </div>

          {showSubmitForm && !isSubmitted && (
            <div className="submission-form-inline">
              <SubmissionFormInline
                assignment={assignment}
                onSubmit={(data) => {
                  onSubmit(assignment.id, data);
                  setShowSubmitForm(false);
                }}
                onCancel={() => setShowSubmitForm(false)}
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

const SubmissionFormInline = ({ assignment, onSubmit, onCancel }) => {
  const [formData, setFormData] = useState({
    studentName: '',
    studentEmail: '',
    workflowJSON: '',
    description: '',
    liveURL: '',
    screenshots: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form className="submission-form" onSubmit={handleSubmit}>
      <h4>Submit Your Work</h4>

      <div className="form-row">
        <div className="form-group">
          <label>Your Name *</label>
          <input
            type="text"
            value={formData.studentName}
            onChange={(e) => setFormData({...formData, studentName: e.target.value})}
            placeholder="Dr. Jane Smith"
            required
          />
        </div>
        <div className="form-group">
          <label>Email *</label>
          <input
            type="email"
            value={formData.studentEmail}
            onChange={(e) => setFormData({...formData, studentEmail: e.target.value})}
            placeholder="jane@university.edu"
            required
          />
        </div>
      </div>

      <div className="form-group">
        <label>Workflow JSON (from n8n export) *</label>
        <textarea
          value={formData.workflowJSON}
          onChange={(e) => setFormData({...formData, workflowJSON: e.target.value})}
          placeholder='{"nodes": [...], "connections": {...}}'
          rows={6}
          required
        />
        <small>Export your workflow from n8n and paste the JSON here</small>
      </div>

      <div className="form-group">
        <label>What does your workflow do? *</label>
        <textarea
          value={formData.description}
          onChange={(e) => setFormData({...formData, description: e.target.value})}
          placeholder="My workflow automatically..."
          rows={4}
          required
        />
      </div>

      <div className="form-group">
        <label>Live Workflow URL (optional)</label>
        <input
          type="url"
          value={formData.liveURL}
          onChange={(e) => setFormData({...formData, liveURL: e.target.value})}
          placeholder="https://your-n8n-instance.com/workflow/123"
        />
      </div>

      <div className="form-group">
        <label>Screenshots/Documentation Links (optional)</label>
        <input
          type="text"
          value={formData.screenshots}
          onChange={(e) => setFormData({...formData, screenshots: e.target.value})}
          placeholder="https://imgur.com/abc123 or Google Drive link"
        />
      </div>

      <div className="form-actions">
        <button type="button" className="btn-cancel" onClick={onCancel}>
          Cancel
        </button>
        <button type="submit" className="btn-submit">
          Submit for Grading
        </button>
      </div>
    </form>
  );
};
