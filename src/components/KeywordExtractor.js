import React, { useState } from 'react';
import { extractKeywords } from '../api';
import ToolLayout from './ToolLayout';

function KeywordExtractor() {
  const [text, setText] = useState('');
  const [loading, setLoading] = useState(false);
  const [keywords, setKeywords] = useState(null);
  const [error, setError] = useState('');

  const handleExtract = async () => {
    if (!text.trim()) {
      setError('Please enter some text');
      return;
    }

    setLoading(true);
    setError('');
    
    try {
      const data = await extractKeywords(text);
      // Handle both array and object responses
      if (Array.isArray(data.keywords)) {
        // If keywords is array of objects with 'word' property
        if (data.keywords[0]?.word) {
          setKeywords(data.keywords.map(kw => kw.word));
        } else {
          // If keywords is already array of strings
          setKeywords(data.keywords);
        }
      } else {
        setError('Invalid response format');
      }
    } catch (err) {
      setError(err.message || 'Failed to extract. Check your API key.');
      console.error('Keyword extraction error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ToolLayout
      title="Keyword Extractor"
      description="Extract important keywords from any text"
    >
      <div className="tool-grid">
        <div className="input-panel glass">
          <textarea
            className="tool-textarea"
            placeholder="Paste text to extract keywords..."
            value={text}
            onChange={(e) => setText(e.target.value)}
            rows={12}
          />
          <button 
            className="btn btn-primary btn-large"
            onClick={handleExtract}
            disabled={loading}
          >
            {loading ? '⏳ Extracting...' : '🔑 Extract Keywords'}
          </button>
          {error && <div className="error-message">{error}</div>}
        </div>

        {keywords && (
          <div className="results-panel">
            <h3 className="panel-title">Extracted Keywords</h3>
            <div className="keywords-grid glass">
              {keywords.map((kw, i) => (
                <div key={i} className="keyword-chip-large">
                  {kw}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </ToolLayout>
  );
}

export default KeywordExtractor;
