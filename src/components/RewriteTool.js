import React, { useState } from 'react';
import { rewriteText } from '../api';
import ToolLayout from './ToolLayout';
import ChatBubble from './ChatBubble';

function RewriteTool() {
  const [text, setText] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');

  const handleRewrite = async () => {
    if (!text.trim()) {
      setError('Please enter some text');
      return;
    }

    setLoading(true);
    setError('');
    
    try {
      const rewrittenText = await rewriteText(text);
      setResult(rewrittenText);
    } catch (err) {
      setError(err.message || 'Failed to rewrite. Check your API key.');
      console.error('Rewrite error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ToolLayout
      title="AI Rewrite"
      description="Transform your text into professional content"
    >
      <div className="tool-grid">
        <div className="input-panel glass">
          <h3 className="panel-title">Original Text</h3>
          <textarea
            className="tool-textarea"
            placeholder="Enter text to rewrite..."
            value={text}
            onChange={(e) => setText(e.target.value)}
            rows={10}
          />
          <button 
            className="btn btn-primary btn-large"
            onClick={handleRewrite}
            disabled={loading}
          >
            {loading ? '⏳ Rewriting...' : '✨ Rewrite Text'}
          </button>
          {error && <div className="error-message">{error}</div>}
        </div>

        {result && (
          <div className="results-panel">
            <h3 className="panel-title">Rewritten Version</h3>
            <div className="chat-results">
              <ChatBubble 
                message={result}
                type="ai"
                typing={true}
              />
              <button 
                className="btn btn-secondary"
                onClick={() => navigator.clipboard.writeText(result)}
              >
                📋 Copy to Clipboard
              </button>
            </div>
          </div>
        )}
      </div>
    </ToolLayout>
  );
}

export default RewriteTool;
