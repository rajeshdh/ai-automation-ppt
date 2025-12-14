import React, { useState, useEffect } from 'react';
import { Zap, Filter, Cpu, Send, Database, Mail, CheckCircle } from 'lucide-react';
import './WorkflowCanvas.css';

const nodeTypes = {
  trigger: { icon: Zap, label: 'Trigger', color: '#f59e0b' },
  filter: { icon: Filter, label: 'Filter', color: '#60a5fa' },
  transform: { icon: Cpu, label: 'Transform', color: '#a855f7' },
  api: { icon: Send, label: 'API Call', color: '#10b981' },
  database: { icon: Database, label: 'Database', color: '#6366f1' },
  email: { icon: Mail, label: 'Email', color: '#ef4444' },
};

export const WorkflowCanvas = ({ autoPlay = true }) => {
  const [activeNode, setActiveNode] = useState(-1);
  const [completedNodes, setCompletedNodes] = useState([]);
  const [flowingData, setFlowingData] = useState([]);

  const workflow = [
    { type: 'trigger', data: 'New Email Received' },
    { type: 'filter', data: 'Check if from research domain' },
    { type: 'transform', data: 'Extract attachments & text' },
    { type: 'api', data: 'Send to AI for analysis' },
    { type: 'database', data: 'Save results to database' },
    { type: 'email', data: 'Send summary notification' },
  ];

  useEffect(() => {
    if (!autoPlay) return;

    const interval = setInterval(() => {
      setActiveNode((prev) => {
        if (prev < workflow.length - 1) {
          const next = prev + 1;
          if (prev >= 0) {
            setCompletedNodes((completed) => [...completed, prev]);
            setFlowingData((flows) => [...flows, prev]);
            setTimeout(() => {
              setFlowingData((flows) => flows.filter((f) => f !== prev));
            }, 800);
          }
          return next;
        }
        return prev;
      });
    }, 1500);

    return () => clearInterval(interval);
  }, [autoPlay, workflow.length]);

  const resetWorkflow = () => {
    setActiveNode(-1);
    setCompletedNodes([]);
    setFlowingData([]);
  };

  return (
    <div className="workflow-canvas-container">
      <div className="workflow-canvas">
        {workflow.map((node, index) => {
          const NodeIcon = nodeTypes[node.type].icon;
          const isActive = activeNode === index;
          const isCompleted = completedNodes.includes(index);

          return (
            <React.Fragment key={index}>
              <div
                className={`canvas-node ${isActive ? 'active' : ''} ${
                  isCompleted ? 'completed' : ''
                }`}
                style={{ '--node-color': nodeTypes[node.type].color }}
              >
                <div className="node-icon">
                  <NodeIcon size={32} />
                  {isCompleted && (
                    <div className="completion-badge">
                      <CheckCircle size={16} />
                    </div>
                  )}
                </div>
                <div className="node-label">{nodeTypes[node.type].label}</div>
                <div className="node-data">{node.data}</div>
                {isActive && <div className="pulse-ring"></div>}
              </div>

              {index < workflow.length - 1 && (
                <div className="connection-line">
                  <div className={`line-fill ${completedNodes.includes(index) ? 'filled' : ''}`}></div>
                  {flowingData.includes(index) && (
                    <div className="data-particle" style={{ '--particle-color': nodeTypes[node.type].color }}></div>
                  )}
                </div>
              )}
            </React.Fragment>
          );
        })}
      </div>

      <button className="reset-button" onClick={resetWorkflow}>
        Reset Workflow
      </button>
    </div>
  );
};
