import React, { useState, useRef } from 'react';
import { gsap } from 'gsap';
import { analyzeText } from '../api';
import ToolLayout from './ToolLayout';
import StatCard from './StatCard';
import ChatBubble from './ChatBubble';
import { useStagger } from '../hooks/useGSAP';

function TextAnalyzer() {
  const [text, setText] = useState('');
  const [loading, setLoading] = useState(false);
  const [metrics, setMetrics] = useState(null);
  const [aiAnalysis, setAiAnalysis] = useState(null);
  const [error, setError] = useState('');
  
  const resultsRef = useStagger('.stat-card', 0.1);

  const calculateMetrics = (inputText) => {
    if (!inputText.trim()) return null;

    const words = inputText.trim().split(/\s+/).length;
    const sentences = inputText.split(/[.!?]+/).filter(s => s.trim().length > 0).length;
    const avgLength = sentences > 0 ? (words / sentences).toFixed(1) : 0;
    const readingTime = Math.ceil(words / 200);
    
    let readability = 'Easy';
    if (avgLength > 20) readability = 'Hard';
    else if (avgLength > 15) readability = 'Medium';

    return { words, sentences, avgLength, readingTime, readability };
  };

  const handleAnalyze = async () => {
    if (!text.trim()) {
      setError('Please enter some text');
      return;
    }

    setLoading(true);
    setError('');
    
    try {
      const ruleMetrics = calculateMetrics(text);
      setMetrics(ruleMetrics);
      
      const result = await analyzeText(text);
      setAiAnalysis(result);
    } catch (err) {
      setError(err.message || 'Failed to analyze. Check your API key.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <ToolLayout
      title="Text Analyzer"
      description="Get instant insights on readability, tone, and quality"
    >
      <div className="tool-grid">
        <div className="input-panel glass">
          <textarea
            className="tool-textarea"
            placeholder="Paste your text here for AI-powered analysis..."
            value={text}
            onChange={(e) => setText(e.target.value)}
            rows={12}
          />
          <button 
            className="btn btn-primary btn-large"
            onClick={handleAnalyze}
            disabled={loading}
          >
            {loading ? '⏳ Analyzing...' : '🤖 Analyze Text'}
          </button>
          {error && <div className="error-message">{error}</div>}
        </div>

        {metrics && (
          <div className="results-panel">
            <h3 className="panel-title">Quick Metrics</h3>
            <div className="stats-grid" ref={resultsRef}>
              <StatCard icon="📝" value={metrics.words} label="Words" />
              <StatCard icon="📄" value={metrics.sentences} label="Sentences" />
              <StatCard icon="📏" value={metrics.avgLength} label="Avg Length" />
              <StatCard icon="⏱️" value={`${metrics.readingTime} min`} label="Reading Time" />
              <StatCard icon="📖" value={metrics.readability} label="Readability" />
            </div>

            {aiAnalysis && (
              <div className="chat-results">
                <h3 className="panel-title">AI Analysis</h3>
                <ChatBubble 
                  message={`Summary: ${aiAnalysis.summary}`}
                  type="ai"
                  typing={true}
                />
                <ChatBubble 
                  message={`Tone: ${aiAnalysis.tone}`}
                  type="ai"
                />
                <ChatBubble 
                  message={`Quality Score: ${aiAnalysis.score}/100`}
                  type="ai"
                />
                
                {aiAnalysis.suggestions && aiAnalysis.suggestions.length > 0 && (
                  <div className="suggestions-card glass">
                    <h4>💡 Suggestions</h4>
                    <ul>
                      {aiAnalysis.suggestions.map((s, i) => (
                        <li key={i}>{s}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </ToolLayout>
  );
}

export default TextAnalyzer;
