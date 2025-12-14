import React from 'react';

export const WorkflowSimulation = () => {
  return (
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
      <p className="mt-10 text-slate-400 text-lg text-center max-w-2xl">
        This simulation shows how data flows through an automation pipeline: a trigger starts the
        process, a filter checks conditions, an AI agent processes the data, and an action completes
        the workflow. Each step is revealed in sequence, just like a real workflow in Zapier or n8n.
      </p>
    </div>
  );
};
