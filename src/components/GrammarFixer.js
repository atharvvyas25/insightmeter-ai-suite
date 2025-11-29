import React, { useState } from 'react';
import { fixGrammar } from '../api';
import ToolLayout from './ToolLayout';
import ChatBubble from './ChatBubble';

function GrammarFixer() {
  const [text, setText] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');

  const handleFix = async () => {
    if (!text.trim()) {
      setError('Please enter some text');
      return;
    }

    setLoading(true);
    setError('');
    
    try {
      const data = await fixGrammar(text);
      setResult(data);
    } catch (err) {
      setError(err.message || 'Failed to fix grammar. Check your API key.');
      console.error('Grammar fix error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ToolLayout
      title="Grammar Fixer"
      description="Fix grammar and improve writing quality"
    >
      <div className="tool-grid">
        <div className="input-panel glass">
          <h3 className="panel-title">Original Text</h3>
          <textarea
            className="tool-textarea"
            placeholder="Enter text to fix grammar..."
            value={text}
            onChange={(e) => setText(e.target.value)}
            rows={10}
          />
          <button 
            className="btn btn-primary btn-large"
            onClick={handleFix}
            disabled={loading}
          >
            {loading ? '⏳ Fixing...' : '✅ Fix Grammar'}
          </button>
          {error && <div className="error-message">{error}</div>}
        </div>

        {result && (
          <div className="results-panel">
            <h3 className="panel-title">Corrected Text</h3>
            <div className="chat-results">
              <ChatBubble 
                message={result.correctedText}
                type="ai"
                typing={true}
              />
              
              {result.changes && result.changes.length > 0 && (
                <div className="changes-card glass">
                  <h4>📝 Changes Made</h4>
                  <ul>
                    {result.changes.map((change, i) => (
                      <li key={i}>{change}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </ToolLayout>
  );
}

export default GrammarFixer;
