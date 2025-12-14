import React, { useState } from 'react';
import { Mail, Slack, Database, FileSpreadsheet, Calendar, Plus, ArrowRight, Zap } from 'lucide-react';
import './ZapierBuilder.css';

const triggers = [
  { id: 'gmail', name: 'Gmail', icon: Mail, color: '#ea4335', event: 'New Email' },
  { id: 'calendar', name: 'Google Calendar', icon: Calendar, color: '#4285f4', event: 'New Event' },
  { id: 'sheets', name: 'Google Sheets', icon: FileSpreadsheet, color: '#0f9d58', event: 'New Row' },
];

const actions = [
  { id: 'slack', name: 'Slack', icon: Slack, color: '#4a154b', event: 'Send Message' },
  { id: 'database', name: 'Database', icon: Database, color: '#6366f1', event: 'Insert Record' },
  { id: 'sheets', name: 'Google Sheets', icon: FileSpreadsheet, color: '#0f9d58', event: 'Add Row' },
];

export const ZapierBuilder = () => {
  const [selectedTrigger, setSelectedTrigger] = useState(null);
  const [selectedAction, setSelectedAction] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleTriggerSelect = (trigger) => {
    setSelectedTrigger(trigger);
    setSelectedAction(null);
  };

  const handleActionSelect = (action) => {
    setSelectedAction(action);
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 2000);
  };

  const resetZap = () => {
    setSelectedTrigger(null);
    setSelectedAction(null);
    setIsAnimating(false);
  };

  return (
    <div className="zapier-builder">
      <div className="builder-header">
        <Zap size={32} className="zap-icon" />
        <h3>Build Your Automation</h3>
        <p className="builder-subtitle">Connect apps with simple if-this-then-that logic</p>
      </div>

      <div className="builder-content">
        {/* Trigger Section */}
        <div className="builder-section">
          <div className="section-label">
            <span className="label-number">1</span>
            <span className="label-text">When this happens...</span>
          </div>

          <div className="app-selection">
            {!selectedTrigger ? (
              <div className="app-grid">
                {triggers.map((trigger) => {
                  const TriggerIcon = trigger.icon;
                  return (
                    <button
                      key={trigger.id}
                      className="app-card"
                      onClick={() => handleTriggerSelect(trigger)}
                      style={{ '--app-color': trigger.color }}
                    >
                      <div className="app-icon">
                        <TriggerIcon size={28} />
                      </div>
                      <div className="app-name">{trigger.name}</div>
                      <div className="app-event">{trigger.event}</div>
                    </button>
                  );
                })}
              </div>
            ) : (
              <div className="selected-app" style={{ '--app-color': selectedTrigger.color }}>
                <div className="app-icon large">
                  {React.createElement(selectedTrigger.icon, { size: 32 })}
                </div>
                <div className="app-details">
                  <div className="app-name">{selectedTrigger.name}</div>
                  <div className="app-event">{selectedTrigger.event}</div>
                </div>
                <button className="change-btn" onClick={() => setSelectedTrigger(null)}>
                  Change
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Arrow Animation */}
        {selectedTrigger && (
          <div className="flow-arrow">
            <ArrowRight size={32} className="arrow-icon" />
            {isAnimating && <div className="data-pulse"></div>}
          </div>
        )}

        {/* Action Section */}
        {selectedTrigger && (
          <div className="builder-section">
            <div className="section-label">
              <span className="label-number">2</span>
              <span className="label-text">Do this...</span>
            </div>

            <div className="app-selection">
              {!selectedAction ? (
                <div className="app-grid">
                  {actions.map((action) => {
                    const ActionIcon = action.icon;
                    return (
                      <button
                        key={action.id}
                        className="app-card"
                        onClick={() => handleActionSelect(action)}
                        style={{ '--app-color': action.color }}
                      >
                        <div className="app-icon">
                          <ActionIcon size={28} />
                        </div>
                        <div className="app-name">{action.name}</div>
                        <div className="app-event">{action.event}</div>
                      </button>
                    );
                  })}
                </div>
              ) : (
                <div className="selected-app" style={{ '--app-color': selectedAction.color }}>
                  <div className="app-icon large">
                    {React.createElement(selectedAction.icon, { size: 32 })}
                  </div>
                  <div className="app-details">
                    <div className="app-name">{selectedAction.name}</div>
                    <div className="app-event">{selectedAction.event}</div>
                  </div>
                  <button className="change-btn" onClick={() => setSelectedAction(null)}>
                    Change
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Success Message */}
      {selectedTrigger && selectedAction && (
        <div className={`success-message ${isAnimating ? 'show' : ''}`}>
          <div className="success-icon">✓</div>
          <div className="success-text">
            <strong>Automation Created!</strong>
            <p>When {selectedTrigger.event.toLowerCase()} in {selectedTrigger.name},
            it will {selectedAction.event.toLowerCase()} in {selectedAction.name}</p>
          </div>
        </div>
      )}

      {/* Reset Button */}
      {selectedTrigger && (
        <button className="reset-zap-btn" onClick={resetZap}>
          <Plus size={16} style={{ transform: 'rotate(45deg)' }} />
          Start Over
        </button>
      )}
    </div>
  );
};
