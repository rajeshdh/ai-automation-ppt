import React, { useState } from 'react';
import { Play, Copy, Check, Code2 } from 'lucide-react';
import './APIPlayground.css';

export const APIPlayground = () => {
  const [method, setMethod] = useState('POST');
  const [endpoint, setEndpoint] = useState('/api/webhook');
  const [requestBody, setRequestBody] = useState(`{
  "event": "new_paper",
  "title": "AI Automation in Research",
  "authors": ["Dr. Smith", "Dr. Jones"],
  "keywords": ["automation", "AI", "research"]
}`);
  const [response, setResponse] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  const simulateAPICall = () => {
    setIsLoading(true);
    setResponse(null);

    setTimeout(() => {
      const mockResponse = {
        status: 200,
        message: 'Webhook received successfully',
        data: {
          id: 'wh_' + Math.random().toString(36).substr(2, 9),
          processed_at: new Date().toISOString(),
          workflow_triggered: true,
          actions_executed: [
            'Email notification sent',
            'Data saved to database',
            'AI analysis queued'
          ]
        }
      };
      setResponse(JSON.stringify(mockResponse, null, 2));
      setIsLoading(false);
    }, 1500);
  };

  const copyCurl = () => {
    const curlCommand = `curl -X ${method} https://example.com${endpoint} \\
  -H "Content-Type: application/json" \\
  -d '${requestBody.replace(/\n/g, '')}'`;

    navigator.clipboard.writeText(curlCommand);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="api-playground">
      <div className="api-header">
        <div className="api-title">
          <Code2 size={24} className="title-icon" />
          <h3>API Playground</h3>
        </div>
        <p className="api-subtitle">Test webhook endpoints in real-time</p>
      </div>

      <div className="api-config">
        <div className="method-selector">
          {['GET', 'POST', 'PUT', 'DELETE'].map((m) => (
            <button
              key={m}
              className={`method-btn ${method === m ? 'active' : ''} method-${m.toLowerCase()}`}
              onClick={() => setMethod(m)}
            >
              {m}
            </button>
          ))}
        </div>

        <div className="endpoint-input">
          <span className="base-url">https://example.com</span>
          <input
            type="text"
            value={endpoint}
            onChange={(e) => setEndpoint(e.target.value)}
            className="endpoint-field"
            placeholder="/api/endpoint"
          />
        </div>
      </div>

      <div className="api-panels">
        <div className="panel request-panel">
          <div className="panel-header">
            <span className="panel-title">Request Body</span>
            <button className="copy-btn" onClick={copyCurl} title="Copy as cURL">
              {copied ? <Check size={16} /> : <Copy size={16} />}
              {copied ? 'Copied!' : 'cURL'}
            </button>
          </div>
          <textarea
            className="code-editor"
            value={requestBody}
            onChange={(e) => setRequestBody(e.target.value)}
            spellCheck={false}
          />
        </div>

        <div className="panel response-panel">
          <div className="panel-header">
            <span className="panel-title">Response</span>
            {response && (
              <span className="status-badge status-success">200 OK</span>
            )}
          </div>
          <div className="code-display">
            {isLoading && (
              <div className="loading-state">
                <div className="spinner"></div>
                <span>Sending request...</span>
              </div>
            )}
            {response && !isLoading && (
              <pre className="response-code">{response}</pre>
            )}
            {!response && !isLoading && (
              <div className="empty-state">
                Click "Send Request" to see the response
              </div>
            )}
          </div>
        </div>
      </div>

      <button
        className="send-button"
        onClick={simulateAPICall}
        disabled={isLoading}
      >
        <Play size={20} />
        {isLoading ? 'Sending...' : 'Send Request'}
      </button>
    </div>
  );
};
