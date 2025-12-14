import React, { useState, useEffect } from 'react';
import { ArrowRight, FileJson, Settings, CheckCircle2 } from 'lucide-react';
import './DataFlow.css';

export const DataFlow = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [transformedData, setTransformedData] = useState(null);

  const inputData = {
    email_subject: "Research Paper: AI in Healthcare",
    email_body: "Please review the attached paper...",
    from: "researcher@university.edu",
    attachments: ["paper.pdf", "data.csv"]
  };

  const transformSteps = [
    {
      name: 'Extract',
      description: 'Extract key fields',
      output: {
        subject: inputData.email_subject,
        sender: inputData.from,
        files: inputData.attachments
      }
    },
    {
      name: 'Filter',
      description: 'Filter by domain',
      output: {
        is_academic: true,
        domain: 'university.edu',
        priority: 'high'
      }
    },
    {
      name: 'Enrich',
      description: 'Add metadata',
      output: {
        category: 'Research',
        keywords: ['AI', 'Healthcare'],
        timestamp: new Date().toISOString()
      }
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prev) => {
        if (prev < transformSteps.length) {
          if (prev >= 0) {
            setTransformedData(transformSteps[prev].output);
          }
          return prev + 1;
        }
        return 0;
      });
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="dataflow-container">
      <h3 className="dataflow-title">Data Transformation Pipeline</h3>
      <p className="dataflow-subtitle">Watch how data flows and transforms through each step</p>

      <div className="dataflow-pipeline">
        {/* Input Data */}
        <div className="dataflow-box input-box">
          <div className="box-header">
            <FileJson size={20} />
            <span>Input Data</span>
          </div>
          <div className="data-content">
            <pre>{JSON.stringify(inputData, null, 2)}</pre>
          </div>
        </div>

        {/* Arrow */}
        <div className="pipeline-arrow">
          <ArrowRight size={24} className={currentStep > 0 ? 'active' : ''} />
        </div>

        {/* Transform Steps */}
        <div className="transform-steps">
          {transformSteps.map((step, index) => (
            <div
              key={index}
              className={`transform-step ${currentStep > index ? 'active' : ''} ${
                currentStep === index + 1 ? 'processing' : ''
              }`}
            >
              <div className="step-number">{index + 1}</div>
              <div className="step-icon">
                <Settings size={18} className={currentStep === index + 1 ? 'spinning' : ''} />
              </div>
              <div className="step-info">
                <div className="step-name">{step.name}</div>
                <div className="step-desc">{step.description}</div>
              </div>
              {currentStep > index + 1 && (
                <CheckCircle2 size={18} className="step-complete" />
              )}
            </div>
          ))}
        </div>

        {/* Arrow */}
        <div className="pipeline-arrow">
          <ArrowRight size={24} className={currentStep === transformSteps.length ? 'active' : ''} />
        </div>

        {/* Output Data */}
        <div className="dataflow-box output-box">
          <div className="box-header">
            <FileJson size={20} />
            <span>Transformed Data</span>
          </div>
          <div className="data-content">
            {transformedData ? (
              <pre className="transform-in">{JSON.stringify(transformedData, null, 2)}</pre>
            ) : (
              <div className="waiting-state">Waiting for transformation...</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
