import React, { useState } from 'react';
import { reviewResume } from '../api';
import ToolLayout from './ToolLayout';
import ChatBubble from './ChatBubble';
import { useStagger } from '../hooks/useGSAP';
import '../styles/cards.css';

function ResumeReviewer() {
  const [resumeText, setResumeText] = useState('');
  const [loading, setLoading] = useState(false);
  const [review, setReview] = useState(null);
  const [error, setError] = useState('');
  
  const resultsRef = useStagger('.score-card-large', 0.15);

  const handleReview = async () => {
    if (!resumeText.trim()) {
      setError('Please enter your resume text');
      return;
    }

    setLoading(true);
    setError('');
    
    try {
      const result = await reviewResume(resumeText);
      setReview(result);
    } catch (err) {
      setError(err.message || 'Failed to review. Check your API key.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <ToolLayout
      title="Resume Reviewer"
      description="AI-powered resume analysis with ATS scoring"
    >
      <div className="tool-grid">
        <div className="input-panel glass">
          <textarea
            className="tool-textarea"
            placeholder="Paste your resume text here..."
            value={resumeText}
            onChange={(e) => setResumeText(e.target.value)}
            rows={15}
          />
          <button 
            className="btn btn-primary btn-large"
            onClick={handleReview}
            disabled={loading}
          >
            {loading ? '⏳ Reviewing...' : '📄 Review Resume'}
          </button>
          {error && <div className="error-message">{error}</div>}
        </div>

        {review && (
          <div className="results-panel">
            <h3 className="panel-title">Resume Scores</h3>
            <div className="scores-row" ref={resultsRef}>
              <div className="score-card-large glass">
                <div className="score-circle-large">
                  <svg viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="45" className="score-bg" />
                    <circle 
                      cx="50" cy="50" r="45" 
                      className="score-progress"
                      style={{
                        strokeDasharray: `${review.overallScore * 2.83} 283`,
                        stroke: '#3b82f6'
                      }}
                    />
                  </svg>
                  <div className="score-text">{review.overallScore}</div>
                </div>
                <div className="score-label">Overall Score</div>
              </div>

              <div className="score-card-large glass">
                <div className="score-circle-large">
                  <svg viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="45" className="score-bg" />
                    <circle 
                      cx="50" cy="50" r="45" 
                      className="score-progress"
                      style={{
                        strokeDasharray: `${review.atsScore * 2.83} 283`,
                        stroke: '#10b981'
                      }}
                    />
                  </svg>
                  <div className="score-text">{review.atsScore}</div>
                </div>
                <div className="score-label">ATS Score</div>
              </div>

              <div className="score-card-large glass">
                <div className="score-circle-large">
                  <svg viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="45" className="score-bg" />
                    <circle 
                      cx="50" cy="50" r="45" 
                      className="score-progress"
                      style={{
                        strokeDasharray: `${review.keywordScore * 2.83} 283`,
                        stroke: '#8b5cf6'
                      }}
                    />
                  </svg>
                  <div className="score-text">{review.keywordScore}</div>
                </div>
                <div className="score-label">Keyword Match</div>
              </div>
            </div>

            <div className="chat-results">
              {review.strengths && (
                <ChatBubble 
                  message={`Strengths: ${review.strengths.join(', ')}`}
                  type="ai"
                  typing={true}
                />
              )}
              
              {review.improvedSummary && (
                <div className="highlight-card glass">
                  <h4>✨ Improved Summary</h4>
                  <p>{review.improvedSummary}</p>
                </div>
              )}

              {review.suggestedKeywords && (
                <div className="keywords-card glass">
                  <h4>🔑 Suggested Keywords</h4>
                  <div className="keyword-chips">
                    {review.suggestedKeywords.map((kw, i) => (
                      <span key={i} className="keyword-chip">{kw}</span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </ToolLayout>
  );
}

export default ResumeReviewer;
